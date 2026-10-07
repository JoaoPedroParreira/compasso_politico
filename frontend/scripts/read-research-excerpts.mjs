import { readFileSync } from 'node:fs';
const [id, ...terms] = process.argv.slice(2);
const text = readFileSync(`.local-runtime/source-text/${id}.txt`, 'utf8');
for (const term of terms) {
  const re = new RegExp(term, 'gi');
  const hits = [...text.matchAll(re)].slice(0,2);
  console.log(`\n${term}: ${hits.length} excerpts`);
  for (const hit of hits) {
    const start = Math.max(0, hit.index - 90);
    const page = text.slice(0, hit.index).match(/PAGE \d+/g)?.at(-1);
    console.log(page ?? '', text.slice(start, hit.index + 450).replace(/\s+/g,' '));
  }
}
