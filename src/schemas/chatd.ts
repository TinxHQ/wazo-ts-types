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

export type APIError = Error & {
  /** Resource name of the error */
  resource?: string;
};

export interface ComponentWithStatus {
  status?: StatusValue;
}

export interface ConfigPatchItem {
  /** Patch operation. Supported operation: `replace`. */
  op?: string;
  /** Config element to operate on. Supported path: `/debug` */
  path?: string;
  /** The new value for the resource. */
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

export interface Line {
  id?: number;
  /** The current state of the line. */
  state?:
    | "available"
    | "holding"
    | "ringing"
    | "progressing"
    | "talking"
    | "unavailable";
}

export interface Message {
  /** Alias/nickname of the sender */
  alias?: string;
  /** The content of the message */
  content?: string;
  /** The date of the message's creation */
  created_at?: string;
  room?: RoomRelationBase;
  /** tenant uuid of the sender */
  tenant_uuid?: string;
  /** user uuid of the sender */
  user_uuid?: string;
  /** The UUID of the message */
  uuid?: string;
  /** wazo uuid of the sender */
  wazo_uuid?: string;
}

/** UserItems */
export interface Messages {
  filtered?: number;
  items?: Message[];
  total?: number;
}

/** Presence */
export interface Presence {
  /** If the user has active connections. */
  connected?: boolean;
  /** The "do not disturb" status of the user. */
  do_not_disturb?: boolean;
  /** The date time in UTC of the user's last activity. The value is updated when the user changes his state explicitly. The value is NULL for new user. */
  last_activity?: string;
  /** The current state of the most prioritize state line. The prioritization of each state is the following: ringing > progressing > holding > talking > available > unavailable */
  line_state?:
    | "available"
    | "holding"
    | "ringing"
    | "progressing"
    | "talking"
    | "unavailable";
  lines?: Line[];
  /**
   * If the user uses a mobile application and can be considered reachable.
   *
   * mobile will be true in the following situations
   *
   * * The user has a mobile refresh token
   * * The user has a mobile session
   */
  mobile?: boolean;
  /** The presence state of the user. */
  state: "available" | "away" | "unavailable" | "invisible";
  /** An extended description of the user presence. */
  status?: string;
  /** The UUID of the tenant of the user */
  tenant_uuid?: string;
  /** The UUID of the user */
  uuid?: string;
}

/** PresenceList */
export interface PresenceList {
  /** The number of result matching the searched terms */
  filtered?: number;
  items?: Presence[];
  /** The number of results without filter */
  total?: number;
}

/** Room */
export type Room = RoomRelationBase & {
  /** The name of the room */
  name?: string;
  /** @maxItems 100 */
  users: RoomUser[];
};

export interface RoomRelationBase {
  /** The UUID of the room */
  uuid?: string;
}

export interface RoomUser {
  /** The tenant of the user_uuid. Default to the same tenant as the token owner */
  tenant_uuid?: string;
  uuid: string;
  /** The wazo of the tenant_uuid. Default to the same wazo as the token owner */
  wazo_uuid?: string;
}

/** Rooms */
export interface Rooms {
  filtered?: number;
  items?: Room[];
  total?: number;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
  presence_initialization?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export interface UserMessagePOST {
  /** Alias/nickname of the sender */
  alias: string;
  /** The content of the message */
  content: string;
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
 * @title wazo-chatd
 * @version 1.0.0
 * @baseUrl /1.0
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Control your message and presence from a REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  config = {
    /**
     * @description **Required ACL:** `chatd.config.read`
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
     * @description **Required ACL:** `chatd.config.update`
     *
     * @tags config
     * @name PatchConfig
     * @summary Change part of the configuration
     * @request PATCH:/config
     * @secure
     */
    patchConfig: (
      config_patch: ConfigPatchItem[],
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/config`,
        method: "PATCH",
        body: config_patch,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `chatd.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-chatd
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
     * @description **Required ACL:** `chatd.users.me.rooms.read`
     *
     * @tags rooms
     * @name GetRoom
     * @summary Get room
     * @request GET:/users/me/rooms
     * @secure
     */
    getRoom: (
      query?: {
        /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
        user_uuid?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Rooms, APIError>({
        path: `/users/me/rooms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.me.rooms.create` **Warning**: **>=22.16**: If a room with the same participants exists, it will be returned instead of creating new one. In this case, no other parameter will be taken into account and the return code will be 201. This behaviour will disappear in the future and a 409 error will be raised.
     *
     * @tags rooms
     * @name CreateRoom
     * @summary Create room
     * @request POST:/users/me/rooms
     * @secure
     */
    createRoom: (body: Room, params: RequestParams = {}) =>
      this.request<Room, APIError>({
        path: `/users/me/rooms`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.me.rooms.messages.read`
     *
     * @tags rooms, messages
     * @name ListRoomsMessages
     * @summary List rooms messages
     * @request GET:/users/me/rooms/messages
     * @secure
     */
    listRoomsMessages: (
      query?: {
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Maximum number of items to return in the list */
        limit?: number;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /** Distinct list results by field. Always picks the latest entry. Required if `search` is not specified. */
        distinct?: "room_uuid";
      },
      params: RequestParams = {},
    ) =>
      this.request<Messages, APIError>({
        path: `/users/me/rooms/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.me.rooms.{room_uuid}.messages.read`
     *
     * @tags rooms, messages
     * @name ListRoomMessage
     * @summary List room messages
     * @request GET:/users/me/rooms/{room_uuid}/messages
     * @secure
     */
    listRoomMessage: (
      roomUuid: string,
      query?: {
        /**
         * The date and time from which to retrieve messages. Example: 2019-06-12T10:00:00.000+00:00
         * @format date-time
         */
        from_date?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** Maximum number of items to return in the list */
        limit?: number;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Number of items to skip over in the list. Useful for pagination. */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. Required if `distinct` is not specified. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Messages, APIError>({
        path: `/users/me/rooms/${roomUuid}/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.me.rooms.{room_uuid}.messages.create`
     *
     * @tags rooms, messages
     * @name CreateRoomMessage
     * @summary Create room messages
     * @request POST:/users/me/rooms/{room_uuid}/messages
     * @secure
     */
    createRoomMessage: (
      roomUuid: string,
      body: UserMessagePOST,
      params: RequestParams = {},
    ) =>
      this.request<Message, APIError>({
        path: `/users/me/rooms/${roomUuid}/messages`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.presences.read`
     *
     * @tags presences
     * @name ListPresences
     * @summary List presences
     * @request GET:/users/presences
     * @secure
     */
    listPresences: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
        user_uuid?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PresenceList, any>({
        path: `/users/presences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.{user_uuid}.presences.read`
     *
     * @tags presences
     * @name GetUserPresence
     * @summary Get user presence
     * @request GET:/users/{user_uuid}/presences
     * @secure
     */
    getUserPresence: (userUuid: string, params: RequestParams = {}) =>
      this.request<Presence, APIError>({
        path: `/users/${userUuid}/presences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `chatd.users.{user_uuid}.presences.update`
     *
     * @tags presences
     * @name UpdateUserPresence
     * @summary Update user presence
     * @request PUT:/users/{user_uuid}/presences
     * @secure
     */
    updateUserPresence: (
      userUuid: string,
      body: Presence,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/users/${userUuid}/presences`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags microsoft
     * @name UpdateTeamsPresence
     * @summary Receive presence information from Microsoft Teams
     * @request POST:/users/{user_uuid}/teams/presence
     * @secure
     */
    updateTeamsPresence: (userUuid: string, params: RequestParams = {}) =>
      this.request<ResourceUpdated, NotFoundError>({
        path: `/users/${userUuid}/teams/presence`,
        method: "POST",
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
}
