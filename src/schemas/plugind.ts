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
  /** Name of the resource */
  resource?: string;
  /**
   * Time when the error occured
   * @format timestamp
   */
  timestamp?: number;
}

export type GetConfigData = any;

export interface GetMarketResult {
  /** The number of plugins matching the given search */
  filtered?: number;
  /** A list of plugins */
  items?: MarketPluginList[];
  /** The number of plugins available on the market */
  total?: number;
}

export interface GetPluginsResult {
  /** A list of plugins */
  items?: PluginMetadata[];
  /** The number of plugins installed on the system */
  total?: number;
}

export type GetStatusData = StatusSummary;

export interface InstallResponse {
  /** A UUID associated to this plugin installation */
  uuid?: string;
}

export type MarketDetailData = MarketPluginList;

export type MarketListData = GetMarketResult;

export interface MarketListParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Filter installed plugins */
  installed?: boolean;
  /** Maximum number of items to return in the list */
  limit?: number;
  /** Search by name */
  name?: string;
  /** Search by namespace */
  namespace?: string;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Filter list of items, this search is applied to all fields and is not strict (eba matches Sébastien) */
  search?: string;
}

export interface MarketPluginList {
  /** The name of the plugin */
  name?: string;
  /** The namespace of the plugin */
  namespace?: string;
  /** Version specific information */
  versions?: VersionInfo[];
}

export interface PluginInstallParameters {
  /** The method used to fetch this plugin */
  method: "git";
  /** Method dependant installation options */
  options?: object;
}

export interface PluginMetadata {
  /** The name of the plugin */
  name?: string;
  /** The namespace of the plugin */
  namespace?: string;
  /** The version of the installed version */
  version?: string;
}

export type PluginsCreateData = InstallResponse;

export interface PluginsCreateParams {
  /** With this option the plugin will be reinstalled if it is already installed */
  reinstall?: boolean;
}

export type PluginsDeleteData = any;

export type PluginsDetailData = PluginMetadata;

export type PluginsListData = GetPluginsResult;

export interface StatusSummary {
  master_tenant?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export interface VersionInfo {
  /** The maximum Wazo version with which this plugin works */
  max_wazo_version?: string;
  /** The minimum Wazo version with which this plugin works */
  min_wazo_version?: string;
  /** An indication wether installing this version would be an upgrade on not. Unstalled plugins are marked as upgradable. */
  upgradable?: boolean;
  /** The plugin version */
  version?: string;
}

export namespace Config {
  /**
   * @description **Required ACL:** `plugind.config.read`
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

export namespace Market {
  /**
   * @description **Required ACL:** `plugind.market.read` Allow the administrator to get a list of available plugins
   * @tags plugin, market
   * @name MarketList
   * @summary List plugins available on the configured market
   * @request GET:/market
   * @secure
   */
  export namespace MarketList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Filter installed plugins */
      installed?: boolean;
      /** Maximum number of items to return in the list */
      limit?: number;
      /** Search by name */
      name?: string;
      /** Search by namespace */
      namespace?: string;
      /** Number of items to skip over in the list. Useful for pagination. */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Filter list of items, this search is applied to all fields and is not strict (eba matches Sébastien) */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MarketListData;
  }

  /**
   * @description **Required ACL:** `plugind.market.read` Allow the administrator to view a plugins information from the market. ---
   * @tags plugin, market
   * @name MarketDetail
   * @summary Fetch the information about a plugin from the market
   * @request GET:/market/{namespace}/{name}
   * @secure
   */
  export namespace MarketDetail {
    export type RequestParams = {
      /** The plugin's name */
      name: string;
      /** The plugin's namespace */
      namespace: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MarketDetailData;
  }
}

export namespace Plugins {
  /**
   * @description **Required ACL:** `plugind.plugins.read` Allow the administrator to get a list of all installed plugins
   * @tags plugin
   * @name PluginsList
   * @summary List installed plugins
   * @request GET:/plugins
   * @secure
   */
  export namespace PluginsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsListData;
  }

  /**
   * @description **Required ACL:** `plugind.plugins.create` Allow the administrator to install a plugin on the server.
   * @tags plugin
   * @name PluginsCreate
   * @summary Install a plugin
   * @request POST:/plugins
   * @secure
   */
  export namespace PluginsCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      /** With this option the plugin will be reinstalled if it is already installed */
      reinstall?: boolean;
    };
    export type RequestBody = PluginInstallParameters;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsCreateData;
  }

  /**
   * @description **Required ACL:** `plugind.plugins.{namespace}.{name}.delete` Allow the administrator to uninstall a plugin. ---
   * @tags plugin
   * @name PluginsDelete
   * @summary Uninstall a plugin
   * @request DELETE:/plugins/{namespace}/{name}
   * @secure
   */
  export namespace PluginsDelete {
    export type RequestParams = {
      /** The plugin's name */
      name: string;
      /** The plugin's namespace */
      namespace: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsDeleteData;
  }

  /**
   * @description **Required ACL:** `plugind.plugins.{namespace}.{name}.read` Allow the administrator to view a plugins metadata file. ---
   * @tags plugin
   * @name PluginsDetail
   * @summary Fetch the information about a plugin that has been installed
   * @request GET:/plugins/{namespace}/{name}
   * @secure
   */
  export namespace PluginsDetail {
    export type RequestParams = {
      /** The plugin's name */
      name: string;
      /** The plugin's namespace */
      namespace: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsDetailData;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `plugind.status.read`
   * @tags status
   * @name GetStatus
   * @summary Returns the current status of wazo-plugind
   * @request GET:/status
   * @secure
   */
  export namespace GetStatus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetStatusData;
  }
}
