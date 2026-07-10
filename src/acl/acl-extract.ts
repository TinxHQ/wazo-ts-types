// Pure ACL-extraction logic shared by the generator (src/acl/generate.ts) and its unit tests.
// Ported from portal-ui's scripts/lib/acl-extract.js (itself ported from the reference Python
// generator) — keep the regex identical so we extract the same ACL set, including the same skips
// for malformed annotations that are missing a closing backtick.

import type { AclCatalog, AclService } from './types';

export const ACL_RE = /Required ACL.*?`([^`]+)`/;

// Human-friendly labels per originating service, keyed by the spec file stem (e.g. `wazo-auth`).
// Unknown services fall back to the raw key so nothing is ever dropped silently.
export const SERVICE_META: Record<string, string> = {
  // --- community / stack ---
  'wazo-auth': 'Authentication',
  'wazo-amid': 'Asterisk manager (AMI)',
  'wazo-confd': 'Configuration',
  'wazo-calld': 'Calls',
  'wazo-dird': 'Directories',
  'wazo-provd': 'Provisioning',
  'wazo-agentd': 'Agents',
  'wazo-call-logd': 'Call logs / CDR',
  'wazo-chatd': 'Chat / presence',
  'wazo-webhookd': 'Webhooks',
  'wazo-plugind': 'Plugins',
  'wazo-setupd': 'Setup',
  'wazo-router-confd': 'Router config',
  // --- enterprise / portal ---
  'nestbox-confd': 'Reseller configuration',
  'wazo-deployd': 'Deployment',
  'swarm-accessd': 'Access control',
};

const labelFor = (key: string): string => SERVICE_META[key] || key;

// Return the sorted-unique ACL strings found in one spec file's text.
export const extractAcls = (text: string): string[] => {
  const acls = new Set<string>();
  for (const line of text.split('\n')) {
    if (!line.includes('Required ACL')) {
      continue;
    }
    const match = ACL_RE.exec(line);
    if (match?.[1]) {
      acls.add(match[1].trim());
    }
  }
  return Array.from(acls).sort();
};

// Merge per-service ACL maps (`{ serviceKey: string[] }`) for the stack and portal layers into one
// grouped catalog. Community = union of all stack ACLs; enterprise = portal ACLs not already
// present in community (deduplicated).
export const buildCatalog = (
  stackMap: Record<string, string[]>,
  portalMap: Record<string, string[]>,
  apiVersion: string,
): AclCatalog => {
  const community = new Set<string>();
  for (const acls of Object.values(stackMap)) {
    for (const acl of acls) {
      community.add(acl);
    }
  }

  // Accumulate ACLs per service key so that a portal spec sharing a stack service's canonical key
  // (e.g. `authPortal` and stack `auth` both key on `wazo-auth`) merges into the same row instead
  // of producing a duplicate service entry that hides the portal-only ACLs from key lookups.
  const byKey = new Map<string, Set<string>>();
  const aclsFor = (key: string): Set<string> => {
    let acls = byKey.get(key);
    if (!acls) {
      acls = new Set<string>();
      byKey.set(key, acls);
    }
    return acls;
  };

  for (const key of Object.keys(stackMap).sort()) {
    const acls = aclsFor(key);
    for (const acl of stackMap[key] ?? []) {
      acls.add(acl);
    }
  }

  for (const key of Object.keys(portalMap).sort()) {
    const extra = (portalMap[key] ?? []).filter(acl => !community.has(acl));
    if (extra.length) {
      const acls = aclsFor(key);
      for (const acl of extra) {
        acls.add(acl);
      }
    }
  }

  const services: AclService[] = Array.from(byKey.keys())
    .sort()
    .map(key => ({
      key,
      label: labelFor(key),
      acls: Array.from(byKey.get(key) ?? []).sort(),
    }));

  const allAcls = Array.from(new Set(services.flatMap(service => service.acls))).sort();

  return { apiVersion, services, allAcls };
};
