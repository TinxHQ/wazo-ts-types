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

export type CreateData = any;

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

export interface SetupRequest {
  /**
   * The UUID identifying this instance on Nestbox.
   *
   * The engine_instance_uuid should only be specified if the instance has already been registered on the specified Nestbox. Omitting this field for an instance that is already registered will create a duplicate entry on the Nestbox.
   */
  engine_instance_uuid?: string;
  /** IP address of the engine */
  engine_internal_address?: string;
  /** The interface language for the Wazo Engine (either `en_US` or `fr_FR`) */
  engine_language: string;
  /** Whether the GNU GPLv3 license is accepted */
  engine_license: boolean;
  /** Password of the first administrator ``root`` on the engine */
  engine_password: string;
  /**
   * Enable ICE support. This is required for WebRTC.
   *
   * A STUN server must be defined in the `engine_rtp_stunaddr` field when using `engine_rtp_icesupport=true`.
   * @default false
   */
  engine_rtp_icesupport?: boolean;
  /**
   * The address of the STUN server to use for WebRTC
   * @default "null"
   */
  engine_rtp_stunaddr?: string;
  /** Host used by Nestbox to contact the engine */
  nestbox_engine_host?: string;
  /**
   * Port used by Nestbox to contact the engine
   * @default 443
   */
  nestbox_engine_port?: number;
  /** Host of the Nestbox where the engine will register. Specifying this key will make nestbox and `engine_internal_address` keys mandatory. Wazo will be connected to the specified Nestbox instance. */
  nestbox_host?: string;
  /** Name of the engine in Nestbox */
  nestbox_instance_name?: string;
  /**
   * Preferred connection method to contact the engine
   * @default "public"
   */
  nestbox_instance_preferred_connection?: "private" | "public";
  /**
   * Port of the Nestbox where the engine will register
   * @default 443
   */
  nestbox_port?: number;
  /** Nestbox username used to register the engine */
  nestbox_service_id?: string;
  /** Nestbox password used to register the engine */
  nestbox_service_key?: string;
  /**
   * Should the certificate used for HTTPS be verified? The setup will abort if the certificate fails the verification.
   * @default true
   */
  nestbox_verify_certificate?: boolean;
}

export type StatusListData = StatusSummary;

export interface StatusSummary {
  master_tenant?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export namespace Config {
  /**
   * @description **Required ACL:** `setupd.config.read`
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

export namespace Setup {
  /**
   * No description
   * @tags setup
   * @name Create
   * @summary Setup the Wazo Engine
   * @request POST:/setup
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetupRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateData;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `setupd.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-setupd
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
