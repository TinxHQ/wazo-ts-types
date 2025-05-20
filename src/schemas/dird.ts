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

export type Lookup = ContactList & {
  /** Search term used for these results */
  term?: string;
};

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

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
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
  public baseUrl: string = "/0.1";
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
 * @title wazo-dird
 * @version 0.1
 * @license GPL v3 (http://www.gnu.org/licenses/gpl.txt)
 * @baseUrl /0.1
 * @contact Wazo Dev Team <dev@wazo.community> (https://wazo-platform.org/)
 *
 * Contacts and directories in Wazo are managed by the wazo-dird daemon. This service provides a public API that can be used to query the directories that are configured on a Wazo.
 *
 *
 * A contact can contain various information such as a person's phone number, number, office number, department, office number, etc. The information displayed is selected via a profile. Directories can be aggregated using multiple data sources such as an LDAP server, a CSV file, another Wazo server, etc.
 *
 *
 * Please refer to [the documentation](https://wazo-platform.org/uc-doc) for further details.
 *
 *
 * Note: The 0.1 API is currently in development. Major changes could still happen and new resources will be added over time.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  backends = {
    /**
     * @description **Required ACL:** `dird.backends.read`
     *
     * @tags configuration
     * @name ListBackend
     * @summary List all loaded backends
     * @request GET:/backends
     * @secure
     */
    listBackend: (
      query?: {
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BackendItems, any>({
        path: `/backends`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.read`
     *
     * @tags configuration, conference
     * @name ListConferenceSources
     * @summary Get all `conference` source configurations
     * @request GET:/backends/conference/sources
     * @secure
     */
    listConferenceSources: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConferenceSourceItems, any>({
        path: `/backends/conference/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.create`
     *
     * @tags configuration, conference
     * @name CreateConferenceSource
     * @summary Configure a source for the `conference` backend
     * @request POST:/backends/conference/sources
     * @secure
     */
    createConferenceSource: (
      body: ConferenceSource,
      params: RequestParams = {},
    ) =>
      this.request<ConferenceSource, APIError | LegacyError>({
        path: `/backends/conference/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.delete`
     *
     * @tags configuration, conference
     * @name DeleteConferenceSource
     * @summary Delete a `conference` source configuration
     * @request DELETE:/backends/conference/sources/{source_uuid}
     * @secure
     */
    deleteConferenceSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/conference/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.read`
     *
     * @tags configuration, conference
     * @name GetAConferenceSource
     * @summary Get a `conference` source configuration
     * @request GET:/backends/conference/sources/{source_uuid}
     * @secure
     */
    getAConferenceSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<ConferenceSource, APIError>({
        path: `/backends/conference/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.update`
     *
     * @tags configuration, conference
     * @name UpdateConferenceSource
     * @summary Update a `conference` source configuration
     * @request PUT:/backends/conference/sources/{source_uuid}
     * @secure
     */
    updateConferenceSource: (
      sourceUuid: string,
      body: ConferenceSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/conference/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.conference.sources.{source_uuid}.contacts.read`
     *
     * @tags conference
     * @name ListConferenceContactsFromSource
     * @summary Retrieve all contacts from a conference source
     * @request GET:/backends/conference/sources/{source_uuid}/contacts
     * @secure
     */
    listConferenceContactsFromSource: (
      sourceUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConferenceContactList, LegacyError>({
        path: `/backends/conference/sources/${sourceUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv.sources.read`
     *
     * @tags configuration
     * @name ListCsvSource
     * @summary Get all `csv` source configurations
     * @request GET:/backends/csv/sources
     * @secure
     */
    listCsvSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CSVSourceItems, any>({
        path: `/backends/csv/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv.sources.create`
     *
     * @tags configuration
     * @name CreateCsvSource
     * @summary Configure a source for the `csv` backend
     * @request POST:/backends/csv/sources
     * @secure
     */
    createCsvSource: (body: CSVSource, params: RequestParams = {}) =>
      this.request<CSVSource, APIError | LegacyError>({
        path: `/backends/csv/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteCsvSource
     * @summary Delete a `csv` source configuration
     * @request DELETE:/backends/csv/sources/{source_uuid}
     * @secure
     */
    deleteCsvSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/csv/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetACsvSource
     * @summary Get a `csv` source configuration
     * @request GET:/backends/csv/sources/{source_uuid}
     * @secure
     */
    getACsvSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<CSVSource, APIError>({
        path: `/backends/csv/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdateCsvSource
     * @summary Update a `csv` source configuration
     * @request PUT:/backends/csv/sources/{source_uuid}
     * @secure
     */
    updateCsvSource: (
      sourceUuid: string,
      body: CSVSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/csv/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv_ws.sources.read`
     *
     * @tags configuration
     * @name ListCsvWsSource
     * @summary Get all `csv_ws` source configurations
     * @request GET:/backends/csv_ws/sources
     * @secure
     */
    listCsvWsSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CSVWSSourceItems, any>({
        path: `/backends/csv_ws/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv_ws.sources.create`
     *
     * @tags configuration
     * @name CreateCsvWsSource
     * @summary Configure a source for the `csv_ws` backend
     * @request POST:/backends/csv_ws/sources
     * @secure
     */
    createCsvWsSource: (body: CSVWSSource, params: RequestParams = {}) =>
      this.request<CSVWSSource, APIError | LegacyError>({
        path: `/backends/csv_ws/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteCsvWsSource
     * @summary Delete a `csv_ws` source configuration
     * @request DELETE:/backends/csv_ws/sources/{source_uuid}
     * @secure
     */
    deleteCsvWsSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/csv_ws/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetACsvWsSource
     * @summary Get a `csv_ws` source configuration
     * @request GET:/backends/csv_ws/sources/{source_uuid}
     * @secure
     */
    getACsvWsSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<CSVWSSource, APIError>({
        path: `/backends/csv_ws/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.csv_ws.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdateCsvWsSource
     * @summary Update a `csv_ws` source configuration
     * @request PUT:/backends/csv_ws/sources/{source_uuid}
     * @secure
     */
    updateCsvWsSource: (
      sourceUuid: string,
      body: CSVWSSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/csv_ws/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.read`
     *
     * @tags configuration, google
     * @name ListGoogleSource
     * @summary Get google configuration
     * @request GET:/backends/google/sources
     * @secure
     */
    listGoogleSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GoogleSourceItems, any>({
        path: `/backends/google/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.create` This resource configures a Google source for wazo-dird. Columns that are available from this source are: * name: the contact name * numbers: a list of phone numbers * numbers_by_label: a map of type to numbers {'mobile': <number>, 'home': <number>, ...}. Types are defined by Google, currently known types include: 'home', 'work', 'mobile', 'other', 'main', 'home_fax', 'work_fax', 'google_voice', 'pager'. * numbers_except_label: a map from type to every other number {'mobile': [<number>, <number], 'home': [<number>, <number>], ...}. See available types above. For example, the 'mobile' key will contain the 'work' and 'home' numbers, but will exclude the 'mobile' number. * emails: a list of email addresses
     *
     * @tags configuration, google
     * @name CreateGoogleSource
     * @summary Configure a source for the google backend
     * @request POST:/backends/google/sources
     * @secure
     */
    createGoogleSource: (body: GoogleSource, params: RequestParams = {}) =>
      this.request<GoogleSource, APIError | LegacyError>({
        path: `/backends/google/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.delete`
     *
     * @tags configuration, google
     * @name DeleteGoogleSource
     * @summary Delete a `google` source configuration
     * @request DELETE:/backends/google/sources/{source_uuid}
     * @secure
     */
    deleteGoogleSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/google/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.read`
     *
     * @tags configuration, google
     * @name GetAGoogleSource
     * @summary Get a `google` source configuration
     * @request GET:/backends/google/sources/{source_uuid}
     * @secure
     */
    getAGoogleSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<GoogleSource, APIError>({
        path: `/backends/google/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.update`
     *
     * @tags configuration, google
     * @name UpdateGoogleSource
     * @summary Update a `google` source configuration
     * @request PUT:/backends/google/sources/{source_uuid}
     * @secure
     */
    updateGoogleSource: (
      sourceUuid: string,
      body: GoogleSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/google/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.google.sources.{source_uuid}.contacts.read`
     *
     * @tags google
     * @name ListGoogleContactsFromSource
     * @summary Retrieve all contacts from `google`
     * @request GET:/backends/google/sources/{source_uuid}/contacts
     * @secure
     */
    listGoogleContactsFromSource: (
      sourceUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GoogleContactList, LegacyError>({
        path: `/backends/google/sources/${sourceUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.ldap.sources.read`
     *
     * @tags configuration
     * @name ListLdapSource
     * @summary Get all `ldap` source configurations
     * @request GET:/backends/ldap/sources
     * @secure
     */
    listLdapSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LDAPSourceItems, any>({
        path: `/backends/ldap/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.ldap.sources.create`
     *
     * @tags configuration
     * @name CreateLdapSource
     * @summary Configure a source for the `ldap` backend
     * @request POST:/backends/ldap/sources
     * @secure
     */
    createLdapSource: (body: LDAPSource, params: RequestParams = {}) =>
      this.request<LDAPSource, APIError | LegacyError>({
        path: `/backends/ldap/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteLdapSource
     * @summary Delete a `ldap` source configuration
     * @request DELETE:/backends/ldap/sources/{source_uuid}
     * @secure
     */
    deleteLdapSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/ldap/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetALdapSource
     * @summary Get a `ldap` source configuration
     * @request GET:/backends/ldap/sources/{source_uuid}
     * @secure
     */
    getALdapSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<LDAPSource, APIError>({
        path: `/backends/ldap/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.ldap.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdateLdapSource
     * @summary Update a `ldap` source configuration
     * @request PUT:/backends/ldap/sources/{source_uuid}
     * @secure
     */
    updateLdapSource: (
      sourceUuid: string,
      body: LDAPSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/ldap/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.microsoft.sources.read`
     *
     * @tags configuration
     * @name ListMicrosoftSource
     * @summary Get microsoft configuration
     * @request GET:/backends/office365/sources
     * @secure
     */
    listMicrosoftSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MicrosoftSourceItems, any>({
        path: `/backends/office365/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.microsoft.sources.create`
     *
     * @tags configuration
     * @name CreateMicrosoftSource
     * @summary Configure a source for the microsoft backend
     * @request POST:/backends/office365/sources
     * @secure
     */
    createMicrosoftSource: (
      body: MicrosoftSource,
      params: RequestParams = {},
    ) =>
      this.request<MicrosoftSource, APIError | LegacyError>({
        path: `/backends/office365/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteMicrosoftSource
     * @summary Delete a `microsoft` source configuration
     * @request DELETE:/backends/office365/sources/{source_uuid}
     * @secure
     */
    deleteMicrosoftSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/office365/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetAMicrosoftSource
     * @summary Get a `microsoft` source configuration
     * @request GET:/backends/office365/sources/{source_uuid}
     * @secure
     */
    getAMicrosoftSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<MicrosoftSource, APIError>({
        path: `/backends/office365/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.microsoft.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdateMicrosoftSource
     * @summary Update a `microsoft` source configuration
     * @request PUT:/backends/office365/sources/{source_uuid}
     * @secure
     */
    updateMicrosoftSource: (
      sourceUuid: string,
      body: MicrosoftSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/office365/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.office365.sources.{source_uuid}.contacts.read`
     *
     * @tags office365
     * @name ListMicrosoftContactsFromSource
     * @summary Retrieve all contacts from `office365`
     * @request GET:/backends/office365/sources/{source_uuid}/contacts
     * @secure
     */
    listMicrosoftContactsFromSource: (
      sourceUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Office365ContactList, LegacyError>({
        path: `/backends/office365/sources/${sourceUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.personal.sources.read`
     *
     * @tags configuration
     * @name ListPersonalSource
     * @summary Get all `personal` source configurations
     * @request GET:/backends/personal/sources
     * @secure
     */
    listPersonalSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PersonalSourceItems, any>({
        path: `/backends/personal/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.personal.sources.create`
     *
     * @tags configuration
     * @name CreatePersonalSource
     * @summary Configure a source for the `personal` backend
     * @request POST:/backends/personal/sources
     * @secure
     */
    createPersonalSource: (body: PersonalSource, params: RequestParams = {}) =>
      this.request<PersonalSource, APIError | LegacyError>({
        path: `/backends/personal/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeletePersonalSource
     * @summary Delete a `personal` source configuration
     * @request DELETE:/backends/personal/sources/{source_uuid}
     * @secure
     */
    deletePersonalSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/personal/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetAPersonalSource
     * @summary Get a `personal` source configuration
     * @request GET:/backends/personal/sources/{source_uuid}
     * @secure
     */
    getAPersonalSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<PersonalSource, APIError>({
        path: `/backends/personal/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.personal.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdatePersonalSource
     * @summary Update a `personal` source configuration
     * @request PUT:/backends/personal/sources/{source_uuid}
     * @secure
     */
    updatePersonalSource: (
      sourceUuid: string,
      body: PersonalSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/personal/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.read`
     *
     * @tags configuration
     * @name ListPhonebookSource
     * @summary Get all `phonebook` source configurations
     * @request GET:/backends/phonebook/sources
     * @secure
     */
    listPhonebookSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhonebookSourceItems, any>({
        path: `/backends/phonebook/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.create`
     *
     * @tags configuration
     * @name CreatePhonebookSource
     * @summary Configure a source for the `phonebook` backend
     * @request POST:/backends/phonebook/sources
     * @secure
     */
    createPhonebookSource: (
      body: PhonebookSource,
      params: RequestParams = {},
    ) =>
      this.request<PhonebookSource, APIError | LegacyError>({
        path: `/backends/phonebook/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeletePhonebookSource
     * @summary Delete a `phonebook` source configuration
     * @request DELETE:/backends/phonebook/sources/{source_uuid}
     * @secure
     */
    deletePhonebookSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/phonebook/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetAPhonebookSource
     * @summary Get a `phonebook` source configuration
     * @request GET:/backends/phonebook/sources/{source_uuid}
     * @secure
     */
    getAPhonebookSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<PhonebookSource, APIError>({
        path: `/backends/phonebook/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdatePhonebookSource
     * @summary Update a `phonebook` source configuration
     * @request PUT:/backends/phonebook/sources/{source_uuid}
     * @secure
     */
    updatePhonebookSource: (
      sourceUuid: string,
      body: PhonebookSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/phonebook/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.phonebook.sources.{source_uuid}.contacts.read`
     *
     * @tags phonebook
     * @name ListPhonebookSourceContacts
     * @summary Get contacts from a `phonebook` source
     * @request GET:/backends/phonebook/sources/{source_uuid}/contacts
     * @secure
     */
    listPhonebookSourceContacts: (
      sourceUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContactList, LegacyError>({
        path: `/backends/phonebook/sources/${sourceUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.read`
     *
     * @tags configuration
     * @name ListWazoSource
     * @summary Get all `wazo` source configurations
     * @request GET:/backends/wazo/sources
     * @secure
     */
    listWazoSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<WazoSourceItems, any>({
        path: `/backends/wazo/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.create`
     *
     * @tags configuration
     * @name CreateWazoSource
     * @summary Configure a source for the `wazo` backend
     * @request POST:/backends/wazo/sources
     * @secure
     */
    createWazoSource: (body: WazoSource, params: RequestParams = {}) =>
      this.request<WazoSource, APIError | LegacyError>({
        path: `/backends/wazo/sources`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteWazoSource
     * @summary Delete a `wazo` source configuration
     * @request DELETE:/backends/wazo/sources/{source_uuid}
     * @secure
     */
    deleteWazoSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/backends/wazo/sources/${sourceUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.read`
     *
     * @tags configuration
     * @name GetAWazoSource
     * @summary Get a `wazo` source configuration
     * @request GET:/backends/wazo/sources/{source_uuid}
     * @secure
     */
    getAWazoSource: (sourceUuid: string, params: RequestParams = {}) =>
      this.request<WazoSource, APIError>({
        path: `/backends/wazo/sources/${sourceUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.update`
     *
     * @tags configuration
     * @name UpdateWazoSource
     * @summary Update a `wazo` source configuration
     * @request PUT:/backends/wazo/sources/{source_uuid}
     * @secure
     */
    updateWazoSource: (
      sourceUuid: string,
      body: WazoSource,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError | LegacyError>({
        path: `/backends/wazo/sources/${sourceUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.backends.wazo.sources.{source_uuid}.contacts.read`
     *
     * @tags wazo
     * @name ListWazoContactsFromSource
     * @summary Retrieve all contacts from `wazo`
     * @request GET:/backends/wazo/sources/{source_uuid}/contacts
     * @secure
     */
    listWazoContactsFromSource: (
      sourceUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /** Filter by contact uuid. Many uuid can be specified. Each uuid MUST be separated by a comma (,). Many uuid will perform a logical OR. */
        uuid?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<WazoContactList, LegacyError>({
        path: `/backends/wazo/sources/${sourceUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  config = {
    /**
     * @description **Required ACL:** `dird.config.read`
     *
     * @tags config
     * @name ConfigurationGet
     * @summary Returns the current service configuration
     * @request GET:/config
     * @secure
     */
    configurationGet: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/config`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.config.update` Changes are not persistent across service restart.
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
  directories = {
    /**
     * @description **Required ACL:** `dird.directories.favorites.{directory}.{contact}.delete` Remove the contact from {directory} from the list of favorite contacts.
     *
     * @tags directories, favorites
     * @name RemoveFavorite
     * @summary Unmark a contact as favorite
     * @request DELETE:/directories/favorites/{directory}/{contact}
     * @secure
     */
    removeFavorite: (
      directory: string,
      contact: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/directories/favorites/${directory}/${contact}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.favorites.{directory}.{contact}.update` Add the contact from {directory} to the list of favorite contacts.
     *
     * @tags directories, favorites
     * @name AddFavorite
     * @summary Mark a contact as favorite
     * @request PUT:/directories/favorites/{directory}/{contact}
     * @secure
     */
    addFavorite: (
      directory: string,
      contact: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/directories/favorites/${directory}/${contact}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.favorites.{profile}.read` Get the list of favorite contacts for directories configured in the profile
     *
     * @tags directories, favorites
     * @name ListFavorites
     * @summary List favorite contacts
     * @request GET:/directories/favorites/{profile}
     * @secure
     */
    listFavorites: (profile: string, params: RequestParams = {}) =>
      this.request<ContactList, LegacyError>({
        path: `/directories/favorites/${profile}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.lookup.{profile}.read` The `lookup` query will return a list of result matching the searched term. The result will be retrieved from all configured directories for the given profile. This route is provided by the `default_json_view` plugin using the `lookup` plugin and all configured sources for the given profile.
     *
     * @tags directories
     * @name Lookup
     * @summary Search for contacts
     * @request GET:/directories/lookup/{profile}
     * @secure
     */
    lookup: (
      profile: string,
      query: {
        /** A search term to look for */
        term: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Lookup, LegacyError>({
        path: `/directories/lookup/${profile}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.lookup.{profile}.headers.read` Column headers that can be used when displaying lookup results to the client
     *
     * @tags directories
     * @name GetHeaders
     * @summary Lookup headers
     * @request GET:/directories/lookup/{profile}/headers
     * @secure
     */
    getHeaders: (profile: string, params: RequestParams = {}) =>
      this.request<Header, LegacyError>({
        path: `/directories/lookup/${profile}/headers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.lookup.{profile}.{user_uuid}.read` The `lookup` query will return a list of result matching the searched term. The result will be retrieved from all configured directories for the given profile and user. This route is provided by the `default_json_view` plugin using the `lookup` plugin and all configured sources for the given profile.
     *
     * @tags directories
     * @name LookupUser
     * @summary Search for contacts for a particular user
     * @request GET:/directories/lookup/{profile}/{user_uuid}
     * @secure
     */
    lookupUser: (
      profile: string,
      userUuid: string,
      query: {
        /** A search term to look for */
        term: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Lookup, LegacyError>({
        path: `/directories/lookup/${profile}/${userUuid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.personal.{profile}.read` Get the list of personal contacts formatted for the profile
     *
     * @tags directories, personal
     * @name ListPersonalProfile
     * @summary List personal contacts with formatting
     * @request GET:/directories/personal/{profile}
     * @secure
     */
    listPersonalProfile: (profile: string, params: RequestParams = {}) =>
      this.request<PhonebookContactList, LegacyError>({
        path: `/directories/personal/${profile}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.reverse.{profile}.{user_uuid}.read` The `reverse` query will return a contact matching the searched exten. The result will be retrieved from all configured directories for the given profile. This route is provided by the `default_json_view` plugin using the `reverse` plugin and all configured sources for the given profile.
     *
     * @tags directories
     * @name Reverse
     * @summary Search for contact by number
     * @request GET:/directories/reverse/{profile}/{user_uuid}
     * @secure
     */
    reverse: (
      profile: string,
      userUuid: string,
      query: {
        /** A search exten to look for */
        exten: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Reverse, LegacyError>({
        path: `/directories/reverse/${profile}/${userUuid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.directories.{profile}.sources.read`
     *
     * @tags directories
     * @name SourcesList
     * @summary List all sources configured for the given profile
     * @request GET:/directories/{profile}/sources
     * @secure
     */
    sourcesList: (
      profile: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfileSourceItems, LegacyError | APIError>({
        path: `/directories/${profile}/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  displays = {
    /**
     * @description **Required ACL:** `dird.displays.read`
     *
     * @tags configuration
     * @name ListDisplay
     * @summary List displays
     * @request GET:/displays
     * @secure
     */
    listDisplay: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DisplayItems, any>({
        path: `/displays`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.displays.create`
     *
     * @tags configuration
     * @name CreateDisplay
     * @summary Create a new display configuration
     * @request POST:/displays
     * @secure
     */
    createDisplay: (body: Display, params: RequestParams = {}) =>
      this.request<Display, APIError>({
        path: `/displays`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.displays.{display_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteDisplay
     * @summary Delete display
     * @request DELETE:/displays/{display_uuid}
     * @secure
     */
    deleteDisplay: (displayUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/displays/${displayUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.displays.{display_uuid}.read`
     *
     * @tags configuration
     * @name GetDisplay
     * @summary Get display
     * @request GET:/displays/{display_uuid}
     * @secure
     */
    getDisplay: (displayUuid: string, params: RequestParams = {}) =>
      this.request<Display, APIError>({
        path: `/displays/${displayUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.displays.{display_uuid}.update`
     *
     * @tags configuration
     * @name UpdateDisplay
     * @summary Update display
     * @request PUT:/displays/{display_uuid}
     * @secure
     */
    updateDisplay: (
      displayUuid: string,
      body: Display,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/displays/${displayUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  graphql = {
    /**
     * No description
     *
     * @tags work_in_progress
     * @name Graphiql
     * @summary Show GraphiQL test interface for GraphQL in a browser. This is not a REST endpoint.
     * @request GET:/graphql
     * @secure
     */
    graphiql: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/graphql`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.graphql.{root_field_name}`, e.g. `dird.graphql.hello`
     *
     * @tags work_in_progress
     * @name GraphqlQuery
     * @summary Execute a GraphQL query. This is a GraphQL endpoint, not a REST endpoint.
     * @request POST:/graphql
     * @secure
     */
    graphqlQuery: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/graphql`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  personal = {
    /**
     * @description **Required ACL:** `dird.personal.delete`
     *
     * @tags personal
     * @name PurgePersonal
     * @summary Purge personal contacts
     * @request DELETE:/personal
     * @secure
     */
    purgePersonal: (params: RequestParams = {}) =>
      this.request<void, LegacyError>({
        path: `/personal`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.read` CSV format is the same as `/import`, where headers of all contacts are mixed. The charset of the response is always `utf-8`. Errors are always formatted in JSON.
     *
     * @tags personal
     * @name ListPersonal
     * @summary List personal contacts
     * @request GET:/personal
     * @secure
     */
    listPersonal: (
      query?: {
        /**
         * Format of the response body
         * @default "application/json"
         */
        format?: "application/json" | "text/csv";
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          items?: PhonebookContactList;
        },
        LegacyError
      >({
        path: `/personal`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.create`
     *
     * @tags personal
     * @name AddPersonal
     * @summary Create new personal contact
     * @request POST:/personal
     * @secure
     */
    addPersonal: (contact: ContactBodySample, params: RequestParams = {}) =>
      this.request<Contact, LegacyError>({
        path: `/personal`,
        method: "POST",
        body: contact,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.import.create`
     *
     * @tags personal
     * @name ImportPersonal
     * @summary Import multiple personal contacts at once
     * @request POST:/personal/import
     * @secure
     */
    importPersonal: (contacts: string, params: RequestParams = {}) =>
      this.request<ContactImportResponse, LegacyError>({
        path: `/personal/import`,
        method: "POST",
        body: contacts,
        secure: true,
        type: ContentType.Text,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.{contact_id}.delete`
     *
     * @tags personal
     * @name RemovePersonal
     * @summary Remove personal contact
     * @request DELETE:/personal/{contact_id}
     * @secure
     */
    removePersonal: (contactId: string, params: RequestParams = {}) =>
      this.request<void, LegacyError>({
        path: `/personal/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.{contact_id}.read` Returns the details of the personal contact.
     *
     * @tags personal
     * @name GetPersonal
     * @summary Get personal contact
     * @request GET:/personal/{contact_id}
     * @secure
     */
    getPersonal: (contactId: string, params: RequestParams = {}) =>
      this.request<Contact, LegacyError>({
        path: `/personal/${contactId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.personal.{contact_id}.update` Replace personal contact's attributes. Omitted attributes will be removed. Attribute `id` can not be changed.
     *
     * @tags personal
     * @name EditPersonal
     * @summary Edit personal contact
     * @request PUT:/personal/{contact_id}
     * @secure
     */
    editPersonal: (
      contactId: string,
      contact: ContactBodySample,
      params: RequestParams = {},
    ) =>
      this.request<Contact, LegacyError>({
        path: `/personal/${contactId}`,
        method: "PUT",
        body: contact,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  phonebooks = {
    /**
     * @description **Required ACL:** `dird.phonebooks.read`
     *
     * @tags phonebook
     * @name PhonebooksList
     * @summary List all phonebooks for a given tenant
     * @request GET:/phonebooks
     * @secure
     */
    phonebooksList: (
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Phonebook[], LegacyError>({
        path: `/phonebooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.create`
     *
     * @tags phonebook
     * @name CreatePhonebook
     * @summary Create a new phonebook
     * @request POST:/phonebooks
     * @secure
     */
    createPhonebook: (phonebook: PhonebookBody, params: RequestParams = {}) =>
      this.request<Phonebook, LegacyError>({
        path: `/phonebooks`,
        method: "POST",
        body: phonebook,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.delete`
     *
     * @tags phonebook
     * @name PhonebooksDelete
     * @summary Delete an existing phonebook
     * @request DELETE:/phonebooks/{phonebook_uuid}
     * @secure
     */
    phonebooksDelete: (phonebookUuid: string, params: RequestParams = {}) =>
      this.request<void, LegacyError>({
        path: `/phonebooks/${phonebookUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.read`
     *
     * @tags phonebook
     * @name PhonebooksDetail
     * @summary Get the attributes of a phonebook
     * @request GET:/phonebooks/{phonebook_uuid}
     * @secure
     */
    phonebooksDetail: (phonebookUuid: string, params: RequestParams = {}) =>
      this.request<Phonebook, LegacyError>({
        path: `/phonebooks/${phonebookUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.update`
     *
     * @tags phonebook
     * @name PhonebooksUpdate
     * @summary Modify an existing phonebook
     * @request PUT:/phonebooks/{phonebook_uuid}
     * @secure
     */
    phonebooksUpdate: (
      phonebookUuid: string,
      phonebook: PhonebookBody,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/phonebooks/${phonebookUuid}`,
        method: "PUT",
        body: phonebook,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.read`
     *
     * @tags phonebook
     * @name ContactsList
     * @summary List all contacts for a given phonebook
     * @request GET:/phonebooks/{phonebook_uuid}/contacts
     * @secure
     */
    contactsList: (
      phonebookUuid: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContactListResponse, LegacyError>({
        path: `/phonebooks/${phonebookUuid}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.create`
     *
     * @tags phonebook
     * @name CreatePhonebookContact
     * @summary Create a new contact
     * @request POST:/phonebooks/{phonebook_uuid}/contacts
     * @secure
     */
    createPhonebookContact: (
      phonebookUuid: string,
      contact: PhonebookContact,
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContact, LegacyError>({
        path: `/phonebooks/${phonebookUuid}/contacts`,
        method: "POST",
        body: contact,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.create`
     *
     * @tags phonebook
     * @name ImportPhonebook
     * @summary Import multiple contacts at once
     * @request POST:/phonebooks/{phonebook_uuid}/contacts/import
     * @secure
     */
    importPhonebook: (
      phonebookUuid: string,
      contacts: string,
      params: RequestParams = {},
    ) =>
      this.request<
        PhonebookContactImportResponse,
        PhonebookContactImportError | LegacyError
      >({
        path: `/phonebooks/${phonebookUuid}/contacts/import`,
        method: "POST",
        body: contacts,
        secure: true,
        type: ContentType.Text,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.delete`
     *
     * @tags phonebook
     * @name ContactsDelete
     * @summary Delete an existing contact
     * @request DELETE:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
     * @secure
     */
    contactsDelete: (
      phonebookUuid: string,
      contactId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/phonebooks/${phonebookUuid}/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.read`
     *
     * @tags phonebook
     * @name ContactsDetail
     * @summary Get the attributes of a contact
     * @request GET:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
     * @secure
     */
    contactsDetail: (
      phonebookUuid: string,
      contactId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/phonebooks/${phonebookUuid}/contacts/${contactId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.phonebooks.{phonebook_uuid}.contacts.{contact_id}.update`
     *
     * @tags phonebook
     * @name ContactsUpdate
     * @summary Modify an existing contact
     * @request PUT:/phonebooks/{phonebook_uuid}/contacts/{contact_id}
     * @secure
     */
    contactsUpdate: (
      phonebookUuid: string,
      contactId: string,
      contact: ContactBodySample,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/phonebooks/${phonebookUuid}/contacts/${contactId}`,
        method: "PUT",
        body: contact,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  profiles = {
    /**
     * @description **Required ACL:** `dird.profiles.read`
     *
     * @tags configuration
     * @name ListProfile
     * @summary List all configured profiles
     * @request GET:/profiles
     * @secure
     */
    listProfile: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfileItems, any>({
        path: `/profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.profiles.create`
     *
     * @tags configuration
     * @name CreateProfile
     * @summary Create a new configuration profile
     * @request POST:/profiles
     * @secure
     */
    createProfile: (body: Profile, params: RequestParams = {}) =>
      this.request<Profile, APIError>({
        path: `/profiles`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.profiles.{profile_uuid}.delete`
     *
     * @tags configuration
     * @name DeleteProfile
     * @summary Delete a profile configuration
     * @request DELETE:/profiles/{profile_uuid}
     * @secure
     */
    deleteProfile: (profileUuid: string, params: RequestParams = {}) =>
      this.request<any, APIError>({
        path: `/profiles/${profileUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.profiles.{profile_uuid}.read`
     *
     * @tags configuration
     * @name GetProfile
     * @summary Get a profile configuration
     * @request GET:/profiles/{profile_uuid}
     * @secure
     */
    getProfile: (profileUuid: string, params: RequestParams = {}) =>
      this.request<Profile, APIError>({
        path: `/profiles/${profileUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.profiles.{profile_uuid}.update`
     *
     * @tags configuration
     * @name UpdateProfile
     * @summary Update a profile configuration
     * @request PUT:/profiles/{profile_uuid}
     * @secure
     */
    updateProfile: (
      profileUuid: string,
      body: Profile,
      params: RequestParams = {},
    ) =>
      this.request<any, APIError>({
        path: `/profiles/${profileUuid}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  services = {
    /**
     * @description **Required ACL:** `dird.services.read`
     *
     * @tags configuration
     * @name ListServices
     * @summary List all loaded services
     * @request GET:/services
     * @secure
     */
    listServices: (
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ServiceItems, any>({
        path: `/services`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sources = {
    /**
     * @description **Required ACL:** `dird.sources.read`
     *
     * @tags configuration
     * @name ListSource
     * @summary List all configured sources
     * @request GET:/sources
     * @secure
     */
    listSource: (
      query?: {
        /**
         * Should the query include sub-tenants
         * @default false
         */
        recurse?: boolean;
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the offsets the start by the number specified
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SourceListItems, any>({
        path: `/sources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description **Required ACL:** `dird.status.read`
     *
     * @tags status
     * @name StatusList
     * @summary Print infos about internal status of wazo-dird`
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
  tenants = {
    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.read`
     *
     * @tags phonebook
     * @name PhonebooksList
     * @summary List all phonebooks for a given tenant
     * @request GET:/tenants/{tenant}/phonebooks
     * @deprecated
     * @secure
     */
    phonebooksList: (
      tenant: string,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Phonebook[], LegacyError>({
        path: `/tenants/${tenant}/phonebooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.create`
     *
     * @tags phonebook
     * @name CreatePhonebookDeprecated
     * @summary Create a new phonebook
     * @request POST:/tenants/{tenant}/phonebooks
     * @deprecated
     * @secure
     */
    createPhonebookDeprecated: (
      tenant: string,
      phonebook: PhonebookBody,
      params: RequestParams = {},
    ) =>
      this.request<Phonebook, LegacyError>({
        path: `/tenants/${tenant}/phonebooks`,
        method: "POST",
        body: phonebook,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.delete`
     *
     * @tags phonebook
     * @name PhonebooksDelete
     * @summary Delete an existing phonebook
     * @request DELETE:/tenants/{tenant}/phonebooks/{phonebook_id}
     * @deprecated
     * @secure
     */
    phonebooksDelete: (
      tenant: string,
      phonebookId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.read`
     *
     * @tags phonebook
     * @name PhonebooksDetail
     * @summary Get the attributes of a phonebook
     * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}
     * @deprecated
     * @secure
     */
    phonebooksDetail: (
      tenant: string,
      phonebookId: number,
      params: RequestParams = {},
    ) =>
      this.request<Phonebook, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.update`
     *
     * @tags phonebook
     * @name PhonebooksUpdate
     * @summary Modify an existing phonebook
     * @request PUT:/tenants/{tenant}/phonebooks/{phonebook_id}
     * @deprecated
     * @secure
     */
    phonebooksUpdate: (
      tenant: string,
      phonebookId: number,
      phonebook: PhonebookBody,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}`,
        method: "PUT",
        body: phonebook,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.read`
     *
     * @tags phonebook
     * @name PhonebooksContactsList
     * @summary List all contacts for a given phonebook
     * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts
     * @deprecated
     * @secure
     */
    phonebooksContactsList: (
      tenant: string,
      phonebookId: number,
      query?: {
        /** Name of the field to use for sorting the list of items returned. */
        order?: string;
        /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
        direction?: "asc" | "desc";
        /** The limit defines the number of individual objects that are returned */
        limit?: number;
        /**
         * The offset defines the number of items of the collection to skip
         * @default 0
         */
        offset?: number;
        /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContactList, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.create`
     *
     * @tags phonebook
     * @name CreatePhonebookContactDeprecated
     * @summary Create a new contact
     * @request POST:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts
     * @deprecated
     * @secure
     */
    createPhonebookContactDeprecated: (
      tenant: string,
      phonebookId: number,
      contact: PhonebookContact,
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContact, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts`,
        method: "POST",
        body: contact,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.create`
     *
     * @tags phonebook
     * @name ImportPhonebookDeprecated
     * @summary Import multiple contacts at once
     * @request POST:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/import
     * @deprecated
     * @secure
     */
    importPhonebookDeprecated: (
      tenant: string,
      phonebookId: number,
      contacts: string,
      params: RequestParams = {},
    ) =>
      this.request<PhonebookContactImportResponse, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts/import`,
        method: "POST",
        body: contacts,
        secure: true,
        type: ContentType.Text,
        format: "json",
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.delete`
     *
     * @tags phonebook
     * @name PhonebooksContactsDelete
     * @summary Delete an existing contact
     * @request DELETE:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
     * @deprecated
     * @secure
     */
    phonebooksContactsDelete: (
      tenant: string,
      phonebookId: number,
      contactId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.read`
     *
     * @tags phonebook
     * @name PhonebooksContactsDetail
     * @summary Get the attributes of a contact
     * @request GET:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
     * @deprecated
     * @secure
     */
    phonebooksContactsDetail: (
      tenant: string,
      phonebookId: number,
      contactId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts/${contactId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **Required ACL:** `dird.tenants.{tenant}.phonebooks.{phonebook_id}.contacts.{contact_id}.update`
     *
     * @tags phonebook
     * @name PhonebooksContactsUpdate
     * @summary Modify an existing contact
     * @request PUT:/tenants/{tenant}/phonebooks/{phonebook_id}/contacts/{contact_id}
     * @deprecated
     * @secure
     */
    phonebooksContactsUpdate: (
      tenant: string,
      phonebookId: number,
      contactId: string,
      contact: ContactBodySample,
      params: RequestParams = {},
    ) =>
      this.request<void, LegacyError>({
        path: `/tenants/${tenant}/phonebooks/${phonebookId}/contacts/${contactId}`,
        method: "PUT",
        body: contact,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
