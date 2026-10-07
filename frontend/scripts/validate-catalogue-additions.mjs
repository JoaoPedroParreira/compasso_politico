// Focused data validation for catalogue additions; does not rerun application tests.
import {readFileSync, existsSync, writeFileSync} from 'node:fs';
import {resolve, dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {AXIS_IDS, rank} from './profile-match.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const read=p=>JSON.parse(readFileSync(join(root,p),'utf8'));
const registry=read('frontend/scripts/catalogue-additions.json');
const evidence=read('frontend/scripts/profile-evidence.json');
const kinds={ideologies:['ideology-profiles.json','ideologyId'],personalities:['personality-profiles.json','personalityId'],countries:['countries-profiles.json','countryId']};
const report={checked:0,axes:0,images:0,counts:{},comparisons:[]};
for(const [kind,[file,key]] of Object.entries(kinds)) {
  const metadata=read(`backend/src/main/resources/data/${kind}.json`);
  const translations=read(`backend/src/main/resources/data/i18n/en/${kind}.json`);
  const profiles=read(`backend/src/main/resources/data/${file}`);
  const vectors=new Map(profiles.map(p=>[p[key],p.vector]));
  if(registry[kind].length!==10||new Set(registry[kind]).size!==10)throw Error(`${kind}: expected 10 unique additions`);
  report.counts[kind]={total:metadata.length,new:registry[kind].length};
  for(const id of registry[kind]) {
    const m=metadata.find(m=>m.id===id),r=evidence[id],v=vectors.get(id);
    if(!m||!translations.some(t=>t.id===id)||!r||r.axes.length!==12||r.sources.length<2)throw Error(`${id}: missing metadata, translation or evidence`);
    for(const axis of AXIS_IDS) {
      const a=r.axes.find(a=>a.id===axis);
      if(!a||a.value!==v[axis]||a.range[0]>a.value||a.range[1]<a.value||!a.pt||!a.en||!a.sources.length||a.sources.some(n=>!r.sources[n-1]?.url.startsWith('https://')))throw Error(`${id}/${axis}: invalid evidence`);
      report.axes++;
    }
    const path=m.imagePath||m.flagPath;
    if(path) {
      const image=await sharp(join(root,'frontend/public',path)).metadata();
      if(!image.width||!image.height||!r.image?.artist||!r.image?.license||!r.image?.source.startsWith('https://commons.wikimedia.org/'))throw Error(`${id}: invalid image provenance`);
      report.images++;
    }
    if(kind==='ideologies')for(const [target,ref] of [['countries',m.countryId],['personalities',m.personalityId]])if(!read(`backend/src/main/resources/data/${target}.json`).some(e=>e.id===ref))throw Error(`${id}: broken link`);
    for(const lang of ['','en/'])if(!existsSync(join(root,'frontend/dist',lang,kind,`${id}.html`)))throw Error(`${id}: missing generated ${lang||'pt/'} page`);
    const results=rank(v,metadata,item=>vectors.get(item.id));
    if(results[0].score!==100||!results.some(result=>result.item.id===id&&result.score===100))throw Error(`${id}: matching regression`);
    report.comparisons.push({kind,id,top:results[0].item.id,score:results[0].score});
    report.checked++;
  }
}
writeFileSync(join(root,'.local-runtime/catalogue-final-validation.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({profiles:report.checked,axes:report.axes,images:report.images,counts:report.counts,comparisons:report.comparisons.length}));
