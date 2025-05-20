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

export interface ConfigPatchItem {
  /** Patch operation. Supported operations: `replace`. */
  op?: string;
  /** JSON path to operate on. Supported paths: `/debug`. */
  path?: string;
  /** The new value for the operation. Type of value is dependent of `path` */
  value?: object;
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

export interface HTTPServiceConfig {
  /** Jinja2 template, where variables come from the event triggering the webhook. For more details, see https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/templates. **Default:** the complete event data, JSON-encoded. */
  body?: string;
  /** Content-Type of the body */
  content_type?: string;
  method: "head" | "get" | "post" | "put" | "delete";
  /** Jinja2 template, where variables come from the event triggering the webhook. For more details, see https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/templates */
  url: string;
  /**
   * May be `true`, `false` or a path to the certificate bundle
   * @default "true"
   */
  verify_certificate?: string;
}

export interface HTTPServiceLog {
  request_body?: string;
  request_headers?: Record<string, string>;
  request_method?: string;
  request_url?: string;
  response_body?: string;
  response_headers?: Record<string, string>;
  response_method?: string;
  response_url?: string;
}

export interface Notification {
  /** @maxLength 250 */
  body: string;
  extra?: object;
  /**
   * A name without special characters to differenciate the notification from others
   * @minLength 1
   * @maxLength 100
   * @pattern (?!^(messageReceived|voicemailReceived|incomingCall|cancelIncomingCall)$)(^[a-z0-9_]+$)
   * @example "myCustomNotification"
   */
  notification_type: string;
  /** @maxLength 128 */
  title: string;
  /**
   * @minLength 36
   * @maxLength 36
   */
  user_uuid: string;
}

export type ServiceConfig = Record<string, string>;

export interface Services {
  /** The keys are the service names. */
  services?: object;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
}

export interface Subscription {
  config: ServiceConfig;
  events: string[];
  /** Only trigger webhook when an event occurs related to this user. Not compatible with all events. For more details, see: https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/user_filter */
  events_user_uuid?: string;
  name: string;
  /** The user who owns this subscription. Admin-created subscriptions are not owned. */
  owner_user_uuid?: string;
  service: string;
  uuid?: string;
}

export interface SubscriptionList {
  items?: Subscription[];
  total?: number;
}

export interface SubscriptionLog {
  /** The current attempts */
  attempts?: number;
  /** output of the service */
  detail?: HTTPServiceLog;
  /** @format date-time */
  ended_at?: string;
  event?: string;
  /** Limit of number of attempts */
  max_attempts?: number;
  /** @format date-time */
  started_at?: string;
  status?: "success" | "failure" | "error";
  uuid?: string;
}

/** Arbitrary key-value storage for this subscription. May be used to tag subscriptions. PUT replaces all metadata. */
export type SubscriptionMetadata = object;

export interface SubscriptionRequest {
  config: HTTPServiceConfig;
  events: string[];
  /** Only trigger webhook when an event occurs related to this user. Not compatible with all events. For more details, see: https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/user_filter. */
  events_user_uuid?: string;
  /** Only trigger webhook when an event occurs on this Wazo. */
  events_wazo_uuid?: string;
  name: string;
  /** Known services: http. The service may be arbitrary, but it must be bound to an installed plugin in order to be effective. */
  service: string;
  tags?: object;
}

export interface UserSubscriptionRequest {
  config: HTTPServiceConfig;
  events: string[];
  name: string;
  /** Known services: http. The service may be arbitrary, but it must be bound to an installed plugin in order to be effective. */
  service: string;
  /** Arbitrary key-value storage for this subscription. May be used to tag subscriptions. PUT replaces all metadata. */
  tags?: SubscriptionMetadata;
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
 * @title wazo-webhookd
 * @version 1.0.0
 * @baseUrl /1.0
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Control your webhooks from a REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  config = {
    /**
     * @description **Required ACL:** `webhookd.config.read`
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

    /**
     * @description **Required ACL:** `webhookd.config.update` Changes are not persistent across service restart.
     *
     * @tags config
     * @name PatchConfig
     * @summary Update the current configuration.
     * @request PATCH:/config
     * @secure
     */
    patchConfig: (ConfigPatch: ConfigPatchItem[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/config`,
        method: "PATCH",
        body: ConfigPatch,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  mobile = {
    /**
     * @description **Required ACL:** `webhookd.mobile.notifications.send`
     *
     * @tags notifications
     * @name PostMobileNotification
     * @summary Send a push notification to a user
     * @request POST:/mobile/notifications
     * @secure
     */
    postMobileNotification: (body: Notification, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/mobile/notifications`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `webhookd.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-webhookd
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
  subscriptions = {
    /**
     * @description **Required ACL:** `webhookd.subscriptions.read`
     *
     * @tags subscriptions
     * @name List
     * @summary List subscriptions to HTTP callbacks
     * @request GET:/subscriptions
     * @secure
     */
    list: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
        search_metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionList, Error>({
        path: `/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.create` For more information: https://wazo-platform.org/documentation/api/webhook.html
     *
     * @tags subscriptions
     * @name Create
     * @summary Subscribe to a HTTP callback (webhook)
     * @request POST:/subscriptions
     * @secure
     */
    create: (body: SubscriptionRequest, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/subscriptions`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.services.read`
     *
     * @tags subscriptions
     * @name GetSubscriptionsServices
     * @summary Show the available subscription services
     * @request GET:/subscriptions/services
     * @secure
     */
    getSubscriptionsServices: (params: RequestParams = {}) =>
      this.request<Services, any>({
        path: `/subscriptions/services`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.delete`
     *
     * @tags subscriptions
     * @name Delete
     * @summary Delete a subscription
     * @request DELETE:/subscriptions/{subscription_uuid}
     * @secure
     */
    delete: (subscriptionUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.read`
     *
     * @tags subscriptions
     * @name Get
     * @summary Get a subscription
     * @request GET:/subscriptions/{subscription_uuid}
     * @secure
     */
    get: (subscriptionUuid: string, params: RequestParams = {}) =>
      this.request<Subscription, Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.update`
     *
     * @tags subscriptions
     * @name Edit
     * @summary Edit a subscription
     * @request PUT:/subscriptions/{subscription_uuid}
     * @secure
     */
    edit: (
      subscriptionUuid: string,
      body: SubscriptionRequest,
      params: RequestParams = {},
    ) =>
      this.request<Subscription, Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.logs.read`
     *
     * @tags subscriptions
     * @name GetLogs
     * @summary Get hook logs
     * @request GET:/subscriptions/{subscription_uuid}/logs
     * @secure
     */
    getLogs: (subscriptionUuid: string, params: RequestParams = {}) =>
      this.request<SubscriptionLog, Error>({
        path: `/subscriptions/${subscriptionUuid}/logs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description **Required ACL:** `webhookd.users.me.subscriptions.read`
     *
     * @tags subscriptions, users
     * @name UserList
     * @summary List subscriptions of a user to HTTP callbacks
     * @request GET:/users/me/subscriptions
     * @secure
     */
    userList: (
      query?: {
        /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
        search_metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionList, Error>({
        path: `/users/me/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.users.me.subscriptions.create` For more information: https://wazo-platform.org/documentation/api/webhook.html
     *
     * @tags subscriptions, users
     * @name UserCreate
     * @summary Subscribe to a HTTP callback (webhook) as a user
     * @request POST:/users/me/subscriptions
     * @secure
     */
    userCreate: (body: UserSubscriptionRequest, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/subscriptions`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.users.me.subscriptions.{subscription_uuid}.delete`
     *
     * @tags subscriptions, users
     * @name UserDelete
     * @summary Delete a user subscription
     * @request DELETE:/users/me/subscriptions/{subscription_uuid}
     * @secure
     */
    userDelete: (subscriptionUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/subscriptions/${subscriptionUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `webhookd.users.me.subscriptions.{subscription_uuid}.read`
     *
     * @tags subscriptions, users
     * @name GetUserSubscription
     * @summary Get a user subscription
     * @request GET:/users/me/subscriptions/{subscription_uuid}
     * @secure
     */
    getUserSubscription: (
      subscriptionUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Subscription, Error>({
        path: `/users/me/subscriptions/${subscriptionUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
