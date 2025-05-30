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

/** @example {"Async":"True","Channel":"SIP/abcdef","Context":"default","Exten":"1234","Priority":"1","Variable":["Var1=one","Var2=two"]} */
export type ActionArguments = any;

export type ActionCreateData = Response;

export type ActionCreateError = Error;

export interface Command {
  command: string;
}

export type CommandCreateData = CommandResponse;

export type CommandCreateError = Error;

export interface CommandResponse {
  response?: string[];
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

export interface Error {
  details?: object;
  error_id?: string;
  message?: string;
  /** @format timestamp */
  timestamp?: number;
}

export type GetConfigData = any;

export type PatchConfigData = any;

export type PatchConfigPayload = ConfigPatchItem[];

export interface Response {
  /** Name of the action response */
  response?: string;
}

export type StatusListData = StatusSummary;

export interface StatusSummary {
  ami_socket?: ComponentWithStatus;
  bus_publisher?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
  service_token?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export namespace Action {
  /**
   * @description **Required ACL:** `amid.action.Command.create` This endpoint sends a command to the Asterisk Manager. See https://docs.asterisk.org/Latest_API/API_Documentation/AMI_Actions/ for more details about the AMI message parameters.
   * @tags command
   * @name CommandCreate
   * @summary AMI command
   * @request POST:/action/Command
   * @secure
   */
  export namespace CommandCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Command;
    export type RequestHeaders = {};
    export type ResponseBody = CommandCreateData;
  }

  /**
   * @description **Required ACL:** `amid.action.{action}.create` The Action endpoint sends an action to the Asterisk Manager. See https://docs.asterisk.org/Latest_API/API_Documentation/AMI_Actions/ for more details about the AMI message parameters.
   * @tags action
   * @name ActionCreate
   * @summary AMI action
   * @request POST:/action/{action}
   * @secure
   */
  export namespace ActionCreate {
    export type RequestParams = {
      /** Name of the manager action. Currently not supported: Queues, Command. */
      action: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ActionArguments;
    export type RequestHeaders = {};
    export type ResponseBody = ActionCreateData;
  }
}

export namespace Config {
  /**
   * @description **Required ACL:** `amid.config.read`
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
   * @description **Required ACL:** `amid.config.update` Changes are not persistent across service restart.
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

export namespace Status {
  /**
   * @description **Required ACL:** `amid.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-amid
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
