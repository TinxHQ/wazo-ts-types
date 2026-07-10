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
  it('merges stack + portal into service groups, dedupes enterprise against community, sorts', () => {
    const stack = {
      'wazo-auth': ['auth.users.read', 'auth.users.create'],
      'wazo-confd': ['confd.lines.read'],
    };
    const portal = {
      // one ACL already in the community set (deduped away), one genuinely new
      'nestbox-confd': ['confd.customers.read', 'auth.users.read'],
    };

    const catalog = buildCatalog(stack, portal, '26.06');

    expect(catalog.apiVersion).toBe('26.06');

    // Services carry human labels and sorted ACLs.
    const auth = catalog.services.find(s => s.key === 'wazo-auth');
    expect(auth?.label).toBe('Authentication');
    expect(auth?.acls).toEqual(['auth.users.create', 'auth.users.read']);

    // Enterprise service keeps only ACLs not already in community.
    const nestbox = catalog.services.find(s => s.key === 'nestbox-confd');
    expect(nestbox?.acls).toEqual(['confd.customers.read']);

    // Flat list is the sorted union of every service's ACLs.
    expect(catalog.allAcls).toEqual([
      'auth.users.create',
      'auth.users.read',
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

  it('excludes a portal ACL that collides with an unrelated stack service (enterprise extends community)', () => {
    // `confd.lines.read` is a community ACL (stack `wazo-confd`). Even though the portal
    // `nestbox-confd` spec also annotates it, it is part of the community baseline, so the enterprise
    // row lists only its genuine additions. The community ACL is never dropped from the catalog — it
    // stays on its community service row and in `allAcls`.
    const stack = { 'wazo-confd': ['confd.lines.read'] };
    const portal = { 'nestbox-confd': ['confd.lines.read', 'confd.customers.read'] };

    const catalog = buildCatalog(stack, portal, '26.06');

    const nestbox = catalog.services.find(s => s.key === 'nestbox-confd');
    expect(nestbox?.acls).toEqual(['confd.customers.read']);
    expect(nestbox?.acls).not.toContain('confd.lines.read');

    // The colliding ACL survives on its community row and in the flat union.
    expect(catalog.services.find(s => s.key === 'wazo-confd')?.acls).toContain('confd.lines.read');
    expect(catalog.allAcls).toContain('confd.lines.read');
  });

  it('falls back to the raw key as label for unknown services', () => {
    const catalog = buildCatalog({ 'mystery-svc': ['mystery.read'] }, {}, '26.06');
    expect(catalog.services.find(s => s.key === 'mystery-svc')?.label).toBe('mystery-svc');
  });
});
