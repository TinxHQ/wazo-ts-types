import { ALL_ACLS, WAZO_ACL_CATALOG } from '../acl';

describe('@wazo/types/acl catalog', () => {
  it('exposes a populated catalog', () => {
    expect(typeof WAZO_ACL_CATALOG.apiVersion).toBe('string');
    expect(WAZO_ACL_CATALOG.services.length).toBeGreaterThan(0);
    expect(WAZO_ACL_CATALOG.allAcls.length).toBeGreaterThan(0);
  });

  it('every service carries a key, label and sorted ACLs', () => {
    for (const service of WAZO_ACL_CATALOG.services) {
      expect(service.key).toBeTruthy();
      expect(service.label).toBeTruthy();
      expect(service.acls.length).toBeGreaterThan(0);
      expect([...service.acls].sort()).toEqual(service.acls);
    }
  });

  it('ALL_ACLS is the sorted union of every service ACL', () => {
    const union = Array.from(new Set(WAZO_ACL_CATALOG.services.flatMap(s => s.acls))).sort();
    expect(ALL_ACLS).toEqual(union);
  });
});
