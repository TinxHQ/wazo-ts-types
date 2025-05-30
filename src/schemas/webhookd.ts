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

export interface HTTPServiceConfig {
  /** Jinja2 template, where variables come from the event triggering the webhook. For more details, see https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/templates. **Default:** the complete event data, JSON-encoded. */
  body?: string;
  /** Content-Type of the body */
  content_type?: string;
  method: "head" | "get" | "post" | "put" | "delete";
  /** Jinja2 template, where variables come from the event triggering the webhook. For more details, see https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/templates */
  url: string;
  /**
   * May be `true`, `false` or a path to the certificate bundle
   * @default "true"
   */
  verify_certificate?: string;
}

export interface HTTPServiceLog {
  request_body?: string;
  request_headers?: Record<string, string>;
  request_method?: string;
  request_url?: string;
  response_body?: string;
  response_headers?: Record<string, string>;
  response_method?: string;
  response_url?: string;
}

export interface ListParams {
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
  search_metadata?: string;
}

export interface Notification {
  /** @maxLength 250 */
  body: string;
  extra?: object;
  /**
   * A name without special characters to differenciate the notification from others
   * @minLength 1
   * @maxLength 100
   * @pattern (?!^(messageReceived|voicemailReceived|incomingCall|cancelIncomingCall)$)(^[a-z0-9_]+$)
   * @example "myCustomNotification"
   */
  notification_type: string;
  /** @maxLength 128 */
  title: string;
  /**
   * @minLength 36
   * @maxLength 36
   */
  user_uuid: string;
}

export type ServiceConfig = Record<string, string>;

export interface Services {
  /** The keys are the service names. */
  services?: object;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export interface Subscription {
  config: ServiceConfig;
  events: string[];
  /** Only trigger webhook when an event occurs related to this user. Not compatible with all events. For more details, see: https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/user_filter */
  events_user_uuid?: string;
  name: string;
  /** The user who owns this subscription. Admin-created subscriptions are not owned. */
  owner_user_uuid?: string;
  service: string;
  uuid?: string;
}

export interface SubscriptionList {
  items?: Subscription[];
  total?: number;
}

export interface SubscriptionLog {
  /** The current attempts */
  attempts?: number;
  /** output of the service */
  detail?: HTTPServiceLog;
  /** @format date-time */
  ended_at?: string;
  event?: string;
  /** Limit of number of attempts */
  max_attempts?: number;
  /** @format date-time */
  started_at?: string;
  status?: "success" | "failure" | "error";
  uuid?: string;
}

/** Arbitrary key-value storage for this subscription. May be used to tag subscriptions. PUT replaces all metadata. */
export type SubscriptionMetadata = object;

export interface SubscriptionRequest {
  config: HTTPServiceConfig;
  events: string[];
  /** Only trigger webhook when an event occurs related to this user. Not compatible with all events. For more details, see: https://wazo-platform.org/uc-doc/api_sdk/rest_api/webhookd/user_filter. */
  events_user_uuid?: string;
  /** Only trigger webhook when an event occurs on this Wazo. */
  events_wazo_uuid?: string;
  name: string;
  /** Known services: http. The service may be arbitrary, but it must be bound to an installed plugin in order to be effective. */
  service: string;
  tags?: object;
}

export interface UserListParams {
  /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
  search_metadata?: string;
}

export interface UserSubscriptionRequest {
  config: HTTPServiceConfig;
  events: string[];
  name: string;
  /** Known services: http. The service may be arbitrary, but it must be bound to an installed plugin in order to be effective. */
  service: string;
  /** Arbitrary key-value storage for this subscription. May be used to tag subscriptions. PUT replaces all metadata. */
  tags?: SubscriptionMetadata;
}

export namespace Config {
  /**
   * @description **Required ACL:** `webhookd.config.read`
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
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `webhookd.config.update` Changes are not persistent across service restart.
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

export namespace Mobile {
  /**
   * @description **Required ACL:** `webhookd.mobile.notifications.send`
   * @tags notifications
   * @name PostMobileNotification
   * @summary Send a push notification to a user
   * @request POST:/mobile/notifications
   * @secure
   */
  export namespace PostMobileNotification {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Notification;
    export type RequestHeaders = {
      /** The User's tenant UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = void;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `webhookd.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-webhookd
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

export namespace Subscriptions {
  /**
   * @description **Required ACL:** `webhookd.subscriptions.read`
   * @tags subscriptions
   * @name List
   * @summary List subscriptions to HTTP callbacks
   * @request GET:/subscriptions
   * @secure
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
      search_metadata?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SubscriptionList;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.create` For more information: https://wazo-platform.org/documentation/api/webhook.html
   * @tags subscriptions
   * @name Create
   * @summary Subscribe to a HTTP callback (webhook)
   * @request POST:/subscriptions
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SubscriptionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.services.read`
   * @tags subscriptions
   * @name GetSubscriptionsServices
   * @summary Show the available subscription services
   * @request GET:/subscriptions/services
   * @secure
   */
  export namespace GetSubscriptionsServices {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Services;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.delete`
   * @tags subscriptions
   * @name Delete
   * @summary Delete a subscription
   * @request DELETE:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace Delete {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.read`
   * @tags subscriptions
   * @name Get
   * @summary Get a subscription
   * @request GET:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace Get {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Subscription;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.update`
   * @tags subscriptions
   * @name Edit
   * @summary Edit a subscription
   * @request PUT:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace Edit {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SubscriptionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Subscription;
  }

  /**
   * @description **Required ACL:** `webhookd.subscriptions.{subscription_uuid}.logs.read`
   * @tags subscriptions
   * @name GetLogs
   * @summary Get hook logs
   * @request GET:/subscriptions/{subscription_uuid}/logs
   * @secure
   */
  export namespace GetLogs {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubscriptionLog;
  }
}

export namespace Users {
  /**
   * @description **Required ACL:** `webhookd.users.me.subscriptions.read`
   * @tags subscriptions, users
   * @name UserList
   * @summary List subscriptions of a user to HTTP callbacks
   * @request GET:/users/me/subscriptions
   * @secure
   */
  export namespace UserList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A search term formatted like "key:value" that will only match subscriptions having a metadata entry "key=value". May be given multiple times to filter more precisely on different metadata keys. */
      search_metadata?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubscriptionList;
  }

  /**
   * @description **Required ACL:** `webhookd.users.me.subscriptions.create` For more information: https://wazo-platform.org/documentation/api/webhook.html
   * @tags subscriptions, users
   * @name UserCreate
   * @summary Subscribe to a HTTP callback (webhook) as a user
   * @request POST:/users/me/subscriptions
   * @secure
   */
  export namespace UserCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserSubscriptionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `webhookd.users.me.subscriptions.{subscription_uuid}.delete`
   * @tags subscriptions, users
   * @name UserDelete
   * @summary Delete a user subscription
   * @request DELETE:/users/me/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace UserDelete {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description **Required ACL:** `webhookd.users.me.subscriptions.{subscription_uuid}.read`
   * @tags subscriptions, users
   * @name GetUserSubscription
   * @summary Get a user subscription
   * @request GET:/users/me/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace GetUserSubscription {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Subscription;
  }
}
