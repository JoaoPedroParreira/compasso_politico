// Formatting only: political coordinates and reasons must be authored manually.
import {readFileSync} from 'node:fs';
import {AXIS_IDS} from '../profile-match.mjs';
export const S=(title,author,date,url,section)=>({title,author,date,url,section});
export const A=(value,sources,pt,en,margin=15)=>({value,sources,pt,en,confidence:'média',range:[Math.max(0,value-margin),Math.min(100,value+margin)]});
export function assemble(cohorts,{id,imageInventory,reviewed}){
 const assets=JSON.parse(readFileSync(new URL('../../../docs/evidencias/'+imageInventory,import.meta.url),'utf8'));
 const entries=[];
 for(const c of cohorts){
  const portrait=assets.find(a=>a.id===c.person),flag=assets.find(a=>a.id===c.flag);
  if(!portrait||!flag||c.rows.length!==12)throw Error('Incomplete cohort '+c.person);
  const image=(a,isFlag)=>({artist:a.artist,license:a.license,source:a.source,
   pt:`${isFlag?'Símbolo histórico/nacional autêntico.':'Retrato autêntico.'} ${a.treatment} Origem: ${a.artist}; ${a.license}. ${c.imageNote||''}`,
   en:`${isFlag?'Authentic historical/national symbol.':'Authentic portrait.'} ${isFlag?'Commons rendition; symbol preserved.':'Original Commons photograph; presentation crop only.'} Credit: ${a.artist}; ${a.license}. ${c.imageNoteEn||''}`});
  const review=(kind,img,overrides)=>({status:'reviewed',period:c.evidencePeriod,reviewed,independentReview:false,sources:c.sources,
   pt:{scope:kind==='ideologies'?`Variante contextual da corrente indicada: ${c.about}`:kind==='personalities'?`Recorte documental de ${c.name}: ${c.evidencePeriod}. Os programas usados são documentos apresentados, defendidos ou executados pelo respetivo chefe de governo; não uma atribuição por filiação partidária isolada.`:`Recorte histórico de ${c.countryName}: orientação programática e enquadramento institucional indicado nos eixos. Não representa as opiniões da população.`,
    limits:`${c.limits} Valores e intervalos são interpretações editoriais, não medições de crenças. Confiança média identifica compromissos e inferências contextuais. Proximidade numérica não significa equivalência ideológica. Revisão independente não realizada; dados herdados não auditados.`},
   en:{scope:kind==='ideologies'?`Contextual variant of the named tradition: ${c.aboutEn}`:kind==='personalities'?`Documentary assessment of ${c.name}: ${c.evidencePeriod}. Programmes are presented, advocated or implemented by the corresponding head of government; party membership alone is insufficient.`:`Historical assessment of ${c.countryEn}: programme and institutional qualifications specified in the axes. Does not represent public opinion.`,
    limits:`${c.limitsEn} Values and ranges are editorial interpretations, not belief measurements. Medium confidence identifies compromises and contextual inferences. Numerical proximity is not ideological equivalence. No independent review; inherited data remain unaudited.`},
   axes:c.rows.map((a,i)=>({id:AXIS_IDS[i],...(overrides?.[AXIS_IDS[i]]||a)})),...(img?{image:img}:{})});
  const pi=image(portrait,false),fi=image(flag,true);
  entries.push({kind:'ideologies',metadata:{id:c.ideology,name:c.ideologyName,category:c.category,description:c.about,phrase:c.phrase,vector:null,countryId:c.country,personalityId:c.person,religions:[]},translation:{id:c.ideology,name:c.ideologyEn,category:c.categoryEn,description:c.aboutEn,phrase:c.phraseEn},review:review('ideologies')});
  entries.push({kind:'personalities',metadata:{id:c.person,name:c.name,role:c.role,category:'politico',lifespan:c.lifespan,description:`${c.role}. ${c.about}`,imagePath:portrait.local,imageSourceName:`${portrait.artist} · ${portrait.license}`,imageSourceUrl:portrait.source,imageNote:pi.pt,religions:[]},translation:{id:c.person,name:c.name,role:c.roleEn,description:`${c.roleEn}. ${c.aboutEn}`,imageNote:pi.en},review:review('personalities',pi,c.personOverrides)});
  entries.push({kind:'countries',metadata:{id:c.country,name:c.countryName,category:c.countryCategory||'Governo · recorte programático',description:`${c.period}: ${c.about} Perfil histórico; não representa a situação atual ou a população.`,flagPath:flag.local,flagKind:'Bandeira nacional do período indicado',flagSourceName:'Wikimedia Commons',flagSourceUrl:flag.source,flagNote:fi.pt,historical:true,period:c.period,vector:null,religions:[]},translation:{id:c.country,name:c.countryEn,category:c.countryCategoryEn||'Government · programme assessment',description:`${c.period}: ${c.aboutEn} Historical assessment; does not represent the current situation or public opinion.`},review:review('countries',fi,c.countryOverrides)});
 }
 return {id,imageInventory,entries};
}
