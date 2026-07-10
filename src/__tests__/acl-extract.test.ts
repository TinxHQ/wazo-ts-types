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

  it('falls back to the raw key as label for unknown services', () => {
    const catalog = buildCatalog({ 'mystery-svc': ['mystery.read'] }, {}, '26.06');
    expect(catalog.services.find(s => s.key === 'mystery-svc')?.label).toBe('mystery-svc');
  });
});
