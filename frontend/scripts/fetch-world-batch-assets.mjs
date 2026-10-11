import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import sharp from 'sharp';
const {files,metadata}=JSON.parse(readFileSync('.local-runtime/world-batch-assets-candidates.json','utf8'));
const pages=Object.values(metadata.query.pages),headers={'User-Agent':'CompassoPoliticoLocalResearch/1.0'};
const clean=s=>(s||'').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#\d+;/g,'').trim();
const inventory=[];
mkdirSync('frontend/public/catalogue-new/countries',{recursive:true});
for(const [id,title,name] of files){
 const page=pages.find(p=>p.title===title.replaceAll('_',' ')),i=page?.imageinfo?.[0];if(!i)throw Error(`Missing file ${title}`);
 const e=i.extmetadata,license=clean(e.LicenseShortName?.value);
 if(!/^(CC|Public domain|OGL|KOGL)/.test(license))throw Error(`Unsupported licence ${id}: ${license}`);
 const flag=id.startsWith('flag-'),extension=flag?'svg':new URL(i.url).pathname.split('.').at(-1);
 const originalLocal=flag?`/catalogue-new/countries/${id}.svg`:`/personalities/portraits/${id}.${extension}`;
 const target='frontend/public'+originalLocal;
 const suppliedPng=flag && existsSync(`frontend/public/countries/flags/${id}.png`) && !existsSync(target);
 if(!existsSync(target)&&!suppliedPng){
  await new Promise(r=>setTimeout(r,700));let response;
  for(let attempt=0;attempt<3;attempt++){
   response=await fetch(i.url,{headers,signal:AbortSignal.timeout(45000)});
   if(response.status!==429)break;
   await new Promise(r=>setTimeout(r,10000));
  }
  if(!response.ok)throw Error(`${id}: HTTP ${response.status}`);
  writeFileSync(target,Buffer.from(await response.arrayBuffer()));
 }
 const local=flag?`/countries/flags/${id}.png`:originalLocal;
 if(flag&&!existsSync('frontend/public'+local))await sharp(target).resize({width:900}).png().toFile('frontend/public'+local);
 if(!flag&&Math.max(i.width,i.height)<800)throw Error(`${id}: inadequate portrait resolution`);
 inventory.push({id,name,fileTitle:page.title,source:i.descriptionurl,original:i.url,artist:clean(e.Artist?.value)||'Autor não indicado na página; ver histórico do ficheiro',license,licenseUrl:clean(e.LicenseUrl?.value),date:clean(e.DateTimeOriginal?.value)||'Data não indicada na página',width:i.width,height:i.height,local,treatment:suppliedPng?'PNG de 960 px fornecido pelo Commons a partir do SVG original; símbolo preservado.':flag?'Conversão SVG para PNG; símbolo preservado.':'Ficheiro original do Commons; recorte de apresentação CSS.',reviewed:'2026-10-10'});
 console.log(`${id}: ${license}, ${i.width}x${i.height}`);
}
writeFileSync('docs/evidencias/imagens-lote-03.json',JSON.stringify(inventory,null,2)+'\n');
console.log('Ready: 10 authentic portraits and 10 flags');
