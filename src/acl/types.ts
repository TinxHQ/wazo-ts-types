// Public types for the Wazo ACL catalog consumed via `@wazo/types/acl`.

export type AclService = {
  key: string;
  label: string;
  // For community/stack services these are the service's ACLs. For portal/enterprise-only services
  // (e.g. `nestbox-confd`) these are the enterprise ACLs that *extend* the community baseline — i.e.
  // the ACLs not already present in any community ACL — and are therefore not necessarily the
  // service's complete ACL set. Use `AclCatalog.allAcls` for the full sorted union across services.
  acls: string[];
};

export type AclCatalog = { apiVersion: string; services: AclService[]; allAcls: string[] };
