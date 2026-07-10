// Single orchestrator for `npm run generate`: fetches every Wazo OpenAPI spec exactly once, then
// feeds the same in-memory text to both the swagger type generator and the ACL catalog builder — so
// the generated types and the ACL catalog always come from the same spec revision.

import { exec } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import { generateApi } from 'swagger-typescript-api';

import { fetchAllSpecs } from './specs.ts';
import { collectAclLayers, resolveApiVersion, writeCatalog } from './acl/generate.ts';

const SCHEMAS_DIR = path.resolve(process.cwd(), 'src', 'schemas');
// swagger-typescript-api reads from a URL or a local file; we stage the already-fetched spec text
// here (gitignored, removed at the end) so it never re-downloads.
const RAW_DIR = path.resolve(process.cwd(), 'src', 'schemas-raw');

const runFixTypes = (): Promise<void> =>
  new Promise((resolve, reject) => {
    exec('bash scripts/fix-types.sh', (error, _stdout, stderr) => {
      if (error) {
        reject(new Error(`Error while running 'fix-types.sh': ${error.message}`));
        return;
      }
      if (stderr) {
        reject(new Error(`Standard error output from fix-types.sh script: ${stderr}`));
        return;
      }
      console.log('✅ Successfully fixed broken types');
      resolve();
    });
  });

const main = async (): Promise<void> => {
  // Fetch every spec once; both consumers below read the same revision.
  const specs = await fetchAllSpecs();

  fs.rmSync(RAW_DIR, { recursive: true, force: true });
  fs.mkdirSync(RAW_DIR, { recursive: true });

  await Promise.all(
    specs.map(async ({ spec, text }) => {
      const rawPath = path.join(RAW_DIR, `${spec.name}.yml`);
      fs.writeFileSync(rawPath, text, 'utf8');
      try {
        // https://github.com/acacode/swagger-typescript-api/blob/main/types/index.ts
        await generateApi({
          input: rawPath,
          output: SCHEMAS_DIR,
          fileName: `${spec.name}.ts`,
          generateClient: false,
          generateRouteTypes: true,
          extractRequestParams: true,
          extractRequestBody: true,
          extractResponseBody: true,
          extractResponseError: true,
          sortTypes: true,
        });
      } catch (error) {
        console.error(`Error generating types for ${spec.name}:`, error);
      }
    }),
  );

  fs.rmSync(RAW_DIR, { recursive: true, force: true });

  // Build the ACL catalog from the same fetched specs.
  const apiVersion = await resolveApiVersion();
  const { stack, portal } = collectAclLayers(specs);
  writeCatalog(stack, portal, apiVersion);

  await runFixTypes();

  if (fs.existsSync(path.resolve(process.cwd(), '.env'))) {
    console.warn('⚠️  WARNING: .env file detected. Generated types and ACL catalog are built from custom/unstable specs — do not commit this output.');
  }
};

main().catch(error => {
  console.error(`❌ Build failed: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
});
