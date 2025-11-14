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

export type AddAgentByIdData = any;

export type AddAgentByIdError = Error;

/** Pause reason information */
export interface AgentPauseReason {
  /** Pause Reason */
  reason?: string;
}

export interface AgentQueueStatus {
  /** Queue's display name */
  display_name?: string;
  /** Queue's ID */
  id?: number;
  /** True if the agent is logged on this queue, else false */
  logged?: boolean;
  /** Queue's name */
  name?: string;
  /** True if the agent is paused on this queue, else false */
  paused?: boolean;
  /** The reason of the agent pause */
  paused_reason?: string;
}

/** Agent status */
export interface AgentStatus {
  /** The context on which the agent is logged, or null if the agent is not logged */
  context?: string;
  /** The extension on which the agent is logged, or null if the agent is not logged */
  extension?: string;
  /**
   * Agent's ID
   * @format int32
   */
  id?: number;
  /** True if the agent is logged, else false */
  logged?: boolean;
  /** Agent's number */
  number?: string;
  /**
   * Wazo's UUID
   * @format uuid
   */
  origin_uuid?: string;
  /** True if the agent is paused, else false */
  paused?: boolean;
  /** The reason of the agent pause */
  paused_reason?: string;
  /** The agent status for each queue */
  queues?: AgentQueueStatus[];
  /** The interface (e.g. SIP/alice) to determine if the agent is in use or not */
  state_interface?: string;
  /**
   * Tenant's UUID
   * @format uuid
   */
  tenant_uuid?: string;
}

export interface ComponentWithStatus {
  status?: StatusValue;
}

/** Error */
export interface Error {
  /** Error identifier */
  error?: string;
}

export type GetAgentByIdData = AgentStatus;

export type GetAgentByIdError = Error;

export type GetAgentByNumberData = AgentStatus;

export type GetAgentByNumberError = Error;

export type GetAgentsData = AgentStatus;

export interface GetAgentsParams {
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
}

export type GetStatusData = StatusSummary;

export type GetUserAgentData = AgentStatus;

export type GetUserAgentError = Error;

export type LoginAgentByIdData = any;

export type LoginAgentByIdError = Error;

export type LoginAgentByNumberData = any;

export type LoginAgentByNumberError = Error;

/** Login information */
export interface LoginInfo {
  /** Context */
  context?: string;
  /** Extension */
  extension?: string;
}

export type LoginUserAgentData = any;

export type LoginUserAgentError = Error;

export type LogoffAgentByIdData = any;

export type LogoffAgentByIdError = Error;

export type LogoffAgentByNumberData = any;

export type LogoffAgentByNumberError = Error;

export type LogoffAgentsData = any;

export type LogoffUserAgentData = any;

export type LogoffUserAgentError = Error;

export type PauseAgentByNumberData = any;

export type PauseAgentByNumberError = Error;

export type PauseUserAgentData = any;

export type PauseUserAgentError = Error;

/** Queue */
export interface Queue {
  /** Queue's ID */
  queue_id?: number;
}

export type RelogAgentsData = any;

export type RemoveAgentByIdData = any;

export type RemoveAgentByIdError = Error;

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  service_token?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export type UnpauseAgentByNumberData = any;

export type UnpauseAgentByNumberError = Error;

export type UnpauseUserAgentData = any;

export type UnpauseUserAgentError = Error;

/** Login information */
export interface UserAgentLoginInfo {
  /** ID of the line where the agent should be logged */
  line_id?: number;
}

export namespace Agents {
  /**
   * @description **Required ACL:** `agentd.agents.read`
   * @tags agents
   * @name GetAgents
   * @summary Get the status of all agents.
   * @request GET:/agents
   * @secure
   */
  export namespace GetAgents {
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
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetAgentsData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.read`
   * @tags agent
   * @name GetAgentById
   * @summary Get agent status.
   * @request GET:/agents/by-id/{agent_id}
   * @secure
   */
  export namespace GetAgentById {
    export type RequestParams = {
      /** Agent's ID */
      agentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetAgentByIdData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.add.create`
   * @tags agent
   * @name AddAgentById
   * @summary Add agent to a queue.
   * @request POST:/agents/by-id/{agent_id}/add
   * @secure
   */
  export namespace AddAgentById {
    export type RequestParams = {
      /** Agent's ID */
      agentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = Queue;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = AddAgentByIdData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.login.create`
   * @tags agent
   * @name LoginAgentById
   * @summary Log an agent.
   * @request POST:/agents/by-id/{agent_id}/login
   * @secure
   */
  export namespace LoginAgentById {
    export type RequestParams = {
      /** Agent's ID */
      agentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = LoginInfo;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LoginAgentByIdData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.logoff.create`
   * @tags agent
   * @name LogoffAgentById
   * @summary Logoff an agent.
   * @request POST:/agents/by-id/{agent_id}/logoff
   * @secure
   */
  export namespace LogoffAgentById {
    export type RequestParams = {
      /** Agent's ID */
      agentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LogoffAgentByIdData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-id.{agent_id}.remove.create`
   * @tags agent
   * @name RemoveAgentById
   * @summary Remove agent from a queue.
   * @request POST:/agents/by-id/{agent_id}/remove
   * @secure
   */
  export namespace RemoveAgentById {
    export type RequestParams = {
      /** Agent's ID */
      agentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = Queue;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RemoveAgentByIdData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.read`
   * @tags agent
   * @name GetAgentByNumber
   * @summary Get agent status.
   * @request GET:/agents/by-number/{agent_number}
   * @secure
   */
  export namespace GetAgentByNumber {
    export type RequestParams = {
      /** Agent's number */
      agentNumber: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetAgentByNumberData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.login.create`
   * @tags agent
   * @name LoginAgentByNumber
   * @summary Log an agent.
   * @request POST:/agents/by-number/{agent_number}/login
   * @secure
   */
  export namespace LoginAgentByNumber {
    export type RequestParams = {
      /** Agent's number */
      agentNumber: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LoginInfo;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LoginAgentByNumberData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.logoff.create`
   * @tags agent
   * @name LogoffAgentByNumber
   * @summary Logoff an agent.
   * @request POST:/agents/by-number/{agent_number}/logoff
   * @secure
   */
  export namespace LogoffAgentByNumber {
    export type RequestParams = {
      /** Agent's number */
      agentNumber: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LogoffAgentByNumberData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.pause.create`
   * @tags agent
   * @name PauseAgentByNumber
   * @summary Pause an agent.
   * @request POST:/agents/by-number/{agent_number}/pause
   * @secure
   */
  export namespace PauseAgentByNumber {
    export type RequestParams = {
      /** Agent's number */
      agentNumber: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AgentPauseReason;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PauseAgentByNumberData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.by-number.{agent_number}.unpause.create`
   * @tags agent
   * @name UnpauseAgentByNumber
   * @summary Unpause an agent.
   * @request POST:/agents/by-number/{agent_number}/unpause
   * @secure
   */
  export namespace UnpauseAgentByNumber {
    export type RequestParams = {
      /** Agent's number */
      agentNumber: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UnpauseAgentByNumberData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.logoff.create`
   * @tags agents
   * @name LogoffAgents
   * @summary Logoff all agents.
   * @request POST:/agents/logoff
   * @secure
   */
  export namespace LogoffAgents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LogoffAgentsData;
  }

  /**
   * @description **Required ACL:** `agentd.agents.relog.create` Relog all agents which are currently logged.
   * @tags agents
   * @name RelogAgents
   * @summary Relog all agents.
   * @request POST:/agents/relog
   * @secure
   */
  export namespace RelogAgents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = RelogAgentsData;
  }
}

export namespace Status {
  /**
   * @description **Required ACL:** `agentd.status.read`
   * @tags status
   * @name GetStatus
   * @summary Get the status of wazo-agentd.
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

export namespace Users {
  /**
   * @description **Required ACL:** `agentd.users.me.agents.read`
   * @tags agent, user
   * @name GetUserAgent
   * @summary Get agent status of the user holding the authentication token.
   * @request GET:/users/me/agents
   * @secure
   */
  export namespace GetUserAgent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = GetUserAgentData;
  }

  /**
   * @description **Required ACL:** `agentd.users.me.agents.login.create`
   * @tags agent, user
   * @name LoginUserAgent
   * @summary Log the agent of the user holding the authentication token
   * @request POST:/users/me/agents/login
   * @secure
   */
  export namespace LoginUserAgent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserAgentLoginInfo;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LoginUserAgentData;
  }

  /**
   * @description **Required ACL:** `agentd.users.me.agents.logoff.create`
   * @tags agent, user
   * @name LogoffUserAgent
   * @summary Logoff the agent of the user holding the authentication token
   * @request POST:/users/me/agents/logoff
   * @secure
   */
  export namespace LogoffUserAgent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = LogoffUserAgentData;
  }

  /**
   * @description **Required ACL:** `agentd.users.me.agents.pause.create`
   * @tags agent, user
   * @name PauseUserAgent
   * @summary Pause the agent of the user holding the authentication token
   * @request POST:/users/me/agents/pause
   * @secure
   */
  export namespace PauseUserAgent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AgentPauseReason;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PauseUserAgentData;
  }

  /**
   * @description **Required ACL:** `agentd.users.me.agents.unpause.create`
   * @tags agent, user
   * @name UnpauseUserAgent
   * @summary Unpause the agent of the user holding the authentication token
   * @request POST:/users/me/agents/unpause
   * @secure
   */
  export namespace UnpauseUserAgent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = UnpauseUserAgentData;
  }
}
