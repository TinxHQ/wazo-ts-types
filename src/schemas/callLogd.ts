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

export enum CallStatus {
  Answered = "answered",
  Blocked = "blocked",
  Unknown = "unknown",
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export interface AgentStatistic {
  /** ID of the corresponding agent. */
  agent_id?: number;
  /** The number of this agent */
  agent_number?: string;
  /** The time spent in conversation in seconds */
  conversation_time?: number;
  /** Start of the statistic interval. */
  from?: string;
  /** The time spent logged-in in seconds */
  login_time?: number;
  /** The time spent in pause in seconds */
  pause_time?: number;
  /**
   * Tenant UUID of the corresponding queue.
   * @format uuid
   */
  tenant_uuid?: string;
  /** End of the statistic interval. */
  until?: string;
  /** The time spent in wrapup in seconds */
  wrapup_time?: number;
}

export interface AgentStatistics {
  items?: AgentStatistic[];
  total?: number;
}

export interface AgentsStatistics {
  items?: AgentStatistic[];
  total?: number;
}

export interface CDR {
  /** @format date-time */
  answer?: string;
  answered?: boolean;
  call_direction?: "inbound" | "internal" | "outbound";
  call_status?: CallStatus;
  conversation_id?: string;
  /** Contains the `type` of the called destination; which can be either `user`, `conference`, `meeting`, or `unknown` by default. Also contains useful information about the destination (`id` and `name`). */
  destination_details?: object;
  destination_extension?: string;
  destination_internal_context?: string;
  /** the internal extension of the line that answers */
  destination_internal_extension?: string;
  destination_internal_tenant_uuid?: string;
  destination_line_id?: number;
  destination_name?: string;
  destination_tenant_uuid?: string;
  destination_user_uuid?: string;
  /** Duration of the call, in seconds. */
  duration?: number;
  /** @format date-time */
  end?: string;
  id?: number;
  recordings?: Recording[];
  requested_context?: string;
  requested_extension?: string;
  requested_internal_context?: string;
  /** the internal extension of the first line to ring */
  requested_internal_extension?: string;
  requested_internal_tenant_uuid?: string;
  requested_name?: string;
  requested_tenant_uuid?: string;
  requested_user_uuid?: string;
  source_extension?: string;
  source_internal_context?: string;
  /** the internal extension of the line that placed the call */
  source_internal_extension?: string;
  source_internal_name?: string;
  source_internal_tenant_uuid?: string;
  source_line_id?: number;
  source_name?: string;
  source_tenant_uuid?: string;
  source_user_uuid?: string;
  /** @format date-time */
  start?: string;
  tags?: string[];
}

export interface CDRList {
  filtered?: number;
  items?: CDR[];
  total?: number;
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

export interface Export {
  filename?: string;
  /** @format date-time */
  requested_at?: string;
  status?: "pending" | "processing" | "finished" | "deleted" | "error";
  tenant_uuid?: string;
  user_uuid?: string;
  uuid?: string;
}

export interface QueueQoSStatistic {
  /** Start of the statistic interval. */
  from?: string;
  quality_of_service?: {
    /** Number of calls that were abandoned while they were waiting for an answer. */
    abandoned?: number;
    /** Number of calls answered by an agent. */
    answered?: number;
    /** Maximum of the QoS interval */
    max?: number;
    /** Minimum of the QoS interval */
    min?: number;
  }[];
  /** ID of the corresponding queue. */
  queue_id?: number;
  /** Name of the corresponding queue. */
  queue_name?: string;
  /**
   * Tenant UUID of the corresponding queue.
   * @format uuid
   */
  tenant_uuid?: string;
  /** End of the statistic interval. */
  until?: string;
}

export interface QueueQoSStatistics {
  items?: QueueQoSStatistic[];
  total?: number;
}

export interface QueueStatistic {
  /** Number of calls that were abandoned while they were waiting for an answer. */
  abandoned?: number;
  /** Number of calls answered by an agent. */
  answered?: number;
  /**
   * The number of answered called over (received calls - closed calls)
   * @format float
   */
  answered_rate?: number;
  /** The average waiting time of calls */
  average_waiting_time?: number;
  /** Number of calls received when no agent was available, when there was no agent to take the call, when the join an empty queue condition is reached, or when the drop callers if no agent condition is reached. */
  blocked?: number;
  /** Number of calls received when the queue was closed. */
  closed?: number;
  /** Start of the statistic interval. */
  from?: string;
  /** Number of calls that reached the ring timeout delay. */
  not_answered?: number;
  /**
   * Percentage based on the number of calls answered in less than the defined quality of service threshold over the number of answered calls.
   * @format float
   */
  quality_of_service?: number;
  /** ID of the corresponding queue. */
  queue_id?: number;
  /** Name of the corresponding queue. */
  queue_name?: string;
  /** Total number of calls received in the interval. */
  received?: number;
  /** Number of calls received when the queue was full or when one of the diversion parameter was reached. */
  saturated?: number;
  /**
   * Tenant UUID of the corresponding queue.
   * @format uuid
   */
  tenant_uuid?: string;
  /** End of the statistic interval. */
  until?: string;
}

export interface QueueStatistics {
  items?: QueueStatistic[];
  total?: number;
}

export interface QueuesStatistics {
  items?: QueueStatistic[];
  total?: number;
}

export interface Recording {
  deleted?: boolean;
  /** @format date-time */
  end_time?: string;
  filename?: string;
  /** @format date-time */
  start_time?: string;
  uuid?: string;
}

export interface Retention {
  cdr_days?: number;
  default_cdr_days?: number;
  default_export_days?: number;
  default_recording_days?: number;
  export_days?: number;
  recording_days?: number;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  service_token?: ComponentWithStatus;
  task_queue?: ComponentWithStatus;
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
 * @title wazo-call-logd
 * @version 1.0.0
 * @baseUrl /1.0
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Consult call logs from a REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  agents = {
    /**
     * @description **Required ACL:** `call-logd.agents.statistics.read` Statistics are aggregated by agents over the period specified by the `from` and `until` query parameters.
     *
     * @tags agent_statistics
     * @name StatisticsList
     * @summary Statistics for all agents
     * @request GET:/agents/statistics
     * @secure
     */
    statisticsList: (
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_start_time?: string;
        /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_end_time?: string;
        /**
         * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
         * @uniqueItems true
         * @default [1,2,3,4,5,6,7]
         */
        week_days?: number[];
        /**
         * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
         * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
         * version installed on the server.
         * @default "UTC"
         */
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AgentsStatistics, Error>({
        path: `/agents/statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.agents.statistics.{agent_id}.read` Statistics for an agent are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period.
     *
     * @tags agent_statistics
     * @name StatisticsList2
     * @summary Statistics for a specific agent
     * @request GET:/agents/{agent_id}/statistics
     * @originalName statisticsList
     * @duplicate
     * @secure
     */
    statisticsList2: (
      agentId: number,
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
        interval?: "hour" | "day" | "month";
        /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_start_time?: string;
        /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_end_time?: string;
        /**
         * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
         * @uniqueItems true
         * @default [1,2,3,4,5,6,7]
         */
        week_days?: number[];
        /**
         * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
         * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
         * version installed on the server.
         * @default "UTC"
         */
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AgentStatistics, Error>({
        path: `/agents/${agentId}/statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  cdr = {
    /**
     * @description **Required ACL:** `call-logd.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
     *
     * @tags cdr
     * @name GetCdr
     * @summary List CDR
     * @request GET:/cdr
     * @secure
     */
    getCdr: (
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Maximum number of items to return in the list. Default to 1000 if not specified. */
        limit?: number;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Filter list of items */
        search?: string;
        /** Filter list of items */
        call_direction?: "internal" | "inbound" | "outbound";
        /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
        number?: string;
        /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
        tags?: string[];
        /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
        user_uuid?: string[];
        /** Ignore CDR created before the given CDR ID. */
        from_id?: number;
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Will only return one result for the selected field */
        distinct?: "peer_exten";
        /** Filter by recorded status. */
        recorded?: boolean;
        /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
        format?: "csv" | "json";
        /** Filter by conversation identifier */
        conversation_id?: string;
        /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
        call_status?: "answered" | "blocked";
      },
      params: RequestParams = {},
    ) =>
      this.request<CDRList, Error>({
        path: `/cdr`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.cdr.recordings.media.delete`
     *
     * @tags cdr
     * @name RecordingsMediaDelete
     * @summary Delete multiple CDRs recording media
     * @request DELETE:/cdr/recordings/media
     * @secure
     */
    recordingsMediaDelete: (
      body: {
        cdr_ids?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/cdr/recordings/media`,
        method: "DELETE",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.cdr.recordings.media.export.create` This endpoint creates a new export and returns its UUID.
     *
     * @tags cdr, exports
     * @name RecordingsMediaExportCreate
     * @summary Create an export for the recording media of multiple CDRs
     * @request POST:/cdr/recordings/media/export
     * @secure
     */
    recordingsMediaExportCreate: (
      body: {
        cdr_ids?: string[];
      },
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Filter list of items */
        search?: string;
        /** Filter list of items */
        call_direction?: "internal" | "inbound" | "outbound";
        /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
        number?: string;
        /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
        tags?: string[];
        /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
        user_uuid?: string[];
        /** Ignore CDR created before the given CDR ID. */
        from_id?: number;
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** E-mail address */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          export_uuid?: string;
        },
        Error
      >({
        path: `/cdr/recordings/media/export`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.cdr.{cdr_id}.read`
     *
     * @tags cdr
     * @name GetCdr2
     * @summary Get a CDR by ID
     * @request GET:/cdr/{cdr_id}
     * @originalName getCdr
     * @duplicate
     * @secure
     */
    getCdr2: (cdrId: number, params: RequestParams = {}) =>
      this.request<CDR, Error>({
        path: `/cdr/${cdrId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.cdr.{cdr_id}.recordings.{recording_uuid}.media.delete`
     *
     * @tags cdr
     * @name RecordingsMediaDelete2
     * @summary Delete a recording media
     * @request DELETE:/cdr/{cdr_id}/recordings/{recording_uuid}/media
     * @originalName recordingsMediaDelete
     * @duplicate
     * @secure
     */
    recordingsMediaDelete2: (
      cdrId: number,
      recordingUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/cdr/${cdrId}/recordings/${recordingUuid}/media`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.cdr.{cdr_id}.recordings.{recording_uuid}.media.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
     *
     * @tags cdr
     * @name RecordingsMediaList
     * @summary Get a recording media
     * @request GET:/cdr/{cdr_id}/recordings/{recording_uuid}/media
     * @secure
     */
    recordingsMediaList: (
      cdrId: number,
      recordingUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/cdr/${cdrId}/recordings/${recordingUuid}/media`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `call_logd.config.read`
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
     * @description **Required ACL:** `call_logd.config.update` Changes are not persistent across service restart.
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
  exports = {
    /**
     * @description **Required ACL:** `call-logd.exports.{export_uuid}.read`
     *
     * @tags exports
     * @name ExportsDetail
     * @summary Get an export by the given UUID
     * @request GET:/exports/{export_uuid}
     * @secure
     */
    exportsDetail: (exportUuid: string, params: RequestParams = {}) =>
      this.request<Export, Error>({
        path: `/exports/${exportUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.exports.{export_uuid}.download.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
     *
     * @tags exports
     * @name DownloadList
     * @summary Download an export as a ZIP archive by the given UUID
     * @request GET:/exports/{export_uuid}/download
     * @secure
     */
    downloadList: (exportUuid: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/exports/${exportUuid}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  queues = {
    /**
     * @description **Required ACL:** `call-logd.queues.statistics.read` Statistics are aggregated by queues over the period specified by the `from` and `until` query parameters. **Notice**: Statistics are generated every 6 hours
     *
     * @tags queue_statistics
     * @name StatisticsList
     * @summary Statistics for all queues
     * @request GET:/queues/statistics
     * @secure
     */
    statisticsList: (
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** The number of seconds representing a good quality of service. */
        qos_threshold?: number;
        /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_start_time?: string;
        /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_end_time?: string;
        /**
         * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
         * @uniqueItems true
         * @default [1,2,3,4,5,6,7]
         */
        week_days?: number[];
        /**
         * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
         * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
         * version installed on the server.
         * @default "UTC"
         */
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueuesStatistics, Error>({
        path: `/queues/statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.queues.statistics.{queue_id}.read` Statistics for a queue are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period. **Notice**: Statistics are generated every 6 hours
     *
     * @tags queue_statistics
     * @name StatisticsList2
     * @summary Statistics for a specific queue
     * @request GET:/queues/{queue_id}/statistics
     * @originalName statisticsList
     * @duplicate
     * @secure
     */
    statisticsList2: (
      queueId: number,
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
        interval?: "hour" | "day" | "month";
        /** The number of seconds representing a good quality of service. */
        qos_threshold?: number;
        /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_start_time?: string;
        /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_end_time?: string;
        /**
         * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
         * @uniqueItems true
         * @default [1,2,3,4,5,6,7]
         */
        week_days?: number[];
        /**
         * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
         * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
         * version installed on the server.
         * @default "UTC"
         */
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueueStatistics, Error>({
        path: `/queues/${queueId}/statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.queues.statistics.{queue_id}.qos.read` QoS thresholds implicitly include a starting 0 and ending to infinite (null). Statistics for a queue are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period. **Notice**: Statistics are generated every 6 hours
     *
     * @tags queue_statistics
     * @name StatisticsQosList
     * @summary QoS statistics for a specific queue
     * @request GET:/queues/{queue_id}/statistics/qos
     * @secure
     */
    statisticsQosList: (
      queueId: number,
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
        interval?: "hour" | "day" | "month";
        /**
         * The steps of quality of service times used for the interval generation.
         * @uniqueItems true
         */
        qos_thresholds?: number[];
        /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_start_time?: string;
        /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
        day_end_time?: string;
        /**
         * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
         * @uniqueItems true
         * @default [1,2,3,4,5,6,7]
         */
        week_days?: number[];
        /**
         * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
         * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
         * version installed on the server.
         * @default "UTC"
         */
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueueQoSStatistics, Error>({
        path: `/queues/${queueId}/statistics/qos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  retention = {
    /**
     * @description **Required ACL:** `call-logd.retention.read`
     *
     * @tags retention
     * @name RetentionList
     * @summary Retention configuration
     * @request GET:/retention
     * @secure
     */
    retentionList: (params: RequestParams = {}) =>
      this.request<Retention, Error>({
        path: `/retention`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.retention.update` **WARNING** This endpoint reset undefined keys to `null`.
     *
     * @tags retention
     * @name RetentionUpdate
     * @summary Update retention configuration
     * @request PUT:/retention
     * @secure
     */
    retentionUpdate: (body: Retention, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/retention`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `call-logd.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-call-logd
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
  users = {
    /**
     * @description **Required ACL:** `call-logd.users.me.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
     *
     * @tags cdr, users
     * @name MeCdrList
     * @summary List CDR of the authenticated user
     * @request GET:/users/me/cdr
     * @secure
     */
    meCdrList: (
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Maximum number of items to return in the list. Default to 1000 if not specified. */
        limit?: number;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Filter list of items */
        search?: string;
        /** Filter list of items */
        call_direction?: "internal" | "inbound" | "outbound";
        /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
        number?: string;
        /** Ignore CDR created before the given CDR ID. */
        from_id?: number;
        /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
        user_uuid?: string[];
        /** Will only return one result for the selected field */
        distinct?: "peer_exten";
        /** Filter by recorded status. */
        recorded?: boolean;
        /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
        format?: "csv" | "json";
        /** Filter by conversation identifier */
        conversation_id?: string;
        /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
        call_status?: "answered" | "blocked";
      },
      params: RequestParams = {},
    ) =>
      this.request<CDRList, Error>({
        path: `/users/me/cdr`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.users.me.cdr.{cdr_id}.recordings.{recording_uuid}.media.read`
     *
     * @tags cdr
     * @name MeCdrRecordingsMediaList
     * @summary Get a recording media from a user
     * @request GET:/users/me/cdr/{cdr_id}/recordings/{recording_uuid}/media
     * @secure
     */
    meCdrRecordingsMediaList: (
      cdrId: number,
      recordingUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/cdr/${cdrId}/recordings/${recordingUuid}/media`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `call-logd.users.{user_uuid}.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
     *
     * @tags cdr, users
     * @name GetUsers
     * @summary List CDR of the given user
     * @request GET:/users/{user_uuid}/cdr
     * @secure
     */
    getUsers: (
      userUuid: string,
      query?: {
        /**
         * Ignore calls before the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
         * converted according to the `timezone` parameter. If missing, the statistics
         * will start at the oldest available call with timezone UTC.
         * @format date-time
         */
        from?: string;
        /**
         * Ignore calls starting at or after the given date. Format is
         * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
         * according to the `timezone` parameter. If missing, the statistics will include the current
         * day.
         * @format date-time
         */
        until?: string;
        /** Maximum number of items to return in the list. Default to 1000 if not specified. */
        limit?: number;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Filter list of items */
        search?: string;
        /** Filter list of items */
        call_direction?: "internal" | "inbound" | "outbound";
        /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
        number?: string;
        /** Ignore CDR created before the given CDR ID. */
        from_id?: number;
        /** Will only return one result for the selected field */
        distinct?: "peer_exten";
        /** Filter by recorded status. */
        recorded?: boolean;
        /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
        format?: "csv" | "json";
        /** Filter by conversation identifier */
        conversation_id?: string;
        /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
        call_status?: "answered" | "blocked";
      },
      params: RequestParams = {},
    ) =>
      this.request<CDRList, Error>({
        path: `/users/${userUuid}/cdr`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
