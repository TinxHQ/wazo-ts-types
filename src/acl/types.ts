// Public types for the Wazo ACL catalog consumed via `@wazo/types/acl`.

export type AclService = {
  key: string;
  label: string;
  // For community/stack services, and for portal-only services (e.g. `nestbox-confd`), these are the
  // service's own ACLs. The one exception is a portal service that shares a stack service's key and
  // thus *extends* it (currently `wazo-auth`): its row lists only the enterprise ACLs not already
  // declared by that same stack service, so it is not the service's complete ACL set. Use
  // `AclCatalog.allAcls` for the full sorted union across services.
  acls: string[];
};

export type AclCatalog = { apiVersion: string; services: AclService[]; allAcls: string[] };
