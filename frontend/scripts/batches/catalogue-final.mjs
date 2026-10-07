// Manually reviewed evidence. Labels with a leader/year identify contextual
// variants of real political traditions, not newly invented universal doctrines.
import { readFileSync } from 'node:fs';
import { AXIS_IDS } from '../profile-match.mjs';
const assets = JSON.parse(readFileSync(new URL('../../../docs/evidencias/imagens-lote-02.json',import.meta.url),'utf8'));
const S = (title,author,date,url,section) => ({title,author,date,url,section});
const A = (value,refs,pt,en,confidence='média',margin=15) => ({value,sources:refs,pt,en,confidence,range:[Math.max(0,value-margin),Math.min(100,value+margin)]});
const cohorts = [
  {
    person:'margaret-thatcher',name:'Margaret Thatcher',lifespan:'1925–2013',role:'Primeira-ministra do Reino Unido (1979–1990)',roleEn:'Prime Minister of the United Kingdom (1979–1990)',
    ideology:'thatcherismo',ideologyName:'Thatcherismo',ideologyEn:'Thatcherism',category:'Direita',categoryEn:'Right',
    country:'reino-unido-thatcher',countryName:'Reino Unido — governo Thatcher',countryEn:'United Kingdom — Thatcher government',flag:'flag-uk',period:'1979–1990',evidencePeriod:'1978–1979; ciência e ambiente em 1988',
    about:'Conservadorismo liberal na economia: privatização, concorrência, ordem pública, defesa militar e responsabilidade familiar. O recorte usa propostas de 1978–1979 e o discurso científico e ambiental de 1988.',
    aboutEn:'Economic liberal conservatism: privatisation, competition, law and order, military defence and family responsibility. This assessment uses 1978–1979 proposals and the 1988 science and environment speech.',
    phrase:'Quero mercados competitivos, responsabilidade individual e um Estado firme na segurança e na defesa.',phraseEn:'I want competitive markets, individual responsibility and firm public security and defence.',
    limits:'Recorte documental, não uma média de todos os governos de 1979–1990. A defesa nuclear não significa apoio a qualquer guerra. Serviços públicos coexistem com privatizações; não se presume ausência de regulação. O discurso ambiental de 1988 complementa o programa de 1979.',
    limitsEn:'A documentary selection, not an average of all 1979–1990 governments. Nuclear deterrence does not mean support for every war. Public services coexist with privatisation; regulation is not presumed absent. The 1988 environmental speech supplements the 1979 programme.',
    sources:[
      S('Conservative General Election Manifesto 1979','Conservative Party; prefácio subscrito por Margaret Thatcher','1979-04-11','https://www.margaretthatcher.org/document/110858','Supremacy of Parliament; Immigration; Deterring the criminal; Improving our defences; Nationalisation; Industry; Fair trade; Helping the family'),
      S('I Believe: A Speech on Christianity and Politics','Margaret Thatcher','1978-03-30','https://www.margaretthatcher.org/document/103522','fé pública, ensino e responsabilidade individual'),
      S('Speech to the Royal Society','Margaret Thatcher','1988-09-27','https://www.margaretthatcher.org/document/107346','Basic science; The environment'),
      S('How Thatcher transformed British politics','Terrence Casey / LSE British Politics','2025-02-17','https://blogs.lse.ac.uk/politicsandpolicy/how-thatcher-transformed-british-politics/','ruptura com o consenso económico do pós-guerra; artigo, não o livro referido'),
      S('History of Baroness Thatcher','Governo britânico','s.d.','https://www.gov.uk/government/history/past-prime-ministers/margaret-thatcher','biografia, datas e privatizações; avaliação institucional')
    ],
    rows:[
      A(20,[1],'União parlamentar mantida; autonomia local sem federação.','Parliamentary union retained; local autonomy without a federation.'),
      A(90,[1],'Parlamento e eleições competitivas como fundamento do governo.','Parliament and competitive elections underpin government.','alta',10),
      A(70,[1],'Penas e poderes policiais reforçados, com garantias legais.','Stronger penalties and policing, alongside legal safeguards.'),
      A(80,[1],'Entrada restrita e integração linguística; igualdade jurídica reconhecida.','Restricted entry and linguistic integration; legal equality recognised.'),
      A(80,[1],'NATO, modernização militar e dissuasão nuclear.','NATO, military modernisation and nuclear deterrence.'),
      A(30,[1],'Interesses britânicos defendidos assertivamente, com cooperação europeia.','Assertive defence of British interests alongside European cooperation.'),
      A(20,[1,4,5],'Reversão das nacionalizações; manutenção de serviços públicos.','Reversing nationalisation while retaining public services.','alta',10),
      A(20,[1,4],'Concorrência e redução da intervenção económica.','Competition and reduced economic intervention.','alta',10),
      A(30,[1],'Comércio aberto com salvaguardas antidumping e setoriais.','Open trade with anti-dumping and sectoral safeguards.'),
      A(30,[2],'Cristianismo explicitamente ligado ao ensino e à moral pública.','Christianity explicitly linked to education and public morality.'),
      A(30,[1,2],'Responsabilidade familiar e continuidade dos costumes.','Family responsibility and continuity of social customs.'),
      A(70,[3],'Investigação e aplicação industrial com precaução ambiental.','Research and industrial applications alongside environmental precaution.')
    ]
  },
  {
    person:'john-major',name:'John Major',lifespan:'1943–',role:'Primeiro-ministro do Reino Unido (1990–1997)',roleEn:'Prime Minister of the United Kingdom (1990–1997)',
    ideology:'conservadorismo-civico-major',ideologyName:'Conservadorismo cívico — Major (1992)',ideologyEn:'Civic conservatism — Major (1992)',category:'Direita',categoryEn:'Right',
    country:'reino-unido-major',countryName:'Reino Unido — governo Major',countryEn:'United Kingdom — Major government',flag:'flag-uk',period:'1992–1997',evidencePeriod:'Programa eleitoral de 1992',
    about:'Variante conservadora do programa subscrito por John Major em 1992: propriedade privada e impostos baixos, serviços públicos responsáveis perante o cidadão, União britânica, integração europeia e valores familiares.',
    aboutEn:'The conservative variant in John Major’s endorsed 1992 programme: private ownership and low taxes, public services accountable to citizens, the British Union, European integration and family values.',
    phrase:'Quero propriedade privada e impostos baixos, com serviços públicos responsáveis e uma sociedade de oportunidades.',phraseEn:'I want private ownership and low taxes, accountable public services and a society of opportunity.',
    limits:'Mede compromissos de 1992, não o cumprimento integral do mandato. O abandono do mecanismo cambial em setembro de 1992 mostra que o programa e a prática divergiram. Conservadorismo cívico é um rótulo descritivo deste perfil contextual. As garantias antidiscriminação coexistem com controlo migratório.',
    limitsEn:'Measures 1992 commitments, not full implementation. Leaving the exchange-rate mechanism in September 1992 illustrates a programme–practice divergence. Civic conservatism is a descriptive label for this contextual profile. Anti-discrimination safeguards coexist with immigration controls.',
    sources:[
      S('Conservative Party Manifesto 1992 — The Best Future for Britain','Conservative Party; prefácio assinado por John Major','1992-03; arquivo datado 1992-04-09','https://johnmajorarchive.org.uk/1992/04/conservative-party-manifesto-9-april-1992/','Foreword; Armed forces; European Community; Wealth and ownership; Community relations; Immigration; Schools; Legal system; Science; United Kingdom'),
      S('History of The Rt Hon Sir John Major','Governo britânico','s.d.','https://www.gov.uk/government/history/past-prime-ministers/john-major','datas, processo de paz e abandono do mecanismo cambial'),
      S('Why John Major’s premiership deserves more credit than it is usually given','Kevin Hickson / LSE British Politics','2017','https://blogs.lse.ac.uk/politicsandpolicy/why-john-majors-premiership-deserves-more-credit-than-it-is-usually-given/','eleição de 1992, instabilidade económica e disputas europeias; artigo consultado')
    ],
    rows:[
      A(20,[1],'Defesa da União e rejeição das assembleias separatistas propostas.','Defending the Union and rejecting proposed separatist assemblies.'),
      A(90,[1],'Eleições parlamentares, prestação de contas e escolha do cidadão.','Parliamentary elections, accountability and citizen choice.','alta',10),
      A(70,[1],'Combate ao crime e terrorismo; proteção da privacidade também prevista.','Crime and terrorism enforcement alongside privacy protections.'),
      A(60,[1],'Controlo de entradas e apoio ao inglês, com igualdade racial e asilo.','Entry controls and English-language support alongside racial equality and asylum.', 'média',20),
      A(70,[1],'Dissuasão nuclear e forças NATO; controlo de armamentos igualmente apoiado.','Nuclear deterrence and NATO forces; arms control also supported.'),
      A(30,[1],'Papel internacional ativo, incluindo operações autorizadas pela ONU.','An active international role including UN-authorised operations.'),
      A(20,[1],'Privatizações e propriedade difundida; NHS público preservado.','Privatisation and wider ownership while retaining a public NHS.','alta',10),
      A(20,[1],'Mecanismos de mercado, desregulação e incentivos fiscais.','Market mechanisms, deregulation and tax incentives.','alta',10),
      A(20,[1],'Mercado único europeu e liberalização do comércio mundial.','European single market and global trade liberalisation.'),
      A(30,[1],'Parceria entre Estado e igrejas no ensino expressamente reforçada.','Explicitly strengthening the state–church education partnership.'),
      A(40,[1],'Casamento e responsabilidade parental, com oportunidades para mulheres.','Marriage and parental responsibility alongside opportunities for women.'),
      A(80,[1],'Ciência, inovação industrial e tecnologias escolares, com proteção ambiental.','Science, industrial innovation and school technology alongside environmental safeguards.')
    ]
  },
  {
    person:'angela-merkel',name:'Angela Merkel',lifespan:'1954–',role:'Chanceler da Alemanha (2005–2021)',roleEn:'Chancellor of Germany (2005–2021)',
    ideology:'democracia-crista-merkel',ideologyName:'Democracia cristã pragmática — Merkel (2018)',ideologyEn:'Pragmatic Christian democracy — Merkel (2018)',category:'Centro',categoryEn:'Center',
    country:'alemanha-merkel-iv',countryName:'Alemanha — quarto governo Merkel',countryEn:'Germany — fourth Merkel government',flag:'flag-germany',period:'2018–2021',evidencePeriod:'Declarações de 2018; contraponto individual de 2017',
    about:'Orientação apresentada por Merkel à Grande Coligação CDU/CSU–SPD em 2018: economia social de mercado, cooperação federal, integração europeia, modernização científica e integração cultural. Não representa toda a democracia cristã.',
    aboutEn:'Merkel’s stated orientation for the 2018 CDU/CSU–SPD Grand Coalition: a social market economy, federal cooperation, European integration, scientific modernisation and cultural integration. Not all Christian democracy.',
    phrase:'Quero uma economia social de mercado e cooperação europeia, com segurança, integração e inovação.',phraseEn:'I want a social market economy and European cooperation, with security, integration and innovation.',
    limits:'O programa resulta de uma coligação, não apenas da CDU. A igualdade entre mulheres e homens defendida em 2018 não apaga o voto de Merkel contra o casamento entre pessoas do mesmo sexo em 2017. A relação entre laicidade e cooperação com igrejas é modelada como compromisso, sem inferir posições da sua fé pessoal.',
    limitsEn:'The programme belongs to a coalition, not just the CDU. Support for gender equality in 2018 does not erase Merkel’s vote against same-sex marriage in 2017. Secularism and cooperation with churches are modelled as a documented compromise, without inferring policies from her personal faith.',
    sources:[
      S('Regierungserklärung von Bundeskanzlerin Merkel','Angela Merkel / Governo federal alemão','2018-03-21','https://www.bundesregierung.de/breg-de/aktuelles/regierungserklaerung-von-bundeskanzlerin-merkel-862354','cooperação Bund–Länder; integração, segurança, religião, economia social de mercado, comércio, NATO e inovação'),
      S('Angela Merkel — biografia','Roberto Ortiz de Zárate / CIDOB','2013; nota de atualização dos mandatos','https://www.cidob.org/lider-politico/angela-merkel','enquadramento centrista, coligações; nota sobre quarto governo em 2018; datas'),
      S('Merkel’s Fourth Term','John Ryan / LSE IDEAS','2018','https://www.lse.ac.uk/ideas/publications/old-updates/merkel','apenas resumo publicado na página consultado: eleição de 2017 e vitória condicionada; PDF não consultado'),
      S('Rede zum 100. Jahrestag der Einführung des Frauenwahlrechts','Angela Merkel / Governo federal alemão','2018-11-12','https://www.bundesregierung.de/breg-de/service/newsletter-und-abos/bulletin/rede-von-bundeskanzlerin-dr-angela-merkel-1556736','igualdade, participação feminina e divisão das responsabilidades'),
      S('Eheschließung für Personen gleichen Geschlechts — votação nominal','Deutscher Bundestag','2017-06-30','https://dserver.bundestag.de/btp/18/18244.pdf','p. impressa 25119 (PDF p. 21), votação nominal: Dr. Angela Merkel na lista Nein; contraponto individual')
    ],
    rows:[
      A(80,[1],'Federação e cooperação entre governo central, Länder e municípios.','Federation and cooperation between central government, Länder and municipalities.'),
      A(90,[1,2],'Mandato parlamentar de coligação e compromisso com o Estado de direito.','A parliamentary coalition mandate and commitment to the rule of law.','alta',10),
      A(60,[1],'Mais polícia e segurança, equilibradas com soberania pessoal sobre dados.','More policing and security balanced against personal control of data.', 'média',20),
      A(40,[1],'Pluralidade religiosa e antirracismo, com língua, integração e controlo de fronteiras.','Religious plurality and anti-racism alongside language, integration and border controls.', 'média',20),
      A(60,[1],'Reforço da Bundeswehr/NATO junto de diplomacia e ajuda ao desenvolvimento.','Strengthening the Bundeswehr/NATO alongside diplomacy and development aid.', 'média',20),
      A(50,[1],'Responsabilidade externa europeia e diplomática; oposição à violência sobre civis.','European external responsibility and diplomacy; opposition to violence against civilians.', 'média',20),
      A(40,[1],'Propriedade e concorrência na economia social de mercado, com proteção social.','Property and competition in a social market economy alongside social protection.'),
      A(50,[1],'Mercados concorrenciais com regras públicas e investimento estratégico.','Competitive markets alongside public rules and strategic investment.'),
      A(20,[1],'Integração europeia e rejeição do isolamento económico.','European integration and rejection of economic isolation.'),
      A(50,[1],'Liberdade religiosa e contratos Estado–igrejas; inclusão institucional do Islão.','Religious freedom and state–church agreements; institutional inclusion of Islam.'),
      A(60,[1,4],'Igualdade de género e apoio a famílias; não implica unanimidade sobre costumes.','Gender equality and family support; does not imply uniform progressive social views.', 'média',20),
      A(80,[1],'Investigação, digitalização e inteligência artificial, com transição energética.','Research, digitisation and artificial intelligence alongside an energy transition.')
    ],
    personOverrides:{moral:A(50,[4,5],'Igualdade de género defendida em 2018; voto individual contra casamento igualitário em 2017.','Gender equality advocated in 2018; an individual vote against same-sex marriage in 2017.', 'média',20)}
  },
  {
    person:'jacinda-ardern',name:'Jacinda Ardern',lifespan:'1980–',role:'Primeira-ministra da Nova Zelândia (2017–2023)',roleEn:'Prime Minister of New Zealand (2017–2023)',
    ideology:'social-democracia-bem-estar-ardern',ideologyName:'Social-democracia do bem-estar — Ardern',ideologyEn:'Wellbeing social democracy — Ardern',category:'Esquerda',categoryEn:'Left',
    country:'nova-zelandia-ardern-i',countryName:'Nova Zelândia — primeiro governo Ardern',countryEn:'New Zealand — first Ardern government',flag:'flag-nz',period:'2017–2020',evidencePeriod:'2018–2019',
    about:'Variante social-democrata apresentada por Ardern em 2018–2019: orçamento orientado ao bem-estar, serviços públicos, inovação privada, comércio internacional e parceria com os Māori. Programa de coligação, não socialização integral da economia.',
    aboutEn:'Ardern’s stated 2018–2019 social-democratic variant: a wellbeing budget, public services, private innovation, international trade and partnership with Māori. A coalition programme, not full economic socialisation.',
    phrase:'Quero medir o progresso pelo bem-estar, com serviços públicos fortes, inclusão e uma economia inovadora.',phraseEn:'I want progress measured through wellbeing, strong public services, inclusion and an innovative economy.',
    limits:'O governo incluía New Zealand First e apoio dos Verdes. Pluralismo cultural e asilo não significam entradas ilimitadas: a campanha também propunha reduzir imigração. Não extrapolar o programa de 2018–2019 para as restrições sanitárias de 2020 ou para toda a carreira.',
    limitsEn:'The government included New Zealand First and Green support. Cultural pluralism and asylum do not mean unrestricted entry: the campaign also proposed reducing immigration. Do not extrapolate the 2018–2019 programme to 2020 health restrictions or her entire career.',
    sources:[
      S('Our Plan for a modern and prosperous New Zealand','Jacinda Ardern / Beehive','2018-09-16','https://www.beehive.govt.nz/speech/our-plan-modern-and-prosperous-new-zealand','governo MMP; infraestrutura, crescimento regional, inovação, CPTPP, bem-estar, polícia/reabilitação e parceria Māori'),
      S('Jacinda Ardern — biografia','Roberto Ortiz de Zárate / CIDOB','2017-11-03; nota posterior de mandatos','https://www.cidob.org/lider-politico/jacinda-ardern','social-democracia, direitos sociais, coligação e propostas de limitação da imigração'),
      S('Prime Minister’s speech at the National Remembrance Service','Jacinda Ardern / Beehive','2019-03-29','https://www.beehive.govt.nz/release/prime-minister%E2%80%99s-speech-national-remembrance-service','pluralidade, comunidade muçulmana e liberdade de exercer a religião'),
      S('New Zealand National Statement to United Nations General Assembly','Jacinda Ardern / Beehive','2018-09-28','https://www.beehive.govt.nz/speech/new-zealand-national-statement-united-nations-general-assembly','multilateralismo, desarmamento nuclear, cooperação internacional e participação comercial')
    ],
    rows:[
      A(40,[1],'Governo nacional com investimento regional e parceria Māori; não federação.','National government with regional investment and Māori partnership; not a federation.'),
      A(90,[1,2],'Pluralismo parlamentar MMP e negociação entre partidos.','MMP parliamentary pluralism and negotiation among parties.','alta',10),
      A(50,[1],'Mais 1800 polícias, mas prevenção, reabilitação e redução da população prisional.','1800 more police alongside prevention, rehabilitation and a smaller prison population.'),
      A(30,[1,2,3],'Pluralidade cultural e parceria Māori; controlo das entradas também defendido.','Cultural plurality and Māori partnership alongside proposed entry controls.', 'média',20),
      A(30,[4],'Desarmamento nuclear e multilateralismo; sem pressupor extinção das forças armadas.','Nuclear disarmament and multilateralism; not abolition of armed forces.'),
      A(70,[4],'Ação multilateral e solidária, em vez de isolamento ou imposição territorial.','Multilateral solidarity rather than isolation or territorial imposition.'),
      A(60,[1],'Investimento em saúde, educação e infraestrutura públicas com empresas privadas.','Public health, education and infrastructure investment alongside private business.'),
      A(60,[1],'Orçamento de bem-estar, fundos estratégicos e concertação com empresas.','A wellbeing budget, strategic funds and cooperation with business.'),
      A(30,[1,4],'CPTPP e novos acordos comerciais, com salvaguardas sociais.','CPTPP and new trade agreements alongside social safeguards.'),
      A(70,[3],'Liberdade para todas as crenças; rejeição do extremismo religioso.','Freedom for all beliefs; rejection of religious extremism.'),
      A(80,[1,2],'Igualdade salarial, feminismo e direitos civis.','Pay equality, feminism and civil rights.'),
      A(70,[1],'I&D e formação tecnológica combinadas com proteção da biodiversidade.','R&D and technological training combined with biodiversity protection.')
    ]
  },
  {
    person:'tsai-ing-wen',name:'Tsai Ing-wen',lifespan:'1956–',role:'Presidente de Taiwan (2016–2024)',roleEn:'President of Taiwan (2016–2024)',
    ideology:'progressismo-taiwanes-tsai',ideologyName:'Progressismo taiwanês — Tsai',ideologyEn:'Taiwanese progressivism — Tsai',category:'Centro',categoryEn:'Center',
    country:'taiwan-tsai-i',countryName:'Taiwan — primeiro governo Tsai',countryEn:'Taiwan — first Tsai government',flag:'flag-taiwan',period:'2016–2020',evidencePeriod:'2016–2019',
    about:'Orientação liberal e progressista declarada por Tsai no primeiro mandato: democracia, justiça de transição, direitos indígenas, modernização produtiva, comércio diversificado e defesa de Taiwan sem procurar guerra.',
    aboutEn:'Tsai’s stated liberal and progressive first-term orientation: democracy, transitional justice, indigenous rights, productive modernisation, diversified trade and defending Taiwan without seeking war.',
    phrase:'Quero uma democracia pluralista, direitos iguais, inovação e uma defesa que preserve a paz.',phraseEn:'I want a pluralist democracy, equal rights, innovation and defence that preserves peace.',
    limits:'Taiwan designa aqui o território governado pela República da China; não uma resolução da disputa de soberania. A defesa do autogoverno não é modelada como expansionismo. Usar apenas acontecimentos do primeiro mandato na cronologia oficial, sem importar reformas de 2020–2024.',
    limitsEn:'Taiwan here means the territory governed by the Republic of China, not a resolution of the sovereignty dispute. Defending self-government is not modelled as expansionism. Only first-term events from the official chronology are used; 2020–2024 reforms are not imported.',
    sources:[
      S('Inaugural address of ROC 14th-term President Tsai Ing-wen','Tsai Ing-wen / Presidência de Taiwan','2016-05-20','https://english.president.gov.tw/NEWS/4893','reforma económica, justiça, culturas indígenas, relações através do Estreito e cooperação internacional'),
      S('Tsai Ing-wen — biografia','Roberto Ortiz de Zárate / CIDOB','2016; versão consultada 2026-10-07','https://www.cidob.org/lider-politico/tsai-ing-wen','centro liberal, soberania e manutenção do statu quo'),
      S('President Tsai delivers 2017 National Day Address','Tsai Ing-wen / Presidência de Taiwan','2017-10-10','https://english.president.gov.tw/NEWS/5231','reforço militar e afirmação expressa de que não procura guerra'),
      S('Taiwan International Religious Freedom Forum — remarks','Tsai Ing-wen / Presidência de Taiwan','2019-05-30','https://english.president.gov.tw/News/5745','liberdade religiosa e igualdade entre crenças'),
      S('President Tsai interviewed by AFP','Tsai Ing-wen; entrevista AFP publicada pela Presidência','2018-06-26','https://english.president.gov.tw/News/5436','casamento igualitário, proteção da democracia, energia e reformas'),
      S('Tsai Ing-wen — chronology of presidential terms','Presidência de Taiwan','s.d.','https://english.president.gov.tw/Page/646','apenas eventos 2016–2019: lei das línguas nacionais; promulgação do casamento igualitário em 2019-05-22')
    ],
    rows:[
      A(40,[1],'Ordem constitucional nacional com autonomia indígena progressiva.','A national constitutional order alongside progressive indigenous autonomy.'),
      A(90,[1,2],'Alternância eleitoral, participação pública e rejeição do autoritarismo.','Electoral transitions, public participation and rejection of authoritarianism.','alta',10),
      A(30,[1,5],'Reforma judicial e justiça de transição centradas nos direitos.','Judicial reform and transitional justice centred on rights.'),
      A(20,[1,6],'Reconhecimento das culturas e línguas indígenas; não prova fronteiras abertas.','Recognition of indigenous cultures and languages; not evidence of open borders.'),
      A(50,[3],'Reforço da capacidade militar combinado com recusa de procurar guerra.','Stronger military capabilities combined with explicitly not seeking war.'),
      A(60,[1,2,3],'Autogoverno e statu quo defendidos por diálogo; sem expansão territorial proposta.','Self-government and the status quo defended through dialogue; no proposed territorial expansion.', 'média',20),
      A(40,[1],'Economia empresarial com proteção laboral e serviços sociais.','A business economy alongside labour protection and social services.'),
      A(60,[1],'Política ativa para cinco indústrias inovadoras e coordenação interministerial.','An active five-industry innovation policy and interministerial coordination.'),
      A(20,[1],'TPP/RCEP propostos e diversificação dos parceiros comerciais.','Proposed TPP/RCEP engagement and diversification of trading partners.'),
      A(80,[4],'Igualdade entre crenças e oposição à perseguição religiosa.','Equal treatment of beliefs and opposition to religious persecution.'),
      A(80,[1,5,6],'Justiça de transição e casamento igualitário promulgado em 2019.','Transitional justice and same-sex marriage promulgated in 2019.'),
      A(80,[1,3,5],'Indústrias inovadoras, tecnologia de defesa e energias renováveis.','Innovative industries, defence technology and renewable energy.')
    ]
  },
  {
    person:'michelle-bachelet',name:'Michelle Bachelet',lifespan:'1951–',role:'Presidente do Chile (2006–2010; 2014–2018)',roleEn:'President of Chile (2006–2010; 2014–2018)',
    ideology:'social-democracia-bachelet',ideologyName:'Social-democracia reformista — Bachelet (2014)',ideologyEn:'Reformist social democracy — Bachelet (2014)',category:'Esquerda',categoryEn:'Left',
    country:'chile-bachelet-ii',countryName:'Chile — segundo governo Bachelet',countryEn:'Chile — second Bachelet government',flag:'flag-chile',period:'2014–2018',evidencePeriod:'Programa de governo 2014–2018',
    about:'Reformismo social-democrata do programa apresentado por Bachelet para 2014–2018: educação pública, reforma fiscal e constitucional, direitos das mulheres e povos indígenas, economia mista e cooperação regional.',
    aboutEn:'Social-democratic reformism in Bachelet’s stated 2014–2018 programme: public education, tax and constitutional reform, women’s and indigenous rights, a mixed economy and regional cooperation.',
    phrase:'Quero reduzir desigualdades com serviços públicos, reformas democráticas e igualdade de direitos.',phraseEn:'I want to reduce inequality through public services, democratic reform and equal rights.',
    limits:'O vetor representa propostas, não o êxito ou cumprimento integral das reformas. Não transferir a avaliação de mercado do primeiro mandato para o segundo sem considerar as mudanças propostas. A defesa e as empresas privadas permanecem no programa; não é comunismo ou pacifismo absoluto.',
    limitsEn:'Coordinates represent proposals, not their success or full implementation. Do not transfer first-term market assessments to the second term without considering the proposed changes. Armed forces and private business remain in the programme; it is neither communism nor absolute pacifism.',
    sources:[
      S('Programa de Gobierno Michelle Bachelet 2014–2018','Michelle Bachelet e equipa programática; arquivo SUBDERE','2013','https://www.subdere.gov.cl/sites/default/files/noticias/archivos/programamb_1_0.pdf','PDF consultado: prefácio; pp. impressas 28–37, 48–57, 100–117, 148–155, 162–177; numeração PDF +2'),
      S('Michelle Bachelet Jeria — biografia','Roberto Ortiz de Zárate / CIDOB','2013-12-16; nota posterior de mandatos','https://www.cidob.org/lider-politico/michelle-bachelet-jeria','mandatos, reformismo, primeiro mandato de mercado e agenda de direitos')
    ],
    rows:[
      A(50,[1],'Transferência de competências e recursos regionais; não se propõe uma federação.','Transferring regional powers and resources; not proposing a federation.', 'média',20),
      A(90,[1],'Constituição com consenso democrático e participação cidadã.','A constitution grounded in democratic consensus and citizen participation.','alta',10),
      A(40,[1],'Direitos humanos e reforma antiterrorista, com prevenção e segurança cidadã.','Human rights and anti-terrorism reform alongside prevention and public security.'),
      A(20,[1],'Inclusão dos migrantes e direitos culturais dos povos indígenas.','Migrant inclusion and indigenous peoples’ cultural rights.'),
      A(40,[1],'Defesa sob controlo civil e comunidade regional de segurança orientada à paz.','Civilian-controlled defence and a regional security community aimed at peace.'),
      A(70,[1],'Diálogo com vizinhos e instituições multilaterais; não imposição territorial.','Dialogue with neighbours and multilateral institutions, rather than territorial imposition.'),
      A(60,[1],'Educação e saúde públicas, domínio público mineiro e propriedade privada garantida.','Public education and health, public mineral ownership and protected private property.'),
      A(60,[1],'Planeamento territorial e política produtiva com cooperação público-privada.','Territorial planning and productive policy with public–private cooperation.'),
      A(30,[1],'Integração comercial e tratados, com revisão cautelosa dos termos do TPP.','Trade integration and agreements alongside cautious review of TPP terms.'),
      A(80,[1],'Constituição laica e igualdade de tratamento para todas as igrejas.','A secular constitution and equal treatment for all churches.'),
      A(80,[1],'Direitos reprodutivos, igualdade de género e diversidade sexual.','Reproductive rights, gender equality and sexual diversity.'),
      A(70,[1],'Inovação e desenvolvimento científico condicionados por proteção ambiental.','Innovation and scientific development subject to environmental protection.')
    ]
  },
  {
    person:'mario-soares',name:'Mário Soares',lifespan:'1924–2017',role:'Primeiro-ministro e Presidente de Portugal',roleEn:'Prime Minister and President of Portugal',
    ideology:'socialismo-democratico-soares',ideologyName:'Socialismo democrático — Soares (1976)',ideologyEn:'Democratic socialism — Soares (1976)',category:'Esquerda',categoryEn:'Left',
    country:'portugal-soares-i',countryName:'Portugal — primeiro governo Soares',countryEn:'Portugal — first Soares government',flag:'flag-portugal',period:'1976–1978',evidencePeriod:'Programa do I Governo Constitucional, 1976',
    about:'Orientação socialista democrática defendida pelo governo de Soares em 1976: eleições livres, economia mista com setores nacionalizados e planeamento, reformas dos direitos familiares, autonomia regional e abertura europeia.',
    aboutEn:'The democratic socialist orientation advocated by Soares’s 1976 government: free elections, a planned mixed economy with nationalised sectors, family-rights reform, regional autonomy and engagement with Europe.',
    phrase:'Quero construir o socialismo por eleições livres, com uma economia mista e garantias de liberdade.',phraseEn:'I want socialism pursued through free elections, a mixed economy and safeguards for liberty.',
    limits:'Não representa a presidência de 1986–1996 nem os governos de 1983–1985. O eixo cultural usa a defesa das comunidades emigrantes e da sua cultura, uma inferência contextual explicitada, não uma alegação sobre fronteiras abertas. A Constituição de 1976 mantinha participação militar na soberania; o perfil do governo assinala essa restrição.',
    limitsEn:'Does not represent the 1986–1996 presidency or the 1983–1985 governments. The cultural axis uses protection of emigrant communities and their culture: an explicit contextual inference, not a claim of open borders. The 1976 Constitution retained military participation in sovereignty; the government profile records this constraint.',
    sources:[
      S('Programa do I Governo Constitucional','I Governo Constitucional, dirigido por Mário Soares','1976','https://www.historico.portugal.gov.pt/media/464012/GC01.pdf','PDF consultado: pp. 5–9, 24–31, 55, 85–90, 97–105, 124–132; apresentação e compromissos governamentais'),
      S('Biografia de Mário Soares','Fundação Mário Soares e Maria Barroso','s.d.','https://fmsoaresbarroso.pt/mario-soares/biografia','datas, primeiros governos constitucionais e defesa democrática; fonte ligada à personalidade'),
      S('Constituição da República Portuguesa — texto originário','Assembleia Constituinte / arquivo da Assembleia da República','1976-04-02','https://www.parlamento.pt/Parlamento/Documents/CRP1976.pdf','artigos 2–3, 6–7, 13–15, 41–43: pluralismo, Conselho da Revolução, autonomia e liberdades'),
      S('As legislaturas da Assembleia da República — I Legislatura','Assembleia da República','s.d.','https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art4.html','primeira Assembleia de 1976 e passagem ao II Governo em janeiro de 1978')
    ],
    rows:[
      A(40,[1,3],'Estado unitário com autonomia regional e participação autárquica.','A unitary state with regional autonomy and local participation.'),
      A(90,[1],'Opção socialista subordinada expressamente a eleições livres e ao pluralismo.','Socialist choices expressly subject to free elections and pluralism.','alta',10),
      A(30,[1],'Liberdade de imprensa e oposição a purgas e discriminação ideológica.','Press freedom and opposition to purges and ideological discrimination.'),
      A(40,[1,3],'Preservação cultural das comunidades emigrantes e igualdade laboral; inferência contextual.','Preserving emigrant communities’ culture and equal employment rights; contextual inference.', 'média',20),
      A(50,[1],'Paz e desarmamento recíproco, mantendo os compromissos da Aliança Atlântica.','Peace and reciprocal disarmament while retaining Atlantic Alliance commitments.'),
      A(70,[1,3],'Descolonização, autodeterminação e não ingerência com cooperação externa.','Decolonisation, self-determination and non-interference alongside external cooperation.'),
      A(70,[1],'Setores nacionalizados e propriedade social com iniciativa privada admitida.','Nationalised sectors and social ownership alongside private enterprise.'),
      A(80,[1],'Planos anual e plurianual coordenam prioridades económicas.','Annual and multi-year plans coordinate economic priorities.'),
      A(70,[1],'Substituição de importações e preferência produtiva nacional, com exportações.','Import substitution and preference for national production alongside exports.'),
      A(70,[1,3],'Ensino público sem doutrina religiosa imposta; religião facultativa pelas igrejas.','Public education without imposed religious doctrine; optional teaching by churches.'),
      A(80,[1],'Igualdade familiar e fim da discriminação entre filhos; condição feminina.','Family equality and ending discrimination among children; women’s status.'),
      A(80,[1],'Investigação científica e modernização industrial, com equilíbrio ecológico.','Scientific research and industrial modernisation alongside ecological balance.')
    ],
    countryOverrides:{representacao:A(80,[1,3],'Eleições competitivas coexistem com o Conselho da Revolução e participação militar na soberania em 1976.','Competitive elections coexist with the Council of the Revolution and military participation in sovereignty in 1976.', 'média',15)}
  },
  {
    person:'cavaco-silva',name:'Aníbal Cavaco Silva',lifespan:'1939–',role:'Primeiro-ministro (1985–1995) e Presidente de Portugal (2006–2016)',roleEn:'Prime Minister (1985–1995) and President of Portugal (2006–2016)',
    ideology:'cavaquismo',ideologyName:'Cavaquismo (1991–1995)',ideologyEn:'Cavaco’s liberal reformism (1991–1995)',category:'Direita',categoryEn:'Right',
    country:'portugal-cavaco-xii',countryName:'Portugal — XII Governo de Cavaco Silva',countryEn:'Portugal — Cavaco Silva’s XII Government',flag:'flag-portugal',period:'1991–1995',evidencePeriod:'1991–1995; currículo de 1989 em aplicação',
    about:'Liberalismo reformista do XII Governo de Cavaco Silva: privatizações, concorrência, integração europeia e modernização. Inclui proteção social, autonomias regionais e regularização extraordinária de imigrantes em 1992.',
    aboutEn:'The liberal reformism of Cavaco Silva’s XII Government: privatisation, competition, European integration and modernisation. Includes social protection, regional autonomy and exceptional immigrant regularisation in 1992.',
    phrase:'Quero modernizar Portugal com concorrência, iniciativa privada e integração europeia, preservando a proteção social.',phraseEn:'I want to modernise Portugal through competition, private enterprise and European integration while preserving social protection.',
    limits:'Avalia o programa de 1991 e dois instrumentos legislativos assinados pelo governo, não as posições presidenciais posteriores. O currículo de 1989 é identificado como enquadramento em aplicação, com opção entre formação cívica e religiosa. Regularização extraordinária não significa imigração ilimitada nem preferência cultural uniforme.',
    limitsEn:'Assesses the 1991 programme and two legislative instruments signed by the government, not later presidential views. The 1989 curriculum is identified as an operative framework, with a choice between civic and religious education. Exceptional regularisation implies neither unrestricted migration nor uniform cultural preferences.',
    sources:[
      S('Programa do XII Governo Constitucional','XII Governo Constitucional, dirigido por Aníbal Cavaco Silva','1991','https://www.historico.portugal.gov.pt/media/464042/GC12.pdf','PDF consultado: pp. 3–6, 12–15, 18–24, 27–29, 31–38, 63–66, 76–80: defesa, liberdades, Europa, autonomia, privatizações, ciência e igualdade'),
      S('Aníbal Cavaco Silva — biografia','Roberto Ortiz de Zárate / CIDOB','2006-03','https://www.cidob.org/lider-politico/anibal-cavaco-silva','reformismo liberal, mandatos e contexto económico da segunda maioria'),
      S('Decreto-Lei n.º 212/92 — regularização extraordinária','Governo da República Portuguesa; assinatura de Cavaco Silva','1992-10-12','https://diariodarepublica.pt/dr/detalhe/decreto-lei/212-1992-225999','preâmbulo e artigos 1–4: requisitos, preferência lusófona e proteção durante o procedimento'),
      S('Decreto-Lei n.º 286/89 — planos curriculares','Governo da República Portuguesa; aprovado em Conselho de Ministros com assinatura de Cavaco Silva','1989-08-29','https://diariodarepublica.pt/dr/detalhe/decreto-lei/286-1989-618310','artigo 7 e mapas: formação pessoal/social ou moral/religiosa católica ou outras confissões; aplicação progressiva')
    ],
    rows:[
      A(40,[1],'Autonomias insulares, poder local e regionalização gradual num Estado unitário.','Island autonomy, local powers and gradual regionalisation in a unitary state.'),
      A(90,[1,2],'Regime democrático, direitos e participação dos cidadãos.','Democratic institutions, rights and citizen participation.','alta',10),
      A(60,[1],'Segurança como condição da liberdade, com modernização policial.','Security as a condition for liberty alongside police modernisation.'),
      A(50,[1,3],'Regularização condicionada e proteção cultural timorense, com preferências lusófonas.','Conditional regularisation and Timorese cultural protection alongside Lusophone preferences.', 'média',20),
      A(60,[1],'Modernização militar e NATO com ação diplomática e direitos humanos.','Military modernisation and NATO alongside diplomacy and human rights.'),
      A(50,[1],'Afirmação nacional e alianças; autodeterminação timorense por meios diplomáticos.','National assertion and alliances; Timorese self-determination through diplomatic means.', 'média',20),
      A(30,[1,2],'Privatizações e propriedade privada, com serviços e proteção sociais.','Privatisation and private property alongside public services and social protection.'),
      A(30,[1],'Concorrência e desestatização, com supervisão financeira e investimento público.','Competition and reduced state ownership alongside financial supervision and public investment.'),
      A(20,[1],'Mercado europeu e integração monetária, sem isolacionismo comercial.','European market and monetary integration rather than trade isolationism.'),
      A(50,[4],'Escolha entre formação pessoal/social e ensino religioso de diferentes confissões.','Choice between personal/social education and religious teaching from different denominations.', 'média',20),
      A(60,[1],'Igualdade entre homens e mulheres combinada com políticas de família.','Equality between women and men combined with family policies.', 'média',20),
      A(80,[1],'Ciência, inovação industrial e modernização tecnológica com proteção ambiental.','Science, industrial innovation and technological modernisation alongside environmental protection.')
    ]
  },
  {
    person:'antonio-costa',name:'António Costa',lifespan:'1961–',role:'Primeiro-ministro de Portugal (2015–2024)',roleEn:'Prime Minister of Portugal (2015–2024)',
    ideology:'social-democracia-costa',ideologyName:'Social-democracia — Costa (2019)',ideologyEn:'Social democracy — Costa (2019)',category:'Esquerda',categoryEn:'Left',
    country:'portugal-costa-xxii',countryName:'Portugal — XXII Governo de Costa',countryEn:'Portugal — Costa’s XXII Government',flag:'flag-portugal',period:'2019–2022',evidencePeriod:'Programa de 2019; laicidade declarada em 2017',
    about:'Variante social-democrata do programa do XXII Governo: serviços públicos e redução de desigualdades numa economia mista, descentralização, acolhimento integrado de imigrantes, direitos civis e transição energética e digital.',
    aboutEn:'The XXII Government programme’s social-democratic variant: public services and reduced inequality within a mixed economy, decentralisation, integrated migrant reception, civil rights and energy and digital transitions.',
    phrase:'Quero serviços públicos e direitos iguais, com uma economia mista, aberta e preparada para a transição ecológica.',phraseEn:'I want public services and equal rights, with an open mixed economy prepared for the ecological transition.',
    limits:'Perfil de propostas do XXII Governo, não do Conselho Europeu ou do XXIII Governo. A laicidade tem uma declaração individual de 2017 como antecedente explicitado. O programa reconhece falhas na prática da igualdade; promessas de inclusão não são indicadores de resultados alcançados.',
    limitsEn:'A proposal profile of the XXII Government, not the European Council or XXIII Government. Secularism uses an explicitly identified individual 2017 statement as background. The programme acknowledges practical failures of equality; inclusion promises are not indicators of achieved outcomes.',
    sources:[
      S('Programa do XXII Governo Constitucional','XXII Governo Constitucional, dirigido por António Costa','2019-10-26','https://www.parlamento.pt/ActividadeParlamentar/Paginas/DetalheActividadeParlamentar.aspx?ACT_TP=PRG&BID=113320','PDF ligado pela Assembleia consultado, 196 páginas: pp. impressas 22–37, 38–51, 96–125, 127–141, 143–175; numeração PDF +2'),
      S('António Costa — biografia','Roberto Ortiz de Zárate / CIDOB','2015-12-04; nota posterior de mandatos','https://www.cidob.org/lider-politico/antonio-costa','nota específica: XXII Governo de 2019 e substituição pelo XXIII em 2022'),
      S('Primeiro-Ministro e Papa Francisco — declarações sobre Estado laico','António Costa / Governo de Portugal','2017-05-13','https://portugal.gov.pt/gc21/comunicacao/noticias/20170513-pm-papa-francisco','declarações pessoais sobre autodeterminação do Estado, respeito religioso e refugiados'),
      S('Um Governo combativo e inconformado — tomada de posse','António Costa / Governo de Portugal','2019-10-26','https://portugal.gov.pt/gc22/comunicacao/noticias/um-governo-combativo-e-inconformado-de-acao-em-prol-de-portugal-e-dos-portugueses','defesa expressa da nova agenda de quatro desafios: clima, demografia, desigualdades e sociedade digital')
    ],
    rows:[
      A(40,[1],'Autonomia regional e descentralização de competências no Estado unitário.','Regional autonomy and devolved responsibilities within a unitary state.'),
      A(90,[1,2],'Participação democrática, cidadania, escrutínio e Estado de direito.','Democratic participation, citizenship, scrutiny and the rule of law.','alta',10),
      A(50,[1],'Reforço da segurança e repressão do ódio, com direitos e autodeterminação.','Stronger public security and hate-speech enforcement alongside rights and self-determination.', 'média',20),
      A(20,[1,3],'Acolhimento de imigrantes, combate ao racismo e proteção de refugiados.','Migrant reception, anti-racism and refugee protection.'),
      A(60,[1],'Reforço da defesa e compromissos NATO, com enquadramento multilateral.','Stronger defence and NATO commitments within a multilateral framework.'),
      A(60,[1],'Cooperação europeia e ONU com defesa dos interesses nacionais.','European and UN cooperation alongside defending national interests.', 'média',20),
      A(60,[1],'Escola, SNS e proteção social públicos com investimento empresarial privado.','Public schooling, health and social protection alongside private business investment.'),
      A(60,[1,4],'Investimento estratégico e regulação com concorrência e simplificação administrativa.','Strategic investment and regulation alongside competition and simplified administration.'),
      A(20,[1],'Integração europeia, internacionalização e exportações.','European integration, internationalisation and exports.'),
      A(70,[3],'Estado independente das confissões, com respeito e diálogo religiosos.','A state independent of denominations alongside religious respect and dialogue.'),
      A(90,[1],'Igualdade de género, direitos LGBTI e combate à discriminação expressos.','Explicit gender equality, LGBTI rights and anti-discrimination policies.','alta',10),
      A(70,[1,4],'Digitalização e ciência conjugadas com neutralidade carbónica e sustentabilidade.','Digitisation and science combined with carbon neutrality and sustainability.')
    ]
  }
];

const entries=[];
for(const c of cohorts){
  const portrait=assets.find(a=>a.id===c.person),flag=assets.find(a=>a.id===c.flag);
  if(!portrait||!flag||c.rows.length!==12)throw new Error(`Incomplete cohort: ${c.person}`);
  const image = (a, isFlag=false) => ({artist:a.artist,license:a.license,source:a.source,
    pt:`${isFlag?'Símbolo nacional autêntico usado no período indicado. ':'Fotografia de '+a.date+'. '}${a.width} × ${a.height} px no original. ${a.treatment} Atribuição: ${a.artist}; ${a.license}.`,
    en:`${isFlag?'Authentic national symbol used during the specified period. ':'Photograph dated '+a.date+'. '}${a.width} × ${a.height} px in the original. ${isFlag?'SVG converted to PNG, content preserved.':'Original Commons file; CSS crop only.'} Credit: ${a.artist}; ${a.license}.`});
  const review=(kind,img,overrides={})=>({status:'reviewed',period:c.evidencePeriod,reviewed:'2026-10-07',independentReview:false,sources:c.sources,
    pt:{scope:kind==='ideologies'?`Variante programática contextual: ${c.ideologyName}. ${c.about}`:kind==='personalities'?`Posições publicamente defendidas por ${c.name}, no recorte ${c.evidencePeriod}. Documentos coletivos usados por subscrição, apresentação ou assinatura identificada, não apenas por filiação partidária.`:`Orientação declarada do governo de ${c.countryName}, ${c.period}, e enquadramento institucional indicado nos eixos. Não representa as opiniões da população nem comprova a execução integral das propostas.`,
      limits:`${c.limits} Coordenadas e intervalos são interpretações editoriais, não percentagens medidas ou intervalos estatísticos. Confiança média assinala compromisso ou inferência contextual. Semelhança não significa equivalência ideológica. Dados herdados não auditados.`},
    en:{scope:kind==='ideologies'?`Contextual programmatic variant: ${c.ideologyEn}. ${c.aboutEn}`:kind==='personalities'?`Positions publicly advocated by ${c.name} in ${c.evidencePeriod}. Collective documents are used through identified endorsement, presentation or signature, not party membership alone.`:`Declared government orientation of ${c.countryEn}, ${c.period}, alongside institutional qualifications identified in the axes. Does not represent public opinion or prove full implementation.`,
      limits:`${c.limitsEn} Coordinates and ranges are editorial interpretations, not measured percentages or statistical intervals. Medium confidence marks compromise or contextual inference. Similarity is not ideological equivalence. Inherited data remain unaudited.`},
    axes:c.rows.map((a,i)=>({id:AXIS_IDS[i],...(overrides[AXIS_IDS[i]]??a)})),...(img?{image:img}:{})});
  const personImage=image(portrait),countryImage=image(flag,true);
  entries.push({kind:'ideologies',metadata:{id:c.ideology,name:c.ideologyName,category:c.category,description:c.about,phrase:c.phrase,vector:null,countryId:c.country,personalityId:c.person,religions:[]},translation:{id:c.ideology,name:c.ideologyEn,category:c.categoryEn,description:c.aboutEn,phrase:c.phraseEn},review:review('ideologies')});
  entries.push({kind:'personalities',metadata:{id:c.person,name:c.name,role:c.role,category:'politico',lifespan:c.lifespan,description:`${c.role}. Perfil no recorte ${c.evidencePeriod}: ${c.about}`,imagePath:portrait.local,imageSourceName:`${portrait.artist} · ${portrait.license}`,imageSourceUrl:portrait.source,imageNote:personImage.pt,religions:[]},translation:{id:c.person,name:c.name,role:c.roleEn,description:`${c.roleEn}. Assessed in ${c.evidencePeriod}: ${c.aboutEn}`,imageNote:personImage.en},review:review('personalities',personImage,c.personOverrides)});
  entries.push({kind:'countries',metadata:{id:c.country,name:c.countryName,category:'Governo democrático · perfil programático',description:`Orientação declarada do governo em ${c.period}. ${c.about} Este perfil não representa a população ou a situação atual do país.`,flagPath:flag.local,flagKind:'Bandeira nacional usada no período indicado',flagSourceName:'Wikimedia Commons',flagSourceUrl:flag.source,flagNote:countryImage.pt,historical:true,period:c.period,vector:null,religions:[]},translation:{id:c.country,name:c.countryEn,category:'Democratic government · programmatic profile',description:`Declared government orientation in ${c.period}. ${c.aboutEn} This profile does not represent public opinion or the country’s current situation.`},review:review('countries',countryImage,c.countryOverrides)});
}
export default {id:'lote-02',imageInventory:'imagens-lote-02.json',entries};
