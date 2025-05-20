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

export interface ComponentWithStatus {
  status?: StatusValue;
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
  /** Name of the resource */
  resource?: string;
  /**
   * Time when the error occured
   * @format timestamp
   */
  timestamp?: number;
}

export interface GetMarketResult {
  /** The number of plugins matching the given search */
  filtered?: number;
  /** A list of plugins */
  items?: MarketPluginList[];
  /** The number of plugins available on the market */
  total?: number;
}

export interface GetPluginsResult {
  /** A list of plugins */
  items?: PluginMetadata[];
  /** The number of plugins installed on the system */
  total?: number;
}

export interface InstallResponse {
  /** A UUID associated to this plugin installation */
  uuid?: string;
}

export interface MarketPluginList {
  /** The name of the plugin */
  name?: string;
  /** The namespace of the plugin */
  namespace?: string;
  /** Version specific information */
  versions?: VersionInfo[];
}

export interface PluginInstallParameters {
  /** The method used to fetch this plugin */
  method: "git";
  /** Method dependant installation options */
  options?: object;
}

export interface PluginMetadata {
  /** The name of the plugin */
  name?: string;
  /** The namespace of the plugin */
  namespace?: string;
  /** The version of the installed version */
  version?: string;
}

export interface StatusSummary {
  master_tenant?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export interface VersionInfo {
  /** The maximum Wazo version with which this plugin works */
  max_wazo_version?: string;
  /** The minimum Wazo version with which this plugin works */
  min_wazo_version?: string;
  /** An indication wether installing this version would be an upgrade on not. Unstalled plugins are marked as upgradable. */
  upgradable?: boolean;
  /** The plugin version */
  version?: string;
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
  public baseUrl: string = "/0.2";
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
 * @title wazo-plugind
 * @version 0.2
 * @license GPLv3 (http://www.gnu.org/licenses/gpl-3.0.html)
 * @baseUrl /0.2
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Wazo's plugin management service
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  config = {
    /**
     * @description **Required ACL:** `plugind.config.read`
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
  market = {
    /**
     * @description **Required ACL:** `plugind.market.read` Allow the administrator to get a list of available plugins
     *
     * @tags plugin, market
     * @name MarketList
     * @summary List plugins available on the configured market
     * @request GET:/market
     * @secure
     */
    marketList: (
      query?: {
        /** Maximum number of items to return in the list */
        limit?: number;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Filter list of items, this search is applied to all fields and is not strict (eba matches Sébastien) */
        search?: string;
        /** Search by namespace */
        namespace?: string;
        /** Search by name */
        name?: string;
        /** Filter installed plugins */
        installed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetMarketResult, any>({
        path: `/market`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `plugind.market.read` Allow the administrator to view a plugins information from the market. ---
     *
     * @tags plugin, market
     * @name MarketDetail
     * @summary Fetch the information about a plugin from the market
     * @request GET:/market/{namespace}/{name}
     * @secure
     */
    marketDetail: (
      namespace: string,
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<MarketPluginList, Error>({
        path: `/market/${namespace}/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  plugins = {
    /**
     * @description **Required ACL:** `plugind.plugins.read` Allow the administrator to get a list of all installed plugins
     *
     * @tags plugin
     * @name PluginsList
     * @summary List installed plugins
     * @request GET:/plugins
     * @secure
     */
    pluginsList: (params: RequestParams = {}) =>
      this.request<GetPluginsResult, any>({
        path: `/plugins`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `plugind.plugins.create` Allow the administrator to install a plugin on the server.
     *
     * @tags plugin
     * @name PluginsCreate
     * @summary Install a plugin
     * @request POST:/plugins
     * @secure
     */
    pluginsCreate: (
      body: PluginInstallParameters,
      query?: {
        /** With this option the plugin will be reinstalled if it is already installed */
        reinstall?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InstallResponse, Error>({
        path: `/plugins`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `plugind.plugins.{namespace}.{name}.delete` Allow the administrator to uninstall a plugin. ---
     *
     * @tags plugin
     * @name PluginsDelete
     * @summary Uninstall a plugin
     * @request DELETE:/plugins/{namespace}/{name}
     * @secure
     */
    pluginsDelete: (
      namespace: string,
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/plugins/${namespace}/${name}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `plugind.plugins.{namespace}.{name}.read` Allow the administrator to view a plugins metadata file. ---
     *
     * @tags plugin
     * @name PluginsDetail
     * @summary Fetch the information about a plugin that has been installed
     * @request GET:/plugins/{namespace}/{name}
     * @secure
     */
    pluginsDetail: (
      namespace: string,
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<PluginMetadata, Error>({
        path: `/plugins/${namespace}/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `plugind.status.read`
     *
     * @tags status
     * @name GetStatus
     * @summary Returns the current status of wazo-plugind
     * @request GET:/status
     * @secure
     */
    getStatus: (params: RequestParams = {}) =>
      this.request<StatusSummary, any>({
        path: `/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
