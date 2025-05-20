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
  error_id?: string;
  message?: string;
  resource?: string;
  timestamp?: number;
}

/** Account */
export interface Account {
  /** The date of the account's creation */
  created_at?: string;
  customer?: AccountCustomer;
  /** The date of the account's subscription modification */
  modified_at?: string;
  subscription?: number;
  tenant_uuid?: string;
  uuid?: string;
}

/** AccountCustomer */
export interface AccountCustomer {
  name?: string;
  uuid?: string;
}

/** AccountList */
export interface AccountList {
  filtered?: number;
  items?: Account[];
  total?: number;
}

/**
 * AccountSummary
 * @example {"subscriptions":{"1":{"total":130},"2":{"total":560},"3":{"total":55}}}
 */
export interface AccountSummary {
  subscriptions?: object;
}

/** CustomerCreate */
export type Customer = CustomerRelationBase &
  TenantSharedProperties & {
    created_at?: string;
    locations?: LocationRelationBase[];
    reseller?: ResellerRelationBase;
    /** The reseller_uuid of the customer */
    reseller_uuid?: string;
  };

/** CustomerList */
export interface CustomerList {
  filtered?: number;
  items?: Customer[];
  total?: number;
}

export interface CustomerRelationBase {
  /** The ID of the customer in the an external information system */
  client_id?: string;
  /** The name of the customer */
  name?: string;
  /** The UUID of the customer */
  uuid?: string;
}

/** CustomerUpdate */
export type CustomerUpdate = CustomerRelationBase;

/** EngineAccount */
export interface EngineAccount {
  created_at: string;
  engine_account_subscription: number;
  engine_account_uuid: string;
  engine_tenant_uuid: string;
  engine_uuid: string;
  instance_uuid?: string;
}

/** EngineAccountEvent */
export interface EngineAccountEvent {
  engine_account_subscription?: number;
  engine_account_uuid?: string;
  engine_tenant_uuid?: string;
  engine_uuid?: string;
  instance_uuid?: string;
  name?: "create" | "update" | "delete";
  timestamp?: string;
}

/** EngineAccounts */
export interface EngineAccounts {
  accounts?: EngineAccount[];
  engine_version?: string;
}

export interface Init {
  reseller: ResellerInit;
}

/** Nestbox confd was initialized successfully */
export type Initialized = any;

/** Instance */
export interface Instance {
  /** The date of the last synchronization with portal */
  synchronization_at?: string;
  tenant_uuid?: string;
  uuid?: string;
  version?: string;
}

/** InstanceList */
export interface InstanceList {
  filtered?: number;
  items?: Instance[];
  total?: number;
}

/** LocationCreate */
export type Location = LocationRelationBase &
  TenantSharedProperties & {
    created_at?: string;
    customer?: ResellerRelationBase;
    /** The customer_uuid of the location */
    customer_uuid?: string;
  } & LocationWazoTenants;

/** LocationList */
export interface LocationList {
  filtered?: number;
  items?: Location[];
  total?: number;
}

export interface LocationRelationBase {
  /** The name of the location */
  name?: string;
  /** The UUID of the location */
  uuid?: string;
}

/** LocationUpdate */
export type LocationUpdate = LocationRelationBase;

/** LocationWazoTenant */
export interface LocationWazoTenant {
  /** The UUID of the instance credential */
  credential_uuid?: string;
  /** The UUID of the instance */
  instance_uuid?: string;
  /** The UUID of the tenant */
  uuid?: string;
}

/** LocationWazoTenants */
export interface LocationWazoTenants {
  wazo_tenants?: LocationWazoTenant[];
}

/** portal plug-in */
export type Plugin = {
  /** @format date-time */
  created_at?: string;
  /**
   * plug-in's manifest URL location
   * @format url
   */
  manifest_url?: string;
  /** if true, this plug-in has been inherited */
  read_only?: boolean;
  /**
   * plug-in's unique identifier
   * @format uuid
   */
  uuid?: string;
} & PluginSharedProperties;

export type PluginCreate = {
  /**
   * plug-in's manifest URI location
   * @format uri
   * @minLength 1
   * @maxLength 8192
   * @example "https://www.example.com/plugin.json"
   */
  manifest_url: string;
} & PluginSharedProperties;

export interface PluginCustomerInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    customer_uuid?: string;
  })[];
  total?: number;
}

export interface PluginInstallCreate {
  /** @format uuid */
  uuid?: string;
}

export interface PluginInstallParams {
  configuration?: object;
  enabled?: boolean;
  shared?: boolean;
}

export type PluginInstallParamsCustomer = PluginInstallParams & {
  /** @format uuid */
  customer_uuid: string;
};

export type PluginInstallParamsLocation = PluginInstallParams & {
  /** @format uuid */
  location_uuid: string;
};

export type PluginInstallParamsReseller = PluginInstallParams & {
  /** @format uuid */
  reseller_uuid: string;
};

export interface PluginInstallation {
  /** @format uuid */
  plugin_uuid?: string;
}

/** list of portal plug-ins */
export interface PluginList {
  filtered?: number;
  items?: Plugin[];
  total?: number;
}

export interface PluginLocationInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    location_uuid?: string;
  })[];
  total?: number;
}

export interface PluginResellerInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    reseller_uuid?: string;
  })[];
  total?: number;
}

export interface PluginSharedProperties {
  /** plug-in's extra configuration object */
  configuration?: object;
  /** enable/disable this plug-in */
  enabled?: boolean;
  /** if true, this plug-in will be inherited by children */
  shared?: boolean;
}

export type PluginUpdate = PluginSharedProperties;

/** Reseller */
export type Reseller = ResellerRelationBaseWithChildren &
  TenantSharedProperties & {
    created_at?: string;
    customers?: CustomerRelationBase[];
    parent?: ResellerRelationBase;
    /** The parent(reseller) uuid of the reseller */
    parent_uuid?: string;
  };

export interface ResellerInit {
  name?: string;
  uuid?: string;
}

/** ResellerList */
export interface ResellerList {
  filtered?: number;
  items?: Reseller[];
  total?: number;
}

export interface ResellerRelationBase {
  /** The name of the reseller */
  name?: string;
  /** The UUID of the reseller */
  uuid?: string;
}

/** ResellerRelationBaseWithChildren */
export type ResellerRelationBaseWithChildren = ResellerRelationBase & {
  children?: ResellerRelationBaseWithChildren[];
};

/** Tenant */
export interface Tenant {
  /** Whether this tenant is a Wazo partner */
  is_partner?: boolean;
  /** The type of tenant */
  resource?: "resellers" | "tenants" | "locations";
  /** The UUID of the tenant */
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

/** TenantSharedProperties */
export interface TenantSharedProperties {
  address?: TenantAddress;
  /** The contact phone number */
  phone?: string;
}

/** User */
export interface User {
  /** The UUID of the user */
  uuid?: string;
  /** A list of abitrary objects */
  visualization?: object;
}

/** UserList */
export interface UserList {
  filtered?: number;
  items?: User[];
  total?: number;
}

/** UserUpdate */
export interface UserUpdate {
  /** A list of abitrary objects */
  visualization?: object;
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
  public baseUrl: string = "/1.0";
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
 * @title nestbox-confd
 * @version 1.0
 * @license GPL v3 (http://www.gnu.org/licenses/gpl.txt)
 * @baseUrl /1.0
 * @contact Dev Team <dev@wazo.io> (http://wazo.io)
 *
 * Nestbox confd exposes an API for managing core resources on a Nestbox server such as clients, etc.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  accounts = {
    /**
     * @description **Required ACL:** `confd.accounts.read`
     *
     * @tags accounts
     * @name ListAccounts
     * @summary List accounts
     * @request GET:/accounts
     * @secure
     */
    listAccounts: (params: RequestParams = {}) =>
      this.request<AccountList, APIError>({
        path: `/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.accounts.summary.read`
     *
     * @tags accounts
     * @name GetTenantsSummaryAccount
     * @summary Get summary accounts
     * @request GET:/accounts/summary
     * @secure
     */
    getTenantsSummaryAccount: (params: RequestParams = {}) =>
      this.request<AccountSummary, APIError>({
        path: `/accounts/summary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `confd.config.read`
     *
     * @tags config
     * @name GetConfig
     * @summary Show the current configuration
     * @request GET:/config
     * @secure
     */
    getConfig: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/config`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  customers = {
    /**
     * @description **Required ACL:** `confd.customers.read`
     *
     * @tags customers
     * @name ListCustomers
     * @summary List customers
     * @request GET:/customers
     * @secure
     */
    listCustomers: (
      query?: {
        /** Search term used to filter the result */
        search?: string;
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
        /** Comma-separated list of UUIDs to filter resellers by */
        uuid?: string;
        /** Comma-separated list of names to filter resellers by */
        name?: string;
        /** Comma-separated list of client_id to filter customers by */
        client_id?: string;
        /**
         * Should the result include customers from sub-resellers
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerList, any>({
        path: `/customers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.customers.create`
     *
     * @tags customers
     * @name CreateCustomer
     * @summary Create customer
     * @request POST:/customers
     * @secure
     */
    createCustomer: (body: Customer, params: RequestParams = {}) =>
      this.request<Customer, APIError>({
        path: `/customers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.customers.{customer_uuid}.delete`
     *
     * @tags customers
     * @name DeleteCustomer
     * @summary Delete customer
     * @request DELETE:/customers/{customer_uuid}
     * @secure
     */
    deleteCustomer: (customerUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/customers/${customerUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.customers.{customer_uuid}.read`
     *
     * @tags customers
     * @name GetCustomer
     * @summary Get customer
     * @request GET:/customers/{customer_uuid}
     * @secure
     */
    getCustomer: (customerUuid: string, params: RequestParams = {}) =>
      this.request<Customer, APIError>({
        path: `/customers/${customerUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.customers.{customer_uuid}.update`
     *
     * @tags customers
     * @name UpdateCustomer
     * @summary Update customer
     * @request PUT:/customers/{customer_uuid}
     * @secure
     */
    updateCustomer: (
      customerUuid: string,
      body: CustomerUpdate,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/customers/${customerUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  engines = {
    /**
     * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.events.create`
     *
     * @tags accounts
     * @name AddEngineInstanceAccountEvent
     * @summary Send account events
     * @request POST:/engines/instances/{instance_uuid}/accounts/events
     * @secure
     */
    addEngineInstanceAccountEvent: (
      instanceUuid: string,
      body: EngineAccountEvent,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/engines/instances/${instanceUuid}/accounts/events`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.synchronize.read`
     *
     * @tags accounts
     * @name CheckEngineInstanceAccountSynchronize
     * @summary Check if accounts are synchronized
     * @request HEAD:/engines/instances/{instance_uuid}/accounts/synchronize
     * @secure
     */
    checkEngineInstanceAccountSynchronize: (
      instanceUuid: string,
      query: {
        /** The sha256 hash of accounts */
        hash: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/engines/instances/${instanceUuid}/accounts/synchronize`,
        method: "HEAD",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.synchronize.create`
     *
     * @tags accounts
     * @name EngineInstanceAccountSynchronize
     * @summary Synchronize accounts
     * @request POST:/engines/instances/{instance_uuid}/accounts/synchronize
     * @secure
     */
    engineInstanceAccountSynchronize: (
      instanceUuid: string,
      body: EngineAccounts,
      params: RequestParams = {},
    ) =>
      this.request<void, APIError>({
        path: `/engines/instances/${instanceUuid}/accounts/synchronize`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  init = {
    /**
     * @description Create the first reseller without parent_uuid
     *
     * @tags init
     * @name InitCreate
     * @summary Initialize nestbox-confd
     * @request POST:/init
     * @secure
     */
    initCreate: (body: Init, params: RequestParams = {}) =>
      this.request<Initialized, any>({
        path: `/init`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  instances = {
    /**
     * @description **Required ACL:** `confd.instances.read`
     *
     * @tags accounts, instances
     * @name ListInstances
     * @summary List instances
     * @request GET:/instances
     * @secure
     */
    listInstances: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InstanceList, APIError>({
        path: `/instances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  locations = {
    /**
     * @description **Required ACL:** `confd.locations.read`
     *
     * @tags locations
     * @name ListLocations
     * @summary List locations
     * @request GET:/locations
     * @secure
     */
    listLocations: (
      query?: {
        /** Search term used to filter the result */
        search?: string;
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
        /** Comma-separated list of UUIDs to filter resellers by */
        uuid?: string;
        /** Comma-separated list of names to filter resellers by */
        name?: string;
        /** Comma-separated list of customer UUIDs to filter locations by */
        customer_uuid?: string;
        /** Instance UUID to filter locations by */
        instance_uuid?: string;
        /** Instance tenant UUID to filter locations by */
        wazo_tenant_uuid?: string;
        /**
         * Should the result include locations from customers of sub-resellers
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LocationList, any>({
        path: `/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.locations.create`
     *
     * @tags locations
     * @name CreateLocation
     * @summary Create location
     * @request POST:/locations
     * @secure
     */
    createLocation: (body: Location, params: RequestParams = {}) =>
      this.request<Location, APIError>({
        path: `/locations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.locations.{location_uuid}.delete`
     *
     * @tags locations
     * @name DeleteLocation
     * @summary Delete location
     * @request DELETE:/locations/{location_uuid}
     * @secure
     */
    deleteLocation: (locationUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/locations/${locationUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.locations.{location_uuid}.read`
     *
     * @tags locations
     * @name GetLocation
     * @summary Get location
     * @request GET:/locations/{location_uuid}
     * @secure
     */
    getLocation: (locationUuid: string, params: RequestParams = {}) =>
      this.request<Location, APIError>({
        path: `/locations/${locationUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.locations.{location_uuid}.update`
     *
     * @tags locations
     * @name UpdateLocation
     * @summary Update location
     * @request PUT:/locations/{location_uuid}
     * @secure
     */
    updateLocation: (
      locationUuid: string,
      body: LocationUpdate,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/locations/${locationUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.locations.{location_uuid}.wazo.tenants.update`
     *
     * @tags locations
     * @name UpdateLocationWazoTenants
     * @summary Update location Wazo tenants
     * @request PUT:/locations/{location_uuid}/wazo/tenants
     * @secure
     */
    updateLocationWazoTenants: (
      locationUuid: string,
      body: LocationWazoTenants,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/locations/${locationUuid}/wazo/tenants`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  plugins = {
    /**
     * @description **Required ACL:** `confd.plugins.read`
     *
     * @tags plugins
     * @name GetPlugins
     * @summary View installed plug-ins for this resource
     * @request GET:/plugins
     * @secure
     */
    getPlugins: (
      query?: {
        /** Search term used to filter the result */
        search?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<PluginList, APIError>({
        path: `/plugins`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.create`
     *
     * @tags plugins
     * @name InstallPlugin
     * @summary Install plug-in for this resource
     * @request POST:/plugins
     * @secure
     */
    installPlugin: (plugin: PluginCreate, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/plugins`,
        method: "POST",
        body: plugin,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.delete`
     *
     * @tags plugins
     * @name UninstallPlugin
     * @summary Uninstall plug-in
     * @request DELETE:/plugins/{plugin_uuid}
     * @secure
     */
    uninstallPlugin: (pluginUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/plugins/${pluginUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.read`
     *
     * @tags plugins
     * @name GetPlugin
     * @summary View plug-in information
     * @request GET:/plugins/{plugin_uuid}
     * @secure
     */
    getPlugin: (pluginUuid: string, params: RequestParams = {}) =>
      this.request<Plugin, APIError>({
        path: `/plugins/${pluginUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.update`
     *
     * @tags plugins
     * @name UpdatePlugin
     * @summary Update installed plug-in settings
     * @request PUT:/plugins/{plugin_uuid}
     * @secure
     */
    updatePlugin: (
      pluginUuid: string,
      body: PluginUpdate,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/plugins/${pluginUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.customers.read`
     *
     * @tags plugins
     * @name InstallsCustomersList
     * @summary List this plug-in's installation on customers
     * @request GET:/plugins/{plugin_uuid}/installs/customers
     * @secure
     */
    installsCustomersList: (
      pluginUuid: string,
      query?: {
        /**
         * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
         * @maxItems 25
         * @minItems 1
         * @uniqueItems true
         */
        uuids?: string[];
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
      this.request<PluginCustomerInstallation, APIError>({
        path: `/plugins/${pluginUuid}/installs/customers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.customers.create`
     *
     * @tags plugins
     * @name InstallsCustomersCreate
     * @summary Install (copy) this plug-in to a customer
     * @request POST:/plugins/{plugin_uuid}/installs/customers
     * @secure
     */
    installsCustomersCreate: (
      pluginUuid: string,
      body: PluginInstallParamsCustomer,
      params: RequestParams = {},
    ) =>
      this.request<PluginInstallCreate, APIError>({
        path: `/plugins/${pluginUuid}/installs/customers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.locations.read`
     *
     * @tags plugins
     * @name InstallsLocationsList
     * @summary List this plug-in's installation on locations
     * @request GET:/plugins/{plugin_uuid}/installs/locations
     * @secure
     */
    installsLocationsList: (
      pluginUuid: string,
      query?: {
        /**
         * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
         * @maxItems 25
         * @minItems 1
         * @uniqueItems true
         */
        uuids?: string[];
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
      this.request<PluginLocationInstallation, APIError>({
        path: `/plugins/${pluginUuid}/installs/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.locations.create`
     *
     * @tags plugins
     * @name InstallsLocationsCreate
     * @summary Install (copy) this plug-in to a location
     * @request POST:/plugins/{plugin_uuid}/installs/locations
     * @secure
     */
    installsLocationsCreate: (
      pluginUuid: string,
      body: PluginInstallParamsLocation,
      params: RequestParams = {},
    ) =>
      this.request<PluginInstallCreate, APIError>({
        path: `/plugins/${pluginUuid}/installs/locations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.resellers.read`
     *
     * @tags plugins
     * @name InstallsResellersList
     * @summary List this plug-in's installation on resellers
     * @request GET:/plugins/{plugin_uuid}/installs/resellers
     * @secure
     */
    installsResellersList: (
      pluginUuid: string,
      query?: {
        /**
         * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
         * @maxItems 25
         * @minItems 1
         * @uniqueItems true
         */
        uuids?: string[];
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
      this.request<PluginResellerInstallation, APIError>({
        path: `/plugins/${pluginUuid}/installs/resellers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.resellers.create`
     *
     * @tags plugins
     * @name InstallsResellersCreate
     * @summary Install (copy) this plug-in to a location
     * @request POST:/plugins/{plugin_uuid}/installs/resellers
     * @secure
     */
    installsResellersCreate: (
      pluginUuid: string,
      body: PluginInstallParamsReseller,
      params: RequestParams = {},
    ) =>
      this.request<PluginInstallCreate, APIError>({
        path: `/plugins/${pluginUuid}/installs/resellers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resellers = {
    /**
     * @description **Required ACL:** `confd.resellers.read`
     *
     * @tags resellers
     * @name ListResellers
     * @summary List resellers
     * @request GET:/resellers
     * @secure
     */
    listResellers: (
      query?: {
        /** Search term used to filter the result */
        search?: string;
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
        /** Comma-separated list of UUIDs to filter resellers by */
        uuid?: string;
        /** Comma-separated list of names to filter resellers by */
        name?: string;
        /** Comma-separated list of parent UUIDs to filter resellers by */
        parent_uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResellerList, any>({
        path: `/resellers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.resellers.create`
     *
     * @tags resellers
     * @name CreateReseller
     * @summary Create reseller
     * @request POST:/resellers
     * @secure
     */
    createReseller: (body: Reseller, params: RequestParams = {}) =>
      this.request<Reseller, APIError>({
        path: `/resellers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.resellers.{reseller_uuid}.delete`
     *
     * @tags resellers
     * @name DeleteReseller
     * @summary Delete reseller
     * @request DELETE:/resellers/{reseller_uuid}
     * @secure
     */
    deleteReseller: (resellerUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/resellers/${resellerUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.resellers.{reseller_uuid}.read`
     *
     * @tags resellers
     * @name GetReseller
     * @summary Get reseller
     * @request GET:/resellers/{reseller_uuid}
     * @secure
     */
    getReseller: (resellerUuid: string, params: RequestParams = {}) =>
      this.request<Reseller, APIError>({
        path: `/resellers/${resellerUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.resellers.{reseller_uuid}.update`
     *
     * @tags resellers
     * @name UpdateReseller
     * @summary Update reseller
     * @request PUT:/resellers/{reseller_uuid}
     * @secure
     */
    updateReseller: (
      resellerUuid: string,
      body: Reseller,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/resellers/${resellerUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  status = {
    /**
     * @description This endpoint is not authenticated
     *
     * @tags status
     * @name HeadStatus
     * @summary Check if nestbox-confd is OK
     * @request HEAD:/status
     * @secure
     */
    headStatus: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/status`,
        method: "HEAD",
        secure: true,
        ...params,
      }),
  };
  tenants = {
    /**
     * @description **Required ACL:** `confd.tenants.{tenant_uuid}.read`
     *
     * @tags tenants
     * @name GetTenant
     * @summary Get tenant
     * @request GET:/tenants/{tenant_uuid}
     * @secure
     */
    getTenant: (tenantUuid: string, params: RequestParams = {}) =>
      this.request<Tenant, APIError>({
        path: `/tenants/${tenantUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description **Required ACL:** `confd.users.read`
     *
     * @tags users
     * @name ListUsers
     * @summary List users
     * @request GET:/users
     * @secure
     */
    listUsers: (params: RequestParams = {}) =>
      this.request<UserList, any>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.users.create`
     *
     * @tags users
     * @name CreateUser
     * @summary Create user
     * @request POST:/users
     * @secure
     */
    createUser: (body: User, params: RequestParams = {}) =>
      this.request<User, APIError>({
        path: `/users`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.users.{user_uuid}.delete`
     *
     * @tags users
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/users/{user_uuid}
     * @secure
     */
    deleteUser: (userUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/users/${userUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.users.{user_uuid}.read`
     *
     * @tags users
     * @name GetUser
     * @summary Get user
     * @request GET:/users/{user_uuid}
     * @secure
     */
    getUser: (userUuid: string, params: RequestParams = {}) =>
      this.request<User, APIError>({
        path: `/users/${userUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `confd.users.{user_uuid}.update`
     *
     * @tags users
     * @name UpdateUser
     * @summary Update user
     * @request PUT:/users/{user_uuid}
     * @secure
     */
    updateUser: (
      userUuid: string,
      body: UserUpdate,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/users/${userUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
