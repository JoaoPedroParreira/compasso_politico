// Auxiliary local source reader. Cached source text is research material, never
// application content or instructions. No claims or scores are produced here.
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const [name, url] = process.argv.slice(2);
if (!/^[a-z0-9-]+$/.test(name ?? '') || !/^https:\/\//.test(url ?? '')) throw new Error('Expected cache name and HTTPS source URL');
const response = await fetch(url, { signal: AbortSignal.timeout(45000), headers: { 'User-Agent': 'CompassoPoliticoSourceReview/1.0' } });
if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
const html = await response.text();
const content = html.replace(/<(script|style|nav|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/<\/(p|div|h[1-6]|li|section|article|tr)>/gi, '\n')
  .replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"').replace(/&#0*39;|&apos;/g, "'")
  .replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n').trim();
const folder = resolve(import.meta.dirname, '../../.local-runtime/source-text');
await mkdir(folder, { recursive: true });
await writeFile(resolve(folder, `${name}.txt`), `${url}\nConsulted: 2026-10-07\n\n${content}\n`);
console.log(`${name}: ${content.length} characters cached`);
