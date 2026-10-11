// Cache authentic primary documents once. No political coordinates are generated.
import {existsSync,readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const folder='.local-runtime/source-text';mkdirSync(folder,{recursive:true});
const sources=[
 ['sirleaf-annual-2007','https://www.sirleaf.emansion.gov.lr/doc/annualmsg07.pdf','pdf'],
 ['arce-inaugural','https://hemeroteca.larazon.bo/nacional/2020/11/08/lea-el-discurso-de-posesion-completo-del-presidente-luis-arce/','html'],
 ['amlo-context','https://www.cidob.org/lider-politico/andres-manuel-lopez-obrador','html'],
 ['arce-context','https://www.cidob.org/lider-politico/luis-arce-catacora','html'],
 ['joko-context','https://www.cidob.org/lider-politico/joko-widodo','html'],
 ['imran-context','https://www.cidob.org/lider-politico/imran-khan','html'],
 ['marin-context','https://www.cidob.org/lider-politico/sanna-marin','html'],
 ['mahathir-context','https://www.cidob.org/lider-politico/mahathir-mohamad','html'],
 ['imran-2018','https://academiamag.com/wp-content/uploads/2018/07/PTI-Manifesto-2018.pdf','pdf'],
 ['arce-2020','https://www.laregion.bo/wp-content/uploads/2020/10/Programa_Gobierno_MAS-IPSP_EG_2020.pdf','pdf'],
 ['kim-rafto','https://www.rafto.no/assets/documents/Award-statements/Rafto-Prize-2000-Kim-Dae-jung.pdf','pdf'],
 ['marin-church','https://valtioneuvosto.fi/paatokset/paatos?decisionId=0900908f807c2a07','html'],
 ['sirleaf-2007','https://www.polity.org.za/article/liberia-johnson-sirleaf-annual-message-29012007-2007-01-29','html'],
 ['marin-2019','https://julkaisut.valtioneuvosto.fi/server/api/core/bitstreams/b88a95cb-46d1-4785-98c9-8919cc3df7b1/content','pdf'],
 ['mahathir-2018','https://dl.dapmalaysia.org/repository/Manifesto_PH_EN.pdf','pdf'],
 ['jokowi-2020','https://faolex.fao.org/docs/pdf/ins204723.pdf','pdf'],
 ['arias-2006','https://formatos.inamu.go.cr/SIDOC/archivosLibros/plan_nacional_obregon_636058506775696123.pdf','pdf'],
 ['nkrumah-plan','https://ndpc.gov.gh/media/Ghana_7_Year_Development_Plan_1963-4_1969-70_1964.pdf','pdf'],
 ['nkrumah-thought','https://sahistory.org.za/sites/default/files/archive-files/ama_biney_the_political_and_social_thought_of_kwbook4me.org_copy.pdf','pdf'],
 ['kim-1998','https://etheses.whiterose.ac.uk/id/eprint/14868/2/414684_vol2.pdf','pdf'],
 ['sirleaf-2006','https://liberiapastandpresent.org/JohnsonSirleaf/InauguralAddress.htm','html'],
 ['amlo-2019','https://sidof.segob.gob.mx/notas/docFuente/5565599','html'],
 ['marin-endorsement','https://valtioneuvosto.fi/en/-/speech-by-prime-minister-sanna-marin-to-the-president-of-the-republic-on-10-december-2019','html'],
 ['kim-nobel','https://www.nobelprize.org/prizes/peace/2000/dae-jung/lecture/','html'],
 ['sirleaf-nobel','https://www.nobelprize.org/prizes/peace/2011/johnson_sirleaf/lecture/','html']
];
await Promise.all(sources.map(async([id,url,type])=>{
 const path=`${folder}/${id}.${type==='pdf'?'pdf':'txt'}`;
 if(existsSync(path)){console.log(`${id}: cached`);return;}
 try{
  const r=await fetch(url,{signal:AbortSignal.timeout(60000),headers:{'User-Agent':'Mozilla/5.0 CompassoPoliticoResearch'}});
  if(!r.ok)throw Error(`HTTP ${r.status}`);
  const buffer=Buffer.from(await r.arrayBuffer());
  if(type==='pdf') {if(buffer.subarray(0,5).toString()!=='%PDF-')throw Error('Not a PDF');writeFileSync(path,buffer);}
  else {const html=buffer.toString('utf8');const text=html.replace(/<(script|style|nav|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<\/(p|div|h[1-6]|li|section|article|tr)>/gi,'\n').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/[ \t]+/g,' ').replace(/\n\s*\n/g,'\n').trim();writeFileSync(path,`${url}\nConsulted: 2026-10-10\n\n${text}\n`);}
  console.log(`${id}: ${buffer.length} bytes`);
 }catch(e){console.log(`${id}: ERROR ${e.message}`);}
}));
