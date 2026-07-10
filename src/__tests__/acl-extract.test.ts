import { buildCatalog, extractAcls } from '../acl/acl-extract';

describe('extractAcls', () => {
  it('pulls ACLs from both annotation forms', () => {
    const text = [
      "      description: '**Required ACL:** `auth.backends.ldap.read`'",
      "      description: '**Required ACL**: `auth.admin.users.{user_uuid}.emails.update`'",
    ].join('\n');

    expect(extractAcls(text)).toEqual(['auth.admin.users.{user_uuid}.emails.update', 'auth.backends.ldap.read']);
  });

  it('ignores lines without the annotation and dedupes', () => {
    const text = [
      '      summary: List users',
      "      description: '**Required ACL:** `auth.users.read`'",
      "      description: '**Required ACL:** `auth.users.read`'",
      '      type: object',
    ].join('\n');

    expect(extractAcls(text)).toEqual(['auth.users.read']);
  });

  it('skips malformed annotations that are missing the closing backtick', () => {
    // Mirrors the reference generator: no closing backtick → not captured.
    const text = "      description: '**Required ACL:** `auth.backends.ldap.update'";

    expect(extractAcls(text)).toEqual([]);
  });
});

describe('buildCatalog', () => {
  it('merges stack + portal into service groups with human labels and sorts', () => {
    const stack = {
      'wazo-auth': ['auth.users.read', 'auth.users.create'],
      'wazo-confd': ['confd.lines.read'],
    };
    const portal = {
      'nestbox-confd': ['confd.customers.read', 'confd.customers.create'],
    };

    const catalog = buildCatalog(stack, portal, '26.06');

    expect(catalog.apiVersion).toBe('26.06');

    // Services carry human labels and sorted ACLs.
    const auth = catalog.services.find(s => s.key === 'wazo-auth');
    expect(auth?.label).toBe('Authentication');
    expect(auth?.acls).toEqual(['auth.users.create', 'auth.users.read']);

    // A portal-only service keeps all its ACLs (it is a distinct service, not an extension).
    const nestbox = catalog.services.find(s => s.key === 'nestbox-confd');
    expect(nestbox?.label).toBe('Reseller configuration');
    expect(nestbox?.acls).toEqual(['confd.customers.create', 'confd.customers.read']);

    // Flat list is the sorted union of every service's ACLs.
    expect(catalog.allAcls).toEqual([
      'auth.users.create',
      'auth.users.read',
      'confd.customers.create',
      'confd.customers.read',
      'confd.lines.read',
    ]);
  });

  it('merges a portal spec into the existing stack row when they share a canonical key', () => {
    // `authPortal` and the stack `auth` spec both key on `wazo-auth`; the portal-only ACL must land
    // in the single `wazo-auth` row rather than a duplicate service entry.
    const stack = { 'wazo-auth': ['auth.users.read'] };
    const portal = { 'wazo-auth': ['auth.tenants.admin', 'auth.users.read'] };

    const catalog = buildCatalog(stack, portal, '26.06');

    const authRows = catalog.services.filter(s => s.key === 'wazo-auth');
    expect(authRows).toHaveLength(1);
    expect(authRows[0].acls).toEqual(['auth.tenants.admin', 'auth.users.read']);
  });

  it('dedupes a shared-key portal service against its OWN stack ACLs only, not the whole community', () => {
    // `wazo-auth` exists on both layers, so its portal row keeps only what the stack `wazo-auth` spec
    // does not already declare. A portal-auth ACL that collides with an UNRELATED stack service
    // (`wazo-confd`) is still a real auth ACL and must survive — dedupe is per-service, not community-wide.
    const stack = { 'wazo-auth': ['auth.users.read'], 'wazo-confd': ['auth.shared.read'] };
    const portal = { 'wazo-auth': ['auth.users.read', 'auth.shared.read', 'auth.tenants.admin'] };

    const catalog = buildCatalog(stack, portal, '26.06');

    const auth = catalog.services.find(s => s.key === 'wazo-auth');
    // `auth.users.read` deduped (same service); `auth.shared.read` kept despite the confd collision.
    expect(auth?.acls).toEqual(['auth.shared.read', 'auth.tenants.admin', 'auth.users.read']);
  });

  it('keeps a portal-only service ACL even when its string collides with an unrelated stack service', () => {
    // `nestbox-confd` is a distinct service from the stack `wazo-confd` — a shared ACL string is a
    // coincidence, not evidence they are the same service. Cross-service dedupe must NOT drop the
    // portal service's real ACL: it stays on the `nestbox-confd` row and in `allAcls`.
    const stack = { 'wazo-confd': ['confd.lines.read'] };
    const portal = { 'nestbox-confd': ['confd.lines.read', 'confd.customers.read'] };

    const catalog = buildCatalog(stack, portal, '26.06');

    const nestbox = catalog.services.find(s => s.key === 'nestbox-confd');
    expect(nestbox?.acls).toEqual(['confd.customers.read', 'confd.lines.read']);

    // The stack service keeps it too; both distinct services list it.
    expect(catalog.services.find(s => s.key === 'wazo-confd')?.acls).toContain('confd.lines.read');
    expect(catalog.allAcls).toContain('confd.lines.read');
  });

  it('falls back to the raw key as label for unknown services', () => {
    const catalog = buildCatalog({ 'mystery-svc': ['mystery.read'] }, {}, '26.06');
    expect(catalog.services.find(s => s.key === 'mystery-svc')?.label).toBe('mystery-svc');
  });
});
