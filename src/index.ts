import type { Api as AgentdApi, Api } from './schemas/agentd.ts';
import type { Api as AmidApi } from './schemas/amid.ts';
import type { Api as AuthApi } from './schemas/auth.ts';
import type { Api as CalldApi } from './schemas/calld.ts';
import type { Api as CallLogdApi } from './schemas/callLogd.ts';
import type { Api as ChatdApi } from './schemas/chatd.ts';
import type { Api as ConfdApi } from './schemas/confd.ts';
import type { Api as DirdApi } from './schemas/dird.ts';
import type { Api as PlugindApi } from './schemas/plugind.ts';
import type { Api as ProvdApi } from './schemas/provd.ts';
import type { Api as SetupdApi } from './schemas/setupd.ts';
import type { Api as WebhookdApi } from './schemas/webhookd.ts';
import type { Api as ConfdApiPortal } from './schemas/confdPortal.ts';
import type { Api as AuthApiPortal } from './schemas/authPortal.ts';
import type { Api as DeploydApiPortal } from './schemas/deploydPortal.ts';
import type { Api as AccessdApiPortal } from './schemas/accessdPortal.ts';

// Wazo Platform APIs
type Agentd = AgentdApi<unknown>;
type Amid = AmidApi<unknown>;
type Auth = AuthApi<unknown>;
type Calld = CalldApi<unknown>;
type CallLogd = CallLogdApi<unknown>;
type Chatd = ChatdApi<unknown>;
type Confd = ConfdApi<unknown>;
type Dird = DirdApi<unknown>;
type Plugind = PlugindApi<unknown>;
type Provd = ProvdApi<unknown>;
type Setupd = SetupdApi<unknown>;
type Webhookd = WebhookdApi<unknown>;

export type { Agentd, Amid, Auth, Calld, CallLogd, Chatd, Confd, Dird, Plugind, Provd, Setupd, Webhookd };

export * as AmidSchema from './schemas/amid.ts';
export * as AgentdSchema from './schemas/agentd.ts';
export * as AuthSchema from './schemas/auth.ts';
export * as CalldSchema from './schemas/calld.ts';
export * as CallLogdSchema from './schemas/callLogd.ts';
export * as ChatdSchema from './schemas/chatd.ts';
export * as ConfdSchema from './schemas/confd.ts';
export * as DirdSchema from './schemas/dird.ts';
export * as PlugindSchema from './schemas/plugind.ts';
export * as ProvdSchema from './schemas/provd.ts';
export * as SetupdSchema from './schemas/setupd.ts';
export * as WebhookdSchema from './schemas/webhookd.ts';

// Portal APIs
type AccessdPortal = AccessdApiPortal<unknown>;
type AuthPortal = AuthApiPortal<unknown>;
type ConfdPortal = ConfdApiPortal<unknown>;
type DeploydPortal = DeploydApiPortal<unknown>;

export type { ConfdPortal, AuthPortal, DeploydPortal, AccessdPortal };

export * as AccessdPortalSchema from './schemas/accessdPortal.ts';
export * as AuthPortalSchema from './schemas/authPortal.ts';
export * as ConfdPortalSchema from './schemas/confdPortal.ts';
export * as DeploydPortalSchema from './schemas/deploydPortal.ts';
