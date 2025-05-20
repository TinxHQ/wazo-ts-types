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

/** AuthorizationCreate */
export interface AuthorizationBase {
  /** The date of the authorization's creation */
  created_at?: string;
  /** IP address of the user who created the authorization */
  issuer_ip?: string;
  /** The date of the authorization's revocation */
  revoked_at?: string;
  rules?: Rule[];
  seats?: Seats;
  /** The status of the authorization. Possible values are: OPEN, REVOKED */
  status?: string;
  /** The UUID of the tenant */
  tenant_uuid?: string;
  /** The UUID of the user */
  user_uuid?: string;
  /** The UUID of the authorization */
  uuid?: string;
}

/** Authorizations UUIDs */
export interface AuthorizationsUUIDs {
  /** The authorizations UUIDs list */
  authorization_uuids: string[];
}

/** AuthorizationList */
export interface BaseAuthorizationList {
  filtered?: number;
  total?: number;
}

/** CustomerSubscription */
export interface CustomerSubscription {
  /**
   * Whether the subscription should canceled at the end of period
   * @default false
   */
  cancel_at_end_of_period?: boolean;
  /** The creation date of the subscription */
  created_at?: string;
  /** The ending date of the current period. This value is updated automatically according the `term`. */
  current_period_ends_at?: string;
  /** The starting date of the current period. This value is updated automatically according the `term`. */
  current_period_started_at?: string;
  /** The UUID of the customer */
  customer_uuid?: string;
  /** The description of the subscription */
  description?: string;
  /**
   * The name of the subscription
   * @default "default"
   */
  name?: string;
  /** The starting date of the next period. If the current period is not started, the value will be the same as `current_period_started_at`. `null` if subscription is expired */
  next_period_starts_at?: string;
  /**
   * Whether the subscription should be considered as 'Not For Resale'. This attribute will remove seats restriction without changing subscription behavior (term, period, renewal).
   * @default false
   */
  nfr?: boolean;
  /** The status of the subscription */
  status?: "ACTIVE" | "EXPIRED";
  /**
   * The duration of the subscription in months. If updated before `current_period_started_at`, then `current_period_ends_at` will be updated with new term. Otherwise a 400 is returned
   * @default 1
   */
  term?: 1 | 12;
  /** The date the subscription had last been modified */
  updated_at?: string;
  /** The UUID of the subscription */
  uuid?: string;
}

/** CustomerSubscriptionSummary */
export interface CustomerSubscriptionSummary {
  /** The name of the customer */
  customer_name?: string;
  /** The UUID of the customer */
  customer_uuid?: string;
  /**
   * The starting date of the next period. `null` if subscription is expired
   * @example "2022-02-01:00:00:00:00+00"
   */
  next_period_starts_at?: string;
  /** Not For Resale */
  nfr?: boolean;
  seats?: CustomerSubscriptionSummarySeats;
  /** @example 12 */
  term?: number;
}

/** CustomerSubscriptionSummaryList */
export interface CustomerSubscriptionSummaryList {
  items?: CustomerSubscriptionSummary[];
  total?: number;
}

/**
 * CustomerSubscriptionSummarySeat
 * Statistic for specific kind of seat
 */
export interface CustomerSubscriptionSummarySeat {
  /** Total seats */
  quantity?: number;
  /** Total seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** CustomerSubscriptionSummarySeats */
export interface CustomerSubscriptionSummarySeats {
  /** Statistic for specific kind of seat */
  "0"?: CustomerSubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "1"?: CustomerSubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "3"?: CustomerSubscriptionSummarySeat;
  /** Total customer subscription's seats */
  quantity?: number;
  /** Total customer subscription's seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

export interface Error {
  reason?: string[];
  status_code?: number;
  timestamp?: string[];
}

export type MainAuthorization = AuthorizationBase & {
  /** The UUID of the related subscription */
  subscription_uuid?: string;
};

export type MainAuthorizationList = BaseAuthorizationList & {
  items?: MainAuthorization[];
};

/** Rule */
export interface Rule {
  /** The name of the rule */
  name: string;
  /** Rule metadata */
  options?: Record<string, string>;
}

/** Seat */
export interface Seat {
  quantity?: number;
}

/** Seats */
export interface Seats {
  "0"?: Seat;
  "1"?: Seat;
  "3"?: Seat;
}

export type SubAuthorization = AuthorizationBase & {
  /** The UUID of the related location */
  location_uuid?: string;
  /** The UUID of the related main authorization */
  main_authorization_uuid?: string;
};

export type SubAuthorizationList = BaseAuthorizationList & {
  items?: SubAuthorization[];
};

/** SubscriptionCreate */
export interface Subscription {
  /** Whether the subscription should canceled at the end of period */
  cancel_at_end_of_period?: boolean;
  /** The creation date of the subscription */
  created_at?: string;
  /** The ending date of the current period. This value is updated automatically according the `term`. */
  current_period_ends_at?: string;
  /** The starting date of the current period. This value is updated automatically according the `term`. */
  current_period_started_at?: string;
  /** The description of the subscription */
  description?: string;
  /**
   * The name of the subscription
   * @default "default"
   */
  name?: string;
  /**
   * The partnership level of the subscription
   * @default "bronze"
   */
  partnership?: "bronze" | "silver" | "gold" | "platinum";
  /** The status of the subscription. Possible values are: ACTIVE, EXPIRED */
  status?: string;
  /** The UUID of the tenant */
  tenant_uuid?: string;
  /**
   * The duration of the subscription in months
   * @default 12
   */
  term?: 12;
  /** The date the subscription had last been modified */
  updated_at?: string;
  /** The UUID of the subscription */
  uuid?: string;
}

/** SubscriptionList */
export interface SubscriptionList {
  filtered?: number;
  items?: Subscription[];
  total?: number;
}

/** SubscriptionSummary */
export interface SubscriptionSummary {
  /** The partnership level of the subscription */
  partnership?: string;
  seats?: SubscriptionSummarySeats;
}

/**
 * SubscriptionSummarySeat
 * Statistic for specific kind of seat
 */
export interface SubscriptionSummarySeat {
  /** Statistic for specific term */
  by_term?: SubscriptionSummarySeatsByTerm;
  /** Total seats */
  quantity?: number;
  /** Total seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** SubscriptionSummarySeats */
export interface SubscriptionSummarySeats {
  /** Statistic for specific kind of seat */
  "0"?: SubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "1"?: SubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "3"?: SubscriptionSummarySeat;
  /** Statistic for specific term */
  by_term?: SubscriptionSummarySeatsByTerm;
  /** Total subscription's seats */
  quantity?: number;
  /** Total subscription's seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/**
 * SubscriptionSummarySeatsByTerm
 * Statistic for specific term
 */
export interface SubscriptionSummarySeatsByTerm {
  "1"?: SubscriptionSummarySeatsByTermQuantity;
  "12"?: SubscriptionSummarySeatsByTermQuantity;
}

/** SubscriptionSummarySeatsByTermQuantity */
export interface SubscriptionSummarySeatsByTermQuantity {
  /** Total seats with this specific term */
  quantity?: number;
  /** Total seats with this specific term on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** Token */
export interface Token {
  /** The authorization token in JWT format */
  jwt?: string;
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
 * @title swarm-accessd
 * @version 1.0
 * @license GPL v3 (http://www.gnu.org/licenses/gpl.txt)
 * @baseUrl /1.0
 * @contact Dev Team <dev@wazo.io> (http://wazo.io)
 *
 * Swarm accessd exposes an API for managing subscriptions and querying related access rights.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  authorizations = {
    /**
     * @description **Required ACL:** `accessd.authorizations.read`
     *
     * @tags authorizations
     * @name ListAuthorizations
     * @summary List authorizations
     * @request GET:/authorizations
     * @secure
     */
    listAuthorizations: (
      query?: {
        /** The status of the authorization. Possible values are: OPEN, REVOKED */
        status?: string;
        /** The uuid of the main authorization authorizations are linked to */
        main_authorization_uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubAuthorizationList, any>({
        path: `/authorizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.create`
     *
     * @tags authorizations
     * @name CreateAuthorization
     * @summary Create authorization
     * @request POST:/authorizations
     * @secure
     */
    createAuthorization: (body: SubAuthorization, params: RequestParams = {}) =>
      this.request<SubAuthorization, APIError | Error>({
        path: `/authorizations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.seats.read`
     *
     * @tags authorizations
     * @name ListAuthorizationsSeats
     * @summary List authorizations seats
     * @request GET:/authorizations/seats
     * @secure
     */
    listAuthorizationsSeats: (params: RequestParams = {}) =>
      this.request<Seats, any>({
        path: `/authorizations/seats`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.token.create`
     *
     * @tags authorizations
     * @name CreateAuthorizationsToken
     * @summary Create a token for several authorizations
     * @request POST:/authorizations/token
     * @secure
     */
    createAuthorizationsToken: (
      body: AuthorizationsUUIDs,
      params: RequestParams = {},
    ) =>
      this.request<Token, APIError | Error>({
        path: `/authorizations/token`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.delete`
     *
     * @tags authorizations
     * @name DeleteAuthorization
     * @summary Delete an authorization
     * @request DELETE:/authorizations/{authorization_uuid}
     * @secure
     */
    deleteAuthorization: (
      authorizationUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/authorizations/${authorizationUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.read`
     *
     * @tags authorizations
     * @name GetAuthorization
     * @summary Get authorization
     * @request GET:/authorizations/{authorization_uuid}
     * @secure
     */
    getAuthorization: (authorizationUuid: string, params: RequestParams = {}) =>
      this.request<SubAuthorization, Error>({
        path: `/authorizations/${authorizationUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.update`
     *
     * @tags authorizations
     * @name UpdateAuthorization
     * @summary Update an authorization
     * @request PUT:/authorizations/{authorization_uuid}
     * @secure
     */
    updateAuthorization: (
      authorizationUuid: string,
      body: SubAuthorization,
      params: RequestParams = {},
    ) =>
      this.request<SubAuthorization, APIError | Error>({
        path: `/authorizations/${authorizationUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `accessd.config.read`
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
     * @description **Required ACL:** `accessd.customers.subscriptions.default.summary.read`
     *
     * @tags customers, subscriptions
     * @name ListCustomerSubscriptionSummaries
     * @summary List customer subscription summaries
     * @request GET:/customers/subscriptions/default/summary
     * @secure
     */
    listCustomerSubscriptionSummaries: (
      query?: {
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Maximum number of items to return in the list */
        limit?: number;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerSubscriptionSummaryList, Error>({
        path: `/customers/subscriptions/default/summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.read` The `default` resource always exists
     *
     * @tags customers, subscriptions
     * @name GetCustomerSubscription
     * @summary Get customer's subscription
     * @request GET:/customers/{customer_uuid}/subscriptions/default
     * @secure
     */
    getCustomerSubscription: (
      customerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<CustomerSubscription, any>({
        path: `/customers/${customerUuid}/subscriptions/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.update` - The `default` resource always exists - When expired, the subscription cannot be updated - Only Wazo can update the `current_period_started_at` field - Only Wazo can update the `term` field after a started period - Only Wazo can update the `nfr` field after a started period
     *
     * @tags customers, subscriptions
     * @name UpdateCustomerSubscription
     * @summary Update customer's subscription
     * @request PUT:/customers/{customer_uuid}/subscriptions/default
     * @secure
     */
    updateCustomerSubscription: (
      customerUuid: string,
      body: CustomerSubscription,
      params: RequestParams = {},
    ) =>
      this.request<CustomerSubscription, APIError>({
        path: `/customers/${customerUuid}/subscriptions/default`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.activate.update` - All revoked authorizations will be re-opened - `cancel_at_end_of_period` will be forced to `false` - `current_period_started_at` will be set to today
     *
     * @tags customers, subscriptions
     * @name ActivateCustomerSubscriptionDefault
     * @summary Activate default customer subscription
     * @request PUT:/customers/{customer_uuid}/subscriptions/default/activate
     * @secure
     */
    activateCustomerSubscriptionDefault: (
      customerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, APIError>({
        path: `/customers/${customerUuid}/subscriptions/default/activate`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.expire.update` - All open authorizations will be revoked
     *
     * @tags customers, subscriptions
     * @name ExpireCustomerSubscriptionDefault
     * @summary Activate default customer subscription
     * @request PUT:/customers/{customer_uuid}/subscriptions/default/expire
     * @secure
     */
    expireCustomerSubscriptionDefault: (
      customerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, APIError>({
        path: `/customers/${customerUuid}/subscriptions/default/expire`,
        method: "PUT",
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
     * @summary Check if swarm-accessd is OK
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
  subscriptions = {
    /**
     * @description **Required ACL:** `accessd.subscriptions.read`
     *
     * @tags subscriptions
     * @name ListSubscriptions
     * @summary List subscriptions
     * @request GET:/subscriptions
     * @secure
     */
    listSubscriptions: (
      query?: {
        /** The term (in months) of the subscription */
        term?: number;
        /** The creation date of the subscription */
        created_at?: string;
        /** Whether the subscription auto renew itself */
        cancel_at_end_of_period?: boolean;
        /** The partnership level of the subscription */
        partnership?: string;
        /** The status of the subscription. Possible values are : ACTIVE, EXPIRED */
        status?: string;
        /** Whether to recurse for subtenants */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionList, any>({
        path: `/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.default.read` The `default` resource always exists
     *
     * @tags subscriptions
     * @name GetSubscriptionDefault
     * @summary Get default subscription
     * @request GET:/subscriptions/default
     * @secure
     */
    getSubscriptionDefault: (params: RequestParams = {}) =>
      this.request<Subscription, any>({
        path: `/subscriptions/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.default.update` The `default` resource always exists
     *
     * @tags subscriptions
     * @name UpdateSubscriptionDefault
     * @summary Update default subscription
     * @request PUT:/subscriptions/default
     * @secure
     */
    updateSubscriptionDefault: (
      body: Subscription,
      params: RequestParams = {},
    ) =>
      this.request<Subscription, APIError>({
        path: `/subscriptions/default`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.default.activate.update` - All revoked authorizations will be re-opened - `cancel_at_end_of_period` will be forced to `false` - `current_period_started_at` will be set to today
     *
     * @tags subscriptions
     * @name ActivateSubscriptionDefault
     * @summary Activate default subscription
     * @request PUT:/subscriptions/default/activate
     * @secure
     */
    activateSubscriptionDefault: (params: RequestParams = {}) =>
      this.request<void, APIError>({
        path: `/subscriptions/default/activate`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.default.expire.update` - All opened authorizations will be revoked
     *
     * @tags subscriptions
     * @name ExpireSubscriptionDefault
     * @summary Expire default subscription
     * @request PUT:/subscriptions/default/expire
     * @secure
     */
    expireSubscriptionDefault: (params: RequestParams = {}) =>
      this.request<void, APIError>({
        path: `/subscriptions/default/expire`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.default.summary.read` Using `recurse=true` will sum seats from all customers from sub-resellers. Using `recurse=false` will only sum seats from *direct* customers. NFR subscriptions are ignored.
     *
     * @tags subscriptions
     * @name GetSubscriptionSummary
     * @summary Get subscription summary
     * @request GET:/subscriptions/default/summary
     * @secure
     */
    getSubscriptionSummary: (
      query?: {
        /** Whether to recurse for subtenants */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionSummary, Error>({
        path: `/subscriptions/default/summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.token.create`
     *
     * @tags authorizations, subscriptions
     * @name CreateSubscriptionAuthorizationsToken
     * @summary Create a token for main authorizations belonging to a tenant subscriptions
     * @request POST:/subscriptions/token
     * @secure
     */
    createSubscriptionAuthorizationsToken: (params: RequestParams = {}) =>
      this.request<Token, APIError>({
        path: `/subscriptions/token`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.delete`
     *
     * @tags subscriptions
     * @name DeleteSubscription
     * @summary Delete a subscription
     * @request DELETE:/subscriptions/{subscription_uuid}
     * @secure
     */
    deleteSubscription: (
      subscriptionUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.read`
     *
     * @tags subscriptions
     * @name GetSubscription
     * @summary Get subscription
     * @request GET:/subscriptions/{subscription_uuid}
     * @secure
     */
    getSubscription: (subscriptionUuid: string, params: RequestParams = {}) =>
      this.request<Subscription, Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.update`
     *
     * @tags subscriptions
     * @name UpdateSubscription
     * @summary Update subscription
     * @request PUT:/subscriptions/{subscription_uuid}
     * @secure
     */
    updateSubscription: (
      subscriptionUuid: string,
      body: Subscription,
      params: RequestParams = {},
    ) =>
      this.request<Subscription, APIError | Error>({
        path: `/subscriptions/${subscriptionUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.authorizations.read`
     *
     * @tags authorizations, subscriptions
     * @name ListSubscriptionAuthorizations
     * @summary List authorizations
     * @request GET:/subscriptions/{subscription_uuid}/authorizations
     * @secure
     */
    listSubscriptionAuthorizations: (
      subscriptionUuid: string,
      query?: {
        /** The status of the authorization. Possible values are: OPEN, REVOKED */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MainAuthorizationList, Error>({
        path: `/subscriptions/${subscriptionUuid}/authorizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.create`
     *
     * @tags authorizations, subscriptions
     * @name CreateSubscriptionAuthorization
     * @summary Create authorization for a subscription
     * @request POST:/subscriptions/{subscription_uuid}/authorizations
     * @secure
     */
    createSubscriptionAuthorization: (
      subscriptionUuid: string,
      body: MainAuthorization,
      params: RequestParams = {},
    ) =>
      this.request<MainAuthorization, APIError | Error>({
        path: `/subscriptions/${subscriptionUuid}/authorizations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.{authorization_uuid}.delete`
     *
     * @tags authorizations, subscriptions
     * @name DeleteSubscriptionAuthorization
     * @summary Delete an authorization for a subscription
     * @request DELETE:/subscriptions/{subscription_uuid}/authorizations/{authorization_uuid}
     * @secure
     */
    deleteSubscriptionAuthorization: (
      subscriptionUuid: string,
      authorizationUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/subscriptions/${subscriptionUuid}/authorizations/${authorizationUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.{authorization_uuid}.update`
     *
     * @tags authorizations, subscriptions
     * @name UpdateSubscriptionAuthorization
     * @summary Update an authorization for a subscription
     * @request PUT:/subscriptions/{subscription_uuid}/authorizations/{authorization_uuid}
     * @secure
     */
    updateSubscriptionAuthorization: (
      subscriptionUuid: string,
      authorizationUuid: string,
      body: MainAuthorization,
      params: RequestParams = {},
    ) =>
      this.request<MainAuthorization, APIError | Error>({
        path: `/subscriptions/${subscriptionUuid}/authorizations/${authorizationUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
