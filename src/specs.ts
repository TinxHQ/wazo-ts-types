// Single source of truth for the Wazo OpenAPI spec URLs, shared by the type generator
// (build.ts) and the ACL catalog generator (acl/generate.ts). URLs default to the public
// stable specs and can be overridden per-service via environment variables (see .env.example).
//
// Build-time only — not part of the published type surface.

import { config } from 'dotenv';

// Load .env overrides before reading process.env below.
config();

export type SpecLayer = 'stack' | 'portal';

// A spec descriptor keeps the canonical service identity independent of the URL, so environment
// overrides (dev/edge specs whose paths look nothing like `.../wazo-auth.yml`) never change how a
// service is keyed or labelled — only where its spec is fetched from.
export type Spec = {
  // camelCase name used for the generated schema file / namespace (build.ts).
  name: string;
  // Canonical spec stem used to key ACLs and resolve human labels (see acl/acl-extract SERVICE_META).
  key: string;
  layer: SpecLayer;
  url: string;
};

export const SPECS: Spec[] = [
  // --- Wazo Platform (community / stack) ---
  { name: 'agentd', key: 'wazo-agentd', layer: 'stack', url: process.env.AGENTD || 'https://openapi.wazo.community/wazo-platform/wazo-agentd.yml' },
  { name: 'amid', key: 'wazo-amid', layer: 'stack', url: process.env.AMID || 'https://openapi.wazo.community/wazo-platform/wazo-amid.yml' },
  { name: 'auth', key: 'wazo-auth', layer: 'stack', url: process.env.AUTH || 'https://openapi.wazo.community/wazo-platform/wazo-auth.yml' },
  { name: 'callLogd', key: 'wazo-call-logd', layer: 'stack', url: process.env.CALL_LOGD || 'https://openapi.wazo.community/wazo-platform/wazo-call-logd.yml' },
  { name: 'calld', key: 'wazo-calld', layer: 'stack', url: process.env.CALLD || 'https://openapi.wazo.community/wazo-platform/wazo-calld.yml' },
  { name: 'chatd', key: 'wazo-chatd', layer: 'stack', url: process.env.CHATD || 'https://openapi.wazo.community/wazo-platform/wazo-chatd.yml' },
  { name: 'confd', key: 'wazo-confd', layer: 'stack', url: process.env.CONFD || 'https://openapi.wazo.community/wazo-platform/wazo-confd.yml' },
  { name: 'dird', key: 'wazo-dird', layer: 'stack', url: process.env.DIRD || 'https://openapi.wazo.community/wazo-platform/wazo-dird.yml' },
  { name: 'plugind', key: 'wazo-plugind', layer: 'stack', url: process.env.PLUGIND || 'https://openapi.wazo.community/wazo-platform/wazo-plugind.yml' },
  { name: 'provd', key: 'wazo-provd', layer: 'stack', url: process.env.PROVD || 'https://openapi.wazo.community/wazo-platform/wazo-provd.yml' },
  { name: 'setupd', key: 'wazo-setupd', layer: 'stack', url: process.env.SETUPD || 'https://openapi.wazo.community/wazo-platform/wazo-setupd.yml' },
  { name: 'webhookd', key: 'wazo-webhookd', layer: 'stack', url: process.env.WEBHOOKD || 'https://openapi.wazo.community/wazo-platform/wazo-webhookd.yml' },
  // --- Portal (enterprise / nestbox) ---
  { name: 'accessdPortal', key: 'swarm-accessd', layer: 'portal', url: process.env.ACCESSD_PORTAL || 'https://openapi.wazo.community/nestbox/swarm-accessd.yml' },
  { name: 'authPortal', key: 'wazo-auth', layer: 'portal', url: process.env.AUTH_PORTAL || 'https://openapi.wazo.community/nestbox/wazo-auth.yml' },
  { name: 'confdPortal', key: 'nestbox-confd', layer: 'portal', url: process.env.CONFD_PORTAL || 'https://openapi.wazo.community/nestbox/nestbox-confd.yml' },
  { name: 'deploydPortal', key: 'wazo-deployd', layer: 'portal', url: process.env.DEPLOYD_PORTAL || 'https://openapi.wazo.community/nestbox/wazo-deployd.yml' },
];

// Name → URL maps consumed by the swagger type generator (build.ts).
export const schemas: Record<string, string> = Object.fromEntries(
  SPECS.filter(spec => spec.layer === 'stack').map(spec => [spec.name, spec.url]),
);

export const portalSchemas: Record<string, string> = Object.fromEntries(
  SPECS.filter(spec => spec.layer === 'portal').map(spec => [spec.name, spec.url]),
);

// One spec's raw text alongside its descriptor, so the type generator and the ACL extractor can
// share a single download instead of each fetching the same URL.
export type FetchedSpec = { spec: Spec; text: string };

export const fetchText = async (url: string): Promise<string> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${url} → HTTP ${res.status}`);
  }
  return res.text();
};

// Fetch every spec's raw text exactly once. Both `npm run generate` consumers (types + ACL catalog)
// read from the returned array, so they are guaranteed to come from the same spec revision even if a
// mirror updates mid-build.
export const fetchAllSpecs = async (): Promise<FetchedSpec[]> =>
  Promise.all(SPECS.map(async spec => ({ spec, text: await fetchText(spec.url) })));
