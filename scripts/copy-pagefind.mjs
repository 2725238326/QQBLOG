import { cp, mkdir, rm } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceDir = `${rootDir}/dist/pagefind`;
const targetDir = `${rootDir}/public/pagefind`;

await rm(targetDir, { force: true, recursive: true });
await mkdir(dirname(targetDir), { recursive: true });
await cp(sourceDir, targetDir, { recursive: true });
