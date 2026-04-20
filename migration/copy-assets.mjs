#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const targetRoot = join(root, 'src/client/assets');
const map = JSON.parse(readFileSync(join(root, 'migration/asset-map.json'), 'utf8'));

function copy(fromBranchPath, toRelPath) {
  const targetPath = join(targetRoot, toRelPath);
  if (existsSync(targetPath)) {
    console.log(`skip (exists): ${toRelPath}`);
    return;
  }
  mkdirSync(dirname(targetPath), { recursive: true });
  const buf = execFileSync('git', ['show', `main:${fromBranchPath}`], {
    maxBuffer: 64 * 1024 * 1024,
  });
  writeFileSync(targetPath, buf);
  console.log(`copied: ${fromBranchPath} -> ${toRelPath}`);
}

let count = 0;
for (const [hash, dest] of Object.entries(map.figma_assets)) {
  copy(`src/assets/${hash}`, dest);
  count++;
}
for (const [src, dest] of Object.entries(map.imports)) {
  copy(`src/imports/${src}`, dest);
  count++;
}
console.log(`\nDone — ${count} files processed.`);
