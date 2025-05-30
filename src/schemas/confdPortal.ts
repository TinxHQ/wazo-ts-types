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
  error_id?: string;
  message?: string;
  resource?: string;
  timestamp?: number;
}

/** Account */
export interface Account {
  /** The date of the account's creation */
  created_at?: string;
  customer?: AccountCustomer;
  /** The date of the account's subscription modification */
  modified_at?: string;
  subscription?: number;
  tenant_uuid?: string;
  uuid?: string;
}

/** AccountCustomer */
export interface AccountCustomer {
  name?: string;
  uuid?: string;
}

/** AccountList */
export interface AccountList {
  filtered?: number;
  items?: Account[];
  total?: number;
}

/**
 * AccountSummary
 * @example {"subscriptions":{"1":{"total":130},"2":{"total":560},"3":{"total":55}}}
 */
export interface AccountSummary {
  subscriptions?: object;
}

export type CheckEngineInstanceAccountSynchronizeData = any;

export interface CheckEngineInstanceAccountSynchronizeParams {
  /** The sha256 hash of accounts */
  hash: string;
  /** UUID of the instance */
  instanceUuid: string;
}

export type CreateCustomerData = Customer;

export type CreateLocationData = Location;

export type CreateResellerData = Reseller;

export type CreateUserData = User;

/** CustomerCreate */
export type Customer = CustomerRelationBase &
  TenantSharedProperties & {
    created_at?: string;
    locations?: LocationRelationBase[];
    reseller?: ResellerRelationBase;
    /** The reseller_uuid of the customer */
    reseller_uuid?: string;
  };

/** CustomerList */
export interface CustomerList {
  filtered?: number;
  items?: Customer[];
  total?: number;
}

export interface CustomerRelationBase {
  /** The ID of the customer in the an external information system */
  client_id?: string;
  /** The name of the customer */
  name?: string;
  /** The UUID of the customer */
  uuid?: string;
}

/** CustomerUpdate */
export type CustomerUpdate = CustomerRelationBase;

/** EngineAccount */
export interface EngineAccount {
  created_at: string;
  engine_account_subscription: number;
  engine_account_uuid: string;
  engine_tenant_uuid: string;
  engine_uuid: string;
  instance_uuid?: string;
}

/** EngineAccountEvent */
export interface EngineAccountEvent {
  engine_account_subscription?: number;
  engine_account_uuid?: string;
  engine_tenant_uuid?: string;
  engine_uuid?: string;
  instance_uuid?: string;
  name?: "create" | "update" | "delete";
  timestamp?: string;
}

/** EngineAccounts */
export interface EngineAccounts {
  accounts?: EngineAccount[];
  engine_version?: string;
}

export type EngineInstanceAccountSynchronizeData = any;

export type GetConfigData = any;

export type GetCustomerData = Customer;

export type GetLocationData = Location;

export type GetPluginData = Plugin;

export type GetPluginsData = PluginList;

export interface GetPluginsParams {
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
  /** Search term used to filter the result */
  search?: string;
}

export type GetResellerData = Reseller;

export type GetTenantData = Tenant;

export type GetTenantsSummaryAccountData = AccountSummary;

export type GetUserData = User;

export type HeadStatusData = any;

export interface Init {
  reseller: ResellerInit;
}

/** Nestbox confd was initialized successfully */
export type Initialized = any;

export type InstallsCustomersCreateData = PluginInstallCreate;

export type InstallsCustomersListData = PluginCustomerInstallation;

export interface InstallsCustomersListParams {
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /**
   * Plug-in's unique identifier
   * @format uuid
   */
  pluginUuid: string;
  /**
   * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
   * @maxItems 25
   * @minItems 1
   * @uniqueItems true
   */
  uuids?: string[];
}

export type InstallsLocationsCreateData = PluginInstallCreate;

export type InstallsLocationsListData = PluginLocationInstallation;

export interface InstallsLocationsListParams {
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /**
   * Plug-in's unique identifier
   * @format uuid
   */
  pluginUuid: string;
  /**
   * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
   * @maxItems 25
   * @minItems 1
   * @uniqueItems true
   */
  uuids?: string[];
}

export type InstallsResellersCreateData = PluginInstallCreate;

export type InstallsResellersListData = PluginResellerInstallation;

export interface InstallsResellersListParams {
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /**
   * Plug-in's unique identifier
   * @format uuid
   */
  pluginUuid: string;
  /**
   * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
   * @maxItems 25
   * @minItems 1
   * @uniqueItems true
   */
  uuids?: string[];
}

/** Instance */
export interface Instance {
  /** The date of the last synchronization with portal */
  synchronization_at?: string;
  tenant_uuid?: string;
  uuid?: string;
  version?: string;
}

/** InstanceList */
export interface InstanceList {
  filtered?: number;
  items?: Instance[];
  total?: number;
}

export type ListAccountsData = AccountList;

export type ListCustomersData = CustomerList;

export interface ListCustomersParams {
  /** Comma-separated list of client_id to filter customers by */
  client_id?: string;
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /** Comma-separated list of names to filter resellers by */
  name?: string;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the result include customers from sub-resellers
   * @default false
   */
  recurse?: boolean;
  /** Search term used to filter the result */
  search?: string;
  /** Comma-separated list of UUIDs to filter resellers by */
  uuid?: string;
}

export type ListInstancesData = InstanceList;

export interface ListInstancesParams {
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export type ListLocationsData = LocationList;

export interface ListLocationsParams {
  /** Comma-separated list of customer UUIDs to filter locations by */
  customer_uuid?: string;
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Instance UUID to filter locations by */
  instance_uuid?: string;
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /** Comma-separated list of names to filter resellers by */
  name?: string;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /**
   * Should the result include locations from customers of sub-resellers
   * @default false
   */
  recurse?: boolean;
  /** Search term used to filter the result */
  search?: string;
  /** Comma-separated list of UUIDs to filter resellers by */
  uuid?: string;
  /** Instance tenant UUID to filter locations by */
  wazo_tenant_uuid?: string;
}

export type ListResellersData = ResellerList;

export interface ListResellersParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** The limit defines the number of individual objects that are returned */
  limit?: number;
  /** Comma-separated list of names to filter resellers by */
  name?: string;
  /**
   * The offset defines the offsets the start by the number specified
   * @default 0
   */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Comma-separated list of parent UUIDs to filter resellers by */
  parent_uuid?: string;
  /** Search term used to filter the result */
  search?: string;
  /** Comma-separated list of UUIDs to filter resellers by */
  uuid?: string;
}

export type ListUsersData = UserList;

/** LocationCreate */
export type Location = LocationRelationBase &
  TenantSharedProperties & {
    created_at?: string;
    customer?: ResellerRelationBase;
    /** The customer_uuid of the location */
    customer_uuid?: string;
  } & LocationWazoTenants;

/** LocationList */
export interface LocationList {
  filtered?: number;
  items?: Location[];
  total?: number;
}

export interface LocationRelationBase {
  /** The name of the location */
  name?: string;
  /** The UUID of the location */
  uuid?: string;
}

/** LocationUpdate */
export type LocationUpdate = LocationRelationBase;

/** LocationWazoTenant */
export interface LocationWazoTenant {
  /** The UUID of the instance credential */
  credential_uuid?: string;
  /** The UUID of the instance */
  instance_uuid?: string;
  /** The UUID of the tenant */
  uuid?: string;
}

/** LocationWazoTenants */
export interface LocationWazoTenants {
  wazo_tenants?: LocationWazoTenant[];
}

/** portal plug-in */
export type Plugin = {
  /** @format date-time */
  created_at?: string;
  /**
   * plug-in's manifest URL location
   * @format url
   */
  manifest_url?: string;
  /** if true, this plug-in has been inherited */
  read_only?: boolean;
  /**
   * plug-in's unique identifier
   * @format uuid
   */
  uuid?: string;
} & PluginSharedProperties;

export type PluginCreate = {
  /**
   * plug-in's manifest URI location
   * @format uri
   * @minLength 1
   * @maxLength 8192
   * @example "https://www.example.com/plugin.json"
   */
  manifest_url: string;
} & PluginSharedProperties;

export interface PluginCustomerInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    customer_uuid?: string;
  })[];
  total?: number;
}

export interface PluginInstallCreate {
  /** @format uuid */
  uuid?: string;
}

export interface PluginInstallParams {
  configuration?: object;
  enabled?: boolean;
  shared?: boolean;
}

export type PluginInstallParamsCustomer = PluginInstallParams & {
  /** @format uuid */
  customer_uuid: string;
};

export type PluginInstallParamsLocation = PluginInstallParams & {
  /** @format uuid */
  location_uuid: string;
};

export type PluginInstallParamsReseller = PluginInstallParams & {
  /** @format uuid */
  reseller_uuid: string;
};

export interface PluginInstallation {
  /** @format uuid */
  plugin_uuid?: string;
}

/** list of portal plug-ins */
export interface PluginList {
  filtered?: number;
  items?: Plugin[];
  total?: number;
}

export interface PluginLocationInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    location_uuid?: string;
  })[];
  total?: number;
}

export interface PluginResellerInstallation {
  filtered?: number;
  items?: (PluginInstallation & {
    /** @format uuid */
    reseller_uuid?: string;
  })[];
  total?: number;
}

export interface PluginSharedProperties {
  /** plug-in's extra configuration object */
  configuration?: object;
  /** enable/disable this plug-in */
  enabled?: boolean;
  /** if true, this plug-in will be inherited by children */
  shared?: boolean;
}

export type PluginUpdate = PluginSharedProperties;

/** Reseller */
export type Reseller = ResellerRelationBaseWithChildren &
  TenantSharedProperties & {
    created_at?: string;
    customers?: CustomerRelationBase[];
    parent?: ResellerRelationBase;
    /** The parent(reseller) uuid of the reseller */
    parent_uuid?: string;
  };

export interface ResellerInit {
  name?: string;
  uuid?: string;
}

/** ResellerList */
export interface ResellerList {
  filtered?: number;
  items?: Reseller[];
  total?: number;
}

export interface ResellerRelationBase {
  /** The name of the reseller */
  name?: string;
  /** The UUID of the reseller */
  uuid?: string;
}

/** ResellerRelationBaseWithChildren */
export type ResellerRelationBaseWithChildren = ResellerRelationBase & {
  children?: ResellerRelationBaseWithChildren[];
};

/** Tenant */
export interface Tenant {
  /** Whether this tenant is a Wazo partner */
  is_partner?: boolean;
  /** The type of tenant */
  resource?: "resellers" | "tenants" | "locations";
  /** The UUID of the tenant */
  uuid?: string;
}

export interface TenantAddress {
  /** The first line of the address */
  line_1?: string;
  /** The second line of the address */
  line_2?: string;
  city?: string;
  country?: string;
  state?: string;
  zip_code?: string;
}

/** TenantSharedProperties */
export interface TenantSharedProperties {
  address?: TenantAddress;
  /** The contact phone number */
  phone?: string;
}

/** User */
export interface User {
  /** The UUID of the user */
  uuid?: string;
  /** A list of abitrary objects */
  visualization?: object;
}

/** UserList */
export interface UserList {
  filtered?: number;
  items?: User[];
  total?: number;
}

/** UserUpdate */
export interface UserUpdate {
  /** A list of abitrary objects */
  visualization?: object;
}

export namespace Accounts {
  /**
   * @description **Required ACL:** `confd.accounts.read`
   * @tags accounts
   * @name ListAccounts
   * @summary List accounts
   * @request GET:/accounts
   * @secure
   */
  export namespace ListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = ListAccountsData;
  }

  /**
   * @description **Required ACL:** `confd.accounts.summary.read`
   * @tags accounts
   * @name GetTenantsSummaryAccount
   * @summary Get summary accounts
   * @request GET:/accounts/summary
   * @secure
   */
  export namespace GetTenantsSummaryAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = GetTenantsSummaryAccountData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `confd.config.read`
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
   * @description **Required ACL:** `confd.customers.read`
   * @tags customers
   * @name ListCustomers
   * @summary List customers
   * @request GET:/customers
   * @secure
   */
  export namespace ListCustomers {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Comma-separated list of client_id to filter customers by */
      client_id?: string;
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /** Comma-separated list of names to filter resellers by */
      name?: string;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the result include customers from sub-resellers
       * @default false
       */
      recurse?: boolean;
      /** Search term used to filter the result */
      search?: string;
      /** Comma-separated list of UUIDs to filter resellers by */
      uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListCustomersData;
  }

  /**
   * @description **Required ACL:** `confd.customers.create`
   * @tags customers
   * @name CreateCustomer
   * @summary Create customer
   * @request POST:/customers
   * @secure
   */
  export namespace CreateCustomer {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Customer;
    export type RequestHeaders = {};
    export type ResponseBody = CreateCustomerData;
  }

  /**
   * @description **Required ACL:** `confd.customers.{customer_uuid}.delete`
   * @tags customers
   * @name DeleteCustomer
   * @summary Delete customer
   * @request DELETE:/customers/{customer_uuid}
   * @secure
   */
  export namespace DeleteCustomer {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.customers.{customer_uuid}.read`
   * @tags customers
   * @name GetCustomer
   * @summary Get customer
   * @request GET:/customers/{customer_uuid}
   * @secure
   */
  export namespace GetCustomer {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCustomerData;
  }

  /**
   * @description **Required ACL:** `confd.customers.{customer_uuid}.update`
   * @tags customers
   * @name UpdateCustomer
   * @summary Update customer
   * @request PUT:/customers/{customer_uuid}
   * @secure
   */
  export namespace UpdateCustomer {
    export type RequestParams = {
      /** The UUID of the customer */
      customerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CustomerUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Engines {
  /**
   * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.events.create`
   * @tags accounts
   * @name AddEngineInstanceAccountEvent
   * @summary Send account events
   * @request POST:/engines/instances/{instance_uuid}/accounts/events
   * @secure
   */
  export namespace AddEngineInstanceAccountEvent {
    export type RequestParams = {
      /** UUID of the instance */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EngineAccountEvent;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.synchronize.read`
   * @tags accounts
   * @name CheckEngineInstanceAccountSynchronize
   * @summary Check if accounts are synchronized
   * @request HEAD:/engines/instances/{instance_uuid}/accounts/synchronize
   * @secure
   */
  export namespace CheckEngineInstanceAccountSynchronize {
    export type RequestParams = {
      /** UUID of the instance */
      instanceUuid: string;
    };
    export type RequestQuery = {
      /** The sha256 hash of accounts */
      hash: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckEngineInstanceAccountSynchronizeData;
  }

  /**
   * @description **Required ACL:** `confd.engines.instances.{instance_uuid}.accounts.synchronize.create`
   * @tags accounts
   * @name EngineInstanceAccountSynchronize
   * @summary Synchronize accounts
   * @request POST:/engines/instances/{instance_uuid}/accounts/synchronize
   * @secure
   */
  export namespace EngineInstanceAccountSynchronize {
    export type RequestParams = {
      /** UUID of the instance */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EngineAccounts;
    export type RequestHeaders = {};
    export type ResponseBody = EngineInstanceAccountSynchronizeData;
  }
}

export namespace Init {
  /**
   * @description Create the first reseller without parent_uuid
   * @tags init
   * @name InitCreate
   * @summary Initialize nestbox-confd
   * @request POST:/init
   * @secure
   */
  export namespace InitCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Init;
    export type RequestHeaders = {};
    export type ResponseBody = Initialized;
  }
}

export namespace Instances {
  /**
   * @description **Required ACL:** `confd.instances.read`
   * @tags accounts, instances
   * @name ListInstances
   * @summary List instances
   * @request GET:/instances
   * @secure
   */
  export namespace ListInstances {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = ListInstancesData;
  }
}

export namespace Locations {
  /**
   * @description **Required ACL:** `confd.locations.read`
   * @tags locations
   * @name ListLocations
   * @summary List locations
   * @request GET:/locations
   * @secure
   */
  export namespace ListLocations {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Comma-separated list of customer UUIDs to filter locations by */
      customer_uuid?: string;
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Instance UUID to filter locations by */
      instance_uuid?: string;
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /** Comma-separated list of names to filter resellers by */
      name?: string;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /**
       * Should the result include locations from customers of sub-resellers
       * @default false
       */
      recurse?: boolean;
      /** Search term used to filter the result */
      search?: string;
      /** Comma-separated list of UUIDs to filter resellers by */
      uuid?: string;
      /** Instance tenant UUID to filter locations by */
      wazo_tenant_uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListLocationsData;
  }

  /**
   * @description **Required ACL:** `confd.locations.create`
   * @tags locations
   * @name CreateLocation
   * @summary Create location
   * @request POST:/locations
   * @secure
   */
  export namespace CreateLocation {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Location;
    export type RequestHeaders = {};
    export type ResponseBody = CreateLocationData;
  }

  /**
   * @description **Required ACL:** `confd.locations.{location_uuid}.delete`
   * @tags locations
   * @name DeleteLocation
   * @summary Delete location
   * @request DELETE:/locations/{location_uuid}
   * @secure
   */
  export namespace DeleteLocation {
    export type RequestParams = {
      /** The UUID of the location */
      locationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.locations.{location_uuid}.read`
   * @tags locations
   * @name GetLocation
   * @summary Get location
   * @request GET:/locations/{location_uuid}
   * @secure
   */
  export namespace GetLocation {
    export type RequestParams = {
      /** The UUID of the location */
      locationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetLocationData;
  }

  /**
   * @description **Required ACL:** `confd.locations.{location_uuid}.update`
   * @tags locations
   * @name UpdateLocation
   * @summary Update location
   * @request PUT:/locations/{location_uuid}
   * @secure
   */
  export namespace UpdateLocation {
    export type RequestParams = {
      /** The UUID of the location */
      locationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LocationUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.locations.{location_uuid}.wazo.tenants.update`
   * @tags locations
   * @name UpdateLocationWazoTenants
   * @summary Update location Wazo tenants
   * @request PUT:/locations/{location_uuid}/wazo/tenants
   * @secure
   */
  export namespace UpdateLocationWazoTenants {
    export type RequestParams = {
      /** The UUID of the location */
      locationUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LocationWazoTenants;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Plugins {
  /**
   * @description **Required ACL:** `confd.plugins.read`
   * @tags plugins
   * @name GetPlugins
   * @summary View installed plug-ins for this resource
   * @request GET:/plugins
   * @secure
   */
  export namespace GetPlugins {
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
      /** Search term used to filter the result */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = GetPluginsData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.create`
   * @tags plugins
   * @name InstallPlugin
   * @summary Install plug-in for this resource
   * @request POST:/plugins
   * @secure
   */
  export namespace InstallPlugin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PluginCreate;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.delete`
   * @tags plugins
   * @name UninstallPlugin
   * @summary Uninstall plug-in
   * @request DELETE:/plugins/{plugin_uuid}
   * @secure
   */
  export namespace UninstallPlugin {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.read`
   * @tags plugins
   * @name GetPlugin
   * @summary View plug-in information
   * @request GET:/plugins/{plugin_uuid}
   * @secure
   */
  export namespace GetPlugin {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = GetPluginData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.update`
   * @tags plugins
   * @name UpdatePlugin
   * @summary Update installed plug-in settings
   * @request PUT:/plugins/{plugin_uuid}
   * @secure
   */
  export namespace UpdatePlugin {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PluginUpdate;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.customers.read`
   * @tags plugins
   * @name InstallsCustomersList
   * @summary List this plug-in's installation on customers
   * @request GET:/plugins/{plugin_uuid}/installs/customers
   * @secure
   */
  export namespace InstallsCustomersList {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /**
       * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
       * @maxItems 25
       * @minItems 1
       * @uniqueItems true
       */
      uuids?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsCustomersListData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.customers.create`
   * @tags plugins
   * @name InstallsCustomersCreate
   * @summary Install (copy) this plug-in to a customer
   * @request POST:/plugins/{plugin_uuid}/installs/customers
   * @secure
   */
  export namespace InstallsCustomersCreate {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PluginInstallParamsCustomer;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsCustomersCreateData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.locations.read`
   * @tags plugins
   * @name InstallsLocationsList
   * @summary List this plug-in's installation on locations
   * @request GET:/plugins/{plugin_uuid}/installs/locations
   * @secure
   */
  export namespace InstallsLocationsList {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /**
       * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
       * @maxItems 25
       * @minItems 1
       * @uniqueItems true
       */
      uuids?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsLocationsListData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.locations.create`
   * @tags plugins
   * @name InstallsLocationsCreate
   * @summary Install (copy) this plug-in to a location
   * @request POST:/plugins/{plugin_uuid}/installs/locations
   * @secure
   */
  export namespace InstallsLocationsCreate {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PluginInstallParamsLocation;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsLocationsCreateData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.resellers.read`
   * @tags plugins
   * @name InstallsResellersList
   * @summary List this plug-in's installation on resellers
   * @request GET:/plugins/{plugin_uuid}/installs/resellers
   * @secure
   */
  export namespace InstallsResellersList {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /**
       * filter results by resource's unique identifiers (comma-separated list) to a maximum of 25 items
       * @maxItems 25
       * @minItems 1
       * @uniqueItems true
       */
      uuids?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsResellersListData;
  }

  /**
   * @description **Required ACL:** `confd.plugins.{plugin_uuid}.installs.resellers.create`
   * @tags plugins
   * @name InstallsResellersCreate
   * @summary Install (copy) this plug-in to a location
   * @request POST:/plugins/{plugin_uuid}/installs/resellers
   * @secure
   */
  export namespace InstallsResellersCreate {
    export type RequestParams = {
      /**
       * Plug-in's unique identifier
       * @format uuid
       */
      pluginUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PluginInstallParamsReseller;
    export type RequestHeaders = {
      /**
       * The tenant's UUID, defining the ownership of a given resource.
       * @format uuid
       */
      "Wazo-Tenant": string;
    };
    export type ResponseBody = InstallsResellersCreateData;
  }
}

export namespace Resellers {
  /**
   * @description **Required ACL:** `confd.resellers.read`
   * @tags resellers
   * @name ListResellers
   * @summary List resellers
   * @request GET:/resellers
   * @secure
   */
  export namespace ListResellers {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** The limit defines the number of individual objects that are returned */
      limit?: number;
      /** Comma-separated list of names to filter resellers by */
      name?: string;
      /**
       * The offset defines the offsets the start by the number specified
       * @default 0
       */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Comma-separated list of parent UUIDs to filter resellers by */
      parent_uuid?: string;
      /** Search term used to filter the result */
      search?: string;
      /** Comma-separated list of UUIDs to filter resellers by */
      uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListResellersData;
  }

  /**
   * @description **Required ACL:** `confd.resellers.create`
   * @tags resellers
   * @name CreateReseller
   * @summary Create reseller
   * @request POST:/resellers
   * @secure
   */
  export namespace CreateReseller {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Reseller;
    export type RequestHeaders = {};
    export type ResponseBody = CreateResellerData;
  }

  /**
   * @description **Required ACL:** `confd.resellers.{reseller_uuid}.delete`
   * @tags resellers
   * @name DeleteReseller
   * @summary Delete reseller
   * @request DELETE:/resellers/{reseller_uuid}
   * @secure
   */
  export namespace DeleteReseller {
    export type RequestParams = {
      /** The UUID of the reseller */
      resellerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.resellers.{reseller_uuid}.read`
   * @tags resellers
   * @name GetReseller
   * @summary Get reseller
   * @request GET:/resellers/{reseller_uuid}
   * @secure
   */
  export namespace GetReseller {
    export type RequestParams = {
      /** The UUID of the reseller */
      resellerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetResellerData;
  }

  /**
   * @description **Required ACL:** `confd.resellers.{reseller_uuid}.update`
   * @tags resellers
   * @name UpdateReseller
   * @summary Update reseller
   * @request PUT:/resellers/{reseller_uuid}
   * @secure
   */
  export namespace UpdateReseller {
    export type RequestParams = {
      /** The UUID of the reseller */
      resellerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Reseller;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Status {
  /**
   * @description This endpoint is not authenticated
   * @tags status
   * @name HeadStatus
   * @summary Check if nestbox-confd is OK
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

export namespace Tenants {
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
      /** The UUID of the tenant */
      tenantUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetTenantData;
  }
}

export namespace Users {
  /**
   * @description **Required ACL:** `confd.users.read`
   * @tags users
   * @name ListUsers
   * @summary List users
   * @request GET:/users
   * @secure
   */
  export namespace ListUsers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListUsersData;
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
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = CreateUserData;
  }

  /**
   * @description **Required ACL:** `confd.users.{user_uuid}.delete`
   * @tags users
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/users/{user_uuid}
   * @secure
   */
  export namespace DeleteUser {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `confd.users.{user_uuid}.read`
   * @tags users
   * @name GetUser
   * @summary Get user
   * @request GET:/users/{user_uuid}
   * @secure
   */
  export namespace GetUser {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUserData;
  }

  /**
   * @description **Required ACL:** `confd.users.{user_uuid}.update`
   * @tags users
   * @name UpdateUser
   * @summary Update user
   * @request PUT:/users/{user_uuid}
   * @secure
   */
  export namespace UpdateUser {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}
