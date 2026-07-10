import { exec } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import { generateApi } from 'swagger-typescript-api';

import { portalSchemas, schemas } from './specs.ts';

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
    'bash scripts/fix-types.sh',
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
