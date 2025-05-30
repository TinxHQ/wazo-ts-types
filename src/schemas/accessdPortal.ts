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

export type ActivateCustomerSubscriptionDefaultData = any;

export type ActivateSubscriptionDefaultData = any;

/** AuthorizationCreate */
export interface AuthorizationBase {
  /** The date of the authorization's creation */
  created_at?: string;
  /** IP address of the user who created the authorization */
  issuer_ip?: string;
  /** The date of the authorization's revocation */
  revoked_at?: string;
  rules?: Rule[];
  seats?: Seats;
  /** The status of the authorization. Possible values are: OPEN, REVOKED */
  status?: string;
  /** The UUID of the tenant */
  tenant_uuid?: string;
  /** The UUID of the user */
  user_uuid?: string;
  /** The UUID of the authorization */
  uuid?: string;
}

/** Authorizations UUIDs */
export interface AuthorizationsUUIDs {
  /** The authorizations UUIDs list */
  authorization_uuids: string[];
}

/** AuthorizationList */
export interface BaseAuthorizationList {
  filtered?: number;
  total?: number;
}

export type CreateAuthorizationData = SubAuthorization;

export type CreateAuthorizationsTokenData = Token;

export type CreateSubscriptionAuthorizationData = MainAuthorization;

export type CreateSubscriptionAuthorizationsTokenData = Token;

/** CustomerSubscription */
export interface CustomerSubscription {
  /**
   * Whether the subscription should canceled at the end of period
   * @default false
   */
  cancel_at_end_of_period?: boolean;
  /** The creation date of the subscription */
  created_at?: string;
  /** The ending date of the current period. This value is updated automatically according the `term`. */
  current_period_ends_at?: string;
  /** The starting date of the current period. This value is updated automatically according the `term`. */
  current_period_started_at?: string;
  /** The UUID of the customer */
  customer_uuid?: string;
  /** The description of the subscription */
  description?: string;
  /**
   * The name of the subscription
   * @default "default"
   */
  name?: string;
  /** The starting date of the next period. If the current period is not started, the value will be the same as `current_period_started_at`. `null` if subscription is expired */
  next_period_starts_at?: string;
  /**
   * Whether the subscription should be considered as 'Not For Resale'. This attribute will remove seats restriction without changing subscription behavior (term, period, renewal).
   * @default false
   */
  nfr?: boolean;
  /** The status of the subscription */
  status?: "ACTIVE" | "EXPIRED";
  /**
   * The duration of the subscription in months. If updated before `current_period_started_at`, then `current_period_ends_at` will be updated with new term. Otherwise a 400 is returned
   * @default 1
   */
  term?: 1 | 12;
  /** The date the subscription had last been modified */
  updated_at?: string;
  /** The UUID of the subscription */
  uuid?: string;
}

/** CustomerSubscriptionSummary */
export interface CustomerSubscriptionSummary {
  /** The name of the customer */
  customer_name?: string;
  /** The UUID of the customer */
  customer_uuid?: string;
  /**
   * The starting date of the next period. `null` if subscription is expired
   * @example "2022-02-01:00:00:00:00+00"
   */
  next_period_starts_at?: string;
  /** Not For Resale */
  nfr?: boolean;
  seats?: CustomerSubscriptionSummarySeats;
  /** @example 12 */
  term?: number;
}

/** CustomerSubscriptionSummaryList */
export interface CustomerSubscriptionSummaryList {
  items?: CustomerSubscriptionSummary[];
  total?: number;
}

/**
 * CustomerSubscriptionSummarySeat
 * Statistic for specific kind of seat
 */
export interface CustomerSubscriptionSummarySeat {
  /** Total seats */
  quantity?: number;
  /** Total seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** CustomerSubscriptionSummarySeats */
export interface CustomerSubscriptionSummarySeats {
  /** Statistic for specific kind of seat */
  "0"?: CustomerSubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "1"?: CustomerSubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "3"?: CustomerSubscriptionSummarySeat;
  /** Total customer subscription's seats */
  quantity?: number;
  /** Total customer subscription's seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

export type DeleteAuthorizationData = any;

export type DeleteSubscriptionAuthorizationData = any;

export type DeleteSubscriptionData = any;

export interface Error {
  reason?: string[];
  status_code?: number;
  timestamp?: string[];
}

export type ExpireCustomerSubscriptionDefaultData = any;

export type ExpireSubscriptionDefaultData = any;

export type GetAuthorizationData = SubAuthorization;

export type GetConfigData = any;

export type GetCustomerSubscriptionData = CustomerSubscription;

export type GetSubscriptionData = Subscription;

export type GetSubscriptionDefaultData = Subscription;

export type GetSubscriptionSummaryData = SubscriptionSummary;

export interface GetSubscriptionSummaryParams {
  /** Whether to recurse for subtenants */
  recurse?: boolean;
}

export type HeadStatusData = any;

export type ListAuthorizationsData = SubAuthorizationList;

export interface ListAuthorizationsParams {
  /** The uuid of the main authorization authorizations are linked to */
  main_authorization_uuid?: string;
  /** The status of the authorization. Possible values are: OPEN, REVOKED */
  status?: string;
}

export type ListAuthorizationsSeatsData = Seats;

export type ListCustomerSubscriptionSummariesData =
  CustomerSubscriptionSummaryList;

export interface ListCustomerSubscriptionSummariesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Maximum number of items to return in the list */
  limit?: number;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export type ListSubscriptionAuthorizationsData = MainAuthorizationList;

export interface ListSubscriptionAuthorizationsParams {
  /** The status of the authorization. Possible values are: OPEN, REVOKED */
  status?: string;
  /** The UUID of the subscription */
  subscriptionUuid: string;
}

export type ListSubscriptionsData = SubscriptionList;

export interface ListSubscriptionsParams {
  /** Whether the subscription auto renew itself */
  cancel_at_end_of_period?: boolean;
  /** The creation date of the subscription */
  created_at?: string;
  /** The partnership level of the subscription */
  partnership?: string;
  /** Whether to recurse for subtenants */
  recurse?: boolean;
  /** The status of the subscription. Possible values are : ACTIVE, EXPIRED */
  status?: string;
  /** The term (in months) of the subscription */
  term?: number;
}

export type MainAuthorization = AuthorizationBase & {
  /** The UUID of the related subscription */
  subscription_uuid?: string;
};

export type MainAuthorizationList = BaseAuthorizationList & {
  items?: MainAuthorization[];
};

/** Rule */
export interface Rule {
  /** The name of the rule */
  name: string;
  /** Rule metadata */
  options?: Record<string, string>;
}

/** Seat */
export interface Seat {
  quantity?: number;
}

/** Seats */
export interface Seats {
  "0"?: Seat;
  "1"?: Seat;
  "3"?: Seat;
}

export type SubAuthorization = AuthorizationBase & {
  /** The UUID of the related location */
  location_uuid?: string;
  /** The UUID of the related main authorization */
  main_authorization_uuid?: string;
};

export type SubAuthorizationList = BaseAuthorizationList & {
  items?: SubAuthorization[];
};

/** SubscriptionCreate */
export interface Subscription {
  /** Whether the subscription should canceled at the end of period */
  cancel_at_end_of_period?: boolean;
  /** The creation date of the subscription */
  created_at?: string;
  /** The ending date of the current period. This value is updated automatically according the `term`. */
  current_period_ends_at?: string;
  /** The starting date of the current period. This value is updated automatically according the `term`. */
  current_period_started_at?: string;
  /** The description of the subscription */
  description?: string;
  /**
   * The name of the subscription
   * @default "default"
   */
  name?: string;
  /**
   * The partnership level of the subscription
   * @default "bronze"
   */
  partnership?: "bronze" | "silver" | "gold" | "platinum";
  /** The status of the subscription. Possible values are: ACTIVE, EXPIRED */
  status?: string;
  /** The UUID of the tenant */
  tenant_uuid?: string;
  /**
   * The duration of the subscription in months
   * @default 12
   */
  term?: 12;
  /** The date the subscription had last been modified */
  updated_at?: string;
  /** The UUID of the subscription */
  uuid?: string;
}

/** SubscriptionList */
export interface SubscriptionList {
  filtered?: number;
  items?: Subscription[];
  total?: number;
}

/** SubscriptionSummary */
export interface SubscriptionSummary {
  /** The partnership level of the subscription */
  partnership?: string;
  seats?: SubscriptionSummarySeats;
}

/**
 * SubscriptionSummarySeat
 * Statistic for specific kind of seat
 */
export interface SubscriptionSummarySeat {
  /** Statistic for specific term */
  by_term?: SubscriptionSummarySeatsByTerm;
  /** Total seats */
  quantity?: number;
  /** Total seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** SubscriptionSummarySeats */
export interface SubscriptionSummarySeats {
  /** Statistic for specific kind of seat */
  "0"?: SubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "1"?: SubscriptionSummarySeat;
  /** Statistic for specific kind of seat */
  "3"?: SubscriptionSummarySeat;
  /** Statistic for specific term */
  by_term?: SubscriptionSummarySeatsByTerm;
  /** Total subscription's seats */
  quantity?: number;
  /** Total subscription's seats on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/**
 * SubscriptionSummarySeatsByTerm
 * Statistic for specific term
 */
export interface SubscriptionSummarySeatsByTerm {
  "1"?: SubscriptionSummarySeatsByTermQuantity;
  "12"?: SubscriptionSummarySeatsByTermQuantity;
}

/** SubscriptionSummarySeatsByTermQuantity */
export interface SubscriptionSummarySeatsByTermQuantity {
  /** Total seats with this specific term */
  quantity?: number;
  /** Total seats with this specific term on last month (NOT IMPLEMENTED) */
  quantity_last_month?: number;
}

/** Token */
export interface Token {
  /** The authorization token in JWT format */
  jwt?: string;
}

export type UpdateAuthorizationData = SubAuthorization;

export type UpdateCustomerSubscriptionData = CustomerSubscription;

export type UpdateSubscriptionAuthorizationData = MainAuthorization;

export type UpdateSubscriptionData = Subscription;

export type UpdateSubscriptionDefaultData = Subscription;

export namespace Authorizations {
  /**
   * @description **Required ACL:** `accessd.authorizations.read`
   * @tags authorizations
   * @name ListAuthorizations
   * @summary List authorizations
   * @request GET:/authorizations
   * @secure
   */
  export namespace ListAuthorizations {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The uuid of the main authorization authorizations are linked to */
      main_authorization_uuid?: string;
      /** The status of the authorization. Possible values are: OPEN, REVOKED */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListAuthorizationsData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.create`
   * @tags authorizations
   * @name CreateAuthorization
   * @summary Create authorization
   * @request POST:/authorizations
   * @secure
   */
  export namespace CreateAuthorization {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SubAuthorization;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateAuthorizationData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.seats.read`
   * @tags authorizations
   * @name ListAuthorizationsSeats
   * @summary List authorizations seats
   * @request GET:/authorizations/seats
   * @secure
   */
  export namespace ListAuthorizationsSeats {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListAuthorizationsSeatsData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.token.create`
   * @tags authorizations
   * @name CreateAuthorizationsToken
   * @summary Create a token for several authorizations
   * @request POST:/authorizations/token
   * @secure
   */
  export namespace CreateAuthorizationsToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthorizationsUUIDs;
    export type RequestHeaders = {};
    export type ResponseBody = CreateAuthorizationsTokenData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.delete`
   * @tags authorizations
   * @name DeleteAuthorization
   * @summary Delete an authorization
   * @request DELETE:/authorizations/{authorization_uuid}
   * @secure
   */
  export namespace DeleteAuthorization {
    export type RequestParams = {
      /** The UUID of the authorization */
      authorizationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteAuthorizationData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.read`
   * @tags authorizations
   * @name GetAuthorization
   * @summary Get authorization
   * @request GET:/authorizations/{authorization_uuid}
   * @secure
   */
  export namespace GetAuthorization {
    export type RequestParams = {
      /** The UUID of the authorization */
      authorizationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetAuthorizationData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.{authorization_uuid}.update`
   * @tags authorizations
   * @name UpdateAuthorization
   * @summary Update an authorization
   * @request PUT:/authorizations/{authorization_uuid}
   * @secure
   */
  export namespace UpdateAuthorization {
    export type RequestParams = {
      /** The UUID of the authorization */
      authorizationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SubAuthorization;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateAuthorizationData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `accessd.config.read`
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
}

export namespace Customers {
  /**
   * @description **Required ACL:** `accessd.customers.subscriptions.default.summary.read`
   * @tags customers, subscriptions
   * @name ListCustomerSubscriptionSummaries
   * @summary List customer subscription summaries
   * @request GET:/customers/subscriptions/default/summary
   * @secure
   */
  export namespace ListCustomerSubscriptionSummaries {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Maximum number of items to return in the list */
      limit?: number;
      /** Number of items to skip over in the list. Useful for pagination. */
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
    export type ResponseBody = ListCustomerSubscriptionSummariesData;
  }

  /**
   * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.read` The `default` resource always exists
   * @tags customers, subscriptions
   * @name GetCustomerSubscription
   * @summary Get customer's subscription
   * @request GET:/customers/{customer_uuid}/subscriptions/default
   * @secure
   */
  export namespace GetCustomerSubscription {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCustomerSubscriptionData;
  }

  /**
   * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.update` - The `default` resource always exists - When expired, the subscription cannot be updated - Only Wazo can update the `current_period_started_at` field - Only Wazo can update the `term` field after a started period - Only Wazo can update the `nfr` field after a started period
   * @tags customers, subscriptions
   * @name UpdateCustomerSubscription
   * @summary Update customer's subscription
   * @request PUT:/customers/{customer_uuid}/subscriptions/default
   * @secure
   */
  export namespace UpdateCustomerSubscription {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CustomerSubscription;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateCustomerSubscriptionData;
  }

  /**
   * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.activate.update` - All revoked authorizations will be re-opened - `cancel_at_end_of_period` will be forced to `false` - `current_period_started_at` will be set to today
   * @tags customers, subscriptions
   * @name ActivateCustomerSubscriptionDefault
   * @summary Activate default customer subscription
   * @request PUT:/customers/{customer_uuid}/subscriptions/default/activate
   * @secure
   */
  export namespace ActivateCustomerSubscriptionDefault {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivateCustomerSubscriptionDefaultData;
  }

  /**
   * @description **Required ACL:** `accessd.customers.{customer_uuid}.subscriptions.default.expire.update` - All open authorizations will be revoked
   * @tags customers, subscriptions
   * @name ExpireCustomerSubscriptionDefault
   * @summary Activate default customer subscription
   * @request PUT:/customers/{customer_uuid}/subscriptions/default/expire
   * @secure
   */
  export namespace ExpireCustomerSubscriptionDefault {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExpireCustomerSubscriptionDefaultData;
  }
}

export namespace Status {
  /**
   * @description This endpoint is not authenticated
   * @tags status
   * @name HeadStatus
   * @summary Check if swarm-accessd is OK
   * @request HEAD:/status
   * @secure
   */
  export namespace HeadStatus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadStatusData;
  }
}

export namespace Subscriptions {
  /**
   * @description **Required ACL:** `accessd.subscriptions.read`
   * @tags subscriptions
   * @name ListSubscriptions
   * @summary List subscriptions
   * @request GET:/subscriptions
   * @secure
   */
  export namespace ListSubscriptions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Whether the subscription auto renew itself */
      cancel_at_end_of_period?: boolean;
      /** The creation date of the subscription */
      created_at?: string;
      /** The partnership level of the subscription */
      partnership?: string;
      /** Whether to recurse for subtenants */
      recurse?: boolean;
      /** The status of the subscription. Possible values are : ACTIVE, EXPIRED */
      status?: string;
      /** The term (in months) of the subscription */
      term?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListSubscriptionsData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.default.read` The `default` resource always exists
   * @tags subscriptions
   * @name GetSubscriptionDefault
   * @summary Get default subscription
   * @request GET:/subscriptions/default
   * @secure
   */
  export namespace GetSubscriptionDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetSubscriptionDefaultData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.default.update` The `default` resource always exists
   * @tags subscriptions
   * @name UpdateSubscriptionDefault
   * @summary Update default subscription
   * @request PUT:/subscriptions/default
   * @secure
   */
  export namespace UpdateSubscriptionDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Subscription;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateSubscriptionDefaultData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.default.activate.update` - All revoked authorizations will be re-opened - `cancel_at_end_of_period` will be forced to `false` - `current_period_started_at` will be set to today
   * @tags subscriptions
   * @name ActivateSubscriptionDefault
   * @summary Activate default subscription
   * @request PUT:/subscriptions/default/activate
   * @secure
   */
  export namespace ActivateSubscriptionDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ActivateSubscriptionDefaultData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.default.expire.update` - All opened authorizations will be revoked
   * @tags subscriptions
   * @name ExpireSubscriptionDefault
   * @summary Expire default subscription
   * @request PUT:/subscriptions/default/expire
   * @secure
   */
  export namespace ExpireSubscriptionDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ExpireSubscriptionDefaultData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.default.summary.read` Using `recurse=true` will sum seats from all customers from sub-resellers. Using `recurse=false` will only sum seats from *direct* customers. NFR subscriptions are ignored.
   * @tags subscriptions
   * @name GetSubscriptionSummary
   * @summary Get subscription summary
   * @request GET:/subscriptions/default/summary
   * @secure
   */
  export namespace GetSubscriptionSummary {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Whether to recurse for subtenants */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetSubscriptionSummaryData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.token.create`
   * @tags authorizations, subscriptions
   * @name CreateSubscriptionAuthorizationsToken
   * @summary Create a token for main authorizations belonging to a tenant subscriptions
   * @request POST:/subscriptions/token
   * @secure
   */
  export namespace CreateSubscriptionAuthorizationsToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateSubscriptionAuthorizationsTokenData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.delete`
   * @tags subscriptions
   * @name DeleteSubscription
   * @summary Delete a subscription
   * @request DELETE:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace DeleteSubscription {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteSubscriptionData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.read`
   * @tags subscriptions
   * @name GetSubscription
   * @summary Get subscription
   * @request GET:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace GetSubscription {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetSubscriptionData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.update`
   * @tags subscriptions
   * @name UpdateSubscription
   * @summary Update subscription
   * @request PUT:/subscriptions/{subscription_uuid}
   * @secure
   */
  export namespace UpdateSubscription {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Subscription;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateSubscriptionData;
  }

  /**
   * @description **Required ACL:** `accessd.authorizations.read`
   * @tags authorizations, subscriptions
   * @name ListSubscriptionAuthorizations
   * @summary List authorizations
   * @request GET:/subscriptions/{subscription_uuid}/authorizations
   * @secure
   */
  export namespace ListSubscriptionAuthorizations {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {
      /** The status of the authorization. Possible values are: OPEN, REVOKED */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ListSubscriptionAuthorizationsData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.create`
   * @tags authorizations, subscriptions
   * @name CreateSubscriptionAuthorization
   * @summary Create authorization for a subscription
   * @request POST:/subscriptions/{subscription_uuid}/authorizations
   * @secure
   */
  export namespace CreateSubscriptionAuthorization {
    export type RequestParams = {
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MainAuthorization;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateSubscriptionAuthorizationData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.{authorization_uuid}.delete`
   * @tags authorizations, subscriptions
   * @name DeleteSubscriptionAuthorization
   * @summary Delete an authorization for a subscription
   * @request DELETE:/subscriptions/{subscription_uuid}/authorizations/{authorization_uuid}
   * @secure
   */
  export namespace DeleteSubscriptionAuthorization {
    export type RequestParams = {
      /** The UUID of the authorization */
      authorizationUuid: string;
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeleteSubscriptionAuthorizationData;
  }

  /**
   * @description **Required ACL:** `accessd.subscriptions.{subscription_uuid}.authorizations.{authorization_uuid}.update`
   * @tags authorizations, subscriptions
   * @name UpdateSubscriptionAuthorization
   * @summary Update an authorization for a subscription
   * @request PUT:/subscriptions/{subscription_uuid}/authorizations/{authorization_uuid}
   * @secure
   */
  export namespace UpdateSubscriptionAuthorization {
    export type RequestParams = {
      /** The UUID of the authorization */
      authorizationUuid: string;
      /** The UUID of the subscription */
      subscriptionUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MainAuthorization;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UpdateSubscriptionAuthorizationData;
  }
}
