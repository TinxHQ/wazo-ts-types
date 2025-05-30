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

/** Backend */
export type Backend = {
  name?: string;
};

/** BackendItems */
export type BackendItems = {
  /** The number of backends matching the search filters */
  filtered?: number;
  items?: Backend[];
  /** The number of backends */
  total?: number;
};

/** CSVSource */
export type CSVSource = Source & {
  /** The path of the CSV file */
  file?: string;
  /**
   * The field separator in the CSV
   * @default ","
   */
  separator?: string;
  /** The column to use for favorites */
  unique_column?: string;
};

/** CSVSourceItems */
export type CSVSourceItems = SourceItems & {
  items?: CSVSource[];
};

/** CSVWSSource */
export type CSVWSSource = Source & {
  /**
   * The field separator in the CSV
   * @default ","
   */
  delimiter?: string;
  /** The URL used to list all values */
  list_url?: string;
  /** The URL used to search the remote CSV */
  lookup_url?: string;
  /**
   * The timeout on the remote HTTP queries
   * @default 10
   */
  timeout?: number;
  /** The column to use for favorites */
  unique_column?: string;
};

/** CSVWSSourceItems */
export type CSVWSSourceItems = SourceItems & {
  items?: CSVWSSource[];
};

export interface ComponentWithStatus {
  status?: StatusValue;
}

/** Confd */
export type ConfdConfig = ExternalServiceConfig & {
  /** @default true */
  https?: boolean;
  /** @default 9486 */
  port?: number;
  /** @default "1.1" */
  version?: string;
};

export interface ConferenceContact {
  extensions?: string[];
  incalls?: string[];
  /** The lastname of the contact */
  name?: string;
  /** The UUID of the contact */
  uuid?: string;
}

export interface ConferenceContactList {
  /** The number of contacts in this source (filtered is not implemented) */
  filtered: number;
  items: ConferenceContact[];
  /** The number of contacts in this source */
  total: number;
}

/** ConferenceSource */
export type ConferenceSource = Source & {
  auth?: WazoAuthConfig;
  confd?: ConfdConfig;
};

/** ConferenceSourceItems */
export type ConferenceSourceItems = SourceItems & {
  items?: ConferenceSource[];
};

export interface ConfigPatchItem {
  /** Patch operation. Supported operations: `replace`. */
  op?: string;
  /** JSON path to operate on. Supported paths: `/debug`. */
  path?: string;
  /** The new value for the operation. Type of value is dependent of `path` */
  value?: object;
}

export interface Contact {
  /** Backend type */
  backend?: string;
  column_values?: string[];
  relations?: Relation;
  source?: string;
}

/** Those are only example attributes. The API accepts any arbitrary attributes. */
export interface ContactBodySample {
  firstname?: string;
  lastname?: string;
}

export interface ContactImportFailure {
  errors?: string[];
  line?: number;
}

export interface ContactImportResponse {
  created?: object[];
  failed?: ContactImportFailure[];
}

export interface ContactList {
  /** Labels for the headers */
  column_headers?: string[];
  /** Data types for the headers */
  column_types?: string[];
  /** List of results */
  results?: Contact[];
}

export interface ContactsListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The phonebook's UUID */
  phonebookUuid: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

/** Display */
export type Display = {
  /** @default [] */
  columns?: DisplayColumn[];
  /** The name of the display */
  name?: string;
  /** The display's UUID */
  uuid?: string;
};

/** Column */
export type DisplayColumn = {
  /** A default value if theres no result in this column */
  default?: string;
  /** The name of the field to display in this column */
  field?: string;
  /** A format string that overrides the default display. for number columns only. */
  number_display?: string;
  /** A human readable name for this column */
  title?: string;
  /** The type of this column */
  type?: string;
};

/** DisplayUUID */
export type DisplayIdentifier = {
  /** The display's UUID */
  uuid?: string;
};

/** DisplayItems */
export type DisplayItems = {
  /** The number of configured displays matching the searched terms */
  filtered?: number;
  items?: Display[];
  /** The number of configured displays */
  total?: number;
};

/**
 * Error
 * Error message for the client
 */
export interface Error {
  /** additional attributes specific to the error type and instance */
  details?: Record<string, string | boolean | number | object | any[]>;
  /** a identifier for the type of error */
  error_id?: string;
  /** Human readable explanation of the error */
  message?: string;
  /** an identifier for the resource type concerned by the error */
  resource?: string;
  /**
   * Time at which the error occured, as a unix timestamp
   * @format timestamp
   */
  timestamp?: number;
}

export interface ExternalServiceConfig {
  /** @default "localhost" */
  host?: string;
  timeout?: number;
  /**
   * If the HTTPs certificates should be verified and the path of the certificate if a custom certificate is used.
   * @default true
   */
  verify_certificate?: string;
}

export interface GoogleContactList {
  /** The number of contacts matching the searched terms */
  filtered?: number;
  items?: object[];
  /** The number of contacts matching the searched terms */
  total?: number;
}

/** GoogleSource */
export type GoogleSource = Source & {
  auth?: WazoAuthConfigNoAuth;
};

/** GoogleSourceItems */
export type GoogleSourceItems = SourceItems & {
  items?: GoogleSource[];
};

export interface Header {
  /** Labels for the headers */
  column_headers?: string[];
  /** Data types for the headers */
  column_types?: string[];
}

/** LDAPSource */
export type LDAPSource = Source & {
  /** the DN of the entry at which to start the search */
  ldap_base_dn?: string;
  /** the custom filter is used to add more criteria to the filter generated by the back end. */
  ldap_custom_filter?: string;
  /**
   * the maximum time, in second, that an LDAP network operation can take. If it takes more time than that, no result is returned.
   * @default 0.3
   */
  ldap_network_timeout?: number;
  /** the password to use when performing a “simple” bind. */
  ldap_password?: string;
  /**
   * the maximum time, in second, that an LDAP operation can take.
   * @default 1
   */
  ldap_timeout?: number;
  /** the URI of the LDAP server. Can only contains the scheme, host and port part of an LDAP URL */
  ldap_uri?: string;
  /** the user’s DN to use when performing a “simple” bind. */
  ldap_username?: string;
  /** the column that contains a unique identifier of the entry */
  unique_column?: string;
  /** the unique column’s type returned by the queried LDAP server. */
  unique_column_format?: "string" | "binary_uuid";
};

/** LDAPSourceItems */
export type LDAPSourceItems = SourceItems & {
  items?: LDAPSource[];
};

/**
 * LegacyError
 * Error message for the client
 */
export interface LegacyError {
  /** Human readable explanation of the error */
  reason?: string[];
  /** HTTP status code */
  status_code?: number;
  /** Time at which the error occured */
  timestamp?: number[];
}

export interface ListBackendParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface ListConferenceContactsFromSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** Source uuid */
  sourceUuid: string;
}

export interface ListConferenceSourcesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListCsvSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListCsvWsSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListDisplayParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListGoogleContactsFromSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** Source uuid */
  sourceUuid: string;
}

export interface ListGoogleSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListLdapSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListMicrosoftContactsFromSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** Source uuid */
  sourceUuid: string;
}

export interface ListMicrosoftSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListPersonalParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /**
   * Format of the response body
   * @default "application/json"
   */
  format?: "application/json" | "text/csv";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
}

export interface ListPersonalSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListPhonebookSourceContactsParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** Source uuid */
  sourceUuid: string;
}

export interface ListPhonebookSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export interface ListProfileParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface ListServicesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
}

export interface ListSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface ListWazoContactsFromSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** Source uuid */
  sourceUuid: string;
  /** Filter by contact uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
  uuid?: string[];
}

export interface ListWazoSourceParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export type Lookup = ContactList & {
  /** Search term used for these results */
  term?: string;
};

export interface LookupParams {
  /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
  profile: string;
  /** A search term to look for */
  term: string;
}

export interface LookupUserParams {
  /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
  profile: string;
  /** A search term to look for */
  term: string;
  /** The user UUID of the user doing that query */
  userUuid: string;
}

/**
 * MicrosoftSource
 * In addition to the keys defined by the [Microsoft API](https://docs.microsoft.com/en-us/graph/api/resources/contact?view=graph-rest-1.0#),
 * `format_columns` also accepts the following columns:
 * * a `numbers` field that aggregates the values from the `businessPhones`, `homePhones` and `mobilePhone` fields. Example: `"format_columns": {"phone": "{numbers[0]}"}`
 * * a `numbers_except_label` field that aggregates the same values than `numbers`, except for one field. Example: `"format_columns": {"phone": "{numbers_except_label[mobilePhone][0]}"}` will result in one of the phone numbers except the mobile phone.
 */
export type MicrosoftSource = Source & {
  auth?: WazoAuthConfig;
  confd?: ConfdConfig;
  /**
   * Endpoint where to get the information from
   * @default "https://graph.microsoft.com/v1.0/me/contacts"
   * @example "https://graph.microsoft.com/v1.0/me/contacts"
   */
  endpoint?: string;
};

/** MicrosoftSourceItems */
export type MicrosoftSourceItems = SourceItems & {
  items?: MicrosoftSource[];
};

export interface Office365ContactList {
  /** The number of contacts matching the searched terms */
  filtered?: number;
  items?: object[];
  /** The number of contacts */
  total?: number;
}

/** PersonalSource */
export type PersonalSource = Source;

/** PersonalSourceItems */
export type PersonalSourceItems = SourceItems & {
  items?: PersonalSource[];
};

export interface Phonebook {
  description?: string;
  id?: number;
  name?: string;
  uuid?: string;
}

export interface PhonebookBody {
  description?: string;
  name: string;
}

export interface PhonebookContact {
  firstname?: string;
  id?: string;
  lastname?: string;
  [key: string]: any;
}

/** Error(s) during contact import */
export type PhonebookContactImportError = Error & {
  details?: {
    /** A list of errors concerning separate contact entries */
    errors?: {
      /** The contact entry as parsed from the request csv input */
      contact?: Record<string, string>;
      /** the zero-based index of the contact entry in the request csv input(excluding the header) */
      index?: number;
      /** Human readable description of the error */
      message?: string;
    }[];
  };
};

export interface PhonebookContactImportResponse {
  created?: PhonebookContactList;
}

export type PhonebookContactList = PhonebookContact[];

/** PhonebookSource */
export type PhonebookSource = Source & {
  name?: any;
  phonebook_description?: string;
  phonebook_name?: string;
  phonebook_uuid?: string;
};

/** PhonebookSourceItems */
export type PhonebookSourceItems = SourceItems & {
  items?: PhonebookSource[];
};

export interface PhonebooksContactsListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The phonebook's ID */
  phonebookId: number;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The tenant defines the ownership of a given resource. */
  tenant: string;
}

export interface PhonebooksListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface PhonebooksListParams2 {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the number of items of the collection to skip
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
  /** The tenant defines the ownership of a given resource. */
  tenant: string;
}

/** Profile */
export type Profile = {
  display?: DisplayIdentifier;
  /** The name of the profile */
  name?: string;
  services?: {
    name?: ServiceConfiguration;
  };
  uuid?: string;
};

/** ProfileItems */
export type ProfileItems = {
  /** The number of configured profiles matching the searched terms */
  filtered?: number;
  items?: Profile[];
  /** The number of configured profiles */
  total?: number;
};

export interface ProfileSource {
  /** The name of the source's backend */
  backend?: string;
  /** The source's name */
  name?: string;
  /** The UUID of the tenant of this source */
  tenant_uuid?: string;
  /** The source's UUID */
  uuid?: string;
}

export interface ProfileSourceItems {
  /** The number of configured sources matching the searched terms for this backend */
  filtered?: number;
  items?: ProfileSource[];
  /** The number of configured sources for this backend */
  total?: number;
}

export interface Relation {
  agent_id?: string;
  endpoint_id?: string;
  source_entry_id?: string;
  user_id?: string;
  user_uuid?: string;
  xivo_id?: string;
}

export type ResultFields = any;

export interface Reverse {
  display: string;
  /** A search exten to look for */
  exten: string;
  /** Fields defined for each source */
  fields: ResultFields;
  source: string;
}

export interface ReverseParams {
  /** A search exten to look for */
  exten: string;
  /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
  profile: string;
  /** The user UUID of the user doing that query */
  userUuid: string;
}

/** Service */
export type Service = {
  name?: string;
};

/** Service */
export interface ServiceConfiguration {
  /** Service specific configuration options */
  options?: object;
  sources?: SourceIdentifier[];
}

/** ServiceItems */
export type ServiceItems = {
  /** The number of services matching the search filters */
  filtered?: number;
  items?: Service[];
  /** The number of services */
  total?: number;
};

export interface Source {
  /** A list of columns which should be searched when doing a reverse look up */
  first_matched_columns?: string[];
  /** A mapping of new fields and a python format string to generate the new columns value */
  format_columns?: object;
  /** The source's name */
  name?: string;
  searched_columns?: string[];
  /** The source's UUID */
  uuid?: string;
}

/** SourceUUID */
export type SourceIdentifier = {
  /** The source's UUID */
  uuid?: string;
};

export interface SourceItems {
  /** The number of configured sources matching the searched terms for this backend */
  filtered?: number;
  /** The number of configured sources for this backend */
  total?: number;
}

export interface SourceListItem {
  /** The backend of this source */
  backend: string;
  /** The name of the source */
  name: string;
  /** The UUID of the source */
  uuid: string;
}

export interface SourceListItems {
  /** The number of sources matching the search filters */
  filtered: number;
  items: SourceListItem[];
  /** The number of sources */
  total: number;
}

export interface SourcesListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
  profile: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

/** Auth */
export type WazoAuthConfig = ExternalServiceConfig & {
  /** The path the the file containing the credentials */
  key_file?: string;
  /** The password to use when not using a key_file */
  password?: string;
  /** @default 9497 */
  port?: number;
  /** The username to use when not using a key_file */
  username?: string;
  /** @default "0.1" */
  version?: string;
};

/** Auth */
export type WazoAuthConfigNoAuth = ExternalServiceConfig & {
  /** @default 9497 */
  port?: number;
  /** @default "0.1" */
  version?: string;
};

export interface WazoContact {
  /** The email address of the contact */
  email?: string;
  /** The internal number of that contact */
  exten?: string;
  /** The firstname of the contact */
  firstname?: string;
  /** The ID of the contact which is used to favorite that contact */
  id?: number;
  /** The lastname of the contact */
  lastname?: string;
  /** The mobile phone number of that contact */
  mobile_phone_number?: string;
  /** The UUID of the contact */
  uuid?: string;
  /** The voicemail number of that contact */
  voicemail_number?: string;
}

export interface WazoContactList {
  /** The number of contacts in this source (filtered is not implemented) */
  filtered: number;
  items: WazoContact[];
  /** The number of contacts in this source */
  total: number;
}

/** WazoSource */
export type WazoSource = Source & {
  auth?: WazoAuthConfig;
  confd?: ConfdConfig;
};

/** WazoSourceItems */
export type WazoSourceItems = SourceItems & {
  items?: WazoSource[];
};

export namespace Backends {
  /**
   * @description **Required ACL:** `dird.backends.read`
   * @tags configuration
   * @name ListBackend
   * @summary List all loaded backends
   * @request GET:/backends
   * @secure
   */
  export namespace ListBackend {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BackendItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.read`
   * @tags configuration, conference
   * @name ListConferenceSources
   * @summary Get all `conference` source configurations
   * @request GET:/backends/conference/sources
   * @secure
   */
  export namespace ListConferenceSources {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConferenceSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.create`
   * @tags configuration, conference
   * @name CreateConferenceSource
   * @summary Configure a source for the `conference` backend
   * @request POST:/backends/conference/sources
   * @secure
   */
  export namespace CreateConferenceSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConferenceSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConferenceSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.delete`
   * @tags configuration, conference
   * @name DeleteConferenceSource
   * @summary Delete a `conference` source configuration
   * @request DELETE:/backends/conference/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteConferenceSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.read`
   * @tags configuration, conference
   * @name GetAConferenceSource
   * @summary Get a `conference` source configuration
   * @request GET:/backends/conference/sources/{source_uuid}
   * @secure
   */
  export namespace GetAConferenceSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConferenceSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.update`
   * @tags configuration, conference
   * @name UpdateConferenceSource
   * @summary Update a `conference` source configuration
   * @request PUT:/backends/conference/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateConferenceSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ConferenceSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.contacts.read`
   * @tags conference
   * @name ListConferenceContactsFromSource
   * @summary Retrieve all contacts from a conference source
   * @request GET:/backends/conference/sources/{source_uuid}/contacts
   * @secure
   */
  export namespace ListConferenceContactsFromSource {
    export type RequestParams = {
      /** Source uuid */
      sourceUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConferenceContactList;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv.sources.read`
   * @tags configuration
   * @name ListCsvSource
   * @summary Get all `csv` source configurations
   * @request GET:/backends/csv/sources
   * @secure
   */
  export namespace ListCsvSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv.sources.create`
   * @tags configuration
   * @name CreateCsvSource
   * @summary Configure a source for the `csv` backend
   * @request POST:/backends/csv/sources
   * @secure
   */
  export namespace CreateCsvSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CSVSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeleteCsvSource
   * @summary Delete a `csv` source configuration
   * @request DELETE:/backends/csv/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteCsvSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetACsvSource
   * @summary Get a `csv` source configuration
   * @request GET:/backends/csv/sources/{source_uuid}
   * @secure
   */
  export namespace GetACsvSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdateCsvSource
   * @summary Update a `csv` source configuration
   * @request PUT:/backends/csv/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateCsvSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CSVSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv_ws.sources.read`
   * @tags configuration
   * @name ListCsvWsSource
   * @summary Get all `csv_ws` source configurations
   * @request GET:/backends/csv_ws/sources
   * @secure
   */
  export namespace ListCsvWsSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVWSSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv_ws.sources.create`
   * @tags configuration
   * @name CreateCsvWsSource
   * @summary Configure a source for the `csv_ws` backend
   * @request POST:/backends/csv_ws/sources
   * @secure
   */
  export namespace CreateCsvWsSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CSVWSSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVWSSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeleteCsvWsSource
   * @summary Delete a `csv_ws` source configuration
   * @request DELETE:/backends/csv_ws/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteCsvWsSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetACsvWsSource
   * @summary Get a `csv_ws` source configuration
   * @request GET:/backends/csv_ws/sources/{source_uuid}
   * @secure
   */
  export namespace GetACsvWsSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CSVWSSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdateCsvWsSource
   * @summary Update a `csv_ws` source configuration
   * @request PUT:/backends/csv_ws/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateCsvWsSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CSVWSSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.read`
   * @tags configuration, google
   * @name ListGoogleSource
   * @summary Get google configuration
   * @request GET:/backends/google/sources
   * @secure
   */
  export namespace ListGoogleSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GoogleSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.create` This resource configures a Google source for wazo-dird. Columns that are available from this source are: * name: the contact name * numbers: a list of phone numbers * numbers_by_label: a map of type to numbers {'mobile': <number>, 'home': <number>, ...}. Types are defined by Google, currently known types include: 'home', 'work', 'mobile', 'other', 'main', 'home_fax', 'work_fax', 'google_voice', 'pager'. * numbers_except_label: a map from type to every other number {'mobile': [<number>, <number], 'home': [<number>, <number>], ...}. See available types above. For example, the 'mobile' key will contain the 'work' and 'home' numbers, but will exclude the 'mobile' number. * emails: a list of email addresses
   * @tags configuration, google
   * @name CreateGoogleSource
   * @summary Configure a source for the google backend
   * @request POST:/backends/google/sources
   * @secure
   */
  export namespace CreateGoogleSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GoogleSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GoogleSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.delete`
   * @tags configuration, google
   * @name DeleteGoogleSource
   * @summary Delete a `google` source configuration
   * @request DELETE:/backends/google/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteGoogleSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.read`
   * @tags configuration, google
   * @name GetAGoogleSource
   * @summary Get a `google` source configuration
   * @request GET:/backends/google/sources/{source_uuid}
   * @secure
   */
  export namespace GetAGoogleSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GoogleSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.update`
   * @tags configuration, google
   * @name UpdateGoogleSource
   * @summary Update a `google` source configuration
   * @request PUT:/backends/google/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateGoogleSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GoogleSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.contacts.read`
   * @tags google
   * @name ListGoogleContactsFromSource
   * @summary Retrieve all contacts from `google`
   * @request GET:/backends/google/sources/{source_uuid}/contacts
   * @secure
   */
  export namespace ListGoogleContactsFromSource {
    export type RequestParams = {
      /** Source uuid */
      sourceUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GoogleContactList;
  }

  /**
   * @description **Required ACL:** `dird.backends.ldap.sources.read`
   * @tags configuration
   * @name ListLdapSource
   * @summary Get all `ldap` source configurations
   * @request GET:/backends/ldap/sources
   * @secure
   */
  export namespace ListLdapSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LDAPSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.ldap.sources.create`
   * @tags configuration
   * @name CreateLdapSource
   * @summary Configure a source for the `ldap` backend
   * @request POST:/backends/ldap/sources
   * @secure
   */
  export namespace CreateLdapSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LDAPSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LDAPSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeleteLdapSource
   * @summary Delete a `ldap` source configuration
   * @request DELETE:/backends/ldap/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteLdapSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetALdapSource
   * @summary Get a `ldap` source configuration
   * @request GET:/backends/ldap/sources/{source_uuid}
   * @secure
   */
  export namespace GetALdapSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LDAPSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdateLdapSource
   * @summary Update a `ldap` source configuration
   * @request PUT:/backends/ldap/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateLdapSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LDAPSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.microsoft.sources.read`
   * @tags configuration
   * @name ListMicrosoftSource
   * @summary Get microsoft configuration
   * @request GET:/backends/office365/sources
   * @secure
   */
  export namespace ListMicrosoftSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MicrosoftSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.microsoft.sources.create`
   * @tags configuration
   * @name CreateMicrosoftSource
   * @summary Configure a source for the microsoft backend
   * @request POST:/backends/office365/sources
   * @secure
   */
  export namespace CreateMicrosoftSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MicrosoftSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MicrosoftSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeleteMicrosoftSource
   * @summary Delete a `microsoft` source configuration
   * @request DELETE:/backends/office365/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteMicrosoftSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetAMicrosoftSource
   * @summary Get a `microsoft` source configuration
   * @request GET:/backends/office365/sources/{source_uuid}
   * @secure
   */
  export namespace GetAMicrosoftSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = MicrosoftSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdateMicrosoftSource
   * @summary Update a `microsoft` source configuration
   * @request PUT:/backends/office365/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateMicrosoftSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MicrosoftSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.office365.sources.{source_uuid}.contacts.read`
   * @tags office365
   * @name ListMicrosoftContactsFromSource
   * @summary Retrieve all contacts from `office365`
   * @request GET:/backends/office365/sources/{source_uuid}/contacts
   * @secure
   */
  export namespace ListMicrosoftContactsFromSource {
    export type RequestParams = {
      /** Source uuid */
      sourceUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Office365ContactList;
  }

  /**
   * @description **Required ACL:** `dird.backends.personal.sources.read`
   * @tags configuration
   * @name ListPersonalSource
   * @summary Get all `personal` source configurations
   * @request GET:/backends/personal/sources
   * @secure
   */
  export namespace ListPersonalSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PersonalSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.personal.sources.create`
   * @tags configuration
   * @name CreatePersonalSource
   * @summary Configure a source for the `personal` backend
   * @request POST:/backends/personal/sources
   * @secure
   */
  export namespace CreatePersonalSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PersonalSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PersonalSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeletePersonalSource
   * @summary Delete a `personal` source configuration
   * @request DELETE:/backends/personal/sources/{source_uuid}
   * @secure
   */
  export namespace DeletePersonalSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetAPersonalSource
   * @summary Get a `personal` source configuration
   * @request GET:/backends/personal/sources/{source_uuid}
   * @secure
   */
  export namespace GetAPersonalSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PersonalSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdatePersonalSource
   * @summary Update a `personal` source configuration
   * @request PUT:/backends/personal/sources/{source_uuid}
   * @secure
   */
  export namespace UpdatePersonalSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PersonalSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.read`
   * @tags configuration
   * @name ListPhonebookSource
   * @summary Get all `phonebook` source configurations
   * @request GET:/backends/phonebook/sources
   * @secure
   */
  export namespace ListPhonebookSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.create`
   * @tags configuration
   * @name CreatePhonebookSource
   * @summary Configure a source for the `phonebook` backend
   * @request POST:/backends/phonebook/sources
   * @secure
   */
  export namespace CreatePhonebookSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhonebookSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeletePhonebookSource
   * @summary Delete a `phonebook` source configuration
   * @request DELETE:/backends/phonebook/sources/{source_uuid}
   * @secure
   */
  export namespace DeletePhonebookSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetAPhonebookSource
   * @summary Get a `phonebook` source configuration
   * @request GET:/backends/phonebook/sources/{source_uuid}
   * @secure
   */
  export namespace GetAPhonebookSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdatePhonebookSource
   * @summary Update a `phonebook` source configuration
   * @request PUT:/backends/phonebook/sources/{source_uuid}
   * @secure
   */
  export namespace UpdatePhonebookSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.contacts.read`
   * @tags phonebook
   * @name ListPhonebookSourceContacts
   * @summary Get contacts from a `phonebook` source
   * @request GET:/backends/phonebook/sources/{source_uuid}/contacts
   * @secure
   */
  export namespace ListPhonebookSourceContacts {
    export type RequestParams = {
      /** Source uuid */
      sourceUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookContactList;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.read`
   * @tags configuration
   * @name ListWazoSource
   * @summary Get all `wazo` source configurations
   * @request GET:/backends/wazo/sources
   * @secure
   */
  export namespace ListWazoSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = WazoSourceItems;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.create`
   * @tags configuration
   * @name CreateWazoSource
   * @summary Configure a source for the `wazo` backend
   * @request POST:/backends/wazo/sources
   * @secure
   */
  export namespace CreateWazoSource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WazoSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = WazoSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.delete`
   * @tags configuration
   * @name DeleteWazoSource
   * @summary Delete a `wazo` source configuration
   * @request DELETE:/backends/wazo/sources/{source_uuid}
   * @secure
   */
  export namespace DeleteWazoSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.read`
   * @tags configuration
   * @name GetAWazoSource
   * @summary Get a `wazo` source configuration
   * @request GET:/backends/wazo/sources/{source_uuid}
   * @secure
   */
  export namespace GetAWazoSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = WazoSource;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.update`
   * @tags configuration
   * @name UpdateWazoSource
   * @summary Update a `wazo` source configuration
   * @request PUT:/backends/wazo/sources/{source_uuid}
   * @secure
   */
  export namespace UpdateWazoSource {
    export type RequestParams = {
      /** The source's UUID */
      sourceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WazoSource;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.contacts.read`
   * @tags wazo
   * @name ListWazoContactsFromSource
   * @summary Retrieve all contacts from `wazo`
   * @request GET:/backends/wazo/sources/{source_uuid}/contacts
   * @secure
   */
  export namespace ListWazoContactsFromSource {
    export type RequestParams = {
      /** Source uuid */
      sourceUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
      /** Filter by contact uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
      uuid?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = WazoContactList;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `dird.config.read`
   * @tags config
   * @name ConfigurationGet
   * @summary Returns the current service configuration
   * @request GET:/config
   * @secure
   */
  export namespace ConfigurationGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.config.update` Changes are not persistent across service restart.
   * @tags config
   * @name PatchConfig
   * @summary Update the current configuration.
   * @request PATCH:/config
   * @secure
   */
  export namespace PatchConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfigPatchItem[];
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Directories {
  /**
   * @description **Required ACL:** `dird.directories.favorites.{directory}.{contact}.delete` Remove the contact from {directory} from the list of favorite contacts.
   * @tags directories, favorites
   * @name RemoveFavorite
   * @summary Unmark a contact as favorite
   * @request DELETE:/directories/favorites/{directory}/{contact}
   * @secure
   */
  export namespace RemoveFavorite {
    export type RequestParams = {
      /** The ID of the contact. This ID is unique within the {directory}. */
      contact: string;
      /** The directory where the contact is stored. */
      directory: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.directories.favorites.{directory}.{contact}.update` Add the contact from {directory} to the list of favorite contacts.
   * @tags directories, favorites
   * @name AddFavorite
   * @summary Mark a contact as favorite
   * @request PUT:/directories/favorites/{directory}/{contact}
   * @secure
   */
  export namespace AddFavorite {
    export type RequestParams = {
      /** The ID of the contact. This ID is unique within the {directory}. */
      contact: string;
      /** The directory where the contact is stored. */
      directory: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.directories.favorites.{profile}.read` Get the list of favorite contacts for directories configured in the profile
   * @tags directories, favorites
   * @name ListFavorites
   * @summary List favorite contacts
   * @request GET:/directories/favorites/{profile}
   * @secure
   */
  export namespace ListFavorites {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ContactList;
  }

  /**
   * @description **Required ACL:** `dird.directories.lookup.{profile}.read` The `lookup` query will return a list of result matching the searched term. The result will be retrieved from all configured directories for the given profile. This route is provided by the `default_json_view` plugin using the `lookup` plugin and all configured sources for the given profile.
   * @tags directories
   * @name Lookup
   * @summary Search for contacts
   * @request GET:/directories/lookup/{profile}
   * @secure
   */
  export namespace Lookup {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
    };
    export type RequestQuery = {
      /** A search term to look for */
      term: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Lookup;
  }

  /**
   * @description **Required ACL:** `dird.directories.lookup.{profile}.headers.read` Column headers that can be used when displaying lookup results to the client
   * @tags directories
   * @name GetHeaders
   * @summary Lookup headers
   * @request GET:/directories/lookup/{profile}/headers
   * @secure
   */
  export namespace GetHeaders {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Header;
  }

  /**
   * @description **Required ACL:** `dird.directories.lookup.{profile}.{user_uuid}.read` The `lookup` query will return a list of result matching the searched term. The result will be retrieved from all configured directories for the given profile and user. This route is provided by the `default_json_view` plugin using the `lookup` plugin and all configured sources for the given profile.
   * @tags directories
   * @name LookupUser
   * @summary Search for contacts for a particular user
   * @request GET:/directories/lookup/{profile}/{user_uuid}
   * @secure
   */
  export namespace LookupUser {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
      /** The user UUID of the user doing that query */
      userUuid: string;
    };
    export type RequestQuery = {
      /** A search term to look for */
      term: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Lookup;
  }

  /**
   * @description **Required ACL:** `dird.directories.personal.{profile}.read` Get the list of personal contacts formatted for the profile
   * @tags directories, personal
   * @name ListPersonalProfile
   * @summary List personal contacts with formatting
   * @request GET:/directories/personal/{profile}
   * @secure
   */
  export namespace ListPersonalProfile {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookContactList;
  }

  /**
   * @description **Required ACL:** `dird.directories.reverse.{profile}.{user_uuid}.read` The `reverse` query will return a contact matching the searched exten. The result will be retrieved from all configured directories for the given profile. This route is provided by the `default_json_view` plugin using the `reverse` plugin and all configured sources for the given profile.
   * @tags directories
   * @name Reverse
   * @summary Search for contact by number
   * @request GET:/directories/reverse/{profile}/{user_uuid}
   * @secure
   */
  export namespace Reverse {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
      /** The user UUID of the user doing that query */
      userUuid: string;
    };
    export type RequestQuery = {
      /** A search exten to look for */
      exten: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Reverse;
  }

  /**
   * @description **Required ACL:** `dird.directories.{profile}.sources.read`
   * @tags directories
   * @name SourcesList
   * @summary List all sources configured for the given profile
   * @request GET:/directories/{profile}/sources
   * @secure
   */
  export namespace SourcesList {
    export type RequestParams = {
      /** The profile defines the list of directories to query and how the results are displayed. The profile is the context name of the user who started the contact lookup, e.g. `default`. More precisely, it is the name of the "Direct directory" defined in the web interface. */
      profile: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProfileSourceItems;
  }
}

export namespace Displays {
  /**
   * @description **Required ACL:** `dird.displays.read`
   * @tags configuration
   * @name ListDisplay
   * @summary List displays
   * @request GET:/displays
   * @secure
   */
  export namespace ListDisplay {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DisplayItems;
  }

  /**
   * @description **Required ACL:** `dird.displays.create`
   * @tags configuration
   * @name CreateDisplay
   * @summary Create a new display configuration
   * @request POST:/displays
   * @secure
   */
  export namespace CreateDisplay {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Display;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Display;
  }

  /**
   * @description **Required ACL:** `dird.displays.{display_uuid}.delete`
   * @tags configuration
   * @name DeleteDisplay
   * @summary Delete display
   * @request DELETE:/displays/{display_uuid}
   * @secure
   */
  export namespace DeleteDisplay {
    export type RequestParams = {
      /** the display's UUID */
      displayUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.displays.{display_uuid}.read`
   * @tags configuration
   * @name GetDisplay
   * @summary Get display
   * @request GET:/displays/{display_uuid}
   * @secure
   */
  export namespace GetDisplay {
    export type RequestParams = {
      /** the display's UUID */
      displayUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Display;
  }

  /**
   * @description **Required ACL:** `dird.displays.{display_uuid}.update`
   * @tags configuration
   * @name UpdateDisplay
   * @summary Update display
   * @request PUT:/displays/{display_uuid}
   * @secure
   */
  export namespace UpdateDisplay {
    export type RequestParams = {
      /** the display's UUID */
      displayUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Display;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }
}

export namespace Graphql {
  /**
   * No description
   * @tags work_in_progress
   * @name Graphiql
   * @summary Show GraphiQL test interface for GraphQL in a browser. This is not a REST endpoint.
   * @request GET:/graphql
   * @secure
   */
  export namespace Graphiql {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.graphql.{root_field_name}`, e.g. `dird.graphql.hello`
   * @tags work_in_progress
   * @name GraphqlQuery
   * @summary Execute a GraphQL query. This is a GraphQL endpoint, not a REST endpoint.
   * @request POST:/graphql
   * @secure
   */
  export namespace GraphqlQuery {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Personal {
  /**
   * @description **Required ACL:** `dird.personal.delete`
   * @tags personal
   * @name PurgePersonal
   * @summary Purge personal contacts
   * @request DELETE:/personal
   * @secure
   */
  export namespace PurgePersonal {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.personal.read` CSV format is the same as `/import`, where headers of all contacts are mixed. The charset of the response is always `utf-8`. Errors are always formatted in JSON.
   * @tags personal
   * @name ListPersonal
   * @summary List personal contacts
   * @request GET:/personal
   * @secure
   */
  export namespace ListPersonal {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /**
       * Format of the response body
       * @default "application/json"
       */
      format?: "application/json" | "text/csv";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      items?: PhonebookContactList;
    };
  }

  /**
   * @description **Required ACL:** `dird.personal.create`
   * @tags personal
   * @name AddPersonal
   * @summary Create new personal contact
   * @request POST:/personal
   * @secure
   */
  export namespace AddPersonal {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactBodySample;
    export type RequestHeaders = {};
    export type ResponseBody = Contact;
  }

  /**
   * @description **Required ACL:** `dird.personal.import.create`
   * @tags personal
   * @name ImportPersonal
   * @summary Import multiple personal contacts at once
   * @request POST:/personal/import
   * @secure
   */
  export namespace ImportPersonal {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string;
    export type RequestHeaders = {};
    export type ResponseBody = ContactImportResponse;
  }

  /**
   * @description **Required ACL:** `dird.personal.{contact_id}.delete`
   * @tags personal
   * @name RemovePersonal
   * @summary Remove personal contact
   * @request DELETE:/personal/{contact_id}
   * @secure
   */
  export namespace RemovePersonal {
    export type RequestParams = {
      /** The ID of the personal contact. */
      contactId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.personal.{contact_id}.read` Returns the details of the personal contact.
   * @tags personal
   * @name GetPersonal
   * @summary Get personal contact
   * @request GET:/personal/{contact_id}
   * @secure
   */
  export namespace GetPersonal {
    export type RequestParams = {
      /** The ID of the personal contact. */
      contactId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Contact;
  }

  /**
   * @description **Required ACL:** `dird.personal.{contact_id}.update` Replace personal contact's attributes. Omitted attributes will be removed. Attribute `id` can not be changed.
   * @tags personal
   * @name EditPersonal
   * @summary Edit personal contact
   * @request PUT:/personal/{contact_id}
   * @secure
   */
  export namespace EditPersonal {
    export type RequestParams = {
      /** The ID of the personal contact. */
      contactId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ContactBodySample;
    export type RequestHeaders = {};
    export type ResponseBody = Contact;
  }
}

export namespace Phonebooks {
  /**
   * @description **Required ACL:** `dird.phonebooks.read`
   * @tags phonebook
   * @name PhonebooksList
   * @summary List all phonebooks for a given tenant
   * @request GET:/phonebooks
   * @secure
   */
  export namespace PhonebooksList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Phonebook[];
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.create`
   * @tags phonebook
   * @name CreatePhonebook
   * @summary Create a new phonebook
   * @request POST:/phonebooks
   * @secure
   */
  export namespace CreatePhonebook {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhonebookBody;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Phonebook;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.delete`
   * @tags phonebook
   * @name PhonebooksDelete
   * @summary Delete an existing phonebook
   * @request DELETE:/phonebooks/{phonebook_uuid}
   * @secure
   */
  export namespace PhonebooksDelete {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.read`
   * @tags phonebook
   * @name PhonebooksDetail
   * @summary Get the attributes of a phonebook
   * @request GET:/phonebooks/{phonebook_uuid}
   * @secure
   */
  export namespace PhonebooksDetail {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Phonebook;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.update`
   * @tags phonebook
   * @name PhonebooksUpdate
   * @summary Modify an existing phonebook
   * @request PUT:/phonebooks/{phonebook_uuid}
   * @secure
   */
  export namespace PhonebooksUpdate {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookBody;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.read`
   * @tags phonebook
   * @name ContactsList
   * @summary List all contacts for a given phonebook
   * @request GET:/phonebooks/{phonebook_uuid}/contacts
   * @secure
   */
  export namespace ContactsList {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookContactListResponse;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.create`
   * @tags phonebook
   * @name CreatePhonebookContact
   * @summary Create a new contact
   * @request POST:/phonebooks/{phonebook_uuid}/contacts
   * @secure
   */
  export namespace CreatePhonebookContact {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookContact;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookContact;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.create`
   * @tags phonebook
   * @name ImportPhonebook
   * @summary Import multiple contacts at once
   * @request POST:/phonebooks/{phonebook_uuid}/contacts/import
   * @secure
   */
  export namespace ImportPhonebook {
    export type RequestParams = {
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = string;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PhonebookContactImportResponse;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.delete`
   * @tags phonebook
   * @name ContactsDelete
   * @summary Delete an existing contact
   * @request DELETE:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
   * @secure
   */
  export namespace ContactsDelete {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.read`
   * @tags phonebook
   * @name ContactsDetail
   * @summary Get the attributes of a contact
   * @request GET:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
   * @secure
   */
  export namespace ContactsDetail {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.update`
   * @tags phonebook
   * @name ContactsUpdate
   * @summary Modify an existing contact
   * @request PUT:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
   * @secure
   */
  export namespace ContactsUpdate {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's UUID */
      phonebookUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ContactBodySample;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }
}

export namespace Profiles {
  /**
   * @description **Required ACL:** `dird.profiles.read`
   * @tags configuration
   * @name ListProfile
   * @summary List all configured profiles
   * @request GET:/profiles
   * @secure
   */
  export namespace ListProfile {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProfileItems;
  }

  /**
   * @description **Required ACL:** `dird.profiles.create`
   * @tags configuration
   * @name CreateProfile
   * @summary Create a new configuration profile
   * @request POST:/profiles
   * @secure
   */
  export namespace CreateProfile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Profile;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Profile;
  }

  /**
   * @description **Required ACL:** `dird.profiles.{profile_uuid}.delete`
   * @tags configuration
   * @name DeleteProfile
   * @summary Delete a profile configuration
   * @request DELETE:/profiles/{profile_uuid}
   * @secure
   */
  export namespace DeleteProfile {
    export type RequestParams = {
      /** the profile's UUID */
      profileUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `dird.profiles.{profile_uuid}.read`
   * @tags configuration
   * @name GetProfile
   * @summary Get a profile configuration
   * @request GET:/profiles/{profile_uuid}
   * @secure
   */
  export namespace GetProfile {
    export type RequestParams = {
      /** the profile's UUID */
      profileUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Profile;
  }

  /**
   * @description **Required ACL:** `dird.profiles.{profile_uuid}.update`
   * @tags configuration
   * @name UpdateProfile
   * @summary Update a profile configuration
   * @request PUT:/profiles/{profile_uuid}
   * @secure
   */
  export namespace UpdateProfile {
    export type RequestParams = {
      /** the profile's UUID */
      profileUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Profile;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }
}

export namespace Services {
  /**
   * @description **Required ACL:** `dird.services.read`
   * @tags configuration
   * @name ListServices
   * @summary List all loaded services
   * @request GET:/services
   * @secure
   */
  export namespace ListServices {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ServiceItems;
  }
}

export namespace Sources {
  /**
   * @description **Required ACL:** `dird.sources.read`
   * @tags configuration
   * @name ListSource
   * @summary List all configured sources
   * @request GET:/sources
   * @secure
   */
  export namespace ListSource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SourceListItems;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `dird.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-dird`
   * @request GET:/status
   * @secure
   */
  export namespace StatusList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StatusSummary;
  }
}

export namespace Tenants {
  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.read`
   * @tags phonebook
   * @name PhonebooksList
   * @summary List all phonebooks for a given tenant
   * @request GET:/tenants/{tenant}/phonebooks
   * @deprecated
   * @secure
   */
  export namespace PhonebooksList {
    export type RequestParams = {
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Phonebook[];
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.create`
   * @tags phonebook
   * @name CreatePhonebookDeprecated
   * @summary Create a new phonebook
   * @request POST:/tenants/{tenant}/phonebooks
   * @deprecated
   * @secure
   */
  export namespace CreatePhonebookDeprecated {
    export type RequestParams = {
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookBody;
    export type RequestHeaders = {};
    export type ResponseBody = Phonebook;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.delete`
   * @tags phonebook
   * @name PhonebooksDelete
   * @summary Delete an existing phonebook
   * @request DELETE:/tenants/{tenant}/phonebooks/{phonebook_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksDelete {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.read`
   * @tags phonebook
   * @name PhonebooksDetail
   * @summary Get the attributes of a phonebook
   * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksDetail {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Phonebook;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.update`
   * @tags phonebook
   * @name PhonebooksUpdate
   * @summary Modify an existing phonebook
   * @request PUT:/tenants/{tenant}/phonebooks/{phonebook_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksUpdate {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookBody;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.read`
   * @tags phonebook
   * @name PhonebooksContactsList
   * @summary List all contacts for a given phonebook
   * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts
   * @deprecated
   * @secure
   */
  export namespace PhonebooksContactsList {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the number of items of the collection to skip
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PhonebookContactList;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.create`
   * @tags phonebook
   * @name CreatePhonebookContactDeprecated
   * @summary Create a new contact
   * @request POST:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts
   * @deprecated
   * @secure
   */
  export namespace CreatePhonebookContactDeprecated {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PhonebookContact;
    export type RequestHeaders = {};
    export type ResponseBody = PhonebookContact;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.create`
   * @tags phonebook
   * @name ImportPhonebookDeprecated
   * @summary Import multiple contacts at once
   * @request POST:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/import
   * @deprecated
   * @secure
   */
  export namespace ImportPhonebookDeprecated {
    export type RequestParams = {
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = string;
    export type RequestHeaders = {};
    export type ResponseBody = PhonebookContactImportResponse;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.delete`
   * @tags phonebook
   * @name PhonebooksContactsDelete
   * @summary Delete an existing contact
   * @request DELETE:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksContactsDelete {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.read`
   * @tags phonebook
   * @name PhonebooksContactsDetail
   * @summary Get the attributes of a contact
   * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksContactsDetail {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.update`
   * @tags phonebook
   * @name PhonebooksContactsUpdate
   * @summary Modify an existing contact
   * @request PUT:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
   * @deprecated
   * @secure
   */
  export namespace PhonebooksContactsUpdate {
    export type RequestParams = {
      /** The ID of contact. */
      contactId: string;
      /** The phonebook's ID */
      phonebookId: number;
      /** The tenant defines the ownership of a given resource. */
      tenant: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ContactBodySample;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}
