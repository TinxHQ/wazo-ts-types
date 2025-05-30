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

export type CreateInstanceData = RestrictedInstance;

export type CreateProviderData = Provider;

export interface Credential {
  instance?: CredentialInstance;
  instance_tenant_uuid?: string;
  /** @format password */
  password: string;
  username: string;
  uuid?: string;
}

export interface CredentialInstance {
  installed?: boolean;
  name?: string;
  private_host?: string;
  private_port?: number;
  public_host?: string;
  public_port?: number;
  service_id?: number;
  uuid?: string;
}

export type CredentialsCreateData = any;

export type CredentialsDeleteData = any;

export type CredentialsDetailData = Credential;

export type CredentialsUpdateData = Credential;

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

export type GetConfigData = any;

export type HeadStatusData = any;

export type ImagesListData = ProviderResource;

export interface ImagesListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export interface Instance {
  /** Depends on the provider. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  config: Record<string, any>;
  /** @format date-time */
  created_at?: string;
  /** (write only): Deprecated. Please use `public_port`/`private_port` */
  https_port?: number;
  installed?: boolean;
  /** (write only): Deprecated. Please use `private_host` */
  interface_ip?: string;
  name: string;
  node_id?: string;
  /**
   * Write only. To retrieve information, use `root_credential_uuid` field
   * @format password
   */
  password: string;
  /**
   * Shows which connection should be used when connecting to this instance.
   *
   * When `public` is used the public_host should be used.
   * When `private` is used the private_host should be used.
   * When `any` is used either the `public_host` or the `private_host` should be used.
   * @default "public"
   */
  preferred_connection?: "private" | "public" | "any";
  private_host: string;
  private_port: number;
  provider_uuid?: string;
  public_host?: string;
  public_port?: number;
  /** (write only): Deprecated. Please use `public_host` */
  remote_host?: string;
  /** Used to retrieve root credential configured on the instance */
  root_credential_uuid?: string;
  /** What kind of service this instance will offer. Accepted values: 1 (engine), 2 (router). */
  service_id?: number;
  /** the current status of the instance (pending, creating, created, running, failed, etc.) */
  state?: string;
  /** More details about the current state. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  state_details?: object;
  tenant_uuid?: string;
  /** Write only. To retrieve information, use `root_credential_uuid` field */
  username?: string;
  uuid?: string;
}

/** InstanceItems */
export interface InstanceItems {
  filtered?: number;
  items?: Instance[];
  total?: number;
}

export type InstancesDeleteData = any;

export type InstancesDeleteResult = object;

export type InstancesDetailData = Instance;

export type InstancesListData = InstanceItems;

export interface InstancesListParams {
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
}

export type InstancesListResult = InstanceItems;

export type InstancesUpdateData = Instance;

export type KeypairsListData = ProviderResource;

export interface KeypairsListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export type LocationsListData = ProviderResource;

export interface LocationsListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export type NetworksListData = ProviderResource;

export interface NetworksListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export type PlatformsListData = ProviderPlatform;

export interface Provider {
  config: Record<string, any>;
  /** @format date-time */
  created_at?: string;
  name: string;
  platform: string;
  tenant_uuid?: string;
  uuid?: string;
}

/** ProviderItems */
export interface ProviderItems {
  filtered?: number;
  items?: Provider[];
  total?: number;
}

/** ProviderPlatform */
export interface ProviderPlatform {
  platforms?: object;
}

export interface ProviderResource {
  id?: string;
  name?: string;
}

/** ProviderResourceItems */
export interface ProviderResourceItems {
  items?: ProviderResource[];
}

export type ProvidersDeleteData = any;

export type ProvidersDetailData = Provider;

export type ProvidersListData = ProviderItems;

export interface ProvidersListParams {
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export type ProvidersUpdateData = Provider;

export type RegionsListData = ProviderResource;

export type RegisterInstanceData = Instance;

export interface RestrictedInstance {
  /** Depends on the provider. See the [README](https://github.com/TinxHQ/wazo-deployd/blob/master/README.md#platforms) for the details of the keys. */
  config: Record<string, any>;
  name: string;
}

export type SizesListData = ProviderResource;

export interface SizesListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export type SubnetsListData = ProviderResource;

export interface SubnetsListParams {
  /** Provider's UUID */
  providerUuid: string;
  /** Region's name */
  region: string;
}

export interface WazoInformations {
  configured?: boolean;
  uuid?: string;
  wazo_version?: string;
}

export type WazoListData = WazoInformations;

export namespace Config {
  /**
   * @description **Required ACL**: `deployd.config.read`
   * @tags config
   * @name GetConfig
   * @summary Show the current configuration
   * @request GET:/config
   */
  export namespace GetConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConfigData;
  }
}

export namespace Instances {
  /**
   * @description **Required ACL**: `deployd.instances.read`
   * @tags instances
   * @name InstancesList
   * @summary List all wazo instances for a given tenant
   * @request GET:/instances
   */
  export namespace InstancesList {
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
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesListData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.create`
   * @tags instances
   * @name RegisterInstance
   * @summary Register an already installed wazo instance
   * @request POST:/instances
   */
  export namespace RegisterInstance {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Instance;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RegisterInstanceData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.delete`
   * @tags instances
   * @name InstancesDelete
   * @summary Unregister an existing wazo instance (do not delete its VM)
   * @request DELETE:/instances/{instance_uuid}
   */
  export namespace InstancesDelete {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesDeleteData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.read`
   * @tags instances
   * @name InstancesDetail
   * @summary Get a single instance for a given tenant
   * @request GET:/instances/{instance_uuid}
   */
  export namespace InstancesDetail {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesDetailData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.update`
   * @tags instances
   * @name InstancesUpdate
   * @summary Update an existing wazo instance
   * @request PUT:/instances/{instance_uuid}
   */
  export namespace InstancesUpdate {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Instance;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesUpdateData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.create`
   * @tags instances, credentials
   * @name CredentialsCreate
   * @summary Register a credential for an instance
   * @request POST:/instances/{instance_uuid}/credentials
   */
  export namespace CredentialsCreate {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Credential;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CredentialsCreateData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.delete`
   * @tags instances, credentials
   * @name CredentialsDelete
   * @summary Remove a credential for an instance
   * @request DELETE:/instances/{instance_uuid}/credentials/{credential_uuid}
   */
  export namespace CredentialsDelete {
    export type RequestParams = {
      /** Credential's UUID */
      credentialUuid: string;
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CredentialsDeleteData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.get`
   * @tags instances, credentials
   * @name CredentialsDetail
   * @summary Get a credential for an instance
   * @request GET:/instances/{instance_uuid}/credentials/{credential_uuid}
   */
  export namespace CredentialsDetail {
    export type RequestParams = {
      /** Credential's UUID */
      credentialUuid: string;
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CredentialsDetailData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.credentials.{credential_uuid}.update`
   * @tags instances, credentials
   * @name CredentialsUpdate
   * @summary Update a credential for an instance
   * @request PUT:/instances/{instance_uuid}/credentials/{credential_uuid}
   */
  export namespace CredentialsUpdate {
    export type RequestParams = {
      /** Credential's UUID */
      credentialUuid: string;
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Credential;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CredentialsUpdateData;
  }

  /**
   * @description **Required ACL**: `deployd.instances.{instance_uuid}.wazo.read`
   * @tags instances
   * @name WazoList
   * @summary Get informations about a Wazo installed on given instance
   * @request GET:/instances/{instance_uuid}/wazo
   */
  export namespace WazoList {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = WazoListData;
  }
}

export namespace Providers {
  /**
   * @description **Required ACL**: `deployd.providers.read`
   * @tags providers
   * @name ProvidersList
   * @summary List all providers
   * @request GET:/providers
   */
  export namespace ProvidersList {
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
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProvidersListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.create`
   * @tags providers
   * @name CreateProvider
   * @summary Create a new provider for a given tenant
   * @request POST:/providers
   */
  export namespace CreateProvider {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Provider;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateProviderData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.platforms.read`
   * @tags providers
   * @name PlatformsList
   * @summary List all platforms available
   * @request GET:/providers/platforms
   */
  export namespace PlatformsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformsListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.delete`
   * @tags providers
   * @name ProvidersDelete
   * @summary Delete an existing provider
   * @request DELETE:/providers/{provider_uuid}
   */
  export namespace ProvidersDelete {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProvidersDeleteData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.read`
   * @tags providers
   * @name ProvidersDetail
   * @summary Get a single provider for a given tenant
   * @request GET:/providers/{provider_uuid}
   */
  export namespace ProvidersDetail {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProvidersDetailData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.update`
   * @tags providers
   * @name ProvidersUpdate
   * @summary Update an existing provider
   * @request PUT:/providers/{provider_uuid}
   */
  export namespace ProvidersUpdate {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Provider;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ProvidersUpdateData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.images.read`
   * @tags providers
   * @name ImagesList
   * @summary List all images available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/images
   */
  export namespace ImagesList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = ImagesListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.instances.read`
   * @tags instances
   * @name InstancesList
   * @summary List all wazo instances for a given tenant's provider
   * @request GET:/providers/{provider_uuid}/instances
   */
  export namespace InstancesList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesListResult;
  }

  /**
   * @description **Required ACL**: `deployd.providers.create`
   * @tags instances
   * @name CreateInstance
   * @summary Create a new wazo instance
   * @request POST:/providers/{provider_uuid}/instances
   */
  export namespace CreateInstance {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RestrictedInstance;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = CreateInstanceData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.instances.{instance_uuid}.delete`
   * @tags instances
   * @name InstancesDelete
   * @summary Delete an existing wazo instance and its VM
   * @request DELETE:/providers/{provider_uuid}/instances/{instance_uuid}
   */
  export namespace InstancesDelete {
    export type RequestParams = {
      /** Instance's UUID */
      instanceUuid: string;
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = InstancesDeleteResult;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.keypairs.read`
   * @tags providers
   * @name KeypairsList
   * @summary List all key pairs available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/keypairs
   */
  export namespace KeypairsList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = KeypairsListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.locations.read`
   * @tags providers
   * @name LocationsList
   * @summary List all locations available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/locations
   */
  export namespace LocationsList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LocationsListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.networks.read`
   * @tags providers
   * @name NetworksList
   * @summary List all networks available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/networks
   */
  export namespace NetworksList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = NetworksListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.regions.read`
   * @tags providers
   * @name RegionsList
   * @summary List all regions available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/regions
   */
  export namespace RegionsList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RegionsListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.sizes.read`
   * @tags providers
   * @name SizesList
   * @summary List all sizes available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/sizes
   */
  export namespace SizesList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SizesListData;
  }

  /**
   * @description **Required ACL**: `deployd.providers.{provider_uuid}.subnets.read`
   * @tags providers
   * @name SubnetsList
   * @summary List all subnets available in a provider for a given tenant
   * @request GET:/providers/{provider_uuid}/subnets
   */
  export namespace SubnetsList {
    export type RequestParams = {
      /** Provider's UUID */
      providerUuid: string;
    };
    export type RequestQuery = {
      /** Region's name */
      region: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** Tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = SubnetsListData;
  }
}

export namespace Status {
  /**
   * @description This endpoint is not authenticated
   * @tags status
   * @name HeadStatus
   * @summary Check if wazo-deployd is OK
   * @request HEAD:/status
   */
  export namespace HeadStatus {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HeadStatusData;
  }
}
