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

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export type CapabilitiesObject = Record<string, Record<string, string>>;

export interface ComponentWithStatus {
  status?: StatusValue;
}

/**
 * A complete configuration
 * @example {"deletable":true,"id":"abcdef123456890","parent_ids":["base"],"raw_config":{"sip_lines":{"1":{"auth_username":"100","display_name":"Foo","password":"100","username":"100"}}}}
 */
export interface Config {
  deletable?: boolean;
  /** The unique configuration id */
  id?: string;
  parent_ids?: string[];
  raw_config?: RawConfigurationObject;
}

/** A configuration object */
export interface ConfigObject {
  /** A complete configuration */
  config?: Config;
}

export interface ConfigsObject {
  configs?: Config[];
}

export interface DHCPInfo {
  /** The IP address of the device */
  ip?: string;
  /** The MAC address of the device */
  mac?: string;
  /** The operation to perform */
  op?: "commit";
  options?: string[];
}

export interface DHCPInfoObject {
  dhcp_info?: DHCPInfo;
}

/** A device schema */
export interface Device {
  /** Indicated how the device was added */
  added?: string;
  /** ID of the device configuration. Generally the same as the device ID, except when in autoprov */
  config?: string;
  configured?: boolean;
  description?: string;
  /** Device ID */
  id?: string;
  /** IP address (10.0.0.0) */
  ip?: string;
  /** Indicates if the device is a new device, ie in the master tenant */
  is_new?: boolean;
  /** MAC address (aa:bb:cc:dd:ee:ff) */
  mac?: string;
  /** Device model */
  model?: string;
  /** Provisioning plugin used by the device */
  plugin?: string;
  remote_state_sip_username?: string;
  /** The tenant UUID, defining the ownership of this device */
  tenant_uuid?: string;
  /** Vendor name */
  vendor?: string;
  /** Firmware version */
  version?: string;
}

/** A device object */
export interface DeviceObject {
  /** A device schema */
  device?: Device;
}

/** A list of devices */
export interface DevicesList {
  devices?: Device[];
}

/** Empty body */
export type EmptyObject = any;

/** Error message response */
export type ErrorMessage = string;

/**
 * FTP proxy configuration
 * @example {"param":{"value":"http://root:secret@example.com:8082"}}
 */
export interface FtpProxy {
  /** The proxy for FTP requests. Format is `http://[user:password@]host:port` */
  param?: string;
}

export interface GeneralConfigObject {
  description?: string;
  id?: string;
  /** Links object */
  links?: LinksObject;
  value?: string;
}

export interface GeneralConfigsObject {
  params?: GeneralConfigObject[];
}

/**
 * HTTP proxy configuration
 * @example {"param":{"value":"http://root:secret@example.com:8080"}}
 */
export interface HttpProxy {
  /** The proxy for HTTP requests. Format is `http://[user:password@]host:port` */
  param?: string;
}

/**
 * HTTPS proxy configuration
 * @example {"param":{"value":"example.com:8081"}}
 */
export interface HttpsProxy {
  /** The proxy for HTTPS requests. Format is `host:port` */
  param?: string;
}

/** @example {"id":"abcdef1234567890"} */
export interface IdObject {
  id?: string;
}

/** Link Object */
export interface LinkObject {
  /** Location of the resource */
  href?: string;
  /** Relation to the resource */
  rel?: string;
}

/** Links object */
export interface LinksObject {
  /** Links to different resources */
  links?: LinkObject[];
}

/**
 * Locale configuration
 * @example {"param":{"value":"en_US"}}
 */
export interface Locale {
  /** The current locale. For example: `en_US` */
  param?: string;
}

/**
 * NAT configuration
 * @example {"param":{"value":"1"}}
 */
export interface Nat {
  /** Set to `1` if all the devices are behind a NAT */
  param?: string;
}

export interface OperationInProgressObject {
  /**
   * The ``status`` field describes the current status of the operation. The format is
   * ``[label|]state[;current[/end]](\(sub_oips\))*``. Here are some examples:
   *
   * * progress
   * * download|progress
   * * download|progress;10
   * * download|progress;10/100
   * * download|progress(file_1|progress;20/100)(file_2|waiting;0/50)
   * * download|progress;20/150(file_1|progress)(file_2|waiting)
   * * op|progress(op1|progress(op11|progress)(op12|waiting))(op2|progress)
   *
   * The state of an operation is either ``waiting``, ``progress``, ``success`` or ``fail``.
   */
  status?: string;
}

export interface Package {
  capabilities?: CapabilitiesObject;
  description?: string;
  dsize?: number;
  sha1sum?: string;
  version?: string;
}

export interface PackageList {
  pkgs?: PackageObject;
}

export type PackageObject = Record<string, Package>;

/**
 * A configuration parameter
 * @example {"param":{"value":"http://provd.wazo.community/plugins/2/stable"}}
 */
export interface Param {
  param?: ParamObject;
}

export interface ParamObject {
  value?: string;
}

export interface PluginInfo {
  plugin_info?: PluginInfoObject;
}

export interface PluginInfoObject {
  capabilities?: CapabilitiesObject;
  description?: string;
  version?: string;
}

/**
 * Plugin server configuration
 * @example {"param":{"value":"http://provd.wazo.community/plugins/2/stable/"}}
 */
export interface PluginServer {
  /** The plugins repository URL */
  param?: string;
}

export type Plugins = Record<string, LinksObject>;

export interface PluginsObject {
  plugins?: Plugins;
}

/**
 * Provisioning Key configuration
 * @example {"param":{"value":"a1b2c3d4e5f6g7h8"}}
 */
export interface ProvisioningKey {
  /** Provisioning key used to authenticate request to fetch provisioning configuration file */
  param?: string;
}

/** @example {"raw_config":{"sip_lines":{"1":{"auth_username":"100","display_name":"Foo","password":"100","username":"100"}}}} */
export interface RawConfigurationObject {
  raw_config?: object;
}

export interface StatusSummary {
  rest_api?: ComponentWithStatus;
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
  public baseUrl: string = "/api/provd/0.2";
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
 * @title wazo-provd
 * @version 0.2
 * @baseUrl /api/provd/0.2
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Provisioning application REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description **Required ACL:** `provd.read` The provd manager resource represents the main entry point to the wazo-provd REST API
   *
   * @tags provd
   * @name GetRoot
   * @summary Get the Provd Manager resource
   * @request GET:/
   * @secure
   */
  getRoot = (params: RequestParams = {}) =>
    this.request<LinksObject, any>({
      path: `/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });

  cfgMgr = {
    /**
     * @description **Required ACL:** `provd.cfg_mgr.read` The configuration manager resource represents the entry point to the wazo-provd configuration REST API
     *
     * @tags configs
     * @name CfgMgrList
     * @summary Get the Config Manager resource
     * @request GET:/cfg_mgr
     * @secure
     */
    cfgMgrList: (params: RequestParams = {}) =>
      this.request<LinksObject, any>({
        path: `/cfg_mgr`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.autocreate.create` Create a new config based on the config that has the autocreate role
     *
     * @tags configs
     * @name AutocreateCreate
     * @summary Create an autocreate configuration
     * @request POST:/cfg_mgr/autocreate
     * @secure
     */
    autocreateCreate: (body: EmptyObject, params: RequestParams = {}) =>
      this.request<IdObject, any>({
        path: `/cfg_mgr/autocreate`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.read`
     *
     * @tags configs
     * @name ConfigsList
     * @summary List and find configurations
     * @request GET:/cfg_mgr/configs
     * @secure
     */
    configsList: (
      query?: {
        /**
         * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
         *
         * Example: `{"ip":"10.34.1.110"}`
         */
        q?: string;
        /**
         * A list of fields, separated by comma.
         *
         * Example: `mac,ip`
         */
        fields?: string;
        /**
         * An integer specifing the number of entries to skip.
         *
         * Example: 10
         */
        skip?: number;
        /**
         * The key on which to sort the results.
         *
         * Example: `id`
         */
        sort?: string;
        /** The order of sort */
        sort_ord?: "ASC" | "DESC";
      },
      params: RequestParams = {},
    ) =>
      this.request<ConfigsObject, any>({
        path: `/cfg_mgr/configs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.create`
     *
     * @tags configs
     * @name ConfigsCreate
     * @summary Create a configuration
     * @request POST:/cfg_mgr/configs
     * @secure
     */
    configsCreate: (body: ConfigObject, params: RequestParams = {}) =>
      this.request<IdObject, any>({
        path: `/cfg_mgr/configs`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.delete`
     *
     * @tags configs
     * @name ConfigsDelete
     * @summary Delete a configuration
     * @request DELETE:/cfg_mgr/configs/{config_id}
     * @secure
     */
    configsDelete: (configId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/cfg_mgr/configs/${configId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.read`
     *
     * @tags configs
     * @name ConfigsDetail
     * @summary Get a configuration
     * @request GET:/cfg_mgr/configs/{config_id}
     * @secure
     */
    configsDetail: (configId: string, params: RequestParams = {}) =>
      this.request<ConfigObject, ErrorMessage>({
        path: `/cfg_mgr/configs/${configId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.update`
     *
     * @tags configs
     * @name ConfigsUpdate
     * @summary Update a configuration
     * @request PUT:/cfg_mgr/configs/{config_id}
     * @secure
     */
    configsUpdate: (
      configId: string,
      body: ConfigObject,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/cfg_mgr/configs/${configId}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.raw.read`
     *
     * @tags configs
     * @name ConfigsRawList
     * @summary Get a raw configuration
     * @request GET:/cfg_mgr/configs/{config_id}/raw
     * @secure
     */
    configsRawList: (configId: string, params: RequestParams = {}) =>
      this.request<RawConfigurationObject, ErrorMessage>({
        path: `/cfg_mgr/configs/${configId}/raw`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  configure = {
    /**
     * @description **Required ACL:** `provd.configure.read`
     *
     * @tags provd
     * @name ConfigureList
     * @summary Get the general provd configuration
     * @request GET:/configure
     * @secure
     */
    configureList: (params: RequestParams = {}) =>
      this.request<GeneralConfigsObject, any>({
        path: `/configure`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.nat.update`
     *
     * @tags provd
     * @name PutConfigure
     * @summary Update the configuration's NAT
     * @request PUT:/configure/NAT
     * @secure
     */
    putConfigure: (body: Nat, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/NAT`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.ftp_proxy.update`
     *
     * @tags provd
     * @name FtpProxyUpdate
     * @summary Update the configuration's ftp_proxy
     * @request PUT:/configure/ftp_proxy
     * @secure
     */
    ftpProxyUpdate: (body: FtpProxy, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/ftp_proxy`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.http_proxy.update`
     *
     * @tags provd
     * @name HttpProxyUpdate
     * @summary Update the configuration's http_proxy
     * @request PUT:/configure/http_proxy
     * @secure
     */
    httpProxyUpdate: (body: HttpProxy, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/http_proxy`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.https_proxy.update`
     *
     * @tags provd
     * @name HttpsProxyUpdate
     * @summary Update the configuration's https_proxy
     * @request PUT:/configure/https_proxy
     * @secure
     */
    httpsProxyUpdate: (body: HttpsProxy, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/https_proxy`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.locale.update`
     *
     * @tags provd
     * @name LocaleUpdate
     * @summary Update the configuration's locale
     * @request PUT:/configure/locale
     * @secure
     */
    localeUpdate: (body: Locale, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/locale`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.plugin_server.update`
     *
     * @tags provd
     * @name PluginServerUpdate
     * @summary Update the configuration's plugin_server
     * @request PUT:/configure/plugin_server
     * @secure
     */
    pluginServerUpdate: (body: PluginServer, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/configure/plugin_server`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.{tenant_uuid}.provisioning_key.update`
     *
     * @tags provd
     * @name ProvisioningKeyUpdate
     * @summary Update the tenant provisioning key
     * @request PUT:/configure/provisioning_key
     * @secure
     */
    provisioningKeyUpdate: (
      body: ProvisioningKey,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/configure/provisioning_key`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description '**Required ACL:** `provd.configure.{param_id}.read`' Wazo-Tenant header is only valid for `provisioning_key`
     *
     * @tags provd
     * @name ConfigureDetail
     * @summary Get the configuration parameter value
     * @request GET:/configure/{param_id}
     * @secure
     */
    configureDetail: (paramId: string, params: RequestParams = {}) =>
      this.request<Param, ErrorMessage>({
        path: `/configure/${paramId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.configure.{param_id}.update`
     *
     * @tags provd
     * @name ConfigureUpdate
     * @summary Set the value of a parameter
     * @request PUT:/configure/{param_id}
     * @secure
     */
    configureUpdate: (
      paramId: string,
      body: Param,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/configure/${paramId}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  devMgr = {
    /**
     * @description **Required ACL:** `provd.dev_mgr.read` The device manager resource represents the entry point to the wazo-provd device REST API
     *
     * @tags devices
     * @name DevMgrList
     * @summary Get the Device Manager resource
     * @request GET:/dev_mgr
     * @secure
     */
    devMgrList: (params: RequestParams = {}) =>
      this.request<LinksObject, any>({
        path: `/dev_mgr`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.devices.read`
     *
     * @tags devices
     * @name DevicesList
     * @summary List and find devices
     * @request GET:/dev_mgr/devices
     * @secure
     */
    devicesList: (
      query?: {
        /**
         * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
         *
         * Example: `{"ip":"10.34.1.110"}`
         */
        q?: string;
        /**
         * A list of fields, separated by comma.
         *
         * Example: `mac,ip`
         */
        fields?: string;
        /**
         * An integer specifing the number of entries to skip.
         *
         * Example: 10
         */
        skip?: number;
        /**
         * The key on which to sort the results.
         *
         * Example: `id`
         */
        sort?: string;
        /** The order of sort */
        sort_ord?: "ASC" | "DESC";
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DevicesList, any>({
        path: `/dev_mgr/devices`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.devices.create`
     *
     * @tags devices
     * @name DevicesCreate
     * @summary Create a device
     * @request POST:/dev_mgr/devices
     * @secure
     */
    devicesCreate: (device: DeviceObject, params: RequestParams = {}) =>
      this.request<IdObject, ErrorMessage>({
        path: `/dev_mgr/devices`,
        method: "POST",
        body: device,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.delete`
     *
     * @tags devices
     * @name DevicesDelete
     * @summary Delete a device
     * @request DELETE:/dev_mgr/devices/{device_id}
     * @secure
     */
    devicesDelete: (deviceId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/dev_mgr/devices/${deviceId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.read` Get a device using its ID
     *
     * @tags devices
     * @name DevicesDetail
     * @summary Get a device by ID
     * @request GET:/dev_mgr/devices/{device_id}
     * @secure
     */
    devicesDetail: (deviceId: string, params: RequestParams = {}) =>
      this.request<DeviceObject, ErrorMessage>({
        path: `/dev_mgr/devices/${deviceId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.update` Every field must be specified, otherwise they will be omitted
     *
     * @tags devices
     * @name DevicesUpdate
     * @summary Update a device
     * @request PUT:/dev_mgr/devices/{device_id}
     * @secure
     */
    devicesUpdate: (
      deviceId: string,
      device: DeviceObject,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/dev_mgr/devices/${deviceId}`,
        method: "PUT",
        body: device,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.dhcpinfo.create` The provisioning server either creates a new device or changes the information of the device with the same MAC address
     *
     * @tags devices
     * @name DhcpinfoCreate
     * @summary Push DHCP request information
     * @request POST:/dev_mgr/dhcpinfo
     * @secure
     */
    dhcpinfoCreate: (body: DHCPInfoObject, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/dev_mgr/dhcpinfo`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.reconfigure.create` Regenerate the configuration file for the specified device
     *
     * @tags devices
     * @name ReconfigureCreate
     * @summary Reconfigure a device
     * @request POST:/dev_mgr/reconfigure
     * @secure
     */
    reconfigureCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/dev_mgr/reconfigure`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.dev_mgr.synchronize.create`
     *
     * @tags devices
     * @name SynchronizeCreate
     * @summary Synchronize a device
     * @request POST:/dev_mgr/synchronize
     * @secure
     */
    synchronizeCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/dev_mgr/synchronize`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags devices
     * @name SynchronizeDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/dev_mgr/synchronize/{operation_id}
     * @secure
     */
    synchronizeDelete: (operationId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/dev_mgr/synchronize/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags devices
     * @name SynchronizeDetail
     * @summary Get the status of a synchronize Operation In Progress
     * @request GET:/dev_mgr/synchronize/{operation_id}
     * @secure
     */
    synchronizeDetail: (operationId: string, params: RequestParams = {}) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/dev_mgr/synchronize/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pgMgr = {
    /**
     * @description **Required ACL:** `provd.pg_mgr.read` The plugin manager resource represents the entry point to the wazo-provd plugin REST API
     *
     * @tags plugins
     * @name PgMgrList
     * @summary Get the Plugin Manager resource
     * @request GET:/pg_mgr
     * @secure
     */
    pgMgrList: (params: RequestParams = {}) =>
      this.request<LinksObject, any>({
        path: `/pg_mgr`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.read`
     *
     * @tags plugins
     * @name InstallList
     * @summary Get the installation service resources
     * @request GET:/pg_mgr/install
     * @secure
     */
    installList: (params: RequestParams = {}) =>
      this.request<LinksObject, any>({
        path: `/pg_mgr/install`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.install.create`
     *
     * @tags plugins
     * @name InstallInstallCreate
     * @summary Install a plugin
     * @request POST:/pg_mgr/install/install
     * @secure
     */
    installInstallCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/install`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags plugins
     * @name InstallInstallDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/pg_mgr/install/install/{operation_id}
     * @secure
     */
    installInstallDelete: (operationId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/install/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags plugins
     * @name InstallInstallDetail
     * @summary Get the status of a plugin installation Operation In Progress
     * @request GET:/pg_mgr/install/install/{operation_id}
     * @secure
     */
    installInstallDetail: (operationId: string, params: RequestParams = {}) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/pg_mgr/install/install/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.installable.read`
     *
     * @tags plugins
     * @name InstallInstallableList
     * @summary Get the installable plugins list
     * @request GET:/pg_mgr/install/installable
     * @secure
     */
    installInstallableList: (params: RequestParams = {}) =>
      this.request<PackageList, any>({
        path: `/pg_mgr/install/installable`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.installed.read`
     *
     * @tags plugins
     * @name InstallInstalledList
     * @summary Get the installed plugins list
     * @request GET:/pg_mgr/install/installed
     * @secure
     */
    installInstalledList: (params: RequestParams = {}) =>
      this.request<PackageList, any>({
        path: `/pg_mgr/install/installed`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.uninstall.create`
     *
     * @tags plugins
     * @name InstallUninstallCreate
     * @summary Uninstall a plugin
     * @request POST:/pg_mgr/install/uninstall
     * @secure
     */
    installUninstallCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/uninstall`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.update.create`
     *
     * @tags plugins
     * @name InstallUpdateCreate
     * @summary Update the List of installable plugins
     * @request POST:/pg_mgr/install/update
     * @secure
     */
    installUpdateCreate: (body: EmptyObject, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/update`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags plugins
     * @name InstallUpdateDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/pg_mgr/install/update/{operation_id}
     * @secure
     */
    installUpdateDelete: (operationId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/update/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags plugins
     * @name InstallUpdateDetail
     * @summary Get the status of a plugin database update Operation In Progress
     * @request GET:/pg_mgr/install/update/{operation_id}
     * @secure
     */
    installUpdateDetail: (operationId: string, params: RequestParams = {}) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/pg_mgr/install/update/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.install.upgrade.create`
     *
     * @tags plugins
     * @name InstallUpgradeCreate
     * @summary Upgrade a plugin
     * @request POST:/pg_mgr/install/upgrade
     * @secure
     */
    installUpgradeCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/upgrade`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags plugins
     * @name InstallUpgradeDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/pg_mgr/install/upgrade/{operation_id}
     * @secure
     */
    installUpgradeDelete: (operationId: string, params: RequestParams = {}) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/install/upgrade/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags plugins
     * @name InstallUpgradeDetail
     * @summary Get the status of a plugin upgrade Operation In Progress
     * @request GET:/pg_mgr/install/upgrade/{operation_id}
     * @secure
     */
    installUpgradeDetail: (operationId: string, params: RequestParams = {}) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/pg_mgr/install/upgrade/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.read`
     *
     * @tags plugins
     * @name PluginsList
     * @summary List the installed plugins
     * @request GET:/pg_mgr/plugins
     * @secure
     */
    pluginsList: (params: RequestParams = {}) =>
      this.request<PluginsObject, any>({
        path: `/pg_mgr/plugins`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.read`
     *
     * @tags plugins
     * @name PluginsDetail
     * @summary Get the resources of a specific plugin
     * @request GET:/pg_mgr/plugins/{plugin_id}
     * @secure
     */
    pluginsDetail: (pluginId: string, params: RequestParams = {}) =>
      this.request<LinksObject, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.info.read`
     *
     * @tags plugins
     * @name PluginsInfoList
     * @summary Get the information of a plugin
     * @request GET:/pg_mgr/plugins/{plugin_id}/info
     * @secure
     */
    pluginsInfoList: (pluginId: string, params: RequestParams = {}) =>
      this.request<PluginInfo, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.read`
     *
     * @tags plugins
     * @name PluginsInstallList
     * @summary Get the package installation service resources
     * @request GET:/pg_mgr/plugins/{plugin_id}/install
     * @secure
     */
    pluginsInstallList: (pluginId: string, params: RequestParams = {}) =>
      this.request<LinksObject, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.install.create`
     *
     * @tags plugins
     * @name PluginsInstallInstallCreate
     * @summary Install a package
     * @request POST:/pg_mgr/plugins/{plugin_id}/install/install
     * @secure
     */
    pluginsInstallInstallCreate: (
      pluginId: string,
      body: IdObject,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/install`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags plugins
     * @name PluginsInstallInstallDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/pg_mgr/plugins/{plugin_id}/install/install/{operation_id}
     * @secure
     */
    pluginsInstallInstallDelete: (
      pluginId: string,
      operationId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/install/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags plugins
     * @name PluginsInstallInstallDetail
     * @summary Get the status of a package installation Operation In Progress
     * @request GET:/pg_mgr/plugins/{plugin_id}/install/install/{operation_id}
     * @secure
     */
    pluginsInstallInstallDetail: (
      pluginId: string,
      operationId: string,
      params: RequestParams = {},
    ) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/install/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.installable.read`
     *
     * @tags plugins
     * @name PluginsInstallInstallableList
     * @summary Get the installable packages list
     * @request GET:/pg_mgr/plugins/{plugin_id}/install/installable
     * @secure
     */
    pluginsInstallInstallableList: (
      pluginId: string,
      params: RequestParams = {},
    ) =>
      this.request<PackageList, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/installable`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.installed.read`
     *
     * @tags plugins
     * @name PluginsInstallInstalledList
     * @summary Get the installed packages list
     * @request GET:/pg_mgr/plugins/{plugin_id}/install/installed
     * @secure
     */
    pluginsInstallInstalledList: (
      pluginId: string,
      params: RequestParams = {},
    ) =>
      this.request<PackageList, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/installed`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.uninstall.create`
     *
     * @tags plugins
     * @name PluginsInstallUninstallCreate
     * @summary Uninstall a package
     * @request POST:/pg_mgr/plugins/{plugin_id}/install/uninstall
     * @secure
     */
    pluginsInstallUninstallCreate: (
      pluginId: string,
      body: IdObject,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/uninstall`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
     *
     * @tags plugins
     * @name PluginsInstallUpgradeDelete
     * @summary Delete the Operation In Progress
     * @request DELETE:/pg_mgr/plugins/{plugin_id}/install/upgrade/{operation_id}
     * @secure
     */
    pluginsInstallUpgradeDelete: (
      pluginId: string,
      operationId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/upgrade/${operationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.operation.read`
     *
     * @tags plugins
     * @name PluginsInstallUpgradeDetail
     * @summary Get the status of a package upgrade Operation In Progress
     * @request GET:/pg_mgr/plugins/{plugin_id}/install/upgrade/{operation_id}
     * @secure
     */
    pluginsInstallUpgradeDetail: (
      pluginId: string,
      operationId: string,
      params: RequestParams = {},
    ) =>
      this.request<OperationInProgressObject, ErrorMessage>({
        path: `/pg_mgr/plugins/${pluginId}/install/upgrade/${operationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `provd.pg_mgr.reload.create` This is mostly useful during plugin development, after changing the code of the plugin, instead of restarting the wazo-provd application
     *
     * @tags plugins
     * @name ReloadCreate
     * @summary Reload a plugin
     * @request POST:/pg_mgr/reload
     * @secure
     */
    reloadCreate: (body: IdObject, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/pg_mgr/reload`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `provd.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-provd
     * @request GET:/status
     * @secure
     */
    statusList: (params: RequestParams = {}) =>
      this.request<StatusSummary, any>({
        path: `/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
