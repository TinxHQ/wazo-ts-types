import * as path from "node:path";
import * as process from "node:process";
import { execFile } from 'node:child_process';
import { generateApi } from 'swagger-typescript-api';

const schemas = {
  agentd: 'https://openapi.wazo.community/wazo-platform/wazo-agentd.yml',
  amid: 'https://openapi.wazo.community/wazo-platform/wazo-amid.yml',
  auth: 'https://openapi.wazo.community/wazo-platform/wazo-auth.yml',
  callLogd: 'https://openapi.wazo.community/wazo-platform/wazo-call-logd.yml',
  calld: 'https://openapi.wazo.community/wazo-platform/wazo-calld.yml',
  chatd: 'https://openapi.wazo.community/wazo-platform/wazo-chatd.yml',
  confd: 'https://openapi.wazo.community/wazo-platform/wazo-confd.yml',
  dird: 'https://openapi.wazo.community/wazo-platform/wazo-dird.yml',
  plugind: 'https://openapi.wazo.community/wazo-platform/wazo-plugind.yml',
  provd: 'https://openapi.wazo.community/wazo-platform/wazo-provd.yml',
  setupd: 'https://openapi.wazo.community/wazo-platform/wazo-setupd.yml',
  webhookd: 'https://openapi.wazo.community/wazo-platform/wazo-webhookd.yml',
};

const portalSchemas = {
  accessdPortal: 'https://openapi.wazo.community/nestbox/swarm-accessd.yml',
  authPortal: 'https://openapi.wazo.community/nestbox/wazo-auth.yml',
  confdPortal: 'https://openapi.wazo.community/nestbox/nestbox-confd.yml',
  deploydPortal: 'https://openapi.wazo.community/nestbox/wazo-deployd.yml',
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
  execFile(path.resolve(process.cwd(), 'scripts', 'fix-types.sh'), (error, _stdout, stderr) => {
    if (error) {
      console.error(`❌ Error while running 'fix-types.sh': ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`❌ Standard error output from fix-types.sh script: ${stderr}`);
      return;
    }
    console.log('✅ Successfully fixed broken types');
  });
});
