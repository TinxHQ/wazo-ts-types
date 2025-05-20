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

export interface ConfigPatchItem {
  /** Patch operation. Supported operations: `replace`. */
  op?: string;
  /** JSON path to operate on. Supported paths: `/debug`. */
  path?: string;
  /** The new value for the operation. Type of value is dependent of `path` */
  value?: object;
}

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

export interface GetGroupsResult {
  /** The number of groups matching the searched term. */
  filtered: number;
  /** A paginated list of groups */
  items: GroupResult[];
  /** The number of groups. */
  total: number;
}

export interface GetPoliciesResult {
  /** A paginated list of policies */
  items: PolicyResult[];
  /** The number of policies matching the searched term */
  total: number;
}

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

export interface PasswordChange {
  /** The desired password */
  new_password: string;
  /** The old password */
  old_password: string;
}

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

export interface SessionResult {
  mobile?: boolean;
  tenant_uuid?: string;
  user_uuid?: string;
  uuid?: string;
}

export interface TenantAddress {
  city?: string;
  country?: string;
  /** The first line of the address */
  line_1?: string;
  /** The second line of the address */
  line_2?: string;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/0.1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title wazo-auth
 * @version 0.1
 * @baseUrl /0.1
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Wazo's authentication service
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description **Required ACL**: `auth.admin.users.{user_uuid}.emails.update` Update all of the users email address at the same time. If an existing address is missing from the list, it will be removed. An empty list will remove all addresses. If addresses are defined, one and only one address should be main. If the confirmed field is set to none or ommited the existing value will be reused if it exists, otherwise the address will not be confirmed.
     *
     * @tags admin, users, emails
     * @name UsersEmailsUpdate
     * @summary Update email addresses
     * @request PUT:/admin/users/{user_uuid}/emails
     * @secure
     */
    usersEmailsUpdate: (
      userUuid: string,
      body: AdminUserEmailList,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/admin/users/${userUuid}/emails`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  backends = {
    /**
     * @description Retrieves the list of activated backends
     *
     * @tags backends
     * @name BackendsList
     * @request GET:/backends
     * @secure
     */
    backendsList: (params: RequestParams = {}) =>
      this.request<BackendList, any>({
        path: `/backends`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.ldap.delete`
     *
     * @tags backends
     * @name DeleteLdapBackendConfig
     * @summary Delete current tenant's LDAP backend configuration
     * @request DELETE:/backends/ldap
     * @secure
     */
    deleteLdapBackendConfig: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/backends/ldap`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description **Required ACL:** `auth.backends.ldap.read`
 *
 * @tags backends
 * @name GetLdapBackendConfig
 * @summary Get current tenant's LDAP backend configuration. If there is no configuration,
all the fields will be `null`.
 * @request GET:/backends/ldap
 * @secure
 */
    getLdapBackendConfig: (params: RequestParams = {}) =>
      this.request<LDAPBackendConfig, Error>({
        path: `/backends/ldap`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.ldap.update
     *
     * @tags backends
     * @name UpdateLdapBackendConfig
     * @summary Update current tenant's LDAP backend configuration
     * @request PUT:/backends/ldap
     * @secure
     */
    updateLdapBackendConfig: (
      body: LDAPBackendConfigEdit,
      params: RequestParams = {},
    ) =>
      this.request<LDAPBackendConfig, Error>({
        path: `/backends/ldap`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.saml.delete`
     *
     * @tags backends
     * @name DeleteSamlBackendConfig
     * @summary Delete current tenant's SAML backend configuration
     * @request DELETE:/backends/saml
     * @secure
     */
    deleteSamlBackendConfig: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/backends/saml`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description **Required ACL:** `auth.backends.saml.read`
 *
 * @tags backends
 * @name GetSamlBackendConfig
 * @summary Get current tenant's SAML backend configuration. If there is no configuration,
all the fields will be `null`.
 * @request GET:/backends/saml
 * @secure
 */
    getSamlBackendConfig: (params: RequestParams = {}) =>
      this.request<SAMLBackendConfig, Error>({
        path: `/backends/saml`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.saml.create
     *
     * @tags backends
     * @name CreateSamlBackendConfig
     * @summary Returns the created SAML configuration.
     * @request POST:/backends/saml
     * @secure
     */
    createSamlBackendConfig: (
      data: {
        /** The IDP metadata file in XML format. */
        metadata: File;
        /** The UUID of the domain to use for the SAML backend. */
        domain_uuid: string;
        /** The name of the SAML Entity. */
        entity_id: string;
        /**
         * The SAML ACS URL configured in the IdP.
         * @format uri
         */
        acs_url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SAMLBackendConfig, Error>({
        path: `/backends/saml`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.saml.update
     *
     * @tags backends
     * @name UpdateSamlBackendConfig
     * @summary Updates current tenant's SAML backend configuration
     * @request PUT:/backends/saml
     * @secure
     */
    updateSamlBackendConfig: (
      data: {
        /** The IDP metadata file in XML format. */
        metadata?: File;
        /** The UUID of the domain to use for the SAML backend. */
        domain_uuid?: string;
        /** The name of the SAML Entity. */
        entity_id?: string;
        /**
         * The SAML ACS URL configured in the IdP.
         * @format uri
         */
        acs_url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SAMLBackendConfig, Error>({
        path: `/backends/saml`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.saml.read` This endpoint provides the tenant Assertion Consumer Service URL template. The `{{STACK_URL}}` must be replaced by the public URL of the stack, wazo-confd ingress can be used to retrieve previously configured data.
     *
     * @tags backends
     * @name SamlAcsUrlTemplateList
     * @summary Get tenant's ACS URL template to use in the IDP configuration
     * @request GET:/backends/saml/acs_url_template
     */
    samlAcsUrlTemplateList: (params: RequestParams = {}) =>
      this.request<SAMLAcsUrlTemplate, Error>({
        path: `/backends/saml/acs_url_template`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.backends.saml.read` This endpoint allow to download tenant metadata file.
     *
     * @tags backends
     * @name SamlMetadataList
     * @summary Download the tenant's SAML metadata XML file.
     * @request GET:/backends/saml/metadata
     */
    samlMetadataList: (params: RequestParams = {}) =>
      this.request<File, Error>({
        path: `/backends/saml/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `auth.config.read`
     *
     * @tags config
     * @name GetConfig
     * @summary Show the current configuration
     * @request GET:/config
     */
    getConfig: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/config`,
        method: "GET",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.config.update` Changes are not persistent across service restart.
     *
     * @tags config
     * @name PatchConfig
     * @summary Update the current configuration.
     * @request PATCH:/config
     */
    patchConfig: (ConfigPatch: ConfigPatchItem[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/config`,
        method: "PATCH",
        body: ConfigPatch,
        type: ContentType.Json,
        ...params,
      }),
  };
  emails = {
    /**
     * @description **Required ACL**: `auth.emails.{email_uuid}.confirm.update` The token should be in the URL instead of being in the HTTP headers
     *
     * @tags emails
     * @name ConfirmList
     * @summary Confirm an email address
     * @request GET:/emails/{email_uuid}/confirm
     */
    confirmList: (
      emailUuid: string,
      query: {
        /** The UUID of the token used to confirm the email address */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/emails/${emailUuid}/confirm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.emails.{email_uuid}.confirm.update`
     *
     * @tags emails
     * @name ConfirmUpdate
     * @summary Confirm an email address
     * @request PUT:/emails/{email_uuid}/confirm
     * @secure
     */
    confirmUpdate: (emailUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/emails/${emailUuid}/confirm`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  external = {
    /**
     * @description **Required ACL**: `auth.{auth_type}.external.config.delete`
     *
     * @tags external
     * @name ConfigDelete
     * @summary Delete the client id and client secret
     * @request DELETE:/external/{auth_type}/config
     */
    configDelete: (authType: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/external/${authType}/config`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.{auth_type}.external.config.read`
     *
     * @tags external
     * @name ConfigList
     * @summary Retrieve the client id and client secret
     * @request GET:/external/{auth_type}/config
     */
    configList: (authType: string, params: RequestParams = {}) =>
      this.request<ExternalConfig, Error>({
        path: `/external/${authType}/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.{auth_type}.external.config.create`
     *
     * @tags external
     * @name ConfigCreate
     * @summary Add configuration for the given auth_type
     * @request POST:/external/{auth_type}/config
     */
    configCreate: (
      authType: string,
      config: ExternalConfig,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/external/${authType}/config`,
        method: "POST",
        body: config,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.{auth_type}.external.config.update`
     *
     * @tags external
     * @name ConfigUpdate
     * @summary Update configuration for the given auth_type
     * @request PUT:/external/{auth_type}/config
     */
    configUpdate: (
      authType: string,
      config: ExternalConfig,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/external/${authType}/config`,
        method: "PUT",
        body: config,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.{auth_type}.external.users`
     *
     * @tags external
     * @name UsersList
     * @summary Retrieves the list of connected users to this external source
     * @request GET:/external/{auth_type}/users
     */
    usersList: (
      authType: string,
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExternalAuthUserList, Error>({
        path: `/external/${authType}/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  groups = {
    /**
     * @description **Required ACL:** `auth.groups.read`
     *
     * @tags groups
     * @name ListGroups
     * @summary List groups
     * @request GET:/groups
     * @secure
     */
    listGroups: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /** The UUID of the group */
        uuid?: string;
        /** The name of the group */
        name?: string;
        /** The UUID of the user */
        user_uuid?: string;
        /** Is the group managed by the system? */
        read_only?: string;
        /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
        policy_slug?: string;
        /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
        policy_uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetGroupsResult, Error>({
        path: `/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.create`
     *
     * @tags groups
     * @name CreateGroups
     * @summary Create a new group
     * @request POST:/groups
     * @secure
     */
    createGroups: (body: Group, params: RequestParams = {}) =>
      this.request<GroupResult, Error>({
        path: `/groups`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.groups.{group_uuid}.delete`
     *
     * @tags groups
     * @name DeleteGroup
     * @summary Delete a group
     * @request DELETE:/groups/{group_uuid}
     * @secure
     */
    deleteGroup: (groupUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/groups/${groupUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.groups.{group_uuid}.read
     *
     * @tags groups
     * @name GroupsDetail
     * @summary Retrieves the details of a group
     * @request GET:/groups/{group_uuid}
     * @secure
     */
    groupsDetail: (groupUuid: string, params: RequestParams = {}) =>
      this.request<GroupResult, Error>({
        path: `/groups/${groupUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.{group_uuid}.update`
     *
     * @tags groups
     * @name EditGroups
     * @summary Modify a group
     * @request PUT:/groups/{group_uuid}
     * @secure
     */
    editGroups: (
      groupUuid: string,
      body: GroupPut,
      params: RequestParams = {},
    ) =>
      this.request<GroupResult, Error>({
        path: `/groups/${groupUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.groups.{group_uuid}.policies.read`
     *
     * @tags groups
     * @name PoliciesList
     * @summary Retrieves the list of policies associated to a group
     * @request GET:/groups/{group_uuid}/policies
     * @secure
     */
    policiesList: (
      groupUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPoliciesResult, Error>({
        path: `/groups/${groupUuid}/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.{group_uuid}.policies.{policy_uuid}.delete`
     *
     * @tags groups, policies
     * @name RemoveGroupPolicy
     * @summary Dissociate a policy from a group
     * @request DELETE:/groups/{group_uuid}/policies/{policy_uuid}
     * @secure
     */
    removeGroupPolicy: (
      groupUuid: string,
      policyUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/groups/${groupUuid}/policies/${policyUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.{group_uuid}.policies.{policy_uuid}.create`
     *
     * @tags groups, policies
     * @name AddGroupPolicy
     * @summary Associate a group to a policy
     * @request PUT:/groups/{group_uuid}/policies/{policy_uuid}
     * @secure
     */
    addGroupPolicy: (
      groupUuid: string,
      policyUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/groups/${groupUuid}/policies/${policyUuid}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.groups.{group_uuid}.users.read`
     *
     * @tags groups
     * @name UsersList
     * @summary Retrieves the list of users associated to a group
     * @request GET:/groups/{group_uuid}/users
     * @secure
     */
    usersList: (
      groupUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserList, Error>({
        path: `/groups/${groupUuid}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.{group_uuid}.users.{user_uuid}.delete`
     *
     * @tags groups, users
     * @name RemoveUserGroup
     * @summary Dissociate a user from a group
     * @request DELETE:/groups/{group_uuid}/users/{user_uuid}
     * @secure
     */
    removeUserGroup: (
      groupUuid: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/groups/${groupUuid}/users/${userUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.groups.{group_uuid}.users.{user_uuid}.create`
     *
     * @tags groups, users
     * @name AddUserGroup
     * @summary Associate a group to a user
     * @request PUT:/groups/{group_uuid}/users/{user_uuid}
     * @secure
     */
    addUserGroup: (
      groupUuid: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/groups/${groupUuid}/users/${userUuid}`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  idp = {
    /**
     * @description Returns a list of valid identity provider types that are available
     *
     * @tags idp
     * @name GetIdp
     * @summary List identity provider types
     * @request GET:/idp
     * @secure
     */
    getIdp: (params: RequestParams = {}) =>
      this.request<IDPList, any>({
        path: `/idp`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags idp
     * @name UpdateUsersIdp
     * @summary Associate multiple users to a IDP
     * @request PUT:/idp/{idp_type}/users
     */
    updateUsersIdp: (
      idpType: string,
      body: IDPUsers,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/idp/${idpType}/users`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.idp.{idp_type}.users.{user_uuid}.delete`
     *
     * @tags users, idp
     * @name RemoveIdpUser
     * @summary Dissocuate a user from an IDP
     * @request DELETE:/idp/{idp_type}/users/{user_uuid}
     * @secure
     */
    removeIdpUser: (
      idpType: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/idp/${idpType}/users/${userUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.idp.{idp_type}.users.{user_uuid}.create`
     *
     * @tags users, idp
     * @name AddUserIdp
     * @summary Associate user to a IDP
     * @request PUT:/idp/{idp_type}/users/{user_uuid}
     * @secure
     */
    addUserIdp: (
      idpType: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/idp/${idpType}/users/${userUuid}`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  policies = {
    /**
     * @description **Required ACL:** `auth.policies.read`
     *
     * @tags policies
     * @name ListPolicies
     * @summary List ACL policies
     * @request GET:/policies
     * @secure
     */
    listPolicies: (
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPoliciesResult, Error>({
        path: `/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.policies.create` Create a new ACL policy set that can be associated to a user, an administrator, a service or a backend. An ACL policy is a list of ACL or ACL templates that is used to create a token
     *
     * @tags policies
     * @name CreatePolicies
     * @summary Create a new ACL policy
     * @request POST:/policies
     * @secure
     */
    createPolicies: (body: Policy, params: RequestParams = {}) =>
      this.request<PolicyResult, Error>({
        path: `/policies`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.policies.{policy_uuid}.delete`
     *
     * @tags policies
     * @name DeletePolicy
     * @summary Delete a policy
     * @request DELETE:/policies/{policy_uuid}
     * @secure
     */
    deletePolicy: (policyUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/policies/${policyUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.policies.{policy_uuid}.read
     *
     * @tags policies
     * @name PoliciesDetail
     * @summary Retrieves the details of a policy
     * @request GET:/policies/{policy_uuid}
     * @secure
     */
    policiesDetail: (policyUuid: string, params: RequestParams = {}) =>
      this.request<PolicyResult, Error>({
        path: `/policies/${policyUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
     *
     * @tags policies
     * @name EditPolicies
     * @summary Modify an ACL policy
     * @request PUT:/policies/{policy_uuid}
     * @secure
     */
    editPolicies: (
      policyUuid: string,
      body: Policy,
      params: RequestParams = {},
    ) =>
      this.request<PolicyResult, Error>({
        path: `/policies/${policyUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
     *
     * @tags policies
     * @name DeletePolicyAccess
     * @summary Dissociate an access from a policy
     * @request DELETE:/policies/{policy_uuid}/acl/{access}
     * @secure
     */
    deletePolicyAccess: (
      policyUuid: string,
      access: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/policies/${policyUuid}/acl/${access}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.policies.{policy_uuid}.update`
     *
     * @tags policies
     * @name AddPolicyAccess
     * @summary Associate an access to a policy
     * @request PUT:/policies/{policy_uuid}/acl/{access}
     * @secure
     */
    addPolicyAccess: (
      policyUuid: string,
      access: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/policies/${policyUuid}/acl/${access}`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  saml = {
    /**
 * @description Receives the SAML response created by the identity provider. The internal cache allows to retrieve the context and redirect the browser to process the login.
 *
 * @tags token, saml
 * @name ProcessAcs
 * @summary Processes the IdP response and redirects to requested URL, even if the authentication
failed to allow further processing by the frontend application.
 * @request POST:/saml/acs
 */
    processAcs: (body: SAMLIdpResponse, params: RequestParams = {}) =>
      this.request<any, void | Error>({
        path: `/saml/acs`,
        method: "POST",
        body: body,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns the SAML logout request and redirect location, which is the IdP. The client must use the indicated location and forward the logout request to the IdP and forward the response to the wazo-auth. Wazo-auth will process the answer and confirm to the requester the logout was processed or notify an error.
     *
     * @tags token, saml
     * @name SamlLogout
     * @summary Creates and returns data required to process the logout by the IdP
     * @request GET:/saml/logout
     * @secure
     */
    samlLogout: (params: RequestParams = {}) =>
      this.request<SAMLLogoutRequest, void>({
        path: `/saml/logout`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Processes the IdP response to logout request and confirms the logout by a redirect to the `redirect_url` provided during the login phase with logout confirmation un the URL's query param.
     *
     * @tags token, saml
     * @name SamlLogoutResponse
     * @summary Handles the logout response from the IDP
     * @request GET:/saml/sls
     */
    samlLogoutResponse: (
      body: SAMLIdpLogoutResponse,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/saml/sls`,
        method: "GET",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns the information (SAML request and redirect location) that the client needs to use to authenticate using the configured identity provider. The redirection does not happen automatically, the client has to use the `location` provided in the body of the response.
     *
     * @tags token, saml
     * @name SamlSso
     * @summary Creates and returns context and redirects to IdP login page
     * @request POST:/saml/sso
     */
    samlSso: (body: SAMLLoginContext, params: RequestParams = {}) =>
      this.request<SAMLSSOResponse, void>({
        path: `/saml/sso`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sessions = {
    /**
     * @description **Required ACL:** `auth.sessions.read`
     *
     * @tags sessions
     * @name ListSessions
     * @summary List sessions
     * @request GET:/sessions
     * @secure
     */
    listSessions: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSessionsResult, Error>({
        path: `/sessions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.sessions.{session_uuid}.delete`
     *
     * @tags sessions
     * @name DeleteSession
     * @summary Delete a session
     * @request DELETE:/sessions/{session_uuid}
     * @secure
     */
    deleteSession: (sessionUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/sessions/${sessionUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  status = {
    /**
     * @description This endpoint is not authenticated
     *
     * @tags status
     * @name HeadStatus
     * @summary Check if wazo-auth is OK
     * @request HEAD:/status
     */
    headStatus: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/status`,
        method: "HEAD",
        ...params,
      }),
  };
  tenants = {
    /**
     * @description **Required ACL**: `auth.tenants.read` Tenants can be filtered by domain name using the `domain_name` query string to do an exact match on one of its domain names or using the `search` query string for a fuzzy match.
     *
     * @tags tenants
     * @name TenantsList
     * @summary Retrieves the list of tenants
     * @request GET:/tenants
     * @secure
     */
    tenantsList: (
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantList, any>({
        path: `/tenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.tenants.create`
     *
     * @tags tenants
     * @name CreateTenant
     * @summary Creates a new tenant
     * @request POST:/tenants
     * @secure
     */
    createTenant: (body: TenantCreate, params: RequestParams = {}) =>
      this.request<TenantPostResponse, APIError>({
        path: `/tenants`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.tenants.{tenant_uuid}.delete`
     *
     * @tags tenants
     * @name DeleteTenant
     * @summary Delete a tenant
     * @request DELETE:/tenants/{tenant_uuid}
     * @secure
     */
    deleteTenant: (tenantUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/tenants/${tenantUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.tenants.{tenant_uuid}.read`
     *
     * @tags tenants
     * @name TenantsDetail
     * @summary Retrieves the details of a tenant
     * @request GET:/tenants/{tenant_uuid}
     * @secure
     */
    tenantsDetail: (tenantUuid: string, params: RequestParams = {}) =>
      this.request<TenantResult, Error>({
        path: `/tenants/${tenantUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.tenants.{tenant_uuid}.update`
     *
     * @tags tenants
     * @name UpdateTenant
     * @summary Modify a tenant
     * @request PUT:/tenants/{tenant_uuid}
     * @secure
     */
    updateTenant: (
      tenantUuid: string,
      body: TenantEdit,
      params: RequestParams = {},
    ) =>
      this.request<TenantPostResponse, APIError | Error>({
        path: `/tenants/${tenantUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.tenants.{tenant_uuid}.domains.read`
     *
     * @tags tenants
     * @name DomainsList
     * @summary Retrieves the domains names with uuids of a tenant
     * @request GET:/tenants/{tenant_uuid}/domains
     * @secure
     */
    domainsList: (tenantUuid: string, params: RequestParams = {}) =>
      this.request<TenantDomainsList, Error>({
        path: `/tenants/${tenantUuid}/domains`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  token = {
    /**
     * @description Creates a valid token for the supplied username and password combination or refresh_token using the configured authentication method. The user's email address can be used instead of the username if the email address is confirmed. Creating  a token with the `access_type` *offline* will also create a refresh token which can be used to create a new token without specifying the username and password. The username/password and refresh_token method of authentication are mutually exclusive For more details about the backends, see http://documentation.wazo.community/en/latest/system/wazo-auth/stock_plugins.html#backends-plugins
     *
     * @tags token
     * @name CreateToken
     * @summary Creates a token
     * @request POST:/token
     * @secure
     */
    createToken: (
      body: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<Token, Error>({
        path: `/token`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags token
     * @name TokenDelete
     * @summary Revoke a token
     * @request DELETE:/token/{token}
     * @secure
     */
    tokenDelete: (token: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/token/${token}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Checks if a token is valid in a given context and return the token data.  If a scope is given, the token must have the necessary permissions for the ACL. If a tenant is given, the token must have that tenant in its sub-tenant subtree.
     *
     * @tags token
     * @name TokenDetail
     * @summary Retrieves token data
     * @request GET:/token/{token}
     * @secure
     */
    tokenDetail: (
      token: string,
      query?: {
        /** The required ACL */
        scope?: string;
        /** A tenant UUID to check against */
        tenant?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Token, Error>({
        path: `/token/${token}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Checks if a token is valid in a given context.  If a scope is given, the token must have the necessary permissions for the ACL. If a tenant is given, the token must have that tenant in its sub-tenant subtree.
     *
     * @tags token
     * @name HeadToken
     * @summary Checks if a token is valid
     * @request HEAD:/token/{token}
     * @secure
     */
    headToken: (
      token: string,
      query?: {
        /** The required ACL */
        scope?: string;
        /** A tenant UUID to check against */
        tenant?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/token/${token}`,
        method: "HEAD",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Checks if a token is valid for given scopes.
     *
     * @tags token
     * @name ScopesCheckCreate
     * @summary Check a token against scopes
     * @request POST:/token/{token}/scopes/check
     * @secure
     */
    scopesCheckCreate: (
      token: string,
      body: ScopeCheckRequest,
      params: RequestParams = {},
    ) =>
      this.request<ScopeList, Error>({
        path: `/token/${token}/scopes/check`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tokens = {
    /**
     * @description **Required ACL**: `auth.tokens.read` Finds all refresh tokens and return the list. Access tokens are not included in the result.
     *
     * @tags token
     * @name ListRefreshTokens
     * @summary Retrieve a list of refresh tokens that have been created on the system
     * @request GET:/tokens
     * @secure
     */
    listRefreshTokens: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RefreshTokenList, APIError>({
        path: `/tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description **Required ACL**: `auth.users.read`
     *
     * @tags users
     * @name UsersList
     * @summary Retrieves the list of users
     * @request GET:/users
     * @secure
     */
    usersList: (
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** The slug of the policy that the user must have. This includes indirect associations (user in group has policy). */
        has_policy_slug?: string;
        /** The UUID of the policy that the user must have. This includes indirect associations (user in group has policy). */
        has_policy_uuid?: string;
        /** The slug of the policy that the user must have. This does not include indirect associations (user in group has policy). */
        policy_slug?: string;
        /** The UUID of the policy that the user must have. This does not include indirect associations (user in group has policy). */
        policy_uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserList, any>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.create` Creates a new user that can be used to retrieve a token. The UUID can be used to link this user the a wazo-confd user by using the same UUID
     *
     * @tags users
     * @name CreateUser
     * @summary Create a user
     * @request POST:/users
     */
    createUser: (body: UserCreate, params: RequestParams = {}) =>
      this.request<UserPostResponse, APIError>({
        path: `/users`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This action will send an email containing instructions to set a new password. The login or username or email address should be supplied as query string to find the user
     *
     * @tags users
     * @name ResetPassword
     * @summary Reset the user password
     * @request GET:/users/password/reset
     */
    resetPassword: (
      query?: {
        /** The user's username */
        username?: string;
        /** The user's email address */
        email?: string;
        /** The user's login (username or email) */
        login?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/users/password/reset`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.password.reset.{user_uuid}.create` Set a new password for the user after the user used the GET on the reset URL
     *
     * @tags users
     * @name ResetPasswordChange
     * @summary Set the user password
     * @request POST:/users/password/reset
     * @secure
     */
    resetPasswordChange: (
      query: {
        /** The user's UUID */
        user_uuid: string;
      },
      body: PostPasswordReset,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/users/password/reset`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a new user that can be used to retrieve a token.
     *
     * @tags users
     * @name RegisterUser
     * @summary Create a user
     * @request POST:/users/register
     */
    registerUser: (body: UserRegister, params: RequestParams = {}) =>
      this.request<UserPostResponse, APIError>({
        path: `/users/register`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.tokens.read` Finds all of a user's refresh token and return the list. Access tokens are not included in the result. Doing a query with the `user_uuid` `me` will result in the current user's token being used.
     *
     * @tags token, users
     * @name ListUserRefreshTokens
     * @summary Retrieve a user's refresh token list
     * @request GET:/users/{user_uuid_or_me}/tokens
     * @secure
     */
    listUserRefreshTokens: (
      userUuidOrMe: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RefreshTokenList, APIError>({
        path: `/users/${userUuidOrMe}/tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.tokens.{client_id}.delete` Remove a given refresh token. This only prevent this refresh token from creating new access tokens. Any tokens that are currently issued are still usable and should be revoked if needed.
     *
     * @tags token, users
     * @name DeleteRefreshTokens
     * @summary Delete a user's refresh token
     * @request DELETE:/users/{user_uuid_or_me}/tokens/{client_id}
     * @secure
     */
    deleteRefreshTokens: (
      userUuidOrMe: string,
      clientId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, APIError>({
        path: `/users/${userUuidOrMe}/tokens/${clientId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.delete`
     *
     * @tags users
     * @name DeleteUser
     * @summary Delete a user
     * @request DELETE:/users/{user_uuid}
     * @secure
     */
    deleteUser: (userUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/${userUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.read`
     *
     * @tags users
     * @name UsersDetail
     * @summary Retrieves the details of a user
     * @request GET:/users/{user_uuid}
     * @secure
     */
    usersDetail: (userUuid: string, params: RequestParams = {}) =>
      this.request<UserResult, Error>({
        path: `/users/${userUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.update`
     *
     * @tags users
     * @name UpdateUser
     * @summary Update an existing user
     * @request PUT:/users/{user_uuid}
     */
    updateUser: (
      userUuid: string,
      body: UserEdit,
      params: RequestParams = {},
    ) =>
      this.request<UserPostResponse, APIError | Error>({
        path: `/users/${userUuid}`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.emails.update` Update all of the users email address at the same time. If an existing address is missing from the list, it will be removed. An empty list will remove all addresses. If addresses are defined, one and only one address should be main. All new address are created unconfirmed.
     *
     * @tags users, emails
     * @name EmailsUpdate
     * @summary Update email addresses
     * @request PUT:/users/{user_uuid}/emails
     * @secure
     */
    emailsUpdate: (
      userUuid: string,
      body: UserEmailList,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${userUuid}/emails`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.emails.{email_uuid}.confirm.read`
     *
     * @tags users, emails
     * @name EmailsConfirmList
     * @summary Ask a new confirmation email
     * @request GET:/users/{user_uuid}/emails/{email_uuid}/confirm
     * @secure
     */
    emailsConfirmList: (
      userUuid: string,
      emailUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/users/${userUuid}/emails/${emailUuid}/confirm`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.external.read` This list should not contain any sensible information
     *
     * @tags users, external
     * @name ExternalList
     * @summary Retrieves the list of the users external auth data
     * @request GET:/users/{user_uuid}/external
     * @secure
     */
    externalList: (
      userUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExternalAuthList, any>({
        path: `/users/${userUuid}/external`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.groups.read`
     *
     * @tags users
     * @name GroupsList
     * @summary Retrieves the list of groups associated to a user
     * @request GET:/users/{user_uuid}/groups
     * @secure
     */
    groupsList: (
      userUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetGroupsResult, Error>({
        path: `/users/${userUuid}/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.password.update`
     *
     * @tags users
     * @name PasswordUpdate
     * @summary Change the user's password
     * @request PUT:/users/{user_uuid}/password
     * @secure
     */
    passwordUpdate: (
      userUuid: string,
      body: PasswordChange,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${userUuid}/password`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.policies.read`
     *
     * @tags users, policies
     * @name PoliciesList
     * @summary Retrieves the list of policies associated to a user
     * @request GET:/users/{user_uuid}/policies
     * @secure
     */
    policiesList: (
      userUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPoliciesResult, Error>({
        path: `/users/${userUuid}/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.users.{user_uuid}.policies.{policy_uuid}.delete`
     *
     * @tags users, policies
     * @name RemoveUserPolicy
     * @summary Dissociate a policy from a user
     * @request DELETE:/users/{user_uuid}/policies/{policy_uuid}
     * @secure
     */
    removeUserPolicy: (
      policyUuid: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${userUuid}/policies/${policyUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `auth.users.{user_uuid}.policies.{policy_uuid}.create`
     *
     * @tags users, policies
     * @name AddUserPolicy
     * @summary Associate a policy to a user
     * @request PUT:/users/{user_uuid}/policies/{policy_uuid}
     * @secure
     */
    addUserPolicy: (
      policyUuid: string,
      userUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${userUuid}/policies/${policyUuid}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.sessions.read`
     *
     * @tags users, sessions
     * @name SessionsList
     * @summary Retrieves the list of sessions associated to a user
     * @request GET:/users/{user_uuid}/sessions
     * @secure
     */
    sessionsList: (
      userUuid: string,
      query?: {
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSessionsResult, Error>({
        path: `/users/${userUuid}/sessions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `auth.users.{user_uuid}.sessions.{session_uuid}.delete`
     *
     * @tags users, sessions
     * @name UserDeleteSession
     * @summary Delete a session
     * @request DELETE:/users/{user_uuid}/sessions/{session_uuid}
     * @secure
     */
    userDeleteSession: (
      userUuid: string,
      sessionUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${userUuid}/sessions/${sessionUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
