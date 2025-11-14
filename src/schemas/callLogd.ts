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

export enum CallStatus {
  Answered = "answered",
  Blocked = "blocked",
  Unknown = "unknown",
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

export type DownloadListData = any;

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

export type ExportsDetailData = Export;

export type GetCdr2Data = CDR;

export type GetCdrData = CDRList;

export interface GetCdrParams {
  /** Filter list of items */
  call_direction?: "internal" | "inbound" | "outbound";
  /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
  call_status?: "answered" | "blocked";
  /** Filter by conversation identifier */
  conversation_id?: string;
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Will only return one result for the selected field */
  distinct?: "peer_exten";
  /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
  format?: "csv" | "json";
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Ignore CDR created before the given CDR ID. */
  from_id?: number;
  /** Maximum number of items to return in the list. Default to 1000 if not specified. */
  limit?: number;
  /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
  number?: string;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
  order?: string;
  /** Filter by recorded status. */
  recorded?: boolean;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Filter by requested_internal_context */
  requested_internal_context?: string;
  /** Filter by requested_internal_extension */
  requested_internal_extension?: string;
  /** Filter list of items */
  search?: string;
  /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
  tags?: string[];
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
  user_uuid?: string[];
}

export type GetConfigData = any;

export type GetUsersData = CDRList;

export interface GetUsersParams {
  /** Filter list of items */
  call_direction?: "internal" | "inbound" | "outbound";
  /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
  call_status?: "answered" | "blocked";
  /** Filter by conversation identifier */
  conversation_id?: string;
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Will only return one result for the selected field */
  distinct?: "peer_exten";
  /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
  format?: "csv" | "json";
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Ignore CDR created before the given CDR ID. */
  from_id?: number;
  /** Maximum number of items to return in the list. Default to 1000 if not specified. */
  limit?: number;
  /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
  number?: string;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
  order?: string;
  /** Filter by recorded status. */
  recorded?: boolean;
  /** Filter by requested_internal_context */
  requested_internal_context?: string;
  /** Filter by requested_internal_extension */
  requested_internal_extension?: string;
  /** Filter list of items */
  search?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /** UUID of the given user */
  userUuid: string;
}

export type MeCdrListData = CDRList;

export interface MeCdrListParams {
  /** Filter list of items */
  call_direction?: "internal" | "inbound" | "outbound";
  /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
  call_status?: "answered" | "blocked";
  /** Filter by conversation identifier */
  conversation_id?: string;
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Will only return one result for the selected field */
  distinct?: "peer_exten";
  /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
  format?: "csv" | "json";
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Ignore CDR created before the given CDR ID. */
  from_id?: number;
  /** Maximum number of items to return in the list. Default to 1000 if not specified. */
  limit?: number;
  /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
  number?: string;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
  order?: string;
  /** Filter by recorded status. */
  recorded?: boolean;
  /** Filter by requested_internal_context */
  requested_internal_context?: string;
  /** Filter by requested_internal_extension */
  requested_internal_extension?: string;
  /** Filter list of items */
  search?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
  user_uuid?: string[];
}

export type MeCdrRecordingsMediaListData = any;

export type PatchConfigData = any;

export type PatchConfigPayload = ConfigPatchItem[];

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

export type RecordingsMediaDelete2Data = any;

export type RecordingsMediaDeleteData = any;

export interface RecordingsMediaDeletePayload {
  cdr_ids?: number[];
}

export interface RecordingsMediaExportCreateData {
  export_uuid?: string;
}

export interface RecordingsMediaExportCreateParams {
  /** Filter list of items */
  call_direction?: "internal" | "inbound" | "outbound";
  /** E-mail address */
  email?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Ignore CDR created before the given CDR ID. */
  from_id?: number;
  /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
  number?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Filter list of items */
  search?: string;
  /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
  tags?: string[];
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
  user_uuid?: string[];
}

export interface RecordingsMediaExportCreatePayload {
  cdr_ids?: string[];
}

export type RecordingsMediaListData = any;

export interface Retention {
  cdr_days?: number;
  default_cdr_days?: number;
  default_export_days?: number;
  default_recording_days?: number;
  export_days?: number;
  recording_days?: number;
}

export type RetentionListData = Retention;

export type RetentionUpdateData = any;

export type StatisticsList2Data = AgentStatistics;

export interface StatisticsList2Params {
  /** ID of the agent. */
  agentId: number;
  /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_end_time?: string;
  /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_start_time?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
  interval?: "hour" | "day" | "month";
  /**
   * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
   * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
   * version installed on the server.
   * @default "UTC"
   */
  timezone?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /**
   * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
   * @uniqueItems true
   * @default [1,2,3,4,5,6,7]
   */
  week_days?: number[];
}

export interface StatisticsList2Params2 {
  /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_end_time?: string;
  /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_start_time?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
  interval?: "hour" | "day" | "month";
  /** The number of seconds representing a good quality of service. */
  qos_threshold?: number;
  /** ID of the queue. */
  queueId: number;
  /**
   * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
   * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
   * version installed on the server.
   * @default "UTC"
   */
  timezone?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /**
   * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
   * @uniqueItems true
   * @default [1,2,3,4,5,6,7]
   */
  week_days?: number[];
}

export type StatisticsList2Result = QueueStatistics;

export type StatisticsListData = AgentsStatistics;

export interface StatisticsListParams {
  /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_end_time?: string;
  /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_start_time?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /**
   * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
   * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
   * version installed on the server.
   * @default "UTC"
   */
  timezone?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /**
   * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
   * @uniqueItems true
   * @default [1,2,3,4,5,6,7]
   */
  week_days?: number[];
}

export interface StatisticsListParams2 {
  /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_end_time?: string;
  /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_start_time?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** The number of seconds representing a good quality of service. */
  qos_threshold?: number;
  /**
   * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
   * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
   * version installed on the server.
   * @default "UTC"
   */
  timezone?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /**
   * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
   * @uniqueItems true
   * @default [1,2,3,4,5,6,7]
   */
  week_days?: number[];
}

export type StatisticsListResult = QueuesStatistics;

export type StatisticsQosListData = QueueQoSStatistics;

export interface StatisticsQosListParams {
  /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_end_time?: string;
  /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
  day_start_time?: string;
  /**
   * Ignore calls before the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
   * converted according to the `timezone` parameter. If missing, the statistics
   * will start at the oldest available call with timezone UTC.
   * @format date-time
   */
  from?: string;
  /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
  interval?: "hour" | "day" | "month";
  /**
   * The steps of quality of service times used for the interval generation.
   * @uniqueItems true
   */
  qos_thresholds?: number[];
  /** ID of the queue. */
  queueId: number;
  /**
   * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
   * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
   * version installed on the server.
   * @default "UTC"
   */
  timezone?: string;
  /**
   * Ignore calls starting at or after the given date. Format is
   * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
   * according to the `timezone` parameter. If missing, the statistics will include the current
   * day.
   * @format date-time
   */
  until?: string;
  /**
   * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
   * @uniqueItems true
   * @default [1,2,3,4,5,6,7]
   */
  week_days?: number[];
}

export type StatusListData = StatusSummary;

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  service_token?: ComponentWithStatus;
  task_queue?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export namespace Agents {
  /**
   * @description **Required ACL:** `call-logd.agents.statistics.read` Statistics are aggregated by agents over the period specified by the `from` and `until` query parameters.
   * @tags agent_statistics
   * @name StatisticsList
   * @summary Statistics for all agents
   * @request GET:/agents/statistics
   * @secure
   */
  export namespace StatisticsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_end_time?: string;
      /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_start_time?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /**
       * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
       * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
       * version installed on the server.
       * @default "UTC"
       */
      timezone?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /**
       * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
       * @uniqueItems true
       * @default [1,2,3,4,5,6,7]
       */
      week_days?: number[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = StatisticsListData;
  }

  /**
   * @description **Required ACL:** `call-logd.agents.statistics.{agent_id}.read` Statistics for an agent are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period.
   * @tags agent_statistics
   * @name StatisticsList2
   * @summary Statistics for a specific agent
   * @request GET:/agents/{agent_id}/statistics
   * @originalName statisticsList
   * @duplicate
   * @secure
   */
  export namespace StatisticsList2 {
    export type RequestParams = {
      /** ID of the agent. */
      agentId: number;
    };
    export type RequestQuery = {
      /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_end_time?: string;
      /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_start_time?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
      interval?: "hour" | "day" | "month";
      /**
       * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
       * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
       * version installed on the server.
       * @default "UTC"
       */
      timezone?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /**
       * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
       * @uniqueItems true
       * @default [1,2,3,4,5,6,7]
       */
      week_days?: number[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = StatisticsList2Data;
  }
}

export namespace Cdr {
  /**
   * @description **Required ACL:** `call-logd.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
   * @tags cdr
   * @name GetCdr
   * @summary List CDR
   * @request GET:/cdr
   * @secure
   */
  export namespace GetCdr {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter list of items */
      call_direction?: "internal" | "inbound" | "outbound";
      /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
      call_status?: "answered" | "blocked";
      /** Filter by conversation identifier */
      conversation_id?: string;
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Will only return one result for the selected field */
      distinct?: "peer_exten";
      /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
      format?: "csv" | "json";
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Ignore CDR created before the given CDR ID. */
      from_id?: number;
      /** Maximum number of items to return in the list. Default to 1000 if not specified. */
      limit?: number;
      /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
      number?: string;
      /** Number of items to skip over in the list. Useful for pagination. */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
      order?: string;
      /** Filter by recorded status. */
      recorded?: boolean;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Filter by requested_internal_context */
      requested_internal_context?: string;
      /** Filter by requested_internal_extension */
      requested_internal_extension?: string;
      /** Filter list of items */
      search?: string;
      /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
      tags?: string[];
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
      user_uuid?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetCdrData;
  }

  /**
   * @description **Required ACL:** `call-logd.cdr.recordings.media.delete`
   * @tags cdr
   * @name RecordingsMediaDelete
   * @summary Delete multiple CDRs recording media
   * @request DELETE:/cdr/recordings/media
   * @secure
   */
  export namespace RecordingsMediaDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RecordingsMediaDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = RecordingsMediaDeleteData;
  }

  /**
   * @description **Required ACL:** `call-logd.cdr.recordings.media.export.create` This endpoint creates a new export and returns its UUID.
   * @tags cdr, exports
   * @name RecordingsMediaExportCreate
   * @summary Create an export for the recording media of multiple CDRs
   * @request POST:/cdr/recordings/media/export
   * @secure
   */
  export namespace RecordingsMediaExportCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter list of items */
      call_direction?: "internal" | "inbound" | "outbound";
      /** E-mail address */
      email?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Ignore CDR created before the given CDR ID. */
      from_id?: number;
      /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
      number?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Filter list of items */
      search?: string;
      /** Filter by tags. Each tag MUST be separated by a coma (,). Many tag will perform a logical AND. */
      tags?: string[];
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
      user_uuid?: string[];
    };
    export type RequestBody = RecordingsMediaExportCreatePayload;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RecordingsMediaExportCreateData;
  }

  /**
   * @description **Required ACL:** `call-logd.cdr.{cdr_id}.read`
   * @tags cdr
   * @name GetCdr2
   * @summary Get a CDR by ID
   * @request GET:/cdr/{cdr_id}
   * @originalName getCdr
   * @duplicate
   * @secure
   */
  export namespace GetCdr2 {
    export type RequestParams = {
      /** ID of the CDR */
      cdrId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCdr2Data;
  }

  /**
   * @description **Required ACL:** `call-logd.cdr.{cdr_id}.recordings.{recording_uuid}.media.delete`
   * @tags cdr
   * @name RecordingsMediaDelete2
   * @summary Delete a recording media
   * @request DELETE:/cdr/{cdr_id}/recordings/{recording_uuid}/media
   * @originalName recordingsMediaDelete
   * @duplicate
   * @secure
   */
  export namespace RecordingsMediaDelete2 {
    export type RequestParams = {
      /** ID of the CDR */
      cdrId: number;
      /** UUID of the recording */
      recordingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RecordingsMediaDelete2Data;
  }

  /**
   * @description **Required ACL:** `call-logd.cdr.{cdr_id}.recordings.{recording_uuid}.media.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
   * @tags cdr
   * @name RecordingsMediaList
   * @summary Get a recording media
   * @request GET:/cdr/{cdr_id}/recordings/{recording_uuid}/media
   * @secure
   */
  export namespace RecordingsMediaList {
    export type RequestParams = {
      /** ID of the CDR */
      cdrId: number;
      /** UUID of the recording */
      recordingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RecordingsMediaListData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `call_logd.config.read`
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
   * @description **Required ACL:** `call_logd.config.update` Changes are not persistent across service restart.
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

export namespace Exports {
  /**
   * @description **Required ACL:** `call-logd.exports.{export_uuid}.read`
   * @tags exports
   * @name ExportsDetail
   * @summary Get an export by the given UUID
   * @request GET:/exports/{export_uuid}
   * @secure
   */
  export namespace ExportsDetail {
    export type RequestParams = {
      /** UUID of the given export */
      exportUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportsDetailData;
  }

  /**
   * @description **Required ACL:** `call-logd.exports.{export_uuid}.download.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
   * @tags exports
   * @name DownloadList
   * @summary Download an export as a ZIP archive by the given UUID
   * @request GET:/exports/{export_uuid}/download
   * @secure
   */
  export namespace DownloadList {
    export type RequestParams = {
      /** UUID of the given export */
      exportUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DownloadListData;
  }
}

export namespace Queues {
  /**
   * @description **Required ACL:** `call-logd.queues.statistics.read` Statistics are aggregated by queues over the period specified by the `from` and `until` query parameters. **Notice**: Statistics are generated every 6 hours
   * @tags queue_statistics
   * @name StatisticsList
   * @summary Statistics for all queues
   * @request GET:/queues/statistics
   * @secure
   */
  export namespace StatisticsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_end_time?: string;
      /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_start_time?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** The number of seconds representing a good quality of service. */
      qos_threshold?: number;
      /**
       * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
       * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
       * version installed on the server.
       * @default "UTC"
       */
      timezone?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /**
       * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
       * @uniqueItems true
       * @default [1,2,3,4,5,6,7]
       */
      week_days?: number[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = StatisticsListResult;
  }

  /**
   * @description **Required ACL:** `call-logd.queues.statistics.{queue_id}.read` Statistics for a queue are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period. **Notice**: Statistics are generated every 6 hours
   * @tags queue_statistics
   * @name StatisticsList2
   * @summary Statistics for a specific queue
   * @request GET:/queues/{queue_id}/statistics
   * @originalName statisticsList
   * @duplicate
   * @secure
   */
  export namespace StatisticsList2 {
    export type RequestParams = {
      /** ID of the queue. */
      queueId: number;
    };
    export type RequestQuery = {
      /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_end_time?: string;
      /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_start_time?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
      interval?: "hour" | "day" | "month";
      /** The number of seconds representing a good quality of service. */
      qos_threshold?: number;
      /**
       * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
       * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
       * version installed on the server.
       * @default "UTC"
       */
      timezone?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /**
       * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
       * @uniqueItems true
       * @default [1,2,3,4,5,6,7]
       */
      week_days?: number[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = StatisticsList2Result;
  }

  /**
   * @description **Required ACL:** `call-logd.queues.statistics.{queue_id}.qos.read` QoS thresholds implicitly include a starting 0 and ending to infinite (null). Statistics for a queue are aggregated by the `interval` query parameter, or if not specified or empty, as a unique result over the period. The period is specified by the `from` and `until` query parameters. The last result returned by this route is always the aggregation of all calls over the whole specified period. **Notice**: Statistics are generated every 6 hours
   * @tags queue_statistics
   * @name StatisticsQosList
   * @summary QoS statistics for a specific queue
   * @request GET:/queues/{queue_id}/statistics/qos
   * @secure
   */
  export namespace StatisticsQosList {
    export type RequestParams = {
      /** ID of the queue. */
      queueId: number;
    };
    export type RequestQuery = {
      /** The time at which a day ends, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_end_time?: string;
      /** The time at which a day starts, inclusively. Accepted format is `HH:MM`, minutes are ignored. */
      day_start_time?: string;
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Aggregation interval. An empty value means no interval, so an aggregation on all values. */
      interval?: "hour" | "day" | "month";
      /**
       * The steps of quality of service times used for the interval generation.
       * @uniqueItems true
       */
      qos_thresholds?: number[];
      /**
       * Name of the timezone to use for dates and times. Example: America/New_York. Valid timezones
       * are defined by the <a href="https://en.wikipedia.org/wiki/Tz_database">Time Zone Database</a>
       * version installed on the server.
       * @default "UTC"
       */
      timezone?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /**
       * The days of the week that should be included. A week starts on Monday (1) and ends on Sunday (7).
       * @uniqueItems true
       * @default [1,2,3,4,5,6,7]
       */
      week_days?: number[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = StatisticsQosListData;
  }
}

export namespace Retention {
  /**
   * @description **Required ACL:** `call-logd.retention.read`
   * @tags retention
   * @name RetentionList
   * @summary Retention configuration
   * @request GET:/retention
   * @secure
   */
  export namespace RetentionList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RetentionListData;
  }

  /**
   * @description **Required ACL:** `call-logd.retention.update` **WARNING** This endpoint reset undefined keys to `null`.
   * @tags retention
   * @name RetentionUpdate
   * @summary Update retention configuration
   * @request PUT:/retention
   * @secure
   */
  export namespace RetentionUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Retention;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RetentionUpdateData;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `call-logd.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-call-logd
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

export namespace Users {
  /**
   * @description **Required ACL:** `call-logd.users.me.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
   * @tags cdr, users
   * @name MeCdrList
   * @summary List CDR of the authenticated user
   * @request GET:/users/me/cdr
   * @secure
   */
  export namespace MeCdrList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter list of items */
      call_direction?: "internal" | "inbound" | "outbound";
      /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
      call_status?: "answered" | "blocked";
      /** Filter by conversation identifier */
      conversation_id?: string;
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Will only return one result for the selected field */
      distinct?: "peer_exten";
      /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
      format?: "csv" | "json";
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Ignore CDR created before the given CDR ID. */
      from_id?: number;
      /** Maximum number of items to return in the list. Default to 1000 if not specified. */
      limit?: number;
      /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
      number?: string;
      /** Number of items to skip over in the list. Useful for pagination. */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
      order?: string;
      /** Filter by recorded status. */
      recorded?: boolean;
      /** Filter by requested_internal_context */
      requested_internal_context?: string;
      /** Filter by requested_internal_extension */
      requested_internal_extension?: string;
      /** Filter list of items */
      search?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
      /** Filter by user_uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
      user_uuid?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCdrListData;
  }

  /**
   * @description **Required ACL:** `call-logd.users.me.cdr.{cdr_id}.recordings.{recording_uuid}.media.read`
   * @tags cdr
   * @name MeCdrRecordingsMediaList
   * @summary Get a recording media from a user
   * @request GET:/users/me/cdr/{cdr_id}/recordings/{recording_uuid}/media
   * @secure
   */
  export namespace MeCdrRecordingsMediaList {
    export type RequestParams = {
      /** ID of the CDR */
      cdrId: number;
      /** UUID of the recording */
      recordingUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeCdrRecordingsMediaListData;
  }

  /**
   * @description **Required ACL:** `call-logd.users.{user_uuid}.cdr.read` This endpoint allow to use `?token={token_uuid}` and `?tenant={tenant_uuid}` query string to bypass headers
   * @tags cdr, users
   * @name GetUsers
   * @summary List CDR of the given user
   * @request GET:/users/{user_uuid}/cdr
   * @secure
   */
  export namespace GetUsers {
    export type RequestParams = {
      /** UUID of the given user */
      userUuid: string;
    };
    export type RequestQuery = {
      /** Filter list of items */
      call_direction?: "internal" | "inbound" | "outbound";
      /** Filter by call statuses (comma-separated status strings). Defaults to non-blocked calls. */
      call_status?: "answered" | "blocked";
      /** Filter by conversation identifier */
      conversation_id?: string;
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Will only return one result for the selected field */
      distinct?: "peer_exten";
      /** Overrides the Content-Type header. This is used to be able to have a downloadable link. Allowed values are "csv" and "json" */
      format?: "csv" | "json";
      /**
       * Ignore calls before the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be
       * converted according to the `timezone` parameter. If missing, the statistics
       * will start at the oldest available call with timezone UTC.
       * @format date-time
       */
      from?: string;
      /** Ignore CDR created before the given CDR ID. */
      from_id?: number;
      /** Maximum number of items to return in the list. Default to 1000 if not specified. */
      limit?: number;
      /** Filter by source_extension and destination_extension. A wildcard (underscore) can be used at the start and/or the end of the number. */
      number?: string;
      /** Number of items to skip over in the list. Useful for pagination. */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. Unsupported values: ``end``. */
      order?: string;
      /** Filter by recorded status. */
      recorded?: boolean;
      /** Filter by requested_internal_context */
      requested_internal_context?: string;
      /** Filter by requested_internal_extension */
      requested_internal_extension?: string;
      /** Filter list of items */
      search?: string;
      /**
       * Ignore calls starting at or after the given date. Format is
       * <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>. Timezone will be converted
       * according to the `timezone` parameter. If missing, the statistics will include the current
       * day.
       * @format date-time
       */
      until?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUsersData;
  }
}
