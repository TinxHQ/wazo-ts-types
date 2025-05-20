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

/** Pause reason information */
export interface AgentPauseReason {
  /** Pause Reason */
  reason?: string;
}

/** Agent status */
export interface AgentStatus {
  /** The context on which the agent is logged, or null if the agent is not logged */
  context?: string;
  /** The extension on which the agent is logged, or null if the agent is not logged */
  extension?: string;
  /**
   * Agent's ID
   * @format int32
   */
  id?: number;
  /** True if the agent is logged, else false */
  logged?: boolean;
  /** Agent's number */
  number?: string;
  /**
   * Wazo's UUID
   * @format uuid
   */
  origin_uuid?: string;
  /** True if the agent is paused, else false */
  paused?: boolean;
  /** The reason of the agent pause */
  paused_reason?: string;
  /** The interface (e.g. SIP/alice) to determine if the agent is in use or not */
  state_interface?: string;
  /**
   * Tenant's UUID
   * @format uuid
   */
  tenant_uuid?: string;
}

export interface ComponentWithStatus {
  status?: StatusValue;
}

/** Error */
export interface Error {
  /** Error identifier */
  error?: string;
}

/** Login information */
export interface LoginInfo {
  /** Context */
  context?: string;
  /** Extension */
  extension?: string;
}

/** Queue */
export interface Queue {
  /** Queue's ID */
  queue_id?: number;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  service_token?: ComponentWithStatus;
}

/** Login information */
export interface UserAgentLoginInfo {
  /** ID of the line where the agent should be logged */
  line_id?: number;
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
 * @title wazo-agentd
 * @version 1.0
 * @license GPL v3 (http://www.gnu.org/licenses/gpl.txt)
 * @baseUrl /1.0
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Agent service
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  agents = {
    /**
     * @description **Required ACL:** `agentd.agents.read`
     *
     * @tags agents
     * @name GetAgents
     * @summary Get the status of all agents.
     * @request GET:/agents
     * @secure
     */
    getAgents: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<AgentStatus, any>({
        path: `/agents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.read`
     *
     * @tags agent
     * @name GetAgentById
     * @summary Get agent status.
     * @request GET:/agents/by-id/{agent_id}
     * @secure
     */
    getAgentById: (agentId: number, params: RequestParams = {}) =>
      this.request<AgentStatus, Error>({
        path: `/agents/by-id/${agentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.add.create`
     *
     * @tags agent
     * @name AddAgentById
     * @summary Add agent to a queue.
     * @request POST:/agents/by-id/{agent_id}/add
     * @secure
     */
    addAgentById: (agentId: number, body: Queue, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/agents/by-id/${agentId}/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.login.create`
     *
     * @tags agent
     * @name LoginAgentById
     * @summary Log an agent.
     * @request POST:/agents/by-id/{agent_id}/login
     * @secure
     */
    loginAgentById: (
      agentId: number,
      body: LoginInfo,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/agents/by-id/${agentId}/login`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.logoff.create`
     *
     * @tags agent
     * @name LogoffAgentById
     * @summary Logoff an agent.
     * @request POST:/agents/by-id/{agent_id}/logoff
     * @secure
     */
    logoffAgentById: (agentId: number, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/agents/by-id/${agentId}/logoff`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.remove.create`
     *
     * @tags agent
     * @name RemoveAgentById
     * @summary Remove agent from a queue.
     * @request POST:/agents/by-id/{agent_id}/remove
     * @secure
     */
    removeAgentById: (
      agentId: number,
      body: Queue,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/agents/by-id/${agentId}/remove`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.read`
     *
     * @tags agent
     * @name GetAgentByNumber
     * @summary Get agent status.
     * @request GET:/agents/by-number/{agent_number}
     * @secure
     */
    getAgentByNumber: (agentNumber: string, params: RequestParams = {}) =>
      this.request<AgentStatus, Error>({
        path: `/agents/by-number/${agentNumber}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.login.create`
     *
     * @tags agent
     * @name LoginAgentByNumber
     * @summary Log an agent.
     * @request POST:/agents/by-number/{agent_number}/login
     * @secure
     */
    loginAgentByNumber: (
      agentNumber: string,
      body: LoginInfo,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/agents/by-number/${agentNumber}/login`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.logoff.create`
     *
     * @tags agent
     * @name LogoffAgentByNumber
     * @summary Logoff an agent.
     * @request POST:/agents/by-number/{agent_number}/logoff
     * @secure
     */
    logoffAgentByNumber: (agentNumber: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/agents/by-number/${agentNumber}/logoff`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.pause.create`
     *
     * @tags agent
     * @name PauseAgentByNumber
     * @summary Pause an agent.
     * @request POST:/agents/by-number/{agent_number}/pause
     * @secure
     */
    pauseAgentByNumber: (
      agentNumber: string,
      body: AgentPauseReason,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/agents/by-number/${agentNumber}/pause`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.unpause.create`
     *
     * @tags agent
     * @name UnpauseAgentByNumber
     * @summary Unpause an agent.
     * @request POST:/agents/by-number/{agent_number}/unpause
     * @secure
     */
    unpauseAgentByNumber: (agentNumber: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/agents/by-number/${agentNumber}/unpause`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.logoff.create`
     *
     * @tags agents
     * @name LogoffAgents
     * @summary Logoff all agents.
     * @request POST:/agents/logoff
     * @secure
     */
    logoffAgents: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agents/logoff`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.agents.relog.create` Relog all agents which are currently logged.
     *
     * @tags agents
     * @name RelogAgents
     * @summary Relog all agents.
     * @request POST:/agents/relog
     * @secure
     */
    relogAgents: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agents/relog`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `agentd.status.read`
     *
     * @tags status
     * @name GetStatus
     * @summary Get the status of wazo-agentd.
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
  users = {
    /**
     * @description **Required ACL:** `agentd.users.me.agents.read`
     *
     * @tags agent, user
     * @name GetUserAgent
     * @summary Get agent status of the user holding the authentication token.
     * @request GET:/users/me/agents
     * @secure
     */
    getUserAgent: (params: RequestParams = {}) =>
      this.request<AgentStatus, Error>({
        path: `/users/me/agents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.users.me.agents.login.create`
     *
     * @tags agent, user
     * @name LoginUserAgent
     * @summary Log the agent of the user holding the authentication token
     * @request POST:/users/me/agents/login
     * @secure
     */
    loginUserAgent: (body: UserAgentLoginInfo, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/agents/login`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.users.me.agents.logoff.create`
     *
     * @tags agent, user
     * @name LogoffUserAgent
     * @summary Logoff the agent of the user holding the authentication token
     * @request POST:/users/me/agents/logoff
     * @secure
     */
    logoffUserAgent: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/agents/logoff`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.users.me.agents.pause.create`
     *
     * @tags agent, user
     * @name PauseUserAgent
     * @summary Pause the agent of the user holding the authentication token
     * @request POST:/users/me/agents/pause
     * @secure
     */
    pauseUserAgent: (body: AgentPauseReason, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/agents/pause`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `agentd.users.me.agents.unpause.create`
     *
     * @tags agent, user
     * @name UnpauseUserAgent
     * @summary Unpause the agent of the user holding the authentication token
     * @request POST:/users/me/agents/unpause
     * @secure
     */
    unpauseUserAgent: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/agents/unpause`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
}
