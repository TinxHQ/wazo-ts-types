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

export interface Credential {
  instance?: CredentialInstance;
  instance_tenant_uuid?: string;
  /** @format password */
  password: string;
  username: string;
  uuid?: string;
}

export interface CredentialInstance {
  installed?: boolean;
  name?: string;
  private_host?: string;
  private_port?: number;
  public_host?: string;
  public_port?: number;
  service_id?: number;
  uuid?: string;
}

/**
 * Error
 * Error message for the client
 */
export interface Error {
  /** Additional information about the error. The keys are specific to each error. */
  details?: object;
  /** Identifier of the type of error. It is more precise than the HTTP status code. */
  error_id?: string;
  /** Human readable explanation of the error */
  message?: string;
  /**
   * Time when the error occured
   * @format timestamp
   */
  timestamp?: number;
}

export interface Instance {
  /** Depends on the provider. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  config: Record<string, any>;
  /** @format date-time */
  created_at?: string;
  /** (write only): Deprecated. Please use `public_port`/`private_port` */
  https_port?: number;
  installed?: boolean;
  /** (write only): Deprecated. Please use `private_host` */
  interface_ip?: string;
  name: string;
  node_id?: string;
  /**
   * Write only. To retrieve information, use `root_credential_uuid` field
   * @format password
   */
  password: string;
  /**
   * Shows which connection should be used when connecting to this instance.
   *
   * When `public` is used the public_host should be used.
   * When `private` is used the private_host should be used.
   * When `any` is used either the `public_host` or the `private_host` should be used.
   * @default "public"
   */
  preferred_connection?: "private" | "public" | "any";
  private_host: string;
  private_port: number;
  provider_uuid?: string;
  public_host?: string;
  public_port?: number;
  /** (write only): Deprecated. Please use `public_host` */
  remote_host?: string;
  /** Used to retrieve root credential configured on the instance */
  root_credential_uuid?: string;
  /** What kind of service this instance will offer. Accepted values: 1 (engine), 2 (router). */
  service_id?: number;
  /** the current status of the instance (pending, creating, created, running, failed, etc.) */
  state?: string;
  /** More details about the current state. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  state_details?: object;
  tenant_uuid?: string;
  /** Write only. To retrieve information, use `root_credential_uuid` field */
  username?: string;
  uuid?: string;
}

/** InstanceItems */
export interface InstanceItems {
  filtered?: number;
  items?: Instance[];
  total?: number;
}

export interface Provider {
  config: Record<string, any>;
  /** @format date-time */
  created_at?: string;
  name: string;
  platform: string;
  tenant_uuid?: string;
  uuid?: string;
}

/** ProviderItems */
export interface ProviderItems {
  filtered?: number;
  items?: Provider[];
  total?: number;
}

/** ProviderPlatform */
export interface ProviderPlatform {
  platforms?: object;
}

export interface ProviderResource {
  id?: string;
  name?: string;
}

/** ProviderResourceItems */
export interface ProviderResourceItems {
  items?: ProviderResource[];
}

export interface RestrictedInstance {
  /** Depends on the provider. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  config: Record<string, any>;
  name: string;
}

export interface WazoInformations {
  configured?: boolean;
  uuid?: string;
  wazo_version?: string;
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
 * @title wazo-deployd
 * @version 0.0.1
 * @baseUrl /0.1
 *
 * Deploy a Wazo server on a cloud from a REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  config = {
    /**
     * @description **Required ACL**: `deployd.config.read`
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
  };
  instances = {
    /**
     * @description **Required ACL**: `deployd.instances.read`
     *
     * @tags instances
     * @name InstancesList
     * @summary List all wazo instances for a given tenant
     * @request GET:/instances
     */
    instancesList: (
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
      this.request<InstanceItems, Error>({
        path: `/instances`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.create`
     *
     * @tags instances
     * @name RegisterInstance
     * @summary Register an already installed wazo instance
     * @request POST:/instances
     */
    registerInstance: (instance: Instance, params: RequestParams = {}) =>
      this.request<Instance, Error>({
        path: `/instances`,
        method: "POST",
        body: instance,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.delete`
     *
     * @tags instances
     * @name InstancesDelete
     * @summary Unregister an existing wazo instance (do not delete its VM)
     * @request DELETE:/instances/{instance_uuid}
     */
    instancesDelete: (instanceUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/instances/${instanceUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.read`
     *
     * @tags instances
     * @name InstancesDetail
     * @summary Get a single instance for a given tenant
     * @request GET:/instances/{instance_uuid}
     */
    instancesDetail: (instanceUuid: string, params: RequestParams = {}) =>
      this.request<Instance, Error>({
        path: `/instances/${instanceUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.update`
     *
     * @tags instances
     * @name InstancesUpdate
     * @summary Update an existing wazo instance
     * @request PUT:/instances/{instance_uuid}
     */
    instancesUpdate: (
      instanceUuid: string,
      instance: Instance,
      params: RequestParams = {},
    ) =>
      this.request<Instance, Error>({
        path: `/instances/${instanceUuid}`,
        method: "PUT",
        body: instance,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.create`
     *
     * @tags instances, credentials
     * @name CredentialsCreate
     * @summary Register a credential for an instance
     * @request POST:/instances/{instance_uuid}/credentials
     */
    credentialsCreate: (
      instanceUuid: string,
      credential: Credential,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/instances/${instanceUuid}/credentials`,
        method: "POST",
        body: credential,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.delete`
     *
     * @tags instances, credentials
     * @name CredentialsDelete
     * @summary Remove a credential for an instance
     * @request DELETE:/instances/{instance_uuid}/credentials/{credential_uuid}
     */
    credentialsDelete: (
      instanceUuid: string,
      credentialUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/instances/${instanceUuid}/credentials/${credentialUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.get`
     *
     * @tags instances, credentials
     * @name CredentialsDetail
     * @summary Get a credential for an instance
     * @request GET:/instances/{instance_uuid}/credentials/{credential_uuid}
     */
    credentialsDetail: (
      instanceUuid: string,
      credentialUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Credential, Error>({
        path: `/instances/${instanceUuid}/credentials/${credentialUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.update`
     *
     * @tags instances, credentials
     * @name CredentialsUpdate
     * @summary Update a credential for an instance
     * @request PUT:/instances/{instance_uuid}/credentials/{credential_uuid}
     */
    credentialsUpdate: (
      instanceUuid: string,
      credentialUuid: string,
      credential: Credential,
      params: RequestParams = {},
    ) =>
      this.request<Credential, Error>({
        path: `/instances/${instanceUuid}/credentials/${credentialUuid}`,
        method: "PUT",
        body: credential,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.instances.{instance_uuid}.wazo.read`
     *
     * @tags instances
     * @name WazoList
     * @summary Get informations about a Wazo installed on given instance
     * @request GET:/instances/{instance_uuid}/wazo
     */
    wazoList: (instanceUuid: string, params: RequestParams = {}) =>
      this.request<WazoInformations, Error>({
        path: `/instances/${instanceUuid}/wazo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  providers = {
    /**
     * @description **Required ACL**: `deployd.providers.read`
     *
     * @tags providers
     * @name ProvidersList
     * @summary List all providers
     * @request GET:/providers
     */
    providersList: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderItems, Error>({
        path: `/providers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.create`
     *
     * @tags providers
     * @name CreateProvider
     * @summary Create a new provider for a given tenant
     * @request POST:/providers
     */
    createProvider: (provider: Provider, params: RequestParams = {}) =>
      this.request<Provider, Error>({
        path: `/providers`,
        method: "POST",
        body: provider,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.platforms.read`
     *
     * @tags providers
     * @name PlatformsList
     * @summary List all platforms available
     * @request GET:/providers/platforms
     */
    platformsList: (params: RequestParams = {}) =>
      this.request<ProviderPlatform, any>({
        path: `/providers/platforms`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.delete`
     *
     * @tags providers
     * @name ProvidersDelete
     * @summary Delete an existing provider
     * @request DELETE:/providers/{provider_uuid}
     */
    providersDelete: (providerUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/providers/${providerUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.read`
     *
     * @tags providers
     * @name ProvidersDetail
     * @summary Get a single provider for a given tenant
     * @request GET:/providers/{provider_uuid}
     */
    providersDetail: (providerUuid: string, params: RequestParams = {}) =>
      this.request<Provider, Error>({
        path: `/providers/${providerUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.update`
     *
     * @tags providers
     * @name ProvidersUpdate
     * @summary Update an existing provider
     * @request PUT:/providers/{provider_uuid}
     */
    providersUpdate: (
      providerUuid: string,
      provider: Provider,
      params: RequestParams = {},
    ) =>
      this.request<Provider, Error>({
        path: `/providers/${providerUuid}`,
        method: "PUT",
        body: provider,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.images.read`
     *
     * @tags providers
     * @name ImagesList
     * @summary List all images available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/images
     */
    imagesList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.instances.read`
     *
     * @tags instances
     * @name InstancesList
     * @summary List all wazo instances for a given tenant's provider
     * @request GET:/providers/{provider_uuid}/instances
     */
    instancesList: (providerUuid: string, params: RequestParams = {}) =>
      this.request<InstanceItems, Error>({
        path: `/providers/${providerUuid}/instances`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.create`
     *
     * @tags instances
     * @name CreateInstance
     * @summary Create a new wazo instance
     * @request POST:/providers/{provider_uuid}/instances
     */
    createInstance: (
      providerUuid: string,
      instance: RestrictedInstance,
      params: RequestParams = {},
    ) =>
      this.request<RestrictedInstance, Error>({
        path: `/providers/${providerUuid}/instances`,
        method: "POST",
        body: instance,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.instances.{instance_uuid}.delete`
     *
     * @tags instances
     * @name InstancesDelete
     * @summary Delete an existing wazo instance and its VM
     * @request DELETE:/providers/{provider_uuid}/instances/{instance_uuid}
     */
    instancesDelete: (
      providerUuid: string,
      instanceUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<object, Error>({
        path: `/providers/${providerUuid}/instances/${instanceUuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.keypairs.read`
     *
     * @tags providers
     * @name KeypairsList
     * @summary List all key pairs available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/keypairs
     */
    keypairsList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/keypairs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.locations.read`
     *
     * @tags providers
     * @name LocationsList
     * @summary List all locations available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/locations
     */
    locationsList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/locations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.networks.read`
     *
     * @tags providers
     * @name NetworksList
     * @summary List all networks available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/networks
     */
    networksList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/networks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.regions.read`
     *
     * @tags providers
     * @name RegionsList
     * @summary List all regions available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/regions
     */
    regionsList: (providerUuid: string, params: RequestParams = {}) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/regions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.sizes.read`
     *
     * @tags providers
     * @name SizesList
     * @summary List all sizes available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/sizes
     */
    sizesList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/sizes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL**: `deployd.providers.{provider_uuid}.subnets.read`
     *
     * @tags providers
     * @name SubnetsList
     * @summary List all subnets available in a provider for a given tenant
     * @request GET:/providers/{provider_uuid}/subnets
     */
    subnetsList: (
      providerUuid: string,
      query: {
        /** Region's name */
        region: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderResource, Error>({
        path: `/providers/${providerUuid}/subnets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description This endpoint is not authenticated
     *
     * @tags status
     * @name HeadStatus
     * @summary Check if wazo-deployd is OK
     * @request HEAD:/status
     */
    headStatus: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/status`,
        method: "HEAD",
        ...params,
      }),
  };
}
