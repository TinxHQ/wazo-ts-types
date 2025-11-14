import { config } from 'dotenv';
import { exec } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import { generateApi } from 'swagger-typescript-api';

// Load environment variables from .env file
config();

const schemas = {
  agentd: process.env.AGENTD || 'https://openapi.wazo.community/wazo-platform/wazo-agentd.yml',
  amid: process.env.AMID || 'https://openapi.wazo.community/wazo-platform/wazo-amid.yml',
  auth: process.env.AUTH || 'https://openapi.wazo.community/wazo-platform/wazo-auth.yml',
  callLogd: process.env.CALL_LOGD || 'https://openapi.wazo.community/wazo-platform/wazo-call-logd.yml',
  calld: process.env.CALLD || 'https://openapi.wazo.community/wazo-platform/wazo-calld.yml',
  chatd: process.env.CHATD || 'https://openapi.wazo.community/wazo-platform/wazo-chatd.yml',
  confd: process.env.CONFD || 'https://openapi.wazo.community/wazo-platform/wazo-confd.yml',
  dird: process.env.DIRD || 'https://openapi.wazo.community/wazo-platform/wazo-dird.yml',
  plugind: process.env.PLUGIND || 'https://openapi.wazo.community/wazo-platform/wazo-plugind.yml',
  provd: process.env.PROVD || 'https://openapi.wazo.community/wazo-platform/wazo-provd.yml',
  setupd: process.env.SETUPD || 'https://openapi.wazo.community/wazo-platform/wazo-setupd.yml',
  webhookd: process.env.WEBHOOKD || 'https://openapi.wazo.community/wazo-platform/wazo-webhookd.yml',
};

const portalSchemas = {
  accessdPortal: process.env.ACCESSD_PORTAL || 'https://openapi.wazo.community/nestbox/swarm-accessd.yml',
  authPortal: process.env.AUTH_PORTAL || 'https://openapi.wazo.community/nestbox/wazo-auth.yml',
  confdPortal: process.env.CONFD_PORTAL || 'https://openapi.wazo.community/nestbox/nestbox-confd.yml',
  deploydPortal: process.env.DEPLOYD_PORTAL || 'https://openapi.wazo.community/nestbox/wazo-deployd.yml',
};

Promise.all(
  Object.entries({ ...schemas, ...portalSchemas }).map(async ([schemaName, url]) => {
    try {
      // https://github.com/acacode/swagger-typescript-api/blob/main/types/index.ts
      await generateApi({
        url,
        output: path.resolve(process.cwd(), 'src', 'schemas'),
        fileName: `${schemaName}.ts`,
        generateClient: false,
        generateRouteTypes: true,
        extractRequestParams: true,
        extractRequestBody: true,
        extractResponseBody: true,
        extractResponseError: true,
        sortTypes: true,
      });
    } catch (error) {
      console.error(`Error generating types for ${schemaName}:`, error);
    }
  }),
).then(() => {
  exec(
    'docker run --rm -v $(pwd):/app -w /app node:22-slim bash scripts/fix-types.sh',
    (error, _stdout, stderr) => {
      if (error) {
        console.error(`❌ Error while running 'fix-types.sh': ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`❌ Standard error output from fix-types.sh script: ${stderr}`);
        return;
      }
      console.log('✅ Successfully fixed broken types');

      // Warn if .env file exists
      if (fs.existsSync(path.resolve(process.cwd(), '.env'))) {
        console.warn('⚠️  WARNING: .env file detected. Building types based on custom/unstable environment variables.');
      }
    },
  );
});
