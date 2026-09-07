import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const assetsDir = join(process.cwd(), 'dist', 'assets');
const maxInitialBytes = 450 * 1024;

const initialBundle = readdirSync(assetsDir)
  .filter((file) => /^index-.*\.js$/.test(file))
  .map((file) => ({
    file,
    bytes: statSync(join(assetsDir, file)).size,
  }))
  .sort((a, b) => b.bytes - a.bytes)[0];

if (!initialBundle) {
  console.error('Could not find the Vite initial JavaScript bundle.');
  process.exit(1);
}

const kb = (initialBundle.bytes / 1024).toFixed(2);
const maxKb = (maxInitialBytes / 1024).toFixed(0);

console.log(`Initial JS bundle: ${initialBundle.file} — ${kb} KB (budget: ${maxKb} KB)`);

if (initialBundle.bytes > maxInitialBytes) {
  console.error(
    `Initial JavaScript bundle exceeded the ${maxKb} KB production budget.`,
  );
  process.exit(1);
}
