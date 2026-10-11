// Manual evidence matrices. Contextual variants do not purport to be new universal doctrines.
import {S,A,assemble} from './reviewed-cohorts.mjs';
const cohorts=[
{
 person:'ellen-johnson-sirleaf',name:'Ellen Johnson Sirleaf',lifespan:'1938–',role:'Presidente da Libéria (2006–2018)',roleEn:'President of Liberia (2006–2018)',
 ideology:'liberalismo-reconstrucao-sirleaf',ideologyName:'Liberalismo de reconstrução — Sirleaf',ideologyEn:'Reconstruction liberalism — Sirleaf',category:'Centro',categoryEn:'Center',
 country:'liberia-sirleaf-2006',countryName:'Libéria — início do governo Sirleaf',countryEn:'Liberia — early Sirleaf government',flag:'flag-liberia',period:'2006–2007',evidencePeriod:'Discurso inaugural de 2006 e mensagem anual de 2007',
 about:'Reconstrução liberal após a guerra civil: direitos constitucionais, investimento privado, reforma do Estado, inclusão das mulheres e cooperação internacional para a paz.',
 aboutEn:'Postwar liberal reconstruction: constitutional rights, private investment, state reform, women’s inclusion and international cooperation for peace.',
 phrase:'Quero reconstruir a democracia e os serviços essenciais, com direitos iguais, investimento e paz.',phraseEn:'I want to rebuild democracy and essential services through equal rights, investment and peace.',
 limits:'Avalia a agenda inicial, não todos os mandatos. O acolhimento é inferido da inclusão étnica e reconciliação, com o controlo fronteiriço de 2007 explicitado. A imparcialidade religiosa é institucional, não uma afirmação de ateísmo pessoal.',
 limitsEn:'Assesses the initial agenda, not both full terms. Reception is inferred from ethnic inclusion and reconciliation, qualified by 2007 border controls. Religious impartiality is institutional, not personal atheism.',
 sources:[
  S('Inaugural Address','Ellen Johnson Sirleaf; reprodução Liberia Past and Present','2006-01-16','https://liberiapastandpresent.org/JohnsonSirleaf/InauguralAddress.htm','Democratic Renewal; Economic Renewal; Foreign Policy; inclusão religiosa e mulheres, parte final'),
  S('Annual Message to the Legislature','Presidência da Libéria / Ellen Johnson Sirleaf','2007-01-29','https://www.sirleaf.emansion.gov.lr/doc/annualmsg07.pdf','PDF 43 páginas: pp. 6–9 segurança e descentralização; revitalização económica, ciência, telecomunicações e política externa'),
  S('The Nobel Peace Prize 2011 — Press release','Comité Nobel Norueguês','2011-10-07','https://www.nobelprize.org/prizes/peace/2011/press-release/','Enquadramento independente: luta não violenta, paz e igualdade das mulheres; não usado para retroprojetar políticas de 2011')
 ],
 rows:[
  A(50,[1,2],'Promessa explícita de descentralização num Estado unitário; não uma federação.','Explicit decentralisation pledge within a unitary state, not a federation.',20),
  A(90,[1],'Eleições, liberdades constitucionais e fim da presidência imperial.','Elections, constitutional liberties and rejection of the imperial presidency.'),
  A(60,[1,2],'Devido processo com resposta firme à violência e reforma policial.','Due process alongside firm responses to violence and police reform.'),
  A(40,[1,2],'Inclusão étnica e reconciliação coexistem com reforço das fronteiras.','Ethnic inclusion and reconciliation coexist with stronger border controls.',20),
  A(40,[1,2],'Paz e desmobilização, mantendo um novo exército profissional.','Peace and demobilisation while retaining a new professional army.',20),
  A(80,[1,2],'Cooperação regional e ONU para superar conflitos, sem expansão territorial.','Regional and UN cooperation to overcome conflict without territorial expansion.'),
  A(40,[1,2],'Investimento privado e estrangeiro com reconstrução de serviços públicos.','Private and foreign investment alongside rebuilt public services.'),
  A(50,[1,2],'Estratégia pública de reconstrução e governação, com mercado e concessões.','Public reconstruction and governance strategy alongside markets and concessions.',20),
  A(20,[1,2],'Confiança dos investidores e parcerias económicas internacionais.','Investor confidence and international economic partnerships.'),
  A(70,[1],'Igual tratamento político independentemente da filiação religiosa.','Equal political treatment regardless of religious affiliation.'),
  A(80,[1,3],'Direitos, educação e participação das mulheres defendidos expressamente.','Explicit advocacy of women’s rights, education and participation.'),
  A(70,[2],'Modernização de telecomunicações e formação, com salvaguardas ambientais.','Telecommunications modernisation and training with environmental safeguards.')
 ]
},
{
 person:'kwame-nkrumah',name:'Kwame Nkrumah',lifespan:'1909–1972',role:'Presidente do Gana (1960–1966)',roleEn:'President of Ghana (1960–1966)',
 ideology:'nkrumahismo',ideologyName:'Nkrumahismo',ideologyEn:'Nkrumahism',category:'Esquerda Radical',categoryEn:'Radical Left',
 country:'gana-nkrumah-partido-unico',countryName:'Gana — partido único de Nkrumah',countryEn:'Ghana — Nkrumah’s one-party state',flag:'flag-ghana-1964',period:'1964–1966',evidencePeriod:'Programa socialista e prática de 1964–1966; federalismo pan-africano contextualizado',countryCategory:'República de partido único',countryCategoryEn:'One-party republic',
 about:'Socialismo pan-africano com industrialização planeada, propriedade pública e união continental. No Gana de 1964–1966, coexistiu com partido único e repressão da oposição.',
 aboutEn:'Pan-African socialism with planned industrialisation, public ownership and continental union. In 1964–1966 Ghana it coexisted with one-party rule and repression of opposition.',
 phrase:'Quero uma África unida e soberana, com industrialização socialista e emancipação do colonialismo.',phraseEn:'I want a united, sovereign Africa with socialist industrialisation and emancipation from colonialism.',
 limits:'A federação africana projetada não era a estrutura efetiva do Gana. O ideal de igualdade não elimina a repressão. Inclusão pan-africana não equivale a uma política moderna de asilo. A autora académica explicita proximidade política anterior e critica a hagiografia.',
 limitsEn:'The proposed African federation was not Ghana’s actual structure. Equality ideals do not erase repression. Pan-African inclusion is not modern asylum policy. The academic author discloses earlier political proximity and criticises hagiography.',
 sources:[
  S('Seven-Year Development Plan 1963/64–1969/70','Governo do Gana; apresentação de Kwame Nkrumah','1964','https://ndpc.gov.gh/media/Ghana_7_Year_Development_Plan_1963-4_1969-70_1964.pdf','Apresentação e capítulos de estrutura do plano, indústria, comércio, educação, ciência e serviços sociais'),
  S('The Political and Social Thought of Kwame Nkrumah','Ama Biney / Palgrave Macmillan','2011','https://sahistory.org.za/sites/default/files/archive-files/ama_biney_the_political_and_social_thought_of_kwbook4me.org_copy.pdf','Capítulos 6–9, pp. impressas 81–153: partido único, repressão, mulheres, Consciencism e política externa')
 ],
 rows:[
  A(90,[2],'Federação política continental defendida; o Gana interno era unitário.','Advocated continental political federation; domestic Ghana was unitary.'),
  A(20,[2],'Direção pelo CPP e partido único, apesar da retórica de democracia popular.','CPP leadership and one-party rule despite popular-democracy rhetoric.'),
  A(80,[2],'Detenção preventiva e supressão da oposição limitavam liberdades.','Preventive detention and suppression of opposition restricted liberties.'),
  A(30,[2],'Identidade pan-africana e oposição ao tribalismo, com mobilização uniformizadora.','Pan-African identity and opposition to tribalism with homogenising mobilisation.',20),
  A(60,[2],'Apoio à libertação anticolonial e defesa continental; também não alinhamento.','Support for anticolonial liberation and continental defence alongside nonalignment.',20),
  A(30,[2],'Soberania anticolonial e união africana com intervenção política continental.','Anticolonial sovereignty and African union with continental political involvement.'),
  A(80,[1,2],'Expansão da propriedade pública, preservando algum capital privado.','Expanding public ownership while retaining some private capital.'),
  A(90,[1],'Plano plurianual vinculando investimento, indústria e infraestrutura.','Multiyear plan coordinating investment, industry and infrastructure.'),
  A(70,[1,2],'Substituição de importações e autonomia económica, sem abandonar exportações.','Import substitution and economic autonomy without abandoning exports.'),
  A(70,[2],'Humanismo materialista e síntese de tradições, sem governo clerical.','Materialist humanism and synthesis of traditions without clerical government.'),
  A(60,[1,2],'Educação e mobilização pública feminina, dentro de estruturas partidárias paternalistas.','Education and women’s public mobilisation within paternalistic party structures.',20),
  A(90,[1],'Industrialização, energia, ensino técnico e investigação como motores do desenvolvimento.','Industrialisation, energy, technical education and research as development drivers.')
 ],
 countryOverrides:{estrutura:A(20,[2],'Centralização interna e Estado unitário; a federação africana ficou projetada.','Domestic centralisation and unitary state; African federation remained a proposal.'),imigracao:A(50,[2],'Pan-africanismo coexistiu com centralização identitária e repressão de dissidentes.','Pan-Africanism coexisted with identity centralisation and repression of dissent.',20)}
},
{
 person:'mahathir-mohamad',name:'Mahathir Mohamad',lifespan:'1925–',role:'Primeiro-ministro da Malásia (1981–2003; 2018–2020)',roleEn:'Prime Minister of Malaysia (1981–2003; 2018–2020)',
 ideology:'reformismo-pakatan-harapan-2018',ideologyName:'Reformismo do Pakatan Harapan — 2018',ideologyEn:'Pakatan Harapan reformism — 2018',category:'Centro',categoryEn:'Center',
 country:'malasia-mahathir-2018',countryName:'Malásia — programa Mahathir de 2018',countryEn:'Malaysia — Mahathir’s 2018 programme',flag:'flag-malaysia',period:'2018–2020',evidencePeriod:'Manifesto de 2018 e segundo período como primeiro-ministro',
 about:'Reformismo de coligação com controlo da corrupção, autonomia estadual, economia mista e modernização. Conserva privilégios bumiputera e o estatuto constitucional do Islão.',
 aboutEn:'Coalition reformism with corruption controls, state autonomy, a mixed economy and modernisation. Retains bumiputera preferences and Islam’s constitutional status.',
 phrase:'Quero reformar as instituições e combater a corrupção, com desenvolvimento e autonomia regional.',phraseEn:'I want institutional reform and corruption controls alongside development and regional autonomy.',
 limits:'Perfil do compromisso eleitoral de 2018 apresentado pela coligação liderada por Mahathir, não da sua carreira inteira. A democracia prometida não apaga a repressão dos mandatos anteriores, documentada pela ABC. Não se atribuem direitos LGBTI não defendidos pelo manifesto.',
 limitsEn:'Assesses the 2018 electoral commitment of Mahathir’s coalition, not his entire career. Promised democracy does not erase earlier repression documented by ABC. No unpromised LGBT rights are attributed.',
 sources:[
  S('Buku Harapan — Rebuilding Our Nation, Fulfilling Our Hopes','Pakatan Harapan, coligação liderada por Mahathir Mohamad','2018','https://dl.dapmalaysia.org/repository/Manifesto_PH_EN.pdf','150 páginas; cinco pilares, 60 promessas: instituições, Sabah/Sarawak, minorias, religião, mulheres, economia e defesa'),
  S('Malaysia election: Who is newly elected prime minister Mahathir Mohamad?','Mazoe Ford / ABC News','2018-05-10; atualização 2018-07-27','https://www.abc.net.au/news/2018-05-10/malaysia-election-who-is-mahathir-mohamad/9746368','Mudança de coligação em 2018; prisão de opositores e subordinação dos tribunais nos mandatos anteriores')
 ],
 rows:[
  A(80,[1],'Federalismo com reforço explícito dos direitos de Sabah e Sarawak.','Federalism with explicitly strengthened Sabah and Sarawak rights.'),
  A(80,[1,2],'Reforma parlamentar e judicial prometida em 2018; legado autoritário ressalvado.','Parliamentary and judicial reform promised in 2018; authoritarian legacy qualified.'),
  A(50,[1],'Revisão de leis repressivas com segurança e combate à corrupção.','Revision of repressive laws alongside security and corruption controls.',20),
  A(50,[1],'Proteção de minorias e refugiados com privilégios bumiputera preservados.','Minority and refugee protection alongside retained bumiputera preferences.',20),
  A(60,[1],'Modernização da defesa e proteção marítima, com diplomacia regional.','Defence modernisation and maritime protection alongside regional diplomacy.',20),
  A(60,[1],'Cooperação internacional e ASEAN, preservando soberania nacional.','International and ASEAN cooperation while preserving national sovereignty.',20),
  A(50,[1],'Empresas estratégicas públicas coexistem com empreendedorismo privado.','Strategic public enterprises coexist with private entrepreneurship.',20),
  A(50,[1],'Regulação e projetos públicos, com concorrência e reforma empresarial.','Regulation and public projects alongside competition and business reform.',20),
  A(40,[1],'Integração comercial e exportação com apoio a produtores nacionais.','Trade integration and exports alongside support for domestic producers.'),
  A(30,[1],'Islão como religião da federação, garantindo prática de outras religiões.','Islam as the federation’s religion alongside protection of other religions.'),
  A(60,[1],'Igualdade económica das mulheres e proteção familiar, sem liberalização geral dos costumes.','Women’s economic equality and family protection without general social liberalisation.',20),
  A(80,[1],'Ciência, inovação e infraestrutura digital com desenvolvimento sustentável.','Science, innovation and digital infrastructure with sustainable development.')
 ]
},
{
 person:'imran-khan',name:'Imran Khan',lifespan:'1952–',role:'Primeiro-ministro do Paquistão (2018–2022)',roleEn:'Prime Minister of Pakistan (2018–2022)',
 ideology:'estado-social-islamico-naya-pakistan',ideologyName:'Estado social islâmico — Naya Pakistan',ideologyEn:'Islamic welfare state — Naya Pakistan',category:'Centro',categoryEn:'Center',
 country:'paquistao-imran-2018',countryName:'Paquistão — programa Imran Khan de 2018',countryEn:'Pakistan — Imran Khan’s 2018 programme',flag:'flag-pakistan',period:'2018–2022',evidencePeriod:'Manifesto de 2018 assinado por Imran Khan; recorte de propostas',
 about:'Projeto de Estado social inspirado em Medina, com combate à corrupção, descentralização federal, serviços sociais, iniciativa empresarial e política externa independente.',
 aboutEn:'A Medina-inspired welfare-state project with corruption controls, federal decentralisation, social services, entrepreneurship and independent foreign policy.',
 phrase:'Quero um Estado social justo, inspirado em Medina, com instituições responsáveis e autonomia nacional.',phraseEn:'I want a just Medina-inspired welfare state with accountable institutions and national autonomy.',
 limits:'Perfil das propostas assinadas em 2018. Não comprova execução nem elimina a influência militar na política paquistanesa, discutida pelo CIDOB. Igualdade feminina proposta não equivale a liberalismo integral dos costumes; fé estatal coexistia com direitos declarados das minorias.',
 limitsEn:'Assesses proposals signed in 2018. Does not prove implementation or erase military influence discussed by CIDOB. Proposed women’s equality is not comprehensive social liberalism; state faith coexisted with declared minority rights.',
 sources:[
  S('The Road to Naya Pakistan — PTI Manifesto 2018','Pakistan Tehreek-e-Insaf; apresentação assinada por Imran Khan','2018','https://academiamag.com/wp-content/uploads/2018/07/PTI-Manifesto-2018.pdf','61 páginas; apresentação assinada p. PDF 8; seis capítulos: governação, federação, economia, agricultura, serviços sociais e defesa'),
  S('Imran Khan — biografia política','Roberto Ortiz de Zárate / CIDOB','Biografia e atualizações de mandato','https://www.cidob.org/lider-politico/imran-khan','Contexto do programa de 2018, conservadorismo religioso, corrupção e relação com as forças armadas')
 ],
 rows:[
  A(90,[1],'Federação, descentralização e novas unidades administrativas expressamente propostas.','Explicit proposals for federation, decentralisation and new administrative units.'),
  A(80,[1,2],'Instituições responsáveis e eleições credíveis propostas; influência militar ressalvada.','Accountable institutions and credible elections proposed; military influence qualified.'),
  A(50,[1],'Polícia profissional, combate ao crime e proteção da imprensa.','Professional police, crime prevention and protection of the press.',20),
  A(40,[1],'Direitos das minorias com identidade islâmica e formação cívica comum.','Minority rights alongside Islamic identity and shared civic education.',20),
  A(70,[1],'Defesa e dissuasão nuclear mantidas, com procura de paz regional.','Defence and nuclear deterrence retained alongside regional peace efforts.'),
  A(80,[1],'Rejeição de guerras alheias e diplomacia independente.','Rejection of others’ wars and independent diplomacy.'),
  A(50,[1],'Serviços sociais e empresas públicas reformadas com atividade privada.','Social services and reformed public enterprises alongside private activity.',20),
  A(50,[1],'Planeamento estratégico e regulação com facilitação dos negócios.','Strategic planning and regulation alongside easier business operation.',20),
  A(30,[1],'Exportações e investimento externo, com apoio à produção nacional.','Exports and foreign investment with support for domestic production.'),
  A(20,[1],'Estado social explicitamente inspirado no modelo islâmico de Medina.','Welfare state explicitly inspired by the Islamic model of Medina.'),
  A(60,[1],'Igualdade de oportunidades feminina com enquadramento social religioso.','Women’s equal opportunities within a religious social framework.',20),
  A(80,[1],'Economia do conhecimento, tecnologias digitais e investigação com agenda verde.','Knowledge economy, digital technology and research with a green agenda.')
 ]
},
{
 person:'joko-widodo',name:'Joko Widodo',lifespan:'1961–',role:'Presidente da Indonésia (2014–2024)',roleEn:'President of Indonesia (2014–2024)',
 ideology:'desenvolvimentismo-pancasila-jokowi',ideologyName:'Desenvolvimentismo da Pancasila — Jokowi',ideologyEn:'Pancasila developmentalism — Jokowi',category:'Centro',categoryEn:'Center',
 country:'indonesia-jokowi-segundo-mandato',countryName:'Indonésia — programa do segundo mandato Jokowi',countryEn:'Indonesia — Jokowi’s second-term programme',flag:'flag-indonesia',period:'2020–2024',evidencePeriod:'RPJMN de 2020–2024, qualificado pelo contexto institucional de 2020',
 about:'Desenvolvimentismo com infraestrutura, transformação industrial e capital humano, dentro da Pancasila. Combina empresas públicas e investimento privado, pluralismo religioso reconhecido e forte segurança estatal.',
 aboutEn:'Infrastructure, industrial transformation and human-capital developmentalism within Pancasila. Combines public enterprises and private investment, recognised religious pluralism and strong state security.',
 phrase:'Quero desenvolvimento industrial e infraestrutura, com unidade nacional, investimento e proteção social.',phraseEn:'I want industrial development and infrastructure with national unity, investment and social protection.',
 limits:'Perfil do segundo plano presidencial, não de toda a sociedade. A promessa de direitos é contraposta a leis de blasfémia, tensões na Papua e limitações de liberdade. Pancasila religiosa não é equivalente a Estado ateu; pluralismo reconhecido não cobre automaticamente todas as crenças.',
 limitsEn:'Assesses the second presidential plan, not society as a whole. Rights pledges are qualified by blasphemy laws, Papua tensions and liberty restrictions. Religious Pancasila is not an atheist state; recognised pluralism does not automatically cover every belief.',
 sources:[
  S('National Medium-Term Development Plan 2020–2024','Governo de Joko Widodo / Bappenas; cópia FAOLEX','2020','https://faolex.fao.org/docs/pdf/ins204723.pdf','320 páginas; visão presidencial, transformação económica, desenvolvimento territorial, capital humano, política/segurança e relações externas'),
  S('Joko Widodo — biografia política','Roberto Ortiz de Zárate / CIDOB','Biografia e atualizações de mandato','https://www.cidob.org/lider-politico/joko-widodo','Presidência, desenvolvimentismo, coalizões e segundo mandato'),
  S('Freedom in the World 2020: Indonesia','Freedom House','2020','https://freedomhouse.org/country/indonesia/freedom-world/2020','Secções direitos políticos, liberdades civis, religião, minorias e Papua')
 ],
 rows:[
  A(40,[1],'Desenvolvimento regional descentralizado no Estado unitário, sem proposta federal.','Decentralised regional development within a unitary state without federal proposals.'),
  A(70,[1,3],'Democracia eleitoral mantida, com limitações institucionais documentadas.','Electoral democracy retained with documented institutional limitations.'),
  A(70,[1,3],'Segurança e ordem pública fortes, com restrições efetivas de liberdade.','Strong security and public order with actual restrictions on liberty.'),
  A(50,[1,3],'Diversidade étnica reconhecida com integração nacional e tensões minoritárias.','Recognised ethnic diversity alongside national integration and minority tensions.',20),
  A(70,[1],'Modernização militar e defesa marítima territorial.','Military modernisation and territorial maritime defence.'),
  A(70,[1],'Diplomacia livre e ativa, ASEAN e não alinhamento com soberania.','Free and active diplomacy, ASEAN and nonalignment alongside sovereignty.'),
  A(50,[1],'Empresas públicas e proteção social com investimento empresarial privado.','Public enterprises and social protection alongside private business investment.',20),
  A(70,[1],'Planeamento nacional, política industrial e infraestrutura dirigidos pelo Estado.','State-directed national planning, industrial policy and infrastructure.'),
  A(50,[1],'Integração exportadora com valorização industrial de recursos nacionais.','Export integration alongside industrial upgrading of domestic resources.',20),
  A(30,[1,3],'Pancasila religiosa e moderação confessional, com restrições à blasfémia.','Religious Pancasila and confessional moderation alongside blasphemy restrictions.'),
  A(60,[1,3],'Empoderamento feminino proposto com conservadorismo social e limites de direitos.','Proposed women’s empowerment alongside social conservatism and rights limitations.',20),
  A(90,[1],'Indústria 4.0, ciência, inovação e infraestrutura digital explícitas.','Explicit Industry 4.0, science, innovation and digital infrastructure.')
 ]
},
{
 person:'kim-dae-jung',name:'Kim Dae-jung',lifespan:'1924–2009',role:'Presidente da Coreia do Sul (1998–2003)',roleEn:'President of South Korea (1998–2003)',
 ideology:'reformismo-democratico-sunshine',ideologyName:'Reformismo democrático — política Sunshine',ideologyEn:'Democratic reformism — Sunshine policy',category:'Centro',categoryEn:'Center',
 country:'coreia-sul-kim-1998',countryName:'Coreia do Sul — início do governo Kim Dae-jung',countryEn:'South Korea — early Kim Dae-jung government',flag:'flag-south-korea',period:'1998–2000',evidencePeriod:'Discurso inaugural de 1998; paz e liberdade religiosa documentadas em 2000',
 about:'Reformismo democrático de mercado com direitos sociais, abertura económica e diálogo com o Norte. A política Sunshine combinava não provocação e cooperação com dissuasão defensiva.',
 aboutEn:'Democratic market reformism with social rights, economic opening and dialogue with the North. Sunshine policy combined nonprovocation and cooperation with defensive deterrence.',
 phrase:'Quero democracia e uma economia aberta, com direitos sociais e reconciliação pacífica entre as Coreias.',phraseEn:'I want democracy and an open economy with social rights and peaceful Korean reconciliation.',
 limits:'Inclusão cultural é inferência da reconciliação e da não discriminação, não uma posição documentada sobre toda a imigração. Usa-se 1924, data gregoriana esclarecida pela Fundação Nobel, que assinala a antiga incerteza biográfica. Liberdade religiosa não implica ausência de fé pessoal.',
 limitsEn:'Cultural inclusion is inferred from reconciliation and nondiscrimination, not a documented position on all immigration. Uses 1924, the Gregorian date clarified by the Nobel Foundation, which notes earlier biographical uncertainty. Religious freedom does not imply absence of personal faith.',
 sources:[
  S('Inaugural Address: Let Us Open a New Era','Kim Dae-jung; transcrição no apêndice VI de tese da University of York','1998-02-25','https://etheses.whiterose.ac.uk/id/eprint/14868/2/414684_vol2.pdf','Apêndice VI exclusivamente, pp. PDF 161–168; não se usam capítulos sobre outras personalidades'),
  S('Rafto Prize 2000 — award statement','Rafto Foundation','2000-09-28','https://www.rafto.no/assets/documents/Award-statements/Rafto-Prize-2000-Kim-Dae-jung.pdf','Duas páginas lidas visualmente: democracia, direitos humanos, paz e liberdade religiosa'),
  S('Nobel Lecture','Kim Dae-jung / Nobel Foundation','2000-12-10','https://www.nobelprize.org/prizes/peace/2000/dae-jung/lecture/','Reconciliação, democracia e política Sunshine'),
  S('Kim Dae-jung — biographical','Nobel Foundation','2000; notas posteriores de nascimento e falecimento','https://www.nobelprize.org/prizes/peace/2000/dae-jung/biographical/','Biografia e nota final: nascimento gregoriano em 8 de janeiro de 1924; falecimento em 18 de agosto de 2009')
 ],
 rows:[
  A(60,[1],'Transferência de poderes a entidades locais autónomas no Estado unitário.','Transfer of powers to autonomous local organisations within a unitary state.'),
  A(90,[1,2],'Alternância democrática e respeito dos direitos contra a ditadura.','Democratic alternation and rights against dictatorship.'),
  A(30,[1,2],'Direitos humanos e garantias democráticas, com proteção de vida e propriedade.','Human rights and democratic safeguards alongside protection of life and property.'),
  A(40,[1,3],'Respeito por cada pessoa e cooperação cultural intercoreana, com identidade nacional.','Respect for every person and inter-Korean cultural cooperation alongside national identity.',20),
  A(40,[1,3],'Não provocação e diálogo, mantendo defesa perante agressões armadas.','Nonprovocation and dialogue while retaining defence against armed aggression.',20),
  A(90,[1,3],'Rejeita absorver o Norte e defende reconciliação negociada.','Rejects absorbing the North and advocates negotiated reconciliation.'),
  A(40,[1],'Mercado e empresas privadas com proteção social e ajuda agrícola.','Markets and private enterprises alongside social protection and agricultural support.'),
  A(30,[1],'Reforma concorrencial e menor direção administrativa das empresas.','Competition-based reform and reduced administrative direction of businesses.'),
  A(20,[1],'Abertura a investimento externo, preservando proteção para o arroz.','Opening to foreign investment while retaining rice protection.'),
  A(70,[2],'Liberdade religiosa vinculada à democracia, reconhecendo tradições diversas.','Religious freedom linked to democracy while recognising diverse traditions.'),
  A(70,[1],'Eliminação da discriminação sexual e proteção dos direitos das mulheres.','Elimination of sex discrimination and protection of women’s rights.'),
  A(90,[1],'Revolução da informação e conhecimento como base económica.','Information and knowledge revolution as the economic foundation.')
 ]
},
{
 person:'andres-manuel-lopez-obrador',name:'Andrés Manuel López Obrador',lifespan:'1953–',role:'Presidente do México (2018–2024)',roleEn:'President of Mexico (2018–2024)',
 ideology:'obradorismo-programa-2019',ideologyName:'Obradorismo — programa de 2019',ideologyEn:'Obradorism — 2019 programme',category:'Esquerda',categoryEn:'Left',
 country:'mexico-amlo-programa-2019',countryName:'México — programa López Obrador de 2019',countryEn:'Mexico — López Obrador’s 2019 programme',flag:'flag-mexico',period:'2019–2024',evidencePeriod:'Plano Nacional de Desenvolvimento 2019–2024; orientação declarada',
 about:'Projeto pós-neoliberal da Quarta Transformação: empresas energéticas públicas, redistribuição, austeridade administrativa e soberania. O plano declara não discriminação e política externa não intervencionista.',
 aboutEn:'The Fourth Transformation’s post-neoliberal project: public energy enterprises, redistribution, administrative austerity and sovereignty. The plan declares nondiscrimination and noninterventionist foreign policy.',
 phrase:'Quero recuperar a capacidade social do Estado, combater a corrupção e desenvolver o país com soberania.',phraseEn:'I want to restore the state’s social capacity, fight corruption and develop the country with sovereignty.',
 limits:'Perfil do plano presidencial de 2019, não uma certificação da prática de 2019–2024. O CIDOB documenta tensões institucionais; segurança envolve Guarda Nacional, apesar da promessa de pacificação. Direitos prometidos não comprovam tratamento efetivo de migrantes ou minorias.',
 limitsEn:'Assesses the 2019 presidential plan, not certification of 2019–2024 practice. CIDOB documents institutional tensions; security includes the National Guard despite pacification pledges. Promised rights do not prove actual treatment of migrants or minorities.',
 sources:[
  S('Plan Nacional de Desarrollo 2019–2024','Governo do México / Andrés Manuel López Obrador','2019-07-12','https://sidof.segob.gob.mx/notas/docFuente/5565599','Princípios, Política y Gobierno, Política Social e Economía; texto oficial completo'),
  S('Andrés Manuel López Obrador — biografia política','Roberto Ortiz de Zárate / CIDOB','Biografia e atualizações de mandato','https://www.cidob.org/lider-politico/andres-manuel-lopez-obrador','Quarta Transformação, nacionalismo económico, segurança e tensões institucionais')
 ],
 rows:[
  A(70,[1],'Federação com coordenação nacional e desenvolvimento territorial.','Federation alongside national coordination and territorial development.'),
  A(80,[1,2],'Democracia participativa declarada, com tensões institucionais contextualizadas.','Declared participatory democracy with institutional tensions contextualised.'),
  A(60,[1,2],'Pacificação social e direitos com Guarda Nacional e reforço da segurança.','Social pacification and rights alongside the National Guard and stronger security.',20),
  A(20,[1],'Asilo e migração como direitos, com rejeição expressa da discriminação.','Asylum and migration as rights with explicit rejection of discrimination.'),
  A(50,[1],'Forças armadas na segurança com rejeição de soluções bélicas aos conflitos sociais.','Armed forces in security alongside rejection of warfare solutions to social conflict.',20),
  A(90,[1],'Não intervenção e autodeterminação na política externa declaradas expressamente.','Explicitly declared foreign-policy nonintervention and self-determination.'),
  A(70,[1],'Petróleo e energia públicos, saúde e redistribuição com empresas privadas.','Public oil and energy, health and redistribution alongside private enterprises.'),
  A(70,[1],'Direção estatal do desenvolvimento e projetos estratégicos nacionais.','State direction of development and strategic national projects.'),
  A(60,[1],'Autossuficiência alimentar e recuperação produtiva sem rejeitar comércio externo.','Food self-sufficiency and productive recovery without rejecting foreign trade.',20),
  A(80,[1],'Igualdade pública independentemente das convicções religiosas.','Public equality regardless of religious convictions.'),
  A(80,[1],'Não discriminação por género, orientação sexual e identidade de género.','Nondiscrimination by gender, sexual orientation and gender identity.'),
  A(70,[1],'Investigação e tecnologias com desenvolvimento sustentável.','Research and technology alongside sustainable development.')
 ]
},
{
 person:'luis-arce',name:'Luis Arce',lifespan:'1963–',role:'Presidente boliviano eleito em 2020',roleEn:'Bolivian president elected in 2020',
 ideology:'socialismo-comunitario-produtivo-arce',ideologyName:'Socialismo comunitário produtivo — Arce',ideologyEn:'Productive communitarian socialism — Arce',category:'Esquerda',categoryEn:'Left',
 country:'bolivia-arce-pdes-2021',countryName:'Bolívia — plano Arce de 2021',countryEn:'Bolivia — Arce’s 2021 plan',flag:'flag-bolivia',period:'2020–2021',evidencePeriod:'Início do mandato e PDES adotado em 2021 para 2021–2025',
 about:'Modelo Económico Social Comunitário Produtivo com recursos estratégicos públicos, economia plural, redistribuição e industrialização. Articula plurinacionalidade, autonomias indígenas e substituição de importações.',
 aboutEn:'The Social Communitarian Productive Economic Model combines public strategic resources, a plural economy, redistribution and industrialisation with plurinational identity, indigenous autonomy and import substitution.',
 phrase:'Quero recursos estratégicos públicos, industrialização e redistribuição, respeitando a diversidade plurinacional.',phraseEn:'I want public strategic resources, industrialisation and redistribution with respect for plurinational diversity.',
 limits:'Avalia o início do mandato e o plano governamental, não a prática de todo o período 2020–2025. O partido não é prova isolada: o PDES identifica a reinstauração do modelo pelo governo Arce. Diversidade cultural não equivale automaticamente a liberalização de fronteiras.',
 limitsEn:'Assesses the early term and government plan, not full 2020–2025 practice. Party membership is not sole evidence: PDES identifies the Arce government’s restoration of the model. Cultural diversity is not automatically border liberalisation.',
 imageNote:'Na Bolívia, a bandeira tricolor convive constitucionalmente com a Wiphala; não é apresentada como símbolo exclusivo.',
 imageNoteEn:'Bolivia’s tricolour constitutionally coexists with the Wiphala; it is not presented as the sole symbol.',
 sources:[
  S('Plan de Desarrollo Económico y Social 2021–2025','Governo de Luis Arce / Ministério do Planeamento da Bolívia','2021','https://www.planificacion.gob.bo/uploads/PDES_2021-2025aa.pdf','217 páginas: introdução; bases políticas; autonomias; dez eixos de industrialização, direitos, defesa, relações externas e cultura'),
  S('Luis Arce Catacora — biografia política','Roberto Ortiz de Zárate / CIDOB','Biografia e atualizações de mandato','https://www.cidob.org/lider-politico/luis-arce-catacora','Autoria do modelo económico, eleição em 2020 e contexto do mandato'),
  S('La Biblia y la cruz salen de los actos de Gobierno de Bolivia','EFE / Bolivia.com','2020-11','https://www.bolivia.com/actualidad/nacionales/biblia-y-cruz-salen-actos-gobierno-bolivia-285740','Mudança dos símbolos religiosos na posse e atos do novo governo; recorte institucional, não crença pessoal')
 ],
 rows:[
  A(60,[1],'Autonomias territoriais e indígenas dentro de um Estado unitário.','Territorial and indigenous autonomies within a unitary state.'),
  A(80,[1,2],'Mandato eleitoral e participação comunitária apresentados como base institucional.','Electoral mandate and community participation presented as institutional foundations.'),
  A(60,[1],'Justiça, direitos e combate ao crime com segurança soberana.','Justice, rights and crime prevention alongside sovereign security.'),
  A(20,[1],'Pluralidade cultural, jurídica e linguística com combate à discriminação racial.','Cultural, legal and linguistic plurality alongside opposition to racial discrimination.'),
  A(50,[1],'Defesa territorial e forças armadas com cooperação internacional.','Territorial defence and armed forces alongside international cooperation.',20),
  A(40,[1],'Soberania e reivindicações nacionais com integração negociada.','Sovereignty and national claims alongside negotiated integration.',20),
  A(80,[1],'Recursos estratégicos públicos com economia privada e comunitária coexistente.','Public strategic resources alongside private and community economies.'),
  A(90,[1],'Planificação plurianual e territorial coordena investimento e indústria.','Multiyear territorial planning coordinates investment and industry.'),
  A(80,[1],'Industrialização por substituição de importações, mantendo exportações valorizadas.','Import-substitution industrialisation while retaining higher-value exports.'),
  A(70,[1,3],'Pluralidade espiritual e atos governamentais sem imposição dos símbolos cristãos.','Spiritual plurality and government ceremonies without imposed Christian symbols.'),
  A(70,[1],'Despatriarcalização, direitos femininos e combate à violência de género.','Depatriarchalisation, women’s rights and opposition to gender violence.'),
  A(80,[1],'Soberania científica e industrial com proteção da Madre Terra.','Scientific and industrial sovereignty alongside protection of Mother Earth.')
 ]
},
{
 person:'oscar-arias',name:'Óscar Arias',lifespan:'1940–',role:'Presidente da Costa Rica (1986–1990; 2006–2010)',roleEn:'President of Costa Rica (1986–1990; 2006–2010)',
 ideology:'social-democracia-aberta-arias',ideologyName:'Social-democracia aberta — Arias',ideologyEn:'Open social democracy — Arias',category:'Centro',categoryEn:'Center',
 country:'costa-rica-arias-2006',countryName:'Costa Rica — segundo governo Arias',countryEn:'Costa Rica — second Arias government',flag:'flag-costa-rica',period:'2006–2010',evidencePeriod:'Plano Nacional 2006–2010 e declaração individual sobre laicidade de 2009',
 about:'Social-democracia aberta ao comércio, com investimento privado, educação e proteção social. Defende desarmamento, diplomacia de paz e reforma laica, sem confundir proposta com mudança constitucional concretizada.',
 aboutEn:'Trade-open social democracy with private investment, education and social protection. Advocates disarmament, peace diplomacy and secular reform without confusing proposals with accomplished constitutional change.',
 phrase:'Quero serviços sociais e oportunidades económicas, com comércio aberto e diplomacia de paz.',phraseEn:'I want social services and economic opportunity with open trade and peace diplomacy.',
 limits:'A defesa pessoal de um Estado sem religião oficial em 2009 coexistia com apoio à referência a Deus no juramento. A Constituição continuava a reconhecer a religião católica; o perfil estatal difere por isso do programático. Igualdade feminina não significa liberalização geral dos costumes.',
 limitsEn:'Personal advocacy of a state without official religion in 2009 coexisted with support for God in the oath. The Constitution still recognised Catholicism; the state profile therefore differs from the programme. Women’s equality is not general social liberalisation.',
 sources:[
  S('Plan Nacional de Desarrollo Jorge Manuel Dengo Obregón 2006–2010','Governo de Óscar Arias / MIDEPLAN; arquivo INAMU','2007','https://formatos.inamu.go.cr/SIDOC/archivosLibros/plan_nacional_obregon_636058506775696123.pdf','135 páginas; apresentação presidencial, política social, política produtiva, ambiente, reforma institucional e política externa'),
  S('Oscar Arias aboga por estado que no tenga una religión oficial','Redação / La Nación','2009-09-09','https://www.nacion.com/el-pais/oscar-arias-aboga-por-estado-que-no-tenga-una-religion-oficial/BFUJBZMHVRFNRJ5LROLRWJA2G4/story/','Declaração direta de Arias e descrição do artigo 75 constitucional ainda em vigor'),
  S('The Nobel Peace Prize 1987 — Óscar Arias Sánchez','Nobel Foundation','1987; arquivo biográfico','https://www.nobelprize.org/prizes/peace/1987/arias/facts/','Enquadramento da mediação e paz centro-americana; não usado para inventar políticas de 2006')
 ],
 rows:[
  A(40,[1],'Desconcentração territorial e gestão municipal no Estado unitário.','Territorial deconcentration and municipal governance within a unitary state.'),
  A(90,[1],'Participação cidadã, Estado de direito e instituições democráticas.','Citizen participation, rule of law and democratic institutions.'),
  A(40,[1],'Segurança cidadã e polícia com justiça e direitos humanos.','Citizen security and police alongside justice and human rights.'),
  A(30,[1],'Serviços e inclusão de migrantes com integração social.','Migrant services and inclusion alongside social integration.'),
  A(10,[1,3],'País sem exército e promoção do desarmamento.','Country without an army and advocacy of disarmament.'),
  A(90,[1,3],'Mediação, cooperação e solução pacífica de conflitos.','Mediation, cooperation and peaceful conflict resolution.'),
  A(40,[1],'Proteção social e serviços públicos com investimento privado.','Social protection and public services alongside private investment.'),
  A(50,[1],'Planeamento social e regulação com concorrência e simplificação económica.','Social planning and regulation alongside competition and economic simplification.',20),
  A(10,[1],'Abertura comercial e integração pelo tratado de comércio regional.','Trade opening and integration through the regional trade agreement.'),
  A(70,[2],'Defende remover a religião oficial, conservando Deus no juramento.','Advocates removing official religion while retaining God in the oath.'),
  A(70,[1],'Igualdade feminina e combate à violência e exclusão social.','Women’s equality and opposition to violence and social exclusion.'),
  A(60,[1],'Investigação e inovação com biodiversidade e sustentabilidade.','Research and innovation alongside biodiversity and sustainability.',20)
 ],countryOverrides:{religiao:A(30,[2],'Religião católica oficial ainda prevista no artigo 75, com liberdade religiosa.','Catholicism still officially recognised by Article 75 alongside religious freedom.')}
},
{
 person:'sanna-marin',name:'Sanna Marin',lifespan:'1985–',role:'Primeira-ministra da Finlândia (2019–2023)',roleEn:'Prime Minister of Finland (2019–2023)',
 ideology:'social-democracia-ecologica-marin',ideologyName:'Social-democracia ecológica — Marin',ideologyEn:'Green social democracy — Marin',category:'Esquerda',categoryEn:'Left',
 country:'finlandia-marin-programa-2019',countryName:'Finlândia — programa Marin de 2019',countryEn:'Finland — Marin’s 2019 programme',flag:'flag-finland',period:'2019–2023',evidencePeriod:'Programa governamental de 2019; relações religiosas qualificadas pela proposta HE 108/2022',
 about:'Social-democracia ecológica com serviços universais, igualdade, acolhimento de migrantes e neutralidade carbónica. Combina investigação, economia mista e defesa nacional com cooperação europeia.',
 aboutEn:'Green social democracy with universal services, equality, migrant reception and carbon neutrality. Combines research, a mixed economy and national defence with European cooperation.',
 phrase:'Quero serviços universais, igualdade e uma transição ecológica justa, apoiada pela ciência e pela democracia.',phraseEn:'I want universal services, equality and a just green transition supported by science and democracy.',
 limits:'A diplomacia e defesa referem o programa de 2019, anterior à candidatura e adesão à NATO em 2022–2023; não se apresenta esse vetor como resultado final do mandato. A proposta religiosa de 2022 conserva as relações Igreja–Estado, por isso liberdade de crença não é tratada como separação total.',
 limitsEn:'Diplomacy and defence refer to the 2019 programme before the 2022–2023 NATO application and accession; the vector is not presented as the final term outcome. The 2022 religious bill preserves church–state relations, so freedom of belief is not total separation.',
 sources:[
  S('Programme of Prime Minister Sanna Marin’s Government: Inclusive and competent Finland','Governo de Sanna Marin / Government Publications 2019:33','2019-12-10','https://julkaisut.valtioneuvosto.fi/server/api/core/bitstreams/b88a95cb-46d1-4785-98c9-8919cc3df7b1/content','232 páginas: democracia e direitos; política externa/defesa; igualdade e migração; clima; economia, investigação e serviços'),
  S('Sanna Marin — biografia política','Roberto Ortiz de Zárate / CIDOB','Biografia e atualizações de mandato','https://www.cidob.org/lider-politico/sanna-marin','Chefia da coligação, igualdade e mudança de segurança em 2022–2023'),
  S('Hallituksen esitys OKM/2022/45 — HE 108/2022','Governo da Finlândia / Ministério da Educação e Cultura','2022-06-30','https://valtioneuvosto.fi/paatokset/paatos?decisionId=0900908f807c2a07','Asia e decisão: nova lei da Igreja evangélica luterana; compatibilidade constitucional; ausência expressa de mudança nas relações Igreja–Estado')
 ],
 rows:[
  A(60,[1],'Autonomia municipal e participação regional dentro de um Estado unitário.','Municipal autonomy and regional participation within a unitary state.'),
  A(90,[1],'Democracia representativa, participação cidadã e direitos fundamentais.','Representative democracy, citizen participation and fundamental rights.'),
  A(40,[1],'Segurança policial com privacidade, direitos e prevenção social.','Police security alongside privacy, rights and social prevention.'),
  A(20,[1],'Migração laboral, integração inclusiva e proteção do asilo.','Labour migration, inclusive integration and asylum protection.'),
  A(60,[1],'Defesa nacional e conscrição, com cooperação internacional no programa de 2019.','National defence and conscription with international cooperation in the 2019 programme.',20),
  A(80,[1],'Multilateralismo, ONU, União Europeia e mediação internacional.','Multilateralism, the UN, European Union and international mediation.'),
  A(60,[1],'Serviços universais públicos com economia empresarial privada.','Universal public services alongside a private business economy.'),
  A(60,[1],'Regulação e investimento público para transição verde, mantendo concorrência.','Regulation and public investment for green transition while retaining competition.'),
  A(20,[1],'Comércio aberto, regras multilaterais e integração europeia.','Open trade, multilateral rules and European integration.'),
  A(50,[1,3],'Direitos de crença coexistem com relações públicas da Igreja luterana preservadas.','Belief rights coexist with preserved Lutheran church–state relationships.',20),
  A(90,[1],'Igualdade de género e direitos das minorias sexuais e de género explícitos.','Explicit gender equality and sexual and gender minority rights.'),
  A(60,[1],'Investigação e digitalização com fortes limites climáticos e proteção da natureza.','Research and digitisation alongside strong climate limits and nature protection.',20)
 ]
}
];
export default assemble(cohorts,{id:'lote-03',imageInventory:'imagens-lote-03.json',reviewed:'2026-10-10'});
