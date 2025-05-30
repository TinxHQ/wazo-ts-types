/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface APIError {
  details?: object;
  message?: string;
  resource?: string;
  timestamp?: number;
}

export type AddGroupPolicyData = any;

export type AddGroupPolicyError = Error;

export type AddPolicyAccessData = any;

export type AddPolicyAccessError = Error;

export type AddUserGroupData = any;

export type AddUserGroupError = Error;

export type AddUserIdpData = any;

export type AddUserIdpError = Error;

export type AddUserPolicyData = any;

export type AddUserPolicyError = Error;

export interface AdminUserEmailList {
  emails?: {
    address?: string;
    confirmed?: boolean;
    main: boolean;
  }[];
}

export interface BackendList {
  data?: string[];
}

export type BackendsListData = BackendList;

export type ConfigCreateData = any;

export type ConfigCreateError = Error;

export type ConfigDeleteData = any;

export type ConfigDeleteError = Error;

export type ConfigListData = ExternalConfig;

export type ConfigListError = Error;

export interface ConfigPatchItem {
  /** Patch operation. Supported operations: `replace`. */
  op?: string;
  /** JSON path to operate on. Supported paths: `/debug`. */
  path?: string;
  /** The new value for the operation. Type of value is dependent of `path` */
  value?: object;
}

export type ConfigUpdateData = any;

export type ConfigUpdateError = Error;

export type ConfirmListData = any;

export type ConfirmListError = Error;

export interface ConfirmListParams {
  /** The UUID of the email */
  emailUuid: string;
  /** The UUID of the token used to confirm the email address */
  token: string;
}

export type ConfirmUpdateData = any;

export type ConfirmUpdateError = Error;

export type CreateGroupsData = GroupResult;

export type CreateGroupsError = Error;

export type CreatePoliciesData = PolicyResult;

export type CreatePoliciesError = Error;

export type CreateSamlBackendConfigData = SAMLBackendConfig;

export type CreateSamlBackendConfigError = Error;

export interface CreateSamlBackendConfigPayload {
  /**
   * The SAML ACS URL configured in the IdP.
   * @format uri
   */
  acs_url: string;
  /** The UUID of the domain to use for the SAML backend. */
  domain_uuid: string;
  /** The name of the SAML Entity. */
  entity_id: string;
  /** The IDP metadata file in XML format. */
  metadata: File;
}

export type CreateTenantData = TenantPostResponse;

export type CreateTenantError = APIError;

export type CreateTokenData = Token;

export type CreateTokenError = Error;

export interface CreateTokenPayload {
  /**
   * The `access_type` indicates whether your application can refresh the tokens when the user is not
   * present at the browser. Valid parameter values are *online*, which is the default value, and *offline*
   *
   * Only one refresh token will be created for a given user with a given `client_id`. The old refresh
   * for `client_id` will be revoken when creating a new one.
   *
   * The *client_id* field is required when using the `access_type` *offline*
   * @default "online"
   */
  access_type?: "online" | "offline";
  /**
   * The `client_id` is used in conjunction with the `access_type` *offline* to known for which application
   * a refresh token has been emitted.
   *
   * *Required when using `access_type: offline`*
   */
  client_id?: string;
  /** The `domain_name` must match a tenant's domain_name entry to find the appropriate ldap configuration. */
  domain_name?: string;
  /**
   * Expiration time in seconds.
   * @max 315360000
   * @default 7200
   */
  expiration?: number;
  /**
   * The `refresh_token` can be used to get a new access token without using the username/password.
   * This is useful for client application that should not store the username and password once the
   * user has logged in a first time.
   */
  refresh_token?: string;
  /**
   * The `saml_session_id` can be used to get a new access token or refresh token instead of using
   * the username/password. It can be created using the `/saml/sso` and `/saml/acs` resources. A token
   * created this way has the same properties as another token created using this API.
   */
  saml_session_id?: string;
}

export type CreateUserData = UserPostResponse;

export type CreateUserError = APIError;

export type DeleteGroupData = any;

export type DeleteGroupError = Error;

export type DeleteLdapBackendConfigData = any;

export type DeleteLdapBackendConfigError = Error;

export type DeletePolicyAccessData = any;

export type DeletePolicyAccessError = Error;

export type DeletePolicyData = any;

export type DeletePolicyError = Error;

export type DeleteRefreshTokensData = any;

export type DeleteRefreshTokensError = APIError;

export type DeleteSamlBackendConfigData = any;

export type DeleteSamlBackendConfigError = Error;

export type DeleteSessionData = any;

export type DeleteSessionError = Error;

export type DeleteTenantData = any;

export type DeleteTenantError = Error;

export type DeleteUserData = any;

export type DeleteUserError = Error;

export type DomainsListData = TenantDomainsList;

export type DomainsListError = Error;

export type EditGroupsData = GroupResult;

export type EditGroupsError = Error;

export type EditPoliciesData = PolicyResult;

export type EditPoliciesError = Error;

export type EmailsConfirmListData = any;

export type EmailsConfirmListError = Error;

export type EmailsUpdateData = any;

export type EmailsUpdateError = Error;

export interface Error {
  reason?: string[];
  status_code?: number;
  timestamp?: string[];
}

export interface ExternalAuth {
  data?: object;
  enabled?: boolean;
  plugin_info?: object;
  /** The external auth type name */
  type?: string;
}

export interface ExternalAuthList {
  /** The number of external auth matching the searched term. */
  filtered: number;
  /** A paginated list of external auth */
  items: ExternalAuth[];
  /** The number of external auth. */
  total: number;
}

export interface ExternalAuthUser {
  /** @format uuid */
  uuid?: string;
}

export interface ExternalAuthUserList {
  /**
   * The number of external auth matching the searched term.
   * @example 3
   */
  filtered: number;
  /**
   * A paginated list of connected external auth users
   * @example [{"user_uuid":"210ef281-4201-4f95-952f-5f8d5211e085"},{"user_uuid":"28e6f253-a19d-458d-8b52-2ba6feb788bc"},{"user_uuid":"e72fe53d-3981-4c51-a488-e06ca94fcbb1"}]
   */
  items: ExternalAuthUser[];
  /**
   * The number of connected external auth users.
   * @example 3
   */
  total: number;
}

export interface ExternalConfig {
  /**
   * Client ID for the given authentication type.
   * Required only for `google` and `microsoft` authentication types.
   * @example "a-client-id"
   */
  client_id?: string;
  /**
   * Client secret for the given authentication type.
   * Required only for `google` and `microsoft` authentication types.
   * @example "a-client-secret"
   */
  client_secret?: string;
  /** (deprecated) The API key to use for Firebase Cloud Messaging (legacy) */
  fcm_api_key?: string;
  /** The sender ID to use for Firebase Cloud Messaging */
  fcm_sender_id?: string;
  /**
   * The service account info file to use for Firebase Cloud Messaging (v1). The
   * content must be a JSON-encoded string.
   */
  fcm_service_account_info?: string;
  /** Public certificate to use for Apple Push Notification Service */
  ios_apn_certificate?: string;
  /** Private key to use for Apple Push Notification Service */
  ios_apn_private?: boolean;
  /** Whether to use sandbox for Apple Push Notification Service */
  use_sandbox?: boolean;
}

export type ExternalListData = ExternalAuthList;

export interface ExternalListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The UUID of the user */
  userUuid: string;
}

export type GetConfigData = any;

export interface GetGroupsResult {
  /** The number of groups matching the searched term. */
  filtered: number;
  /** A paginated list of groups */
  items: GroupResult[];
  /** The number of groups. */
  total: number;
}

export type GetIdpData = IDPList;

export type GetLdapBackendConfigData = LDAPBackendConfig;

export type GetLdapBackendConfigError = Error;

export interface GetPoliciesResult {
  /** A paginated list of policies */
  items: PolicyResult[];
  /** The number of policies matching the searched term */
  total: number;
}

export type GetSamlBackendConfigData = SAMLBackendConfig;

export type GetSamlBackendConfigError = Error;

export interface GetSessionsResult {
  /** The number of sessions matching the searched term. */
  filtered: number;
  /** A paginated list of sessions */
  items: SessionResult[];
  /** The number of sessions. */
  total: number;
}

export interface Group {
  name: string;
  /** @default "<name>" */
  slug?: string;
}

export interface GroupPut {
  name: string;
}

export interface GroupResult {
  name?: string;
  read_only?: boolean;
  slug?: string;
  /** *Deprecated* Please use `read_only` */
  system_managed?: boolean;
  tenant_uuid?: string;
  uuid?: string;
}

export type GroupsDetailData = GroupResult;

export type GroupsDetailError = Error;

export type GroupsListData = GetGroupsResult;

export type GroupsListError = Error;

export interface GroupsListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The UUID of the user */
  userUuid: string;
}

export type HeadStatusData = any;

export type HeadTokenData = any;

export type HeadTokenError = Error;

export interface HeadTokenParams {
  /** The required ACL */
  scope?: string;
  /** A tenant UUID to check against */
  tenant?: string;
  /** The token to query */
  token: string;
}

export interface IDP {
  /** The type of identity provider */
  type?: string;
}

export interface IDPList {
  /** The number of identity provider types matching the searched term */
  filtered?: number;
  /** A paginated list of authentication methods */
  items?: IDP[];
  /** The number of identity provider types */
  total?: number;
}

export interface IDPUser {
  uuid: string;
}

export interface IDPUsers {
  users: IDPUser[];
}

export interface LDAPBackendConfig {
  /**
   * The DN to use to bind the `wazo-auth` service to the LDAP server. If
   * unspecified, `wazo-auth` will not bind with a service user but only with the
   * final user account. For this to work though, your users will need to have the
   * right to read their own information, particularly their email address.
   * @example "CN=wazo-auth,DC=wazo-platform,DC=org"
   */
  bind_dn?: string;
  /** The host or IP address of the LDAP server. */
  host: string;
  /**
   * The port on which to connect to the LDAP server.
   * @example 389
   */
  port: number;
  /**
   * The layer of security to use for the connection.
   * @default ""
   */
  protocol_security?: "" | "tls" | "ldaps";
  /**
   * LDAP protocol version to use
   * @min 2
   * @max 3
   * @default 3
   */
  protocol_version?: number;
  /**
   * Filters for finding a user DN given a service bind is used.
   * Available variables are `username`, `user_login_attribute` and
   * `user_email_attribute`. These variables come from the fields of the
   * same name from the API.
   * @example "{user_login_attribute}={username}"
   */
  search_filters?: string;
  tenant_uuid?: string;
  /**
   * The base DN in which users are located
   * @example "OU=people,DC=wazo-platform,DC=org"
   */
  user_base_dn: string;
  /**
   * The attribute of the email address in the LDAP schema.
   * @example "mail"
   */
  user_email_attribute: string;
  /**
   * The attribute that identifies users. It will be prepended to the
   * `user_base_dn`.
   * @example "uid"
   */
  user_login_attribute: string;
}

export type LDAPBackendConfigEdit = LDAPBackendConfig & {
  /** The password to use to bind the `wazo-auth` service to the LDAP server. */
  bind_password?: string;
};

export type ListGroupsData = GetGroupsResult;

export type ListGroupsError = Error;

export interface ListGroupsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /** The name of the group */
  name?: string;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
  policy_slug?: string;
  /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
  policy_uuid?: string;
  /** Is the group managed by the system? */
  read_only?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The UUID of the user */
  user_uuid?: string;
  /** The UUID of the group */
  uuid?: string;
}

export type ListPoliciesData = GetPoliciesResult;

export type ListPoliciesError = Error;

export interface ListPoliciesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export type ListRefreshTokensData = RefreshTokenList;

export type ListRefreshTokensError = APIError;

export interface ListRefreshTokensParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export type ListSessionsData = GetSessionsResult;

export type ListSessionsError = Error;

export interface ListSessionsParams {
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export type ListUserRefreshTokensData = RefreshTokenList;

export type ListUserRefreshTokensError = APIError;

export interface ListUserRefreshTokensParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The UUID of the user or `me` to refer to the user doing the query */
  userUuidOrMe: string;
}

export interface PasswordChange {
  /** The desired password */
  new_password: string;
  /** The old password */
  old_password: string;
}

export type PasswordUpdateData = any;

export type PasswordUpdateError = Error;

export type PatchConfigData = any;

export type PatchConfigPayload = ConfigPatchItem[];

export type PoliciesDetailData = PolicyResult;

export type PoliciesDetailError = Error;

export type PoliciesListData = GetPoliciesResult;

export type PoliciesListError = Error;

export type PoliciesListFail = Error;

export interface PoliciesListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The UUID of the group */
  groupUuid: string;
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface PoliciesListParams2 {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The UUID of the user */
  userUuid: string;
}

export type PoliciesListResult = GetPoliciesResult;

export interface Policy {
  acl?: string[];
  description?: string;
  name: string;
  /**
   * Should be shared to sub-tenants or not. Cannot be changed after creation
   *
   * When shared is `true`, then all tenants below this policy's tenant
   * will see it as their own policy with the attribute `read_only: true`.
   *
   * Using `shared` attribute will add uniqueness constraints for the slug
   * among all policies' sub-tenants.
   */
  shared?: boolean;
  /** A unique, human readable identifier for this policy */
  slug?: string;
}

export type PolicyResult = Policy & {
  read_only?: boolean;
  uuid?: string;
};

export interface PostPasswordReset {
  /** The desired password */
  password: string;
}

export type ProcessAcsError = Error;

export interface RefreshToken {
  /** The `client_id` that was used to create this refresh token */
  client_id?: string;
  /** The time at which this token was created */
  created_at?: string;
  /** Indicate if that refresh token was created with a mobile session type */
  mobile?: boolean;
  /** The tenant UUID of the user which created this refresh token */
  tenant_uuid?: string;
  /** The UUID of the user which created this refresh token */
  user_uuid?: string;
}

export interface RefreshTokenList {
  /** The number of refresh token matching the searched terms */
  filtered?: number;
  /** A paginated list of refresh tokens */
  items?: RefreshToken[];
  /** The number of refresh tokens for that user */
  total?: number;
}

export type RegisterUserData = UserPostResponse;

export type RegisterUserError = APIError;

export type RemoveGroupPolicyData = any;

export type RemoveGroupPolicyError = Error;

export type RemoveIdpUserData = any;

export type RemoveIdpUserError = Error;

export type RemoveUserGroupData = any;

export type RemoveUserGroupError = Error;

export type RemoveUserPolicyData = any;

export type RemoveUserPolicyError = Error;

export type ResetPasswordChangeData = any;

export interface ResetPasswordChangeParams {
  /** The user's UUID */
  user_uuid: string;
}

export type ResetPasswordData = any;

export interface ResetPasswordParams {
  /** The user's email address */
  email?: string;
  /** The user's login (username or email) */
  login?: string;
  /** The user's username */
  username?: string;
}

export interface SAMLAcsUrlTemplate {
  /**
   * The SAML ACS URL
   * @format uri
   */
  acs_url: string;
}

export interface SAMLBackendConfig {
  /**
   * The SAML ACS URL
   * @format uri
   */
  acs_url: string;
  /** The UUID of the domain to use for the SAML backend. */
  domain_uuid: string;
  /** The name of the SAML Entity Id */
  entity_id: string;
}

export interface SAMLIdpLogoutResponse {
  /** Relay state parameter */
  RelayState: string;
  /** Encoded SAML XML response to logout request */
  SAMLLogoutResponse: string;
}

export interface SAMLIdpResponse {
  /** Relay state parameter */
  RelayState: string;
  /** Encoded SAML XML response */
  SAMLResponse: string;
}

export interface SAMLLoginContext {
  /** The domain name of the tenant */
  domain: string;
  /** Where to redirect the browser once the login succeeded */
  redirect_url: string;
}

export interface SAMLLogoutRequest {
  /** The URL that the client should open to complete the logout. */
  location?: string;
}

export interface SAMLSSOResponse {
  /**
   * The URL that the client should open to complete the authentication
   * request
   */
  location?: string;
  /**
   * The saml_session_id needs to be used to create a wazo-auth token
   * once the SAML authentication has been completed successfully
   */
  saml_session_id?: string;
}

export type SamlAcsUrlTemplateListData = SAMLAcsUrlTemplate;

export type SamlAcsUrlTemplateListError = Error;

export type SamlLogoutData = SAMLLogoutRequest;

export type SamlLogoutResponseData = any;

/**
 * The  metadata file in XML format.
 * @format binary
 */
export type SamlMetadataListData = File;

export type SamlMetadataListError = Error;

export type SamlSsoData = SAMLSSOResponse;

export interface ScopeCheckRequest {
  /** Scopes to check against */
  scopes: string[];
  /**
   * If provided, also checks the token against this tenant
   * @format uuid
   */
  tenant_uuid?: string;
}

export interface ScopeList {
  /** the scopes and their check result */
  scopes?: object[];
}

export type ScopesCheckCreateData = ScopeList;

export type ScopesCheckCreateError = Error;

export interface SessionResult {
  mobile?: boolean;
  tenant_uuid?: string;
  user_uuid?: string;
  uuid?: string;
}

export type SessionsListData = GetSessionsResult;

export type SessionsListError = Error;

export interface SessionsListParams {
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** The UUID of the user */
  userUuid: string;
}

export interface TenantAddress {
  /** The first line of the address */
  line_1?: string;
  /** The second line of the address */
  line_2?: string;
  city?: string;
  country?: string;
  state?: string;
  zip_code?: string;
}

export interface TenantBase {
  address?: TenantAddress;
  /** The contact user's UUID */
  contact?: string;
  /**
   * The `default_authentication_method` defines the authentication method that
   * is going to be used for users using the `authentication_method` `default`.
   * @default "native"
   */
  default_authentication_method?: "native" | "saml" | "ldap";
  /**
   * A list containing human readeable unique domain names, associated with a specific tenant
   * @uniqueItems true
   */
  domain_names?: string[];
  /** The tenant's name */
  name?: string;
  /** The tenant's contact phone number */
  phone?: string;
}

export type TenantCreate = TenantBase & {
  /** A unique, human readeable identifier for this tenant. This field cannot be modified and will be auto-generated if missing. */
  slug?: string;
  /** The tenant's UUID */
  uuid?: string;
};

export interface TenantDomainsList {
  /** A non-paginated list of domains */
  items?: {
    name?: string;
    uuid?: string;
  }[];
  /** The number of domains */
  total?: number;
}

export type TenantEdit = TenantBase;

export interface TenantList {
  /** The number of tenants matching the searched term */
  filtered?: number;
  /** A paginated list of tenants */
  items?: TenantResult[];
  /** The number of tenants */
  total?: number;
}

export interface TenantPostResponse {
  name?: string;
  parent_uuid?: string;
  uuid?: string;
}

export type TenantResult = TenantBase & {
  /** A unique, human readeable identifier for this tenant */
  slug?: string;
  uuid?: string;
};

export type TenantsDetailData = TenantResult;

export type TenantsDetailError = Error;

export type TenantsListData = TenantList;

export interface TenantsListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface Token {
  data?: {
    /** The list of allowed accesses for this token */
    acl?: string[];
    /** The unique identifier retrieved from the backend */
    auth_id?: string;
    expires_at?: string;
    issued_at?: string;
    /** Information owned by wazo-auth about this user */
    metadata?: object;
    session_uuid?: string;
    token?: string;
    utc_expires_at?: string;
    utc_issued_at?: string;
    /**
     * The UUID of the matching wazo-confd user if there is one. This
     * field can be null.
     *
     * This field should NOT be used anymore, the "pbx_user_uuid" in the
     * metadata field is the prefered method to access this information.
     */
    xivo_user_uuid?: string;
    xivo_uuid?: string;
  };
}

export type TokenDeleteData = any;

export type TokenDeleteError = Error;

export type TokenDetailData = Token;

export type TokenDetailError = Error;

export interface TokenDetailParams {
  /** The required ACL */
  scope?: string;
  /** A tenant UUID to check against */
  tenant?: string;
  /** The token to query */
  token: string;
}

export type UpdateLdapBackendConfigData = LDAPBackendConfig;

export type UpdateLdapBackendConfigError = Error;

export type UpdateSamlBackendConfigData = SAMLBackendConfig;

export type UpdateSamlBackendConfigError = Error;

export interface UpdateSamlBackendConfigPayload {
  /**
   * The SAML ACS URL configured in the IdP.
   * @format uri
   */
  acs_url?: string;
  /** The UUID of the domain to use for the SAML backend. */
  domain_uuid?: string;
  /** The name of the SAML Entity. */
  entity_id?: string;
  /** The IDP metadata file in XML format. */
  metadata?: File;
}

export type UpdateTenantData = TenantPostResponse;

export type UpdateTenantError = APIError | Error;

export type UpdateUserData = UserPostResponse;

export type UpdateUserError = APIError | Error;

export type UpdateUsersIdpData = any;

export type UpdateUsersIdpError = Error;

export interface UserBase {
  /**
   * The authentication method allowed for this user. Using "default" will use the tenant's default_authentication_method value for this user.
   * @default "default"
   */
  authentication_method?: "default" | "native" | "ldap" | "saml";
  enabled?: boolean;
  /** The user's firstname */
  firstname?: string;
  /** The user's lastname */
  lastname?: string;
  /** @default "user" */
  purpose?: "user" | "internal" | "external_api";
  /** The username that will identify that new username */
  username?: string;
}

export type UserCreate = UserBase & {
  /** The main email address of the new username */
  email_address?: string;
  /** The password of the newly created username */
  password?: string;
  /** The user's UUID */
  uuid?: string;
};

export type UserDeleteSessionData = any;

export type UserDeleteSessionError = Error;

export type UserEdit = UserBase;

export interface UserEmail {
  address?: string;
  confirmed?: boolean;
  main?: boolean;
}

export interface UserEmailList {
  emails?: {
    address?: string;
    main: boolean;
  }[];
}

export interface UserList {
  /** The number of users matching the searched term */
  filtered?: number;
  /** A paginated list of users */
  items?: UserResult[];
  /** The number of users */
  total?: number;
}

export interface UserPostResponse {
  /**
   * The authentication method allowed for this user. Using "default" will use the tenant's default_authentication_method value for this user.
   * @default "default"
   */
  authentication_method?: "default" | "native" | "ldap" | "saml";
  emails?: UserEmail[];
  purpose?: "user" | "internal" | "external_api";
  username?: string;
  uuid?: string;
}

export interface UserRegister {
  /** The main email address of the new username */
  email_address: string;
  /** The user's firstname */
  firstname?: string;
  /** The user's lastname */
  lastname?: string;
  /** The password of the newly created username */
  password: string;
  /** The username that will identify that new username */
  username: string;
}

export interface UserResult {
  emails?: UserEmail[];
  enabled?: boolean;
  firstname?: string;
  lastname?: string;
  purpose?: "user" | "internal" | "external_api";
  tenant_uuid?: string;
  username?: string;
  uuid?: string;
}

export type UsersDetailData = UserResult;

export type UsersDetailError = Error;

export type UsersEmailsUpdateData = any;

export type UsersEmailsUpdateError = Error;

export type UsersListData = ExternalAuthUserList;

export type UsersListError = Error;

export type UsersListFail = Error;

export type UsersListOutput = UserList;

export interface UsersListParams {
  /** External auth type name */
  authType: string;
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface UsersListParams2 {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The UUID of the group */
  groupUuid: string;
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface UsersListParams4 {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The slug of the policy that the user must have. This includes indirect associations (user in group has policy). */
  has_policy_slug?: string;
  /** The UUID of the policy that the user must have. This includes indirect associations (user in group has policy). */
  has_policy_uuid?: string;
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
  policy_slug?: string;
  /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
  policy_uuid?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export type UsersListResult = UserList;

export namespace Admin {
  /**
   * @description **Required ACL**: `auth.admin.users.{user_uuid}.emails.update` Update all of the users email address at the same time. If an existing address is missing from the list, it will be removed. An empty list will remove all addresses. If addresses are defined, one and only one address should be main. If the confirmed field is set to none or ommited the existing value will be reused if it exists, otherwise the address will not be confirmed.
   * @tags admin, users, emails
   * @name UsersEmailsUpdate
   * @summary Update email addresses
   * @request PUT:/admin/users/{user_uuid}/emails
   * @secure
   */
  export namespace UsersEmailsUpdate {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AdminUserEmailList;
    export type RequestHeaders = {};
    export type ResponseBody = UsersEmailsUpdateData;
  }
}

export namespace Backends {
  /**
   * @description Retrieves the list of activated backends
   * @tags backends
   * @name BackendsList
   * @request GET:/backends
   * @secure
   */
  export namespace BackendsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BackendsListData;
  }

  /**
   * @description **Required ACL:** `auth.backends.ldap.delete`
   * @tags backends
   * @name DeleteLdapBackendConfig
   * @summary Delete current tenant's LDAP backend configuration
   * @request DELETE:/backends/ldap
   * @secure
   */
  export namespace DeleteLdapBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteLdapBackendConfigData;
  }

  /**
 * @description **Required ACL:** `auth.backends.ldap.read`
 * @tags backends
 * @name GetLdapBackendConfig
 * @summary Get current tenant's LDAP backend configuration. If there is no configuration,
all the fields will be `null`.
 * @request GET:/backends/ldap
 * @secure
*/
  export namespace GetLdapBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetLdapBackendConfigData;
  }

  /**
   * @description **Required ACL:** `auth.backends.ldap.update
   * @tags backends
   * @name UpdateLdapBackendConfig
   * @summary Update current tenant's LDAP backend configuration
   * @request PUT:/backends/ldap
   * @secure
   */
  export namespace UpdateLdapBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LDAPBackendConfigEdit;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateLdapBackendConfigData;
  }

  /**
   * @description **Required ACL:** `auth.backends.saml.delete`
   * @tags backends
   * @name DeleteSamlBackendConfig
   * @summary Delete current tenant's SAML backend configuration
   * @request DELETE:/backends/saml
   * @secure
   */
  export namespace DeleteSamlBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteSamlBackendConfigData;
  }

  /**
 * @description **Required ACL:** `auth.backends.saml.read`
 * @tags backends
 * @name GetSamlBackendConfig
 * @summary Get current tenant's SAML backend configuration. If there is no configuration,
all the fields will be `null`.
 * @request GET:/backends/saml
 * @secure
*/
  export namespace GetSamlBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetSamlBackendConfigData;
  }

  /**
   * @description **Required ACL:** `auth.backends.saml.create
   * @tags backends
   * @name CreateSamlBackendConfig
   * @summary Returns the created SAML configuration.
   * @request POST:/backends/saml
   * @secure
   */
  export namespace CreateSamlBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateSamlBackendConfigPayload;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateSamlBackendConfigData;
  }

  /**
   * @description **Required ACL:** `auth.backends.saml.update
   * @tags backends
   * @name UpdateSamlBackendConfig
   * @summary Updates current tenant's SAML backend configuration
   * @request PUT:/backends/saml
   * @secure
   */
  export namespace UpdateSamlBackendConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateSamlBackendConfigPayload;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateSamlBackendConfigData;
  }

  /**
   * @description **Required ACL:** `auth.backends.saml.read` This endpoint provides the tenant Assertion Consumer Service URL template. The `{{STACK_URL}}` must be replaced by the public URL of the stack, wazo-confd ingress can be used to retrieve previously configured data.
   * @tags backends
   * @name SamlAcsUrlTemplateList
   * @summary Get tenant's ACS URL template to use in the IDP configuration
   * @request GET:/backends/saml/acs_url_template
   */
  export namespace SamlAcsUrlTemplateList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SamlAcsUrlTemplateListData;
  }

  /**
   * @description **Required ACL:** `auth.backends.saml.read` This endpoint allow to download tenant metadata file.
   * @tags backends
   * @name SamlMetadataList
   * @summary Download the tenant's SAML metadata XML file.
   * @request GET:/backends/saml/metadata
   */
  export namespace SamlMetadataList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SamlMetadataListData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `auth.config.read`
   * @tags config
   * @name GetConfig
   * @summary Show the current configuration
   * @request GET:/config
   */
  export namespace GetConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConfigData;
  }

  /**
   * @description **Required ACL:** `auth.config.update` Changes are not persistent across service restart.
   * @tags config
   * @name PatchConfig
   * @summary Update the current configuration.
   * @request PATCH:/config
   */
  export namespace PatchConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PatchConfigPayload;
    export type RequestHeaders = {};
    export type ResponseBody = PatchConfigData;
  }
}

export namespace Emails {
  /**
   * @description **Required ACL**: `auth.emails.{email_uuid}.confirm.update` The token should be in the URL instead of being in the HTTP headers
   * @tags emails
   * @name ConfirmList
   * @summary Confirm an email address
   * @request GET:/emails/{email_uuid}/confirm
   */
  export namespace ConfirmList {
    export type RequestParams = {
      /** The UUID of the email */
      emailUuid: string;
    };
    export type RequestQuery = {
      /** The UUID of the token used to confirm the email address */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmListData;
  }

  /**
   * @description **Required ACL**: `auth.emails.{email_uuid}.confirm.update`
   * @tags emails
   * @name ConfirmUpdate
   * @summary Confirm an email address
   * @request PUT:/emails/{email_uuid}/confirm
   * @secure
   */
  export namespace ConfirmUpdate {
    export type RequestParams = {
      /** The UUID of the email */
      emailUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmUpdateData;
  }
}

export namespace External {
  /**
   * @description **Required ACL**: `auth.{auth_type}.external.config.delete`
   * @tags external
   * @name ConfigDelete
   * @summary Delete the client id and client secret
   * @request DELETE:/external/{auth_type}/config
   */
  export namespace ConfigDelete {
    export type RequestParams = {
      /** External auth type name */
      authType: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConfigDeleteData;
  }

  /**
   * @description **Required ACL**: `auth.{auth_type}.external.config.read`
   * @tags external
   * @name ConfigList
   * @summary Retrieve the client id and client secret
   * @request GET:/external/{auth_type}/config
   */
  export namespace ConfigList {
    export type RequestParams = {
      /** External auth type name */
      authType: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConfigListData;
  }

  /**
   * @description **Required ACL**: `auth.{auth_type}.external.config.create`
   * @tags external
   * @name ConfigCreate
   * @summary Add configuration for the given auth_type
   * @request POST:/external/{auth_type}/config
   */
  export namespace ConfigCreate {
    export type RequestParams = {
      /** External auth type name */
      authType: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ExternalConfig;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConfigCreateData;
  }

  /**
   * @description **Required ACL**: `auth.{auth_type}.external.config.update`
   * @tags external
   * @name ConfigUpdate
   * @summary Update configuration for the given auth_type
   * @request PUT:/external/{auth_type}/config
   */
  export namespace ConfigUpdate {
    export type RequestParams = {
      /** External auth type name */
      authType: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ExternalConfig;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConfigUpdateData;
  }

  /**
   * @description **Required ACL**: `auth.{auth_type}.external.users`
   * @tags external
   * @name UsersList
   * @summary Retrieves the list of connected users to this external source
   * @request GET:/external/{auth_type}/users
   */
  export namespace UsersList {
    export type RequestParams = {
      /** External auth type name */
      authType: string;
    };
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UsersListData;
  }
}

export namespace Groups {
  /**
   * @description **Required ACL:** `auth.groups.read`
   * @tags groups
   * @name ListGroups
   * @summary List groups
   * @request GET:/groups
   * @secure
   */
  export namespace ListGroups {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /** The name of the group */
      name?: string;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
      policy_slug?: string;
      /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
      policy_uuid?: string;
      /** Is the group managed by the system? */
      read_only?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
      /** The UUID of the user */
      user_uuid?: string;
      /** The UUID of the group */
      uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListGroupsData;
  }

  /**
   * @description **Required ACL:** `auth.groups.create`
   * @tags groups
   * @name CreateGroups
   * @summary Create a new group
   * @request POST:/groups
   * @secure
   */
  export namespace CreateGroups {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Group;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateGroupsData;
  }

  /**
   * @description **Required ACL**: `auth.groups.{group_uuid}.delete`
   * @tags groups
   * @name DeleteGroup
   * @summary Delete a group
   * @request DELETE:/groups/{group_uuid}
   * @secure
   */
  export namespace DeleteGroup {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteGroupData;
  }

  /**
   * @description **Required ACL**: `auth.groups.{group_uuid}.read
   * @tags groups
   * @name GroupsDetail
   * @summary Retrieves the details of a group
   * @request GET:/groups/{group_uuid}
   * @secure
   */
  export namespace GroupsDetail {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GroupsDetailData;
  }

  /**
   * @description **Required ACL:** `auth.groups.{group_uuid}.update`
   * @tags groups
   * @name EditGroups
   * @summary Modify a group
   * @request PUT:/groups/{group_uuid}
   * @secure
   */
  export namespace EditGroups {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GroupPut;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = EditGroupsData;
  }

  /**
   * @description **Required ACL**: `auth.groups.{group_uuid}.policies.read`
   * @tags groups
   * @name PoliciesList
   * @summary Retrieves the list of policies associated to a group
   * @request GET:/groups/{group_uuid}/policies
   * @secure
   */
  export namespace PoliciesList {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PoliciesListData;
  }

  /**
   * @description **Required ACL:** `auth.groups.{group_uuid}.policies.{policy_uuid}.delete`
   * @tags groups, policies
   * @name RemoveGroupPolicy
   * @summary Dissociate a policy from a group
   * @request DELETE:/groups/{group_uuid}/policies/{policy_uuid}
   * @secure
   */
  export namespace RemoveGroupPolicy {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveGroupPolicyData;
  }

  /**
   * @description **Required ACL:** `auth.groups.{group_uuid}.policies.{policy_uuid}.create`
   * @tags groups, policies
   * @name AddGroupPolicy
   * @summary Associate a group to a policy
   * @request PUT:/groups/{group_uuid}/policies/{policy_uuid}
   * @secure
   */
  export namespace AddGroupPolicy {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AddGroupPolicyData;
  }

  /**
   * @description **Required ACL**: `auth.groups.{group_uuid}.users.read`
   * @tags groups
   * @name UsersList
   * @summary Retrieves the list of users associated to a group
   * @request GET:/groups/{group_uuid}/users
   * @secure
   */
  export namespace UsersList {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersListResult;
  }

  /**
   * @description **Required ACL:** `auth.groups.{group_uuid}.users.{user_uuid}.delete`
   * @tags groups, users
   * @name RemoveUserGroup
   * @summary Dissociate a user from a group
   * @request DELETE:/groups/{group_uuid}/users/{user_uuid}
   * @secure
   */
  export namespace RemoveUserGroup {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveUserGroupData;
  }

  /**
   * @description **Required ACL:** `auth.groups.{group_uuid}.users.{user_uuid}.create`
   * @tags groups, users
   * @name AddUserGroup
   * @summary Associate a group to a user
   * @request PUT:/groups/{group_uuid}/users/{user_uuid}
   * @secure
   */
  export namespace AddUserGroup {
    export type RequestParams = {
      /** The UUID of the group */
      groupUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AddUserGroupData;
  }
}

export namespace Idp {
  /**
   * @description Returns a list of valid identity provider types that are available
   * @tags idp
   * @name GetIdp
   * @summary List identity provider types
   * @request GET:/idp
   * @secure
   */
  export namespace GetIdp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetIdpData;
  }

  /**
   * No description
   * @tags idp
   * @name UpdateUsersIdp
   * @summary Associate multiple users to a IDP
   * @request PUT:/idp/{idp_type}/users
   */
  export namespace UpdateUsersIdp {
    export type RequestParams = {
      /** The type of IDP */
      idpType: string;
    };
    export type RequestQuery = {};
    export type RequestBody = IDPUsers;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateUsersIdpData;
  }

  /**
   * @description **Required ACL:** `auth.idp.{idp_type}.users.{user_uuid}.delete`
   * @tags users, idp
   * @name RemoveIdpUser
   * @summary Dissocuate a user from an IDP
   * @request DELETE:/idp/{idp_type}/users/{user_uuid}
   * @secure
   */
  export namespace RemoveIdpUser {
    export type RequestParams = {
      /** The type of IDP */
      idpType: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveIdpUserData;
  }

  /**
   * @description **Required ACL:** `auth.idp.{idp_type}.users.{user_uuid}.create`
   * @tags users, idp
   * @name AddUserIdp
   * @summary Associate user to a IDP
   * @request PUT:/idp/{idp_type}/users/{user_uuid}
   * @secure
   */
  export namespace AddUserIdp {
    export type RequestParams = {
      /** The type of IDP */
      idpType: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AddUserIdpData;
  }
}

export namespace Policies {
  /**
   * @description **Required ACL:** `auth.policies.read`
   * @tags policies
   * @name ListPolicies
   * @summary List ACL policies
   * @request GET:/policies
   * @secure
   */
  export namespace ListPolicies {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListPoliciesData;
  }

  /**
   * @description **Required ACL:** `auth.policies.create` Create a new ACL policy set that can be associated to a user, an administrator, a service or a backend. An ACL policy is a list of ACL or ACL templates that is used to create a token
   * @tags policies
   * @name CreatePolicies
   * @summary Create a new ACL policy
   * @request POST:/policies
   * @secure
   */
  export namespace CreatePolicies {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Policy;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreatePoliciesData;
  }

  /**
   * @description **Required ACL**: `auth.policies.{policy_uuid}.delete`
   * @tags policies
   * @name DeletePolicy
   * @summary Delete a policy
   * @request DELETE:/policies/{policy_uuid}
   * @secure
   */
  export namespace DeletePolicy {
    export type RequestParams = {
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeletePolicyData;
  }

  /**
   * @description **Required ACL**: `auth.policies.{policy_uuid}.read
   * @tags policies
   * @name PoliciesDetail
   * @summary Retrieves the details of a policy
   * @request GET:/policies/{policy_uuid}
   * @secure
   */
  export namespace PoliciesDetail {
    export type RequestParams = {
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PoliciesDetailData;
  }

  /**
   * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
   * @tags policies
   * @name EditPolicies
   * @summary Modify an ACL policy
   * @request PUT:/policies/{policy_uuid}
   * @secure
   */
  export namespace EditPolicies {
    export type RequestParams = {
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Policy;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = EditPoliciesData;
  }

  /**
   * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
   * @tags policies
   * @name DeletePolicyAccess
   * @summary Dissociate an access from a policy
   * @request DELETE:/policies/{policy_uuid}/acl/{access}
   * @secure
   */
  export namespace DeletePolicyAccess {
    export type RequestParams = {
      /** The access to add */
      access: string;
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeletePolicyAccessData;
  }

  /**
   * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
   * @tags policies
   * @name AddPolicyAccess
   * @summary Associate an access to a policy
   * @request PUT:/policies/{policy_uuid}/acl/{access}
   * @secure
   */
  export namespace AddPolicyAccess {
    export type RequestParams = {
      /** The access to add */
      access: string;
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = AddPolicyAccessData;
  }
}

export namespace Saml {
  /**
 * @description Receives the SAML response created by the identity provider. The internal cache allows to retrieve the context and redirect the browser to process the login.
 * @tags token, saml
 * @name ProcessAcs
 * @summary Processes the IdP response and redirects to requested URL, even if the authentication
failed to allow further processing by the frontend application.
 * @request POST:/saml/acs
*/
  export namespace ProcessAcs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SAMLIdpResponse;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Returns the SAML logout request and redirect location, which is the IdP. The client must use the indicated location and forward the logout request to the IdP and forward the response to the wazo-auth. Wazo-auth will process the answer and confirm to the requester the logout was processed or notify an error.
   * @tags token, saml
   * @name SamlLogout
   * @summary Creates and returns data required to process the logout by the IdP
   * @request GET:/saml/logout
   * @secure
   */
  export namespace SamlLogout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SamlLogoutData;
  }

  /**
   * @description Processes the IdP response to logout request and confirms the logout by a redirect to the `redirect_url` provided during the login phase with logout confirmation un the URL's query param.
   * @tags token, saml
   * @name SamlLogoutResponse
   * @summary Handles the logout response from the IDP
   * @request GET:/saml/sls
   */
  export namespace SamlLogoutResponse {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SAMLIdpLogoutResponse;
    export type RequestHeaders = {};
    export type ResponseBody = SamlLogoutResponseData;
  }

  /**
   * @description Returns the information (SAML request and redirect location) that the client needs to use to authenticate using the configured identity provider. The redirection does not happen automatically, the client has to use the `location` provided in the body of the response.
   * @tags token, saml
   * @name SamlSso
   * @summary Creates and returns context and redirects to IdP login page
   * @request POST:/saml/sso
   */
  export namespace SamlSso {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SAMLLoginContext;
    export type RequestHeaders = {};
    export type ResponseBody = SamlSsoData;
  }
}

export namespace Sessions {
  /**
   * @description **Required ACL:** `auth.sessions.read`
   * @tags sessions
   * @name ListSessions
   * @summary List sessions
   * @request GET:/sessions
   * @secure
   */
  export namespace ListSessions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListSessionsData;
  }

  /**
   * @description **Required ACL**: `auth.sessions.{session_uuid}.delete`
   * @tags sessions
   * @name DeleteSession
   * @summary Delete a session
   * @request DELETE:/sessions/{session_uuid}
   * @secure
   */
  export namespace DeleteSession {
    export type RequestParams = {
      /** The UUID of the session */
      sessionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteSessionData;
  }
}

export namespace Status {
  /**
   * @description This endpoint is not authenticated
   * @tags status
   * @name HeadStatus
   * @summary Check if wazo-auth is OK
   * @request HEAD:/status
   */
  export namespace HeadStatus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadStatusData;
  }
}

export namespace Tenants {
  /**
   * @description **Required ACL**: `auth.tenants.read` Tenants can be filtered by domain name using the `domain_name` query string to do an exact match on one of its domain names or using the `search` query string for a fuzzy match.
   * @tags tenants
   * @name TenantsList
   * @summary Retrieves the list of tenants
   * @request GET:/tenants
   * @secure
   */
  export namespace TenantsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = TenantsListData;
  }

  /**
   * @description **Required ACL:** `auth.tenants.create`
   * @tags tenants
   * @name CreateTenant
   * @summary Creates a new tenant
   * @request POST:/tenants
   * @secure
   */
  export namespace CreateTenant {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TenantCreate;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateTenantData;
  }

  /**
   * @description **Required ACL**: `auth.tenants.{tenant_uuid}.delete`
   * @tags tenants
   * @name DeleteTenant
   * @summary Delete a tenant
   * @request DELETE:/tenants/{tenant_uuid}
   * @secure
   */
  export namespace DeleteTenant {
    export type RequestParams = {
      /** The UUID of the tenant */
      tenantUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteTenantData;
  }

  /**
   * @description **Required ACL**: `auth.tenants.{tenant_uuid}.read`
   * @tags tenants
   * @name TenantsDetail
   * @summary Retrieves the details of a tenant
   * @request GET:/tenants/{tenant_uuid}
   * @secure
   */
  export namespace TenantsDetail {
    export type RequestParams = {
      /** The UUID of the tenant */
      tenantUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantsDetailData;
  }

  /**
   * @description **Required ACL:** `auth.tenants.{tenant_uuid}.update`
   * @tags tenants
   * @name UpdateTenant
   * @summary Modify a tenant
   * @request PUT:/tenants/{tenant_uuid}
   * @secure
   */
  export namespace UpdateTenant {
    export type RequestParams = {
      /** The UUID of the tenant */
      tenantUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TenantEdit;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateTenantData;
  }

  /**
   * @description **Required ACL**: `auth.tenants.{tenant_uuid}.domains.read`
   * @tags tenants
   * @name DomainsList
   * @summary Retrieves the domains names with uuids of a tenant
   * @request GET:/tenants/{tenant_uuid}/domains
   * @secure
   */
  export namespace DomainsList {
    export type RequestParams = {
      /** The UUID of the tenant */
      tenantUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DomainsListData;
  }
}

export namespace Token {
  /**
   * @description Creates a valid token for the supplied username and password combination or refresh_token using the configured authentication method. The user's email address can be used instead of the username if the email address is confirmed. Creating  a token with the `access_type` *offline* will also create a refresh token which can be used to create a new token without specifying the username and password. The username/password and refresh_token method of authentication are mutually exclusive For more details about the backends, see http://documentation.wazo.community/en/latest/system/wazo-auth/stock_plugins.html#backends-plugins
   * @tags token
   * @name CreateToken
   * @summary Creates a token
   * @request POST:/token
   * @secure
   */
  export namespace CreateToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTokenPayload;
    export type RequestHeaders = {
      /** The session type */
      "Wazo-Session-Type"?: "mobile" | "desktop";
    };
    export type ResponseBody = CreateTokenData;
  }

  /**
   * No description
   * @tags token
   * @name TokenDelete
   * @summary Revoke a token
   * @request DELETE:/token/{token}
   * @secure
   */
  export namespace TokenDelete {
    export type RequestParams = {
      /** The token to query */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenDeleteData;
  }

  /**
   * @description Checks if a token is valid in a given context and return the token data.  If a scope is given, the token must have the necessary permissions for the ACL. If a tenant is given, the token must have that tenant in its sub-tenant subtree.
   * @tags token
   * @name TokenDetail
   * @summary Retrieves token data
   * @request GET:/token/{token}
   * @secure
   */
  export namespace TokenDetail {
    export type RequestParams = {
      /** The token to query */
      token: string;
    };
    export type RequestQuery = {
      /** The required ACL */
      scope?: string;
      /** A tenant UUID to check against */
      tenant?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenDetailData;
  }

  /**
   * @description Checks if a token is valid in a given context.  If a scope is given, the token must have the necessary permissions for the ACL. If a tenant is given, the token must have that tenant in its sub-tenant subtree.
   * @tags token
   * @name HeadToken
   * @summary Checks if a token is valid
   * @request HEAD:/token/{token}
   * @secure
   */
  export namespace HeadToken {
    export type RequestParams = {
      /** The token to query */
      token: string;
    };
    export type RequestQuery = {
      /** The required ACL */
      scope?: string;
      /** A tenant UUID to check against */
      tenant?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadTokenData;
  }

  /**
   * @description Checks if a token is valid for given scopes.
   * @tags token
   * @name ScopesCheckCreate
   * @summary Check a token against scopes
   * @request POST:/token/{token}/scopes/check
   * @secure
   */
  export namespace ScopesCheckCreate {
    export type RequestParams = {
      /** The token to query */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ScopeCheckRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ScopesCheckCreateData;
  }
}

export namespace Tokens {
  /**
   * @description **Required ACL**: `auth.tokens.read` Finds all refresh tokens and return the list. Access tokens are not included in the result.
   * @tags token
   * @name ListRefreshTokens
   * @summary Retrieve a list of refresh tokens that have been created on the system
   * @request GET:/tokens
   * @secure
   */
  export namespace ListRefreshTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListRefreshTokensData;
  }
}

export namespace Users {
  /**
   * @description **Required ACL**: `auth.users.read`
   * @tags users
   * @name UsersList
   * @summary Retrieves the list of users
   * @request GET:/users
   * @secure
   */
  export namespace UsersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The slug of the policy that the user must have. This includes indirect associations (user in group has policy). */
      has_policy_slug?: string;
      /** The UUID of the policy that the user must have. This includes indirect associations (user in group has policy). */
      has_policy_uuid?: string;
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
      policy_slug?: string;
      /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
      policy_uuid?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UsersListOutput;
  }

  /**
   * @description **Required ACL**: `auth.users.create` Creates a new user that can be used to retrieve a token. The UUID can be used to link this user the a wazo-confd user by using the same UUID
   * @tags users
   * @name CreateUser
   * @summary Create a user
   * @request POST:/users
   */
  export namespace CreateUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserCreate;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateUserData;
  }

  /**
   * @description This action will send an email containing instructions to set a new password. The login or username or email address should be supplied as query string to find the user
   * @tags users
   * @name ResetPassword
   * @summary Reset the user password
   * @request GET:/users/password/reset
   */
  export namespace ResetPassword {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The user's email address */
      email?: string;
      /** The user's login (username or email) */
      login?: string;
      /** The user's username */
      username?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPasswordData;
  }

  /**
   * @description **Required ACL**: `auth.users.password.reset.{user_uuid}.create` Set a new password for the user after the user used the GET on the reset URL
   * @tags users
   * @name ResetPasswordChange
   * @summary Set the user password
   * @request POST:/users/password/reset
   * @secure
   */
  export namespace ResetPasswordChange {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The user's UUID */
      user_uuid: string;
    };
    export type RequestBody = PostPasswordReset;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPasswordChangeData;
  }

  /**
   * @description Creates a new user that can be used to retrieve a token.
   * @tags users
   * @name RegisterUser
   * @summary Create a user
   * @request POST:/users/register
   */
  export namespace RegisterUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserRegister;
    export type RequestHeaders = {};
    export type ResponseBody = RegisterUserData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.tokens.read` Finds all of a user's refresh token and return the list. Access tokens are not included in the result. Doing a query with the `user_uuid` `me` will result in the current user's token being used.
   * @tags token, users
   * @name ListUserRefreshTokens
   * @summary Retrieve a user's refresh token list
   * @request GET:/users/{user_uuid_or_me}/tokens
   * @secure
   */
  export namespace ListUserRefreshTokens {
    export type RequestParams = {
      /** The UUID of the user or `me` to refer to the user doing the query */
      userUuidOrMe: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListUserRefreshTokensData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.tokens.{client_id}.delete` Remove a given refresh token. This only prevent this refresh token from creating new access tokens. Any tokens that are currently issued are still usable and should be revoked if needed.
   * @tags token, users
   * @name DeleteRefreshTokens
   * @summary Delete a user's refresh token
   * @request DELETE:/users/{user_uuid_or_me}/tokens/{client_id}
   * @secure
   */
  export namespace DeleteRefreshTokens {
    export type RequestParams = {
      /** The client_id of the refresh token to revoke */
      clientId: string;
      /** The UUID of the user or `me` to refer to the user doing the query */
      userUuidOrMe: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteRefreshTokensData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.delete`
   * @tags users
   * @name DeleteUser
   * @summary Delete a user
   * @request DELETE:/users/{user_uuid}
   * @secure
   */
  export namespace DeleteUser {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteUserData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.read`
   * @tags users
   * @name UsersDetail
   * @summary Retrieves the details of a user
   * @request GET:/users/{user_uuid}
   * @secure
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersDetailData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.update`
   * @tags users
   * @name UpdateUser
   * @summary Update an existing user
   * @request PUT:/users/{user_uuid}
   */
  export namespace UpdateUser {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserEdit;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateUserData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.emails.update` Update all of the users email address at the same time. If an existing address is missing from the list, it will be removed. An empty list will remove all addresses. If addresses are defined, one and only one address should be main. All new address are created unconfirmed.
   * @tags users, emails
   * @name EmailsUpdate
   * @summary Update email addresses
   * @request PUT:/users/{user_uuid}/emails
   * @secure
   */
  export namespace EmailsUpdate {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserEmailList;
    export type RequestHeaders = {};
    export type ResponseBody = EmailsUpdateData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.emails.{email_uuid}.confirm.read`
   * @tags users, emails
   * @name EmailsConfirmList
   * @summary Ask a new confirmation email
   * @request GET:/users/{user_uuid}/emails/{email_uuid}/confirm
   * @secure
   */
  export namespace EmailsConfirmList {
    export type RequestParams = {
      /** The UUID of the email */
      emailUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmailsConfirmListData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.external.read` This list should not contain any sensible information
   * @tags users, external
   * @name ExternalList
   * @summary Retrieves the list of the users external auth data
   * @request GET:/users/{user_uuid}/external
   * @secure
   */
  export namespace ExternalList {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalListData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.groups.read`
   * @tags users
   * @name GroupsList
   * @summary Retrieves the list of groups associated to a user
   * @request GET:/users/{user_uuid}/groups
   * @secure
   */
  export namespace GroupsList {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GroupsListData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.password.update`
   * @tags users
   * @name PasswordUpdate
   * @summary Change the user's password
   * @request PUT:/users/{user_uuid}/password
   * @secure
   */
  export namespace PasswordUpdate {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PasswordChange;
    export type RequestHeaders = {};
    export type ResponseBody = PasswordUpdateData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.policies.read`
   * @tags users, policies
   * @name PoliciesList
   * @summary Retrieves the list of policies associated to a user
   * @request GET:/users/{user_uuid}/policies
   * @secure
   */
  export namespace PoliciesList {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PoliciesListResult;
  }

  /**
   * @description **Required ACL:** `auth.users.{user_uuid}.policies.{policy_uuid}.delete`
   * @tags users, policies
   * @name RemoveUserPolicy
   * @summary Dissociate a policy from a user
   * @request DELETE:/users/{user_uuid}/policies/{policy_uuid}
   * @secure
   */
  export namespace RemoveUserPolicy {
    export type RequestParams = {
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveUserPolicyData;
  }

  /**
   * @description **Required ACL:** `auth.users.{user_uuid}.policies.{policy_uuid}.create`
   * @tags users, policies
   * @name AddUserPolicy
   * @summary Associate a policy to a user
   * @request PUT:/users/{user_uuid}/policies/{policy_uuid}
   * @secure
   */
  export namespace AddUserPolicy {
    export type RequestParams = {
      /** The UUID or slug of the policy. The slug is unique within a tenant, hence the tenant must be specified. */
      policyUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AddUserPolicyData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.sessions.read`
   * @tags users, sessions
   * @name SessionsList
   * @summary Retrieves the list of sessions associated to a user
   * @request GET:/users/{user_uuid}/sessions
   * @secure
   */
  export namespace SessionsList {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SessionsListData;
  }

  /**
   * @description **Required ACL**: `auth.users.{user_uuid}.sessions.{session_uuid}.delete`
   * @tags users, sessions
   * @name UserDeleteSession
   * @summary Delete a session
   * @request DELETE:/users/{user_uuid}/sessions/{session_uuid}
   * @secure
   */
  export namespace UserDeleteSession {
    export type RequestParams = {
      /** The UUID of the session */
      sessionUuid: string;
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDeleteSessionData;
  }
}
