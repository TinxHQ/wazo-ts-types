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

export type AnswerUpdateData = any;

export type AnswerUpdateError = Error;

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

export type ApplicationsDetailData = Application;

export type ApplicationsDetailError = Error;

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

export type CallsAnswerUpdateData = any;

export type CallsAnswerUpdateError = Error;

export type CallsCreateData = ApplicationCall;

export type CallsCreateError = Error;

export type CallsCreateFail = Error;

export type CallsCreateResult = Call;

export type CallsDeleteData = any;

export type CallsDeleteError = Error;

export type CallsDeleteFail = Error;

export type CallsDeleteResult = any;

export type CallsDetailData = Call;

export type CallsDetailError = Error;

export type CallsDtmfUpdateData = any;

export type CallsDtmfUpdateError = Error;

export interface CallsDtmfUpdateParams {
  /** UUID of the application */
  applicationUuid: string;
  /** ID of the call */
  callId: string;
  /** Digits to send via DTMF. Must contain only `0-9*#`. */
  digits: string;
}

export type CallsHeldAnswerUpdateData = CallID;

export interface CallsHeldAnswerUpdateParams {
  /** Call ID */
  callId: string;
  /** ID of the line of the user used to make the call. Default is the main line of the user. */
  line_id?: number;
  /** Unique identifier of the switchboard */
  switchboardUuid: string;
}

export type CallsHeldListData = SwitchboardHeldCalls;

export type CallsHeldUpdateData = any;

export type CallsHoldStartUpdateData = any;

export type CallsHoldStartUpdateError = Error;

export type CallsHoldStopUpdateData = any;

export type CallsHoldStopUpdateError = Error;

export type CallsListData = ApplicationCalls;

export type CallsListError = Error;

export interface CallsListParams1 {
  /** Filter calls by Stasis application, e.g. switchboard. */
  application?: string;
  /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). `application_instance` is ignored if `application` is not set. */
  application_instance?: string;
  /**
   * Should the list include results from sub-tenants?
   * This option is only supported for the tenant `master`.
   */
  recurse?: boolean;
}

export interface CallsListResult {
  items?: Call[];
}

export type CallsMohStartUpdateData = any;

export type CallsMohStartUpdateError = Error;

export type CallsMohStopUpdateData = any;

export type CallsMohStopUpdateError = Error;

export type CallsMuteStartUpdateData = any;

export type CallsMuteStartUpdateError = Error;

export type CallsMuteStopUpdateData = any;

export type CallsMuteStopUpdateError = Error;

export type CallsPlaybacksCreateData = ApplicationPlayback;

export type CallsPlaybacksCreateError = Error;

export type CallsProgressStartUpdateData = any;

export type CallsProgressStartUpdateError = Error;

export type CallsProgressStopUpdateData = any;

export type CallsProgressStopUpdateError = Error;

export type CallsQueuedAnswerUpdateData = CallID;

export interface CallsQueuedAnswerUpdateParams {
  /** Call ID */
  callId: string;
  /** ID of the line of the user used to make the call. Default is the main line of the user. */
  line_id?: number;
  /** Unique identifier of the switchboard */
  switchboardUuid: string;
}

export type CallsQueuedListData = SwitchboardQueuedCalls;

export type CallsSnoopsCreateData = ApplicationSnoop;

export type CallsSnoopsCreateError = Error;

export type CompleteUpdateData = any;

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

export type DtmfUpdateData = any;

export type DtmfUpdateError = Error;

export interface DtmfUpdateParams {
  /** Call ID */
  callId: string;
  /** Digits to send via DTMF. Must contain only `0-9*#`. */
  digits: string;
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

export type FaxesCreateData = Fax;

export interface FaxesCreateParams {
  /**
   * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
   * @default "Wazo Fax"
   */
  caller_id?: string;
  /** Context of the recipient of the fax */
  context: string;
  /** Extension of the recipient of the fax */
  extension: string;
  /** Extension to compose before sending fax. Useful for fax in IVR */
  ivr_extension?: string;
  /** Time waiting before sending fax when destination has answered (in seconds) */
  wait_time?: number;
}

/** @format binary */
export type FaxesCreatePayload = File;

export type FoldersDetailData = VoicemailFolder;

export type GetConfigData = any;

export interface GreetingCopy {
  /** The destination name of the greeting */
  dest_greeting: string;
}

export type GreetingsCopyCreateData = any;

export type GreetingsCreateData = any;

/** @format binary */
export type GreetingsCreatePayload = any;

export type GreetingsDeleteData = any;

export type GreetingsDetailData = any;

export type GreetingsUpdateData = any;

/** @format binary */
export type GreetingsUpdatePayload = any;

export type HeadUsersData = any;

export type HeadVoicemailsData = any;

export type HoldStartUpdateData = any;

export type HoldStartUpdateError = Error;

export type HoldStopUpdateData = any;

export type HoldStopUpdateError = Error;

export type LinesListData = EndpointLines;

export interface LocationLine {
  /** the SIP contact to use when multiple registers are used */
  contact?: string;
  /** the ID of the line where the relocated call should be connected */
  line_id: number;
}

export type MeCallsAnswerUpdateData = any;

export type MeCallsAnswerUpdateError = Error;

export type MeCallsCreateData = Call;

export type MeCallsCreateError = Error;

export type MeCallsDeleteData = any;

export type MeCallsDeleteError = Error;

export type MeCallsDtmfUpdateData = any;

export type MeCallsDtmfUpdateError = Error;

export interface MeCallsDtmfUpdateParams {
  /** Call ID */
  callId: string;
  /** Digits to send via DTMF. Must contain only `0-9*#`. */
  digits: string;
}

export type MeCallsHoldStartUpdateData = any;

export type MeCallsHoldStartUpdateError = Error;

export type MeCallsHoldStopUpdateData = any;

export type MeCallsHoldStopUpdateError = Error;

export interface MeCallsListData {
  items?: Call[];
}

export interface MeCallsListParams {
  /** Filter calls by Stasis application, e.g. switchboard. */
  application?: string;
  /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). */
  application_instance?: string;
}

export type MeCallsMuteStartUpdateData = any;

export type MeCallsMuteStartUpdateError = Error;

export type MeCallsMuteStopUpdateData = any;

export type MeCallsMuteStopUpdateError = Error;

export type MeCallsParkUpdateData = ParkedCallInfo;

export type MeCallsRecordPauseUpdateData = any;

export type MeCallsRecordPauseUpdateError = Error;

export type MeCallsRecordResumeUpdateData = any;

export type MeCallsRecordResumeUpdateError = Error;

export type MeCallsRecordStartUpdateData = any;

export type MeCallsRecordStartUpdateError = Error;

export type MeCallsRecordStopUpdateData = any;

export type MeCallsRecordStopUpdateError = Error;

export type MeConferencesAdhocCreateData = AdhocConference;

export type MeConferencesAdhocDeleteData = AdhocConference;

export type MeConferencesAdhocParticipantsDeleteData = any;

export type MeConferencesAdhocParticipantsUpdateData = any;

export type MeConferencesParticipantsListData = ParticipantList;

export type MeFaxesCreateData = Fax;

export interface MeFaxesCreateParams {
  /**
   * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
   * @default "Wazo Fax"
   */
  caller_id?: string;
  /** Extension of the recipient of the fax */
  extension: string;
  /** Extension to compose before sending fax. Useful for fax in IVR */
  ivr_extension?: string;
  /** Time waiting before sending fax when destination has answered (in seconds) */
  wait_time?: number;
}

/** @format binary */
export type MeFaxesCreatePayload = File;

export type MeMeetingsParticipantsDeleteData = any;

export type MeMeetingsParticipantsListData = ParticipantList;

export type MeMeetingsStatusListData = MeetingStatus;

export type MeRelocatesCancelUpdateData = any;

export type MeRelocatesCompleteUpdateData = any;

export type MeRelocatesCreateData = Relocate;

export type MeRelocatesCreateError = Error;

export type MeRelocatesDetailData = Relocate;

export type MeRelocatesListData = RelocateList;

export type MeTransfersCompleteUpdateData = any;

export type MeTransfersCompleteUpdateError = Error;

export type MeTransfersCreateData = Transfer;

export type MeTransfersCreateError = Error;

export type MeTransfersDeleteData = any;

export type MeTransfersDeleteError = Error;

export type MeTransfersListData = TransferList;

export type MeVoicemailsFoldersDetailData = VoicemailFolder;

export type MeVoicemailsGreetingsCopyCreateData = any;

export type MeVoicemailsGreetingsCreateData = any;

/** @format binary */
export type MeVoicemailsGreetingsCreatePayload = any;

export type MeVoicemailsGreetingsDeleteData = any;

export type MeVoicemailsGreetingsDetailData = any;

export type MeVoicemailsGreetingsUpdateData = any;

/** @format binary */
export type MeVoicemailsGreetingsUpdatePayload = any;

export type MeVoicemailsListData = Voicemail;

export type MeVoicemailsMessagesDeleteData = any;

export type MeVoicemailsMessagesDetailData = VoicemailMessage;

export type MeVoicemailsMessagesRecordingListData = any;

export interface MeVoicemailsMessagesRecordingListParams {
  /** Set to 1 to force download by browser */
  download?: string;
  /** The message's ID */
  messageId: string;
  /** The token's ID */
  token?: string;
}

export type MeVoicemailsMessagesUpdateData = any;

export interface MeetingStatus {
  /** Wether the meeting is full of not */
  full?: boolean;
}

export type MessagesDeleteData = any;

export type MessagesDetailData = VoicemailMessage;

export type MessagesRecordingListData = any;

export interface MessagesRecordingListParams {
  /** Set to 1 to force download by browser */
  download?: string;
  /** The message's ID */
  messageId: string;
  /** The token's ID */
  token?: string;
  /** The voicemail's ID */
  voicemailId: number;
}

export type MessagesUpdateData = any;

export type MuteStartUpdateData = any;

export type MuteStartUpdateError = Error;

export type MuteStopUpdateData = any;

export type MuteStopUpdateError = Error;

export type NodesCallsCreateData = ApplicationCall;

export type NodesCallsCreateError = Error;

export type NodesCallsDeleteData = any;

export type NodesCallsDeleteError = Error;

export type NodesCallsUpdateData = any;

export type NodesCallsUpdateError = Error;

export type NodesCallsUserCreateData = ApplicationCall;

export type NodesCallsUserCreateError = Error;

export type NodesCreateData = ApplicationNode;

export type NodesCreateError = Error;

export type NodesDeleteData = any;

export type NodesDeleteError = Error;

export type NodesDetailData = ApplicationNode;

export type NodesDetailError = Error;

export type NodesListData = ApplicationNodes;

export type NodesListError = Error;

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

export type ParkUpdateData = ParkedCallInfo;

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

export type ParkinglotsDetailData = ParkingLot;

export interface ParkinglotsListData {
  items?: ParkingLot[];
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

export type ParticipantsDeleteData = any;

export type ParticipantsDeleteResult = any;

export type ParticipantsListData = ParticipantList;

export type ParticipantsListResult = ParticipantList;

export type ParticipantsMuteUpdateData = any;

export type ParticipantsUnmuteUpdateData = any;

export type PatchConfigData = any;

export type PatchConfigPayload = ConfigPatchItem[];

export type PlaybacksDeleteData = any;

export type PlaybacksDeleteError = Error;

export interface PluginsStatus {
  endpoints?: ComponentWithStatus;
  voicemails?: VoicemailsStatus;
}

export type RecordCreateData = any;

export type RecordCreateError = Error;

export type RecordDeleteData = any;

export type RecordDeleteError = Error;

export type RecordPauseUpdateData = any;

export type RecordPauseUpdateError = Error;

export type RecordResumeUpdateData = any;

export type RecordResumeUpdateError = Error;

export type RecordStartUpdateData = any;

export type RecordStartUpdateError = Error;

export type RecordStopUpdateData = any;

export type RecordStopUpdateError = Error;

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

/** @default "answer" */
export enum RelocateCompletion {
  Answer = "answer",
  Api = "api",
}

export type RelocateCompletions = RelocateCompletion[];

export interface RelocateList {
  items?: Relocate;
}

export type SnoopsDeleteData = any;

export type SnoopsDeleteError = Error;

export type SnoopsDetailData = ApplicationSnoop;

export type SnoopsDetailError = Error;

export type SnoopsListData = ApplicationSnoops;

export type SnoopsListError = Error;

export type SnoopsUpdateData = any;

export type SnoopsUpdateError = Error;

export type StatusListData = StatusSummary;

export interface StatusSummary {
  ari?: ComponentWithStatus;
  bus_consumer?: ComponentWithStatus;
  plugins?: PluginsStatus;
  service_token?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
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

/**
 * Behavior of the transfer. `attended` allows the initiator to talk to the recipient. `blind` does not.
 * @default "attended"
 */
export enum TransferFlow {
  Attended = "attended",
  Blind = "blind",
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

export type TransfersCreateData = Transfer;

export type TransfersCreateError = Error;

export type TransfersDeleteData = any;

export type TransfersDetailData = Transfer;

export type TrunksListData = EndpointTrunks;

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

export type UserUpdateData = Call;

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

export type VoicemailsDetailData = Voicemail;

export type VoicemailsStatus = ComponentWithStatus & {
  cache_items?: number;
};

export namespace Applications {
  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.read`
   * @tags applications
   * @name ApplicationsDetail
   * @summary Show an application
   * @request GET:/applications/{application_uuid}
   * @secure
   */
  export namespace ApplicationsDetail {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ApplicationsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.read`
   * @tags applications
   * @name CallsList
   * @summary List calls from the application
   * @request GET:/applications/{application_uuid}/calls
   * @secure
   */
  export namespace CallsList {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsListData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.create`
   * @tags applications
   * @name CallsCreate
   * @summary Make a new call to the application
   * @request POST:/applications/{application_uuid}/calls
   * @secure
   */
  export namespace CallsCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationCallRequestToExten;
    export type RequestHeaders = {};
    export type ResponseBody = CallsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.delete`
   * @tags applications
   * @name CallsDelete
   * @summary Hangup a call from the application
   * @request DELETE:/applications/{application_uuid}/calls/{call_id}
   * @secure
   */
  export namespace CallsDelete {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.answer.update`
   * @tags applications
   * @name CallsAnswerUpdate
   * @summary Answer a call
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/answer
   * @secure
   */
  export namespace CallsAnswerUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsAnswerUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.dtmf.update
   * @tags applications
   * @name CallsDtmfUpdate
   * @summary Simulate a user pressing DTMF keys
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/dtmf
   * @secure
   */
  export namespace CallsDtmfUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {
      /** Digits to send via DTMF. Must contain only `0-9*#`. */
      digits: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsDtmfUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.hold.start.update`
   * @tags applications
   * @name CallsHoldStartUpdate
   * @summary Place a call on hold
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/hold/start
   * @secure
   */
  export namespace CallsHoldStartUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsHoldStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.hold.stop.update
   * @tags applications
   * @name CallsHoldStopUpdate
   * @summary Resume a call that has been placed on hold
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/hold/stop
   * @secure
   */
  export namespace CallsHoldStopUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsHoldStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.moh.{moh_uuid}.stop.update
   * @tags applications
   * @name CallsMohStopUpdate
   * @summary Stops playing a music on hold
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/moh/stop
   * @secure
   */
  export namespace CallsMohStopUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsMohStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.moh.{moh_uuid}.start.update` Starts playing a music on hold on a call. If the music on hold is interrupted for a playback or another action, the music on hold will not restart automatically after the interruption.
   * @tags applications
   * @name CallsMohStartUpdate
   * @summary Starts playing a music on hold
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/moh/{moh_uuid}/start
   * @secure
   */
  export namespace CallsMohStartUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
      /** UUID of the music on hold */
      mohUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsMohStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.mute.start.update`
   * @tags applications
   * @name CallsMuteStartUpdate
   * @summary Mute a call
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/mute/start
   * @secure
   */
  export namespace CallsMuteStartUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsMuteStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.mute.stop.update`
   * @tags applications
   * @name CallsMuteStopUpdate
   * @summary Unmute a call
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/mute/stop
   * @secure
   */
  export namespace CallsMuteStopUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsMuteStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.playbacks.create` URI examples: * sound:tt-weasels * digits:4188001234 * number:321 * characters:abc * tone:ring * recording:my-recording
   * @tags applications
   * @name CallsPlaybacksCreate
   * @summary Play file to the call
   * @request POST:/applications/{application_uuid}/calls/{call_id}/playbacks
   * @secure
   */
  export namespace CallsPlaybacksCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationPlayback;
    export type RequestHeaders = {};
    export type ResponseBody = CallsPlaybacksCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.progress.start.update` The progress ringing tone is the sound heard by a caller while the other party is ringing.
   * @tags applications
   * @name CallsProgressStartUpdate
   * @summary Play the progress ringing tone
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/progress/start
   * @secure
   */
  export namespace CallsProgressStartUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsProgressStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.progress.stop.update` The progress ringing tone is the sound heard by a caller while the other party is ringing. Limitation: this only works when the ringing tone is played by Wazo through audio media (e.g. when using `/progress` after `/answer`). If the phone is emitting the ringing tone directly to the user, then it cannot be stopped, and the response code will still be 204.
   * @tags applications
   * @name CallsProgressStopUpdate
   * @summary Stop playing the progress ringing tone.
   * @request PUT:/applications/{application_uuid}/calls/{call_id}/progress/stop
   * @secure
   */
  export namespace CallsProgressStopUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallsProgressStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.calls.{call_id}.snoops.create` The whisper mode indicate which part of the snooped channel can hear the snooper. Given Alice calls Bob and Charles snoops on Bob * none: No one can hear the snooper * both: Alice and Bob can hear Charles * in: Alice can hear Charles * out: Bob can hear Charles
   * @tags applications
   * @name CallsSnoopsCreate
   * @summary Start snooping on a call
   * @request POST:/applications/{application_uuid}/calls/{call_id}/snoops
   * @secure
   */
  export namespace CallsSnoopsCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationSnoop;
    export type RequestHeaders = {};
    export type ResponseBody = CallsSnoopsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.read`
   * @tags applications
   * @name NodesList
   * @summary List nodes from the application
   * @request GET:/applications/{application_uuid}/nodes
   * @secure
   */
  export namespace NodesList {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NodesListData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.create`
   * @tags applications
   * @name NodesCreate
   * @summary Make a new node and add calls
   * @request POST:/applications/{application_uuid}/nodes
   * @secure
   */
  export namespace NodesCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationNodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = NodesCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.delete` **Not implemented**
   * @tags applications
   * @name NodesDelete
   * @summary Delete node and hangup all calls
   * @request DELETE:/applications/{application_uuid}/nodes/{node_uuid}
   * @secure
   */
  export namespace NodesDelete {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NodesDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.read`
   * @tags applications
   * @name NodesDetail
   * @summary Show a node
   * @request GET:/applications/{application_uuid}/nodes/{node_uuid}
   * @secure
   */
  export namespace NodesDetail {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NodesDetailData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.create`
   * @tags applications
   * @name NodesCallsCreate
   * @summary Make a new call to the node
   * @request POST:/applications/{application_uuid}/nodes/{node_uuid}/calls
   * @secure
   */
  export namespace NodesCallsCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationCallRequestToExten;
    export type RequestHeaders = {};
    export type ResponseBody = NodesCallsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.user.create`
   * @tags applications
   * @name NodesCallsUserCreate
   * @summary Initiate a call to a user and insert it in the node
   * @request POST:/applications/{application_uuid}/nodes/{node_uuid}/calls/user
   * @secure
   */
  export namespace NodesCallsUserCreate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationCallRequestToUser;
    export type RequestHeaders = {};
    export type ResponseBody = NodesCallsUserCreateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.{call_id}.delete`
   * @tags applications
   * @name NodesCallsDelete
   * @summary Remove call from the node
   * @request DELETE:/applications/{application_uuid}/nodes/{node_uuid}/calls/{call_id}
   * @secure
   */
  export namespace NodesCallsDelete {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NodesCallsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.nodes.{node_uuid}.calls.{call_id}.update`
   * @tags applications
   * @name NodesCallsUpdate
   * @summary Insert call to the node
   * @request PUT:/applications/{application_uuid}/nodes/{node_uuid}/calls/{call_id}
   * @secure
   */
  export namespace NodesCallsUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the call */
      callId: string;
      /** UUID of the node */
      nodeUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NodesCallsUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.playbacks.{playback_uuid}.delete`
   * @tags applications
   * @name PlaybacksDelete
   * @summary Stop and remove playback
   * @request DELETE:/applications/{application_uuid}/playbacks/{playback_uuid}
   * @secure
   */
  export namespace PlaybacksDelete {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** ID of the playback */
      playbackUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlaybacksDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.read`
   * @tags applications
   * @name SnoopsList
   * @summary List active snoops
   * @request GET:/applications/{application_uuid}/snoops
   * @secure
   */
  export namespace SnoopsList {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SnoopsListData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.delete`
   * @tags applications
   * @name SnoopsDelete
   * @summary Stop snooping
   * @request DELETE:/applications/{application_uuid}/snoops/{snoop_uuid}
   * @secure
   */
  export namespace SnoopsDelete {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the snoop */
      snoopUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SnoopsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.read`
   * @tags applications
   * @name SnoopsDetail
   * @summary View snooping parameters
   * @request GET:/applications/{application_uuid}/snoops/{snoop_uuid}
   * @secure
   */
  export namespace SnoopsDetail {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the snoop */
      snoopUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SnoopsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.applications.{application_uuid}.snoops.{snoop_uuid}.update`
   * @tags applications
   * @name SnoopsUpdate
   * @summary Change snooping parameters
   * @request PUT:/applications/{application_uuid}/snoops/{snoop_uuid}
   * @secure
   */
  export namespace SnoopsUpdate {
    export type RequestParams = {
      /** UUID of the application */
      applicationUuid: string;
      /** UUID of the snoop */
      snoopUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApplicationSnoopPut;
    export type RequestHeaders = {};
    export type ResponseBody = SnoopsUpdateData;
  }
}

export namespace Calls {
  /**
   * @description **Required ACL:** `calld.calls.read`
   * @tags calls
   * @name CallsList
   * @summary List calls
   * @request GET:/calls
   * @secure
   */
  export namespace CallsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter calls by Stasis application, e.g. switchboard. */
      application?: string;
      /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). `application_instance` is ignored if `application` is not set. */
      application_instance?: string;
      /**
       * Should the list include results from sub-tenants?
       * This option is only supported for the tenant `master`.
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsListResult;
  }

  /**
   * @description **Required ACL:** `calld.calls.create` Create a new call from a phone to an extension.
   * @tags calls
   * @name CallsCreate
   * @summary Make a new call
   * @request POST:/calls
   * @secure
   */
  export namespace CallsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CallRequest;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsCreateResult;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.delete`
   * @tags calls
   * @name CallsDelete
   * @summary Hangup a call
   * @request DELETE:/calls/{call_id}
   * @secure
   */
  export namespace CallsDelete {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsDeleteResult;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.read`
   * @tags calls
   * @name CallsDetail
   * @summary Show a call
   * @request GET:/calls/{call_id}
   * @secure
   */
  export namespace CallsDetail {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.answer.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
   * @tags calls
   * @name AnswerUpdate
   * @summary Answer a call
   * @request PUT:/calls/{call_id}/answer
   * @secure
   */
  export namespace AnswerUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = AnswerUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.dtmf.update
   * @tags calls
   * @name DtmfUpdate
   * @summary Simulate a user pressing DTMF keys
   * @request PUT:/calls/{call_id}/dtmf
   * @secure
   */
  export namespace DtmfUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {
      /** Digits to send via DTMF. Must contain only `0-9*#`. */
      digits: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DtmfUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.hold.start.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
   * @tags calls
   * @name HoldStartUpdate
   * @summary Hold a call
   * @request PUT:/calls/{call_id}/hold/start
   * @secure
   */
  export namespace HoldStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = HoldStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.hold.stop.update` This works **only** if the phone brand has a corresponding phoned plugin to handle the event.
   * @tags calls
   * @name HoldStopUpdate
   * @summary Unhold a call
   * @request PUT:/calls/{call_id}/hold/stop
   * @secure
   */
  export namespace HoldStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = HoldStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.mute.start.update`
   * @tags calls
   * @name MuteStartUpdate
   * @summary Mute a call
   * @request PUT:/calls/{call_id}/mute/start
   * @secure
   */
  export namespace MuteStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MuteStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.mute.stop.update`
   * @tags calls
   * @name MuteStopUpdate
   * @summary Unmute a call
   * @request PUT:/calls/{call_id}/mute/stop
   * @secure
   */
  export namespace MuteStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MuteStopUpdateData;
  }

  /**
   * @description **Required ACL:** calld.calls.{call_id}.park.update`. Use the `POST /calls` API to unpark the call.
   * @tags calls, parking_lots
   * @name ParkUpdate
   * @summary Park a call
   * @request PUT:/calls/{call_id}/park
   * @secure
   */
  export namespace ParkUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ParkCallBody;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ParkUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.pause.update`
   * @tags calls
   * @name RecordPauseUpdate
   * @summary Pause recording a call
   * @request PUT:/calls/{call_id}/record/pause
   * @secure
   */
  export namespace RecordPauseUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RecordPauseUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.resume.update`
   * @tags calls
   * @name RecordResumeUpdate
   * @summary Resume recording a call
   * @request PUT:/calls/{call_id}/record/resume
   * @secure
   */
  export namespace RecordResumeUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RecordResumeUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.start.update`
   * @tags calls
   * @name RecordStartUpdate
   * @summary Start recording a call
   * @request PUT:/calls/{call_id}/record/start
   * @secure
   */
  export namespace RecordStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RecordStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.stop.update`
   * @tags calls
   * @name RecordStopUpdate
   * @summary Stop recording a call
   * @request PUT:/calls/{call_id}/record/stop
   * @secure
   */
  export namespace RecordStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RecordStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.user.{user_uuid}.update`
   * @tags calls
   * @name UserUpdate
   * @summary Connect a call to a user
   * @request PUT:/calls/{call_id}/user/{user_uuid}
   * @secure
   */
  export namespace UserUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ConnectCallToUserRequest;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UserUpdateData;
  }
}

export namespace Conferences {
  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.participants.read`
   * @tags conferences
   * @name ParticipantsList
   * @summary List participants of a conference
   * @request GET:/conferences/{conference_id}/participants
   * @secure
   */
  export namespace ParticipantsList {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsListData;
  }

  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.delete`
   * @tags conferences
   * @name ParticipantsDelete
   * @summary Kick participant from a conference
   * @request DELETE:/conferences/{conference_id}/participants/{participant_id}
   * @secure
   */
  export namespace ParticipantsDelete {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
      /** Unique identifier of the participant */
      participantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.mute.update`
   * @tags conferences
   * @name ParticipantsMuteUpdate
   * @summary Mute a participant in a conference
   * @request PUT:/conferences/{conference_id}/participants/{participant_id}/mute
   * @secure
   */
  export namespace ParticipantsMuteUpdate {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
      /** Unique identifier of the participant */
      participantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsMuteUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.participants.{participant_id}.unmute.update`
   * @tags conferences
   * @name ParticipantsUnmuteUpdate
   * @summary Unmute a participant in a conference
   * @request PUT:/conferences/{conference_id}/participants/{participant_id}/unmute
   * @secure
   */
  export namespace ParticipantsUnmuteUpdate {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
      /** Unique identifier of the participant */
      participantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsUnmuteUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.record.delete`
   * @tags conferences
   * @name RecordDelete
   * @summary Stop recording a conference
   * @request DELETE:/conferences/{conference_id}/record
   * @secure
   */
  export namespace RecordDelete {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RecordDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.conferences.{conference_id}.record.create`
   * @tags conferences
   * @name RecordCreate
   * @summary Record a conference
   * @request POST:/conferences/{conference_id}/record
   * @secure
   */
  export namespace RecordCreate {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RecordCreateData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `calld.config.read`
   * @tags config
   * @name GetConfig
   * @summary Show the current configuration
   * @request GET:/config
   * @secure
   */
  export namespace GetConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConfigData;
  }

  /**
   * @description **Required ACL:** `calld.config.update` Changes are not persistent across service restart.
   * @tags config
   * @name PatchConfig
   * @summary Update the current configuration.
   * @request PATCH:/config
   * @secure
   */
  export namespace PatchConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PatchConfigPayload;
    export type RequestHeaders = {};
    export type ResponseBody = PatchConfigData;
  }
}

export namespace Faxes {
  /**
   * @description **Required ACL:** `calld.faxes.create`
   * @tags faxes
   * @name FaxesCreate
   * @summary Send a fax
   * @request POST:/faxes
   * @secure
   */
  export namespace FaxesCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
       * @default "Wazo Fax"
       */
      caller_id?: string;
      /** Context of the recipient of the fax */
      context: string;
      /** Extension of the recipient of the fax */
      extension: string;
      /** Extension to compose before sending fax. Useful for fax in IVR */
      ivr_extension?: string;
      /** Time waiting before sending fax when destination has answered (in seconds) */
      wait_time?: number;
    };
    export type RequestBody = FaxesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = FaxesCreateData;
  }
}

export namespace Guests {
  /**
   * @description Returns the status of a meeting that should be visible to a guest.
   * @tags meetings
   * @name MeMeetingsStatusList
   * @summary Get the status of a meeting
   * @request GET:/guests/me/meetings/{meeting_uuid}/status
   * @secure
   */
  export namespace MeMeetingsStatusList {
    export type RequestParams = {
      /** Unique identifier of the meeting */
      meetingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeMeetingsStatusListData;
  }
}

export namespace Lines {
  /**
   * @description **Required ACL:** `calld.lines.read` List the status of line endpoints that are configured on Asterisk Supported technologies: * SIP Lines with unsupported technologies will be listed but there status will be null
   * @tags lines
   * @name LinesList
   * @summary List line endpoint statuses
   * @request GET:/lines
   * @secure
   */
  export namespace LinesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LinesListData;
  }
}

export namespace Meetings {
  /**
   * @description **Required ACL:** `calld.meetings.{meeting_uuid}.participants.read`
   * @tags meetings
   * @name ParticipantsList
   * @summary List participants of a meeting
   * @request GET:/meetings/{meeting_uuid}/participants
   * @secure
   */
  export namespace ParticipantsList {
    export type RequestParams = {
      /** Unique identifier of the meeting */
      meetingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsListResult;
  }

  /**
   * @description **Required ACL:** `calld.meetings.{meeting_uuid}.participants.delete`
   * @tags meetings
   * @name ParticipantsDelete
   * @summary Kick a participant from a meeting
   * @request DELETE:/meetings/{meeting_uuid}/participants/{participant_id}
   * @secure
   */
  export namespace ParticipantsDelete {
    export type RequestParams = {
      /** Unique identifier of the meeting */
      meetingUuid: string;
      /** Unique identifier of the participant */
      participantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ParticipantsDeleteResult;
  }
}

export namespace Parkinglots {
  /**
   * @description **Required ACL:** `calld.parkings.read`
   * @tags parking_lots
   * @name ParkinglotsList
   * @summary Retrieve the list of parkings and park calls
   * @request GET:/parkinglots
   * @secure
   */
  export namespace ParkinglotsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ParkinglotsListData;
  }

  /**
   * @description **Required ACL:** `calld.parkings.{parking_id}.read`
   * @tags parking_lots
   * @name ParkinglotsDetail
   * @summary Retrieve parked calls for parking
   * @request GET:/parkinglots/{parking_id}
   * @secure
   */
  export namespace ParkinglotsDetail {
    export type RequestParams = {
      /** Parking lot's ID */
      parkingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ParkinglotsDetailData;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `calld.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-calld
   * @request GET:/status
   * @secure
   */
  export namespace StatusList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StatusListData;
  }
}

export namespace Switchboards {
  /**
   * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.read` **Warning:** This endpoint is still in development and may change in the future.
   * @tags switchboards
   * @name CallsHeldList
   * @summary List calls held in the switchboard
   * @request GET:/switchboards/{switchboard_uuid}/calls/held
   * @secure
   */
  export namespace CallsHeldList {
    export type RequestParams = {
      /** Unique identifier of the switchboard */
      switchboardUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsHeldListData;
  }

  /**
   * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.{call_id}.update` **Warning:** This endpoint is still in development and may change in the future. This action will also hangup the previous call talking to the held call, if there was any.
   * @tags switchboards
   * @name CallsHeldUpdate
   * @summary Put the specified call on hold in the switchboard
   * @request PUT:/switchboards/{switchboard_uuid}/calls/held/{call_id}
   * @secure
   */
  export namespace CallsHeldUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** Unique identifier of the switchboard */
      switchboardUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsHeldUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.held.{call_id}.answer.update` **Warning:** This endpoint is still in development and may change in the future.
   * @tags switchboards
   * @name CallsHeldAnswerUpdate
   * @summary Answer the specified held call
   * @request PUT:/switchboards/{switchboard_uuid}/calls/held/{call_id}/answer
   * @secure
   */
  export namespace CallsHeldAnswerUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** Unique identifier of the switchboard */
      switchboardUuid: string;
    };
    export type RequestQuery = {
      /** ID of the line of the user used to make the call. Default is the main line of the user. */
      line_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsHeldAnswerUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.queued.read` **Warning:** This endpoint is still in development and may change in the future.
   * @tags switchboards
   * @name CallsQueuedList
   * @summary List calls queued in the switchboard
   * @request GET:/switchboards/{switchboard_uuid}/calls/queued
   * @secure
   */
  export namespace CallsQueuedList {
    export type RequestParams = {
      /** Unique identifier of the switchboard */
      switchboardUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsQueuedListData;
  }

  /**
   * @description **Required ACL:** `calld.switchboards.{switchboard_uuid}.calls.queued.{call_id}.answer.update` **Warning:** This endpoint is still in development and may change in the future.
   * @tags switchboards
   * @name CallsQueuedAnswerUpdate
   * @summary Answer the specified queued call
   * @request PUT:/switchboards/{switchboard_uuid}/calls/queued/{call_id}/answer
   * @secure
   */
  export namespace CallsQueuedAnswerUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** Unique identifier of the switchboard */
      switchboardUuid: string;
    };
    export type RequestQuery = {
      /** ID of the line of the user used to make the call. Default is the main line of the user. */
      line_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CallsQueuedAnswerUpdateData;
  }
}

export namespace Transfers {
  /**
   * @description **Required ACL:** `calld.transfers.create` The only way to cancel the transfer from the initiator is to use `DELETE /transfers/<id>` (i.e. sending DTMF `*0` will not work).
   * @tags transfers
   * @name TransfersCreate
   * @summary Initiate a transfer
   * @request POST:/transfers
   * @secure
   */
  export namespace TransfersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TransferRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TransfersCreateData;
  }

  /**
   * @description **Required ACL:** `calld.transfers.{transfer_id}.delete`
   * @tags transfers
   * @name TransfersDelete
   * @summary Cancel a transfer
   * @request DELETE:/transfers/{transfer_id}
   * @secure
   */
  export namespace TransfersDelete {
    export type RequestParams = {
      /** Unique identifier of the transfer */
      transferId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TransfersDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.transfers.{transfer_id}.read`
   * @tags transfers
   * @name TransfersDetail
   * @summary Get details of a transfer
   * @request GET:/transfers/{transfer_id}
   * @secure
   */
  export namespace TransfersDetail {
    export type RequestParams = {
      /** Unique identifier of the transfer */
      transferId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TransfersDetailData;
  }

  /**
   * @description **Required ACL:** `calld.transfers.{transfer_id}.complete.update`
   * @tags transfers
   * @name CompleteUpdate
   * @summary Complete a transfer
   * @request PUT:/transfers/{transfer_id}/complete
   * @secure
   */
  export namespace CompleteUpdate {
    export type RequestParams = {
      /** Unique identifier of the transfer */
      transferId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteUpdateData;
  }
}

export namespace Trunks {
  /**
   * @description **Required ACL:** `calld.trunks.read` List the status of trunk endpoints that are configured on Asterisk Supported technologies: * SIP Trunks with unsupported technologies will be listed but there status will be null
   * @tags trunks
   * @name TrunksList
   * @summary List trunk endpoint statuses
   * @request GET:/trunks
   * @secure
   */
  export namespace TrunksList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = TrunksListData;
  }
}

export namespace Users {
  /**
   * @description **Required ACL:** `calld.users.me.calls.read`
   * @tags calls, users
   * @name MeCallsList
   * @summary List calls of a user
   * @request GET:/users/me/calls
   * @secure
   */
  export namespace MeCallsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter calls by Stasis application, e.g. switchboard. */
      application?: string;
      /** Filter calls by Stasis application instance, e.g. switchboard-sales,green. Args must be separated by commas (,). */
      application_instance?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.create` The user originator of the call is determined from the authentication token.
   * @tags calls, users
   * @name MeCallsCreate
   * @summary Make a new call from a user
   * @request POST:/users/me/calls
   * @secure
   */
  export namespace MeCallsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserCallRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.delete` Only calls owned by the authenticated user may be hung up.
   * @tags calls, users
   * @name MeCallsDelete
   * @summary Hangup a call from a user
   * @request DELETE:/users/me/calls/{call_id}
   * @secure
   */
  export namespace MeCallsDelete {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.answer.update` Only calls owned by the authenticated user may be answered.
   * @tags calls, users
   * @name MeCallsAnswerUpdate
   * @summary Answer a call from user
   * @request PUT:/users/me/calls/{call_id}/answer
   * @secure
   */
  export namespace MeCallsAnswerUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsAnswerUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.dtmf.update
   * @tags calls, users
   * @name MeCallsDtmfUpdate
   * @summary Simulate a user pressing DTMF keys
   * @request PUT:/users/me/calls/{call_id}/dtmf
   * @secure
   */
  export namespace MeCallsDtmfUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {
      /** Digits to send via DTMF. Must contain only `0-9*#`. */
      digits: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsDtmfUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.hold.start.update` Only calls owned by the authenticated user may be held.
   * @tags calls, users
   * @name MeCallsHoldStartUpdate
   * @summary Hold a call from user
   * @request PUT:/users/me/calls/{call_id}/hold/start
   * @secure
   */
  export namespace MeCallsHoldStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsHoldStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.hold.stop.update` Only calls owned by the authenticated user may be unheld.
   * @tags calls, users
   * @name MeCallsHoldStopUpdate
   * @summary Unhold a call from user
   * @request PUT:/users/me/calls/{call_id}/hold/stop
   * @secure
   */
  export namespace MeCallsHoldStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsHoldStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.mute.start.update` Only calls owned by the authenticated user may be mute.
   * @tags calls, users
   * @name MeCallsMuteStartUpdate
   * @summary Mute a call from user
   * @request PUT:/users/me/calls/{call_id}/mute/start
   * @secure
   */
  export namespace MeCallsMuteStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsMuteStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.mute.stop.update` Only calls owned by the authenticated user may be unmute.
   * @tags calls, users
   * @name MeCallsMuteStopUpdate
   * @summary Unmute a call from user
   * @request PUT:/users/me/calls/{call_id}/mute/stop
   * @secure
   */
  export namespace MeCallsMuteStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsMuteStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.calls.{call_id}.park.update` Use the `POST /users/me/calls` API to unpark the call.
   * @tags calls, parking_lots, users
   * @name MeCallsParkUpdate
   * @summary Park the user's connected (talking to) call
   * @request PUT:/users/me/calls/{call_id}/park
   * @secure
   */
  export namespace MeCallsParkUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ParkCallBody;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MeCallsParkUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.pause.update`
   * @tags calls, users
   * @name MeCallsRecordPauseUpdate
   * @summary Pause recording a call
   * @request PUT:/users/me/calls/{call_id}/record/pause
   * @secure
   */
  export namespace MeCallsRecordPauseUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsRecordPauseUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.resume.update`
   * @tags calls, users
   * @name MeCallsRecordResumeUpdate
   * @summary Resume recording a call
   * @request PUT:/users/me/calls/{call_id}/record/resume
   * @secure
   */
  export namespace MeCallsRecordResumeUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsRecordResumeUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.start.update`
   * @tags calls, users
   * @name MeCallsRecordStartUpdate
   * @summary Start recording a call
   * @request PUT:/users/me/calls/{call_id}/record/start
   * @secure
   */
  export namespace MeCallsRecordStartUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsRecordStartUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.calls.{call_id}.record.stop.update`
   * @tags calls, users
   * @name MeCallsRecordStopUpdate
   * @summary Stop recording a call
   * @request PUT:/users/me/calls/{call_id}/record/stop
   * @secure
   */
  export namespace MeCallsRecordStopUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCallsRecordStopUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.conferences.adhoc.create`. An adhoc conference allows a user to merge multiple calls in one conversation. It acts like a conference room, but has no dedicated extension. The user creating the adhoc conference acts as the owner of the conference and controls who enters or leaves the conference. The conference will be destroyed when the owner leaves the conference.
   * @tags adhoc_conferences
   * @name MeConferencesAdhocCreate
   * @summary Create an adhoc conference
   * @request POST:/users/me/conferences/adhoc
   * @secure
   */
  export namespace MeConferencesAdhocCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AdhocConferenceCreation;
    export type RequestHeaders = {};
    export type ResponseBody = MeConferencesAdhocCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.conferences.adhoc.delete`. All calls in the adhoc conference will be hungup.
   * @tags adhoc_conferences
   * @name MeConferencesAdhocDelete
   * @summary Delete an adhoc conference
   * @request DELETE:/users/me/conferences/adhoc/{conference_id}
   * @secure
   */
  export namespace MeConferencesAdhocDelete {
    export type RequestParams = {
      /** ID of the adhoc conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeConferencesAdhocDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.conferences.adhoc.participants.delete`
   * @tags adhoc_conferences
   * @name MeConferencesAdhocParticipantsDelete
   * @summary Remove a participant from an adhoc conference
   * @request DELETE:/users/me/conferences/adhoc/{conference_id}/participants/{call_id}
   * @secure
   */
  export namespace MeConferencesAdhocParticipantsDelete {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** ID of the adhoc conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeConferencesAdhocParticipantsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.conferences.adhoc.participants.update`
   * @tags adhoc_conferences
   * @name MeConferencesAdhocParticipantsUpdate
   * @summary Add a participant into an adhoc conference
   * @request PUT:/users/me/conferences/adhoc/{conference_id}/participants/{call_id}
   * @secure
   */
  export namespace MeConferencesAdhocParticipantsUpdate {
    export type RequestParams = {
      /** Call ID */
      callId: string;
      /** ID of the adhoc conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeConferencesAdhocParticipantsUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.conferences.{conference_id}.participants.read`
   * @tags conferences, users
   * @name MeConferencesParticipantsList
   * @summary List participants of a conference as a user
   * @request GET:/users/me/conferences/{conference_id}/participants
   * @secure
   */
  export namespace MeConferencesParticipantsList {
    export type RequestParams = {
      /** Unique identifier of the conference */
      conferenceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeConferencesParticipantsListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.faxes.create`
   * @tags faxes
   * @name MeFaxesCreate
   * @summary Send a fax as the user detected from the token
   * @request POST:/users/me/faxes
   * @secure
   */
  export namespace MeFaxesCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Caller ID that will be presented to the recipient of the fax. Example: "my-name <+15551112222>"
       * @default "Wazo Fax"
       */
      caller_id?: string;
      /** Extension of the recipient of the fax */
      extension: string;
      /** Extension to compose before sending fax. Useful for fax in IVR */
      ivr_extension?: string;
      /** Time waiting before sending fax when destination has answered (in seconds) */
      wait_time?: number;
    };
    export type RequestBody = MeFaxesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = MeFaxesCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.meetings.{meeting_uuid}.participants.read`
   * @tags meetings, users
   * @name MeMeetingsParticipantsList
   * @summary List participants of a meeting as a user
   * @request GET:/users/me/meetings/{meeting_uuid}/participants
   * @secure
   */
  export namespace MeMeetingsParticipantsList {
    export type RequestParams = {
      /** Unique identifier of the meeting */
      meetingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeMeetingsParticipantsListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.meetings.participants.delete`
   * @tags meetings, users
   * @name MeMeetingsParticipantsDelete
   * @summary Kick a participant from a meeting as a user
   * @request DELETE:/users/me/meetings/{meeting_uuid}/participants/{participant_id}
   * @secure
   */
  export namespace MeMeetingsParticipantsDelete {
    export type RequestParams = {
      /** Unique identifier of the meeting */
      meetingUuid: string;
      /** Unique identifier of the participant */
      participantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeMeetingsParticipantsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.relocates.read`
   * @tags relocates, users
   * @name MeRelocatesList
   * @summary Get the relocates of the authenticated user
   * @request GET:/users/me/relocates
   * @secure
   */
  export namespace MeRelocatesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeRelocatesListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.relocates.create`
   * @tags relocates, users
   * @name MeRelocatesCreate
   * @summary Initiate a relocate from the authenticated user
   * @request POST:/users/me/relocates
   * @secure
   */
  export namespace MeRelocatesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserRelocateRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MeRelocatesCreateData;
  }

  /**
   * @description **Required ACL:** `calld.relocates.users.me.{relocate_uuid}.read`
   * @tags relocates
   * @name MeRelocatesDetail
   * @summary Get details of a relocate
   * @request GET:/users/me/relocates/{relocate_uuid}
   * @secure
   */
  export namespace MeRelocatesDetail {
    export type RequestParams = {
      /** Unique identifier of the relocate */
      relocateUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeRelocatesDetailData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.relocates.{relocate_uuid}.cancel.update`
   * @tags relocates, users
   * @name MeRelocatesCancelUpdate
   * @summary Cancel a relocate
   * @request PUT:/users/me/relocates/{relocate_uuid}/cancel
   * @secure
   */
  export namespace MeRelocatesCancelUpdate {
    export type RequestParams = {
      /** Unique identifier of the relocate */
      relocateUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeRelocatesCancelUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.relocates.{relocate_uuid}.complete.update`
   * @tags relocates, users
   * @name MeRelocatesCompleteUpdate
   * @summary Complete a relocate
   * @request PUT:/users/me/relocates/{relocate_uuid}/complete
   * @secure
   */
  export namespace MeRelocatesCompleteUpdate {
    export type RequestParams = {
      /** Unique identifier of the relocate */
      relocateUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeRelocatesCompleteUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.transfers.read`
   * @tags transfers, users
   * @name MeTransfersList
   * @summary Get the transfers of the authenticated user
   * @request GET:/users/me/transfers
   * @secure
   */
  export namespace MeTransfersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeTransfersListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.transfers.create`
   * @tags transfers, users
   * @name MeTransfersCreate
   * @summary Initiate a transfer from the authenticated user
   * @request POST:/users/me/transfers
   * @secure
   */
  export namespace MeTransfersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserTransferRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MeTransfersCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.transfers.{transfer_id}.delete`
   * @tags transfers, users
   * @name MeTransfersDelete
   * @summary Cancel a transfer
   * @request DELETE:/users/me/transfers/{transfer_id}
   * @secure
   */
  export namespace MeTransfersDelete {
    export type RequestParams = {
      /** Unique identifier of the transfer */
      transferId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeTransfersDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.transfers.{transfer_id}.complete.update`
   * @tags transfers, users
   * @name MeTransfersCompleteUpdate
   * @summary Complete a transfer
   * @request PUT:/users/me/transfers/{transfer_id}/complete
   * @secure
   */
  export namespace MeTransfersCompleteUpdate {
    export type RequestParams = {
      /** Unique identifier of the transfer */
      transferId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeTransfersCompleteUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.read`
   * @tags users, voicemails
   * @name MeVoicemailsList
   * @summary Get details of the voicemail of the authenticated user
   * @request GET:/users/me/voicemails
   * @secure
   */
  export namespace MeVoicemailsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsListData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.folders.{folder_id}.read`
   * @tags users, voicemails
   * @name MeVoicemailsFoldersDetail
   * @summary Get details of a folder
   * @request GET:/users/me/voicemails/folders/{folder_id}
   * @secure
   */
  export namespace MeVoicemailsFoldersDetail {
    export type RequestParams = {
      /** The folder's ID */
      folderId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsFoldersDetailData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.delete`
   * @tags users, voicemails
   * @name MeVoicemailsGreetingsDelete
   * @summary Delete a custom greeting
   * @request DELETE:/users/me/voicemails/greetings/{greeting}
   * @secure
   */
  export namespace MeVoicemailsGreetingsDelete {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsGreetingsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.read`
   * @tags users, voicemails
   * @name MeVoicemailsGreetingsDetail
   * @summary Get a custom greeting
   * @request GET:/users/me/voicemails/greetings/{greeting}
   * @secure
   */
  export namespace MeVoicemailsGreetingsDetail {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsGreetingsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.read`
   * @tags users, voicemails
   * @name HeadUsers
   * @summary Check if greeting exists
   * @request HEAD:/users/me/voicemails/greetings/{greeting}
   * @secure
   */
  export namespace HeadUsers {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadUsersData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.create`
   * @tags users, voicemails
   * @name MeVoicemailsGreetingsCreate
   * @summary Create a custom greeting
   * @request POST:/users/me/voicemails/greetings/{greeting}
   * @secure
   */
  export namespace MeVoicemailsGreetingsCreate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = MeVoicemailsGreetingsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsGreetingsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.update`
   * @tags users, voicemails
   * @name MeVoicemailsGreetingsUpdate
   * @summary Update a custom greeting
   * @request PUT:/users/me/voicemails/greetings/{greeting}
   * @secure
   */
  export namespace MeVoicemailsGreetingsUpdate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = MeVoicemailsGreetingsUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsGreetingsUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.greetings.{greeting}.copy.create`
   * @tags users, voicemails
   * @name MeVoicemailsGreetingsCopyCreate
   * @summary Copy a custom greeting
   * @request POST:/users/me/voicemails/greetings/{greeting}/copy
   * @secure
   */
  export namespace MeVoicemailsGreetingsCopyCreate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
    };
    export type RequestQuery = {};
    export type RequestBody = GreetingCopy;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsGreetingsCopyCreateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.delete`
   * @tags users, voicemails
   * @name MeVoicemailsMessagesDelete
   * @summary Delete a mesage
   * @request DELETE:/users/me/voicemails/messages/{message_id}
   * @secure
   */
  export namespace MeVoicemailsMessagesDelete {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsMessagesDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.read`
   * @tags users, voicemails
   * @name MeVoicemailsMessagesDetail
   * @summary Get a message
   * @request GET:/users/me/voicemails/messages/{message_id}
   * @secure
   */
  export namespace MeVoicemailsMessagesDetail {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsMessagesDetailData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.update`
   * @tags users, voicemails
   * @name MeVoicemailsMessagesUpdate
   * @summary Update a message
   * @request PUT:/users/me/voicemails/messages/{message_id}
   * @secure
   */
  export namespace MeVoicemailsMessagesUpdate {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VoicemailMessageUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsMessagesUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.users.me.voicemails.messages.{message_id}.recording.read`
   * @tags users, voicemails
   * @name MeVoicemailsMessagesRecordingList
   * @summary Get a message's recording
   * @request GET:/users/me/voicemails/messages/{message_id}/recording
   * @secure
   */
  export namespace MeVoicemailsMessagesRecordingList {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
    };
    export type RequestQuery = {
      /** Set to 1 to force download by browser */
      download?: string;
      /** The token's ID */
      token?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeVoicemailsMessagesRecordingListData;
  }
}

export namespace Voicemails {
  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.read`
   * @tags voicemails
   * @name VoicemailsDetail
   * @summary Get details of a voicemail
   * @request GET:/voicemails/{voicemail_id}
   * @secure
   */
  export namespace VoicemailsDetail {
    export type RequestParams = {
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = VoicemailsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.folders.{folder_id}.read`
   * @tags voicemails
   * @name FoldersDetail
   * @summary Get details of a folder
   * @request GET:/voicemails/{voicemail_id}/folders/{folder_id}
   * @secure
   */
  export namespace FoldersDetail {
    export type RequestParams = {
      /** The folder's ID */
      folderId: number;
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FoldersDetailData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.delete`
   * @tags voicemails
   * @name GreetingsDelete
   * @summary Delete a custom greeting
   * @request DELETE:/voicemails/{voicemail_id}/greetings/{greeting}
   * @secure
   */
  export namespace GreetingsDelete {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GreetingsDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.read`
   * @tags voicemails
   * @name GreetingsDetail
   * @summary Get a custom greeting
   * @request GET:/voicemails/{voicemail_id}/greetings/{greeting}
   * @secure
   */
  export namespace GreetingsDetail {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GreetingsDetailData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.read`
   * @tags voicemails
   * @name HeadVoicemails
   * @summary Check if greeting exists
   * @request HEAD:/voicemails/{voicemail_id}/greetings/{greeting}
   * @secure
   */
  export namespace HeadVoicemails {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadVoicemailsData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.create`
   * @tags voicemails
   * @name GreetingsCreate
   * @summary Create a custom greeting
   * @request POST:/voicemails/{voicemail_id}/greetings/{greeting}
   * @secure
   */
  export namespace GreetingsCreate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = GreetingsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = GreetingsCreateData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.update`
   * @tags voicemails
   * @name GreetingsUpdate
   * @summary Update a custom greeting
   * @request PUT:/voicemails/{voicemail_id}/greetings/{greeting}
   * @secure
   */
  export namespace GreetingsUpdate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = GreetingsUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = GreetingsUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.greetings.{greeting}.copy.create`
   * @tags voicemails
   * @name GreetingsCopyCreate
   * @summary Copy a custom greeting
   * @request POST:/voicemails/{voicemail_id}/greetings/{greeting}/copy
   * @secure
   */
  export namespace GreetingsCopyCreate {
    export type RequestParams = {
      /** The greeting */
      greeting: "unavailable" | "busy" | "name";
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = GreetingCopy;
    export type RequestHeaders = {};
    export type ResponseBody = GreetingsCopyCreateData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.delete`
   * @tags voicemails
   * @name MessagesDelete
   * @summary Delete a mesage
   * @request DELETE:/voicemails/{voicemail_id}/messages/{message_id}
   * @secure
   */
  export namespace MessagesDelete {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessagesDeleteData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.read`
   * @tags voicemails
   * @name MessagesDetail
   * @summary Get a message
   * @request GET:/voicemails/{voicemail_id}/messages/{message_id}
   * @secure
   */
  export namespace MessagesDetail {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessagesDetailData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.update`
   * @tags voicemails
   * @name MessagesUpdate
   * @summary Update a message
   * @request PUT:/voicemails/{voicemail_id}/messages/{message_id}
   * @secure
   */
  export namespace MessagesUpdate {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = VoicemailMessageUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = MessagesUpdateData;
  }

  /**
   * @description **Required ACL:** `calld.voicemails.{voicemail_id}.messages.{message_id}.recording.read`
   * @tags voicemails
   * @name MessagesRecordingList
   * @summary Get a message's recording
   * @request GET:/voicemails/{voicemail_id}/messages/{message_id}/recording
   * @secure
   */
  export namespace MessagesRecordingList {
    export type RequestParams = {
      /** The message's ID */
      messageId: string;
      /** The voicemail's ID */
      voicemailId: number;
    };
    export type RequestQuery = {
      /** Set to 1 to force download by browser */
      download?: string;
      /** The token's ID */
      token?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessagesRecordingListData;
  }
}
