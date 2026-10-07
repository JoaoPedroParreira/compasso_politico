import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { AXIS_IDS } from './profile-match.mjs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const data = join(root, 'backend/src/main/resources/data');
const { default: batch } = await import(pathToFileURL(resolve(process.argv[2])).href);
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const changes = new Map();
const append = (path, entry, key = 'id') => {
  const items = changes.get(path) || read(path);
  if (items.some(item => item[key] === entry[key])) throw new Error(`Already exists: ${entry[key]}`);
  items.push(entry); changes.set(path, items);
};
const registryPath = join(root, 'frontend/scripts/catalogue-additions.json');
const evidencePath = join(root, 'frontend/scripts/profile-evidence.json');
const registry = read(registryPath), evidence = read(evidencePath);
const types = { ideologies: ['ideology-profiles.json', 'ideologyId'], personalities: ['personality-profiles.json', 'personalityId'], countries: ['countries-profiles.json', 'countryId'] };
for (const { kind, metadata: m, translation, review: r } of batch.entries) {
  if (!types[kind] || m.id !== translation.id || r.status !== 'reviewed' || !r.period || !r.sources.length || r.independentReview !== false || r.axes.length !== 12 || new Set(r.axes.map(a => a.id)).size !== 12) throw new Error(`Invalid review: ${m.id}`);
  const vector = {};
  for (const id of AXIS_IDS) {
    const a = r.axes.find(a => a.id === id);
    if (!a || !Number.isFinite(a.value) || a.range.length !== 2 || a.range[0] < 0 || a.range[1] > 100 || a.value < a.range[0] || a.value > a.range[1] || !['alta','média'].includes(a.confidence) || !a.pt || !a.en || !a.sources.length || a.sources.some(n => !r.sources[n - 1]?.url.startsWith('https://'))) throw new Error(`Incomplete evidence: ${m.id}/${id}`);
    vector[id] = a.value;
  }
  const img = m.imagePath || m.flagPath;
  if (img && (!r.image || !existsSync(join(root, 'frontend/public', img)))) throw new Error(`Missing image: ${m.id}`);
  append(join(data, `${kind}.json`), m);
  append(join(data, 'i18n/en', `${kind}.json`), translation);
  append(join(data, types[kind][0]), { [types[kind][1]]: m.id, vector }, types[kind][1]);
  if (registry[kind].includes(m.id) || evidence[m.id]) throw new Error(`Repeated novelty: ${m.id}`);
  registry[kind].push(m.id); evidence[m.id] = r;
  const dossier = `# ${m.name}\n\nEstado: revisto e integrado no ${batch.id}. Tipo: ${kind}.\nPeríodo: ${r.period}. ${r.pt.scope}\nRevisão: Codex, ${r.reviewed}. Revisão independente: não realizada.\n\n## Fontes\n\n${r.sources.map((s,i) => `- S${i+1}: ${s.title}; ${s.author}; ${s.date}; [fonte](${s.url}). Consulta ${r.reviewed}. Localização: ${s.section}.`).join('\n')}\n\n## Matriz dos eixos\n\n[Rubrica](RUBRICA_NOVAS_ENTRADAS.md). Valores editoriais, não medições de crenças.\n\n| Eixo | Valor / intervalo | Confiança | Evidência |\n| --- | --- | --- | --- |\n${r.axes.map(a => `| ${a.id} | ${a.value} / ${a.range.join('–')} | ${a.confidence} | ${a.pt} (${a.sources.map(n => `S${n}`).join(', ')}) |`).join('\n')}\n\n## Imagem\n\n${r.image ? `${r.image.artist}; ${r.image.license}; [origem](${r.image.source}). ${r.image.pt} Caminho: frontend/public${img}. URL original e dimensões no inventário ${batch.imageInventory || 'imagens-novas.json'}.` : 'Sem imagem própria; perfis de referência autenticados.'}\n\n## Limitações\n\n${r.pt.limits}\n\n## Validação\n\n[Registo do lote](${batch.id}-validacao.md).\n`;
  changes.set(join(root, 'docs/evidencias', `${m.id}.md`), dossier);
}
const countries = changes.get(join(data, 'countries.json')) || read(join(data, 'countries.json'));
const people = changes.get(join(data, 'personalities.json')) || read(join(data, 'personalities.json'));
for (const { kind, metadata: m } of batch.entries) if (kind === 'ideologies' && (!countries.some(c => c.id === m.countryId) || !people.some(p => p.id === m.personalityId))) throw new Error(`Broken references: ${m.id}`);
if (process.argv.includes('--apply')) {
  for (const [path, content] of changes) writeFileSync(path, typeof content === 'string' ? content : JSON.stringify(content, null, 2) + '\n');
  writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
  writeFileSync(evidencePath, JSON.stringify(evidence, null, 2) + '\n');
  console.log(`Integrated ${batch.entries.length} profiles: ${batch.id}`);
} else console.log(`Validated ${batch.entries.length} profiles. Use --apply to integrate.`);
