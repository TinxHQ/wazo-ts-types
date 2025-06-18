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



  /** Access feature */
  export interface AccessFeature {
    enabled?: boolean,
  /** The feature to limit the access to */
    feature: "phonebook",
  /** The host or subnet string (e.g. 10.0.0.0/24) */
    host: string,
  /** The access_feature ID */
    id?: number,
}

  /** AccessFeatureItems */
  export interface AccessFeatureItems {
    items?: (AccessFeature)[],
    total: number,
}

  /** Agent */
  export type Agent = (AgentRelationBase & {
  /** Additional information about the agent */
    description?: string,
  /** Language used for the agent menu prompt */
    language?: string,
  /** Numeric password used to log agent. */
    password?: string,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & AgentRelationQueues & AgentRelationUsers & AgentRelationSkills)

  /** AgentItems */
  export interface AgentItems {
    items?: (Agent)[],
    total: number,
}

    export interface AgentRelationBase {
    firstname?: string,
  /** The id of the agent */
    id?: number,
    lastname?: string,
  /** Agent number. Cannot be modified after creation */
    number?: string,
}

    export type AgentRelationQueue = (QueueRelationBase & {
  /** Agent's penalty. A priority used for distributing calls. */
    penalty?: number,

})

    export interface AgentRelationQueues {
    queues?: (AgentRelationQueue)[],
}

    export type AgentRelationSkill = (SkillRelationBase & AgentSkillRelationBase)

    export interface AgentRelationSkills {
    skills?: (AgentRelationSkill)[],
}

    export type AgentRelationUser = (UserRelationBase)

    export interface AgentRelationUsers {
    users?: (AgentRelationUser)[],
}

  /** AgentSkill */
  export type AgentSkill = (AgentSkillRelationBase)

    export interface AgentSkillRelationBase {
  /** Skill's weight. */
    skill_weight?: number,
}

    export type Application = (ApplicationRelationBase & {
  /** Destination where the call entering in the application will be sent */
    destination?: "node",
    destination_options?: ApplicationDestinationNode,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & ApplicationRelationLines)

    export interface ApplicationDestinationNode {
  /** Automatically answer the call when the call enters the destination node */
    answer?: boolean,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
  /** type of the default node */
    type?: "holding",
}

    export interface ApplicationItems {
    items?: (Application)[],
}

    export interface ApplicationRelationBase {
  /** Application name */
    name?: string,
  /** Application UUID */
    uuid?: string,
}

    export interface ApplicationRelationLines {
    lines?: (LineRelationBase)[],
}

    export type AssociateAgentSkillData = any

    export type AssociateConferenceExtensionData = any

    export type AssociateContextContextsData = any

    export type AssociateGroupExtensionData = any

    export type AssociateGroupScheduleData = any

    export type AssociateIncallExtensionData = any

    export type AssociateIncallScheduleData = any

    export type AssociateLineApplicationData = any

    export type AssociateLineDeviceData = any

    export type AssociateLineEndpointCustomData = any

    export type AssociateLineEndpointSccpData = any

    export type AssociateLineEndpointSipData = any

    export type AssociateLineExtensionData = any

    export type AssociateOutcallExtensionData = any

    export type AssociateOutcallScheduleData = any

    export type AssociateOutcallTrunksData = any

    export type AssociateParkingLotExtensionData = any

    export type AssociateQueueExtensionData = any

    export type AssociateQueueScheduleData = any

    export type AssociateTrunkEndpointCustomData = any

    export type AssociateTrunkEndpointIaxData = any

    export type AssociateTrunkEndpointSipData = any

    export type AssociateTrunkRegisterIaxData = any

    export type AssociateUserAgentData = any

    export type AssociateUserFuncKeyTemplateData = any

    export type AssociateUserLineData = any

    export type AssociateUserLinesData = any

    export type AssociateUserScheduleData = any

    export type AssociateUserVoicemailData = any

    export interface AuthUserPost {
    auth?: {
    emails?: ({
    address?: string,
    confirmed?: boolean,
    main?: boolean,

})[],
    purpose?: "user" | "internal" | "external_api",
    username?: string,
    uuid?: string,

},
}

  /** User */
  export type BaseUser = (UserRelationBase & {
  /** Overwrite all passwords set in call permissions associated to the user */
    call_permission_password?: string,
  /**
   * Record all calls made by this user (deprecated). If set, all `call_record_*_enabled` will be affected
   * @default false
   */
    call_record_enabled?: boolean,
  /**
   * Record all external calls received by this user.
   * @default false
   */
    call_record_incoming_external_enabled?: boolean,
  /**
   * Record all internal calls received by this user.
   * @default false
   */
    call_record_incoming_internal_enabled?: boolean,
  /**
   * Record all external calls made by this user
   * @default false
   */
    call_record_outgoing_external_enabled?: boolean,
  /**
   * Record all internal calls received by this user
   * @default false
   */
    call_record_outgoing_internal_enabled?: boolean,
  /**
   * Authorize call transfers
   * @default false
   */
    call_transfer_enabled?: boolean,
  /** Name that appears on the phone when calling. Formatted as 'Firstname Lastname' < number > */
    caller_id?: string,
  /** User country, for localization purposes */
    country?: string,
  /** Additional information about the user */
    description?: string,
  /**
   * Authorize to hangup with DTMF
   * @default false
   */
    dtmf_hangup_enabled?: boolean,
  /** User's email. Used for directories (i.e. by wazo-dird) */
    email?: string,
  /**
   * Enable/Disable the user
   * @default true
   */
    enabled?: boolean,
  /** User ID */
    id?: number,
  /** User language (e.g. "en_US") */
    language?: "de_DE" | "en_US" | "es_ES" | "fr_FR" | "fr_CA" | "it_IT" | "nl_NL",
  /** Phone number for the user’s mobile device */
    mobile_phone_number?: string,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
  /**
   * Allow user to record a call by pressing *3
   * @default false
   */
    online_call_record_enabled?: boolean,
  /** Name that appears on the phone when calling */
    outgoing_caller_id?: "default" | "anonymous" | "'Firstname Lastname' < number >",
  /**
   * Password for connecting to the CTI (deprecated)
   * @minLength 4
   */
    password?: string,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,
  /**
   * Number of seconds a user's phone will ring before falling back
   * @default 30
   */
    ring_seconds?: number,
  /**
   * Number of allowed simultaneous calls on a user's phone
   * @default 5
   */
    simultaneous_calls?: number,
  /**
   * The subscription type of the user (0-10)
   * @min 0
   * @max 10
   */
    subscription_type?: number,
  /**
   * Activate presence sharing in the xivo client
   * @default true
   */
    supervision_enabled?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** User timezone */
    timezone?: string,
  /** A custom field which purpose is left to the client. If the user has no userfield, then this field is an empty string. */
    userfield?: string,
  /** Username for connecting to the CTI (deprecated) */
    username?: string,

})

  /** Voicemail */
  export interface BaseVoicemail {
  /**
   * Ask for password when accessing the voicemail menu
   * @default true
   */
    ask_password?: boolean,
  /** Attach an audio file of the recorded message when sending an email */
    attach_audio?: boolean,
  /** Voicemail context */
    context: string,
  /**
   * Delete messages after reception. 
   * This can only be set along with 'email' and 'attach_audio' configured.
   * @default false
   */
    delete_messages?: boolean,
  /** Email address. Notifications and audio attachments will be sent to this address */
    email?: string,
  /**
   * Voicemail can be used when it is enabled
   * @default true
   */
    enabled?: boolean,
  /** Language used for the voicemail menu prompt */
    language?: "de_DE" | "en_US" | "es_ES" | "fr_FR" | "fr_CA" | "it_IT" | "nl_NL",
  /** Maximum number of messages to store */
    max_messages?: number,
  /** Mailbox number, for example `0001` */
    number: string,
  /**
   * Advanced configuration options. Options are appended at the end of a 
   * voicemail line in the file 'voicemail.conf' used by asterisk.
   * Please consult the asterisk documentation for further details on available
   * parameters. Options must have the following the form:
   * 
   * ```
   * {
   *   "options": [
   *     ["name1", "value1"],
   *     ["name2", "value2"]
   *   ]
   * }
   * ```
   * 
   * The resulting configuration in voicemail.conf will have the following form:
   * 
   * ```
   * 1000 => ,Firstname Lastname,,,name1=value1|name2=value2
   * ```
   */
    options?: (KeyValueOption)[],
  /** Email address. Summarized notifications will be sent to this address */
    pager?: string,
  /** Numeric password used to access the voicemail */
    password?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /**
   * Timezone used for announcing at what time a message was recorded
   * @default "The system default timezone"
   */
    timezone?: string,
}

  /** a blocklisted number */
  export type BlocklistNumber = (UserBlocklistNumber & {
  /**
   * UUID of the tenant to which the blocklisted number belongs
   * @format uuid
   */
    tenant_uuid?: string,
  /** First name of the user to whom the blocklisted number belongs */
    user_firstname?: string,
  /** Last name of the user to whom the blocklisted number belongs */
    user_lastname?: string,
  /**
   * UUID of the user to whom the blocklisted number belongs
   * @format uuid
   */
    user_uuid?: string,

})

    export type BlocklistNumbersListResponse = ({
    items?: (BlocklistNumber)[],

})

  /** CallFilter */
  export type CallFilter = ({
  /** How the caller_id_name will be treated */
    caller_id_mode?: "prepend" | "overwrite" | "append",
  /** Name to display */
    caller_id_name?: string,
  /** Additional information about the call filter */
    description?: string,
  /**
   * Disable or enable the call filter
   * @default true
   */
    enabled?: boolean,
  /** The id of the call filter */
    id?: number,
  /** The name of the call filter */
    name: string,
  /** Call type to apply call filter */
    source: "internal" | "external" | "all",
  /** Determine which will ring. */
    strategy: "all-recipients-then-linear-surrogates" | "all-recipients-then-all-surrogates" | "all-surrogates-then-all-recipients" | "linear-surrogates-then-all-recipients" | "all",
  /** Number of seconds the filter's surrogates will ring before falling back */
    surrogates_timeout?: number,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & CallFilterRecipients & CallFilterSurrogates)

  /** @example {"noanswer_destination":{"type":"user","user_id":1}} */
  export interface CallFilterFallbacks {
  /** The destination to redirect the caller to when there are no answer */
    noanswer_destination?: DestinationType,
}

  /** CallFilterItems */
  export interface CallFilterItems {
    items?: (CallFilter)[],
    total: number,
}

    export type CallFilterRecipientUser = ({
    timeout?: number,

} & UserRelationBase)

    export type CallFilterRecipientUserUuid = ({
    timeout?: number,

} & UserUuid)

    export interface CallFilterRecipientUsers {
    users?: (CallFilterRecipientUser)[],
}

    export interface CallFilterRecipientUsersUuid {
    users?: (CallFilterRecipientUserUuid)[],
}

    export interface CallFilterRecipients {
    recipients?: CallFilterRecipientUsers,
}

    export type CallFilterSurrogateUser = ({
    exten?: string,
    member_id?: number,

} & UserRelationBase)

    export interface CallFilterSurrogateUsers {
    users?: (CallFilterSurrogateUser)[],
}

    export interface CallFilterSurrogates {
    surrogates?: CallFilterSurrogateUsers,
}

    export type CallPermission = (CallPermissionRelationBase & {
  /** Additional information about the call permission */
    description?: string,
  /**
   * Disable or enable the call permission
   * @default true
   */
    enabled?: boolean,
  /** Extensions to apply the call permission */
    extensions?: (string)[],
  /**
   * Determine how the call permission are applied
   * @default "deny"
   */
    mode?: "allow" | "deny",
  /** The password to be able to call extensions */
    password?: string,

})

  /** CallPermissionItems */
  export interface CallPermissionItems {
    items?: (CallPermission)[],
    total: number,
}

    export interface CallPermissionRelationBase {
  /** The id of the call permission */
    id?: number,
  /** The name of the call permission */
    name: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

  /** CallPickup */
  export type CallPickup = ({
  /** Additional information about the call pickup */
    description?: string,
  /**
   * Disable or enable the call pickup
   * @default true
   */
    enabled?: boolean,
  /** The id of the call pickup */
    id?: number,
  /** The name of the call pickup */
    name: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & CallPickupTargets & CallPickupInterceptors)

    export interface CallPickupInterceptorUsers {
    users?: (UserRelationBase)[],
}

    export interface CallPickupInterceptors {
    surrogates?: CallPickupInterceptorUsers,
}

  /** CallPickupItems */
  export interface CallPickupItems {
    items?: (CallPickup)[],
    total: number,
}

    export type CallPickupTargetUser = ({
    timeout?: number,

} & UserRelationBase)

    export interface CallPickupTargetUsers {
    users?: (CallPickupTargetUser)[],
}

    export interface CallPickupTargets {
    recipients?: CallPickupTargetUsers,
}

    export interface ComponentWithStatus {
    status?: StatusValue,
}

  /**
 * ConfBridgeConfiguration
 * This configuration will be in the file 'confbridge.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface ConfBridgeConfiguration {
  /**
   * These options must be unique and unordered. Otherwise, use `ordered_options`. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /** Conference */
  export type Conference = (ConferenceRelationBase & {
  /** Administrator pin to enter in the conference */
    admin_pin?: string,
  /**
   * Record name and announce join/leave
   * @default false
   */
    announce_join_leave?: boolean,
  /**
   * Announce when a participant is alone in conference
   * @default true
   */
    announce_only_user?: boolean,
  /**
   * Announce the number of participants
   * @default false
   */
    announce_user_count?: boolean,
  /** Maximum users allowed in the conference. This exclude admin. */
    max_users?: number,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
  /** Pin to enter in the conference */
    pin?: string,
  /** Name of the subroutine to execute in asterisk before entering the conference */
    preprocess_subroutine?: string,
  /**
   * Play 'beep' notification when join/leave a conference
   * @default false
   */
    quiet_join_leave?: boolean,
  /**
   * Record the conference
   * @default false
   */
    record?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & ConferenceRelationExtensions & ConferenceRelationIncalls)

  /** ConferenceItems */
  export interface ConferenceItems {
    items?: (Conference)[],
    total: number,
}

    export interface ConferenceRelationBase {
    id?: number,
  /** name to identify the conference */
    name?: string,
}

    export interface ConferenceRelationExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export type ConferenceRelationIncall = (IncallRelationBase & IncallRelationExtensions)

    export interface ConferenceRelationIncalls {
    incalls?: (ConferenceRelationIncall)[],
}

  /** Context */
  export type Context = (ContextRelationBase & {
    conference_room_ranges?: (ContextRange)[],
  /** Additional information about the context */
    description?: string,
  /** @default true */
    enabled?: boolean,
    group_ranges?: (ContextRange)[],
    incall_ranges?: (ContextIncallRange)[],
  /** The label of the context */
    label?: string,
    queue_ranges?: (ContextRange)[],
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** @default "internal" */
    type?: "internal" | "incall" | "outcall" | "services" | "others",
    user_ranges?: (ContextRange)[],

} & ContextRelationContexts)

  /** ContextId */
  export interface ContextId {
    id?: number,
}

  /** ContextIncallRange */
  export type ContextIncallRange = (ContextRange & {
  /**
   * The length of the did
   * @default 0
   */
    did_length?: number,

})

  /** ContextItems */
  export interface ContextItems {
    items?: (Context)[],
    total: number,
}

  /** ContextRange */
  export interface ContextRange {
  /** @default "<end>" */
    end?: string,
  /** @default "<start>" */
    start: string,
}

  /**
 * ContextRangeItems
 * @example {"items":[{"end":1006,"start":1006},{"end":1014,"start":1010},{"end":1999,"start":1025}],"total":3}
 */
  export interface ContextRangeItems {
    items?: (ContextRange)[],
    total: number,
}

    export interface ContextRelation {
  /** The ID of the context */
    id: number,
}

    export interface ContextRelationBase {
  /** The id of the context */
    id?: number,
  /** The name used by Asterisk */
    name?: string,
  /** The UUID of the context */
    uuid?: string,
}

    export type ContextRelationContext = ContextRelationBase

    export interface ContextRelationContexts {
    contexts?: (ContextRelationContext)[],
}

  /** ContextsId */
  export interface ContextsId {
    contexts?: (ContextId)[],
}

    export type CreateAccessFeatureData = AccessFeature

    export type CreateAgentData = Agent

    export type CreateApplicationData = Application

    export type CreateCallfilterData = CallFilter

    export type CreateCallpermissionData = CallPermission

    export type CreateCallpickupData = CallPickup

    export type CreateConferenceData = Conference

    export type CreateContextData = Context

    export type CreateDeviceData = Device

    export type CreateEndpointCustomData = EndpointCustom

    export type CreateEndpointIaxData = EndpointIAX

    export type CreateEndpointSccpData = EndpointSccp

    export type CreateEndpointSipData = EndpointSIP

    export type CreateEndpointSipTemplateData = EndpointSIP

    export type CreateExtensionData = Extension

    export type CreateExternalAppData = ExternalApp

    export type CreateFuncKeyTemplateData = FuncKeyTemplate

    export type CreateGroupData = Group

    export type CreateGuestMeetingAuthorizationData = MeetingAuthorization

    export type CreateHttpIngressData = HTTPIngress

    export type CreateIncallData = Incall

    export type CreateIvrData = Ivr

    export type CreateLineData = LineView

    export type CreateLineExtensionData = Extension

    export type CreateLineExtensionError = (NotFoundError)

    export type CreateMeetingData = Meeting

    export type CreateMohData = Moh

    export type CreateOutcallData = Outcall

    export type CreatePagingData = Paging

    export type CreateParkingLotData = ParkingLot

    export type CreatePhoneNumberData = PhoneNumber

    export type CreatePhoneNumbersRangeData = PhoneNumberRangeResponse

    export type CreateQueueData = Queue

    export type CreateRegisterIaxData = RegisterIAX

    export type CreateRegistrarData = Registrar

    export type CreateScheduleData = Schedule

    export type CreateSipTransportData = SIPTransport

    export type CreateSkillData = Skill

    export type CreateSkillRuleData = SkillRule

    export type CreateSoundsData = Sound

    export type CreateTrunkData = Trunk

    export type CreateUserData = UserPostResponse

    export type CreateUserExternalAppData = UserExternalApp

    export type CreateUserMeetingData = Meeting

    export type CreateUserVoicemailData = Voicemail

    export type CreateUserVoicemailError = (NotFoundError)

    export type CreateUsersMeBlocklistNumberData = UserBlocklistNumber

    export type CreateVoicemailData = Voicemail

  /** DHCP */
  export interface DHCP {
  /** Is the DHCP service enabled? */
    active?: boolean,
  /** A comma separated list of network interface that the DHCP server listens on */
    network_interfaces?: (string)[],
  /** The last IP address that can be allocated by DHCP */
    pool_end?: string,
  /** The first IP address that can be allocated by DHCP */
    pool_start?: string,
}

    export interface DeleteSipTransportParams {
  /**
   * The UUID of the transport that should be associated to orphaned
   * SIP configurations
   */
    fallback?: string,
  /** The UUID of the transport */
    transportUuid: string,
}

    export interface DeleteSoundsFilesParams {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,
    soundCategory: string,
    soundFilename: string,
}

    export interface DeleteUserParams {
  /** Indicates if the resources related to the user must be deleted too. */
    recursive?: boolean,
  /** the user's ID or UUID */
    userId: string,
}

  /** DestinationApplication */
  export interface DestinationApplication {
  /** MUST be 'application' */
    type: string,
}

  /** DestinationApplicationApplication */
  export interface DestinationApplicationApplication {
    callback_disa?: DestinationApplicationCallbackDISA,
    custom?: DestinationApplicationCustom,
    directory?: DestinationApplicationDirectory,
    disa?: DestinationApplicationDISA,
    fax_to_mail?: DestinationApplicationFaxToMail,
    voicemail?: DestinationApplicationVoicemail,
}

  /** DestinationApplicationCallbackDISA */
  export type DestinationApplicationCallbackDISA = (DestinationApplication & {
  /** MUST be 'callback_disa' */
    application: string,
  /** The context of the application */
    context: number,
  /** the pin of the application */
    pin?: string,

})

  /** DestinationApplicationCustom */
  export type DestinationApplicationCustom = (DestinationApplication & {
  /** MUST be 'custom' */
    application: string,
  /** The UUID of the application. */
    application_uuid: string,

})

  /** DestinationApplicationDISA */
  export type DestinationApplicationDISA = (DestinationApplication & {
  /** MUST be 'disa' */
    application: string,
  /** The context of the application */
    context: number,
  /** the pin of the application */
    pin?: string,

})

  /** DestinationApplicationDirectory */
  export type DestinationApplicationDirectory = (DestinationApplication & {
  /** MUST be 'directory' */
    application: string,
  /** The context of the application */
    context: number,

})

  /** DestinationApplicationFaxToMail */
  export type DestinationApplicationFaxToMail = (DestinationApplication & {
  /** MUST be 'fax_to_mail' */
    application: string,
  /** The email of the application */
    email: string,

})

  /** DestinationApplicationVoicemail */
  export type DestinationApplicationVoicemail = (DestinationApplication & {
  /** MUST be 'voicemail' */
    application: string,
  /** The context of the application */
    context: number,

})

  /** DestinationConference */
  export interface DestinationConference {
  /** The id of the conference */
    conference_id: number,
  /** MUST be 'conference' */
    type: string,
}

  /** DestinationCustom */
  export interface DestinationCustom {
  /** The command to execute */
    command: string,
  /** MUST be 'custom' */
    type: string,
}

  /** DestinationExtension */
  export interface DestinationExtension {
  /** Context of the extension */
    context: string,
    exten: string,
  /** MUST be 'extension' */
    type: string,
}

  /** DestinationGroup */
  export interface DestinationGroup {
  /** The id of the group */
    group_id: number,
  /** @format float */
    ring_time?: number,
  /** MUST be 'group' */
    type: string,
}

  /** DestinationHangup */
  export interface DestinationHangup {
  /** MUST be 'hangup' */
    type: string,
}

  /** DestinationHangupBusy */
  export type DestinationHangupBusy = (DestinationHangup & {
  /** MUST be 'busy' */
    cause: string,
  /** The timeout of the hangup */
    timeout?: number,

})

  /** DestinationHangupCause */
  export interface DestinationHangupCause {
    busy?: DestinationHangupBusy,
    congestion?: DestinationHangupCongestion,
    normal?: DestinationHangupNormal,
}

  /** DestinationHangupCongestion */
  export type DestinationHangupCongestion = (DestinationHangup & {
  /** MUST be 'congestion' */
    cause: string,
  /** The timeout of the hangup */
    timeout?: number,

})

  /** DestinationHangupNormal */
  export type DestinationHangupNormal = (DestinationHangup & {
  /** MUST be 'normal' */
    cause: string,

})

  /** DestinationIVR */
  export interface DestinationIVR {
  /** The id of the IVR */
    ivr_id: number,
  /** MUST be 'ivr' */
    type: string,
}

  /** DestinationNone */
  export interface DestinationNone {
  /** MUST be 'none' */
    type: string,
}

  /** DestinationOutcall */
  export interface DestinationOutcall {
    exten: string,
  /** The id of the outcall */
    outcall_id: number,
  /** MUST be 'outcall' */
    type: string,
}

  /** DestinationQueue */
  export interface DestinationQueue {
  /** The id of the queue */
    queue_id: number,
  /** @format float */
    ring_time?: number,
  /** The id of the skill rule */
    skill_rule_id?: number,
  /** key-value where key represents the variable of the skill rule and value represents a value */
    skill_rule_variables?: object,
  /** MUST be 'queue' */
    type: string,
}

  /** DestinationSound */
  export interface DestinationSound {
  /** The filename of the sound. The file MUST be imported by to webi in the playback directory. The extension of file SHOULD be not present. */
    filename: string,
  /** Play this sound without answering the call */
    no_answer?: boolean,
  /** Do not play this sound if the call is not answered */
    skip?: boolean,
  /** MUST be 'sound' */
    type: string,
}

  /** DestinationSwitchboard */
  export interface DestinationSwitchboard {
  /** The UUID of the switchboard. */
    switchboard_uuid: string,
  /** MUST be 'switchboard' */
    type: string,
}

  /** DestinationType */
  export interface DestinationType {
    application?: DestinationApplicationApplication,
    conference?: DestinationConference,
    custom?: DestinationCustom,
    extension?: DestinationExtension,
    group?: DestinationGroup,
    hangup?: DestinationHangupCause,
    ivr?: DestinationIVR,
    none?: DestinationNone,
    outcall?: DestinationOutcall,
    queue?: DestinationQueue,
    sound?: DestinationSound,
    switchboard?: DestinationSwitchboard,
    user?: DestinationUser,
    voicemail?: DestinationVoicemail,
}

  /** DestinationUser */
  export interface DestinationUser {
  /** The UUID of the music on hold to use instead of a ringback tone. */
    moh_uuid?: string,
  /** @format float */
    ring_time?: number,
  /** MUST be 'user' */
    type: string,
  /** The id of the user */
    user_id: number,
}

  /** DestinationVoicemail */
  export interface DestinationVoicemail {
  /** Play the specified greeting */
    greeting?: "busy" | "unavailable",
  /** Skip the playback of instructions for leaving a message */
    skip_instructions?: boolean,
  /** MUST be 'voicemail' */
    type: string,
  /** The id of the voicemail */
    voicemail_id: number,
}

  /** Device */
  export interface Device {
    description?: string,
  /** Device ID */
    id?: string,
  /** IP address (10.0.0.0) */
    ip?: string,
  /** Indicates if the device is a new device, ie in the master tenant */
    is_new?: boolean,
  /** MAC address (aa:bb:cc:dd:ee:ff) */
    mac?: string,
  /** Device model */
    model?: string,
  /** List of standard keys */
    options?: DeviceOptions,
  /** Provisioning plugin to be used by device */
    plugin?: string,
  /** Serial number */
    sn?: string,
  /**
   * Device status. autoprov: Device can be provisionned using a provisioning code, configured: Device is configured and ready to be used, not_configured : Device has not been completely configured
   * @default "not_configured"
   */
    status?: "autoprov" | "configured" | "not_configured",
  /** ID of the device template. All device using a device template will have a certain number of common parameters preconfigured for the device */
    template_id?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** Vendor name */
    vendor?: string,
  /** Firmware version */
    version?: string,
}

  /** DeviceItems */
  export interface DeviceItems {
    items?: (Device)[],
    total: number,
}

  /**
 * DeviceOptions
 * List of standard keys
 */
  export interface DeviceOptions {
  /** Indicate if this device is a switchboard */
    switchboard?: boolean,
}

    export type DissociateAgentQueueData = any

    export type DissociateAgentSkillData = any

    export type DissociateConferenceExtensionData = any

    export type DissociateGroupCallpermissionData = any

    export type DissociateGroupExtensionData = any

    export type DissociateGroupScheduleData = any

    export type DissociateIncallExtensionData = any

    export type DissociateIncallScheduleData = any

    export type DissociateLineApplicationData = any

    export type DissociateLineDeviceData = any

    export type DissociateLineEndpointCustomData = any

    export type DissociateLineEndpointSccpData = any

    export type DissociateLineEndpointSipData = any

    export type DissociateLineExtensionData = any

    export type DissociateOutcallCallpermissionData = any

    export type DissociateOutcallExtensionData = any

    export type DissociateOutcallScheduleData = any

    export type DissociateParkingLotExtensionData = any

    export type DissociateQueueExtensionData = any

    export type DissociateQueueScheduleData = any

    export type DissociateTrunkEndpointCustomData = any

    export type DissociateTrunkEndpointIaxData = any

    export type DissociateTrunkEndpointSipData = any

    export type DissociateTrunkRegisterIaxData = any

    export type DissociateUserAgentData = any

    export type DissociateUserCallpermissionData = any

    export type DissociateUserFuncKeyTemplateData = any

    export type DissociateUserLineData = any

    export type DissociateUserQueueData = any

    export type DissociateUserScheduleData = any

    export type DissociateUserVoicemailData = any

  /** E-mail configuration */
  export interface EmailConfig {
  /** Rules for local address to external address rewriting */
    address_rewriting_rules?: (RewritingRule)[],
  /** The domain name of the current mailing server, i.e. `example.com` */
    domain_name?: string,
  /**
   * Fallback relay server hostname or address. It is possible to specify the port, for example
   * `domain.com:587`
   */
    fallback_smtp_host?: string,
  /** The e-mail address or domain name to use in the `From` header for local services */
    from?: string,
  /**
   * E-mail relay server hostname or address. It is possible to specify the port, for example
   * `domain.com:587`
   */
    smtp_host?: string,
}

  /** Custom Endpoint */
  export type EndpointCustom = (EndpointCustomRelationBase & {
  /**
   * Endpoint can be used when it is enabled
   * @default true
   */
    enabled?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & EndpointRelationTrunk & EndpointRelationLine)

  /** Custom Endpoints */
  export interface EndpointCustomItems {
    items?: (EndpointCustom)[],
    total?: number,
}

    export interface EndpointCustomRelationBase {
  /** Custom Endpoint ID */
    id?: number,
  /** Asterisk interface to use. (e.g. 'dahdi/i1') */
    interface?: string,
}

  /** IAX Endpoint */
  export type EndpointIAX = (EndpointIAXRelationBase & {
  /**
   * Hosts that are allowed to use this IAX account
   * @default "dynamic"
   */
    host?: string,
  /**
   * Advanced configuration: options. Options are appended at the end of a IAX account in the file 'iax.conf' used by asterisk. Please consult the asterisk documentation for further details on available parameters. Because of database limitations, the following options can only be configured once:
   * 
   * * accountcode
   * * adsi
   * * allow
   * * amaflags
   * * auth
   * * callerid
   * * category
   * * cid_number
   * * codecpriority
   * * commented
   * * context
   * * dbsecret
   * * defaultip
   * * deny
   * * encryption
   * * forceencryption
   * * forcejitterbuffer
   * * fullname
   * * immediate
   * * inkeys
   * * jitterbuffer
   * * keyrotate
   * * language
   * * mailbox
   * * mask
   * * maxauthreq
   * * mohinterpret
   * * mohsuggest
   * * outkey
   * * parkinglot
   * * peercontext
   * * permit
   * * port
   * * protocol
   * * qualify
   * * qualifyfreqnoto
   * * qualifyfreqok
   * * qualifysmoothing
   * * regexten
   * * requirecalltoken
   * * secret
   * * sendani
   * * setvar
   * * sourceaddress
   * * timezone
   * * transfer
   * * trunk
   * * username
   * 
   * Any other options may be repeated as many times as needed. Options must have the following form:
   * ```
   * {
   *   "options": [
   *      ["name1", "value1"],
   *      ["name2", "value2"]
   *   ]
   * }
   * ```
   * 
   * The resulting configuration in iax.conf will have the following form:
   * ```
   * [iaxusername]
   * context=default
   * secret=iaxsecret
   * name1=value1
   * name2=value2
   * ```
   * @default []
   */
    options?: (KeyValueOption)[],
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /**
   * Type of IAX account
   * @default "friend"
   */
    type?: "friend" | "peer" | "user",

} & EndpointRelationTrunk & EndpointRelationLine)

  /** IAX Endpoints */
  export interface EndpointIAXItems {
    items?: (EndpointIAX)[],
    total?: number,
}

    export interface EndpointIAXRelationBase {
  /** IAX Endpoint ID */
    id?: number,
  /**
   * IAX name
   * @default "autogenerated"
   */
    name?: string,
}

    export interface EndpointRelationLine {
    line?: (LineRelationBase)[],
}

    export interface EndpointRelationTrunk {
    trunk?: TrunkRelationBase,
}

  /** SIP Endpoint */
  export interface EndpointSIP {
  /** A list of PJSIP AOR section options for this endpoint */
    aor_section_options?: (SIPAORSectionOptions)[],
  /** The ID of the Asterisk onto which this configuration applies. */
    asterisk_id?: string,
  /** A list of PJSIP auth section options for this endpoint */
    auth_section_options?: (SIPAuthSectionOptions)[],
  /** A list of PJSIP endpoint section options for this endpoint */
    endpoint_section_options?: (SIPEndpointSectionOptions)[],
  /** A list of PJSIP identify section options for this endpoint */
    identify_section_options?: (SIPIdentifySectionOptions)[],
  /** The human readable name for this configuration */
    label?: string,
  /** The name of the PJSIP entity, auto-generated if missing */
    name?: string,
  /** A list of PJSIP auth section options for this endpoint */
    outbound_auth_section_options?: (SIPAuthSectionOptions)[],
  /** A list of PJSIP auth section options for this endpoint */
    registration_outbound_auth_section_options?: (SIPAuthSectionOptions)[],
  /** A list of PJSIP registration section options for this endpoint */
    registration_section_options?: (SIPRegistrationSectionOptions)[],
  /**
   * A list of templates this configuration will inherit from.
   * 
   * The inheritance only applies to option sections. Not to the name, label and other fields.
   * For a given list of templates [A, B, C] A will be applied over B. C will be applied over (A,B) etc.
   */
    templates?: (EndpointSIPTemplatesRelation)[],
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** The transport used by this endpoint */
    transport?: SIPTransportRelation,
  /** The UUID of this resource */
    uuid?: string,
}

  /** SIP Endpoints */
  export interface EndpointSIPItems {
    items?: (EndpointSIP)[],
    total?: number,
}

    export interface EndpointSIPRelation {
  /** The UUID of this resource */
    uuid: string,
}

    export interface EndpointSIPTemplatesRelation {
  /** The label of this resource */
    label?: string,
  /** The UUID of this resource */
    uuid: string,
}

  /** SCCP Endpoint */
  export type EndpointSccp = (EndpointSccpRelationBase & {
  /**
   * Advanced configuration options. Options are appended at the end of a 
   * SCCP account in the file 'sccp.conf' used by asterisk.
   * Please consult the asterisk documentation for further details on available
   * parameters. Because of database limitations, only the following options are allowed:
   * 
   *  * cid_name
   *  * cid_num
   *  * allow
   *  * disallow
   *  
   * Options must have the following the form:
   * 
   * ```
   * {
   *   "options": [
   *     ["name1", "value1"],
   *     ["name2", "value2"]
   *   ]
   * }
   * ```
   * 
   * The resulting configuration in sip.conf will have the following form:
   * 
   * ```
   * [1000]
   * name1=value1
   * name2=value2
   * ```
   */
    options?: (KeyValueOption)[],
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & EndpointRelationTrunk & EndpointRelationLine)

  /** SCCP Endpoints */
  export interface EndpointSccpItems {
    items?: (EndpointSccp)[],
    total?: number,
}

    export interface EndpointSccpRelationBase {
  /** SCCP Endpoint ID */
    id?: number,
}

    export interface EndpointSipRelationBase {
  /** A list of PJSIP auth section options for this endpoint. Only `username` is supported */
    auth_section_options?: (SIPAuthSectionOptions)[],
  /** The human readable name for this configuration */
    label?: string,
  /** The name of the PJSIP entity, auto-generated if missing */
    name?: string,
  /** The UUID of this resource */
    uuid?: string,
}

    export type Error = (string)[]

    export type ExportUsersCsvData = UserExport

  /** Extension */
  export type Extension = (ExtensionRelationBase & {
  /** If True the extension is disabled. Deprecated, use enabled instead */
    commented?: boolean,
  /** If False the extension is disabled. */
    enabled?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & ExtensionRelationConference & ExtensionRelationGroup & ExtensionRelationIncall & ExtensionRelationLines & ExtensionRelationOutcall & ExtensionRelationParkingLot & ExtensionRelationQueue)

  /** ExtensionFeature */
  export interface ExtensionFeature {
    context?: string,
  /** If False the extension feature is disabled */
    enabled?: boolean,
    exten: string,
  /** The feature of the extension */
    feature?: string,
  /** Extension UUID */
    uuid?: string,
}

  /** ExtensionFeatureItems */
  export interface ExtensionFeatureItems {
    items?: (ExtensionFeature)[],
    total: number,
}

  /** ExtensionItems */
  export interface ExtensionItems {
    items?: (Extension)[],
    total: number,
}

    export interface ExtensionRelationBase {
    context?: string,
    exten?: string,
  /** Extension ID */
    id?: number,
}

    export interface ExtensionRelationConference {
    conference?: ConferenceRelationBase,
}

    export interface ExtensionRelationGroup {
    group?: GroupRelationBase,
}

    export interface ExtensionRelationIncall {
    incall?: IncallRelationBase,
}

    export interface ExtensionRelationLines {
    lines?: (LineRelationBase)[],
}

    export interface ExtensionRelationOutcall {
    outcall?: OutcallRelationBase,
}

    export interface ExtensionRelationParkingLot {
    parking_lot?: ParkingLotRelationBase,
}

    export interface ExtensionRelationQueue {
    queue?: QueueRelationBase,
}

  /** ExternalApp */
  export interface ExternalApp {
  /** Arbitrary settings needed by an external app */
    configuration?: object,
  /** The label of the external app */
    label?: string,
  /** The name to identify the external app */
    name?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

  /** ExternalAppItems */
  export interface ExternalAppItems {
    items?: (ExternalApp)[],
    total: number,
}

  /**
 * FeaturesConfiguration
 * This configuration will be in the file 'features.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface FeaturesConfiguration {
  /**
   * These options must be unique and unordered. Otherwise, use `ordered_options`. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /**
 * FuncKey
 * Further documentation at https://wazo-platform.org/uc-doc/api_sdk/rest_api/confd/func_keys
 */
  export interface FuncKey {
    blf?: boolean,
    destination?: object,
    label?: string,
}

  /** FuncKeyDestination */
  export interface FuncKeyDestination {
    parameters?: (FuncKeyDestinationParameter)[],
    type?: string,
}

  /**
 * FuncKeyDestinationItems
 * Description of func key destinations and their parameters
 */
  export type FuncKeyDestinationItems = (FuncKeyDestination)[]

  /** FuncKeyDestinationParameter */
  export interface FuncKeyDestinationParameter {
  /** URL towards a collection of entities representing possible values as a destination */
    collection?: string,
  /** Parameter name */
    name?: string,
  /** Array of values to choose from for this parameter */
    values?: (string)[],
}

  /**
 * FuncKeyTemplate
 * Further documentation at https://wazo-platform.org/uc-doc/administration/users/csv_import
 */
  export interface FuncKeyTemplate {
  /** The ID of the funckey template */
    id?: number,
    keys?: object,
    name?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

    export type GetAccessFeatureData = AccessFeature

    export type GetAgentData = Agent

    export type GetApplicationData = Application

    export type GetBlocklistNumberData = BlocklistNumber

    export type GetCallFilterFallbackData = CallFilterFallbacks

    export type GetCallfilterData = CallFilter

    export type GetCallpermissionData = CallPermission

    export type GetCallpickupData = CallPickup

    export type GetConferenceData = Conference

    export type GetConfigurationData = LiveReload

    export type GetContextData = Context

    export type GetDeviceData = Device

    export type GetDeviceLineAssociationData = LineDeviceItems

    export type GetDhcpData = DHCP

    export type GetEmailsConfigData = EmailConfig

    export type GetEndpointCustomData = EndpointCustom

    export type GetEndpointIaxData = EndpointIAX

    export type GetEndpointSccpData = EndpointSccp

    export type GetEndpointSipData = EndpointSIP

    export interface GetEndpointSipParams {
    sipUuid: string,
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",
}

    export type GetEndpointSipTemplateData = EndpointSIP

    export type GetExtensionData = Extension

    export type GetExtensionFeatureData = ExtensionFeature

    export type GetExternalAppData = ExternalApp

    export type GetFuncKeyData = FuncKey

    export type GetFuncKeyTemplateData = FuncKeyTemplate

    export type GetGroupData = Group

    export type GetGroupFallbackData = GroupFallbacks

    export type GetGuestMeetingAuthorizationData = MeetingAuthorization

    export type GetGuestMeetingData = Meeting

    export type GetHaData = HA

    export type GetHttpIngressData = HTTPIngress

    export type GetIncallData = Incall

    export type GetInfosData = Info

    export type GetIvrData = Ivr

    export type GetLineData = LineView

    export type GetLineDeviceData = LineDevice

    export type GetLineDeviceError = (Error)

    export type GetLocalizationData = Localization

    export type GetMeetingData = Meeting

    export type GetMohData = Moh

    export type GetMohFilesData = any

    export type GetOutcallData = Outcall

    export type GetPagingData = Paging

    export type GetParkingLotData = ParkingLot

    export type GetPhoneNumberData = PhoneNumber

    export type GetPhoneNumberMainData = PhoneNumber

    export type GetPhoneNumberMainError = (NotFoundError)

    export type GetProvisioningNetworkingData = ProvisioningNetworking

    export type GetQueueData = Queue

    export type GetQueueFallbackData = QueueFallbacks

    export type GetRecordingsAnnouncementsData = RecordingsAnnouncements

    export type GetRegisterIaxData = RegisterIAX

    export type GetRegistrarData = Registrar

    export type GetRegistrarsData = RegistrarItems

    export interface GetRegistrarsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type GetScheduleData = Schedule

    export type GetSipTransportData = SIPTransport

    export type GetSkillData = Skill

    export type GetSkillRuleData = SkillRule

    export type GetSoundsData = Sound

    export type GetSoundsFilesData = any

    export interface GetSoundsFilesParams {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,
    soundCategory: string,
    soundFilename: string,
}

    export type GetSwitchboardFallbackData = SwitchboardFallbacks

    export type GetTenantData = Tenant

    export type GetTrunkData = Trunk

    export type GetUserData = User

    export type GetUserExternalAppData = UserExternalApp

    export interface GetUserExternalAppParams {
  /** External App's name */
    appName: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
  /**
   * Different view of the external app endpoint
   * 
   * The `default` view, when the argument is omitted, is to return the user value for this
   * external app
   * 
   * The `fallback` view return the user value for this external app, but if not found, will
   * fallback to the tenant configured value
   * 
   * **WARNING**: Using fallback view on list will disabled all pagination and search features
   */
    view?: "fallback",
}

    export type GetUserFallbackData = UserFallbacks

    export type GetUserForwardData = UserForward

    export type GetUserFuncKeyData = FuncKey

    export type GetUserLineAssociatedEndpointsSipData = EndpointSIP

    export interface GetUserLineAssociatedEndpointsSipParams {
    lineId: number,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",
}

    export type GetUserLineMainAssociatedEndpointsSipData = EndpointSIP

    export interface GetUserLineMainAssociatedEndpointsSipParams {
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",
}

    export type GetUserMeetingAuthorizationData = MeetingAuthorization

    export type GetUserMeetingData = Meeting

    export type GetUserServiceData = UserService

    export type GetUserServicesData = UserServices

    export type GetUserVoicemailData = VoicemailItems

    export type GetUsersMeBlocklistNumberData = UserBlocklistNumber

    export type GetUsersSubscriptionsData = UserSubscriptionItems

    export type GetVoicemailData = Voicemail

    export type GetWizardDiscoverData = WizardDiscover

    export type GetWizardStatusData = WizardConfigured

  /** Group */
  export type Group = (GroupRelationBase & {
  /** How the caller_id_name will be treated */
    caller_id_mode?: "prepend" | "overwrite" | "append",
  /** Name to display */
    caller_id_name?: string,
  /**
   * Enable/Disable DTMF recording for members of this group receiving a call from this group
   * @default false
   */
    dtmf_record_toggle?: boolean,
  /**
   * Enable/Disable the group
   * @default true
   */
    enabled?: boolean,
  /**
   * Ignore forward when the group is in use
   * @default false
   */
    ignore_forward?: boolean,
  /**
   * Mark all calls as "answered elsewhere" when cancelled
   * @default false
   */
    mark_answered_elsewhere?: boolean,
  /**
   * Number of maximum calls waiting in the group. 0 means unlimited.
   * @default 0
   */
    max_calls?: number,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
    preprocess_subroutine?: string,
  /**
   * Number of seconds before the member of group will ring again
   * @default 5
   */
    retry_delay?: number,
  /**
   * Notify the member even if it already in communication
   * @default true
   */
    ring_in_use?: boolean,
  /** @default "all" */
    ring_strategy?: "all" | "random" | "least_recent" | "linear" | "fewest_calls" | "memorized_round_robin" | "weight_random",
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** Number of seconds the group will ring before falling back */
    timeout?: number,
  /**
   * Number of seconds the member of group will ring
   * @default 15
   */
    user_timeout?: number,

} & GroupRelationExtensions & GroupRelationFallbacks & GroupRelationIncalls & GroupRelationMembers & GroupRelationSchedules & GroupRelationCallPermissions)

  /** @example {"congestion_destination":{"type":"user","user_id":2},"noanswer_destination":{"type":"user","user_id":1}} */
  export interface GroupFallbacks {
  /** The destination to redirect the caller to when the group has exceeded max_calls */
    congestion_destination?: DestinationType,
  /** The destination to redirect the caller to when there are no answer */
    noanswer_destination?: DestinationType,
}

    export interface GroupID {
    id?: number,
}

  /** GroupItems */
  export interface GroupItems {
    items?: (Group)[],
    total: number,
}

    export interface GroupMemberExtension {
    context?: string,
    exten?: string,
  /** priority of extension in the group. Only used for linear ring strategy */
    priority?: number,
}

    export interface GroupMemberExtensions {
    extensions: (GroupMemberExtension)[],
}

    export interface GroupMemberUser {
  /** priority of user in the group. Only used for linear ring strategy */
    priority?: number,
    uuid: string,
}

    export interface GroupMemberUsers {
    users: (GroupMemberUser)[],
}

    export interface GroupRelationBase {
  /** The id of the group */
    id?: number,
  /** The name of the group */
    name?: string,
  /** Group UUID. This ID is globally unique across multiple Wazo instances */
    uuid?: string,
}

    export interface GroupRelationCallPermissions {
    call_permissions?: (CallPermissionRelationBase)[],
}

    export interface GroupRelationExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export interface GroupRelationFallbacks {
    fallbacks?: GroupFallbacks,
}

    export type GroupRelationIncall = (IncallRelationBase & IncallRelationExtensions)

    export interface GroupRelationIncalls {
    incalls?: (GroupRelationIncall)[],
}

    export interface GroupRelationMemberUsers {
    users?: (UserRelationBase)[],
}

    export interface GroupRelationMembers {
    members?: GroupRelationMemberUsers,
}

    export interface GroupRelationSchedules {
    schedules?: (ScheduleRelationBase)[],
}

    export interface GroupsID {
    groups?: (GroupID)[],
}

  /** HA */
  export interface HA {
  /** The role of this server in a HA cluster. */
    node_type: "disabled" | "master" | "slave",
  /** The remote IP address of the other machine in the HA cluster. Must be an IP address, a hostname is invalid. */
    remote_address?: string,
}

  /**
 * HEPConfiguration
 * This configuration will be in the file 'hep.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 * @example {"options":{"enabled":"yes"}}
 */
  export interface HEPConfiguration {
  /**
   * These options must be unique and unordered. Otherwise, use `ordered_options`. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

    export type HTTPIngress = (HTTPIngressRequest & {
    uuid?: string,

})

    export interface HTTPIngressItems {
    items?: (HTTPIngress)[],
}

    export interface HTTPIngressRequest {
  /** The public URI to contact this stack HTTP API */
    uri: string,
}

    export type HeadUserData = any

  /** IAXCallNumberLimits */
  export interface IAXCallNumberLimits {
  /** IPv4 address of the destination */
    ip_address: string,
  /** Maximum call for the ip_address destination */
    limit: string,
  /** Netmask of the IP address (e.g. 255.255.255.255) */
    netmask: string,
}

  /** IAXCallNumberLimitss */
  export interface IAXCallNumberLimitss {
  /**
   * IAX callnumberlimits configuration. This configuration will be in the file 'iax.conf' used by asterisk.
   * Please consult the asterisk documentation for further details on available parameters.
   */
    items?: (IAXCallNumberLimits)[],
}

  /**
 * IAXGeneral
 * IAX general configuration. This configuration will be in the file 'iax.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface IAXGeneral {
  /**
   * General IAX options. These options must be unique and unordered. Otherwise, use `ordered_options`. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
  /**
   * Any options may be repeated as many times and ordered as needed. Ordered options must have the following form:
   * 
   * ```
   * {
   *   "ordered_options": [
   *     ["name1", "value1"],
   *     ["name2", "value2"]
   *   ]
   * }
   * ```
   * 
   * The resulting configuration in iax.conf will have the following form:
   * 
   * ```
   * [general]
   * name1=value1
   * name2=value2
   * ```
   */
    ordered_options?: (KeyValueOption)[],
}

    export type ImportUsersCsvData = UserImport

    export type ImportUsersCsvError = (UserImportError)

    export type ImportUsersCsvPayload = string

  /**
 * Incall
 * @example {"caller_id_mode":"prepend","caller_id_name":"incall_","description":"My incall","destination":{"ring_time":10.5,"type":"user","user_id":2},"id":1,"preprocess_subroutine":"subroutine"}
 */
  export type Incall = (IncallRelationBase & {
  /** How the caller_id_name will be treated */
    caller_id_mode?: "prepend" | "overwrite" | "append",
  /** Name to display when calling */
    caller_id_name?: string,
  /** Additional information about the incoming call */
    description?: string,
  /** The destination where the incoming call will be redirected */
    destination?: DestinationType,
  /** The name of the sound file to be played before redirecting the caller to the destination */
    greeting_sound?: string,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & IncallRelationExtensions & IncallRelationSchedules)

  /** IncallItems */
  export interface IncallItems {
    items?: (Incall)[],
    total: number,
}

  /** IncallRelation */
  export interface IncallRelationBase {
  /** The id of the incoming call */
    id?: number,
}

    export interface IncallRelationExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export interface IncallRelationSchedules {
    schedules?: (ScheduleRelationBase)[],
}

  /** Info */
  export interface Info {
  /** UUID of the Wazo server */
    uuid?: string,
  /** Version of the Wazo server */
    wazo_version?: string,
}

  /**
 * IVR
 * @example {"abort_destination":{"group_id":1,"type":"group"},"choices":[{"destination":{"type":"user","user_id":2},"exten":"1"},{"destination":{"group_id":1,"type":"group"},"exten":"0"}],"description":"My IVR","greeting_sound":"/var/lib/wazo/sounds/playback/ivr1-greeting","menu_sound":"/var/lib/wazo/sounds/playback/ivr1-menu","name":"ivr1"}
 */
  export type Ivr = ({
  /** The destination to redirect the caller to when the maximum number of tries is reached. If not set, the call will be hanged up after playing the abort sound (if set) */
    abort_destination?: DestinationType,
  /** The sound played when the caller reach the maximum number of tries. Not used if an abort destination is set */
    abort_sound?: string,
  /** The menu's choices */
    choices?: (IvrChoice)[],
  /** Additional information about the IVR */
    description?: string,
  /** The sound played to greet the caller */
    greeting_sound?: string,
  /** The id of the IVR */
    id?: number,
  /** The destination to redirect the caller to when he choose an invalid option. If not set, the menu will be replayed */
    invalid_destination?: DestinationType,
  /** The sound played when the caller choose an invalid option. Not used if an invalid destination is set */
    invalid_sound?: string,
  /**
   * The maximum number of tries before aborting the call. Both a timeout and an invalid choice counts toward the number of tries
   * @default 3
   */
    max_tries?: number,
  /** The sound played to prompt the caller for input */
    menu_sound?: string,
  /** The name of the IVR */
    name?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /**
   * Number of seconds to wait after the menu sound is played before either replaying the menu, redirecting the call to the timeout destination (if set) or aborting the call (if the maximum number of tries has been reached)
   * @default 5
   */
    timeout?: number,
  /** The destination to redirect the caller to on timeout. If not set, the menu will be replayed */
    timeout_destination?: DestinationType,

} & IvrRelationIncalls)

  /** IvrChoice */
  export interface IvrChoice {
  /** The destination to redirect the caller to when this choice is selected */
    destination: DestinationType,
  /** The extension the caller has to dial to select this choice. Can be an extension pattern */
    exten: string,
}

  /** IvrItems */
  export interface IvrItems {
    items?: (Ivr)[],
    total: number,
}

    export type IvrRelationIncall = (IncallRelationBase & IncallRelationExtensions)

    export interface IvrRelationIncalls {
    incalls?: (IvrRelationIncall)[],
}

  /**
 * Key Value
 * Options must have the following form:
 * ```
 * {
 *   "options": [
 *       ["option", "value"],
 *   ]
 * }
 * ```
 * @maxItems 2
 * @minItems 2
 * @example ["option","value"]
 */
  export type KeyValueOption = (string)[]

  /** Line */
  export interface Line {
  /** Name to display when calling */
    caller_id_name?: string,
  /** Number to display when calling */
    caller_id_num?: string,
  /** The name of an internal context */
    context: string,
  /** Line ID */
    id?: number,
  /** Line's position on the device */
    position?: number,
  /** Code used to provision a device */
    provisioning_code?: string,
  /** Name of the template line used by the device */
    registrar?: string,
}

  /** LineCreate */
  export type LineCreate = (Line & LineExtensions & LineEndpointSIP & LineEndpointSCCP & LineEndpointCustom)

  /** LineDevice */
  export interface LineDevice {
  /** Device's ID */
    device_id?: string,
  /** Line's ID */
    line_id?: number,
}

  /** LineDeviceItems */
  export interface LineDeviceItems {
    items?: (LineDevice)[],
    total: number,
}

  /** LineEndpointCustom */
  export interface LineEndpointCustom {
    endpoint_custom?: EndpointCustom,
}

  /** LineEndpointSCCP */
  export interface LineEndpointSCCP {
    endpoint_sccp?: EndpointSccp,
}

  /** LineEndpointSIP */
  export interface LineEndpointSIP {
    endpoint_sip?: EndpointSIP,
}

  /** LineExtensions */
  export interface LineExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export interface LineID {
    id?: number,
}

  /** LineItems */
  export interface LineItems {
    items?: (LineView)[],
    total: number,
}

    export interface LineRelationApplication {
    application?: ApplicationRelationBase,
}

    export interface LineRelationBase {
  /** Line ID */
    id?: number,
  /** The name of the line */
    name?: string,
}

    export interface LineRelationEndpoints {
    endpoint_custom?: EndpointCustomRelationBase,
    endpoint_sccp?: EndpointSccpRelationBase,
    endpoint_sip?: EndpointSipRelationBase,
}

    export interface LineRelationExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export interface LineRelationUsers {
    users?: (UserRelationBase)[],
}

  /** Line */
  export type LineView = (LineRelationBase & {
  /** Name to display when calling */
    caller_id_name?: string,
  /** Number to display when calling */
    caller_id_num?: string,
  /** The name of an internal context */
    context: string,
  /** ID of the device associated to the line */
    device_id?: string,
  /** *Deprecated* Please use `position` */
    device_slot?: number,
  /** Line's position on the device */
    position?: number,
  /** Line's protocol */
    protocol?: "sip",
  /** Code used to provision a device */
    provisioning_code?: string,
  /** *Deprecated* Please use `provisioning_code` */
    provisioning_extension?: string,
  /** Name of the template line used by the device */
    registrar?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & LineRelationApplication & LineRelationEndpoints & LineRelationExtensions & LineRelationUsers)

    export interface LinesID {
    lines?: (LineID)[],
}

  /**
 * Link
 * a pointer to a linked resource related in some way to the current resource
 */
  export interface Link {
  /** The URL of the link */
    href?: string,
  /** The relationship of the link relative to the current resource */
    rel?: string,
}

    export type ListAccessFeaturesData = AccessFeatureItems

    export interface ListAccessFeaturesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListAgentsData = AgentItems

    export interface ListAgentsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListApplicationsData = ApplicationItems

    export interface ListApplicationsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListAsteriskConfbridgeWazoDefaultBridgeData = ConfBridgeConfiguration

    export type ListAsteriskConfbridgeWazoDefaultUserData = ConfBridgeConfiguration

    export type ListAsteriskFeaturesApplicationmapData = FeaturesConfiguration

    export type ListAsteriskFeaturesFeaturemapData = FeaturesConfiguration

    export type ListAsteriskFeaturesGeneralData = FeaturesConfiguration

    export type ListAsteriskHepGeneralData = HEPConfiguration

    export type ListAsteriskIaxCallnumberlimitsData = IAXCallNumberLimitss

    export type ListAsteriskIaxGeneralData = IAXGeneral

    export type ListAsteriskPjsipGlobalData = PJSIPGlobal

    export type ListAsteriskPjsipSystemData = PJSIPSystem

    export type ListAsteriskQueueGeneralData = QueueGeneral

    export type ListAsteriskRtpGeneralData = RTPConfiguration

    export type ListAsteriskRtpIceHostCandidatesData = RTPConfiguration

    export type ListAsteriskSccpGeneralData = SCCPGeneral

    export type ListAsteriskVoicemailGeneralData = VoicemailGeneral

    export type ListAsteriskVoicemailZonemessagesData = VoicemailZoneMessages

    export type ListBlocklistNumbersData = BlocklistNumbersListResponse

    export interface ListBlocklistNumbersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** filter blocklist numbers by the blocklist owner's uuid */
    user_uuid?: string,
}

    export type ListCallFiltersData = CallFilterItems

    export interface ListCallFiltersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListCallPickupsData = CallPickupItems

    export interface ListCallPickupsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListCallpermissionsData = CallPermissionItems

    export interface ListCallpermissionsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListConferencesData = ConferenceItems

    export interface ListConferencesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListContextsData = ContextItems

    export interface ListContextsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListContextsRangeData = ContextRangeItems

    export interface ListContextsRangeParams {
  /**
   * Determines if the ranges are going to be split to display only ranges with available extensions.
   * @default "available"
   */
    availability?: "available" | "all",
  /** context's ID */
    contextId: number,
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** The extension range destination type */
    rangeType: "user" | "group" | "queue" | "conference" | "incall",
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListDevicesData = DeviceItems

    export interface ListDevicesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListEndpointsCustomData = EndpointCustomItems

    export interface ListEndpointsCustomParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListEndpointsIaxData = EndpointIAXItems

    export interface ListEndpointsIaxParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListEndpointsSccpData = EndpointSccpItems

    export interface ListEndpointsSccpParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListEndpointsSipData = EndpointSIPItems

    export interface ListEndpointsSipParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Search filter for resource UUID, can be used to search multiple elements. Using a comma separated list of UUID
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
    uuid?: (string)[],
}

    export type ListEndpointsSipTemplatesData = EndpointSIPItems

    export interface ListEndpointsSipTemplatesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListExtensionsData = ExtensionItems

    export type ListExtensionsFeaturesData = ExtensionFeatureItems

    export interface ListExtensionsFeaturesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export interface ListExtensionsParams {
  /** Filter extensions by context name */
    context?: string,
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Filter extensions by exten number */
    exten?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** Filter extensions of a certain type. Internal: Used for calling a line with an internal number (e.g. “1000@default”). Incall: Used for calling a line from the outside (e.g. “from-extern” with a DID) */
    type?: "internal" | "incall",
}

    export type ListExternalAppsData = ExternalAppItems

    export interface ListExternalAppsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListFuncKeyDestinationsData = FuncKeyDestinationItems

    export type ListFuncKeyTemplateData = FuncKeyTemplate

    export interface ListFuncKeyTemplateParams {
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListFuncKeyTemplateUserAssociationsData = UserFuncKeyTemplate

    export type ListGroupsData = GroupItems

    export interface ListGroupsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListHttpIngressesData = HTTPIngressItems

    export interface ListHttpIngressesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Allows to fallback on master tenant config if the current tenant has no ingress set.
   * When the `view` is omitted or the `default`value is passed, only the ingress of the current tenant is returned. This is useful for configuration API.
   * For `fallback` view the API fallbacks to the master tenant ingress value. 
   */
    view?: "default" | "fallback",
}

    export type ListIncallsData = IncallItems

    export interface ListIncallsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** the user's ID */
    user_id?: number,
}

    export type ListIvrData = IvrItems

    export interface ListIvrParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListLinesData = LineItems

    export interface ListLinesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListMeetingsData = MeetingItems

    export interface ListMeetingsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListMohData = MohItems

    export interface ListMohParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListOutcallsData = OutcallItems

    export interface ListOutcallsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListPagingsData = PagingItems

    export interface ListPagingsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListParkingLotsData = ParkingLotItems

    export interface ListParkingLotsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListPhoneNumbersData = PhoneNumberItems

    export interface ListPhoneNumbersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Only include the main phone number of the tenant */
    main?: boolean,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** Only include shared phone numbers */
    shared?: boolean,
}

    export type ListQueuesData = QueueItems

    export interface ListQueuesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListRegistersIaxData = RegisterIAXItems

    export interface ListRegistersIaxParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListSchedulesData = ScheduleItems

    export interface ListSchedulesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListSipTransportsData = SIPTransportItems

    export interface ListSipTransportsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListSkillRulesData = SkillRuleItems

    export interface ListSkillRulesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListSkillsData = SkillItems

    export interface ListSkillsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListSoundsData = SoundItems

    export type ListSoundsLanguagesData = SoundLanguageItems

    export interface ListSoundsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListTenantsData = TenantItems

    export interface ListTenantsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListTimezonesData = TimezoneItems

    export type ListTrunksData = TrunkItems

    export interface ListTrunksParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListUnallocatedDevicesData = DeviceItems

    export interface ListUnallocatedDevicesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListUserBlocklistNumbersData = BlocklistNumbersListResponse

    export interface ListUserBlocklistNumbersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
}

    export type ListUserCalleridOutgoingData = UserCallerIDItems

    export type ListUserData = UserItems

    export type ListUserExternalAppsData = UserExternalAppItems

    export interface ListUserExternalAppsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
  /**
   * Different view of the external app endpoint
   * 
   * The `default` view, when the argument is omitted, is to return the user value for this
   * external app
   * 
   * The `fallback` view return the user value for this external app, but if not found, will
   * fallback to the tenant configured value
   * 
   * **WARNING**: Using fallback view on list will disabled all pagination and search features
   */
    view?: "fallback",
}

    export type ListUserForwardsData = UserForwards

    export type ListUserFuncKeyTemplateAssociationsData = UserFuncKeyTemplate

    export type ListUserFuncKeysData = FuncKeyTemplate

    export type ListUserMeetingAuthorizationsData = MeetingAuthorizationItems

    export type ListUserMeetingsData = MeetingItems

    export interface ListUserMeetingsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export interface ListUserParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Search filter for resource UUID, can be used to search multiple elements. Using a comma separated list of UUID
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
    uuid?: (string)[],
  /** Different view of the list of users. */
    view?: "directory" | "summary",
}

    export type ListUsersMeBlocklistNumbersData = UserBlocklistNumbersListResponse

    export interface ListUsersMeBlocklistNumbersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type ListVoicemailsData = VoicemailItems

    export interface ListVoicemailsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

  /** LiveReload */
  export interface LiveReload {
    enabled?: boolean,
}

  /** Localization */
  export interface Localization {
  /** The default country for users, in ISO-3166 alpha-2 format, e.g. "CA" for Canada. */
    country?: string,
  /** UUID of the tenant */
    tenant_uuid?: string,
}

    export type LookupUserBlocklistNumberData = any

    export interface LookupUserBlocklistNumberParams {
  /** E.164 number string to lookup(exact match) in the user's blocklist */
    number_exact: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,
}

    export interface Meeting {
  /** @format date-time */
    creation_time?: string,
  /** the external extension to dial to reach this meeting */
    exten?: string,
  /** Format: base64(username:password), same as HTTP Basic Auth. */
    guest_sip_authorization?: string,
  /** URI to reach this stack (configured by the Ingress HTTP resource) */
    ingress_http_uri?: string,
    name?: string,
    owner_uuids?: (string)[],
  /** Persistent meetings will not get deleted automatically */
    persistent?: boolean,
  /** when `true`, the `guest_sip_authorization` is always `null`. Instead, clients must request an authorization to access the meeting. */
    require_authorization?: boolean,
    uuid?: string,
}

    export interface MeetingAuthorization {
  /** @format date-time */
    creation_time?: string,
    guest_name?: string,
    sip_authorization?: string,
  /** The status of the authorization. If the meeting does not require an authorization, the authorization will always be `accepted`. */
    status?: "pending" | "accepted" | "rejected",
  /** @format uuid */
    uuid?: string,
}

    export interface MeetingAuthorizationItems {
    items?: (MeetingAuthorization)[],
    total?: number,
}

    export interface MeetingAuthorizationRequest {
    guest_name?: string,
}

    export interface MeetingItems {
    items?: (Meeting)[],
}

    export type MeetingRequest = (MeetingUserRequest & {
    owner_uuids?: (string)[],

})

    export interface MeetingUserRequest {
    name?: string,
  /** Persistent meetings will not get deleted automatically */
    persistent?: boolean,
}

    export type Moh = ({
  /** The command to run (only used when mode is "custom") */
    application?: string,
  /** The audio files */
    files?: (MohFile)[],
  /** The label of the MOH class */
    label?: string,
  /**
   * The play mode of the MOH class. Notice: `mp3` is deprecated and should not be used
   * @default "files"
   */
    mode?: "custom" | "files" | "mp3",
  /** The name used by Asterisk */
    name?: string,
  /** The order in which files are played (only used when mode is "files") */
    sort?: "alphabetical" | "random" | "random_start",
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** The UUID of the MOH class */
    uuid?: string,

})

    export interface MohFile {
  /** The name of the file */
    name?: string,
}

    export interface MohItems {
    items?: (Moh)[],
    total: number,
}

  /** Outcall */
  export type Outcall = (OutcallRelationBase & {
  /** Additional information about the outgoing call */
    description?: string,
  /** @default true */
    enabled?: boolean,
  /**
   * Use the internal caller id
   * @default false
   */
    internal_caller_id?: boolean,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,
  /** Ringing time before hangup */
    ring_time?: number,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & OutcallRelationTrunks & OutcallRelationExtensions & OutcallRelationSchedules & OutcallRelationCallPermissions)

  /** OutcallExtension */
  export interface OutcallExtension {
    caller_id?: string,
  /** The prefix added to the outgoing call when sent on the trunk */
    external_prefix?: string,
  /** The prefix that the user need to dial before the pattern */
    prefix?: string,
  /** The number of leading digits to strip */
    strip_digits?: number,
}

  /** OutcallItems */
  export interface OutcallItems {
    items?: (Outcall)[],
    total: number,
}

    export interface OutcallRelationBase {
  /** The id of the outgoing call */
    id?: number,
  /** The name of the outcall */
    name?: string,
}

    export interface OutcallRelationCallPermissions {
    call_permissions?: (CallPermissionRelationBase)[],
}

    export type OutcallRelationExtension = (ExtensionRelationBase & {
    caller_id?: string,
  /** The prefix added to the outgoing call when sent on the trunk */
    external_prefix?: string,
  /** The prefix that the user need to dial before the extension */
    prefix?: string,
  /** The number of leading digits to strip */
    strip_digits?: number,

})

    export interface OutcallRelationExtensions {
    extensions?: (OutcallRelationExtension)[],
}

    export type OutcallRelationSchedule = (ScheduleRelationBase)

    export interface OutcallRelationSchedules {
    schedules?: (OutcallRelationSchedule)[],
}

    export type OutcallRelationTrunk = (TrunkRelationBase & TrunkRelationEndpoints)

    export interface OutcallRelationTrunks {
    trunks?: (OutcallRelationTrunk)[],
}

    export interface PJSIPConfigurationOption {
  /** The default value for this option */
    default?: string,
  /** A long description of the option */
    description?: string,
  /** The name of the option */
    name?: string,
  /** A brief description of the option */
    synopsis?: string,
}

    export interface PJSIPConfigurationOptions {
  /** A list of all configuration options for this section */
    aor?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    auth?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    contact?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    domain_alias?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    endpoint?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    global?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    registration?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    system?: (PJSIPConfigurationOption)[],
  /** A list of all configuration options for this section */
    transport?: (PJSIPConfigurationOption)[],
}

  /**
 * PJSIP global configuration.
 * This configuration will be in the file ''pjsip.conf'' used by asterisk.
 * @example {"options":{"debug":false,"keep_alive_interval":"30","max_forwards":"5","user_agent":"Wazo"}}
 */
  export interface PJSIPGlobal {
    options?: object,
}

  /**
 * PJSIP system configuration.
 * This configuration will be in the file ''pjsip.conf'' used by asterisk.
 * @example {"options":{"accept_multiple_sdp_answers":"yes","compact_headers":"yes","disable_tcp_switch":"yes","follow_early_media_fork":"no"}}
 */
  export interface PJSIPSystem {
    options?: object,
}

  /** Paging */
  export type Paging = ({
  /**
   * Play the announce sound to the caller
   * @default true
   */
    announce_caller?: boolean,
  /** The sound played to everyone */
    announce_sound?: string,
  /**
   * Play a notification to caller
   * @default true
   */
    caller_notification?: boolean,
  /**
   * Duplex audio
   * @default false
   */
    duplex?: boolean,
  /** @default true */
    enabled?: boolean,
    id?: number,
  /**
   * Ignore attemps to forward the call
   * @default false
   */
    ignore_forward?: boolean,
  /** The name to identify the paging */
    name?: string,
  /** The number of the paging */
    number: string,
  /**
   * Record the paging
   * @default false
   */
    record?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,

} & PagingRelationCallers & PagingRelationMembers)

  /** PagingItems */
  export interface PagingItems {
    items?: (Paging)[],
    total: number,
}

    export interface PagingRelationCallers {
    callers?: PagingRelationMemberUsers,
}

    export interface PagingRelationMemberUsers {
    users?: (UserRelationBase)[],
}

    export interface PagingRelationMembers {
    members?: PagingRelationMemberUsers,
}

    export type ParkingLot = (ParkingLotRelationBase & {
  /**
   * Name of the MOH category to use for music on hold
   * @default "default"
   */
    music_on_hold?: string,
  /** Ending extension to park calls */
    slots_end?: string,
  /** Starting extension to park calls */
    slots_start?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /**
   * Maximum time on parking
   * @default 45
   */
    timeout?: number,

} & GroupRelationExtensions)

    export interface ParkingLotItems {
    items?: (ParkingLot)[],
    total: number,
}

    export interface ParkingLotRelationBase {
    id?: number,
  /** name to identify the parking lot */
    name?: string,
}

    export interface ParkingLotRelationExtensions {
    extensions?: (ExtensionRelationBase)[],
}

    export type PassWizardData = Wizard

  /** a phone number resource, usable for outgoing caller id or incall routing */
  export interface PhoneNumber {
  /** The Caller ID name that should be used when calling with this number as a Caller ID */
    caller_id_name?: string,
  /**
   * Whether or not this is the main / default phone number for this tenant. 
   * Only one number can be the main number for a given tenant.
   * @default false
   */
    main?: boolean,
  /** The phone number text (in e.164 representation if possible) */
    number: string,
  /** Whether or not this number is meant to be shared by multiple people */
    shared: boolean,
  /** uuid of tenant */
    tenant_uuid?: string,
  /** Number UUID */
    uuid?: string,
}

    export interface PhoneNumberItems {
    items?: (PhoneNumber)[],
}

  /** a request to register a range of phone number resources */
  export interface PhoneNumberRange {
  /**
   * The last phone number part of the contiguous range to be registered in the `/phone-numbers` resource;
   * a e.164 phone number, otherwise a phone number string part of a numbering plan dialable on the trunk network
   */
    end_number: string,
  /**
   * the first phone number part of a contiguous range of numbers to be registered in the `/phone-numbers` resource;
   * a e.164 phone number, otherwise a phone number string part of a numbering plan dialable on the trunk network
   */
    start_number: string,
}

    export interface PhoneNumberRangeResponse {
    created?: ({
  /** Phone Number UUID */
    uuid?: string,

})[],
  /**
   * links to related resources
   * include URLs of any registered phone number that are part of this range
   */
    links?: (Link)[],
}

  /** Provisioning Networking */
  export interface ProvisioningNetworking {
  /** The hostname or IP address used for HTTP and TFTP provisioning requests for DHCP integration. */
    provision_host?: string,
  /** The base URL on which the provisioning server will be accessible from outside the network. */
    provision_http_base_url?: string,
  /** The port used by the HTTP provisioning server. */
    provision_http_port?: number,
}

    export type PutUserMeetingAuthorizationAcceptData = MeetingAuthorization

    export type PutUserMeetingAuthorizationRejectData = MeetingAuthorization

  /** Queue */
  export type Queue = (QueueRelationBase & {
  /**
   * Announce hold time on entry
   * @default false
   */
    announce_hold_time_on_entry?: boolean,
  /** How the caller_id_name will be treated */
    caller_id_mode?: "prepend" | "overwrite" | "append",
  /** Name to display */
    caller_id_name?: string,
  /**
   * Asterisk definition: data-quality (modem) call (minimum delay)
   * @default false
   */
    data_quality?: boolean,
  /**
   * Enable DTMF hangup by callee
   * @default false
   */
    dtmf_hangup_callee_enabled?: boolean,
  /**
   * Enable DTMF hangup by caller
   * @default false
   */
    dtmf_hangup_caller_enabled?: boolean,
  /**
   * Enable DTMF records by callee
   * @default false
   */
    dtmf_record_callee_enabled?: boolean,
  /**
   * Enable DTMF records by caller
   * @default false
   */
    dtmf_record_caller_enabled?: boolean,
  /**
   * Enable/Disable DTMF recording for members of this queue receiving a call from this queue
   * @default false
   */
    dtmf_record_toggle?: boolean,
  /**
   * Enable DTMF transfers by callee
   * @default false
   */
    dtmf_transfer_callee_enabled?: boolean,
  /**
   * Enable DTMF transfers by caller
   * @default false
   */
    dtmf_transfer_caller_enabled?: boolean,
  /**
   * Enable/Disable the queue
   * @default true
   */
    enabled?: boolean,
  /**
   * Ignore call forward requests from members
   * @default false
   */
    ignore_forward?: boolean,
  /**
   * Mark all calls as "answered elsewhere" when cancelled
   * @default true
   */
    mark_answered_elsewhere?: boolean,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
  /**
   * Advanced configuration options. Options are appended at the end of
   * a queue account in the file 'queues.conf' used by asterisk. Please
   * consult the asterisk documentation for further details on available
   * parameters. Because of database limitations, only the following
   * options can be configured:
   * 
   * * announce
   * * context
   * * timeout
   * * monitor-type
   * * monitor-format
   * * queue-youarenext
   * * queue-thereare
   * * queue-callswaiting
   * * queue-holdtime
   * * queue-minutes
   * * queue-seconds
   * * queue-thankyou
   * * queue-reporthold
   * * periodic-announce
   * * announce-frequency
   * * periodic-announce-frequency
   * * announce-round-seconds
   * * announce-holdtime
   * * retry
   * * wrapuptime
   * * maxlen
   * * servicelevel
   * * strategy
   * * joinempty
   * * leavewhenempty
   * * ringinuse
   * * reportholdtime
   * * memberdelay
   * * weight
   * * timeoutrestart
   * * timeoutpriority
   * * autofill
   * * autopause
   * * setinterfacevar
   * * setqueueentryvar
   * * setqueuevar
   * * membermacro
   * * min-announce-frequency
   * * random-periodic-announce
   * * announce-position
   * * announce-position-limit
   * * defaultrule
   * 
   * Options must have the following form:
   * ```
   * {
   *   "options": [
   *      ["name1", "value1"],
   *      ["name2", "value2"]
   *   ]
   * }
   * ```
   * 
   * The resulting configuration in queues.conf will have the following form:
   * ```
   * [queuename]
   * name1=value1
   * name2=value2
   * ```
   * @default []
   */
    options?: (KeyValueOption)[],
    preprocess_subroutine?: string,
  /**
   * Retry when time has elapsed
   * @default true
   */
    retry_on_timeout?: boolean,
  /**
   * Ring instead of On-Hold Music
   * @default false
   */
    ring_on_hold?: boolean,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** Number of seconds the queue will ring before falling back */
    timeout?: number,
  /** Go to that destination when 'wait_ratio_threshold' is reached */
    wait_ratio_destination?: DestinationType,
  /** Wait ratio (waiting calls per logged-in agent) threshold before fallback on 'wait_ratio_destination'. Set to 'null' to disable it. */
    wait_ratio_threshold?: number,
  /** Go to that destination when 'wait_time_threshold' is reached */
    wait_time_destination?: DestinationType,
  /** Wait time threshold before fallback on 'wait_time_destination'. Set to 'null' to disable it. */
    wait_time_threshold?: number,

} & QueueRelationSchedules & QueueRelationMembers)

  /** @example {"busy_destination":{"group_id":2,"type":"group"},"congestion_destination":{"ivr_id":3,"type":"ivr"},"fail_destination":{"type":"voicemail","voicemail_id":4},"noanswer_destination":{"type":"user","user_id":1}} */
  export interface QueueFallbacks {
  /** The destination to redirect the caller to when there are busy */
    busy_destination?: DestinationType,
  /** The destination to redirect the caller to when there are congestion */
    congestion_destination?: DestinationType,
  /** The destination to redirect the caller to when the call fail */
    fail_destination?: DestinationType,
  /** The destination to redirect the caller to when there are no answer */
    noanswer_destination?: DestinationType,
}

  /**
 * QueueGeneral
 * Queue general configuration. This configuration will be in the file 'queue.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface QueueGeneral {
  /**
   * General Queue options. These options must be unique and unordered. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /** QueueItems */
  export interface QueueItems {
    items?: (Queue)[],
    total: number,
}

  /**
 * QueueMemberAgent
 * An association between an agent and a queue. Agents associated to a Queue will receive calls when they are logged in.
 */
  export type QueueMemberAgent = (QueueMemberAgentRelationBase)

    export interface QueueMemberAgentRelationBase {
  /** Agent's penalty. A priority used for distributing calls. */
    penalty?: number,
  /** Priority of agent in the queue. Only used for linear ring strategy */
    priority?: number,
}

  /**
 * QueueMemberUser
 * An association between a user and a queue.
 */
  export type QueueMemberUser = (QueueMemberUserRelationBase)

    export interface QueueMemberUserRelationBase {
  /**
   * Priority of user in the queue. Only used for linear ring strategy
   * @min 0
   */
    priority?: number,
}

    export interface QueueRelationBase {
  /** The id of the queue */
    id?: number,
  /** The label of the queue */
    label?: string,
  /** The name of the queue. Cannot be modified */
    name?: string,
}

    export type QueueRelationMemberAgent = (AgentRelationBase & QueueMemberAgentRelationBase)

    export interface QueueRelationMemberAgents {
    agents?: (QueueRelationMemberAgent)[],
    users?: (QueueRelationMemberUser)[],
}

    export type QueueRelationMemberUser = (UserRelationBase & QueueMemberUserRelationBase)

    export interface QueueRelationMembers {
    members?: QueueRelationMemberAgents,
}

    export interface QueueRelationSchedules {
    schedules?: (ScheduleRelationBase)[],
}

  /**
 * RTPConfiguration
 * This configuration will be in the file 'rtp.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface RTPConfiguration {
  /**
   * These options must be unique and unordered. Otherwise, use `ordered_options`. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /** Recordings announcements */
  export interface RecordingsAnnouncements {
  /** The filename for the recording start announcement */
    recording_start?: string,
  /** The filename for the recording stop announcement */
    recording_stop?: string,
}

  /** Register IAX */
  export type RegisterIAX = (RegisterIAXRelationBase & {
  /** The password to authenticate to the remote_host */
    auth_password?: string,
  /** The username used by the remote_host for the authentication */
    auth_username?: string,
  /** The callback context to use for the register */
    callback_context?: string,
  /** The callback extension to use for the register */
    callback_extension?: string,
  /** The register domain */
    remote_host: string,
  /** The port of the remote_host */
    remote_port?: number,

})

  /** RegisterItems */
  export interface RegisterIAXItems {
    items?: (RegisterIAX)[],
    total?: number,
}

    export interface RegisterIAXRelationBase {
  /** The id of the register IAX */
    id?: number,
}

  /** Registrar */
  export interface Registrar {
  /** Backup registrar host */
    backup_host?: string,
  /** Backup registrar port */
    backup_port?: number,
  /** Define if the registrar can be deleted */
    deletable?: boolean,
  /** Registrar identifier */
    id?: string,
  /** Registrar host */
    main_host: string,
  /** Registrar port */
    main_port?: number,
  /** Display name of the registrar */
    name?: string,
  /** Outbound proxy host */
    outbound_proxy_host?: string,
  /** Outbound proxy port */
    outbound_proxy_port?: number,
  /** Backup proxy host */
    proxy_backup_host?: string,
  /** Backup proxy port */
    proxy_backup_port?: number,
  /** Proxy host. Using IPv4 is recommended to have a better integration with some provisioning plugins. (ex: Yealink DND integration) */
    proxy_main_host: string,
  /** Proxy port */
    proxy_main_port?: number,
}

  /** RegistrarItems */
  export interface RegistrarItems {
    items?: (Registrar)[],
    total?: number,
}

    export type ResetDeviceAutoprovData = any

  /** Rewriting rule */
  export interface RewritingRule {
  /**
   * The local address matching rule. Supports regular expressions
   * @example "`/^.*@example.org/` or `user-name` or `user-name@example.org`"
   */
    match?: string,
  /**
   * The replacement for the matched rule
   * @example "`no-reply@example.org`"
   */
    replacement?: string,
}

  /**
 * SCCPGeneral
 * SCCP general configuration. This configuration will be in the file 'sccp.conf' used by asterisk.
 */
  export interface SCCPGeneral {
  /**
   * General SCCP options. These options must be unique and unordered. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /** PJSIP AOR Section Options */
  export type SIPAORSectionOptions = KeyValueOption

  /** PJSIP Auth Section Options */
  export type SIPAuthSectionOptions = KeyValueOption

  /** SIP Endpoint Section Options */
  export type SIPEndpointSectionOptions = KeyValueOption

  /** PJSIP Identify Section Options */
  export type SIPIdentifySectionOptions = KeyValueOption

  /** PJSIP Registration Section Options */
  export type SIPRegistrationSectionOptions = KeyValueOption

  /** @example {"name":"transport-udp","options":[["protocol","udp"],["bind","0.0.0.0:5060"]]} */
  export interface SIPTransport {
    name: string,
    options: (KeyValueOption)[],
    uuid?: string,
}

    export interface SIPTransportItems {
    items?: (SIPTransport)[],
    total?: number,
}

    export interface SIPTransportRelation {
    uuid: string,
}

  /** Schedule */
  export type Schedule = (ScheduleRelationBase & {
  /** The destination to redirect the caller to when the schedule is not opened */
    closed_destination: DestinationType,
  /** @default true */
    enabled?: boolean,
    exceptional_periods?: (ScheduleExceptionalPeriod)[],
    open_periods?: (ScheduleOpenPeriod)[],
  /** The number of the schedule */
    timezone?: string,

} & ScheduleRelationIncalls & ScheduleRelationGroups & ScheduleRelationQueues & ScheduleRelationUsers & ScheduleRelationOutcalls)

    export type ScheduleExceptionalPeriod = (ScheduleOpenPeriod & {
  /** The destination to redirect the caller to when the given period is satisfied */
    destination?: DestinationType,

})

  /** ScheduleItems */
  export interface ScheduleItems {
    items?: (Schedule)[],
    total: number,
}

    export interface ScheduleOpenPeriod {
  /** The end hour of the period. Format <HH:MM> */
    hours_end?: string,
  /** The start hour of the period. Format <HH:MM> */
    hours_start?: string,
  /** The month days of the period. */
    month_days?: (number)[],
  /** The months of the period. Month start with January(1) and end with December(12) */
    months?: (number)[],
  /** The week days of the period. Week day start with Monday(1) and end with Sunday(7) */
    week_days?: (number)[],
}

    export interface ScheduleRelationBase {
    id?: number,
  /** The name to identify the schedule */
    name?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

    export interface ScheduleRelationGroups {
    incalls?: (GroupRelationBase)[],
}

    export interface ScheduleRelationIncalls {
    incalls?: (IncallRelationBase)[],
}

    export interface ScheduleRelationOutcalls {
    incalls?: (OutcallRelationBase)[],
}

    export interface ScheduleRelationQueues {
    incalls?: (QueueRelationBase)[],
}

    export interface ScheduleRelationUsers {
    incalls?: (UserRelationBase)[],
}

    export interface SetPhoneNumberMainPayload {
  /**
   * UUID of the phone number to set as main
   * @example "b5bcc98c-10cf-4a68-bf3d-802fb5170911"
   */
    phone_number_uuid: string,
}

    export type ShowPjsipDocData = PJSIPConfigurationOptions

    export type ShowPjsipDocError = (Error)

  /** Skill */
  export type Skill = (SkillRelationBase & {
    description?: string,

} & SkillRelationAgents)

  /** SkillItems */
  export interface SkillItems {
    items?: (Skill)[],
    total: number,
}

    export type SkillRelationAgent = (AgentRelationBase & AgentSkillRelationBase)

    export interface SkillRelationAgents {
    agents?: (SkillRelationAgent)[],
}

    export interface SkillRelationBase {
    id?: number,
  /** The name to identify the skill */
    name?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

  /** SkillRule */
  export interface SkillRule {
    id?: number,
  /** The name to identify the skill rule */
    name: string,
    rules?: (SkillRuleRule)[],
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

  /** SkillRuleItems */
  export interface SkillRuleItems {
    items?: (SkillRule)[],
    total: number,
}

  /** SkillRuleRule */
  export interface SkillRuleRule {
  /** The rule definition */
    definition?: string,
}

    export interface Sound {
  /** The audio files */
    files?: (SoundFile)[],
  /** The name of the category (can only by set on create and must be unique) */
    name: string,
  /** The UUID of the tenant of the category */
    tenant_uuid?: string,
}

    export interface SoundFile {
  /** The audio file formats */
    formats?: (SoundFormat)[],
  /** The name of the file */
    name?: string,
  /** The UUID of the tenant of the file */
    tenant_uuid?: string,
}

    export interface SoundFormat {
    format?: string,
    language?: string,
    path?: string,
  /** The UUID of the tenant of the file */
    tenant_uuid?: string,
    text?: string,
}

    export interface SoundItems {
    items?: (Sound)[],
    total: number,
}

  /** SoundLanguage */
  export interface SoundLanguage {
    tag?: string,
}

  /** SoundLanguageItems */
  export interface SoundLanguageItems {
    items?: (SoundLanguage)[],
    total?: number,
}

    export type StatusListData = StatusSummary

    export interface StatusSummary {
    bus_consumer?: ComponentWithStatus,
    master_tenant?: ComponentWithStatus,
    rest_api?: ComponentWithStatus,
    service_token?: ComponentWithStatus,
}

    export enum StatusValue {
  Fail = "fail",
  Ok = "ok" 
 }

    export type Switchboard = ({
    name?: string,
    queue_music_on_hold?: string,
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** Maximum time allowed for a call to be queued. When the timeout expires, the call is redirected to the no-answer fallback. */
    timeout?: number,
    uuid?: string,
    waiting_room_music_on_hold?: string,

} & SwitchboardRelationIncalls & SwitchboardRelationMembers & SwitchboardRelationFallbacks)

  /** @example {"noanswer_destination":{"type":"user","user_id":1}} */
  export interface SwitchboardFallbacks {
  /** If a call has not been answered before the switchboard `timeout`, the call will be redirected to this destination. */
    noanswer_destination?: DestinationType,
}

    export interface SwitchboardRelationBase {
  /** Switchboard name */
    name?: string,
  /** Switchboard UUID */
    uuid?: string,
}

    export interface SwitchboardRelationFallbacks {
    fallbacks?: SwitchboardFallbacks,
}

    export type SwitchboardRelationIncall = (IncallRelationBase & IncallRelationExtensions)

    export interface SwitchboardRelationIncalls {
    incalls?: (SwitchboardRelationIncall)[],
}

    export interface SwitchboardRelationMemberUsers {
    users?: (UserRelationBase)[],
}

    export interface SwitchboardRelationMembers {
    members?: SwitchboardRelationMemberUsers,
}

    export type SwitchboardsCreateData = Switchboard

    export type SwitchboardsDetailData = Switchboard

    export interface SwitchboardsListData {
    items?: (Switchboard)[],
}

    export interface SwitchboardsListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
}

    export type SynchronizeDeviceData = any

    export interface Tenant {
    global_sip_template_uuid?: string,
    registration_trunk_sip_template_uuid?: string,
  /** Wether or not the SIP templates have been generated */
    sip_templates_generated?: boolean,
  /** The UUID of the Tenant */
    uuid?: string,
    webrtc_sip_template_uuid?: string,
}

  /** TenantItems */
  export interface TenantItems {
    items?: (Tenant)[],
    total?: number,
}

  /** Timezone */
  export interface Timezone {
    zone_name?: string,
}

  /** TimezoneItems */
  export interface TimezoneItems {
    items?: (Timezone)[],
    total?: number,
}

  /** Trunk */
  export type Trunk = (TrunkRelationBase & {
  /** The context of the trunk */
    context?: string,
  /**
   * The format to use for the caller ID of outgoing calls through this trunk, 
   * when the caller id is provided by an application through the `X-Wazo-Selected-Caller-ID` SIP header on an `INVITE`. 
   * If the caller ID supplied by an application cannot be formatted, the requested caller ID will be ignored.
   * @default "+E164"
   */
    outgoing_caller_id_format?: "+E164" | "E164" | "national",
  /** Use this trunk's settings to handle incoming calls from Twilio */
    twilio_incoming?: boolean,

} & TrunkRelationEndpoints & TrunkRelationOutcalls)

  /** TrunkId */
  export interface TrunkId {
    id?: number,
}

  /** TrunkItems */
  export interface TrunkItems {
    items?: (Trunk)[],
    total?: number,
}

    export interface TrunkRelationBase {
  /** The id of the trunk */
    id?: number,
  /** The UUID of the tenant */
    tenant_uuid?: string,
}

    export interface TrunkRelationEndpoints {
    endpoint_custom?: EndpointCustomRelationBase,
    endpoint_iax?: EndpointIAXRelationBase,
    endpoint_sip?: EndpointSipRelationBase,
}

    export interface TrunkRelationOutcalls {
    outcalls?: (OutcallRelationBase)[],
}

  /** TrunksId */
  export interface TrunksId {
    trunks?: (TrunkId)[],
}

    export type UpdateAgentQueueAssociationData = any

    export type UpdateCallFilterCallerUsersData = any

    export type UpdateCallFilterFallbackData = any

    export type UpdateCallFilterMemberUsersData = any

    export type UpdateCallPickupInterceptorGroupsData = any

    export type UpdateCallPickupInterceptorUsersData = any

    export type UpdateCallPickupTargetGroupsData = any

    export type UpdateCallPickupTargetUsersData = any

    export type UpdateGroupFallbackData = any

    export type UpdateGroupMemberExtensionsData = any

    export type UpdateGroupMemberUsersData = any

  /** @format binary */
  export type UpdateMohFilesPayload = any

    export type UpdatePagingCallerUsersData = any

    export type UpdatePagingMemberUsersData = any

    export type UpdateQueueFallbackData = any

    export interface UpdateSoundsFilesParams {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,
    soundCategory: string,
    soundFilename: string,
}

  /** @format binary */
  export type UpdateSoundsFilesPayload = any

    export type UpdateSwitchboardFallbackData = any

    export type UpdateSwitchboardMemberUsersData = any

    export type UpdateUserFallbackData = any

    export type UpdateUserGroupsData = any

    export type UpdateUserQueueAssociationData = any

    export type UpdateUsersCsvData = UserUpdate

    export type UpdateUsersCsvError = (UserImportError)

    export type UpdateUsersCsvPayload = string

  /** User */
  export type User = (BaseUser & UserRelationAgent & UserRelationFallbacks & UserRelationForwards & UserRelationGroups & UserRelationIncalls & UserRelationLines & UserRelationServices & UserRelationSwitchboards & UserRelationVoicemail & UserRelationQueues & UserRelationCallPickupTargets)

  /** a blocklisted number */
  export interface UserBlocklistNumber {
  /** The label of the blocklisted number */
    label?: string,
  /** The phone number (in E.164 representation if possible) */
    number: string,
  /** Blocklisted Number UUID */
    uuid?: string,
}

    export interface UserBlocklistNumbersListResponse {
    items?: (UserBlocklistNumber)[],
  /** Total number of blocklisted numbers in the user's blocklist */
    total?: number,
}

  /** UserCallPermission */
  export interface UserCallPermission {
  /** Call Permission's ID */
    call_permission_id: number,
  /** User's ID */
    user_id: number,
}

  /** UserCallPermissionItems */
  export interface UserCallPermissionItems {
    items?: (UserCallPermission)[],
    total?: number,
}

  /** UserCallerID */
  export interface UserCallerID {
  /** Caller ID number. Only valid for `main` `associated` type */
    number?: string,
  /**
   * Caller ID type.
   * 
   * - `main`: The phone number(`/1.1/phone-numbers`) currently flagged as `main`, which should correspond to the organisation number.
   * - `associated`: An incall associated to the user
   * - `anonymous`: Anonymous caller ID
   * - `shared`: A phone number(`/1.1/phone-numbers`) flagged as `shared`
   */
    type?: "main" | "associated" | "anonymous" | "shared",
}

  /** UserCallerIDItems */
  export interface UserCallerIDItems {
    items?: (UserCallerID)[],
    total: number,
}

  /** User Create */
  export type UserCreate = (BaseUser & UserRelationVoicemailCreate & UserRelationAgent & UserRelationFallbacks & UserRelationForwards & UserRelationGroups & UserRelationIncalls & UserRelationLines & UserRelationServices & UserRelationSwitchboards & UserRelationQueues & UserRelationCallPickupTargets)

  /** UserExport */
  export type UserExport = string

  /** UserExternalApp */
  export interface UserExternalApp {
  /** Arbitrary settings needed by an external app */
    configuration?: object,
  /** The label of the external app */
    label?: string,
  /** The name to identify the external app */
    name?: string,
}

  /** UserExternalAppItems */
  export interface UserExternalAppItems {
    items?: (UserExternalApp)[],
    total: number,
}

  /** @example {"busy_destination":{"group_id":2,"type":"group"},"congestion_destination":{"ivr_id":3,"type":"ivr"},"fail_destination":{"type":"voicemail","voicemail_id":4},"noanswer_destination":{"type":"user","user_id":1}} */
  export interface UserFallbacks {
  /** The destination to redirect the caller to when there are busy */
    busy_destination?: DestinationType,
  /** The destination to redirect the caller to when there are congestion */
    congestion_destination?: DestinationType,
  /** The destination to redirect the caller to when the call fail */
    fail_destination?: DestinationType,
  /** The destination to redirect the caller to when there are no answer */
    noanswer_destination?: DestinationType,
}

  /** UserForward */
  export interface UserForward {
    destination?: string,
    enabled?: boolean,
}

  /** UserForwards */
  export interface UserForwards {
    busy?: UserForward,
    noanswer?: UserForward,
    unconditional?: UserForward,
}

  /**
 * UserFuncKeyTemplate
 * Association between a User and a FuncKey Template
 */
  export interface UserFuncKeyTemplate {
  /**
   * FuncKey Template's ID
   * @format int32
   */
    template_id?: number,
  /**
   * User's ID
   * @format int32
   */
    user_id?: number,
}

    export interface UserGroupID {
    id?: number,
    uuid?: string,
}

    export interface UserGroupsID {
    groups?: (UserGroupID)[],
}

  /**
 * UserImport
 * List of users successfully imported
 */
  export interface UserImport {
    created?: ({
  /** Extension ID */
    extension_id?: number,
  /** ID of the Extension used for incoming calls */
    incall_extension_id?: number,
  /** Line ID */
    line_id?: number,
  /** Line number corresponding to the CSV data */
    row_number?: number,
  /** SIP UUID */
    sip_uuid?: string,
  /** User ID */
    user_id?: number,
  /** Voicemail ID */
    voicemail_id?: number,

})[],
}

  /**
 * UserImportError
 * List of errors that occurred during import
 */
  export interface UserImportError {
    errors?: ({
    details?: {
  /** Original data that caused the error */
    row?: object,
  /** Line number corresponding to the CSV data */
    row_number?: number,

},
  /** Error message */
    message?: string,
  /** Time at which the error occurred */
    timestamp?: number,

})[],
}

  /** UserItems */
  export interface UserItems {
    items?: (User)[],
    total: number,
}

  /** User */
  export type UserPost = (UserPostRelationIncalls) & ({
  /** The agent related to the user */
    agent?: UserRelationAgent,
    auth?: {
  /** The main email address of the new username */
    email_address?: string,
    enabled?: boolean,
  /** The user's firstname */
    firstname?: string,
  /** The user's lastname */
    lastname?: string,
  /** The password of the newly created username */
    password?: string,
  /** @default "user" */
    purpose?: "user" | "internal" | "external_api",
  /** The username that will identify that new username */
    username?: string,
  /** The user's UUID */
    uuid?: string,

},
  /** Overwrite all passwords set in call permissions associated to the user */
    call_permission_password?: string,
  /**
   * Record all calls made by this user (deprecated). If set, all `call_record_*_enabled` will be affected
   * @default false
   */
    call_record_enabled?: boolean,
  /**
   * Record all external calls received by this user.
   * @default false
   */
    call_record_incoming_external_enabled?: boolean,
  /**
   * Record all internal calls received by this user.
   * @default false
   */
    call_record_incoming_internal_enabled?: boolean,
  /**
   * Record all external calls made by this user
   * @default false
   */
    call_record_outgoing_external_enabled?: boolean,
  /**
   * Record all internal calls received by this user
   * @default false
   */
    call_record_outgoing_internal_enabled?: boolean,
  /**
   * Authorize call transfers
   * @default false
   */
    call_transfer_enabled?: boolean,
  /** Name that appears on the phone when calling. Formatted as 'Firstname Lastname' < number > */
    caller_id?: string,
  /** Additional information about the user */
    description?: string,
  /**
   * Authorize to hangup with DTMF
   * @default false
   */
    dtmf_hangup_enabled?: boolean,
  /** User's email. Used for directories (i.e. by wazo-dird) */
    email?: string,
  /**
   * Enable/Disable the user
   * @default true
   */
    enabled?: boolean,
  /** The fallbacks related to the user */
    fallbacks?: UserFallbacks,
  /** User firstname */
    firstname?: string,
  /** The forwards related to the user */
    forwards?: UserForwards,
    groups?: ({
    id?: number,
    uuid?: string,

})[],
  /** User ID */
    id?: number,
  /** User language (e.g. "en_US") */
    language?: "de_DE" | "en_US" | "es_ES" | "fr_FR" | "fr_CA" | "it_IT" | "nl_NL",
  /** User lastname */
    lastname?: string,
    lines?: (UserPostRelationLine)[],
  /** Phone number for the user’s mobile device */
    mobile_phone_number?: string,
  /** Name of the MOH category to use for music on hold */
    music_on_hold?: string,
  /**
   * Allow user to record a call by pressing *3
   * @default false
   */
    online_call_record_enabled?: boolean,
  /** Name that appears on the phone when calling */
    outgoing_caller_id?: "default" | "anonymous" | "'Firstname Lastname' < number >",
  /**
   * Password for connecting to the CTI (deprecated)
   * @minLength 4
   */
    password?: string,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,
  /**
   * Number of seconds a user's phone will ring before falling back
   * @default 30
   */
    ring_seconds?: number,
  /**
   * Number of allowed simultaneous calls on a user's phone
   * @default 5
   */
    simultaneous_calls?: number,
  /**
   * The subscription type of the user (0-10)
   * @min 0
   * @max 10
   */
    subscription_type?: number,
  /**
   * Activate presence sharing in the xivo client
   * @default true
   */
    supervision_enabled?: boolean,
    switchboards?: ({
    uuid?: string,

})[],
  /** The UUID of the tenant */
    tenant_uuid?: string,
  /** User timezone */
    timezone?: string,
  /** A custom field which purpose is left to the client. If the user has no userfield, then this field is an empty string. */
    userfield?: string,
  /** Username for connecting to the CTI (deprecated) */
    username?: string,
  /** User UUID. This ID is globally unique across multiple Wazo instances */
    uuid?: string,
  /** The body of a new voicemail or a body containing an existing voicemail ID that should be associated to the user. */
    voicemail?: Voicemail,

})

    export interface UserPostRelationIncalls {
    incalls?: ({
  /** How the caller_id_name will be treated */
    caller_id_mode?: "prepend" | "overwrite" | "append",
  /** Name to display when calling */
    caller_id_name?: string,
    extensions?: ({
    context?: string,
    exten?: string,
  /** Extension ID */
    id?: number,

})[],
  /** The name of the sound file to be played before redirecting the caller to the destination */
    greeting_sound?: string,
  /** The id of the incoming call */
    id?: number,
  /** Name of the subroutine to execute in asterisk before receiving a call */
    preprocess_subroutine?: string,

})[],
}

    export type UserPostRelationLine = (Line & LineExtensions & LineEndpointSIP & LineEndpointSCCP & LineEndpointCustom) & ({
  /** ID of the device associated to the line */
    device_id?: string,

})

  /** UserCreateResponse */
  export type UserPostResponse = (UserPost & AuthUserPost & UserPostRelationIncalls)

    export interface UserRelationAgent {
    agent?: AgentRelationBase,
}

    export interface UserRelationBase {
  /** User firstname */
    firstname?: string,
  /** User lastname */
    lastname?: string,
  /** User UUID. This ID is globally unique across multiple Wazo instances */
    uuid?: string,
}

  /** UserRelationCallPickupTargets */
  export interface UserRelationCallPickupTargets {
    call_pickup_target_users?: (UserRelationBase)[],
}

    export interface UserRelationFallbacks {
    fallbacks?: UserFallbacks,
}

    export interface UserRelationForwards {
    forwards?: UserForwards,
}

    export interface UserRelationGroups {
    groups?: (GroupRelationBase)[],
}

    export type UserRelationIncall = (IncallRelationBase & IncallRelationExtensions)

    export interface UserRelationIncalls {
    incalls?: (UserRelationIncall)[],
}

    export type UserRelationLine = (LineRelationBase & LineRelationEndpoints & LineRelationExtensions)

    export interface UserRelationLines {
    lines?: (UserRelationLine)[],
}

    export interface UserRelationQueues {
    queues?: (QueueRelationBase)[],
}

    export interface UserRelationServices {
    services?: UserServices,
}

    export interface UserRelationSwitchboards {
    switchboards?: (SwitchboardRelationBase)[],
}

    export interface UserRelationVoicemail {
    voicemail?: VoicemailRelationBase,
}

    export interface UserRelationVoicemailCreate {
    voicemail?: (BaseVoicemail & {
  /** The voicemail is associated if the ID is specified */
    id?: number,

}),
}

  /** UserService */
  export interface UserService {
    enabled: boolean,
}

  /** UserServices */
  export interface UserServices {
    dnd?: UserService,
    incallfilter?: UserService,
}

  /** UserSubscription */
  export interface UserSubscription {
  /** Total of assigned subscription */
    count?: number,
    id?: number,
}

  /** UserSubscriptionItems */
  export interface UserSubscriptionItems {
    items?: (UserSubscription)[],
    total: number,
}

  /**
 * UserUpdate
 * List of users successfully updated
 */
  export interface UserUpdate {
    updated?: ({
  /** Extension ID */
    extension_id?: number,
  /** ID of the Extension used for incoming calls */
    incall_extension_id?: number,
  /** Line ID */
    line_id?: number,
  /** Line number corresponding to the CSV data */
    row_number?: number,
  /** SIP UUID */
    sip_uuid?: string,
  /** User ID */
    user_id?: number,
  /** Voicemail ID */
    voicemail_id?: number,

})[],
}

    export interface UserUuid {
    uuid?: string,
}

    export interface UsersUuid {
    users?: (UserUuid)[],
}

    export type Voicemail = (BaseVoicemail & VoicemailRelationBase & VoicemailRelationUsers)

  /**
 * VoicemailGeneral
 * Voicemail general configuration. This configuration will be in the file 'voicemail.conf' used by asterisk.
 * Please consult the asterisk documentation for further details on available parameters.
 */
  export interface VoicemailGeneral {
  /**
   * General Voicemail options. These options must be unique and unordered. Option must have the following form:
   * 
   * ```
   * {
   *   "options": {
   *     "name1": "value1",
   *     ...
   *   }
   * }
   * ```
   * 
   */
    options?: object,
}

  /** VoicemailItems */
  export interface VoicemailItems {
    items?: (Voicemail)[],
    total?: number,
}

    export interface VoicemailRelationBase {
  /** Voicemail ID */
    id?: number,
  /** Voicemail name */
    name?: string,
}

    export interface VoicemailRelationUsers {
    users?: (UserRelationBase)[],
}

  /** VoicemailZoneMessage */
  export interface VoicemailZoneMessage {
  /** Message that each user hears. */
    message?: string,
  /** label on which each voicemail is mapped */
    name: string,
  /** Timezone as define in '/usr/share/zoneinfo/' */
    timezone: string,
}

  /** VoicemailZoneMessages */
  export interface VoicemailZoneMessages {
  /**
   * Voicemail zonemessages configuration. This configuration will be in the file 'voicemail.conf' used by asterisk.
   * Please consult the asterisk documentation for further details on available parameters.
   */
    items?: (VoicemailZoneMessage)[],
}

  /** Wizard */
  export interface Wizard {
  /** Wazo administrator ``root`` password */
    admin_password: string,
  /**
   * The language in which the Wazo will play sounds
   * @default "en_US"
   */
    language?: "de_DE" | "en_US" | "es_ES" | "fr_FR" | "fr_CA" | "it_IT" | "nl_NL",
  /** Accept/decline the GPLv3: http://www.gnu.org/licenses/gpl-3.0.en.html */
    license: boolean,
    network: WizardNetwork,
    steps?: WizardSteps,
  /** System timezone. Example: America/Montreal. For the complete list of supported timezones, see ``/usr/share/zoneinfo/`` */
    timezone: string,
}

  /** WizardConfigured */
  export interface WizardConfigured {
  /** Whether all services which the wizard depends on are started or not */
    configurable?: boolean,
  /** A mapping of all dependencies and there statuses */
    configurable_status?: object,
  /** Whether Wazo has already been configured or not */
    configured?: boolean,
}

  /** WizardDiscover */
  export interface WizardDiscover {
  /** System domain name */
    domain?: string,
    gateways?: (WizardDiscoverGateway)[],
  /** System hostname */
    hostname?: string,
    interfaces?: (WizardDiscoverInterface)[],
  /**
   * Nameservers from file ``/etc/resolv.conf``
   * @maxItems 3
   */
    nameservers?: (string)[],
  /** System timezone from file ``/etc/timezone`` */
    timezone?: string,
}

  /** WizardDiscoverGateway */
  export interface WizardDiscoverGateway {
  /** Gateway IPv4 address */
    gateway?: string,
  /** Interface name (e.g. eth0) */
    interface?: string,
}

  /** WizardDiscoverInterface */
  export interface WizardDiscoverInterface {
  /** Interface name (e.g. eth0) */
    interface?: string,
  /** IPv4 address of the interface */
    ip_address?: string,
  /** Netmask of the IP address */
    netmask?: string,
}

  /** WizardNetwork */
  export interface WizardNetwork {
  /** Domain name */
    domain: string,
  /** Gateway IPv4 address */
    gateway: string,
  /** System hostname */
    hostname: string,
  /** Interface name (e.g. eth0) */
    interface: string,
  /** IPv4 address of the VoIP interface (connected to phones) */
    ip_address: string,
  /**
   * List of IPv4 addresses. Nameservers are used in resolv.conf.
   * @maxItems 3
   */
    nameservers: (string)[],
  /** Netmask of the IP address (e.g. 255.255.0.0) */
    netmask: string,
}

  /** WizardSteps */
  export interface WizardSteps {
  /**
   * Create admin in wazo-auth?
   * @default true
   */
    admin?: boolean,
  /**
   * Generate /etc/xivo/common.conf
   * @default true
   */
    commonconf?: boolean,
  /**
   * Initialize Wazo database?
   * @default true
   */
    database?: boolean,
  /**
   * Modify /etc/hosts?
   * @default true
   */
    manage_hosts_file?: boolean,
  /**
   * Modify /etc/resolv.conf?
   * @default true
   */
    manage_resolv_file?: boolean,
  /**
   * Enable/start Wazo services?
   * @default true
   */
    manage_services?: boolean,
  /**
   * Initialize wazo-provd database?
   * @default true
   */
    provisioning?: boolean,
}





 
    export namespace AccessFeatures {
        
/**
 * @description **Required ACL:** `confd.access_features.read`
 * @tags access_features
 * @name ListAccessFeatures
 * @summary List access features
 * @request GET:/access_features
 * @secure
*/
export namespace ListAccessFeatures {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAccessFeaturesData;
}
        
/**
 * @description **Required ACL:** `confd.access_features.create`
 * @tags access_features
 * @name CreateAccessFeature
 * @summary Create access_feature
 * @request POST:/access_features
 * @secure
*/
export namespace CreateAccessFeature {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = AccessFeature;
  export type RequestHeaders = {};
  export type ResponseBody = CreateAccessFeatureData;
}
        
/**
 * @description **Required ACL:** `confd.access_features.{access_feature_id}.delete`
 * @tags access_features
 * @name DeleteAccessFeature
 * @summary Delete access feature
 * @request DELETE:/access_features/{access_feature_id}
 * @secure
*/
export namespace DeleteAccessFeature {
  export type RequestParams = {
  /** Access feature ID */
    accessFeatureId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.access_features.{access_feature_id}.read`
 * @tags access_features
 * @name GetAccessFeature
 * @summary Get access_feature
 * @request GET:/access_features/{access_feature_id}
 * @secure
*/
export namespace GetAccessFeature {
  export type RequestParams = {
  /** Access feature ID */
    accessFeatureId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetAccessFeatureData;
}
        
/**
 * @description **Required ACL:** `confd.access_features.{access_feature_id}.update`
 * @tags access_features
 * @name UpdateAccessFeature
 * @summary Update access_feature
 * @request PUT:/access_features/{access_feature_id}
 * @secure
*/
export namespace UpdateAccessFeature {
  export type RequestParams = {
  /** Access feature ID */
    accessFeatureId: number,

};
  export type RequestQuery = {};
  export type RequestBody = AccessFeature;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Agents {
        
/**
 * @description **Required ACL:** `confd.agents.read`
 * @tags agents
 * @name ListAgents
 * @summary List agents
 * @request GET:/agents
 * @secure
*/
export namespace ListAgents {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListAgentsData;
}
        
/**
 * @description **Required ACL:** `confd.agents.create`
 * @tags agents
 * @name CreateAgent
 * @summary Create agent
 * @request POST:/agents
 * @secure
*/
export namespace CreateAgent {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Agent;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateAgentData;
}
        
/**
 * @description **Required ACL:** `confd.agents.skills.read`
 * @tags agents, skills
 * @name ListSkills
 * @summary List skill
 * @request GET:/agents/skills
 * @secure
*/
export namespace ListSkills {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListSkillsData;
}
        
/**
 * @description **Required ACL:** `confd.agents.skills.create`
 * @tags agents, skills
 * @name CreateSkill
 * @summary Create skill
 * @request POST:/agents/skills
 * @secure
*/
export namespace CreateSkill {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Skill;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateSkillData;
}
        
/**
 * @description **Required ACL:** `confd.agents.skills.{skill_id}.delete`
 * @tags skills
 * @name DeleteSkill
 * @summary Delete skill
 * @request DELETE:/agents/skills/{skill_id}
 * @secure
*/
export namespace DeleteSkill {
  export type RequestParams = {
  /** Skill's ID */
    skillId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.agents.skills.{skill_id}.read`
 * @tags agents, skills
 * @name GetSkill
 * @summary Get skill
 * @request GET:/agents/skills/{skill_id}
 * @secure
*/
export namespace GetSkill {
  export type RequestParams = {
  /** Skill's ID */
    skillId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetSkillData;
}
        
/**
 * @description **Required ACL:** `confd.agents.skills.{skill_id}.update`
 * @tags skills
 * @name UpdateSkill
 * @summary Update skill
 * @request PUT:/agents/skills/{skill_id}
 * @secure
*/
export namespace UpdateSkill {
  export type RequestParams = {
  /** Skill's ID */
    skillId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Skill;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.agents.{agent_id}.delete`
 * @tags agents
 * @name DeleteAgent
 * @summary Delete agent
 * @request DELETE:/agents/{agent_id}
 * @secure
*/
export namespace DeleteAgent {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.agents.{agent_id}.read`
 * @tags agents
 * @name GetAgent
 * @summary Get agent
 * @request GET:/agents/{agent_id}
 * @secure
*/
export namespace GetAgent {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetAgentData;
}
        
/**
 * @description **Required ACL:** `confd.agents.{agent_id}.update`
 * @tags agents
 * @name UpdateAgent
 * @summary Update agent
 * @request PUT:/agents/{agent_id}
 * @secure
*/
export namespace UpdateAgent {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Agent;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.agents.{agent_id}.skills.{skill_id}.delete`
 * @tags skills, agents
 * @name DissociateAgentSkill
 * @summary Dissociate agent and skill
 * @request DELETE:/agents/{agent_id}/skills/{skill_id}
 * @secure
*/
export namespace DissociateAgentSkill {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,
  /** Skill's ID */
    skillId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateAgentSkillData;
}
        
/**
 * @description **Required ACL:** `confd.agents.{agent_id}.skills.{skill_id}.update`
 * @tags skills, agents
 * @name AssociateAgentSkill
 * @summary Associate agent and skill
 * @request PUT:/agents/{agent_id}/skills/{skill_id}
 * @secure
*/
export namespace AssociateAgentSkill {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,
  /** Skill's ID */
    skillId: number,

};
  export type RequestQuery = {};
  export type RequestBody = AgentSkill;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateAgentSkillData;
}
      }

    export namespace Applications {
        
/**
 * @description **Required ACL:** `confd.applications.read`
 * @tags applications
 * @name ListApplications
 * @summary List application
 * @request GET:/applications
 * @secure
*/
export namespace ListApplications {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListApplicationsData;
}
        
/**
 * @description **Required ACL:** `confd.applications.create`
 * @tags applications
 * @name CreateApplication
 * @summary Create application
 * @request POST:/applications
 * @secure
*/
export namespace CreateApplication {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Application;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateApplicationData;
}
        
/**
 * @description **Required ACL:** `confd.applications.{application_uuid}.delete`
 * @tags applications
 * @name DeleteApplication
 * @summary Delete application
 * @request DELETE:/applications/{application_uuid}
 * @secure
*/
export namespace DeleteApplication {
  export type RequestParams = {
  /** Application's UUID */
    applicationUuid: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.applications.{application_uuid}.read`
 * @tags applications
 * @name GetApplication
 * @summary Get application
 * @request GET:/applications/{application_uuid}
 * @secure
*/
export namespace GetApplication {
  export type RequestParams = {
  /** Application's UUID */
    applicationUuid: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetApplicationData;
}
        
/**
 * @description **Required ACL:** `confd.applications.{application_uuid}.update`
 * @tags applications
 * @name UpdateApplication
 * @summary Update application
 * @request PUT:/applications/{application_uuid}
 * @secure
*/
export namespace UpdateApplication {
  export type RequestParams = {
  /** Application's UUID */
    applicationUuid: number,

};
  export type RequestQuery = {};
  export type RequestBody = Application;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Asterisk {
        
/**
 * @description **Required ACL:** `confd.asterisk.confbridge.wazo_default_bridge.read`
 * @tags asterisk, conferences
 * @name ListAsteriskConfbridgeWazoDefaultBridge
 * @summary List ConfBridge wazo_default_bridge options
 * @request GET:/asterisk/confbridge/wazo_default_bridge
 * @secure
*/
export namespace ListAsteriskConfbridgeWazoDefaultBridge {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskConfbridgeWazoDefaultBridgeData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.confbridge.wazo_default_bridge.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined. All available configuration options are listed in the [sample](https://raw.githubusercontent.com/asterisk/asterisk/master/configs/samples/confbridge.conf.sample) Asterisk configuration file.
 * @tags asterisk, conferences
 * @name UpdateAsteriskConfbridgeWazoDefaultBridge
 * @summary Update ConfBridge wazo_default_bridge option
 * @request PUT:/asterisk/confbridge/wazo_default_bridge
 * @secure
*/
export namespace UpdateAsteriskConfbridgeWazoDefaultBridge {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = ConfBridgeConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.confbridge.wazo_default_user.read`
 * @tags asterisk, conferences
 * @name ListAsteriskConfbridgeWazoDefaultUser
 * @summary List ConfBridge wazo_default_user options
 * @request GET:/asterisk/confbridge/wazo_default_user
 * @secure
*/
export namespace ListAsteriskConfbridgeWazoDefaultUser {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskConfbridgeWazoDefaultUserData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.confbridge.wazo_default_user.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined. All available configuration options are listed in the [sample](https://raw.githubusercontent.com/asterisk/asterisk/master/configs/samples/confbridge.conf.sample) Asterisk configuration file.
 * @tags asterisk, conferences
 * @name UpdateAsteriskConfbridgeWazoDefaultUser
 * @summary Update ConfBridge wazo_default_user option
 * @request PUT:/asterisk/confbridge/wazo_default_user
 * @secure
*/
export namespace UpdateAsteriskConfbridgeWazoDefaultUser {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = ConfBridgeConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.applicationmap.read`
 * @tags asterisk
 * @name ListAsteriskFeaturesApplicationmap
 * @summary List Features applicationmap options
 * @request GET:/asterisk/features/applicationmap
 * @secure
*/
export namespace ListAsteriskFeaturesApplicationmap {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskFeaturesApplicationmapData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.applicationmap.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskFeaturesApplicationmap
 * @summary Update Features applicationmap option
 * @request PUT:/asterisk/features/applicationmap
 * @secure
*/
export namespace UpdateAsteriskFeaturesApplicationmap {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = FeaturesConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.featuremap.read`
 * @tags asterisk
 * @name ListAsteriskFeaturesFeaturemap
 * @summary List Features featuremap options
 * @request GET:/asterisk/features/featuremap
 * @secure
*/
export namespace ListAsteriskFeaturesFeaturemap {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskFeaturesFeaturemapData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.featuremap.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskFeaturesFeaturemap
 * @summary Update Features featuremap option
 * @request PUT:/asterisk/features/featuremap
 * @secure
*/
export namespace UpdateAsteriskFeaturesFeaturemap {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = FeaturesConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.general.read`
 * @tags asterisk
 * @name ListAsteriskFeaturesGeneral
 * @summary List Features general options
 * @request GET:/asterisk/features/general
 * @secure
*/
export namespace ListAsteriskFeaturesGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskFeaturesGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.features.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskFeaturesGeneral
 * @summary Update Features general option
 * @request PUT:/asterisk/features/general
 * @secure
*/
export namespace UpdateAsteriskFeaturesGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = FeaturesConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.hep.general.read`
 * @tags asterisk
 * @name ListAsteriskHepGeneral
 * @summary List HEP general options
 * @request GET:/asterisk/hep/general
 * @secure
*/
export namespace ListAsteriskHepGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskHepGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.hep.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskHepGeneral
 * @summary Update HEP general option
 * @request PUT:/asterisk/hep/general
 * @secure
*/
export namespace UpdateAsteriskHepGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = HEPConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.iax.callnumberlimits.read`
 * @tags asterisk, iax
 * @name ListAsteriskIaxCallnumberlimits
 * @summary List IAX callnumberlimits options
 * @request GET:/asterisk/iax/callnumberlimits
 * @secure
*/
export namespace ListAsteriskIaxCallnumberlimits {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskIaxCallnumberlimitsData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.iax.callnumberlimits.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk, iax
 * @name UpdateAsteriskIaxCallnumberlimits
 * @summary Update IAX callnumberlimits option
 * @request PUT:/asterisk/iax/callnumberlimits
 * @secure
*/
export namespace UpdateAsteriskIaxCallnumberlimits {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = IAXCallNumberLimitss;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.iax.general.read`
 * @tags asterisk
 * @name ListAsteriskIaxGeneral
 * @summary List IAX general options
 * @request GET:/asterisk/iax/general
 * @secure
*/
export namespace ListAsteriskIaxGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskIaxGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.iax.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskIaxGeneral
 * @summary Update IAX general option
 * @request PUT:/asterisk/iax/general
 * @secure
*/
export namespace UpdateAsteriskIaxGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = IAXGeneral;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:**: `confd.asterisk.pjsip.doc.read` List all available configuration options for PJSIP, those values are used to validate to content of POST and PUT requests.
 * @tags asterisk, sip
 * @name ShowPjsipDoc
 * @summary List all PJSIP configuration options
 * @request GET:/asterisk/pjsip/doc
 * @secure
*/
export namespace ShowPjsipDoc {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ShowPjsipDocData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.pjsip.global.read`
 * @tags asterisk, sip
 * @name ListAsteriskPjsipGlobal
 * @summary List of PJSIP options for the `global` section
 * @request GET:/asterisk/pjsip/global
 * @secure
*/
export namespace ListAsteriskPjsipGlobal {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskPjsipGlobalData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.pjsip.global.update` The PJSIP global configuration is shared among all tenants of an instance. **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags sip, asterisk
 * @name UpdateAsteriskPjsipGlobal
 * @summary Update PJSIP section options
 * @request PUT:/asterisk/pjsip/global
 * @secure
*/
export namespace UpdateAsteriskPjsipGlobal {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = PJSIPGlobal;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.pjsip.system.read`
 * @tags asterisk, sip
 * @name ListAsteriskPjsipSystem
 * @summary List of PJSIP options for the `system` section
 * @request GET:/asterisk/pjsip/system
 * @secure
*/
export namespace ListAsteriskPjsipSystem {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskPjsipSystemData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.pjsip.system.update` The PJSIP system configuration is shared among all tenants of an instance. **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags sip, asterisk
 * @name UpdateAsteriskPjsipSystem
 * @summary Update PJSIP section options
 * @request PUT:/asterisk/pjsip/system
 * @secure
*/
export namespace UpdateAsteriskPjsipSystem {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = PJSIPSystem;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.queue.general.read`
 * @tags asterisk
 * @name ListAsteriskQueueGeneral
 * @summary List Queue general options
 * @request GET:/asterisk/queues/general
 * @secure
*/
export namespace ListAsteriskQueueGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskQueueGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.queue.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskQueueGeneral
 * @summary Update Queue general option
 * @request PUT:/asterisk/queues/general
 * @secure
*/
export namespace UpdateAsteriskQueueGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = QueueGeneral;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.rtp.general.read`
 * @tags asterisk
 * @name ListAsteriskRtpGeneral
 * @summary List RTP general options
 * @request GET:/asterisk/rtp/general
 * @secure
*/
export namespace ListAsteriskRtpGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskRtpGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.rtp.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskRtpGeneral
 * @summary Update RTP general option
 * @request PUT:/asterisk/rtp/general
 * @secure
*/
export namespace UpdateAsteriskRtpGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = RTPConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.rtp.ice_host_candidates.read`
 * @tags asterisk
 * @name ListAsteriskRtpIceHostCandidates
 * @summary List RTP ice_host_candidates options
 * @request GET:/asterisk/rtp/ice_host_candidates
 * @secure
*/
export namespace ListAsteriskRtpIceHostCandidates {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskRtpIceHostCandidatesData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.rtp.ice_host_candidates.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskRtpIceHostCandidates
 * @summary Update RTP ice_host_candidates option
 * @request PUT:/asterisk/rtp/ice_host_candidates
 * @secure
*/
export namespace UpdateAsteriskRtpIceHostCandidates {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = RTPConfiguration;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.sccp.general.read`
 * @tags asterisk, sccp
 * @name ListAsteriskSccpGeneral
 * @summary List SCCP general options
 * @request GET:/asterisk/sccp/general
 * @secure
*/
export namespace ListAsteriskSccpGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskSccpGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.sccp.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk, sccp
 * @name UpdateAsteriskSccpGeneral
 * @summary Update SCCP general option
 * @request PUT:/asterisk/sccp/general
 * @secure
*/
export namespace UpdateAsteriskSccpGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = SCCPGeneral;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.voicemail.general.read`
 * @tags asterisk
 * @name ListAsteriskVoicemailGeneral
 * @summary List Voicemail general options
 * @request GET:/asterisk/voicemail/general
 * @secure
*/
export namespace ListAsteriskVoicemailGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskVoicemailGeneralData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.voicemail.general.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk
 * @name UpdateAsteriskVoicemailGeneral
 * @summary Update Voicemail general option
 * @request PUT:/asterisk/voicemail/general
 * @secure
*/
export namespace UpdateAsteriskVoicemailGeneral {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = VoicemailGeneral;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.voicemail.zonemessages.read`
 * @tags asterisk, voicemails
 * @name ListAsteriskVoicemailZonemessages
 * @summary List Voicemail zonemessages options
 * @request GET:/asterisk/voicemail/zonemessages
 * @secure
*/
export namespace ListAsteriskVoicemailZonemessages {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListAsteriskVoicemailZonemessagesData;
}
        
/**
 * @description **Required ACL:** `confd.asterisk.voicemail.zonemessages.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags asterisk, voicemails
 * @name UpdateAsteriskVoicemailZonemessages
 * @summary Update Voicemail zonemessages option
 * @request PUT:/asterisk/voicemail/zonemessages
 * @secure
*/
export namespace UpdateAsteriskVoicemailZonemessages {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = VoicemailZoneMessages;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Callfilters {
        
/**
 * @description **Required ACL:** `confd.callfilters.read`
 * @tags callfilters
 * @name ListCallFilters
 * @summary List call filters
 * @request GET:/callfilters
 * @secure
*/
export namespace ListCallFilters {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListCallFiltersData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.create`
 * @tags callfilters
 * @name CreateCallfilter
 * @summary Create call filter
 * @request POST:/callfilters
 * @secure
*/
export namespace CreateCallfilter {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = CallFilter;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateCallfilterData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.delete` . The call filter will also be removed from all users, groups, incoming calls and outgoing calls.
 * @tags callfilters
 * @name DeleteCallfilter
 * @summary Delete call filter
 * @request DELETE:/callfilters/{callfilter_id}
 * @secure
*/
export namespace DeleteCallfilter {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.read`
 * @tags callfilters
 * @name GetCallfilter
 * @summary Get call filter
 * @request GET:/callfilters/{callfilter_id}
 * @secure
*/
export namespace GetCallfilter {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetCallfilterData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.update`
 * @tags callfilters
 * @name UpdateCallfilter
 * @summary Update call filter
 * @request PUT:/callfilters/{callfilter_id}
 * @secure
*/
export namespace UpdateCallfilter {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = CallFilter;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.fallbacks.read`
 * @tags callfilters
 * @name GetCallFilterFallback
 * @summary List all fallbacks for call filter
 * @request GET:/callfilters/{callfilter_id}/fallbacks
 * @secure
*/
export namespace GetCallFilterFallback {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetCallFilterFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.fallbacks.update` **WARNING** This endpoint delete all fields that are not defined.
 * @tags callfilters
 * @name UpdateCallFilterFallback
 * @summary Update call filter's fallbacks
 * @request PUT:/callfilters/{callfilter_id}/fallbacks
 * @secure
*/
export namespace UpdateCallFilterFallback {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = CallFilterFallbacks;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateCallFilterFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.recipients.users.update` **WARNING** This endpoint remove all recipients which are not defined.
 * @tags callfilters, users
 * @name UpdateCallFilterCallerUsers
 * @summary Update call filter and recipients
 * @request PUT:/callfilters/{callfilter_id}/recipients/users
 * @secure
*/
export namespace UpdateCallFilterCallerUsers {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = CallFilterRecipientUsersUuid;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateCallFilterCallerUsersData;
}
        
/**
 * @description **Required ACL:** `confd.callfilters.{callfilter_id}.surrogates.users.update` **WARNING** This endpoint remove all surrogates which are not defined.
 * @tags callfilters, users
 * @name UpdateCallFilterMemberUsers
 * @summary Update call filter and surrogates
 * @request PUT:/callfilters/{callfilter_id}/surrogates/users
 * @secure
*/
export namespace UpdateCallFilterMemberUsers {
  export type RequestParams = {
  /** Call Filter's ID */
    callfilterId: number,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateCallFilterMemberUsersData;
}
      }

    export namespace Callpermissions {
        
/**
 * @description **Required ACL:** `confd.callpermissions.read`
 * @tags callpermissions
 * @name ListCallpermissions
 * @summary List call permissions
 * @request GET:/callpermissions
 * @secure
*/
export namespace ListCallpermissions {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListCallpermissionsData;
}
        
/**
 * @description **Required ACL:** `confd.callpermissions.create`
 * @tags callpermissions
 * @name CreateCallpermission
 * @summary Create call permission
 * @request POST:/callpermissions
 * @secure
*/
export namespace CreateCallpermission {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = CallPermission;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateCallpermissionData;
}
        
/**
 * @description **Required ACL:** `confd.callpermissions.{callpermission_id}.delete` . The call permission will also be removed from all users, groups, incoming calls and outgoing calls.
 * @tags callpermissions
 * @name DeleteCallpermission
 * @summary Delete call permission
 * @request DELETE:/callpermissions/{callpermission_id}
 * @secure
*/
export namespace DeleteCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.callpermissions.{callpermission_id}.read`
 * @tags callpermissions
 * @name GetCallpermission
 * @summary Get call permission
 * @request GET:/callpermissions/{callpermission_id}
 * @secure
*/
export namespace GetCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetCallpermissionData;
}
        
/**
 * @description **Required ACL:** `confd.callpermissions.{callpermission_id}.update`
 * @tags callpermissions
 * @name UpdateCallpermission
 * @summary Update call permission
 * @request PUT:/callpermissions/{callpermission_id}
 * @secure
*/
export namespace UpdateCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = CallPermission;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Callpickups {
        
/**
 * @description **Required ACL:** `confd.callpickups.read`
 * @tags callpickups
 * @name ListCallPickups
 * @summary List call pickups
 * @request GET:/callpickups
 * @secure
*/
export namespace ListCallPickups {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListCallPickupsData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.create`
 * @tags callpickups
 * @name CreateCallpickup
 * @summary Create call pickup
 * @request POST:/callpickups
 * @secure
*/
export namespace CreateCallpickup {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = CallPickup;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateCallpickupData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.delete`
 * @tags callpickups
 * @name DeleteCallpickup
 * @summary Delete call pickup
 * @request DELETE:/callpickups/{callpickup_id}
 * @secure
*/
export namespace DeleteCallpickup {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.read`
 * @tags callpickups
 * @name GetCallpickup
 * @summary Get call pickup
 * @request GET:/callpickups/{callpickup_id}
 * @secure
*/
export namespace GetCallpickup {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetCallpickupData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.update`
 * @tags callpickups
 * @name UpdateCallpickup
 * @summary Update call pickup
 * @request PUT:/callpickups/{callpickup_id}
 * @secure
*/
export namespace UpdateCallpickup {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = CallPickup;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.interceptors.groups.update` **WARNING** This endpoint remove all interceptors which are not defined.
 * @tags callpickups, groups
 * @name UpdateCallPickupInterceptorGroups
 * @summary Update call pickup and interceptors
 * @request PUT:/callpickups/{callpickup_id}/interceptors/groups
 * @secure
*/
export namespace UpdateCallPickupInterceptorGroups {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = GroupsID;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateCallPickupInterceptorGroupsData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.interceptors.users.update` **WARNING** This endpoint remove all interceptors which are not defined.
 * @tags callpickups, users
 * @name UpdateCallPickupInterceptorUsers
 * @summary Update call pickup and interceptors
 * @request PUT:/callpickups/{callpickup_id}/interceptors/users
 * @secure
*/
export namespace UpdateCallPickupInterceptorUsers {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateCallPickupInterceptorUsersData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.targets.groups.update` **WARNING** This endpoint remove all targets which are not defined.
 * @tags callpickups, groups
 * @name UpdateCallPickupTargetGroups
 * @summary Update call pickup and targets
 * @request PUT:/callpickups/{callpickup_id}/targets/groups
 * @secure
*/
export namespace UpdateCallPickupTargetGroups {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = GroupsID;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateCallPickupTargetGroupsData;
}
        
/**
 * @description **Required ACL:** `confd.callpickups.{callpickup_id}.targets.users.update` **WARNING** This endpoint remove all targets which are not defined.
 * @tags callpickups, users
 * @name UpdateCallPickupTargetUsers
 * @summary Update call pickup and targets
 * @request PUT:/callpickups/{callpickup_id}/targets/users
 * @secure
*/
export namespace UpdateCallPickupTargetUsers {
  export type RequestParams = {
  /** Call Pickup's ID */
    callpickupId: number,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateCallPickupTargetUsersData;
}
      }

    export namespace Conferences {
        
/**
 * @description **Required ACL:** `confd.conferences.read`
 * @tags conferences
 * @name ListConferences
 * @summary List conference
 * @request GET:/conferences
 * @secure
*/
export namespace ListConferences {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListConferencesData;
}
        
/**
 * @description **Required ACL:** `confd.conferences.create` All conferences have the same menu. Please consult the asterisk [documentation](https://raw.githubusercontent.com/asterisk/asterisk/master/configs/samples/confbridge.conf.sample) for definitions: ``` * = playback_and_continue 1 = toggle_mute 4 = decrease_listening_volume 5 = reset_listening_volume 6 = increase_listening_volume 7 = decrease_talking_volume 8 = reset_talking_volume 9 = increase_talking_volume ``` And the following options are added to the admin user: ``` 2 = admin_toggle_conference_lock 3 = admin_kick_last 0 = admin_toggle_mute_participants' ```
 * @tags conferences
 * @name CreateConference
 * @summary Create conference
 * @request POST:/conferences
 * @secure
*/
export namespace CreateConference {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Conference;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateConferenceData;
}
        
/**
 * @description **Required ACL:** `confd.conferences.{conference_id}.delete`
 * @tags conferences
 * @name DeleteConference
 * @summary Delete conference
 * @request DELETE:/conferences/{conference_id}
 * @secure
*/
export namespace DeleteConference {
  export type RequestParams = {
  /** Conference's ID */
    conferenceId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.conferences.{conference_id}.read`
 * @tags conferences
 * @name GetConference
 * @summary Get conference
 * @request GET:/conferences/{conference_id}
 * @secure
*/
export namespace GetConference {
  export type RequestParams = {
  /** Conference's ID */
    conferenceId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetConferenceData;
}
        
/**
 * @description **Required ACL:** `confd.conferences.{conference_id}.update`
 * @tags conferences
 * @name UpdateConference
 * @summary Update conference
 * @request PUT:/conferences/{conference_id}
 * @secure
*/
export namespace UpdateConference {
  export type RequestParams = {
  /** Conference's ID */
    conferenceId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Conference;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.conferences.{conference_id}.extensions.{extension_id}.delete`
 * @tags conferences, extensions
 * @name DissociateConferenceExtension
 * @summary Dissociate conference and extension
 * @request DELETE:/conferences/{conference_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateConferenceExtension {
  export type RequestParams = {
  /** Conference's ID */
    conferenceId: number,
    extensionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateConferenceExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.conferences.{conference_id}.extensions.{extension_id}.update`
 * @tags conferences, extensions
 * @name AssociateConferenceExtension
 * @summary Associate conference and extension
 * @request PUT:/conferences/{conference_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateConferenceExtension {
  export type RequestParams = {
  /** Conference's ID */
    conferenceId: number,
    extensionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateConferenceExtensionData;
}
      }

    export namespace Configuration {
        
/**
 * @description **Required ACL:** `confd.configuration.live_reload.read`
 * @tags configuration
 * @name GetConfiguration
 * @summary Get live reload status
 * @request GET:/configuration/live_reload
 * @secure
*/
export namespace GetConfiguration {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetConfigurationData;
}
        
/**
 * @description **Required ACL:** `confd.configuration.live_reload.update`
 * @tags configuration
 * @name UpdateConfiguration
 * @summary Update live reload status
 * @request PUT:/configuration/live_reload
 * @secure
*/
export namespace UpdateConfiguration {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = LiveReload;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Contexts {
        
/**
 * @description **Required ACL:** `confd.contexts.read`
 * @tags contexts
 * @name ListContexts
 * @summary List contexts
 * @request GET:/contexts
 * @secure
*/
export namespace ListContexts {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListContextsData;
}
        
/**
 * @description **Required ACL:** `confd.contexts.create`
 * @tags contexts
 * @name CreateContext
 * @summary Create context
 * @request POST:/contexts
 * @secure
*/
export namespace CreateContext {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Context;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateContextData;
}
        
/**
 * @description **Required ACL:** `confd.contexts.{context_id}.delete`
 * @tags contexts
 * @name DeleteContext
 * @summary Delete context
 * @request DELETE:/contexts/{context_id}
 * @secure
*/
export namespace DeleteContext {
  export type RequestParams = {
  /** context's ID */
    contextId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.contexts.{context_id}.read`
 * @tags contexts
 * @name GetContext
 * @summary Get context
 * @request GET:/contexts/{context_id}
 * @secure
*/
export namespace GetContext {
  export type RequestParams = {
  /** context's ID */
    contextId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetContextData;
}
        
/**
 * @description **Required ACL:** `confd.contexts.{context_id}.update`
 * @tags contexts
 * @name UpdateContext
 * @summary Update context
 * @request PUT:/contexts/{context_id}
 * @secure
*/
export namespace UpdateContext {
  export type RequestParams = {
  /** context's ID */
    contextId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Context;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.contexts.{context_id}.contexts.update`
 * @tags contexts
 * @name AssociateContextContexts
 * @summary Include contexts inside context
 * @request PUT:/contexts/{context_id}/contexts
 * @secure
*/
export namespace AssociateContextContexts {
  export type RequestParams = {
  /** context's ID */
    contextId: number,

};
  export type RequestQuery = {};
  export type RequestBody = ContextsId;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateContextContextsData;
}
        
/**
 * @description **Required ACL:** `confd.contexts.{context_id}.ranges.{range_type}.read` List the extension range for a given context and resource type. When filtering using the `availability=available` query string the range will be split into multiple sub-ranges to only contain extension numbers that are available. If a given extension exists but is not assigned to any resource it will still be considered to be unavailable and therefore will not be included in the list of available extension
 * @tags contexts
 * @name ListContextsRange
 * @summary List contexts range
 * @request GET:/contexts/{context_id}/ranges/{range_type}
 * @secure
*/
export namespace ListContextsRange {
  export type RequestParams = {
  /** context's ID */
    contextId: number,
  /** The extension range destination type */
    rangeType: "user" | "group" | "queue" | "conference" | "incall",

};
  export type RequestQuery = {
  /**
   * Determines if the ranges are going to be split to display only ranges with available extensions.
   * @default "available"
   */
    availability?: "available" | "all",
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListContextsRangeData;
}
      }

    export namespace Devices {
        
/**
 * @description **Required ACL:** `confd.devices.read`
 * @tags devices
 * @name ListDevices
 * @summary List devices
 * @request GET:/devices
 * @secure
*/
export namespace ListDevices {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListDevicesData;
}
        
/**
 * @description **Required ACL:** `confd.devices.create`
 * @tags devices
 * @name CreateDevice
 * @summary Create device
 * @request POST:/devices
 * @secure
*/
export namespace CreateDevice {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Device;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateDeviceData;
}
        
/**
 * @description **Required ACL:** `confd.devices.unallocated.read`
 * @tags devices
 * @name ListUnallocatedDevices
 * @summary List unallocated devices
 * @request GET:/devices/unallocated
 * @secure
*/
export namespace ListUnallocatedDevices {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListUnallocatedDevicesData;
}
        
/**
 * @description **Required ACL:** `confd.devices.unallocated.{device_id}.update`
 * @tags devices
 * @name AssignUnallocatedDeviceTenant
 * @summary Assign unallocated device tenant
 * @request PUT:/devices/unallocated/{device_id}
 * @secure
*/
export namespace AssignUnallocatedDeviceTenant {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.delete` A device can not be deleted if it is linked to a line. You must dissociate the line and the device first.
 * @tags devices
 * @name DeleteDevice
 * @summary Delete device
 * @request DELETE:/devices/{device_id}
 * @secure
*/
export namespace DeleteDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.read`
 * @tags devices
 * @name GetDevice
 * @summary Get device
 * @request GET:/devices/{device_id}
 * @secure
*/
export namespace GetDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetDeviceData;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.update`
 * @tags devices
 * @name UpdateDevice
 * @summary Update device
 * @request PUT:/devices/{device_id}
 * @secure
*/
export namespace UpdateDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = Device;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.autoprov.read` Resets a device into ‘autoprov’ mode. Once in autoprov, a device can be reprovisionned using another provisioning code. The device’s configuration will be lost when reset to autoprov mode.
 * @tags devices
 * @name ResetDeviceAutoprov
 * @summary Reset device to autoprov
 * @request GET:/devices/{device_id}/autoprov
 * @secure
*/
export namespace ResetDeviceAutoprov {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ResetDeviceAutoprovData;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.lines.read`
 * @tags lines, devices
 * @name GetDeviceLineAssociation
 * @summary List lines associated to device
 * @request GET:/devices/{device_id}/lines
 * @secure
*/
export namespace GetDeviceLineAssociation {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetDeviceLineAssociationData;
}
        
/**
 * @description **Required ACL:** `confd.devices.{device_id}.synchronize.read` Synchronize a device’s configuration. Used when a configuration has been modified and the changes need to be sent to the device.
 * @tags devices
 * @name SynchronizeDevice
 * @summary Synchronize device
 * @request GET:/devices/{device_id}/synchronize
 * @secure
*/
export namespace SynchronizeDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = SynchronizeDeviceData;
}
      }

    export namespace Dhcp {
        
/**
 * @description **Required ACL:** `confd.dhcp.read`
 * @tags dhcp
 * @name GetDhcp
 * @summary Get DHCP configuration
 * @request GET:/dhcp
 * @secure
*/
export namespace GetDhcp {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetDhcpData;
}
        
/**
 * @description **Required ACL:** `confd.dhcp.update`
 * @tags dhcp
 * @name UpdateDhcp
 * @summary Update DHCP configuration
 * @request PUT:/dhcp
 * @secure
*/
export namespace UpdateDhcp {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = DHCP;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Emails {
        
/**
 * @description **Required ACL:** `confd.emails.read`
 * @tags emails
 * @name GetEmailsConfig
 * @summary Get e-mail configuration
 * @request GET:/emails
 * @secure
*/
export namespace GetEmailsConfig {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetEmailsConfigData;
}
        
/**
 * @description **Required ACL:** `confd.emails.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags emails
 * @name UpdateEmailsConfig
 * @summary Update e-mail configuration
 * @request PUT:/emails
 * @secure
*/
export namespace UpdateEmailsConfig {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EmailConfig;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Endpoints {
        
/**
 * @description **Required ACL:** `confd.endpoints.custom.read`
 * @tags endpoints, custom
 * @name ListEndpointsCustom
 * @summary List Custom endpoints
 * @request GET:/endpoints/custom
 * @secure
*/
export namespace ListEndpointsCustom {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListEndpointsCustomData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.custom.create`
 * @tags endpoints, custom
 * @name CreateEndpointCustom
 * @summary Create Custom endpoint
 * @request POST:/endpoints/custom
 * @secure
*/
export namespace CreateEndpointCustom {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EndpointCustom;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.custom.{custom_id}.delete`
 * @tags endpoints, custom
 * @name DeleteEndpointCustom
 * @summary Delete Custom Endpoint
 * @request DELETE:/endpoints/custom/{custom_id}
 * @secure
*/
export namespace DeleteEndpointCustom {
  export type RequestParams = {
    customId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.custom.{custom_id}.read`
 * @tags endpoints, custom
 * @name GetEndpointCustom
 * @summary Get Custom Endpoint
 * @request GET:/endpoints/custom/{custom_id}
 * @secure
*/
export namespace GetEndpointCustom {
  export type RequestParams = {
    customId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.custom.{custom_id}.update`
 * @tags endpoints, custom
 * @name UpdateEndpointCustom
 * @summary Update Custom Endpoint
 * @request PUT:/endpoints/custom/{custom_id}
 * @secure
*/
export namespace UpdateEndpointCustom {
  export type RequestParams = {
    customId: number,

};
  export type RequestQuery = {};
  export type RequestBody = EndpointCustom;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.iax.read`
 * @tags endpoints, iax
 * @name ListEndpointsIax
 * @summary List IAX endpoints
 * @request GET:/endpoints/iax
 * @secure
*/
export namespace ListEndpointsIax {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListEndpointsIaxData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.iax.create`
 * @tags endpoints, iax
 * @name CreateEndpointIax
 * @summary Create IAX endpoint
 * @request POST:/endpoints/iax
 * @secure
*/
export namespace CreateEndpointIax {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EndpointIAX;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateEndpointIaxData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.iax.{iax_id}.delete`
 * @tags endpoints, iax
 * @name DeleteEndpointIax
 * @summary Delete IAX Endpoint
 * @request DELETE:/endpoints/iax/{iax_id}
 * @secure
*/
export namespace DeleteEndpointIax {
  export type RequestParams = {
    iaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.iax.{iax_id}.read`
 * @tags endpoints, iax
 * @name GetEndpointIax
 * @summary Get IAX Endpoint
 * @request GET:/endpoints/iax/{iax_id}
 * @secure
*/
export namespace GetEndpointIax {
  export type RequestParams = {
    iaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetEndpointIaxData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.iax.{iax_id}.update`
 * @tags endpoints, iax
 * @name UpdateEndpointIax
 * @summary Update IAX Endpoint
 * @request PUT:/endpoints/iax/{iax_id}
 * @secure
*/
export namespace UpdateEndpointIax {
  export type RequestParams = {
    iaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = EndpointIAX;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sccp.read`
 * @tags endpoints, sccp
 * @name ListEndpointsSccp
 * @summary List SCCP endpoints
 * @request GET:/endpoints/sccp
 * @secure
*/
export namespace ListEndpointsSccp {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListEndpointsSccpData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sccp.create`
 * @tags endpoints, sccp
 * @name CreateEndpointSccp
 * @summary Create SCCP endpoint
 * @request POST:/endpoints/sccp
 * @secure
*/
export namespace CreateEndpointSccp {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EndpointSccp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateEndpointSccpData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sccp.{sccp_id}.delete`
 * @tags endpoints, sccp
 * @name DeleteEndpointSccp
 * @summary Delete SCCP Endpoint
 * @request DELETE:/endpoints/sccp/{sccp_id}
 * @secure
*/
export namespace DeleteEndpointSccp {
  export type RequestParams = {
    sccpId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sccp.{sccp_id}.read`
 * @tags endpoints, sccp
 * @name GetEndpointSccp
 * @summary Get SCCP Endpoint
 * @request GET:/endpoints/sccp/{sccp_id}
 * @secure
*/
export namespace GetEndpointSccp {
  export type RequestParams = {
    sccpId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetEndpointSccpData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sccp.{sccp_id}.update`
 * @tags endpoints, sccp
 * @name UpdateEndpointSccp
 * @summary Update SCCP Endpoint
 * @request PUT:/endpoints/sccp/{sccp_id}
 * @secure
*/
export namespace UpdateEndpointSccp {
  export type RequestParams = {
    sccpId: number,

};
  export type RequestQuery = {};
  export type RequestBody = EndpointSccp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.read` List all SIP configurations, each individual configuration includes only fields that it defines. Inherited fields from the templates or default values are not returned here.
 * @tags endpoints, sip
 * @name ListEndpointsSip
 * @summary List SIP endpoints
 * @request GET:/endpoints/sip
 * @secure
*/
export namespace ListEndpointsSip {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Search filter for resource UUID, can be used to search multiple elements. Using a comma separated list of UUID
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
    uuid?: (string)[],

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListEndpointsSipData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.create` Create a new SIP endpoint. This endpoint can inherit from other endpoints, only modify fields that have to be modified.
 * @tags endpoints, sip
 * @name CreateEndpointSip
 * @summary Create a SIP endpoint
 * @request POST:/endpoints/sip
 * @secure
*/
export namespace CreateEndpointSip {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EndpointSIP;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.templates.read` List all SIP configuration templates, each individual configuration includes only fields that it defines. Inherited fields from the templates or default values are not returned here.
 * @tags endpoints, sip
 * @name ListEndpointsSipTemplates
 * @summary List SIP endpoints templates
 * @request GET:/endpoints/sip/templates
 * @secure
*/
export namespace ListEndpointsSipTemplates {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListEndpointsSipTemplatesData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.templates.create` Create a new SIP endpoint configuration template. This endpoint can inherit from other templates, only modify fields that have to be modified.
 * @tags endpoints, sip
 * @name CreateEndpointSipTemplate
 * @summary Create a SIP endpoint template
 * @request POST:/endpoints/sip/templates
 * @secure
*/
export namespace CreateEndpointSipTemplate {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = EndpointSIP;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateEndpointSipTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.templates.{template_uuid}.delete`
 * @tags endpoints, sip
 * @name DeleteEndpointSipTemplate
 * @summary Delete SIP Endpoint Template
 * @request DELETE:/endpoints/sip/templates/{template_uuid}
 * @secure
*/
export namespace DeleteEndpointSipTemplate {
  export type RequestParams = {
    templateUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.templates.{template_uuid}.read`
 * @tags sip, endpoints
 * @name GetEndpointSipTemplate
 * @summary Get SIP Endpoint template
 * @request GET:/endpoints/sip/templates/{template_uuid}
 * @secure
*/
export namespace GetEndpointSipTemplate {
  export type RequestParams = {
    templateUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetEndpointSipTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.templates.{template_uuid}.update`
 * @tags endpoints, sip
 * @name UpdateEndpointSipTemplate
 * @summary Update SIP Endpoint Template
 * @request PUT:/endpoints/sip/templates/{template_uuid}
 * @secure
*/
export namespace UpdateEndpointSipTemplate {
  export type RequestParams = {
    templateUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = EndpointSIP;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.{sip_uuid}.delete`
 * @tags endpoints, sip
 * @name DeleteEndpointSip
 * @summary Delete SIP Endpoint
 * @request DELETE:/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace DeleteEndpointSip {
  export type RequestParams = {
    sipUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.{sip_uuid}.read`
 * @tags sip, endpoints
 * @name GetEndpointSip
 * @summary Get SIP Endpoint
 * @request GET:/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace GetEndpointSip {
  export type RequestParams = {
    sipUuid: string,

};
  export type RequestQuery = {
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.endpoints.sip.{sip_uuid}.update`
 * @tags endpoints, sip
 * @name UpdateEndpointSip
 * @summary Update SIP Endpoint
 * @request PUT:/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace UpdateEndpointSip {
  export type RequestParams = {
    sipUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = EndpointSIP;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Extensions {
        
/**
 * @description **Required ACL:** `confd.extensions.read`
 * @tags extensions
 * @name ListExtensions
 * @summary List extensions
 * @request GET:/extensions
 * @secure
*/
export namespace ListExtensions {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Filter extensions by context name */
    context?: string,
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Filter extensions by exten number */
    exten?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** Filter extensions of a certain type. Internal: Used for calling a line with an internal number (e.g. “1000@default”). Incall: Used for calling a line from the outside (e.g. “from-extern” with a DID) */
    type?: "internal" | "incall",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListExtensionsData;
}
        
/**
 * @description **Required ACL:** `confd.extensions.create` The extension number must be included in one of the extension ranges for the given context.
 * @tags extensions
 * @name CreateExtension
 * @summary Create extension
 * @request POST:/extensions
 * @secure
*/
export namespace CreateExtension {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Extension;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.extensions.features.read`
 * @tags extensions
 * @name ListExtensionsFeatures
 * @summary List extensions features
 * @request GET:/extensions/features
 * @secure
*/
export namespace ListExtensionsFeatures {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListExtensionsFeaturesData;
}
        
/**
 * @description **Required ACL:** `confd.extensions.features.{extension_uuid}.read`
 * @tags extensions
 * @name GetExtensionFeature
 * @summary Get extension feature
 * @request GET:/extensions/features/{extension_uuid}
 * @secure
*/
export namespace GetExtensionFeature {
  export type RequestParams = {
    extensionUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetExtensionFeatureData;
}
        
/**
 * @description **Required ACL:** `confd.extensions.features.{extension_uuid}.update`
 * @tags extensions
 * @name UpdateExtensionFeature
 * @summary Update extension
 * @request PUT:/extensions/features/{extension_uuid}
 * @secure
*/
export namespace UpdateExtensionFeature {
  export type RequestParams = {
    extensionUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = ExtensionFeature;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.extensions.{extension_id}.delete` An extension can not be deleted if it is associated to a line. You must delete the association first.
 * @tags extensions
 * @name DeleteExtension
 * @summary Delete extension
 * @request DELETE:/extensions/{extension_id}
 * @secure
*/
export namespace DeleteExtension {
  export type RequestParams = {
    extensionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.extensions.{extension_id}.read`
 * @tags extensions
 * @name GetExtension
 * @summary Get extension
 * @request GET:/extensions/{extension_id}
 * @secure
*/
export namespace GetExtension {
  export type RequestParams = {
    extensionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.extensions.{extension_id}.update` The new extension number must be included in one of the extension ranges for the new context.
 * @tags extensions
 * @name UpdateExtension
 * @summary Update extension
 * @request PUT:/extensions/{extension_id}
 * @secure
*/
export namespace UpdateExtension {
  export type RequestParams = {
    extensionId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Extension;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace External {
        
/**
 * @description **Required ACL:** `confd.external.apps.read`
 * @tags external_apps
 * @name ListExternalApps
 * @summary List external apps
 * @request GET:/external/apps
 * @secure
*/
export namespace ListExternalApps {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListExternalAppsData;
}
        
/**
 * @description **Required ACL:** `confd.external.apps.{app_name}.delete`
 * @tags external_apps
 * @name DeleteExternalApp
 * @summary Delete external app
 * @request DELETE:/external/apps/{app_name}
 * @secure
*/
export namespace DeleteExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.external.apps.{app_name}.read`
 * @tags external_apps
 * @name GetExternalApp
 * @summary Get external app
 * @request GET:/external/apps/{app_name}
 * @secure
*/
export namespace GetExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetExternalAppData;
}
        
/**
 * @description **Required ACL:** `confd.external.apps.{app_name}.create`
 * @tags external_apps
 * @name CreateExternalApp
 * @summary Create external app
 * @request POST:/external/apps/{app_name}
 * @secure
*/
export namespace CreateExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,

};
  export type RequestQuery = {};
  export type RequestBody = ExternalApp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateExternalAppData;
}
        
/**
 * @description **Required ACL:** `confd.external.apps.{app_name}.update`
 * @tags external_apps
 * @name UpdateExternalApp
 * @summary Update external app
 * @request PUT:/external/apps/{app_name}
 * @secure
*/
export namespace UpdateExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,

};
  export type RequestQuery = {};
  export type RequestBody = ExternalApp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Funckeys {
        
/**
 * @description **Required ACL:** `confd.funckeys.destinations.read`
 * @tags funckeys
 * @name ListFuncKeyDestinations
 * @summary List of possible func key destinations and their parameters
 * @request GET:/funckeys/destinations
 * @secure
*/
export namespace ListFuncKeyDestinations {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListFuncKeyDestinationsData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.read`
 * @tags funckeys
 * @name ListFuncKeyTemplate
 * @summary List a func key template
 * @request GET:/funckeys/templates
 * @secure
*/
export namespace ListFuncKeyTemplate {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListFuncKeyTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.create`
 * @tags funckeys
 * @name CreateFuncKeyTemplate
 * @summary Create a template of func keys
 * @request POST:/funckeys/templates
 * @secure
*/
export namespace CreateFuncKeyTemplate {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = FuncKeyTemplate;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateFuncKeyTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.delete`
 * @tags funckeys
 * @name DeleteFuncKeyTemplate
 * @summary Delete func key template
 * @request DELETE:/funckeys/templates/{template_id}
 * @secure
*/
export namespace DeleteFuncKeyTemplate {
  export type RequestParams = {
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.read`
 * @tags funckeys
 * @name GetFuncKeyTemplate
 * @summary Get a func key template
 * @request GET:/funckeys/templates/{template_id}
 * @secure
*/
export namespace GetFuncKeyTemplate {
  export type RequestParams = {
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetFuncKeyTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags funckeys
 * @name UpdateFuncKeyTemplate
 * @summary Update a func key template
 * @request PUT:/funckeys/templates/{template_id}
 * @secure
*/
export namespace UpdateFuncKeyTemplate {
  export type RequestParams = {
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = FuncKeyTemplate;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.users.read`
 * @tags funckeys, users
 * @name ListFuncKeyTemplateUserAssociations
 * @summary List users associated to template
 * @request GET:/funckeys/templates/{template_id}/users
 * @secure
*/
export namespace ListFuncKeyTemplateUserAssociations {
  export type RequestParams = {
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListFuncKeyTemplateUserAssociationsData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.{position}.delete`
 * @tags funckeys
 * @name DeleteFuncKey
 * @summary Remove func key from template
 * @request DELETE:/funckeys/templates/{template_id}/{position}
 * @secure
*/
export namespace DeleteFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.{position}.read`
 * @tags funckeys
 * @name GetFuncKey
 * @summary Get a func key inside template
 * @request GET:/funckeys/templates/{template_id}/{position}
 * @secure
*/
export namespace GetFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetFuncKeyData;
}
        
/**
 * @description **Required ACL:** `confd.funckeys.templates.{template_id}.{position}.update`
 * @tags funckeys
 * @name UpdateFuncKey
 * @summary Add/Replace a func key in a template
 * @request PUT:/funckeys/templates/{template_id}/{position}
 * @secure
*/
export namespace UpdateFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
    templateId: number,

};
  export type RequestQuery = {};
  export type RequestBody = FuncKey;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Groups {
        
/**
 * @description **Required ACL:** `confd.groups.read`
 * @tags groups
 * @name ListGroups
 * @summary List groups
 * @request GET:/groups
 * @secure
*/
export namespace ListGroups {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListGroupsData;
}
        
/**
 * @description **Required ACL:** `confd.groups.create`
 * @tags groups
 * @name CreateGroup
 * @summary Create group
 * @request POST:/groups
 * @secure
*/
export namespace CreateGroup {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Group;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateGroupData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.delete`
 * @tags groups
 * @name DeleteGroup
 * @summary Delete group
 * @request DELETE:/groups/{group_uuid}
 * @secure
*/
export namespace DeleteGroup {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.read`
 * @tags groups
 * @name GetGroup
 * @summary Get group
 * @request GET:/groups/{group_uuid}
 * @secure
*/
export namespace GetGroup {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetGroupData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.update`
 * @tags groups
 * @name UpdateGroup
 * @summary Update group
 * @request PUT:/groups/{group_uuid}
 * @secure
*/
export namespace UpdateGroup {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = Group;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.callpermissions.{call_permission_id}.delete`
 * @tags groups, callpermissions
 * @name DissociateGroupCallpermission
 * @summary Dissociate group and call permission
 * @request DELETE:/groups/{group_uuid}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace DissociateGroupCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateGroupCallpermissionData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.callpermissions.{call_permission_id}.update`
 * @tags groups, callpermissions
 * @name AssociateGroupCallpermission
 * @summary Associate group and call permission
 * @request PUT:/groups/{group_uuid}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace AssociateGroupCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.extensions.{extension_id}.delete`
 * @tags groups, extensions
 * @name DissociateGroupExtension
 * @summary Dissociate group and extension
 * @request DELETE:/groups/{group_uuid}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateGroupExtension {
  export type RequestParams = {
    extensionId: number,
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateGroupExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.extensions.{extension_id}.update`
 * @tags groups, extensions
 * @name AssociateGroupExtension
 * @summary Associate group and extension
 * @request PUT:/groups/{group_uuid}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateGroupExtension {
  export type RequestParams = {
    extensionId: number,
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateGroupExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.fallbacks.read`
 * @tags groups
 * @name GetGroupFallback
 * @summary List all fallbacks for group
 * @request GET:/groups/{group_uuid}/fallbacks
 * @secure
*/
export namespace GetGroupFallback {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetGroupFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.fallbacks.update` **WARNING** This endpoint delete all fields that are not defined.
 * @tags groups
 * @name UpdateGroupFallback
 * @summary Update group's fallbacks
 * @request PUT:/groups/{group_uuid}/fallbacks
 * @secure
*/
export namespace UpdateGroupFallback {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = GroupFallbacks;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateGroupFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.members.extensions.update` **WARNING** This endpoint remove all members which are not defined.
 * @tags groups
 * @name UpdateGroupMemberExtensions
 * @summary Update group and extensions
 * @request PUT:/groups/{group_uuid}/members/extensions
 * @secure
*/
export namespace UpdateGroupMemberExtensions {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = GroupMemberExtensions;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateGroupMemberExtensionsData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.members.users.update` **WARNING** This endpoint remove all members which are not defined.
 * @tags groups, users
 * @name UpdateGroupMemberUsers
 * @summary Update group and users
 * @request PUT:/groups/{group_uuid}/members/users
 * @secure
*/
export namespace UpdateGroupMemberUsers {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = GroupMemberUsers;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateGroupMemberUsersData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.schedules.{schedule_id}.delete`
 * @tags groups, schedules
 * @name DissociateGroupSchedule
 * @summary Dissociate group and schedule
 * @request DELETE:/groups/{group_uuid}/schedules/{schedule_id}
 * @secure
*/
export namespace DissociateGroupSchedule {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateGroupScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.groups.{group_uuid}.schedules.{schedule_id}.update`
 * @tags groups, schedules
 * @name AssociateGroupSchedule
 * @summary Associate group and schedule
 * @request PUT:/groups/{group_uuid}/schedules/{schedule_id}
 * @secure
*/
export namespace AssociateGroupSchedule {
  export type RequestParams = {
  /** the group's UUID */
    groupUuid: string,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateGroupScheduleData;
}
      }

    export namespace Guests {
        
/**
 * @description **Required ACL:** none
 * @tags meetings, guests
 * @name GetGuestMeeting
 * @summary Get one guest meeting
 * @request GET:/guests/me/meetings/{meeting_uuid}
 * @secure
*/
export namespace GetGuestMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetGuestMeetingData;
}
        
/**
 * @description **Required ACL:** none. A single meeting only accepts a maximum amount of 128 authorizations. Authorizations are valid for 24h.
 * @tags meeting_authorizations, meetings, guests
 * @name CreateGuestMeetingAuthorization
 * @summary Request guest authorization to enter a meeting
 * @request POST:/guests/{guest_uuid}/meetings/{meeting_uuid}/authorizations
 * @secure
*/
export namespace CreateGuestMeetingAuthorization {
  export type RequestParams = {
  /** Guest UUID. It must be generated by the guest. */
    guestUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = MeetingAuthorizationRequest;
  export type RequestHeaders = {};
  export type ResponseBody = CreateGuestMeetingAuthorizationData;
}
        
/**
 * @description **Required ACL:** none
 * @tags meeting_authorizations, meetings, guests
 * @name GetGuestMeetingAuthorization
 * @summary Read the guest authorization to enter a meeting
 * @request GET:/guests/{guest_uuid}/meetings/{meeting_uuid}/authorizations/{authorization_uuid}
 * @secure
*/
export namespace GetGuestMeetingAuthorization {
  export type RequestParams = {
  /** Authorization UUID */
    authorizationUuid: string,
  /** Guest UUID. It must be generated by the guest. */
    guestUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetGuestMeetingAuthorizationData;
}
      }

    export namespace Ha {
        
/**
 * @description **Required ACL:** `confd.ha.read`
 * @tags ha
 * @name GetHa
 * @summary Get High Availability configuration
 * @request GET:/ha
 * @secure
*/
export namespace GetHa {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetHaData;
}
        
/**
 * @description **Required ACL:** `confd.ha.update`
 * @tags ha
 * @name UpdateHa
 * @summary Update High Availability configuration
 * @request PUT:/ha
 * @secure
*/
export namespace UpdateHa {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = HA;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Incalls {
        
/**
 * @description **Required ACL:** `confd.incalls.read`
 * @tags incalls
 * @name ListIncalls
 * @summary List incoming calls
 * @request GET:/incalls
 * @secure
*/
export namespace ListIncalls {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** the user's ID */
    user_id?: number,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListIncallsData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.create`
 * @tags incalls
 * @name CreateIncall
 * @summary Create incoming call
 * @request POST:/incalls
 * @secure
*/
export namespace CreateIncall {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Incall;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateIncallData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.delete`
 * @tags incalls
 * @name DeleteIncall
 * @summary Delete incoming call
 * @request DELETE:/incalls/{incall_id}
 * @secure
*/
export namespace DeleteIncall {
  export type RequestParams = {
  /** Incoming call's ID */
    incallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.read`
 * @tags incalls
 * @name GetIncall
 * @summary Get incoming call
 * @request GET:/incalls/{incall_id}
 * @secure
*/
export namespace GetIncall {
  export type RequestParams = {
  /** Incoming call's ID */
    incallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetIncallData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.update`
 * @tags incalls
 * @name UpdateIncall
 * @summary Update incoming call
 * @request PUT:/incalls/{incall_id}
 * @secure
*/
export namespace UpdateIncall {
  export type RequestParams = {
  /** Incoming call's ID */
    incallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Incall;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.extensions.{extension_id}.delete`
 * @tags incalls, extensions
 * @name DissociateIncallExtension
 * @summary Dissociate incall and extension
 * @request DELETE:/incalls/{incall_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateIncallExtension {
  export type RequestParams = {
    extensionId: number,
  /** Incoming call's ID */
    incallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateIncallExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.extensions.{extension_id}.update`
 * @tags incalls, extensions
 * @name AssociateIncallExtension
 * @summary Associate incall and extension
 * @request PUT:/incalls/{incall_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateIncallExtension {
  export type RequestParams = {
    extensionId: number,
  /** Incoming call's ID */
    incallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateIncallExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.schedules.{schedule_id}.delete`
 * @tags incalls, schedules
 * @name DissociateIncallSchedule
 * @summary Dissociate incall and schedule
 * @request DELETE:/incalls/{incall_id}/schedules/{schedule_id}
 * @secure
*/
export namespace DissociateIncallSchedule {
  export type RequestParams = {
  /** Incoming call's ID */
    incallId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateIncallScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.incalls.{incall_id}.schedules.{schedule_id}.update`
 * @tags incalls, schedules
 * @name AssociateIncallSchedule
 * @summary Associate incall and schedule
 * @request PUT:/incalls/{incall_id}/schedules/{schedule_id}
 * @secure
*/
export namespace AssociateIncallSchedule {
  export type RequestParams = {
  /** Incoming call's ID */
    incallId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateIncallScheduleData;
}
      }

    export namespace Infos {
        
/**
 * @description **Required ACL:** `confd.infos.read`
 * @tags infos
 * @name GetInfos
 * @summary Get server info
 * @request GET:/infos
 * @secure
*/
export namespace GetInfos {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetInfosData;
}
      }

    export namespace Ingresses {
        
/**
 * @description **Required ACL:** `confd.ingresses.http.read`
 * @tags ingresses
 * @name ListHttpIngresses
 * @summary List HTTP ingresses
 * @request GET:/ingresses/http
 * @secure
*/
export namespace ListHttpIngresses {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Allows to fallback on master tenant config if the current tenant has no ingress set.
   * When the `view` is omitted or the `default`value is passed, only the ingress of the current tenant is returned. This is useful for configuration API.
   * For `fallback` view the API fallbacks to the master tenant ingress value. 
   */
    view?: "default" | "fallback",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListHttpIngressesData;
}
        
/**
 * @description **Required ACL:** `confd.ingresses.http.create`
 * @tags ingresses
 * @name CreateHttpIngress
 * @summary Create HTTP Ingress
 * @request POST:/ingresses/http
 * @secure
*/
export namespace CreateHttpIngress {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = HTTPIngressRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateHttpIngressData;
}
        
/**
 * @description **Required ACL:** `confd.ingresses.http.{http_ingress_uuid}.delete`
 * @tags ingresses
 * @name DeleteHttpIngress
 * @summary Delete HTTP ingress
 * @request DELETE:/ingresses/http/{http_ingress_uuid}
 * @secure
*/
export namespace DeleteHttpIngress {
  export type RequestParams = {
    httpIngressUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.ingresses.http.{http_ingress_uuid}.read`
 * @tags ingresses
 * @name GetHttpIngress
 * @summary Get HTTP ingress
 * @request GET:/ingresses/http/{http_ingress_uuid}
 * @secure
*/
export namespace GetHttpIngress {
  export type RequestParams = {
    httpIngressUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetHttpIngressData;
}
        
/**
 * @description **Required ACL:** `confd.ingresses.http.{http_ingress_uuid}.update`
 * @tags ingresses
 * @name UpdateHttpIngress
 * @summary Update HTTP ingress
 * @request PUT:/ingresses/http/{http_ingress_uuid}
 * @secure
*/
export namespace UpdateHttpIngress {
  export type RequestParams = {
    httpIngressUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = HTTPIngressRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Ivr {
        
/**
 * @description **Required ACL:** `confd.ivr.read`
 * @tags ivr
 * @name ListIvr
 * @summary List IVR
 * @request GET:/ivr
 * @secure
*/
export namespace ListIvr {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListIvrData;
}
        
/**
 * @description **Required ACL:** `confd.ivr.create`
 * @tags ivr
 * @name CreateIvr
 * @summary Create IVR
 * @request POST:/ivr
 * @secure
*/
export namespace CreateIvr {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Ivr;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateIvrData;
}
        
/**
 * @description **Required ACL:** `confd.ivr.{ivr_id}.delete`
 * @tags ivr
 * @name DeleteIvr
 * @summary Delete IVR
 * @request DELETE:/ivr/{ivr_id}
 * @secure
*/
export namespace DeleteIvr {
  export type RequestParams = {
  /** IVR's ID */
    ivrId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.ivr.{ivr_id}.read`
 * @tags ivr
 * @name GetIvr
 * @summary Get IVR
 * @request GET:/ivr/{ivr_id}
 * @secure
*/
export namespace GetIvr {
  export type RequestParams = {
  /** IVR's ID */
    ivrId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetIvrData;
}
        
/**
 * @description **Required ACL:** `confd.ivr.{ivr_id}.update`
 * @tags ivr
 * @name UpdateIvr
 * @summary Update IVR
 * @request PUT:/ivr/{ivr_id}
 * @secure
*/
export namespace UpdateIvr {
  export type RequestParams = {
  /** IVR's ID */
    ivrId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Ivr;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Lines {
        
/**
 * @description **Required ACL:** `confd.lines.read`
 * @tags lines
 * @name ListLines
 * @summary List lines
 * @request GET:/lines
 * @secure
*/
export namespace ListLines {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListLinesData;
}
        
/**
 * @description **Required ACL:** `confd.lines.create` When creating a line with an extension or a SIP endpoint as part of it's body, the line's context will be used as a default for the endpoint and context if ommited.
 * @tags lines
 * @name CreateLine
 * @summary Create line
 * @request POST:/lines
 * @secure
*/
export namespace CreateLine {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = LineCreate;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateLineData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.delete` **Disclaimer**: if `recursive=true`, the line is deleted, all their associations with any related resources are removed.
 * @tags lines
 * @name DeleteLine
 * @summary Delete line
 * @request DELETE:/lines/{line_id}
 * @secure
*/
export namespace DeleteLine {
  export type RequestParams = {
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.read`
 * @tags lines
 * @name GetLine
 * @summary Get line
 * @request GET:/lines/{line_id}
 * @secure
*/
export namespace GetLine {
  export type RequestParams = {
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetLineData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.update`
 * @tags lines
 * @name UpdateLine
 * @summary Update line
 * @request PUT:/lines/{line_id}
 * @secure
*/
export namespace UpdateLine {
  export type RequestParams = {
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Line;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.applications.{application_uuid}.delete`
 * @tags lines, applications
 * @name DissociateLineApplication
 * @summary Dissociate line and application
 * @request DELETE:/lines/{line_id}/applications/{application_uuid}
 * @secure
*/
export namespace DissociateLineApplication {
  export type RequestParams = {
  /** Application's UUID */
    applicationUuid: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateLineApplicationData;
}
        
/**
 * @description '**Required ACL:** `confd.lines.{line_id}.applications.{application_uuid}.update`' **WARNING**: Association will disable the effect of the line `context` field
 * @tags lines, applications
 * @name AssociateLineApplication
 * @summary Associate line and application
 * @request PUT:/lines/{line_id}/applications/{application_uuid}
 * @secure
*/
export namespace AssociateLineApplication {
  export type RequestParams = {
  /** Application's UUID */
    applicationUuid: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateLineApplicationData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.devices.read`
 * @tags lines, devices
 * @name GetLineDevice
 * @summary Get Device associated to Line
 * @request GET:/lines/{line_id}/devices
 * @secure
*/
export namespace GetLineDevice {
  export type RequestParams = {
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetLineDeviceData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.devices.{device_id}.delete`
 * @tags lines, devices
 * @name DissociateLineDevice
 * @summary Dissociate line and device
 * @request DELETE:/lines/{line_id}/devices/{device_id}
 * @secure
*/
export namespace DissociateLineDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateLineDeviceData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.devices.{device_id}.update`
 * @tags lines, devices
 * @name AssociateLineDevice
 * @summary Associate line and device
 * @request PUT:/lines/{line_id}/devices/{device_id}
 * @secure
*/
export namespace AssociateLineDevice {
  export type RequestParams = {
  /** Device's ID */
    deviceId: string,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateLineDeviceData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.custom.{custom_id}.delete`
 * @tags lines, endpoints, custom
 * @name DissociateLineEndpointCustom
 * @summary Dissociate line and Custom endpoint
 * @request DELETE:/lines/{line_id}/endpoints/custom/{custom_id}
 * @secure
*/
export namespace DissociateLineEndpointCustom {
  export type RequestParams = {
    customId: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateLineEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.custom.{custom_id}.update`
 * @tags lines, endpoints, custom
 * @name AssociateLineEndpointCustom
 * @summary Associate line and Custom endpoint
 * @request PUT:/lines/{line_id}/endpoints/custom/{custom_id}
 * @secure
*/
export namespace AssociateLineEndpointCustom {
  export type RequestParams = {
    customId: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateLineEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.sccp.{sccp_id}.delete`
 * @tags lines, endpoints, sccp
 * @name DissociateLineEndpointSccp
 * @summary Dissociate line and SCCP endpoint
 * @request DELETE:/lines/{line_id}/endpoints/sccp/{sccp_id}
 * @secure
*/
export namespace DissociateLineEndpointSccp {
  export type RequestParams = {
    lineId: number,
    sccpId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateLineEndpointSccpData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.sccp.{sccp_id}.update`
 * @tags lines, endpoints, sccp
 * @name AssociateLineEndpointSccp
 * @summary Associate line and SCCP endpoint
 * @request PUT:/lines/{line_id}/endpoints/sccp/{sccp_id}
 * @secure
*/
export namespace AssociateLineEndpointSccp {
  export type RequestParams = {
    lineId: number,
    sccpId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateLineEndpointSccpData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.sip.{sip_uuid}.delete`
 * @tags lines, endpoints, sip
 * @name DissociateLineEndpointSip
 * @summary Dissociate line and SIP endpoint
 * @request DELETE:/lines/{line_id}/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace DissociateLineEndpointSip {
  export type RequestParams = {
    lineId: number,
    sipUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateLineEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.endpoints.sip.{sip_uuid}.update`
 * @tags lines, endpoints, sip
 * @name AssociateLineEndpointSip
 * @summary Associate line and SIP endpoint
 * @request PUT:/lines/{line_id}/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace AssociateLineEndpointSip {
  export type RequestParams = {
    lineId: number,
    sipUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateLineEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.extensions.create` The extension number must be included in one of the extension ranges for the given context.
 * @tags extensions, lines
 * @name CreateLineExtension
 * @summary Create extension
 * @request POST:/lines/{line_id}/extensions
 * @secure
*/
export namespace CreateLineExtension {
  export type RequestParams = {
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Extension;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateLineExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.extensions.{extension_id}.delete` Any devices that are attached to a line must be removed before dissociating an extension from its line. A device can be dissociated by resetting it to autoprov mode.
 * @tags lines, extensions
 * @name DissociateLineExtension
 * @summary Dissociate line and extension
 * @request DELETE:/lines/{line_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateLineExtension {
  export type RequestParams = {
    extensionId: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateLineExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.lines.{line_id}.extensions.{extension_id}.update` Because of technical limitations, a line can only have a single ‘internal’ extension associated (i.e. an extension with a context of type ‘internal’)
 * @tags lines, extensions
 * @name AssociateLineExtension
 * @summary Associate line and extension
 * @request PUT:/lines/{line_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateLineExtension {
  export type RequestParams = {
    extensionId: number,
    lineId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateLineExtensionData;
}
      }

    export namespace Localization {
        
/**
 * @description **Required ACL:** `confd.localization.read`
 * @tags localization
 * @name GetLocalization
 * @summary Get localization configuration
 * @request GET:/localization
 * @secure
*/
export namespace GetLocalization {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetLocalizationData;
}
        
/**
 * @description **Required ACL:** `confd.localization.update`
 * @tags localization
 * @name UpdateLocalization
 * @summary Update localization configuration
 * @request PUT:/localization
 * @secure
*/
export namespace UpdateLocalization {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Localization;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Meetings {
        
/**
 * @description **Required ACL:** `confd.meetings.read`
 * @tags meetings
 * @name ListMeetings
 * @summary List meetings
 * @request GET:/meetings
 * @secure
*/
export namespace ListMeetings {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListMeetingsData;
}
        
/**
 * @description **Required ACL:** `confd.meetings.create`
 * @tags meetings
 * @name CreateMeeting
 * @summary Create meeting
 * @request POST:/meetings
 * @secure
*/
export namespace CreateMeeting {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = MeetingRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateMeetingData;
}
        
/**
 * @description **Required ACL:** `confd.meetings.{meeting_uuid}.delete`, Deleting a meeting will hangup all current participants.
 * @tags meetings
 * @name DeleteMeeting
 * @summary Delete meeting
 * @request DELETE:/meetings/{meeting_uuid}
 * @secure
*/
export namespace DeleteMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.meetings.{meeting_uuid}.read`
 * @tags meetings
 * @name GetMeeting
 * @summary Get meeting
 * @request GET:/meetings/{meeting_uuid}
 * @secure
*/
export namespace GetMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetMeetingData;
}
        
/**
 * @description **Required ACL:** `confd.meetings.{meeting_uuid}.update`
 * @tags meetings
 * @name UpdateMeeting
 * @summary Update meeting
 * @request PUT:/meetings/{meeting_uuid}
 * @secure
*/
export namespace UpdateMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = MeetingRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Moh {
        
/**
 * @description **Required ACL:** `confd.moh.read`
 * @tags moh
 * @name ListMoh
 * @summary List MOH classes
 * @request GET:/moh
 * @secure
*/
export namespace ListMoh {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListMohData;
}
        
/**
 * @description **Required ACL:** `confd.moh.create`
 * @tags moh
 * @name CreateMoh
 * @summary Create MOH class
 * @request POST:/moh
 * @secure
*/
export namespace CreateMoh {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Moh;
  export type RequestHeaders = {};
  export type ResponseBody = CreateMohData;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.delete` Delete the MOH class and associated audio files.
 * @tags moh
 * @name DeleteMoh
 * @summary Delete MOH class
 * @request DELETE:/moh/{moh_uuid}
 * @secure
*/
export namespace DeleteMoh {
  export type RequestParams = {
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.read`
 * @tags moh
 * @name GetMoh
 * @summary Get MOH class
 * @request GET:/moh/{moh_uuid}
 * @secure
*/
export namespace GetMoh {
  export type RequestParams = {
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetMohData;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.update`
 * @tags moh
 * @name UpdateMoh
 * @summary Update MOH class
 * @request PUT:/moh/{moh_uuid}
 * @secure
*/
export namespace UpdateMoh {
  export type RequestParams = {
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = Moh;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.files.{moh_filename}.delete`
 * @tags moh
 * @name DeleteMohFiles
 * @summary Delete audio file
 * @request DELETE:/moh/{moh_uuid}/files/{moh_filename}
 * @secure
*/
export namespace DeleteMohFiles {
  export type RequestParams = {
    mohFilename: string,
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.files.{moh_filename}.read`
 * @tags moh
 * @name GetMohFiles
 * @summary Get audio file
 * @request GET:/moh/{moh_uuid}/files/{moh_filename}
 * @secure
*/
export namespace GetMohFiles {
  export type RequestParams = {
    mohFilename: string,
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetMohFilesData;
}
        
/**
 * @description **Required ACL:** `confd.moh.{moh_uuid}.files.{moh_filename}.update`
 * @tags moh
 * @name UpdateMohFiles
 * @summary Add or update audio file
 * @request PUT:/moh/{moh_uuid}/files/{moh_filename}
 * @secure
*/
export namespace UpdateMohFiles {
  export type RequestParams = {
    mohFilename: string,
    mohUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = UpdateMohFilesPayload;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Outcalls {
        
/**
 * @description **Required ACL:** `confd.outcalls.read`
 * @tags outcalls
 * @name ListOutcalls
 * @summary List outgoing calls
 * @request GET:/outcalls
 * @secure
*/
export namespace ListOutcalls {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListOutcallsData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.create`
 * @tags outcalls
 * @name CreateOutcall
 * @summary Create outgoing call
 * @request POST:/outcalls
 * @secure
*/
export namespace CreateOutcall {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Outcall;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateOutcallData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.delete`
 * @tags outcalls
 * @name DeleteOutcall
 * @summary Delete outgoing call
 * @request DELETE:/outcalls/{outcall_id}
 * @secure
*/
export namespace DeleteOutcall {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.read`
 * @tags outcalls
 * @name GetOutcall
 * @summary Get outgoing call
 * @request GET:/outcalls/{outcall_id}
 * @secure
*/
export namespace GetOutcall {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetOutcallData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.update`
 * @tags outcalls
 * @name UpdateOutcall
 * @summary Update outgoing call
 * @request PUT:/outcalls/{outcall_id}
 * @secure
*/
export namespace UpdateOutcall {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Outcall;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.callpermissions.{call_permission_id}.delete`
 * @tags outcalls, callpermissions
 * @name DissociateOutcallCallpermission
 * @summary Dissociate outcall and call permission
 * @request DELETE:/outcalls/{outcall_id}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace DissociateOutcallCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateOutcallCallpermissionData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.callpermissions.{call_permission_id}.update`
 * @tags outcalls, callpermissions
 * @name AssociateOutcallCallpermission
 * @summary Associate outcall and call permission
 * @request PUT:/outcalls/{outcall_id}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace AssociateOutcallCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.extensions.{extension_id}.delete`
 * @tags outcalls, extensions
 * @name DissociateOutcallExtension
 * @summary Dissociate outcall and extension
 * @request DELETE:/outcalls/{outcall_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateOutcallExtension {
  export type RequestParams = {
    extensionId: number,
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateOutcallExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.extensions.{extension_id}.update`
 * @tags outcalls, extensions
 * @name AssociateOutcallExtension
 * @summary Associate outcall and extension
 * @request PUT:/outcalls/{outcall_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateOutcallExtension {
  export type RequestParams = {
    extensionId: number,
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = OutcallExtension;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateOutcallExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.schedules.{schedule_id}.delete`
 * @tags outcalls, schedules
 * @name DissociateOutcallSchedule
 * @summary Dissociate outcall and schedule
 * @request DELETE:/outcalls/{outcall_id}/schedules/{schedule_id}
 * @secure
*/
export namespace DissociateOutcallSchedule {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateOutcallScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.schedules.{schedule_id}.update`
 * @tags outcalls, schedules
 * @name AssociateOutcallSchedule
 * @summary Associate outcall and schedule
 * @request PUT:/outcalls/{outcall_id}/schedules/{schedule_id}
 * @secure
*/
export namespace AssociateOutcallSchedule {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateOutcallScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.outcalls.{outcall_id}.trunks.update`
 * @tags outcalls, trunks
 * @name AssociateOutcallTrunks
 * @summary Associate outcall and trunks
 * @request PUT:/outcalls/{outcall_id}/trunks
 * @secure
*/
export namespace AssociateOutcallTrunks {
  export type RequestParams = {
  /** Outgoing call's ID */
    outcallId: number,

};
  export type RequestQuery = {};
  export type RequestBody = TrunksId;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateOutcallTrunksData;
}
      }

    export namespace Pagings {
        
/**
 * @description **Required ACL:** `confd.pagings.read`
 * @tags pagings
 * @name ListPagings
 * @summary List paging
 * @request GET:/pagings
 * @secure
*/
export namespace ListPagings {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListPagingsData;
}
        
/**
 * @description **Required ACL:** `confd.pagings.create`
 * @tags pagings
 * @name CreatePaging
 * @summary Create paging
 * @request POST:/pagings
 * @secure
*/
export namespace CreatePaging {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Paging;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreatePagingData;
}
        
/**
 * @description **Required ACL:** `confd.pagings.{paging_id}.delete`
 * @tags pagings
 * @name DeletePaging
 * @summary Delete paging
 * @request DELETE:/pagings/{paging_id}
 * @secure
*/
export namespace DeletePaging {
  export type RequestParams = {
  /** Paging's ID */
    pagingId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.pagings.{paging_id}.read`
 * @tags pagings
 * @name GetPaging
 * @summary Get paging
 * @request GET:/pagings/{paging_id}
 * @secure
*/
export namespace GetPaging {
  export type RequestParams = {
  /** Paging's ID */
    pagingId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetPagingData;
}
        
/**
 * @description **Required ACL:** `confd.pagings.{paging_id}.update`
 * @tags pagings
 * @name UpdatePaging
 * @summary Update paging
 * @request PUT:/pagings/{paging_id}
 * @secure
*/
export namespace UpdatePaging {
  export type RequestParams = {
  /** Paging's ID */
    pagingId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Paging;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.pagings.{paging_id}.callers.users.update` **WARNING** This endpoint remove all callers which are not defined.
 * @tags pagings, users
 * @name UpdatePagingCallerUsers
 * @summary Update paging and callers
 * @request PUT:/pagings/{paging_id}/callers/users
 * @secure
*/
export namespace UpdatePagingCallerUsers {
  export type RequestParams = {
  /** Paging's ID */
    pagingId: number,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {};
  export type ResponseBody = UpdatePagingCallerUsersData;
}
        
/**
 * @description **Required ACL:** `confd.pagings.{paging_id}.members.users.update` **WARNING** This endpoint remove all members which are not defined.
 * @tags pagings, users
 * @name UpdatePagingMemberUsers
 * @summary Update paging and members
 * @request PUT:/pagings/{paging_id}/members/users
 * @secure
*/
export namespace UpdatePagingMemberUsers {
  export type RequestParams = {
  /** Paging's ID */
    pagingId: number,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {};
  export type ResponseBody = UpdatePagingMemberUsersData;
}
      }

    export namespace Parkinglots {
        
/**
 * @description **Required ACL:** `confd.parkinglots.read`
 * @tags parking_lots
 * @name ListParkingLots
 * @summary List parking lots
 * @request GET:/parkinglots
 * @secure
*/
export namespace ListParkingLots {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListParkingLotsData;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.create`
 * @tags parking_lots
 * @name CreateParkingLot
 * @summary Create parking lot
 * @request POST:/parkinglots
 * @secure
*/
export namespace CreateParkingLot {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = ParkingLot;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateParkingLotData;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.{parking_lot_id}.delete`
 * @tags parking_lots
 * @name DeleteParkingLot
 * @summary Delete parking lot
 * @request DELETE:/parkinglots/{parking_lot_id}
 * @secure
*/
export namespace DeleteParkingLot {
  export type RequestParams = {
  /** Parking Lot's ID */
    parkingLotId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.{parking_lot_id}.read`
 * @tags parking_lots
 * @name GetParkingLot
 * @summary Get parking lot
 * @request GET:/parkinglots/{parking_lot_id}
 * @secure
*/
export namespace GetParkingLot {
  export type RequestParams = {
  /** Parking Lot's ID */
    parkingLotId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetParkingLotData;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.{parking_lot_id}.update`
 * @tags parking_lots
 * @name UpdateParkingLot
 * @summary Update parking lot
 * @request PUT:/parkinglots/{parking_lot_id}
 * @secure
*/
export namespace UpdateParkingLot {
  export type RequestParams = {
  /** Parking Lot's ID */
    parkingLotId: number,

};
  export type RequestQuery = {};
  export type RequestBody = ParkingLot;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.{parking_lot_id}.extensions.{extension_id}.delete`
 * @tags parking_lots, extensions
 * @name DissociateParkingLotExtension
 * @summary Dissociate parking lot and extension
 * @request DELETE:/parkinglots/{parking_lot_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateParkingLotExtension {
  export type RequestParams = {
    extensionId: number,
  /** Parking Lot's ID */
    parkingLotId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateParkingLotExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.parkinglots.{parking_lot_id}.extensions.{extension_id}.update`
 * @tags parking_lots, extensions
 * @name AssociateParkingLotExtension
 * @summary Associate parking_lot and extension
 * @request PUT:/parkinglots/{parking_lot_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateParkingLotExtension {
  export type RequestParams = {
    extensionId: number,
  /** Parking Lot's ID */
    parkingLotId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateParkingLotExtensionData;
}
      }

    export namespace PhoneNumbers {
        
/**
 * @description **Required ACL:** `confd.phone-numbers.read`
 * @tags phone-numbers
 * @name ListPhoneNumbers
 * @summary List phone numbers
 * @request GET:/phone-numbers
 * @secure
*/
export namespace ListPhoneNumbers {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Only include the main phone number of the tenant */
    main?: boolean,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** Only include shared phone numbers */
    shared?: boolean,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListPhoneNumbersData;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.create`
 * @tags phone-numbers
 * @name CreatePhoneNumber
 * @summary Add a new phone number
 * @request POST:/phone-numbers
 * @secure
*/
export namespace CreatePhoneNumber {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = PhoneNumber;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreatePhoneNumberData;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.main.read`
 * @tags phone-numbers
 * @name GetPhoneNumberMain
 * @summary Get main phone number
 * @request GET:/phone-numbers/main
 * @secure
*/
export namespace GetPhoneNumberMain {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetPhoneNumberMainData;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.main.update`
 * @tags phone-numbers
 * @name SetPhoneNumberMain
 * @summary set the 'main' phone number for the tenant
 * @request PUT:/phone-numbers/main
 * @secure
*/
export namespace SetPhoneNumberMain {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = SetPhoneNumberMainPayload;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.create`
 * @tags phone-numbers
 * @name CreatePhoneNumbersRange
 * @summary Add a range of phone numbers
 * @request POST:/phone-numbers/ranges
 * @secure
*/
export namespace CreatePhoneNumbersRange {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = PhoneNumberRange;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreatePhoneNumbersRangeData;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.{phone_number_uuid}.delete`
 * @tags phone-numbers
 * @name DeletePhoneNumber
 * @summary Delete Phone Number
 * @request DELETE:/phone-numbers/{phone_number_uuid}
 * @secure
*/
export namespace DeletePhoneNumber {
  export type RequestParams = {
  /** UUID of the phone number */
    phoneNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.{phone_number_uuid}.read`
 * @tags phone-numbers
 * @name GetPhoneNumber
 * @summary Get phone number
 * @request GET:/phone-numbers/{phone_number_uuid}
 * @secure
*/
export namespace GetPhoneNumber {
  export type RequestParams = {
  /** UUID of the phone number */
    phoneNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetPhoneNumberData;
}
        
/**
 * @description **Required ACL:** `confd.phone-numbers.{phone_number_uuid}.update`
 * @tags phone-numbers
 * @name UpdatePhoneNumbers
 * @summary Update Phone Number
 * @request PUT:/phone-numbers/{phone_number_uuid}
 * @secure
*/
export namespace UpdatePhoneNumbers {
  export type RequestParams = {
  /** UUID of the phone number */
    phoneNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = PhoneNumberItems;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Provisioning {
        
/**
 * @description **Required ACL:** `confd.provisioning.networking.read`
 * @tags provisioning
 * @name GetProvisioningNetworking
 * @summary Get Provisioning Networking configuration
 * @request GET:/provisioning/networking
 * @secure
*/
export namespace GetProvisioningNetworking {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetProvisioningNetworkingData;
}
        
/**
 * @description **Required ACL:** `confd.provisioning.networking.update`
 * @tags provisioning
 * @name UpdateProvisioningNetworking
 * @summary Update Provisioning Networking configuration
 * @request PUT:/provisioning/networking
 * @secure
*/
export namespace UpdateProvisioningNetworking {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = ProvisioningNetworking;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Queues {
        
/**
 * @description **Required ACL:** `confd.queues.read`
 * @tags queues
 * @name ListQueues
 * @summary List queues
 * @request GET:/queues
 * @secure
*/
export namespace ListQueues {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListQueuesData;
}
        
/**
 * @description **Required ACL:** `confd.queues.create`
 * @tags queues
 * @name CreateQueue
 * @summary Create queue
 * @request POST:/queues
 * @secure
*/
export namespace CreateQueue {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Queue;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateQueueData;
}
        
/**
 * @description **Required ACL:** `confd.queues.skillrules.read`
 * @tags queues, skills
 * @name ListSkillRules
 * @summary List skill rule
 * @request GET:/queues/skillrules
 * @secure
*/
export namespace ListSkillRules {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListSkillRulesData;
}
        
/**
 * @description **Required ACL:** `confd.queues.skillrules.create`
 * @tags queues, skills
 * @name CreateSkillRule
 * @summary Create skill rule
 * @request POST:/queues/skillrules
 * @secure
*/
export namespace CreateSkillRule {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = SkillRule;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateSkillRuleData;
}
        
/**
 * @description **Required ACL:** `confd.queues.skillrules.{skillrule_id}.delete`
 * @tags queues, skills
 * @name DeleteSkillRule
 * @summary Delete skill rule
 * @request DELETE:/queues/skillrules/{skillrule_id}
 * @secure
*/
export namespace DeleteSkillRule {
  export type RequestParams = {
  /** Skill's ID */
    skillruleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.queues.skillrules.{skillrule_id}.read`
 * @tags queues, skills
 * @name GetSkillRule
 * @summary Get skill rule
 * @request GET:/queues/skillrules/{skillrule_id}
 * @secure
*/
export namespace GetSkillRule {
  export type RequestParams = {
  /** Skill's ID */
    skillruleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetSkillRuleData;
}
        
/**
 * @description **Required ACL:** `confd.queues.skillrules.{skillrule_id}.update`
 * @tags queues, skills
 * @name UpdateSkillRule
 * @summary Update skill rule
 * @request PUT:/queues/skillrules/{skillrule_id}
 * @secure
*/
export namespace UpdateSkillRule {
  export type RequestParams = {
  /** Skill's ID */
    skillruleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = SkillRule;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.delete`
 * @tags queues
 * @name DeleteQueue
 * @summary Delete queue
 * @request DELETE:/queues/{queue_id}
 * @secure
*/
export namespace DeleteQueue {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.read`
 * @tags queues
 * @name GetQueue
 * @summary Get queue
 * @request GET:/queues/{queue_id}
 * @secure
*/
export namespace GetQueue {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetQueueData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.update`
 * @tags queues
 * @name UpdateQueue
 * @summary Update queue
 * @request PUT:/queues/{queue_id}
 * @secure
*/
export namespace UpdateQueue {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Queue;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.extensions.{extension_id}.delete`
 * @tags queues, extensions
 * @name DissociateQueueExtension
 * @summary Dissociate queue and extension
 * @request DELETE:/queues/{queue_id}/extensions/{extension_id}
 * @secure
*/
export namespace DissociateQueueExtension {
  export type RequestParams = {
    extensionId: number,
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateQueueExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.extensions.{extension_id}.update`
 * @tags queues, extensions
 * @name AssociateQueueExtension
 * @summary Associate queue and extension
 * @request PUT:/queues/{queue_id}/extensions/{extension_id}
 * @secure
*/
export namespace AssociateQueueExtension {
  export type RequestParams = {
    extensionId: number,
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateQueueExtensionData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.fallbacks.read`
 * @tags queues
 * @name GetQueueFallback
 * @summary List all fallbacks for queue
 * @request GET:/queues/{queue_id}/fallbacks
 * @secure
*/
export namespace GetQueueFallback {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetQueueFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.fallbacks.update` **WARNING** This endpoint delete all fields that are not defined.
 * @tags queues
 * @name UpdateQueueFallback
 * @summary Update queue's fallbacks
 * @request PUT:/queues/{queue_id}/fallbacks
 * @secure
*/
export namespace UpdateQueueFallback {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = QueueFallbacks;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateQueueFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.members.agents.{agent_id}.delete`
 * @tags agents, queues
 * @name DissociateAgentQueue
 * @summary Dissociate agent and queue
 * @request DELETE:/queues/{queue_id}/members/agents/{agent_id}
 * @secure
*/
export namespace DissociateAgentQueue {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateAgentQueueData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.members.agents.{agent_id}.update`
 * @tags agents, queues
 * @name UpdateAgentQueueAssociation
 * @summary Update Agent-Queue association
 * @request PUT:/queues/{queue_id}/members/agents/{agent_id}
 * @secure
*/
export namespace UpdateAgentQueueAssociation {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,
  /** queue's ID */
    queueId: number,

};
  export type RequestQuery = {};
  export type RequestBody = QueueMemberAgent;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateAgentQueueAssociationData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.members.users.{user_id}.delete`
 * @tags queues, users
 * @name DissociateUserQueue
 * @summary Dissociate user and queue
 * @request DELETE:/queues/{queue_id}/members/users/{user_id}
 * @secure
*/
export namespace DissociateUserQueue {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateUserQueueData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.members.users.{user_id}.update`
 * @tags queues, users
 * @name UpdateUserQueueAssociation
 * @summary Update User-Queue association
 * @request PUT:/queues/{queue_id}/members/users/{user_id}
 * @secure
*/
export namespace UpdateUserQueueAssociation {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = QueueMemberUser;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateUserQueueAssociationData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.schedules.{schedule_id}.delete`
 * @tags queues, schedules
 * @name DissociateQueueSchedule
 * @summary Dissociate queue and schedule
 * @request DELETE:/queues/{queue_id}/schedules/{schedule_id}
 * @secure
*/
export namespace DissociateQueueSchedule {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateQueueScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.queues.{queue_id}.schedules.{schedule_id}.update`
 * @tags queues, schedules
 * @name AssociateQueueSchedule
 * @summary Associate queue and schedule
 * @request PUT:/queues/{queue_id}/schedules/{schedule_id}
 * @secure
*/
export namespace AssociateQueueSchedule {
  export type RequestParams = {
  /** queue's ID */
    queueId: number,
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateQueueScheduleData;
}
      }

    export namespace Recordings {
        
/**
 * @description **Required ACL:** `confd.recordings.announcements.read`
 * @tags recordings-announcements
 * @name GetRecordingsAnnouncements
 * @summary Get announcements configuration
 * @request GET:/recordings/announcements
 * @secure
*/
export namespace GetRecordingsAnnouncements {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetRecordingsAnnouncementsData;
}
        
/**
 * @description **Required ACL:** `confd.recordings.announcements.update`
 * @tags recordings-announcements
 * @name UpdateRecordingsAnnouncements
 * @summary Update recordings announcements configuration
 * @request PUT:/recordings/announcements
 * @secure
*/
export namespace UpdateRecordingsAnnouncements {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = RecordingsAnnouncements;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Registers {
        
/**
 * @description **Required ACL:** `confd.registers.iax.read`
 * @tags registers, iax
 * @name ListRegistersIax
 * @summary List registers iax
 * @request GET:/registers/iax
 * @secure
*/
export namespace ListRegistersIax {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListRegistersIaxData;
}
        
/**
 * @description **Required ACL:** `confd.registers.iax.create`
 * @tags registers, iax
 * @name CreateRegisterIax
 * @summary Create register_iax
 * @request POST:/registers/iax
 * @secure
*/
export namespace CreateRegisterIax {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = RegisterIAX;
  export type RequestHeaders = {};
  export type ResponseBody = CreateRegisterIaxData;
}
        
/**
 * @description **Required ACL:** `confd.registers.iax.{register_iax_id}.delete`
 * @tags registers, iax
 * @name DeleteRegisterIax
 * @summary Delete register IAX
 * @request DELETE:/registers/iax/{register_iax_id}
 * @secure
*/
export namespace DeleteRegisterIax {
  export type RequestParams = {
  /** Register IAX's ID */
    registerIaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.registers.iax.{register_iax_id}.read`
 * @tags registers, iax
 * @name GetRegisterIax
 * @summary Get register IAX
 * @request GET:/registers/iax/{register_iax_id}
 * @secure
*/
export namespace GetRegisterIax {
  export type RequestParams = {
  /** Register IAX's ID */
    registerIaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetRegisterIaxData;
}
        
/**
 * @description **Required ACL:** `confd.registers.iax.{register_iax_id}.update`
 * @tags registers, iax
 * @name UpdateRegisterIax
 * @summary Update register IAX
 * @request PUT:/registers/iax/{register_iax_id}
 * @secure
*/
export namespace UpdateRegisterIax {
  export type RequestParams = {
  /** Register IAX's ID */
    registerIaxId: number,

};
  export type RequestQuery = {};
  export type RequestBody = RegisterIAX;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Registrars {
        
/**
 * @description **Required ACL:** `confd.registrars.read`
 * @tags registrars
 * @name GetRegistrars
 * @summary Get registrars
 * @request GET:/registrars
 * @secure
*/
export namespace GetRegistrars {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetRegistrarsData;
}
        
/**
 * @description **Required ACL:** `confd.registrars.create`
 * @tags registrars
 * @name CreateRegistrar
 * @summary Create registrar
 * @request POST:/registrars
 * @secure
*/
export namespace CreateRegistrar {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Registrar;
  export type RequestHeaders = {};
  export type ResponseBody = CreateRegistrarData;
}
        
/**
 * @description **Required ACL:** `confd.registrars.{registrar_id}.delete`
 * @tags registrars
 * @name DeleteRegistrar
 * @summary Delete registrar
 * @request DELETE:/registrars/{registrar_id}
 * @secure
*/
export namespace DeleteRegistrar {
  export type RequestParams = {
  /** Registrar ID */
    registrarId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.registrars.{registrar_id}.read`
 * @tags registrars
 * @name GetRegistrar
 * @summary Get registrar
 * @request GET:/registrars/{registrar_id}
 * @secure
*/
export namespace GetRegistrar {
  export type RequestParams = {
  /** Registrar ID */
    registrarId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetRegistrarData;
}
        
/**
 * @description **Required ACL:** `confd.registrars.{registrar_id}.update`
 * @tags registrars
 * @name UpdateRegistrar
 * @summary Update registrar
 * @request PUT:/registrars/{registrar_id}
 * @secure
*/
export namespace UpdateRegistrar {
  export type RequestParams = {
  /** Registrar ID */
    registrarId: string,

};
  export type RequestQuery = {};
  export type RequestBody = Registrar;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Schedules {
        
/**
 * @description **Required ACL:** `confd.schedules.read`
 * @tags schedules
 * @name ListSchedules
 * @summary List schedule
 * @request GET:/schedules
 * @secure
*/
export namespace ListSchedules {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListSchedulesData;
}
        
/**
 * @description **Required ACL:** `confd.schedules.create`
 * @tags schedules
 * @name CreateSchedule
 * @summary Create schedule
 * @request POST:/schedules
 * @secure
*/
export namespace CreateSchedule {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Schedule;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.schedules.{schedule_id}.delete`
 * @tags schedules
 * @name DeleteSchedule
 * @summary Delete schedule
 * @request DELETE:/schedules/{schedule_id}
 * @secure
*/
export namespace DeleteSchedule {
  export type RequestParams = {
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.schedules.{schedule_id}.read`
 * @tags schedules
 * @name GetSchedule
 * @summary Get schedule
 * @request GET:/schedules/{schedule_id}
 * @secure
*/
export namespace GetSchedule {
  export type RequestParams = {
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.schedules.{schedule_id}.update`
 * @tags schedules
 * @name UpdateSchedule
 * @summary Update schedule
 * @request PUT:/schedules/{schedule_id}
 * @secure
*/
export namespace UpdateSchedule {
  export type RequestParams = {
  /** Schedule's ID */
    scheduleId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Schedule;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Sip {
        
/**
 * @description **Required ACL:** `confd.sip.transports.read`
 * @tags sip
 * @name ListSipTransports
 * @summary List all configured SIP transports
 * @request GET:/sip/transports
 * @secure
*/
export namespace ListSipTransports {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListSipTransportsData;
}
        
/**
 * @description **Required ACL:** `confd.sip.transports.create` Transports are shared between all tenants and should be readable to the tenants' administrators. There should always be atleast one transport configured on the system.
 * @tags sip
 * @name CreateSipTransport
 * @summary Create SIP transport
 * @request POST:/sip/transports
 * @secure
*/
export namespace CreateSipTransport {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = SIPTransport;
  export type RequestHeaders = {};
  export type ResponseBody = CreateSipTransportData;
}
        
/**
 * @description **Required ACL:** `confd.sip.transports.{transport_uuid}.delete` Deletes a transport, all associated configuration will be assigned to the `fallback` transport.
 * @tags sip
 * @name DeleteSipTransport
 * @summary Delete SIP transport
 * @request DELETE:/sip/transports/{transport_uuid}
 * @secure
*/
export namespace DeleteSipTransport {
  export type RequestParams = {
  /** The UUID of the transport */
    transportUuid: string,

};
  export type RequestQuery = {
  /**
   * The UUID of the transport that should be associated to orphaned
   * SIP configurations
   */
    fallback?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL**: `confd.sip.transports.{transport_uuid}.read`
 * @tags sip
 * @name GetSipTransport
 * @summary Get SIP transport
 * @request GET:/sip/transports/{transport_uuid}
 * @secure
*/
export namespace GetSipTransport {
  export type RequestParams = {
  /** The UUID of the transport */
    transportUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetSipTransportData;
}
        
/**
 * @description **Required ACL**: `confd.sip.transports.{transport_uuid}.update`
 * @tags sip
 * @name UpdateSipTransport
 * @summary Update SIP transport
 * @request PUT:/sip/transports/{transport_uuid}
 * @secure
*/
export namespace UpdateSipTransport {
  export type RequestParams = {
  /** The UUID of the transport */
    transportUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = SIPTransport;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
      }

    export namespace Sounds {
        
/**
 * @description **Required ACL:** `confd.sounds.read`
 * @tags sounds
 * @name ListSounds
 * @summary List sound categories
 * @request GET:/sounds
 * @secure
*/
export namespace ListSounds {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListSoundsData;
}
        
/**
 * @description **Required ACL:** `confd.sounds.create`
 * @tags sounds
 * @name CreateSounds
 * @summary Create sound category
 * @request POST:/sounds
 * @secure
*/
export namespace CreateSounds {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Sound;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateSoundsData;
}
        
/**
 * @description **Required ACL:** `confd.sounds.languages.read`
 * @tags sounds
 * @name ListSoundsLanguages
 * @summary List all languages for sounds
 * @request GET:/sounds/languages
 * @secure
*/
export namespace ListSoundsLanguages {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListSoundsLanguagesData;
}
        
/**
 * @description **Required ACL:** `confd.sounds.{sound_category}.delete` Delete the sound category and associated audio files.
 * @tags sounds
 * @name DeleteSounds
 * @summary Delete sound category
 * @request DELETE:/sounds/{sound_category}
 * @secure
*/
export namespace DeleteSounds {
  export type RequestParams = {
    soundCategory: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.sounds.{sound_category}.read`
 * @tags sounds
 * @name GetSounds
 * @summary Get sound category
 * @request GET:/sounds/{sound_category}
 * @secure
*/
export namespace GetSounds {
  export type RequestParams = {
    soundCategory: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetSoundsData;
}
        
/**
 * @description **Required ACL:** `confd.sounds.{sound_category}.files.{sound_filename}.delete`
 * @tags sounds
 * @name DeleteSoundsFiles
 * @summary Delete audio file
 * @request DELETE:/sounds/{sound_category}/files/{sound_filename}
 * @secure
*/
export namespace DeleteSoundsFiles {
  export type RequestParams = {
    soundCategory: string,
    soundFilename: string,

};
  export type RequestQuery = {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.sounds.{sound_category}.files.{sound_filename}.read`
 * @tags sounds
 * @name GetSoundsFiles
 * @summary Get audio file
 * @request GET:/sounds/{sound_category}/files/{sound_filename}
 * @secure
*/
export namespace GetSoundsFiles {
  export type RequestParams = {
    soundCategory: string,
    soundFilename: string,

};
  export type RequestQuery = {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetSoundsFilesData;
}
        
/**
 * @description **Required ACL:** `confd.sounds.{sound_category}.files.{sound_filename}.update`
 * @tags sounds
 * @name UpdateSoundsFiles
 * @summary Add or update audio file
 * @request PUT:/sounds/{sound_category}/files/{sound_filename}
 * @secure
*/
export namespace UpdateSoundsFiles {
  export type RequestParams = {
    soundCategory: string,
    soundFilename: string,

};
  export type RequestQuery = {
  /** Format of the sound */
    format?: string,
  /** Language of the sound */
    language?: string,

};
  export type RequestBody = UpdateSoundsFilesPayload;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Status {
        
/**
 * @description **Required ACL:** `confd.status.read`
 * @tags status
 * @name StatusList
 * @summary Provides internal status of wazo-confd`
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
 * @description **Required ACL:** `confd.switchboards.read`
 * @tags switchboards
 * @name SwitchboardsList
 * @summary List switchboards
 * @request GET:/switchboards
 * @secure
*/
export namespace SwitchboardsList {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = SwitchboardsListData;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.create`
 * @tags switchboards
 * @name SwitchboardsCreate
 * @summary Create a switchboard
 * @request POST:/switchboards
 * @secure
*/
export namespace SwitchboardsCreate {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Switchboard;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = SwitchboardsCreateData;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.delete`
 * @tags switchboards
 * @name SwitchboardsDelete
 * @summary Delete a switchboard
 * @request DELETE:/switchboards/{switchboard_uuid}
 * @secure
*/
export namespace SwitchboardsDelete {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.read`
 * @tags switchboards
 * @name SwitchboardsDetail
 * @summary Get a switchboard
 * @request GET:/switchboards/{switchboard_uuid}
 * @secure
*/
export namespace SwitchboardsDetail {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = SwitchboardsDetailData;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.update`
 * @tags switchboards
 * @name SwitchboardsUpdate
 * @summary Update a switchboard
 * @request PUT:/switchboards/{switchboard_uuid}
 * @secure
*/
export namespace SwitchboardsUpdate {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = Switchboard;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.fallbacks.read`
 * @tags switchboards
 * @name GetSwitchboardFallback
 * @summary List all fallbacks for switchboard
 * @request GET:/switchboards/{switchboard_uuid}/fallbacks
 * @secure
*/
export namespace GetSwitchboardFallback {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetSwitchboardFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.fallbacks.update` **WARNING** This endpoint delete all fields that are not defined.
 * @tags switchboards
 * @name UpdateSwitchboardFallback
 * @summary Update switchboard's fallbacks
 * @request PUT:/switchboards/{switchboard_uuid}/fallbacks
 * @secure
*/
export namespace UpdateSwitchboardFallback {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = SwitchboardFallbacks;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateSwitchboardFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.switchboards.{switchboard_uuid}.members.users.update` **WARNING** This endpoint removes all members which are not defined.
 * @tags switchboards, users
 * @name UpdateSwitchboardMemberUsers
 * @summary Update switchboard and members
 * @request PUT:/switchboards/{switchboard_uuid}/members/users
 * @secure
*/
export namespace UpdateSwitchboardMemberUsers {
  export type RequestParams = {
    switchboardUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = UsersUuid;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateSwitchboardMemberUsersData;
}
      }

    export namespace Tenants {
        
/**
 * @description **Required ACL**: `confd.tenants.read`
 * @tags tenants
 * @name ListTenants
 * @summary List tenants
 * @request GET:/tenants
 * @secure
*/
export namespace ListTenants {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListTenantsData;
}
        
/**
 * @description **Required ACL:** `confd.tenants.{tenant_uuid}.read`
 * @tags tenants
 * @name GetTenant
 * @summary Get tenant
 * @request GET:/tenants/{tenant_uuid}
 * @secure
*/
export namespace GetTenant {
  export type RequestParams = {
  /** Resource UUID */
    tenantUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetTenantData;
}
      }

    export namespace Timezones {
        
/**
 * @description **Required ACL:** `confd.timezones.read`
 * @tags timezones
 * @name ListTimezones
 * @summary List all available timezones
 * @request GET:/timezones
 * @secure
*/
export namespace ListTimezones {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListTimezonesData;
}
      }

    export namespace Trunks {
        
/**
 * @description **Required ACL:** `confd.trunks.read`
 * @tags trunks
 * @name ListTrunks
 * @summary List trunks
 * @request GET:/trunks
 * @secure
*/
export namespace ListTrunks {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListTrunksData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.create`
 * @tags trunks
 * @name CreateTrunk
 * @summary Create trunk
 * @request POST:/trunks
 * @secure
*/
export namespace CreateTrunk {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Trunk;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateTrunkData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.delete`
 * @tags trunks
 * @name DeleteTrunk
 * @summary Delete trunk
 * @request DELETE:/trunks/{trunk_id}
 * @secure
*/
export namespace DeleteTrunk {
  export type RequestParams = {
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.read`
 * @tags trunks
 * @name GetTrunk
 * @summary Get trunk
 * @request GET:/trunks/{trunk_id}
 * @secure
*/
export namespace GetTrunk {
  export type RequestParams = {
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetTrunkData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.update`
 * @tags trunks
 * @name UpdateTrunk
 * @summary Update trunk
 * @request PUT:/trunks/{trunk_id}
 * @secure
*/
export namespace UpdateTrunk {
  export type RequestParams = {
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Trunk;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.custom.{custom_id}.delete`
 * @tags trunks, endpoints, custom
 * @name DissociateTrunkEndpointCustom
 * @summary Dissociate trunk and Custom endpoint
 * @request DELETE:/trunks/{trunk_id}/endpoints/custom/{custom_id}
 * @secure
*/
export namespace DissociateTrunkEndpointCustom {
  export type RequestParams = {
    customId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateTrunkEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.custom.{custom_id}.update`
 * @tags trunks, endpoints, custom
 * @name AssociateTrunkEndpointCustom
 * @summary Associate trunk and Custom endpoint
 * @request PUT:/trunks/{trunk_id}/endpoints/custom/{custom_id}
 * @secure
*/
export namespace AssociateTrunkEndpointCustom {
  export type RequestParams = {
    customId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateTrunkEndpointCustomData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.iax.{iax_id}.delete`
 * @tags trunks, endpoints, iax
 * @name DissociateTrunkEndpointIax
 * @summary Dissociate trunk and IAX endpoint
 * @request DELETE:/trunks/{trunk_id}/endpoints/iax/{iax_id}
 * @secure
*/
export namespace DissociateTrunkEndpointIax {
  export type RequestParams = {
    iaxId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateTrunkEndpointIaxData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.iax.{iax_id}.update`
 * @tags trunks, endpoints, iax
 * @name AssociateTrunkEndpointIax
 * @summary Associate trunk and IAX endpoint
 * @request PUT:/trunks/{trunk_id}/endpoints/iax/{iax_id}
 * @secure
*/
export namespace AssociateTrunkEndpointIax {
  export type RequestParams = {
    iaxId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateTrunkEndpointIaxData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.sip.{sip_uuid}.delete`
 * @tags trunks, endpoints, sip
 * @name DissociateTrunkEndpointSip
 * @summary Dissociate trunk and SIP endpoint
 * @request DELETE:/trunks/{trunk_id}/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace DissociateTrunkEndpointSip {
  export type RequestParams = {
    sipUuid: string,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateTrunkEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.endpoints.sip.{sip_uuid}.update`
 * @tags trunks, endpoints, sip
 * @name AssociateTrunkEndpointSip
 * @summary Associate trunk and SIP endpoint
 * @request PUT:/trunks/{trunk_id}/endpoints/sip/{sip_uuid}
 * @secure
*/
export namespace AssociateTrunkEndpointSip {
  export type RequestParams = {
    sipUuid: string,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateTrunkEndpointSipData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.registers.iax.{iax_id}.delete`
 * @tags trunks, registers, iax
 * @name DissociateTrunkRegisterIax
 * @summary Dissociate trunk and IAX register
 * @request DELETE:/trunks/{trunk_id}/registers/iax/{iax_id}
 * @secure
*/
export namespace DissociateTrunkRegisterIax {
  export type RequestParams = {
    iaxId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateTrunkRegisterIaxData;
}
        
/**
 * @description **Required ACL:** `confd.trunks.{trunk_id}.registers.iax.{iax_id}.update`
 * @tags trunks, registers, iax
 * @name AssociateTrunkRegisterIax
 * @summary Associate trunk and IAX register
 * @request PUT:/trunks/{trunk_id}/registers/iax/{iax_id}
 * @secure
*/
export namespace AssociateTrunkRegisterIax {
  export type RequestParams = {
    iaxId: number,
  /** Trunk's ID */
    trunkId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateTrunkRegisterIaxData;
}
      }

    export namespace User {
        
/**
 * @description **Required ACL:** confd.users.me.meetings.{meeting_uuid}.authorizations.read
 * @tags meeting_authorizations, meetings, users
 * @name ListUserMeetingAuthorizations
 * @summary List all guest authorization requests of a meeting
 * @request GET:/user/me/meetings/{meeting_uuid}/authorizations
 * @secure
*/
export namespace ListUserMeetingAuthorizations {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListUserMeetingAuthorizationsData;
}
        
/**
 * @description **Required ACL:** confd.users.me.meetings.{meeting_uuid}.authorizations.{authorization_uuid}.accept.update
 * @tags meeting_authorizations, meetings, users
 * @name PutUserMeetingAuthorizationAccept
 * @summary Accept a guest authorization request
 * @request PUT:/user/me/meetings/{meeting_uuid}/authorizations/{authorization_uuid}/accept
 * @secure
*/
export namespace PutUserMeetingAuthorizationAccept {
  export type RequestParams = {
  /** Authorization UUID */
    authorizationUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = PutUserMeetingAuthorizationAcceptData;
}
        
/**
 * @description **Required ACL:** confd.users.me.meetings.{meeting_uuid}.authorizations.{authorization_uuid}.reject.update
 * @tags meeting_authorizations, meetings, users
 * @name PutUserMeetingAuthorizationReject
 * @summary Reject a guest authorization request
 * @request PUT:/user/me/meetings/{meeting_uuid}/authorizations/{authorization_uuid}/reject
 * @secure
*/
export namespace PutUserMeetingAuthorizationReject {
  export type RequestParams = {
  /** Authorization UUID */
    authorizationUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = PutUserMeetingAuthorizationRejectData;
}
      }

    export namespace Users {
        
/**
 * @description **Required ACL:** `confd.users.read`
 * @tags users
 * @name ListUser
 * @summary List users
 * @request GET:/users
 * @secure
*/
export namespace ListUser {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Search filter for resource UUID, can be used to search multiple elements. Using a comma separated list of UUID
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
    uuid?: (string)[],
  /** Different view of the list of users. */
    view?: "directory" | "summary",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserData;
}
        
/**
 * @description **Required ACL:** `confd.users.create`
 * @tags users
 * @name CreateUser
 * @summary Create user
 * @request POST:/users
 * @secure
*/
export namespace CreateUser {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = UserPost;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateUserData;
}
        
/**
 * @description **Required ACL:** `confd.users.blocklist.read`
 * @tags blocklist
 * @name ListBlocklistNumbers
 * @summary List all blocklisted numbers in tenant
 * @request GET:/users/blocklist/numbers
 * @secure
*/
export namespace ListBlocklistNumbers {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /** filter blocklist numbers by the blocklist owner's uuid */
    user_uuid?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListBlocklistNumbersData;
}
        
/**
 * @description **Required ACL:** `confd.users.blocklist.read`
 * @tags blocklist
 * @name GetBlocklistNumber
 * @summary Get blocklist number by uuid
 * @request GET:/users/blocklist/numbers/{blocklist_number_uuid}
 * @secure
*/
export namespace GetBlocklistNumber {
  export type RequestParams = {
  /**
   * UUID of the blocklisted number
   * @format uuid
   */
    blocklistNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetBlocklistNumberData;
}
        
/**
 * @description **Required ACL:** `confd.users.export.read` CSV field list available at https://wazo-platform.org/uc-doc/administration/users/csv_import
 * @tags users
 * @name ExportUsersCsv
 * @summary Mass export users and associated resources
 * @request GET:/users/export
 * @secure
*/
export namespace ExportUsersCsv {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ExportUsersCsvData;
}
        
/**
 * @description **Required ACL:** `confd.users.import.create` CSV field list available at https://wazo-platform.org/uc-doc/administration/users/csv_import
 * @tags users
 * @name ImportUsersCsv
 * @summary Mass import users and associated resources
 * @request POST:/users/import
 * @secure
*/
export namespace ImportUsersCsv {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = ImportUsersCsvPayload;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ImportUsersCsvData;
}
        
/**
 * @description ** This endpoint is disabled.** **Required ACL:** `confd.users.import.update` CSV field list available at https://wazo-platform.org/uc-doc/administration/users/csv_import This resource has been disabled since it creates invalid configurations
 * @tags users
 * @name UpdateUsersCsv
 * @summary **Disabled!** Mass import users and associated resources
 * @request PUT:/users/import
 * @secure
*/
export namespace UpdateUsersCsv {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = UpdateUsersCsvPayload;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = UpdateUsersCsvData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.blocklist.read`
 * @tags blocklist
 * @name ListUsersMeBlocklistNumbers
 * @summary List blocklist numbers of current user
 * @request GET:/users/me/blocklist/numbers
 * @secure
*/
export namespace ListUsersMeBlocklistNumbers {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListUsersMeBlocklistNumbersData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.blocklist.create`
 * @tags blocklist
 * @name CreateUsersMeBlocklistNumber
 * @summary Add a new blocklist number
 * @request POST:/users/me/blocklist/numbers
 * @secure
*/
export namespace CreateUsersMeBlocklistNumber {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = UserBlocklistNumber;
  export type RequestHeaders = {};
  export type ResponseBody = CreateUsersMeBlocklistNumberData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.blocklist.delete`
 * @tags blocklist
 * @name DeleteUsersMeBlocklistNumber
 * @summary Delete a single blocklisted number by uuid
 * @request DELETE:/users/me/blocklist/numbers/{blocklist_number_uuid}
 * @secure
*/
export namespace DeleteUsersMeBlocklistNumber {
  export type RequestParams = {
  /**
   * UUID of the blocklisted number
   * @format uuid
   */
    blocklistNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.me.blocklist.read`
 * @tags blocklist
 * @name GetUsersMeBlocklistNumber
 * @summary Get blocklist number by uuid
 * @request GET:/users/me/blocklist/numbers/{blocklist_number_uuid}
 * @secure
*/
export namespace GetUsersMeBlocklistNumber {
  export type RequestParams = {
  /**
   * UUID of the blocklisted number
   * @format uuid
   */
    blocklistNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUsersMeBlocklistNumberData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.blocklist.update`
 * @tags blocklist
 * @name UpdateUsersMeBlocklistNumber
 * @summary Update a single blocklisted number by uuid
 * @request PUT:/users/me/blocklist/numbers/{blocklist_number_uuid}
 * @secure
*/
export namespace UpdateUsersMeBlocklistNumber {
  export type RequestParams = {
  /**
   * UUID of the blocklisted number
   * @format uuid
   */
    blocklistNumberUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserBlocklistNumber;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.me.meetings.read`
 * @tags meetings, users
 * @name ListUserMeetings
 * @summary List user meetings
 * @request GET:/users/me/meetings
 * @secure
*/
export namespace ListUserMeetings {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserMeetingsData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.meetings.create`
 * @tags meetings, users
 * @name CreateUserMeeting
 * @summary Create user meeting
 * @request POST:/users/me/meetings
 * @secure
*/
export namespace CreateUserMeeting {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = MeetingUserRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateUserMeetingData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.meetings.{meeting_uuid}.delete`
 * @tags meetings, users
 * @name DeleteUserMeeting
 * @summary Delete one of the meetings of the current user
 * @request DELETE:/users/me/meetings/{meeting_uuid}
 * @secure
*/
export namespace DeleteUserMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.me.meetings.{meeting_uuid}.read`
 * @tags meetings, users
 * @name GetUserMeeting
 * @summary Get one of the meetings of the current user
 * @request GET:/users/me/meetings/{meeting_uuid}
 * @secure
*/
export namespace GetUserMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUserMeetingData;
}
        
/**
 * @description **Required ACL:** `confd.users.me.meetings.{meeting_uuid}.update`
 * @tags meetings, users
 * @name UpdateUserMeeting
 * @summary Update one of the meetings of the current user
 * @request PUT:/users/me/meetings/{meeting_uuid}
 * @secure
*/
export namespace UpdateUserMeeting {
  export type RequestParams = {
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = MeetingRequest;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** confd.users.me.meetings.{meeting_uuid}.authorizations.{authorization_uuid}.read
 * @tags meeting_authorizations, meetings, guests
 * @name DeleteUserMeetingAuthorization
 * @summary Delete the guest authorization to enter a meeting
 * @request DELETE:/users/me/meetings/{meeting_uuid}/authorizations/{authorization_uuid}
 * @secure
*/
export namespace DeleteUserMeetingAuthorization {
  export type RequestParams = {
  /** Authorization UUID */
    authorizationUuid: string,
  /** Guest UUID. It must be generated by the guest. */
    guestUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** confd.users.me.meetings.{meeting_uuid}.authorizations.{authorization_uuid}.read
 * @tags meeting_authorizations, meetings, guests
 * @name GetUserMeetingAuthorization
 * @summary Read the guest authorization to enter a meeting
 * @request GET:/users/me/meetings/{meeting_uuid}/authorizations/{authorization_uuid}
 * @secure
*/
export namespace GetUserMeetingAuthorization {
  export type RequestParams = {
  /** Authorization UUID */
    authorizationUuid: string,
  /** Guest UUID. It must be generated by the guest. */
    guestUuid: string,
  /** Meeting UUID */
    meetingUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserMeetingAuthorizationData;
}
        
/**
 * @description **Required ACL:** `confd.users.subscriptions.read`
 * @tags users
 * @name GetUsersSubscriptions
 * @summary Get user subscription
 * @request GET:/users/subscriptions
 * @secure
*/
export namespace GetUsersSubscriptions {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUsersSubscriptionsData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.delete` A user can not be deleted if he is associated to a line or a voicemail. Any line or voicemail attached to the user must be dissociated first. The user will also be removed from all queues, groups or other Wazo entities whom he is member. **Disclaimer**: if `recursive=true`, the user is deleted, all their associations with any related resources are removed, and some resources (lines, extensions, incalls and auth user) are deleted too.
 * @tags users
 * @name DeleteUser
 * @summary Delete user
 * @request DELETE:/users/{user_id}
 * @secure
*/
export namespace DeleteUser {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {
  /** Indicates if the resources related to the user must be deleted too. */
    recursive?: boolean,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.read`
 * @tags users
 * @name GetUser
 * @summary Get user
 * @request GET:/users/{user_id}
 * @secure
*/
export namespace GetUser {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUserData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.read`
 * @tags users
 * @name HeadUser
 * @summary Check if user exists
 * @request HEAD:/users/{user_id}
 * @secure
*/
export namespace HeadUser {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = HeadUserData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.update` If the firstname or the lastname is modified, the name of associated voicemail is also updated.
 * @tags users
 * @name UpdateUser
 * @summary Update user
 * @request PUT:/users/{user_id}
 * @secure
*/
export namespace UpdateUser {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = User;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.agents.delete`
 * @tags users, agents
 * @name DissociateUserAgent
 * @summary Dissociate user and agent
 * @request DELETE:/users/{user_id}/agents
 * @secure
*/
export namespace DissociateUserAgent {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateUserAgentData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.agents.{agent_id}.update`
 * @tags users, agents
 * @name AssociateUserAgent
 * @summary Associate user and agent
 * @request PUT:/users/{user_id}/agents/{agent_id}
 * @secure
*/
export namespace AssociateUserAgent {
  export type RequestParams = {
  /** Agent’s ID */
    agentId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateUserAgentData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.callerids.outgoing.read`
 * @tags users
 * @name ListUserCalleridOutgoing
 * @summary List user's outgoing callerids
 * @request GET:/users/{user_id}/callerids/outgoing
 * @secure
*/
export namespace ListUserCalleridOutgoing {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserCalleridOutgoingData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.callpermissions.{call_permission_id}.delete`
 * @tags users, callpermissions
 * @name DissociateUserCallpermission
 * @summary Dissociate user and call permission
 * @request DELETE:/users/{user_id}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace DissociateUserCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateUserCallpermissionData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.callpermissions.{call_permission_id}.update`
 * @tags users, callpermissions
 * @name AssociateUserCallpermission
 * @summary Associate user and call permission
 * @request PUT:/users/{user_id}/callpermissions/{callpermission_id}
 * @secure
*/
export namespace AssociateUserCallpermission {
  export type RequestParams = {
  /** Call Permission's ID */
    callpermissionId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.fallbacks.read`
 * @tags users
 * @name GetUserFallback
 * @summary List all fallbacks for user
 * @request GET:/users/{user_id}/fallbacks
 * @secure
*/
export namespace GetUserFallback {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.fallbacks.update` **WARNING** This endpoint delete all fields that are not defined.
 * @tags users
 * @name UpdateUserFallback
 * @summary Update user's fallbacks
 * @request PUT:/users/{user_id}/fallbacks
 * @secure
*/
export namespace UpdateUserFallback {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserFallbacks;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateUserFallbackData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.forwards.read`
 * @tags forwards, users
 * @name ListUserForwards
 * @summary List forwards for a user
 * @request GET:/users/{user_id}/forwards
 * @secure
*/
export namespace ListUserForwards {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = ListUserForwardsData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.forwards.update`
 * @tags forwards, users
 * @name UpdateUserForwards
 * @summary Update all forwards for a user
 * @request PUT:/users/{user_id}/forwards
 * @secure
*/
export namespace UpdateUserForwards {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserForwards;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.forwards.{forward_name}.read`
 * @tags forwards, users
 * @name GetUserForward
 * @summary Get forward for a user
 * @request GET:/users/{user_id}/forwards/{forward_name}
 * @secure
*/
export namespace GetUserForward {
  export type RequestParams = {
  /** the forward name */
    forwardName: "busy" | "noanswer" | "unconditional",
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserForwardData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.forwards.{forward_name}.update`
 * @tags forwards, users
 * @name UpdateUserForward
 * @summary Update a forward for a user
 * @request PUT:/users/{user_id}/forwards/{forward_name}
 * @secure
*/
export namespace UpdateUserForward {
  export type RequestParams = {
  /** the forward name */
    forwardName: "busy" | "noanswer" | "unconditional",
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserForward;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.read`
 * @tags funckeys, users
 * @name ListUserFuncKeys
 * @summary List func keys for a user
 * @request GET:/users/{user_id}/funckeys
 * @secure
*/
export namespace ListUserFuncKeys {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserFuncKeysData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.update` **WARNING** This endpoint restore to default value or delete all fields that are not defined.
 * @tags funckeys, users
 * @name UpdateUserFuncKeys
 * @summary Update func keys for a user
 * @request PUT:/users/{user_id}/funckeys
 * @secure
*/
export namespace UpdateUserFuncKeys {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = FuncKeyTemplate;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.templates.read`
 * @tags funckeys, users
 * @name ListUserFuncKeyTemplateAssociations
 * @summary List funckey templates associated to user
 * @request GET:/users/{user_id}/funckeys/templates
 * @secure
*/
export namespace ListUserFuncKeyTemplateAssociations {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserFuncKeyTemplateAssociationsData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.templates.{template_id}.delete`
 * @tags funckeys, users
 * @name DissociateUserFuncKeyTemplate
 * @summary Dissociate a func key template to a user
 * @request DELETE:/users/{user_id}/funckeys/templates/{template_id}
 * @secure
*/
export namespace DissociateUserFuncKeyTemplate {
  export type RequestParams = {
    templateId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateUserFuncKeyTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.templates.{template_id}.update`
 * @tags funckeys, users
 * @name AssociateUserFuncKeyTemplate
 * @summary Associate a func key template to a user
 * @request PUT:/users/{user_id}/funckeys/templates/{template_id}
 * @secure
*/
export namespace AssociateUserFuncKeyTemplate {
  export type RequestParams = {
    templateId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateUserFuncKeyTemplateData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.{position}.delete`
 * @tags funckeys, users
 * @name DeleteUserFuncKey
 * @summary Remove func key for user
 * @request DELETE:/users/{user_id}/funckeys/{position}
 * @secure
*/
export namespace DeleteUserFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.{position}.read`
 * @tags funckeys, users
 * @name GetUserFuncKey
 * @summary Get a func key for a user
 * @request GET:/users/{user_id}/funckeys/{position}
 * @secure
*/
export namespace GetUserFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUserFuncKeyData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.funckeys.{position}.update`
 * @tags funckeys, users
 * @name UpdateUserFuncKey
 * @summary Add/Replace a func key for a user
 * @request PUT:/users/{user_id}/funckeys/{position}
 * @secure
*/
export namespace UpdateUserFuncKey {
  export type RequestParams = {
  /** position of the funckey */
    position: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = FuncKey;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.groups` **WARNING** This endpoint remove all groups which are not defined.
 * @tags groups, users
 * @name UpdateUserGroups
 * @summary Update user and groups
 * @request PUT:/users/{user_id}/groups
 * @secure
*/
export namespace UpdateUserGroups {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserGroupsID;
  export type RequestHeaders = {};
  export type ResponseBody = UpdateUserGroupsData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.lines.update`
 * @tags users, lines
 * @name AssociateUserLines
 * @summary Associate user and lines
 * @request PUT:/users/{user_id}/lines
 * @secure
*/
export namespace AssociateUserLines {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = LinesID;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateUserLinesData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.lines.{line_id}.delete` Any devices that are attached the line must be removed before dissociating a user from its line. A device can be dissociated be resetting it to autoprov mode.
 * @tags users, lines
 * @name DissociateUserLine
 * @summary Dissociate user and line
 * @request DELETE:/users/{user_id}/lines/{line_id}
 * @secure
*/
export namespace DissociateUserLine {
  export type RequestParams = {
    lineId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateUserLineData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.lines.{line_id}.update`
 * @tags users, lines
 * @name AssociateUserLine
 * @summary Associate user and line
 * @request PUT:/users/{user_id}/lines/{line_id}
 * @secure
*/
export namespace AssociateUserLine {
  export type RequestParams = {
    lineId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateUserLineData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.schedules.{schedule_id}.delete`
 * @tags users, schedules
 * @name DissociateUserSchedule
 * @summary Dissociate user and schedule
 * @request DELETE:/users/{user_id}/schedules/{schedule_id}
 * @secure
*/
export namespace DissociateUserSchedule {
  export type RequestParams = {
  /** Schedule's ID */
    scheduleId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = DissociateUserScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.schedules.{schedule_id}.update`
 * @tags users, schedules
 * @name AssociateUserSchedule
 * @summary Associate user and schedule
 * @request PUT:/users/{user_id}/schedules/{schedule_id}
 * @secure
*/
export namespace AssociateUserSchedule {
  export type RequestParams = {
  /** Schedule's ID */
    scheduleId: number,
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = AssociateUserScheduleData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.services.read`
 * @tags users
 * @name GetUserServices
 * @summary Get status of all user's services
 * @request GET:/users/{user_id}/services
 * @secure
*/
export namespace GetUserServices {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserServicesData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.services.update`
 * @tags users
 * @name UpdateUserServices
 * @summary Update all services for a user
 * @request PUT:/users/{user_id}/services
 * @secure
*/
export namespace UpdateUserServices {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserServices;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.services.{service}.read`
 * @tags users
 * @name GetUserService
 * @summary Get status of service
 * @request GET:/users/{user_id}/services/{service_name}
 * @secure
*/
export namespace GetUserService {
  export type RequestParams = {
  /** the service name */
    serviceName: "dnd" | "incallfilter",
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserServiceData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.services.{service}.update`
 * @tags users
 * @name UpdateUserService
 * @summary Enable/Disable service for a user
 * @request PUT:/users/{user_id}/services/{service_name}
 * @secure
*/
export namespace UpdateUserService {
  export type RequestParams = {
  /** the service name */
    serviceName: "dnd" | "incallfilter",
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserService;
  export type RequestHeaders = {};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.voicemails.delete`
 * @tags users, voicemails
 * @name DissociateUserVoicemail
 * @summary Dissociate user and voicemail
 * @request DELETE:/users/{user_id}/voicemails
 * @secure
*/
export namespace DissociateUserVoicemail {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = DissociateUserVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.voicemails.read`
 * @tags users, voicemails
 * @name GetUserVoicemail
 * @summary Get user voicemails
 * @request GET:/users/{user_id}/voicemails
 * @secure
*/
export namespace GetUserVoicemail {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUserVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.voicemails.create`
 * @tags users, voicemails
 * @name CreateUserVoicemail
 * @summary Create user voicemail
 * @request POST:/users/{user_id}/voicemails
 * @secure
*/
export namespace CreateUserVoicemail {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,

};
  export type RequestQuery = {};
  export type RequestBody = Voicemail;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateUserVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_id}.voicemails.{voicemail_id}.update`
 * @tags users, voicemails
 * @name AssociateUserVoicemail
 * @summary Associate user and voicemail
 * @request PUT:/users/{user_id}/voicemails/{voicemail_id}
 * @secure
*/
export namespace AssociateUserVoicemail {
  export type RequestParams = {
  /** the user's ID or UUID */
    userId: string,
    voicemailId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = AssociateUserVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.blocklist.read`
 * @tags blocklist
 * @name ListUserBlocklistNumbers
 * @summary List blocklisted numbers of a user
 * @request GET:/users/{user_uuid}/blocklist/numbers
 * @secure
*/
export namespace ListUserBlocklistNumbers {
  export type RequestParams = {
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** filter blocklisted numbers by a label string */
    label?: string,
  /** Maximum number of items to return in the list */
    limit?: number,
  /** filter blocklisted numbers by a number string */
    number?: string,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserBlocklistNumbersData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.blocklist.read`
 * @tags blocklist
 * @name LookupUserBlocklistNumber
 * @summary Check if a number is part of a user's blocklist
 * @request HEAD:/users/{user_uuid}/blocklist/numbers
 * @secure
*/
export namespace LookupUserBlocklistNumber {
  export type RequestParams = {
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /** E.164 number string to lookup(exact match) in the user's blocklist */
    number_exact: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = LookupUserBlocklistNumberData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.external.apps.read`
 * @tags external_apps, users
 * @name ListUserExternalApps
 * @summary List user external apps
 * @request GET:/users/{user_uuid}/external/apps
 * @secure
*/
export namespace ListUserExternalApps {
  export type RequestParams = {
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,
  /**
   * Different view of the external app endpoint
   * 
   * The `default` view, when the argument is omitted, is to return the user value for this
   * external app
   * 
   * The `fallback` view return the user value for this external app, but if not found, will
   * fallback to the tenant configured value
   * 
   * **WARNING**: Using fallback view on list will disabled all pagination and search features
   */
    view?: "fallback",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListUserExternalAppsData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.external.apps.{app_name}.delete`
 * @tags external_apps, users
 * @name DeleteUserExternalApp
 * @summary Delete user external app
 * @request DELETE:/users/{user_uuid}/external/apps/{app_name}
 * @secure
*/
export namespace DeleteUserExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.external.apps.{app_name}.read`
 * @tags external_apps, users
 * @name GetUserExternalApp
 * @summary Get user external app
 * @request GET:/users/{user_uuid}/external/apps/{app_name}
 * @secure
*/
export namespace GetUserExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /**
   * Different view of the external app endpoint
   * 
   * The `default` view, when the argument is omitted, is to return the user value for this
   * external app
   * 
   * The `fallback` view return the user value for this external app, but if not found, will
   * fallback to the tenant configured value
   * 
   * **WARNING**: Using fallback view on list will disabled all pagination and search features
   */
    view?: "fallback",

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetUserExternalAppData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.external.apps.{app_name}.create`
 * @tags external_apps, users
 * @name CreateUserExternalApp
 * @summary Create user external app
 * @request POST:/users/{user_uuid}/external/apps/{app_name}
 * @secure
*/
export namespace CreateUserExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserExternalApp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = CreateUserExternalAppData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.external.apps.{app_name}.update`
 * @tags external_apps, users
 * @name UpdateUserExternalApp
 * @summary Update user external app
 * @request PUT:/users/{user_uuid}/external/apps/{app_name}
 * @secure
*/
export namespace UpdateUserExternalApp {
  export type RequestParams = {
  /** External App's name */
    appName: string,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {};
  export type RequestBody = UserExternalApp;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.lines.main.associated.endpoints.sip.read`
 * @tags endpoints, lines, users
 * @name GetUserLineMainAssociatedEndpointsSip
 * @summary Get SIP endpoint of main line for a user
 * @request GET:/users/{user_uuid}/lines/main/associated/endpoints/sip
 * @secure
*/
export namespace GetUserLineMainAssociatedEndpointsSip {
  export type RequestParams = {
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserLineMainAssociatedEndpointsSipData;
}
        
/**
 * @description **Required ACL:** `confd.users.{user_uuid}.lines.{line_id}.associated.endpoints.sip.read`
 * @tags endpoints, lines, users
 * @name GetUserLineAssociatedEndpointsSip
 * @summary Get SIP endpoint of a line for a user
 * @request GET:/users/{user_uuid}/lines/{line_id}/associated/endpoints/sip
 * @secure
*/
export namespace GetUserLineAssociatedEndpointsSip {
  export type RequestParams = {
    lineId: number,
  /**
   * the user's UUID
   * @format uuid
   */
    userUuid: string,

};
  export type RequestQuery = {
  /**
   * Different view of the SIP endpoint
   * 
   * The `default` view, when the argument is omitted, is to include only options that
   * are defined on the specified endpoint.
   * 
   * The `merged` view includes all options from included templates.
   */
    view?: "merged",

};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetUserLineAssociatedEndpointsSipData;
}
      }

    export namespace Voicemails {
        
/**
 * @description **Required ACL:** `confd.voicemails.read`
 * @tags voicemails
 * @name ListVoicemails
 * @summary List voicemails
 * @request GET:/voicemails
 * @secure
*/
export namespace ListVoicemails {
  export type RequestParams = {};
  export type RequestQuery = {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
    direction?: "asc" | "desc",
  /** Maximum number of items to return in the list */
    limit?: number,
  /** Number of items to skip over in the list. Useful for pagination. */
    offset?: number,
  /** Name of the field to use for sorting the list of items returned. */
    order?: string,
  /**
   * Should the query include sub-tenants
   * @default false
   */
    recurse?: boolean,
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
    search?: string,

};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = ListVoicemailsData;
}
        
/**
 * @description **Required ACL:** `confd.voicemails.create`
 * @tags voicemails
 * @name CreateVoicemail
 * @summary Create voicemail
 * @request POST:/voicemails
 * @secure
*/
export namespace CreateVoicemail {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Voicemail;
  export type RequestHeaders = {};
  export type ResponseBody = CreateVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.voicemails.{voicemail_id}.delete` A voicemail can not be deleted if it is still attached to a user. The user must be dissociated first. Any extension that redirects to the voicemail (e.g. an Incoming call) will be disabled after deletion.
 * @tags voicemails
 * @name DeleteVoicemail
 * @summary Delete voicemail
 * @request DELETE:/voicemails/{voicemail_id}
 * @secure
*/
export namespace DeleteVoicemail {
  export type RequestParams = {
    voicemailId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
        
/**
 * @description **Required ACL:** `confd.voicemails.{voicemail_id}.read`
 * @tags voicemails
 * @name GetVoicemail
 * @summary Get voicemail
 * @request GET:/voicemails/{voicemail_id}
 * @secure
*/
export namespace GetVoicemail {
  export type RequestParams = {
    voicemailId: number,

};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = GetVoicemailData;
}
        
/**
 * @description **Required ACL:** `confd.voicemails.{voicemail_id}.update`
 * @tags voicemails
 * @name UpdateVoicemail
 * @summary Update voicemail
 * @request PUT:/voicemails/{voicemail_id}
 * @secure
*/
export namespace UpdateVoicemail {
  export type RequestParams = {
    voicemailId: number,

};
  export type RequestQuery = {};
  export type RequestBody = Voicemail;
  export type RequestHeaders = {
  /** The tenant's UUID, defining the ownership of a given resource. */
    "Wazo-Tenant"?: string,

};
  export type ResponseBody = any;
}
      }

    export namespace Wizard {
        
/**
 * @description **Required ACL:** none
 * @tags wizard
 * @name GetWizardStatus
 * @summary Get wizard status
 * @request GET:/wizard
 * @secure
*/
export namespace GetWizardStatus {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetWizardStatusData;
}
        
/**
 * @description **Required ACL:** none This API can only be used before wizard configuration.
 * @tags wizard
 * @name PassWizard
 * @summary Pass the wizard
 * @request POST:/wizard
 * @secure
*/
export namespace PassWizard {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = Wizard;
  export type RequestHeaders = {};
  export type ResponseBody = PassWizardData;
}
        
/**
 * @description **Required ACL:** none This API can only be used before wizard configuration.
 * @tags wizard
 * @name GetWizardDiscover
 * @summary Get wizard discover
 * @request GET:/wizard/discover
 * @secure
*/
export namespace GetWizardDiscover {
  export type RequestParams = {};
  export type RequestQuery = {};
  export type RequestBody = never;
  export type RequestHeaders = {};
  export type ResponseBody = GetWizardDiscoverData;
}
      }

 