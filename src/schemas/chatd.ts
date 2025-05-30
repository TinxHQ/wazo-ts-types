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

export type APIError = Error & {
  /** Resource name of the error */
  resource?: string;
};

export interface ComponentWithStatus {
  status?: StatusValue;
}

export interface ConfigPatchItem {
  /** Patch operation. Supported operation: `replace`. */
  op?: string;
  /** Config element to operate on. Supported path: `/debug` */
  path?: string;
  /** The new value for the resource. */
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

export interface GetRoomParams {
  /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
  user_uuid?: string[];
}

export interface Line {
  id?: number;
  /** The current state of the line. */
  state?:
    | "available"
    | "holding"
    | "ringing"
    | "progressing"
    | "talking"
    | "unavailable";
}

export interface ListPresencesParams {
  /**
   * Should the query include sub-tenants
   * @default false
   */
  recurse?: boolean;
  /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
  user_uuid?: string[];
}

export interface ListRoomMessageParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /**
   * The date and time from which to retrieve messages. Example: 2019-06-12T10:00:00.000+00:00
   * @format date-time
   */
  from_date?: string;
  /** Maximum number of items to return in the list */
  limit?: number;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** The UUID of the room */
  roomUuid: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. Required if `distinct` is not specified. */
  search?: string;
}

export interface ListRoomsMessagesParams {
  /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
  direction?: "asc" | "desc";
  /** Distinct list results by field. Always picks the latest entry. Required if `search` is not specified. */
  distinct?: "room_uuid";
  /** Maximum number of items to return in the list */
  limit?: number;
  /** Number of items to skip over in the list. Useful for pagination. */
  offset?: number;
  /** Name of the field to use for sorting the list of items returned. */
  order?: string;
  /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. */
  search?: string;
}

export interface Message {
  /** Alias/nickname of the sender */
  alias?: string;
  /** The content of the message */
  content?: string;
  /** The date of the message's creation */
  created_at?: string;
  room?: RoomRelationBase;
  /** tenant uuid of the sender */
  tenant_uuid?: string;
  /** user uuid of the sender */
  user_uuid?: string;
  /** The UUID of the message */
  uuid?: string;
  /** wazo uuid of the sender */
  wazo_uuid?: string;
}

/** UserItems */
export interface Messages {
  filtered?: number;
  items?: Message[];
  total?: number;
}

/** Presence */
export interface Presence {
  /** If the user has active connections. */
  connected?: boolean;
  /** The "do not disturb" status of the user. */
  do_not_disturb?: boolean;
  /** The date time in UTC of the user's last activity. The value is updated when the user changes his state explicitly. The value is NULL for new user. */
  last_activity?: string;
  /** The current state of the most prioritize state line. The prioritization of each state is the following: ringing > progressing > holding > talking > available > unavailable */
  line_state?:
    | "available"
    | "holding"
    | "ringing"
    | "progressing"
    | "talking"
    | "unavailable";
  lines?: Line[];
  /**
   * If the user uses a mobile application and can be considered reachable.
   *
   * mobile will be true in the following situations
   *
   * * The user has a mobile refresh token
   * * The user has a mobile session
   */
  mobile?: boolean;
  /** The presence state of the user. */
  state: "available" | "away" | "unavailable" | "invisible";
  /** An extended description of the user presence. */
  status?: string;
  /** The UUID of the tenant of the user */
  tenant_uuid?: string;
  /** The UUID of the user */
  uuid?: string;
}

/** PresenceList */
export interface PresenceList {
  /** The number of result matching the searched terms */
  filtered?: number;
  items?: Presence[];
  /** The number of results without filter */
  total?: number;
}

/** Room */
export type Room = RoomRelationBase & {
  /** The name of the room */
  name?: string;
  /** @maxItems 100 */
  users: RoomUser[];
};

export interface RoomRelationBase {
  /** The UUID of the room */
  uuid?: string;
}

export interface RoomUser {
  /** The tenant of the user_uuid. Default to the same tenant as the token owner */
  tenant_uuid?: string;
  uuid: string;
  /** The wazo of the tenant_uuid. Default to the same wazo as the token owner */
  wazo_uuid?: string;
}

/** Rooms */
export interface Rooms {
  filtered?: number;
  items?: Room[];
  total?: number;
}

export interface StatusSummary {
  bus_consumer?: ComponentWithStatus;
  master_tenant?: ComponentWithStatus;
  presence_initialization?: ComponentWithStatus;
  rest_api?: ComponentWithStatus;
}

export enum StatusValue {
  Fail = "fail",
  Ok = "ok",
}

export interface UserMessagePOST {
  /** Alias/nickname of the sender */
  alias: string;
  /** The content of the message */
  content: string;
}

export namespace Config {
  /**
   * @description **Required ACL:** `chatd.config.read`
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
   * @description **Required ACL:** `chatd.config.update`
   * @tags config
   * @name PatchConfig
   * @summary Change part of the configuration
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

export namespace Status {
  /**
   * @description **Required ACL:** `chatd.status.read`
   * @tags status
   * @name StatusList
   * @summary Print infos about internal status of wazo-chatd
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

export namespace Users {
  /**
   * @description **Required ACL:** `chatd.users.me.rooms.read`
   * @tags rooms
   * @name GetRoom
   * @summary Get room
   * @request GET:/users/me/rooms
   * @secure
   */
  export namespace GetRoom {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
      user_uuid?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Rooms;
  }

  /**
   * @description **Required ACL:** `chatd.users.me.rooms.create` **Warning**: **>=22.16**: If a room with the same participants exists, it will be returned instead of creating new one. In this case, no other parameter will be taken into account and the return code will be 201. This behaviour will disappear in the future and a 409 error will be raised.
   * @tags rooms
   * @name CreateRoom
   * @summary Create room
   * @request POST:/users/me/rooms
   * @secure
   */
  export namespace CreateRoom {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Room;
    export type RequestHeaders = {};
    export type ResponseBody = Room;
  }

  /**
   * @description **Required ACL:** `chatd.users.me.rooms.messages.read`
   * @tags rooms, messages
   * @name ListRoomsMessages
   * @summary List rooms messages
   * @request GET:/users/me/rooms/messages
   * @secure
   */
  export namespace ListRoomsMessages {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /** Distinct list results by field. Always picks the latest entry. Required if `search` is not specified. */
      distinct?: "room_uuid";
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
    export type RequestHeaders = {};
    export type ResponseBody = Messages;
  }

  /**
   * @description **Required ACL:** `chatd.users.me.rooms.{room_uuid}.messages.read`
   * @tags rooms, messages
   * @name ListRoomMessage
   * @summary List room messages
   * @request GET:/users/me/rooms/{room_uuid}/messages
   * @secure
   */
  export namespace ListRoomMessage {
    export type RequestParams = {
      /** The UUID of the room */
      roomUuid: string;
    };
    export type RequestQuery = {
      /** Sort list of items in 'asc' (ascending) or 'desc' (descending) order */
      direction?: "asc" | "desc";
      /**
       * The date and time from which to retrieve messages. Example: 2019-06-12T10:00:00.000+00:00
       * @format date-time
       */
      from_date?: string;
      /** Maximum number of items to return in the list */
      limit?: number;
      /** Number of items to skip over in the list. Useful for pagination. */
      offset?: number;
      /** Name of the field to use for sorting the list of items returned. */
      order?: string;
      /** Search term for filtering a list of items. Only items with a field containing the search term will be returned. Required if `distinct` is not specified. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Messages;
  }

  /**
   * @description **Required ACL:** `chatd.users.me.rooms.{room_uuid}.messages.create`
   * @tags rooms, messages
   * @name CreateRoomMessage
   * @summary Create room messages
   * @request POST:/users/me/rooms/{room_uuid}/messages
   * @secure
   */
  export namespace CreateRoomMessage {
    export type RequestParams = {
      /** The UUID of the room */
      roomUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserMessagePOST;
    export type RequestHeaders = {};
    export type ResponseBody = Message;
  }

  /**
   * @description **Required ACL:** `chatd.users.presences.read`
   * @tags presences
   * @name ListPresences
   * @summary List presences
   * @request GET:/users/presences
   * @secure
   */
  export namespace ListPresences {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Should the query include sub-tenants
       * @default false
       */
      recurse?: boolean;
      /** Filter by user_uuid. Many uuid can be specified. A logical AND is used for filtering. Each uuid MUST be separated by a comma (,). */
      user_uuid?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = PresenceList;
  }

  /**
   * @description **Required ACL:** `chatd.users.{user_uuid}.presences.read`
   * @tags presences
   * @name GetUserPresence
   * @summary Get user presence
   * @request GET:/users/{user_uuid}/presences
   * @secure
   */
  export namespace GetUserPresence {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = Presence;
  }

  /**
   * @description **Required ACL:** `chatd.users.{user_uuid}.presences.update`
   * @tags presences
   * @name UpdateUserPresence
   * @summary Update user presence
   * @request PUT:/users/{user_uuid}/presences
   * @secure
   */
  export namespace UpdateUserPresence {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Presence;
    export type RequestHeaders = {
      /** The tenant's UUID, defining the ownership of a given resource. */
      "Wazo-Tenant"?: string;
    };
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags microsoft
   * @name UpdateTeamsPresence
   * @summary Receive presence information from Microsoft Teams
   * @request POST:/users/{user_uuid}/teams/presence
   * @secure
   */
  export namespace UpdateTeamsPresence {
    export type RequestParams = {
      /** The UUID of the user */
      userUuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResourceUpdated;
  }
}
