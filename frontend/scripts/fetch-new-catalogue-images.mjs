import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const people = [
  ['mario-soares', 'Mário Soares'], ['cavaco-silva', 'Aníbal Cavaco Silva'],
  ['antonio-costa', 'António Costa'], ['catarina-martins', 'Catarina Martins'],
  ['margaret-thatcher', 'Margaret Thatcher'], ['jawaharlal-nehru', 'Jawaharlal Nehru'],
  ['angela-merkel', 'Angela Merkel'], ['jacinda-ardern', 'Jacinda Ardern'],
  ['michelle-bachelet', 'Michelle Bachelet'], ['tsai-ing-wen', 'Tsai Ing-wen']
];
const countries = [
  ['angola', 'Angola'], ['mocambique', 'Mozambique'], ['cabo-verde', 'Cape Verde'],
  ['guine-bissau', 'Guinea-Bissau'], ['sao-tome-principe', 'São Tomé and Príncipe'],
  ['timor-leste', 'East Timor'], ['india', 'India'], ['bangladesh', 'Bangladesh'],
  ['quenia', 'Kenya'], ['tunisia', 'Tunisia']
];
const root = resolve(import.meta.dirname, '..');
const out = resolve(root, '../docs/evidencias/imagens-novas.json');
const headers = { 'User-Agent': 'CompassoPoliticoLocal/1.0 (educational catalogue source verification)' };
let portraits = new Map();
let commons = new Map();
const plain = html => html?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim() ?? '';
async function json(url) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${res.status}: ${url}`);
  return res.json();
}
async function portrait(title) {
  const img = portraits.get(title);
  if (!img) throw new Error(`Sem retrato: ${title}`);
  const file = decodeURIComponent(new URL(img.source).pathname.split('/').at(-1));
  return `File:${file}`;
}
async function download(id, title, kind) {
  const fileTitle = kind === 'personalities' ? await portrait(title) : `File:Flag of ${title}.svg`;
  const info = commons.get(fileTitle.replaceAll('_', ' '));
  if (!info) throw new Error(`Ficheiro não localizado no Commons: ${fileTitle}`);
  const meta = info.extmetadata;
  const license = plain(meta.LicenseShortName?.value);
  if (!/^(CC|Public domain|PD|GFDL|Attribution|European Parliament)/i.test(license)) throw new Error(`Licença requer revisão: ${fileTitle}: ${license}`);
  const ext = new URL(info.url).pathname.split('.').at(-1).toLowerCase();
  if (!['jpg', 'jpeg', 'png', 'svg'].includes(ext)) throw new Error(`Formato inesperado: ${ext}`);
  const local = `/catalogue-new/${kind}/${id}.${ext}`;
  await mkdir(resolve(root, `public/catalogue-new/${kind}`), { recursive: true });
  const cleanUrl = info.url.split('?')[0];
  let res = await fetch(cleanUrl, { headers, signal: AbortSignal.timeout(60000) });
  if (res.status === 429) {
    await new Promise(resolve => setTimeout(resolve, 15000));
    res = await fetch(cleanUrl, { headers, signal: AbortSignal.timeout(60000) });
  }
  if (!res.ok) throw new Error(`Imagem HTTP ${res.status}: ${fileTitle}`);
  await writeFile(resolve(root, `public${local}`), Buffer.from(await res.arrayBuffer()));
  return { id, kind, title, local, fileTitle, original: info.url, source: info.descriptionurl,
    width: info.width, height: info.height, artist: plain(meta.Artist?.value),
    license, licenseUrl: meta.LicenseUrl?.value ?? '', credit: plain(meta.Credit?.value),
    description: plain(meta.ImageDescription?.value), date: plain(meta.DateTimeOriginal?.value),
    reviewed: '2026-10-07', treatment: 'Ficheiro original; apenas recorte CSS na apresentação.' };
}
const result = [];
const pageData = await json(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&titles=${encodeURIComponent(people.map(p => p[1]).join('|'))}`);
portraits = new Map(Object.values(pageData.query.pages).map(page => [page.title, page.original]));
const fileTitles = [...await Promise.all(people.map(p => portrait(p[1]))), ...countries.map(c => `File:Flag of ${c[1]}.svg`)];
const imageData = await json(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata%7Csize&titles=${encodeURIComponent(fileTitles.join('|'))}`);
commons = new Map(Object.values(imageData.query.pages).map(page => [page.title, page.imageinfo?.[0]]));
await mkdir(resolve(root, '../.local-runtime'), { recursive: true });
await writeFile(resolve(root, '../.local-runtime/new-image-metadata.json'), JSON.stringify(imageData, null, 2));
for (const kind of ['personalities', 'countries']) {
  const entries = kind === 'personalities' ? people : countries;
  for (const [id, title] of entries) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    try { result.push(await download(id, title, kind)); console.log(`OK ${id}`); }
    catch (error) { result.push({ id, kind, error: String(error) }); console.log(`ERRO ${id}: ${error}`); }
  }
}
await mkdir(resolve(root, '../docs/evidencias'), { recursive: true });
await writeFile(out, JSON.stringify(result, null, 2) + '\n');
if (result.some(item => item.error)) process.exitCode = 1;
