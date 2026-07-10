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

export type CapabilitiesObject = Record<string, Record<string, string>>;

export type CfgMgrListData = LinksObject;

export interface ComponentWithStatus {
  status?: StatusValue;
}

/**
 * A complete configuration
 * @example {"deletable":true,"id":"abcdef123456890","parent_ids":["base"],"raw_config":{"sip_lines":{"1":{"auth_username":"100","display_name":"Foo","password":"100","username":"100"}}}}
 */
export interface Config {
  deletable?: boolean;
  /** The unique configuration id */
  id?: string;
  parent_ids?: string[];
  raw_config?: RawConfigurationObject;
}

/** A configuration object */
export interface ConfigObject {
  /** A complete configuration */
  config?: Config;
}

export interface ConfigsListParams {
  /**
   * A list of fields, separated by comma.
   *
   * Example: `mac,ip`
   */
  fields?: string;
  /**
   * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
   *
   * Example: `{"ip":"10.34.1.110"}`
   */
  q?: string;
  /**
   * An integer specifing the number of entries to skip.
   *
   * Example: 10
   */
  skip?: number;
  /**
   * The key on which to sort the results.
   *
   * Example: `id`
   */
  sort?: string;
  /** The order of sort */
  sort_ord?: "ASC" | "DESC";
}

export interface ConfigsObject {
  configs?: Config[];
}

export type ConfigsRawListData = RawConfigurationObject;

export type ConfigureDetailData = Param;

export type ConfigureListData = GeneralConfigsObject;

export interface DHCPInfo {
  /** The IP address of the device */
  ip?: string;
  /** The MAC address of the device */
  mac?: string;
  /** The operation to perform */
  op?: "commit";
  options?: string[];
}

export interface DHCPInfoObject {
  dhcp_info?: DHCPInfo;
}

export type DevMgrListData = LinksObject;

/** A device schema */
export interface Device {
  /** Indicated how the device was added */
  added?: string;
  /** ID of the device configuration. Generally the same as the device ID, except when in autoprov */
  config?: string;
  configured?: boolean;
  description?: string;
  /** Device ID */
  id?: string;
  /** IP address (10.0.0.0) */
  ip?: string;
  /** Indicates if the device is a new device, ie in the master tenant */
  is_new?: boolean;
  /** MAC address (aa:bb:cc:dd:ee:ff) */
  mac?: string;
  /** Device model */
  model?: string;
  /** Provisioning plugin used by the device */
  plugin?: string;
  remote_state_sip_username?: string;
  /** The tenant UUID, defining the ownership of this device */
  tenant_uuid?: string;
  /** Vendor name */
  vendor?: string;
  /** Firmware version */
  version?: string;
}

/** A device object */
export interface DeviceObject {
  /** A device schema */
  device?: Device;
}

/** A list of devices */
export interface DevicesList {
  devices?: Device[];
}

export interface DevicesListParams {
  /**
   * A list of fields, separated by comma.
   *
   * Example: `mac,ip`
   */
  fields?: string;
  /**
   * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
   *
   * Example: `{"ip":"10.34.1.110"}`
   */
  q?: string;
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /**
   * An integer specifing the number of entries to skip.
   *
   * Example: 10
   */
  skip?: number;
  /**
   * The key on which to sort the results.
   *
   * Example: `id`
   */
  sort?: string;
  /** The order of sort */
  sort_ord?: "ASC" | "DESC";
}

/** Empty body */
export type EmptyObject = any;

/** Error message response */
export type ErrorMessage = string;

/**
 * FTP proxy configuration
 * @example {"param":{"value":"http://root:secret@example.com:8082"}}
 */
export interface FtpProxy {
  /** The proxy for FTP requests. Format is `http://[user:password@]host:port` */
  param?: string;
}

export interface GeneralConfigObject {
  description?: string;
  id?: string;
  /** Links object */
  links?: LinksObject;
  value?: string;
}

export interface GeneralConfigsObject {
  params?: GeneralConfigObject[];
}

export type GetRootData = LinksObject;

/**
 * HTTP proxy configuration
 * @example {"param":{"value":"http://root:secret@example.com:8080"}}
 */
export interface HttpProxy {
  /** The proxy for HTTP requests. Format is `http://[user:password@]host:port` */
  param?: string;
}

/**
 * HTTPS proxy configuration
 * @example {"param":{"value":"example.com:8081"}}
 */
export interface HttpsProxy {
  /** The proxy for HTTPS requests. Format is `host:port` */
  param?: string;
}

/** @example {"id":"abcdef1234567890"} */
export interface IdObject {
  id?: string;
}

export type InstallInstallDetailData = OperationInProgressObject;

export type InstallInstallableListData = PackageList;

export type InstallInstalledListData = PackageList;

export type InstallListData = LinksObject;

export type InstallUpdateDetailData = OperationInProgressObject;

export type InstallUpgradeDetailData = OperationInProgressObject;

/** Link Object */
export interface LinkObject {
  /** Location of the resource */
  href?: string;
  /** Relation to the resource */
  rel?: string;
}

/** Links object */
export interface LinksObject {
  /** Links to different resources */
  links?: LinkObject[];
}

/**
 * Locale configuration
 * @example {"param":{"value":"en_US"}}
 */
export interface Locale {
  /** The current locale. For example: `en_US` */
  param?: string;
}

/**
 * NAT configuration
 * @example {"param":{"value":"1"}}
 */
export interface Nat {
  /** Set to `1` if all the devices are behind a NAT */
  param?: string;
}

export interface OperationInProgressObject {
  /**
   * The ``status`` field describes the current status of the operation. The format is
   * ``[label|]state[;current[/end]](\(sub_oips\))*``. Here are some examples:
   *
   * * progress
   * * download|progress
   * * download|progress;10
   * * download|progress;10/100
   * * download|progress(file_1|progress;20/100)(file_2|waiting;0/50)
   * * download|progress;20/150(file_1|progress)(file_2|waiting)
   * * op|progress(op1|progress(op11|progress)(op12|waiting))(op2|progress)
   *
   * The state of an operation is either ``waiting``, ``progress``, ``success`` or ``fail``.
   */
  status?: string;
}

export interface Package {
  sha1sum?: string;
  capabilities?: CapabilitiesObject;
  description?: string;
  dsize?: number;
  version?: string;
}

export interface PackageList {
  pkgs?: PackageObject;
}

export type PackageObject = Record<string, Package>;

/**
 * A configuration parameter
 * @example {"param":{"value":"http://provd.wazo.community/plugins/2/stable"}}
 */
export interface Param {
  param?: ParamObject;
}

export interface ParamObject {
  value?: string;
}

export type PgMgrListData = LinksObject;

export interface PluginInfo {
  plugin_info?: PluginInfoObject;
}

export interface PluginInfoObject {
  capabilities?: CapabilitiesObject;
  description?: string;
  version?: string;
}

/**
 * Plugin server configuration
 * @example {"param":{"value":"http://provd.wazo.community/plugins/2/stable/"}}
 */
export interface PluginServer {
  /** The plugins repository URL */
  param?: string;
}

export type Plugins = Record<string, LinksObject>;

export type PluginsDetailData = LinksObject;

export type PluginsInfoListData = PluginInfo;

export type PluginsInstallInstallDetailData = OperationInProgressObject;

export type PluginsInstallInstallableListData = PackageList;

export type PluginsInstallInstalledListData = PackageList;

export type PluginsInstallListData = LinksObject;

export type PluginsInstallUpgradeDetailData = OperationInProgressObject;

export type PluginsListData = PluginsObject;

export interface PluginsObject {
  plugins?: Plugins;
}

/**
 * Provisioning Key configuration
 * @example {"param":{"value":"a1b2c3d4e5f6g7h8"}}
 */
export interface ProvisioningKey {
  /** Provisioning key used to authenticate request to fetch provisioning configuration file */
  param?: string;
}

/** @example {"raw_config":{"sip_lines":{"1":{"auth_username":"100","display_name":"Foo","password":"100","username":"100"}}}} */
export interface RawConfigurationObject {
  raw_config?: object;
}

export type StatusListData = StatusSummary;

export interface StatusSummary {
  rest_api?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export type SynchronizeCreateData = any;

export type SynchronizeDetailData = OperationInProgressObject;

export namespace CfgMgr {
  /**
   * @description **Required ACL:** `provd.cfg_mgr.read` The configuration manager resource represents the entry point to the wazo-provd configuration REST API
   * @tags configs
   * @name CfgMgrList
   * @summary Get the Config Manager resource
   * @request GET:/cfg_mgr
   * @secure
   */
  export namespace CfgMgrList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CfgMgrListData;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.autocreate.create` Create a new config based on the config that has the autocreate role
   * @tags configs
   * @name AutocreateCreate
   * @summary Create an autocreate configuration
   * @request POST:/cfg_mgr/autocreate
   * @secure
   */
  export namespace AutocreateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EmptyObject;
    export type RequestHeaders = {};
    export type ResponseBody = IdObject;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.read`
   * @tags configs
   * @name ConfigsList
   * @summary List and find configurations
   * @request GET:/cfg_mgr/configs
   * @secure
   */
  export namespace ConfigsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * A list of fields, separated by comma.
       *
       * Example: `mac,ip`
       */
      fields?: string;
      /**
       * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
       *
       * Example: `{"ip":"10.34.1.110"}`
       */
      q?: string;
      /**
       * An integer specifing the number of entries to skip.
       *
       * Example: 10
       */
      skip?: number;
      /**
       * The key on which to sort the results.
       *
       * Example: `id`
       */
      sort?: string;
      /** The order of sort */
      sort_ord?: "ASC" | "DESC";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfigsObject;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.create`
   * @tags configs
   * @name ConfigsCreate
   * @summary Create a configuration
   * @request POST:/cfg_mgr/configs
   * @secure
   */
  export namespace ConfigsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfigObject;
    export type RequestHeaders = {};
    export type ResponseBody = IdObject;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.delete`
   * @tags configs
   * @name ConfigsDelete
   * @summary Delete a configuration
   * @request DELETE:/cfg_mgr/configs/{config_id}
   * @secure
   */
  export namespace ConfigsDelete {
    export type RequestParams = {
      /** Configuration ID */
      configId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.read`
   * @tags configs
   * @name ConfigsDetail
   * @summary Get a configuration
   * @request GET:/cfg_mgr/configs/{config_id}
   * @secure
   */
  export namespace ConfigsDetail {
    export type RequestParams = {
      /** Configuration ID */
      configId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfigObject;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.update`
   * @tags configs
   * @name ConfigsUpdate
   * @summary Update a configuration
   * @request PUT:/cfg_mgr/configs/{config_id}
   * @secure
   */
  export namespace ConfigsUpdate {
    export type RequestParams = {
      /** Configuration ID */
      configId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ConfigObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.cfg_mgr.configs.{config_id}.raw.read`
   * @tags configs
   * @name ConfigsRawList
   * @summary Get a raw configuration
   * @request GET:/cfg_mgr/configs/{config_id}/raw
   * @secure
   */
  export namespace ConfigsRawList {
    export type RequestParams = {
      /** Configuration ID */
      configId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfigsRawListData;
  }
}

export namespace Configure {
  /**
   * @description **Required ACL:** `provd.configure.read`
   * @tags provd
   * @name ConfigureList
   * @summary Get the general provd configuration
   * @request GET:/configure
   * @secure
   */
  export namespace ConfigureList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConfigureListData;
  }

  /**
   * @description **Required ACL:** `provd.configure.nat.update`
   * @tags provd
   * @name PutConfigure
   * @summary Update the configuration's NAT
   * @request PUT:/configure/NAT
   * @secure
   */
  export namespace PutConfigure {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Nat;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.ftp_proxy.update`
   * @tags provd
   * @name FtpProxyUpdate
   * @summary Update the configuration's ftp_proxy
   * @request PUT:/configure/ftp_proxy
   * @secure
   */
  export namespace FtpProxyUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FtpProxy;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.http_proxy.update`
   * @tags provd
   * @name HttpProxyUpdate
   * @summary Update the configuration's http_proxy
   * @request PUT:/configure/http_proxy
   * @secure
   */
  export namespace HttpProxyUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HttpProxy;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.https_proxy.update`
   * @tags provd
   * @name HttpsProxyUpdate
   * @summary Update the configuration's https_proxy
   * @request PUT:/configure/https_proxy
   * @secure
   */
  export namespace HttpsProxyUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HttpsProxy;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.locale.update`
   * @tags provd
   * @name LocaleUpdate
   * @summary Update the configuration's locale
   * @request PUT:/configure/locale
   * @secure
   */
  export namespace LocaleUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Locale;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.plugin_server.update`
   * @tags provd
   * @name PluginServerUpdate
   * @summary Update the configuration's plugin_server
   * @request PUT:/configure/plugin_server
   * @secure
   */
  export namespace PluginServerUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PluginServer;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.configure.{tenant_uuid}.provisioning_key.update`
   * @tags provd
   * @name ProvisioningKeyUpdate
   * @summary Update the tenant provisioning key
   * @request PUT:/configure/provisioning_key
   * @secure
   */
  export namespace ProvisioningKeyUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProvisioningKey;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description '**Required ACL:** `provd.configure.{param_id}.read`' Wazo-Tenant header is only valid for `provisioning_key`
   * @tags provd
   * @name ConfigureDetail
   * @summary Get the configuration parameter value
   * @request GET:/configure/{param_id}
   * @secure
   */
  export namespace ConfigureDetail {
    export type RequestParams = {
      /** Configuration parameter ID */
      paramId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ConfigureDetailData;
  }

  /**
   * @description **Required ACL:** `provd.configure.{param_id}.update`
   * @tags provd
   * @name ConfigureUpdate
   * @summary Set the value of a parameter
   * @request PUT:/configure/{param_id}
   * @secure
   */
  export namespace ConfigureUpdate {
    export type RequestParams = {
      /** Configuration parameter ID */
      paramId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Param;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace DevMgr {
  /**
   * @description **Required ACL:** `provd.dev_mgr.read` The device manager resource represents the entry point to the wazo-provd device REST API
   * @tags devices
   * @name DevMgrList
   * @summary Get the Device Manager resource
   * @request GET:/dev_mgr
   * @secure
   */
  export namespace DevMgrList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DevMgrListData;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.devices.read`
   * @tags devices
   * @name DevicesList
   * @summary List and find devices
   * @request GET:/dev_mgr/devices
   * @secure
   */
  export namespace DevicesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * A list of fields, separated by comma.
       *
       * Example: `mac,ip`
       */
      fields?: string;
      /**
       * A selector, encoded in JSON, describing which entries should be returned. All entries are returned if not specified.
       *
       * Example: `{"ip":"10.34.1.110"}`
       */
      q?: string;
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /**
       * An integer specifing the number of entries to skip.
       *
       * Example: 10
       */
      skip?: number;
      /**
       * The key on which to sort the results.
       *
       * Example: `id`
       */
      sort?: string;
      /** The order of sort */
      sort_ord?: "ASC" | "DESC";
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DevicesList;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.devices.create`
   * @tags devices
   * @name DevicesCreate
   * @summary Create a device
   * @request POST:/dev_mgr/devices
   * @secure
   */
  export namespace DevicesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DeviceObject;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = IdObject;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.delete`
   * @tags devices
   * @name DevicesDelete
   * @summary Delete a device
   * @request DELETE:/dev_mgr/devices/{device_id}
   * @secure
   */
  export namespace DevicesDelete {
    export type RequestParams = {
      /** Device ID */
      deviceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.read` Get a device using its ID
   * @tags devices
   * @name DevicesDetail
   * @summary Get a device by ID
   * @request GET:/dev_mgr/devices/{device_id}
   * @secure
   */
  export namespace DevicesDetail {
    export type RequestParams = {
      /** Device ID */
      deviceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = DeviceObject;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.devices.{device_id}.update` Every field must be specified, otherwise they will be omitted
   * @tags devices
   * @name DevicesUpdate
   * @summary Update a device
   * @request PUT:/dev_mgr/devices/{device_id}
   * @secure
   */
  export namespace DevicesUpdate {
    export type RequestParams = {
      /** Device ID */
      deviceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DeviceObject;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.dhcpinfo.create` The provisioning server either creates a new device or changes the information of the device with the same MAC address
   * @tags devices
   * @name DhcpinfoCreate
   * @summary Push DHCP request information
   * @request POST:/dev_mgr/dhcpinfo
   * @secure
   */
  export namespace DhcpinfoCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DHCPInfoObject;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.reconfigure.create` Regenerate the configuration file for the specified device
   * @tags devices
   * @name ReconfigureCreate
   * @summary Reconfigure a device
   * @request POST:/dev_mgr/reconfigure
   * @secure
   */
  export namespace ReconfigureCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.dev_mgr.synchronize.create`
   * @tags devices
   * @name SynchronizeCreate
   * @summary Synchronize a device
   * @request POST:/dev_mgr/synchronize
   * @secure
   */
  export namespace SynchronizeCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SynchronizeCreateData;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags devices
   * @name SynchronizeDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/dev_mgr/synchronize/{operation_id}
   * @secure
   */
  export namespace SynchronizeDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags devices
   * @name SynchronizeDetail
   * @summary Get the status of a synchronize Operation In Progress
   * @request GET:/dev_mgr/synchronize/{operation_id}
   * @secure
   */
  export namespace SynchronizeDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SynchronizeDetailData;
  }
}

export namespace PgMgr {
  /**
   * @description **Required ACL:** `provd.pg_mgr.read` The plugin manager resource represents the entry point to the wazo-provd plugin REST API
   * @tags plugins
   * @name PgMgrList
   * @summary Get the Plugin Manager resource
   * @request GET:/pg_mgr
   * @secure
   */
  export namespace PgMgrList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PgMgrListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.read`
   * @tags plugins
   * @name InstallList
   * @summary Get the installation service resources
   * @request GET:/pg_mgr/install
   * @secure
   */
  export namespace InstallList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.install.create`
   * @tags plugins
   * @name InstallInstallCreate
   * @summary Install a plugin
   * @request POST:/pg_mgr/install/install
   * @secure
   */
  export namespace InstallInstallCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags plugins
   * @name InstallInstallDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/pg_mgr/install/install/{operation_id}
   * @secure
   */
  export namespace InstallInstallDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags plugins
   * @name InstallInstallDetail
   * @summary Get the status of a plugin installation Operation In Progress
   * @request GET:/pg_mgr/install/install/{operation_id}
   * @secure
   */
  export namespace InstallInstallDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallInstallDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.installable.read`
   * @tags plugins
   * @name InstallInstallableList
   * @summary Get the installable plugins list
   * @request GET:/pg_mgr/install/installable
   * @secure
   */
  export namespace InstallInstallableList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallInstallableListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.installed.read`
   * @tags plugins
   * @name InstallInstalledList
   * @summary Get the installed plugins list
   * @request GET:/pg_mgr/install/installed
   * @secure
   */
  export namespace InstallInstalledList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallInstalledListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.uninstall.create`
   * @tags plugins
   * @name InstallUninstallCreate
   * @summary Uninstall a plugin
   * @request POST:/pg_mgr/install/uninstall
   * @secure
   */
  export namespace InstallUninstallCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.update.create`
   * @tags plugins
   * @name InstallUpdateCreate
   * @summary Update the List of installable plugins
   * @request POST:/pg_mgr/install/update
   * @secure
   */
  export namespace InstallUpdateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EmptyObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags plugins
   * @name InstallUpdateDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/pg_mgr/install/update/{operation_id}
   * @secure
   */
  export namespace InstallUpdateDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags plugins
   * @name InstallUpdateDetail
   * @summary Get the status of a plugin database update Operation In Progress
   * @request GET:/pg_mgr/install/update/{operation_id}
   * @secure
   */
  export namespace InstallUpdateDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallUpdateDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.install.upgrade.create`
   * @tags plugins
   * @name InstallUpgradeCreate
   * @summary Upgrade a plugin
   * @request POST:/pg_mgr/install/upgrade
   * @secure
   */
  export namespace InstallUpgradeCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags plugins
   * @name InstallUpgradeDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/pg_mgr/install/upgrade/{operation_id}
   * @secure
   */
  export namespace InstallUpgradeDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags plugins
   * @name InstallUpgradeDetail
   * @summary Get the status of a plugin upgrade Operation In Progress
   * @request GET:/pg_mgr/install/upgrade/{operation_id}
   * @secure
   */
  export namespace InstallUpgradeDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InstallUpgradeDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.read`
   * @tags plugins
   * @name PluginsList
   * @summary List the installed plugins
   * @request GET:/pg_mgr/plugins
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
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.read`
   * @tags plugins
   * @name PluginsDetail
   * @summary Get the resources of a specific plugin
   * @request GET:/pg_mgr/plugins/{plugin_id}
   * @secure
   */
  export namespace PluginsDetail {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.info.read`
   * @tags plugins
   * @name PluginsInfoList
   * @summary Get the information of a plugin
   * @request GET:/pg_mgr/plugins/{plugin_id}/info
   * @secure
   */
  export namespace PluginsInfoList {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInfoListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.read`
   * @tags plugins
   * @name PluginsInstallList
   * @summary Get the package installation service resources
   * @request GET:/pg_mgr/plugins/{plugin_id}/install
   * @secure
   */
  export namespace PluginsInstallList {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInstallListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.install.create`
   * @tags plugins
   * @name PluginsInstallInstallCreate
   * @summary Install a package
   * @request POST:/pg_mgr/plugins/{plugin_id}/install/install
   * @secure
   */
  export namespace PluginsInstallInstallCreate {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags plugins
   * @name PluginsInstallInstallDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/pg_mgr/plugins/{plugin_id}/install/install/{operation_id}
   * @secure
   */
  export namespace PluginsInstallInstallDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags plugins
   * @name PluginsInstallInstallDetail
   * @summary Get the status of a package installation Operation In Progress
   * @request GET:/pg_mgr/plugins/{plugin_id}/install/install/{operation_id}
   * @secure
   */
  export namespace PluginsInstallInstallDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInstallInstallDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.installable.read`
   * @tags plugins
   * @name PluginsInstallInstallableList
   * @summary Get the installable packages list
   * @request GET:/pg_mgr/plugins/{plugin_id}/install/installable
   * @secure
   */
  export namespace PluginsInstallInstallableList {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInstallInstallableListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.installed.read`
   * @tags plugins
   * @name PluginsInstallInstalledList
   * @summary Get the installed packages list
   * @request GET:/pg_mgr/plugins/{plugin_id}/install/installed
   * @secure
   */
  export namespace PluginsInstallInstalledList {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInstallInstalledListData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.plugins.{plugin_id}.install.uninstall.create`
   * @tags plugins
   * @name PluginsInstallUninstallCreate
   * @summary Uninstall a package
   * @request POST:/pg_mgr/plugins/{plugin_id}/install/uninstall
   * @secure
   */
  export namespace PluginsInstallUninstallCreate {
    export type RequestParams = {
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.delete` This does not cancel the underlying operation; it only deletes the monitor Every monitor that is created should be deleted, else they won't be freed by the process and they will accumulate, taking memory
   * @tags plugins
   * @name PluginsInstallUpgradeDelete
   * @summary Delete the Operation In Progress
   * @request DELETE:/pg_mgr/plugins/{plugin_id}/install/upgrade/{operation_id}
   * @secure
   */
  export namespace PluginsInstallUpgradeDelete {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description **Required ACL:** `provd.operation.read`
   * @tags plugins
   * @name PluginsInstallUpgradeDetail
   * @summary Get the status of a package upgrade Operation In Progress
   * @request GET:/pg_mgr/plugins/{plugin_id}/install/upgrade/{operation_id}
   * @secure
   */
  export namespace PluginsInstallUpgradeDetail {
    export type RequestParams = {
      /** Operation In Progress ID */
      operationId: string;
      /** Plugin ID */
      pluginId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PluginsInstallUpgradeDetailData;
  }

  /**
   * @description **Required ACL:** `provd.pg_mgr.reload.create` This is mostly useful during plugin development, after changing the code of the plugin, instead of restarting the wazo-provd application
   * @tags plugins
   * @name ReloadCreate
   * @summary Reload a plugin
   * @request POST:/pg_mgr/reload
   * @secure
   */
  export namespace ReloadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = IdObject;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `provd.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-provd
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
