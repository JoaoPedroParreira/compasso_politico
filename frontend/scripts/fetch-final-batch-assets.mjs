// Fetch only missing authenticated assets. Existing files are reused.
import { readFileSync, writeFileSync, existsSync, copyFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
const headers = { 'User-Agent': 'CompassoPoliticoLocal/1.0 (educational catalogue)' };
const root = new URL('../public/', import.meta.url);
const original = JSON.parse(readFileSync('docs/evidencias/imagens-novas.json', 'utf8'));
const clean = s => (s ?? '').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').trim();
const files = [
  ['mario-soares','File:Mário Soares par Claude Truong-Ngoc 1978.png'],
  ['antonio-costa','File:António Costa 2017.jpg'],
  ['john-major','File:John Major 1993 (3).jpg'],
  ['margaret-thatcher','File:Margaret Thatcher stock portrait (cropped).jpg'],
  ['flag-uk','File:Flag of the United Kingdom.svg'],
  ['flag-germany','File:Flag of Germany.svg'],
  ['flag-nz','File:Flag of New Zealand.svg'],
  ['flag-taiwan','File:Flag of the Republic of China.svg'],
  ['flag-chile','File:Flag of Chile.svg'],
  ['flag-portugal','File:Flag of Portugal.svg']
];
const response = await fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata%7Csize&titles='+encodeURIComponent(files.map(x=>x[1]).join('|')), {headers});
if (!response.ok) throw new Error(`Commons ${response.status}`);
const data = await response.json();
const pages = Object.values(data.query.pages);
writeFileSync('.local-runtime/final-batch-image-metadata.json', JSON.stringify(data,null,2));
const assets = [];
mkdirSync(new URL('personalities/portraits/',root),{recursive:true});
mkdirSync(new URL('countries/flags/',root),{recursive:true});
for (const [id,title] of files) {
  const info=pages.find(p=>p.title===title)?.imageinfo?.[0];
  if(!info) throw new Error(`Missing Commons file: ${title}`);
  const license=clean(info.extmetadata.LicenseShortName?.value);
  if(!/^(CC|Public domain|PD|Copyrighted free use|Attribution)/.test(license)) throw new Error(`Review license: ${title} ${license}`);
  const flag=id.startsWith('flag-');
  const ext=flag?'svg':new URL(info.url).pathname.split('.').at(-1);
  const local=flag?`/catalogue-new/countries/${id}.${ext}`:`/personalities/portraits/${id}.${ext}`;
  const target=new URL(local.slice(1),root);
  if(!existsSync(target)) {
    await new Promise(resolve=>setTimeout(resolve,1500));
    let r=await fetch(info.url.split('?')[0],{headers,signal:AbortSignal.timeout(45000)});
    if(r.status===429){await new Promise(resolve=>setTimeout(resolve,15000));r=await fetch(info.url.split('?')[0],{headers,signal:AbortSignal.timeout(45000)});}
    if(!r.ok) throw new Error(`Download ${title}: ${r.status}`);
    writeFileSync(target,Buffer.from(await r.arrayBuffer()));
  }
  if(flag) await sharp(target.pathname.replace(/^\/(\w:)/,'$1')).resize({width:900}).png().toFile(new URL(`countries/flags/${id}.png`,root).pathname.replace(/^\/(\w:)/,'$1'));
  assets.push({id,fileTitle:title,source:info.descriptionurl,original:info.url.split('?')[0],artist:clean(info.extmetadata.Artist?.value),license,licenseUrl:clean(info.extmetadata.LicenseUrl?.value),date:clean(info.extmetadata.DateTimeOriginal?.value),width:info.width,height:info.height,local:flag?`/countries/flags/${id}.png`:local,treatment:flag?'Conversão SVG → PNG; conteúdo preservado.':'Original do Commons; apenas recorte CSS.',reviewed:'2026-10-07'});
}
for(const id of ['cavaco-silva','angela-merkel','jacinda-ardern','michelle-bachelet','tsai-ing-wen']) {
  const a=original.find(a=>a.id===id&&!a.error); if(!a)throw new Error(id);
  const local=`/personalities/portraits/${id}.${a.local.split('.').at(-1)}`;
  if(!existsSync(new URL(local.slice(1),root)))copyFileSync(new URL(a.local.slice(1),root),new URL(local.slice(1),root));
  assets.push({...a,local});
}
writeFileSync('docs/evidencias/imagens-lote-02.json',JSON.stringify(assets,null,2)+'\n');
console.log(`Assets ready: ${assets.length} (${assets.filter(a=>a.id.startsWith('flag-')).length} authentic flags, 9 portraits)`);
