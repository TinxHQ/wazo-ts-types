// Public types for the Wazo ACL catalog consumed via `@wazo/types/acl`.

export type AclService = { key: string; label: string; acls: string[] };

export type AclCatalog = { apiVersion: string; services: AclService[]; allAcls: string[] };
