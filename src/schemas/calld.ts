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

/**
 * Behavior of the transfer. `attended` allows the initiator to talk to the recipient. `blind` does not.
 * @default "attended"
 */
export enum TransferFlow {
  Attended = "attended",
  Blind = "blind",
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

/** @default "answer" */
export enum RelocateCompletion {
  Answer = "answer",
  Api = "api",
}

export interface AdhocConference {
  /** The ID of the adhoc conference */
  conference_id?: string;
}

export interface AdhocConferenceCreation {
  /** The call_id of the host call */
  host_call_id?: string;
  /** The call_id of the participating calls in this conference, excluding the host. */
  participant_call_ids?: string[];
}

export interface Application {
  destination_node_uuid?: string;
}

export interface ApplicationCall {
  caller_id_name?: string;
  caller_id_number?: string;
  conversation_id?: string;
  creation_time?: string;
  dialed_extension?: string;
  id?: string;
  is_caller?: boolean;
  node_uuid?: string;
  on_hold?: boolean;
  snoops?: object;
  /**
   * * Down: the call is not connected to anything yet
   * * Ring: the call just came in the application
   * * Progress: the call is playing a progress ringing tone
   * * Up: the call is answered and media can be sent/received
   * * Ringing: the call is ringing the phone
   */
  status?: string;
  variables?: object;
}

export interface ApplicationCallRequestToExten {
  /** @default false */
  autoanswer?: boolean;
  context: string;
  displayed_caller_id_name?: string;
  displayed_caller_id_number?: string;
  exten: string;
  /** channel variables that should be assigned on this new channel */
  variables?: object;
}

export interface ApplicationCallRequestToUser {
  /** @default false */
  autoanswer?: boolean;
  displayed_caller_id_name?: string;
  displayed_caller_id_number?: string;
  user_uuid: string;
  /** channel variables that should be assigned on this new channel */
  variables?: object;
}

export interface ApplicationCalls {
  items?: ApplicationCall[];
}

export interface ApplicationNode {
  calls?: ApplicationCall[];
  uuid?: string;
}

export interface ApplicationNodeCallRequest {
  id?: string;
}

export interface ApplicationNodeRequest {
  calls?: ApplicationNodeCallRequest[];
}

export interface ApplicationNodes {
  items?: ApplicationNode[];
}

export interface ApplicationPlayback {
  language?: string;
  state?: string;
  uri?: string;
  uuid?: string;
}

export interface ApplicationSnoop {
  snooped_call_id?: string;
  snooping_call_id: string;
  uuid?: string;
  whisper_mode: "in" | "out" | "none" | "both";
}

export interface ApplicationSnoopPut {
  whisper_mode?: "in" | "out" | "none" | "both";
}

export interface ApplicationSnoops {
  items?: ApplicationSnoop[];
}

export interface Call {
  /** @format date-time */
  answer_time?: string;
  bridges?: string[];
  call_id?: string;
  caller_id_name?: string;
  caller_id_number?: string;
  conversation_id?: string;
  /** @format date-time */
  creation_time?: string;
  dialed_extension?: string;
  direction?: "internal" | "outbound" | "inbound" | "unknown";
  /** @format date-time */
  hangup_time?: string;
  /** This value is only correct when the destination of the call is a user or outgoing call. In other cases, it is always False. */
  is_caller?: boolean;
  /** If this call has a video track */
  is_video?: boolean;
  /** Line ID of the endpoint making the call */
  line_id?: number;
  muted?: boolean;
  on_hold?: boolean;
  /** If this call is currently parked */
  parked?: boolean;
  peer_caller_id_name?: string;
  peer_caller_id_number?: string;
  record_state?: "active" | "inactive";
  /** Matches the `Call-ID` SIP header of the call. This value can be `null` when not using SIP */
  sip_call_id?: string;
  status?: string;
  talking_to?: TalkingTo;
  user_uuid?: string;
}

export interface CallID {
  call_id?: string;
}

export interface CallRequest {
  /** Destination parameters */
  destination: CallRequestDestination;
  /** Caller parameters */
  source: CallRequestSource;
  /** Channel variables to set */
  variables?: object;
}

/** Destination parameters */
export interface CallRequestDestination {
  context: string;
  extension: string;
  priority: number;
}

/** Caller parameters */
export interface CallRequestSource {
  /** Use all of the lines of the user to make the call (ignored when `line_id` is specified). */
  all_lines?: boolean;
  /** Inform the phone that it should answer automatically. Limitation: this does not work if `all_lines` is true, if `from_mobile` is true or if the phone is SCCP. */
  auto_answer?: boolean;
  /** Start the call from the user's mobile phone. Default is False */
  from_mobile?: boolean;
  /** ID of the line of the user used to make the call. Default is the main line of the user. */
  line_id?: number;
  /** UUID of the user making the call */
  user: string;
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

export interface ConnectCallToUserRequest {
  /**
   * timeout in seconds for the dial attempt to the targeted user,
   * or null for no timeout(infinite ring time).
   * Omission leads to a default timeout of 30s.
   */
  timeout?: number;
}

export interface EndpointLine {
  /** The number of ongoing calls on that line */
  current_call_count?: number;
  /** The ID of the matching confd line */
  id?: number;
  /** The name of that given endpoint in Asterisk */
  name?: string;
  /** Wether or not this trunk is registered. */
  registered?: boolean;
  /** The technology of that endpoint only (SIP, SCCP or custom) */
  technology?: string;
}

export interface EndpointLines {
  /** The number of line endpoint matching the searched terms */
  filtered?: number;
  items?: EndpointLine[];
  /** The number of line endpoint */
  total?: number;
}

export interface EndpointTrunk {
  /** The number of ongoing calls on that trunk */
  current_call_count?: number;
  /** The ID of the matching confd trunk */
  id?: number;
  /** The name of that given endpoint in Asterisk */
  name?: string;
  /** Wether or not this trunk is registered. */
  registered?: boolean;
  /** The technology of that endpoint only (SIP, IAX or custom) */
  technology?: string;
}

export interface EndpointTrunks {
  /** The number of trunk endpoint matching the searched terms */
  filtered?: number;
  items?: EndpointTrunk[];
  /** The number of trunk endpoint */
  total?: number;
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

export interface Fax {
  /** The ID of the call that produced this fax */
  call_id?: string;
  /** The Caller ID that was presented to the fax recipient */
  caller_id?: string;
  /** The context where the fax was sent */
  context?: string;
  /** The extension where the fax was sent */
  extension?: string;
  /** The fax ID */
  id?: string;
  /** Extension to compose before sending fax. Useful for fax in IVR */
  ivr_extension?: string;
  /** The tenant UUID where the fax was sent from */
  tenant_uuid?: string;
  /** The UUID of the user that sent the fax. May be null if the fax was sent by another service. */
  user_uuid?: string;
  /** Time waiting before sending fax when destination has answered (in seconds) */
  wait_time?: string;
}

export interface GreetingCopy {
  /** The destination name of the greeting */
  dest_greeting: string;
}

export interface LocationLine {
  /** the SIP contact to use when multiple registers are used */
  contact?: string;
  /** the ID of the line where the relocated call should be connected */
  line_id: number;
}

export interface MeetingStatus {
  /** Wether the meeting is full of not */
  full?: boolean;
}

/** Information needed to park the call */
export interface ParkCallBody {
  /**
   * Parking lot ID in which to park the call
   * @min 1
   * @example 2
   */
  parking_id: number;
  /**
   * Preferred slot in which to park the call.  If slots is already
   * occupied, another slot will be automatically chosen
   * @example "501"
   */
  preferred_slot?: string;
  /**
   * A timeout specified in seconds after which the call will redial the
   * parker.  If unspecified, it will defaults to the parking's timeout value.
   * (A value of 0 disables the timeout feature)
   * @min 0
   * @example 30
   */
  timeout?: number;
}

/** Information returned when a call has been parked */
export interface ParkedCallInfo {
  /**
   * Parking slot where this call has been parked
   * @example 501
   */
  slot?: string;
  /**
   * Timestamp when the call will timeout
   * @format date-time
   */
  timeout_at?: string;
}

/** Parked Call */
export interface ParkedCallItem {
  /** @example 123456789.1 */
  call_id?: string;
  /**
   * Caller ID name of the person who's call was parked
   * @example "Alice"
   */
  caller_id_name?: string;
  /**
   * Caller ID num of the person who's call was parked
   * @example 1001
   */
  caller_id_num?: string;
  /** @example 123456789 */
  conversation_id?: string;
  /**
   * Timestamp when the call was parked
   * @format date-time
   */
  parked_at?: string;
  /**
   * Caller ID name of the person who parked the call
   * @example "Bob"
   */
  parker_caller_id_name?: string;
  /**
   * Caller ID num of the person who parked the call
   * @example 1002
   */
  parker_caller_id_num?: string;
  /**
   * Slots where this call has been parked
   * @example 508
   */
  slot?: string;
  /**
   * Timestamp when the call will timeout (null if timeout is disabled)
   * @format date-time
   */
  timeout_at?: string;
}

/** Parking lot */
export interface ParkingLot {
  calls?: ParkedCallItem[];
  /**
   * Default timeout to assign if a timeout value was unspecified when a call was parked
   * @example 45
   */
  default_timeout?: number;
  /** @example 3 */
  id?: number;
  /** @example "My Parking Lot" */
  name?: string;
  /** @example "510" */
  slots_end?: string;
  /**
   * Remaining slots to park a call in this lot
   * @example 9
   */
  slots_remaining?: number;
  /** @example "501" */
  slots_start?: string;
  /**
   * Total number of slots available for parking
   * @example 10
   */
  slots_total?: number;
}

export interface Participant {
  /** Is the participant an admin of the conference? */
  admin?: boolean;
  /** The ID of the participant's call */
  call_id?: string;
  /** The participant's name */
  caller_id_name?: string;
  /** The participant's number */
  caller_id_num?: string;
  /** The participant's ID */
  id?: string;
  /** Elapsed seconds since the participant joined the conference */
  join_time?: number;
  /** The participant's language */
  language?: string;
  /** Is the participant muted? */
  muted?: boolean;
  /** The UUID of the participant's user. `null` when there is no user. */
  user_uuid?: string;
}

export interface ParticipantList {
  items?: Participant[];
}

export interface PluginsStatus {
  endpoints?: ComponentWithStatus;
  voicemails?: VoicemailsStatus;
}

export interface Relocate {
  /** How the relocate will behave. "answer" will complete the relocate as soon as the destination answers. "api" will wait for a call to API `/complete`. "answer" overrides all other values. */
  completions?: RelocateCompletions;
  /** The user UUID of the relocate initiator */
  initiator?: string;
  /** Call ID of the relocate initiator */
  initiator_call?: string;
  /** Call ID of the recipient of the relocate. */
  recipient_call?: string;
  /** Call ID of the call being relocated to someone else */
  relocated_call?: string;
  /** Unique identifier of the relocate */
  uuid?: string;
}

export type RelocateCompletions = RelocateCompletion[];

export interface RelocateList {
  items?: Relocate;
}

export interface StatusSummary {
  ari?: ComponentWithStatus;
  bus_consumer?: ComponentWithStatus;
  plugins?: PluginsStatus;
  service_token?: ComponentWithStatus;
}

export interface SwitchboardHeldCall {
  caller_id_name?: string;
  caller_id_number?: string;
  id?: string;
}

export interface SwitchboardHeldCalls {
  items?: SwitchboardHeldCall[];
}

export interface SwitchboardQueuedCall {
  caller_id_name?: string;
  caller_id_number?: string;
  id?: string;
}

export interface SwitchboardQueuedCalls {
  items?: SwitchboardQueuedCall[];
}

export interface TalkingTo {
  "{channel_id}"?: string;
}

/** Number of seconds to wait for the recipient to answer */
export type Timeout = number;

export interface Transfer {
  /**
   * The behavior of the transfer
   * @default "attended"
   */
  flow?: "attended" | "blind";
  /** Unique identifier of the transfer */
  id?: string;
  /** Call ID of the transfer initiator */
  initiator_call?: string;
  /** Tenant UUID of the user who initiated the transfer */
  initiator_tenant_uuid?: string;
  /** UUID of the user who initiated the transfer */
  initiator_uuid?: string;
  /** Call ID of the recipient of the transfer. May be null when the transfer is 'starting'. */
  recipient_call?: string;
  /** The current step of the transfer */
  status?: "starting" | "ringback" | "answered";
  /** Call ID of the call being transferred to someone else */
  transferred_call?: string;
}

export interface TransferList {
  items?: Transfer[];
}

export interface TransferRequest {
  /** Context of the recipient of the transfer */
  context: string;
  /** Extension of the recipient of the transfer */
  exten: string;
  /** Behavior of the transfer. `attended` allows the initiator to talk to the recipient. `blind` does not. */
  flow?: TransferFlow;
  /** Call ID of the transfer initiator */
  initiator_call: string;
  /** Maximum ringing time before cancelling the transfer (in seconds). Default (or null) is an unlimited ring time. */
  timeout?: TransferTimeout;
  /** Call ID of the call being transferred to someone else */
  transferred_call: string;
  /** Channel variables to set on the recipient call */
  variables?: object;
}

/** Maximum ringing time before cancelling the transfer (in seconds). Default (or null) is an unlimited ring time. */
export type TransferTimeout = number;

export interface UserCallRequest {
  /** Use all of the lines of the user to make the call (ignored when `line_id` is specified). */
  all_lines?: boolean;
  /** Inform the caller phone that it should answer automatically. Limitation: this does not work if `all_lines` is true, if `from_mobile` is true or if the phone is SCCP. */
  auto_answer_caller?: boolean;
  /** Extension to call */
  extension: string;
  /** Start the call from the user's mobile phone. Default is False. Limitation: this feature may return a wrong call_id if the outgoing call used to dial the mobile number has more than one associated trunk. */
  from_mobile?: boolean;
  /** ID of the line of the user used to make the call. Default is the main line of the user. */
  line_id?: number;
  /** Channel variables to set */
  variables?: object;
}

export interface UserRelocateLocation {
  line?: LocationLine;
}

/** @example {"auto_answer":false,"completions":["answer"],"destination":"line","initiator_call":"123456.789","location":{"contact":"5f3ff5ga","line_id":14}} */
export interface UserRelocateRequest {
  /** Inform the destination phone that it should answer automatically. Limitation: this does not work on SCCP phones. */
  auto_answer?: boolean;
  completions?: RelocateCompletions;
  /** What kind of destination the relocated call should be connected */
  destination: "line" | "mobile";
  /** Call ID of the relocate initiator. This call must be owned by the authenticated user. */
  initiator_call: string;
  /**
   * Describes where exactly the relocated call should be connected. Attributes depend on the `destination` value. Example
   * ```
   * {
   *   ...
   *   destination: line
   *   location: {line_id: 14}
   * }
   * ```
   */
  location?: UserRelocateLocation;
  /** Number of seconds to wait for the recipient to answer */
  timeout?: Timeout;
}

export interface UserTransferRequest {
  /** Extension of the recipient of the transfer */
  exten: string;
  /** Behavior of the transfer. `attended` allows the initiator to talk to the recipient. `blind` does not. */
  flow?: TransferFlow;
  /** Call ID of the transfer initiator. This call must be owned by the authenticated user. */
  initiator_call: string;
  /** Maximum ringing time before cancelling the transfer (in seconds). Default (or null) is an unlimited ring time. */
  timeout?: TransferTimeout;
}

export interface Voicemail {
  /** The voicemail's folders */
  folders?: VoicemailFolder[];
  /** The voicemail's ID */
  id?: number;
  /** The voicemail's name */
  name?: string;
  /** The voicemail's number */
  number?: string;
}

export type VoicemailFolder = VoicemailFolderBase & {
  /** The folder's messages */
  messages?: VoicemailMessageBase[];
};

export interface VoicemailFolderBase {
  /** The folder's ID */
  id?: number;
  /** The folder's name */
  name?: string;
  /** The folder's type. When a message if left on a voicemail, it is stored in the folder of type "new", unless if it is an urgent message, in which case it is left in the folder of type "urgent". When that messages is read, it is moved into the folder of type "old". All other folders used the type "other". */
  type?: "new" | "old" | "urgent" | "other";
}

export type VoicemailMessage = VoicemailMessageBase & {
  folder?: VoicemailFolderBase;
};

export interface VoicemailMessageBase {
  /** The caller's name (or null if no caller ID name) */
  caller_id_name?: string;
  /** The caller's number (or null if no caller ID number) */
  caller_id_num?: string;
  /** The message's duration in seconds */
  duration?: number;
  /** The message's ID */
  id?: string;
  /** The time the message was left as a Unix time value */
  timestamp?: number;
}

export interface VoicemailMessageUpdate {
  /** The folder's ID */
  folder_id: number;
}

export type VoicemailsStatus = ComponentWithStatus & {
  cache_items?: number;
};

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
 * @title wazo-calld
 * @version 1.0.0
 * @baseUrl /1.0
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Control your calls from a REST API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  applications = {
    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.read`
     *
     * @tags applications
     * @name ApplicationsDetail
     * @summary Show an application
     * @request GET:/applications/{application_uuid}
     * @secure
     */
    applicationsDetail: (applicationUuid: string, params: RequestParams = {}) =>
      this.request<Application, Error>({
        path: `/applications/${applicationUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.read`
     *
     * @tags applications
     * @name CallsList
     * @summary List calls from the application
     * @request GET:/applications/{application_uuid}/calls
     * @secure
     */
    callsList: (applicationUuid: string, params: RequestParams = {}) =>
      this.request<ApplicationCalls, Error>({
        path: `/applications/${applicationUuid}/calls`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.create`
     *
     * @tags applications
     * @name CallsCreate
     * @summary Make a new call to the application
     * @request POST:/applications/{application_uuid}/calls
     * @secure
     */
    callsCreate: (
      applicationUuid: string,
      body: ApplicationCallRequestToExten,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationCall, Error>({
        path: `/applications/${applicationUuid}/calls`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.delete`
     *
     * @tags applications
     * @name CallsDelete
     * @summary Hangup a call from the application
     * @request DELETE:/applications/{application_uuid}/calls/{call_id}
     * @secure
     */
    callsDelete: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.answer.update`
     *
     * @tags applications
     * @name CallsAnswerUpdate
     * @summary Answer a call
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/answer
     * @secure
     */
    callsAnswerUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/answer`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.dtmf.update
     *
     * @tags applications
     * @name CallsDtmfUpdate
     * @summary Simulate a user pressing DTMF keys
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/dtmf
     * @secure
     */
    callsDtmfUpdate: (
      applicationUuid: string,
      callId: string,
      query: {
        /** Digits to send via DTMF. Must contain only `0-9*#`. */
        digits: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/dtmf`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.hold.start.update`
     *
     * @tags applications
     * @name CallsHoldStartUpdate
     * @summary Place a call on hold
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/hold/start
     * @secure
     */
    callsHoldStartUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/hold/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.hold.stop.update
     *
     * @tags applications
     * @name CallsHoldStopUpdate
     * @summary Resume a call that has been placed on hold
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/hold/stop
     * @secure
     */
    callsHoldStopUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/hold/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.moh.{moh_uuid}.stop.update
     *
     * @tags applications
     * @name CallsMohStopUpdate
     * @summary Stops playing a music on hold
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/moh/stop
     * @secure
     */
    callsMohStopUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/moh/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.moh.{moh_uuid}.start.update` Starts playing a music on hold on a call. If the music on hold is interrupted for a playback or another action, the music on hold will not restart automatically after the interruption.
     *
     * @tags applications
     * @name CallsMohStartUpdate
     * @summary Starts playing a music on hold
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/moh/{moh_uuid}/start
     * @secure
     */
    callsMohStartUpdate: (
      applicationUuid: string,
      callId: string,
      mohUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/moh/${mohUuid}/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.mute.start.update`
     *
     * @tags applications
     * @name CallsMuteStartUpdate
     * @summary Mute a call
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/mute/start
     * @secure
     */
    callsMuteStartUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/mute/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.mute.stop.update`
     *
     * @tags applications
     * @name CallsMuteStopUpdate
     * @summary Unmute a call
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/mute/stop
     * @secure
     */
    callsMuteStopUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/mute/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.playbacks.create` URI examples: * sound:tt-weasels * digits:4188001234 * number:321 * characters:abc * tone:ring * recording:my-recording
     *
     * @tags applications
     * @name CallsPlaybacksCreate
     * @summary Play file to the call
     * @request POST:/applications/{application_uuid}/calls/{call_id}/playbacks
     * @secure
     */
    callsPlaybacksCreate: (
      applicationUuid: string,
      callId: string,
      body: ApplicationPlayback,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationPlayback, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/playbacks`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.progress.start.update` The progress ringing tone is the sound heard by a caller while the other party is ringing.
     *
     * @tags applications
     * @name CallsProgressStartUpdate
     * @summary Play the progress ringing tone
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/progress/start
     * @secure
     */
    callsProgressStartUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/progress/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.progress.stop.update` The progress ringing tone is the sound heard by a caller while the other party is ringing. Limitation: this only works when the ringing tone is played by Wazo through audio media (e.g. when using `/progress` after `/answer`). If the phone is emitting the ringing tone directly to the user, then it cannot be stopped, and the response code will still be 204.
     *
     * @tags applications
     * @name CallsProgressStopUpdate
     * @summary Stop playing the progress ringing tone.
     * @request PUT:/applications/{application_uuid}/calls/{call_id}/progress/stop
     * @secure
     */
    callsProgressStopUpdate: (
      applicationUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/progress/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.snoops.create` The whisper mode indicate which part of the snooped channel can hear the snooper. Given Alice calls Bob and Charles snoops on Bob * none: No one can hear the snooper * both: Alice and Bob can hear Charles * in: Alice can hear Charles * out: Bob can hear Charles
     *
     * @tags applications
     * @name CallsSnoopsCreate
     * @summary Start snooping on a call
     * @request POST:/applications/{application_uuid}/calls/{call_id}/snoops
     * @secure
     */
    callsSnoopsCreate: (
      applicationUuid: string,
      callId: string,
      body: ApplicationSnoop,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationSnoop, Error>({
        path: `/applications/${applicationUuid}/calls/${callId}/snoops`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.read`
     *
     * @tags applications
     * @name NodesList
     * @summary List nodes from the application
     * @request GET:/applications/{application_uuid}/nodes
     * @secure
     */
    nodesList: (applicationUuid: string, params: RequestParams = {}) =>
      this.request<ApplicationNodes, Error>({
        path: `/applications/${applicationUuid}/nodes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.create`
     *
     * @tags applications
     * @name NodesCreate
     * @summary Make a new node and add calls
     * @request POST:/applications/{application_uuid}/nodes
     * @secure
     */
    nodesCreate: (
      applicationUuid: string,
      body: ApplicationNodeRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationNode, Error>({
        path: `/applications/${applicationUuid}/nodes`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.delete` **Not implemented**
     *
     * @tags applications
     * @name NodesDelete
     * @summary Delete node and hangup all calls
     * @request DELETE:/applications/{application_uuid}/nodes/{node_uuid}
     * @secure
     */
    nodesDelete: (
      applicationUuid: string,
      nodeUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.read`
     *
     * @tags applications
     * @name NodesDetail
     * @summary Show a node
     * @request GET:/applications/{application_uuid}/nodes/{node_uuid}
     * @secure
     */
    nodesDetail: (
      applicationUuid: string,
      nodeUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationNode, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.create`
     *
     * @tags applications
     * @name NodesCallsCreate
     * @summary Make a new call to the node
     * @request POST:/applications/{application_uuid}/nodes/{node_uuid}/calls
     * @secure
     */
    nodesCallsCreate: (
      applicationUuid: string,
      nodeUuid: string,
      body: ApplicationCallRequestToExten,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationCall, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}/calls`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.user.create`
     *
     * @tags applications
     * @name NodesCallsUserCreate
     * @summary Initiate a call to a user and insert it in the node
     * @request POST:/applications/{application_uuid}/nodes/{node_uuid}/calls/user
     * @secure
     */
    nodesCallsUserCreate: (
      applicationUuid: string,
      nodeUuid: string,
      body: ApplicationCallRequestToUser,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationCall, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}/calls/user`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.{call_id}.delete`
     *
     * @tags applications
     * @name NodesCallsDelete
     * @summary Remove call from the node
     * @request DELETE:/applications/{application_uuid}/nodes/{node_uuid}/calls/{call_id}
     * @secure
     */
    nodesCallsDelete: (
      applicationUuid: string,
      nodeUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}/calls/${callId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.{call_id}.update`
     *
     * @tags applications
     * @name NodesCallsUpdate
     * @summary Insert call to the node
     * @request PUT:/applications/{application_uuid}/nodes/{node_uuid}/calls/{call_id}
     * @secure
     */
    nodesCallsUpdate: (
      applicationUuid: string,
      nodeUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/nodes/${nodeUuid}/calls/${callId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.playbacks.{playback_uuid}.delete`
     *
     * @tags applications
     * @name PlaybacksDelete
     * @summary Stop and remove playback
     * @request DELETE:/applications/{application_uuid}/playbacks/{playback_uuid}
     * @secure
     */
    playbacksDelete: (
      applicationUuid: string,
      playbackUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/playbacks/${playbackUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.read`
     *
     * @tags applications
     * @name SnoopsList
     * @summary List active snoops
     * @request GET:/applications/{application_uuid}/snoops
     * @secure
     */
    snoopsList: (applicationUuid: string, params: RequestParams = {}) =>
      this.request<ApplicationSnoops, Error>({
        path: `/applications/${applicationUuid}/snoops`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.delete`
     *
     * @tags applications
     * @name SnoopsDelete
     * @summary Stop snooping
     * @request DELETE:/applications/{application_uuid}/snoops/{snoop_uuid}
     * @secure
     */
    snoopsDelete: (
      applicationUuid: string,
      snoopUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/snoops/${snoopUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.read`
     *
     * @tags applications
     * @name SnoopsDetail
     * @summary View snooping parameters
     * @request GET:/applications/{application_uuid}/snoops/{snoop_uuid}
     * @secure
     */
    snoopsDetail: (
      applicationUuid: string,
      snoopUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationSnoop, Error>({
        path: `/applications/${applicationUuid}/snoops/${snoopUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.update`
     *
     * @tags applications
     * @name SnoopsUpdate
     * @summary Change snooping parameters
     * @request PUT:/applications/{application_uuid}/snoops/{snoop_uuid}
     * @secure
     */
    snoopsUpdate: (
      applicationUuid: string,
      snoopUuid: string,
      body: ApplicationSnoopPut,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/applications/${applicationUuid}/snoops/${snoopUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  calls = {
    /**
     * @description **Required ACL:** `calld.calls.read`
     *
     * @tags calls
     * @name CallsList
     * @summary List calls
     * @request GET:/calls
     * @secure
     */
    callsList: (
      query?: {
        /** Filter calls by Stasis application, e.g. switchboard. */
        application?: string;
        /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). `application_instance` is ignored if `application` is not set. */
        application_instance?: string;
        /**
         * Should the list include results from sub-tenants?
         * This option is only supported for the tenant `master`.
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          items?: Call[];
        },
        Error
      >({
        path: `/calls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.create` Create a new call from a phone to an extension.
     *
     * @tags calls
     * @name CallsCreate
     * @summary Make a new call
     * @request POST:/calls
     * @secure
     */
    callsCreate: (body: CallRequest, params: RequestParams = {}) =>
      this.request<Call, Error>({
        path: `/calls`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.delete`
     *
     * @tags calls
     * @name CallsDelete
     * @summary Hangup a call
     * @request DELETE:/calls/{call_id}
     * @secure
     */
    callsDelete: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.read`
     *
     * @tags calls
     * @name CallsDetail
     * @summary Show a call
     * @request GET:/calls/{call_id}
     * @secure
     */
    callsDetail: (callId: string, params: RequestParams = {}) =>
      this.request<Call, Error>({
        path: `/calls/${callId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.answer.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
     *
     * @tags calls
     * @name AnswerUpdate
     * @summary Answer a call
     * @request PUT:/calls/{call_id}/answer
     * @secure
     */
    answerUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/answer`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.dtmf.update
     *
     * @tags calls
     * @name DtmfUpdate
     * @summary Simulate a user pressing DTMF keys
     * @request PUT:/calls/{call_id}/dtmf
     * @secure
     */
    dtmfUpdate: (
      callId: string,
      query: {
        /** Digits to send via DTMF. Must contain only `0-9*#`. */
        digits: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/calls/${callId}/dtmf`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.hold.start.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
     *
     * @tags calls
     * @name HoldStartUpdate
     * @summary Hold a call
     * @request PUT:/calls/{call_id}/hold/start
     * @secure
     */
    holdStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/hold/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.hold.stop.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
     *
     * @tags calls
     * @name HoldStopUpdate
     * @summary Unhold a call
     * @request PUT:/calls/{call_id}/hold/stop
     * @secure
     */
    holdStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/hold/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.mute.start.update`
     *
     * @tags calls
     * @name MuteStartUpdate
     * @summary Mute a call
     * @request PUT:/calls/{call_id}/mute/start
     * @secure
     */
    muteStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/mute/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.mute.stop.update`
     *
     * @tags calls
     * @name MuteStopUpdate
     * @summary Unmute a call
     * @request PUT:/calls/{call_id}/mute/stop
     * @secure
     */
    muteStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/mute/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** calld.calls.{call_id}.park.update`. Use the `POST /calls` API to unpark the call.
     *
     * @tags calls, parking_lots
     * @name ParkUpdate
     * @summary Park a call
     * @request PUT:/calls/{call_id}/park
     * @secure
     */
    parkUpdate: (
      callId: string,
      park_call: ParkCallBody,
      params: RequestParams = {},
    ) =>
      this.request<ParkedCallInfo, Error>({
        path: `/calls/${callId}/park`,
        method: "PUT",
        body: park_call,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.pause.update`
     *
     * @tags calls
     * @name RecordPauseUpdate
     * @summary Pause recording a call
     * @request PUT:/calls/{call_id}/record/pause
     * @secure
     */
    recordPauseUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/record/pause`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.resume.update`
     *
     * @tags calls
     * @name RecordResumeUpdate
     * @summary Resume recording a call
     * @request PUT:/calls/{call_id}/record/resume
     * @secure
     */
    recordResumeUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/record/resume`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.start.update`
     *
     * @tags calls
     * @name RecordStartUpdate
     * @summary Start recording a call
     * @request PUT:/calls/{call_id}/record/start
     * @secure
     */
    recordStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/record/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.stop.update`
     *
     * @tags calls
     * @name RecordStopUpdate
     * @summary Stop recording a call
     * @request PUT:/calls/{call_id}/record/stop
     * @secure
     */
    recordStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/calls/${callId}/record/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.user.{user_uuid}.update`
     *
     * @tags calls
     * @name UserUpdate
     * @summary Connect a call to a user
     * @request PUT:/calls/{call_id}/user/{user_uuid}
     * @secure
     */
    userUpdate: (
      callId: string,
      userUuid: string,
      body: ConnectCallToUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<Call, Error>({
        path: `/calls/${callId}/user/${userUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  conferences = {
    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.participants.read`
     *
     * @tags conferences
     * @name ParticipantsList
     * @summary List participants of a conference
     * @request GET:/conferences/{conference_id}/participants
     * @secure
     */
    participantsList: (conferenceId: string, params: RequestParams = {}) =>
      this.request<ParticipantList, Error>({
        path: `/conferences/${conferenceId}/participants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.delete`
     *
     * @tags conferences
     * @name ParticipantsDelete
     * @summary Kick participant from a conference
     * @request DELETE:/conferences/{conference_id}/participants/{participant_id}
     * @secure
     */
    participantsDelete: (
      conferenceId: string,
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/conferences/${conferenceId}/participants/${participantId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.mute.update`
     *
     * @tags conferences
     * @name ParticipantsMuteUpdate
     * @summary Mute a participant in a conference
     * @request PUT:/conferences/{conference_id}/participants/{participant_id}/mute
     * @secure
     */
    participantsMuteUpdate: (
      conferenceId: string,
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/conferences/${conferenceId}/participants/${participantId}/mute`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.unmute.update`
     *
     * @tags conferences
     * @name ParticipantsUnmuteUpdate
     * @summary Unmute a participant in a conference
     * @request PUT:/conferences/{conference_id}/participants/{participant_id}/unmute
     * @secure
     */
    participantsUnmuteUpdate: (
      conferenceId: string,
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/conferences/${conferenceId}/participants/${participantId}/unmute`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.record.delete`
     *
     * @tags conferences
     * @name RecordDelete
     * @summary Stop recording a conference
     * @request DELETE:/conferences/{conference_id}/record
     * @secure
     */
    recordDelete: (conferenceId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/conferences/${conferenceId}/record`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.conferences.{conference_id}.record.create`
     *
     * @tags conferences
     * @name RecordCreate
     * @summary Record a conference
     * @request POST:/conferences/{conference_id}/record
     * @secure
     */
    recordCreate: (conferenceId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/conferences/${conferenceId}/record`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `calld.config.read`
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
     * @description **Required ACL:** `calld.config.update` Changes are not persistent across service restart.
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
  faxes = {
    /**
     * @description **Required ACL:** `calld.faxes.create`
     *
     * @tags faxes
     * @name FaxesCreate
     * @summary Send a fax
     * @request POST:/faxes
     * @secure
     */
    faxesCreate: (
      query: {
        /** Context of the recipient of the fax */
        context: string;
        /** Extension of the recipient of the fax */
        extension: string;
        /**
         * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
         * @default "Wazo Fax"
         */
        caller_id?: string;
        /** Extension to compose before sending fax. Useful for fax in IVR */
        ivr_extension?: string;
        /** Time waiting before sending fax when destination has answered (in seconds) */
        wait_time?: number;
      },
      fax_content: File,
      params: RequestParams = {},
    ) =>
      this.request<Fax, Error>({
        path: `/faxes`,
        method: "POST",
        query: query,
        body: fax_content,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  guests = {
    /**
     * @description Returns the status of a meeting that should be visible to a guest.
     *
     * @tags meetings
     * @name MeMeetingsStatusList
     * @summary Get the status of a meeting
     * @request GET:/guests/me/meetings/{meeting_uuid}/status
     * @secure
     */
    meMeetingsStatusList: (meetingUuid: string, params: RequestParams = {}) =>
      this.request<MeetingStatus, Error>({
        path: `/guests/me/meetings/${meetingUuid}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  lines = {
    /**
     * @description **Required ACL:** `calld.lines.read` List the status of line endpoints that are configured on Asterisk Supported technologies: * SIP Lines with unsupported technologies will be listed but there status will be null
     *
     * @tags lines
     * @name LinesList
     * @summary List line endpoint statuses
     * @request GET:/lines
     * @secure
     */
    linesList: (params: RequestParams = {}) =>
      this.request<EndpointLines, Error>({
        path: `/lines`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  meetings = {
    /**
     * @description **Required ACL:** `calld.meetings.{meeting_uuid}.participants.read`
     *
     * @tags meetings
     * @name ParticipantsList
     * @summary List participants of a meeting
     * @request GET:/meetings/{meeting_uuid}/participants
     * @secure
     */
    participantsList: (meetingUuid: string, params: RequestParams = {}) =>
      this.request<ParticipantList, Error>({
        path: `/meetings/${meetingUuid}/participants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.meetings.{meeting_uuid}.participants.delete`
     *
     * @tags meetings
     * @name ParticipantsDelete
     * @summary Kick a participant from a meeting
     * @request DELETE:/meetings/{meeting_uuid}/participants/{participant_id}
     * @secure
     */
    participantsDelete: (
      meetingUuid: string,
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/meetings/${meetingUuid}/participants/${participantId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  parkinglots = {
    /**
     * @description **Required ACL:** `calld.parkings.read`
     *
     * @tags parking_lots
     * @name ParkinglotsList
     * @summary Retrieve the list of parkings and park calls
     * @request GET:/parkinglots
     * @secure
     */
    parkinglotsList: (params: RequestParams = {}) =>
      this.request<
        {
          items?: ParkingLot[];
        },
        any
      >({
        path: `/parkinglots`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.parkings.{parking_id}.read`
     *
     * @tags parking_lots
     * @name ParkinglotsDetail
     * @summary Retrieve parked calls for parking
     * @request GET:/parkinglots/{parking_id}
     * @secure
     */
    parkinglotsDetail: (parkingId: string, params: RequestParams = {}) =>
      this.request<ParkingLot, Error>({
        path: `/parkinglots/${parkingId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `calld.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-calld
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
  switchboards = {
    /**
     * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.read` **Warning:** This endpoint is still in development and may change in the future.
     *
     * @tags switchboards
     * @name CallsHeldList
     * @summary List calls held in the switchboard
     * @request GET:/switchboards/{switchboard_uuid}/calls/held
     * @secure
     */
    callsHeldList: (switchboardUuid: string, params: RequestParams = {}) =>
      this.request<SwitchboardHeldCalls, Error>({
        path: `/switchboards/${switchboardUuid}/calls/held`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.{call_id}.update` **Warning:** This endpoint is still in development and may change in the future. This action will also hangup the previous call talking to the held call, if there was any.
     *
     * @tags switchboards
     * @name CallsHeldUpdate
     * @summary Put the specified call on hold in the switchboard
     * @request PUT:/switchboards/{switchboard_uuid}/calls/held/{call_id}
     * @secure
     */
    callsHeldUpdate: (
      switchboardUuid: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/switchboards/${switchboardUuid}/calls/held/${callId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.{call_id}.answer.update` **Warning:** This endpoint is still in development and may change in the future.
     *
     * @tags switchboards
     * @name CallsHeldAnswerUpdate
     * @summary Answer the specified held call
     * @request PUT:/switchboards/{switchboard_uuid}/calls/held/{call_id}/answer
     * @secure
     */
    callsHeldAnswerUpdate: (
      switchboardUuid: string,
      callId: string,
      query?: {
        /** ID of the line of the user used to make the call. Default is the main line of the user. */
        line_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CallID, Error>({
        path: `/switchboards/${switchboardUuid}/calls/held/${callId}/answer`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.queued.read` **Warning:** This endpoint is still in development and may change in the future.
     *
     * @tags switchboards
     * @name CallsQueuedList
     * @summary List calls queued in the switchboard
     * @request GET:/switchboards/{switchboard_uuid}/calls/queued
     * @secure
     */
    callsQueuedList: (switchboardUuid: string, params: RequestParams = {}) =>
      this.request<SwitchboardQueuedCalls, Error>({
        path: `/switchboards/${switchboardUuid}/calls/queued`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.queued.{call_id}.answer.update` **Warning:** This endpoint is still in development and may change in the future.
     *
     * @tags switchboards
     * @name CallsQueuedAnswerUpdate
     * @summary Answer the specified queued call
     * @request PUT:/switchboards/{switchboard_uuid}/calls/queued/{call_id}/answer
     * @secure
     */
    callsQueuedAnswerUpdate: (
      switchboardUuid: string,
      callId: string,
      query?: {
        /** ID of the line of the user used to make the call. Default is the main line of the user. */
        line_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CallID, Error>({
        path: `/switchboards/${switchboardUuid}/calls/queued/${callId}/answer`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  transfers = {
    /**
     * @description **Required ACL:** `calld.transfers.create` The only way to cancel the transfer from the initiator is to use `DELETE /transfers/<id>` (i.e. sending DTMF `*0` will not work).
     *
     * @tags transfers
     * @name TransfersCreate
     * @summary Initiate a transfer
     * @request POST:/transfers
     * @secure
     */
    transfersCreate: (body: TransferRequest, params: RequestParams = {}) =>
      this.request<Transfer, Error>({
        path: `/transfers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.transfers.{transfer_id}.delete`
     *
     * @tags transfers
     * @name TransfersDelete
     * @summary Cancel a transfer
     * @request DELETE:/transfers/{transfer_id}
     * @secure
     */
    transfersDelete: (transferId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/transfers/${transferId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.transfers.{transfer_id}.read`
     *
     * @tags transfers
     * @name TransfersDetail
     * @summary Get details of a transfer
     * @request GET:/transfers/{transfer_id}
     * @secure
     */
    transfersDetail: (transferId: string, params: RequestParams = {}) =>
      this.request<Transfer, Error>({
        path: `/transfers/${transferId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.transfers.{transfer_id}.complete.update`
     *
     * @tags transfers
     * @name CompleteUpdate
     * @summary Complete a transfer
     * @request PUT:/transfers/{transfer_id}/complete
     * @secure
     */
    completeUpdate: (transferId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/transfers/${transferId}/complete`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  trunks = {
    /**
     * @description **Required ACL:** `calld.trunks.read` List the status of trunk endpoints that are configured on Asterisk Supported technologies: * SIP Trunks with unsupported technologies will be listed but there status will be null
     *
     * @tags trunks
     * @name TrunksList
     * @summary List trunk endpoint statuses
     * @request GET:/trunks
     * @secure
     */
    trunksList: (params: RequestParams = {}) =>
      this.request<EndpointTrunks, Error>({
        path: `/trunks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description **Required ACL:** `calld.users.me.calls.read`
     *
     * @tags calls, users
     * @name MeCallsList
     * @summary List calls of a user
     * @request GET:/users/me/calls
     * @secure
     */
    meCallsList: (
      query?: {
        /** Filter calls by Stasis application, e.g. switchboard. */
        application?: string;
        /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). */
        application_instance?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          items?: Call[];
        },
        Error
      >({
        path: `/users/me/calls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.create` The user originator of the call is determined from the authentication token.
     *
     * @tags calls, users
     * @name MeCallsCreate
     * @summary Make a new call from a user
     * @request POST:/users/me/calls
     * @secure
     */
    meCallsCreate: (body: UserCallRequest, params: RequestParams = {}) =>
      this.request<Call, Error>({
        path: `/users/me/calls`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.delete` Only calls owned by the authenticated user may be hung up.
     *
     * @tags calls, users
     * @name MeCallsDelete
     * @summary Hangup a call from a user
     * @request DELETE:/users/me/calls/{call_id}
     * @secure
     */
    meCallsDelete: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.answer.update` Only calls owned by the authenticated user may be answered.
     *
     * @tags calls, users
     * @name MeCallsAnswerUpdate
     * @summary Answer a call from user
     * @request PUT:/users/me/calls/{call_id}/answer
     * @secure
     */
    meCallsAnswerUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/answer`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.dtmf.update
     *
     * @tags calls, users
     * @name MeCallsDtmfUpdate
     * @summary Simulate a user pressing DTMF keys
     * @request PUT:/users/me/calls/{call_id}/dtmf
     * @secure
     */
    meCallsDtmfUpdate: (
      callId: string,
      query: {
        /** Digits to send via DTMF. Must contain only `0-9*#`. */
        digits: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/dtmf`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.hold.start.update` Only calls owned by the authenticated user may be held.
     *
     * @tags calls, users
     * @name MeCallsHoldStartUpdate
     * @summary Hold a call from user
     * @request PUT:/users/me/calls/{call_id}/hold/start
     * @secure
     */
    meCallsHoldStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/hold/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.hold.stop.update` Only calls owned by the authenticated user may be unheld.
     *
     * @tags calls, users
     * @name MeCallsHoldStopUpdate
     * @summary Unhold a call from user
     * @request PUT:/users/me/calls/{call_id}/hold/stop
     * @secure
     */
    meCallsHoldStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/hold/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.mute.start.update` Only calls owned by the authenticated user may be mute.
     *
     * @tags calls, users
     * @name MeCallsMuteStartUpdate
     * @summary Mute a call from user
     * @request PUT:/users/me/calls/{call_id}/mute/start
     * @secure
     */
    meCallsMuteStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/mute/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.mute.stop.update` Only calls owned by the authenticated user may be unmute.
     *
     * @tags calls, users
     * @name MeCallsMuteStopUpdate
     * @summary Unmute a call from user
     * @request PUT:/users/me/calls/{call_id}/mute/stop
     * @secure
     */
    meCallsMuteStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/mute/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.calls.{call_id}.park.update` Use the `POST /users/me/calls` API to unpark the call.
     *
     * @tags calls, parking_lots, users
     * @name MeCallsParkUpdate
     * @summary Park the user's connected (talking to) call
     * @request PUT:/users/me/calls/{call_id}/park
     * @secure
     */
    meCallsParkUpdate: (
      callId: string,
      park_call: ParkCallBody,
      params: RequestParams = {},
    ) =>
      this.request<ParkedCallInfo, Error>({
        path: `/users/me/calls/${callId}/park`,
        method: "PUT",
        body: park_call,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.pause.update`
     *
     * @tags calls, users
     * @name MeCallsRecordPauseUpdate
     * @summary Pause recording a call
     * @request PUT:/users/me/calls/{call_id}/record/pause
     * @secure
     */
    meCallsRecordPauseUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/record/pause`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.resume.update`
     *
     * @tags calls, users
     * @name MeCallsRecordResumeUpdate
     * @summary Resume recording a call
     * @request PUT:/users/me/calls/{call_id}/record/resume
     * @secure
     */
    meCallsRecordResumeUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/record/resume`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.start.update`
     *
     * @tags calls, users
     * @name MeCallsRecordStartUpdate
     * @summary Start recording a call
     * @request PUT:/users/me/calls/{call_id}/record/start
     * @secure
     */
    meCallsRecordStartUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/record/start`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.calls.{call_id}.record.stop.update`
     *
     * @tags calls, users
     * @name MeCallsRecordStopUpdate
     * @summary Stop recording a call
     * @request PUT:/users/me/calls/{call_id}/record/stop
     * @secure
     */
    meCallsRecordStopUpdate: (callId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/calls/${callId}/record/stop`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.conferences.adhoc.create`. An adhoc conference allows a user to merge multiple calls in one conversation. It acts like a conference room, but has no dedicated extension. The user creating the adhoc conference acts as the owner of the conference and controls who enters or leaves the conference. The conference will be destroyed when the owner leaves the conference.
     *
     * @tags adhoc_conferences
     * @name MeConferencesAdhocCreate
     * @summary Create an adhoc conference
     * @request POST:/users/me/conferences/adhoc
     * @secure
     */
    meConferencesAdhocCreate: (
      body: AdhocConferenceCreation,
      params: RequestParams = {},
    ) =>
      this.request<AdhocConference, Error>({
        path: `/users/me/conferences/adhoc`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.conferences.adhoc.delete`. All calls in the adhoc conference will be hungup.
     *
     * @tags adhoc_conferences
     * @name MeConferencesAdhocDelete
     * @summary Delete an adhoc conference
     * @request DELETE:/users/me/conferences/adhoc/{conference_id}
     * @secure
     */
    meConferencesAdhocDelete: (
      conferenceId: string,
      params: RequestParams = {},
    ) =>
      this.request<AdhocConference, Error>({
        path: `/users/me/conferences/adhoc/${conferenceId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.conferences.adhoc.participants.delete`
     *
     * @tags adhoc_conferences
     * @name MeConferencesAdhocParticipantsDelete
     * @summary Remove a participant from an adhoc conference
     * @request DELETE:/users/me/conferences/adhoc/{conference_id}/participants/{call_id}
     * @secure
     */
    meConferencesAdhocParticipantsDelete: (
      conferenceId: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/conferences/adhoc/${conferenceId}/participants/${callId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.conferences.adhoc.participants.update`
     *
     * @tags adhoc_conferences
     * @name MeConferencesAdhocParticipantsUpdate
     * @summary Add a participant into an adhoc conference
     * @request PUT:/users/me/conferences/adhoc/{conference_id}/participants/{call_id}
     * @secure
     */
    meConferencesAdhocParticipantsUpdate: (
      conferenceId: string,
      callId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/conferences/adhoc/${conferenceId}/participants/${callId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.conferences.{conference_id}.participants.read`
     *
     * @tags conferences, users
     * @name MeConferencesParticipantsList
     * @summary List participants of a conference as a user
     * @request GET:/users/me/conferences/{conference_id}/participants
     * @secure
     */
    meConferencesParticipantsList: (
      conferenceId: string,
      params: RequestParams = {},
    ) =>
      this.request<ParticipantList, Error>({
        path: `/users/me/conferences/${conferenceId}/participants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.faxes.create`
     *
     * @tags faxes
     * @name MeFaxesCreate
     * @summary Send a fax as the user detected from the token
     * @request POST:/users/me/faxes
     * @secure
     */
    meFaxesCreate: (
      query: {
        /** Extension of the recipient of the fax */
        extension: string;
        /**
         * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
         * @default "Wazo Fax"
         */
        caller_id?: string;
        /** Extension to compose before sending fax. Useful for fax in IVR */
        ivr_extension?: string;
        /** Time waiting before sending fax when destination has answered (in seconds) */
        wait_time?: number;
      },
      fax_content: File,
      params: RequestParams = {},
    ) =>
      this.request<Fax, Error>({
        path: `/users/me/faxes`,
        method: "POST",
        query: query,
        body: fax_content,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.meetings.{meeting_uuid}.participants.read`
     *
     * @tags meetings, users
     * @name MeMeetingsParticipantsList
     * @summary List participants of a meeting as a user
     * @request GET:/users/me/meetings/{meeting_uuid}/participants
     * @secure
     */
    meMeetingsParticipantsList: (
      meetingUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<ParticipantList, Error>({
        path: `/users/me/meetings/${meetingUuid}/participants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.meetings.participants.delete`
     *
     * @tags meetings, users
     * @name MeMeetingsParticipantsDelete
     * @summary Kick a participant from a meeting as a user
     * @request DELETE:/users/me/meetings/{meeting_uuid}/participants/{participant_id}
     * @secure
     */
    meMeetingsParticipantsDelete: (
      meetingUuid: string,
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/meetings/${meetingUuid}/participants/${participantId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.relocates.read`
     *
     * @tags relocates, users
     * @name MeRelocatesList
     * @summary Get the relocates of the authenticated user
     * @request GET:/users/me/relocates
     * @secure
     */
    meRelocatesList: (params: RequestParams = {}) =>
      this.request<RelocateList, Error>({
        path: `/users/me/relocates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.relocates.create`
     *
     * @tags relocates, users
     * @name MeRelocatesCreate
     * @summary Initiate a relocate from the authenticated user
     * @request POST:/users/me/relocates
     * @secure
     */
    meRelocatesCreate: (
      body: UserRelocateRequest,
      params: RequestParams = {},
    ) =>
      this.request<Relocate, Error>({
        path: `/users/me/relocates`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.relocates.users.me.{relocate_uuid}.read`
     *
     * @tags relocates
     * @name MeRelocatesDetail
     * @summary Get details of a relocate
     * @request GET:/users/me/relocates/{relocate_uuid}
     * @secure
     */
    meRelocatesDetail: (relocateUuid: string, params: RequestParams = {}) =>
      this.request<Relocate, Error>({
        path: `/users/me/relocates/${relocateUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.relocates.{relocate_uuid}.cancel.update`
     *
     * @tags relocates, users
     * @name MeRelocatesCancelUpdate
     * @summary Cancel a relocate
     * @request PUT:/users/me/relocates/{relocate_uuid}/cancel
     * @secure
     */
    meRelocatesCancelUpdate: (
      relocateUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/relocates/${relocateUuid}/cancel`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.relocates.{relocate_uuid}.complete.update`
     *
     * @tags relocates, users
     * @name MeRelocatesCompleteUpdate
     * @summary Complete a relocate
     * @request PUT:/users/me/relocates/{relocate_uuid}/complete
     * @secure
     */
    meRelocatesCompleteUpdate: (
      relocateUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/relocates/${relocateUuid}/complete`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.transfers.read`
     *
     * @tags transfers, users
     * @name MeTransfersList
     * @summary Get the transfers of the authenticated user
     * @request GET:/users/me/transfers
     * @secure
     */
    meTransfersList: (params: RequestParams = {}) =>
      this.request<TransferList, Error>({
        path: `/users/me/transfers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.transfers.create`
     *
     * @tags transfers, users
     * @name MeTransfersCreate
     * @summary Initiate a transfer from the authenticated user
     * @request POST:/users/me/transfers
     * @secure
     */
    meTransfersCreate: (
      body: UserTransferRequest,
      params: RequestParams = {},
    ) =>
      this.request<Transfer, Error>({
        path: `/users/me/transfers`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.transfers.{transfer_id}.delete`
     *
     * @tags transfers, users
     * @name MeTransfersDelete
     * @summary Cancel a transfer
     * @request DELETE:/users/me/transfers/{transfer_id}
     * @secure
     */
    meTransfersDelete: (transferId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/users/me/transfers/${transferId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.transfers.{transfer_id}.complete.update`
     *
     * @tags transfers, users
     * @name MeTransfersCompleteUpdate
     * @summary Complete a transfer
     * @request PUT:/users/me/transfers/{transfer_id}/complete
     * @secure
     */
    meTransfersCompleteUpdate: (
      transferId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/transfers/${transferId}/complete`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.read`
     *
     * @tags users, voicemails
     * @name MeVoicemailsList
     * @summary Get details of the voicemail of the authenticated user
     * @request GET:/users/me/voicemails
     * @secure
     */
    meVoicemailsList: (params: RequestParams = {}) =>
      this.request<Voicemail, Error>({
        path: `/users/me/voicemails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.folders.{folder_id}.read`
     *
     * @tags users, voicemails
     * @name MeVoicemailsFoldersDetail
     * @summary Get details of a folder
     * @request GET:/users/me/voicemails/folders/{folder_id}
     * @secure
     */
    meVoicemailsFoldersDetail: (folderId: number, params: RequestParams = {}) =>
      this.request<VoicemailFolder, Error>({
        path: `/users/me/voicemails/folders/${folderId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.delete`
     *
     * @tags users, voicemails
     * @name MeVoicemailsGreetingsDelete
     * @summary Delete a custom greeting
     * @request DELETE:/users/me/voicemails/greetings/{greeting}
     * @secure
     */
    meVoicemailsGreetingsDelete: (
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.read`
     *
     * @tags users, voicemails
     * @name MeVoicemailsGreetingsDetail
     * @summary Get a custom greeting
     * @request GET:/users/me/voicemails/greetings/{greeting}
     * @secure
     */
    meVoicemailsGreetingsDetail: (
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.read`
     *
     * @tags users, voicemails
     * @name HeadUsers
     * @summary Check if greeting exists
     * @request HEAD:/users/me/voicemails/greetings/{greeting}
     * @secure
     */
    headUsers: (
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}`,
        method: "HEAD",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.create`
     *
     * @tags users, voicemails
     * @name MeVoicemailsGreetingsCreate
     * @summary Create a custom greeting
     * @request POST:/users/me/voicemails/greetings/{greeting}
     * @secure
     */
    meVoicemailsGreetingsCreate: (
      greeting: "unavailable" | "busy" | "name",
      body: any,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.update`
     *
     * @tags users, voicemails
     * @name MeVoicemailsGreetingsUpdate
     * @summary Update a custom greeting
     * @request PUT:/users/me/voicemails/greetings/{greeting}
     * @secure
     */
    meVoicemailsGreetingsUpdate: (
      greeting: "unavailable" | "busy" | "name",
      body: any,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.copy.create`
     *
     * @tags users, voicemails
     * @name MeVoicemailsGreetingsCopyCreate
     * @summary Copy a custom greeting
     * @request POST:/users/me/voicemails/greetings/{greeting}/copy
     * @secure
     */
    meVoicemailsGreetingsCopyCreate: (
      greeting: "unavailable" | "busy" | "name",
      body: GreetingCopy,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/greetings/${greeting}/copy`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.delete`
     *
     * @tags users, voicemails
     * @name MeVoicemailsMessagesDelete
     * @summary Delete a mesage
     * @request DELETE:/users/me/voicemails/messages/{message_id}
     * @secure
     */
    meVoicemailsMessagesDelete: (
      messageId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/messages/${messageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.read`
     *
     * @tags users, voicemails
     * @name MeVoicemailsMessagesDetail
     * @summary Get a message
     * @request GET:/users/me/voicemails/messages/{message_id}
     * @secure
     */
    meVoicemailsMessagesDetail: (
      messageId: string,
      params: RequestParams = {},
    ) =>
      this.request<VoicemailMessage, Error>({
        path: `/users/me/voicemails/messages/${messageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.update`
     *
     * @tags users, voicemails
     * @name MeVoicemailsMessagesUpdate
     * @summary Update a message
     * @request PUT:/users/me/voicemails/messages/{message_id}
     * @secure
     */
    meVoicemailsMessagesUpdate: (
      messageId: string,
      body: VoicemailMessageUpdate,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/messages/${messageId}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.recording.read`
     *
     * @tags users, voicemails
     * @name MeVoicemailsMessagesRecordingList
     * @summary Get a message's recording
     * @request GET:/users/me/voicemails/messages/{message_id}/recording
     * @secure
     */
    meVoicemailsMessagesRecordingList: (
      messageId: string,
      query?: {
        /** The token's ID */
        token?: string;
        /** Set to 1 to force download by browser */
        download?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/me/voicemails/messages/${messageId}/recording`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  voicemails = {
    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.read`
     *
     * @tags voicemails
     * @name VoicemailsDetail
     * @summary Get details of a voicemail
     * @request GET:/voicemails/{voicemail_id}
     * @secure
     */
    voicemailsDetail: (voicemailId: number, params: RequestParams = {}) =>
      this.request<Voicemail, Error>({
        path: `/voicemails/${voicemailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.folders.{folder_id}.read`
     *
     * @tags voicemails
     * @name FoldersDetail
     * @summary Get details of a folder
     * @request GET:/voicemails/{voicemail_id}/folders/{folder_id}
     * @secure
     */
    foldersDetail: (
      voicemailId: number,
      folderId: number,
      params: RequestParams = {},
    ) =>
      this.request<VoicemailFolder, Error>({
        path: `/voicemails/${voicemailId}/folders/${folderId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.delete`
     *
     * @tags voicemails
     * @name GreetingsDelete
     * @summary Delete a custom greeting
     * @request DELETE:/voicemails/{voicemail_id}/greetings/{greeting}
     * @secure
     */
    greetingsDelete: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.read`
     *
     * @tags voicemails
     * @name GreetingsDetail
     * @summary Get a custom greeting
     * @request GET:/voicemails/{voicemail_id}/greetings/{greeting}
     * @secure
     */
    greetingsDetail: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.read`
     *
     * @tags voicemails
     * @name HeadVoicemails
     * @summary Check if greeting exists
     * @request HEAD:/voicemails/{voicemail_id}/greetings/{greeting}
     * @secure
     */
    headVoicemails: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}`,
        method: "HEAD",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.create`
     *
     * @tags voicemails
     * @name GreetingsCreate
     * @summary Create a custom greeting
     * @request POST:/voicemails/{voicemail_id}/greetings/{greeting}
     * @secure
     */
    greetingsCreate: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      body: any,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.update`
     *
     * @tags voicemails
     * @name GreetingsUpdate
     * @summary Update a custom greeting
     * @request PUT:/voicemails/{voicemail_id}/greetings/{greeting}
     * @secure
     */
    greetingsUpdate: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      body: any,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.copy.create`
     *
     * @tags voicemails
     * @name GreetingsCopyCreate
     * @summary Copy a custom greeting
     * @request POST:/voicemails/{voicemail_id}/greetings/{greeting}/copy
     * @secure
     */
    greetingsCopyCreate: (
      voicemailId: number,
      greeting: "unavailable" | "busy" | "name",
      body: GreetingCopy,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/greetings/${greeting}/copy`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.delete`
     *
     * @tags voicemails
     * @name MessagesDelete
     * @summary Delete a mesage
     * @request DELETE:/voicemails/{voicemail_id}/messages/{message_id}
     * @secure
     */
    messagesDelete: (
      voicemailId: number,
      messageId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/messages/${messageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.read`
     *
     * @tags voicemails
     * @name MessagesDetail
     * @summary Get a message
     * @request GET:/voicemails/{voicemail_id}/messages/{message_id}
     * @secure
     */
    messagesDetail: (
      voicemailId: number,
      messageId: string,
      params: RequestParams = {},
    ) =>
      this.request<VoicemailMessage, Error>({
        path: `/voicemails/${voicemailId}/messages/${messageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.update`
     *
     * @tags voicemails
     * @name MessagesUpdate
     * @summary Update a message
     * @request PUT:/voicemails/{voicemail_id}/messages/{message_id}
     * @secure
     */
    messagesUpdate: (
      voicemailId: number,
      messageId: string,
      body: VoicemailMessageUpdate,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/messages/${messageId}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.recording.read`
     *
     * @tags voicemails
     * @name MessagesRecordingList
     * @summary Get a message's recording
     * @request GET:/voicemails/{voicemail_id}/messages/{message_id}/recording
     * @secure
     */
    messagesRecordingList: (
      voicemailId: number,
      messageId: string,
      query?: {
        /** The token's ID */
        token?: string;
        /** Set to 1 to force download by browser */
        download?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/voicemails/${voicemailId}/messages/${messageId}/recording`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
