// PARTE 2: Perguntas Universais Extra
// PART 2: Extra Universal Questions
const questionsPart2 = [
    // Economic
    { id: "extra_201", langs: ["pt", "en"], pt: "A mais-valia (o lucro) é essencialmente um roubo do trabalho do operário.", en: "Surplus value (profit) is essentially theft of the worker's labor.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_202", langs: ["pt", "en"], pt: "Os diretores executivos (CEOs) não deveriam ganhar mais de 20 vezes o salário do empregado mais mal pago da empresa.", en: "CEOs should not earn more than 20 times the salary of the lowest paid employee.", effect: { axis: "cul_hier", weight: 1 } },
    { id: "extra_203", langs: ["pt", "en"], pt: "A automação (robôs/IA) deve pagar impostos para financiar quem perde o emprego.", en: "Automation (robots/AI) should pay taxes to fund those who lose their jobs.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "extra_204", langs: ["pt", "en"], pt: "É legítimo que uma empresa despeça trabalhadores para aumentar o valor das ações.", en: "It is legitimate for a company to fire workers to increase stock value.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "extra_205", langs: ["pt", "en"], pt: "Os sindicatos têm demasiado poder e bloqueiam o progresso económico.", en: "Unions have too much power and block economic progress.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_206", langs: ["pt", "en"], pt: "O trabalho voluntário não remunerado (como cuidar da casa) devia contar para a reforma.", en: "Unpaid voluntary work (like housework) should count towards retirement.", effect: { axis: "phil_soc", weight: -1 } },
    { id: "extra_207", langs: ["pt", "en"], pt: "O salário deve ser definido inteiramente pela oferta e procura, sem um salário mínimo estatal.", en: "Wages should be determined entirely by supply and demand, without a state minimum wage.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_208", langs: ["pt", "en"], pt: "As empresas devem ser obrigadas a ter representantes dos trabalhadores na administração.", en: "Companies must be required to have worker representatives on the board.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_209", langs: ["pt", "en"], pt: "O direito à greve deve ser limitado em serviços essenciais (transportes, saúde, lixo).", en: "The right to strike should be limited in essential services.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_210", langs: ["pt", "en"], pt: "As cooperativas são um modelo de negócio superior às empresas privadas tradicionais.", en: "Cooperatives are a superior business model to traditional private companies.", effect: { axis: "eco_sys", weight: -1 } },

    // Property
    { id: "extra_211", langs: ["pt", "en"], pt: "A posse de terra deveria ser comunitária; ninguém possui a terra.", en: "Land ownership should be communal; no one owns the land.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_212", langs: ["pt", "en"], pt: "É imoral ter casas vazias apenas para especulação enquanto há pessoas sem-abrigo.", en: "It is immoral to have empty houses just for speculation while there are homeless people.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_213", langs: ["pt", "en"], pt: "O Estado deve construir habitação pública suficiente para competir com o setor privado.", en: "The State must build enough public housing to compete with the private sector.", effect: { axis: "eco_act", weight: -1 } },
    { id: "extra_214", langs: ["pt", "en"], pt: "A herança perpetua a desigualdade e deve ser taxada a quase 100% acima de um certo valor.", en: "Inheritance perpetuates inequality and should be taxed at nearly 100% above a certain amount.", effect: { axis: "cul_hier", weight: 1 } },
    { id: "extra_215", langs: ["pt", "en"], pt: "A propriedade intelectual (patentes/copyright) retarda a inovação humana.", en: "Intellectual property (patents/copyright) retards human innovation.", effect: { axis: "eco_act", weight: 1 } },

    // Market
    { id: "extra_216", langs: ["pt", "en"], pt: "O padrão-ouro (moeda baseada em ouro) deve ser reintroduzido para evitar a inflação.", en: "The gold standard should be reintroduced to avoid inflation.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_217", langs: ["pt", "en"], pt: "Os bancos centrais fazem mais mal do que bem à economia.", en: "Central banks do more harm than good to the economy.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_218", langs: ["pt", "en"], pt: "Monopólios naturais (água, estradas) nunca devem ser privados.", en: "Natural monopolies (water, roads) should never be private.", effect: { axis: "eco_act", weight: -1 } },
    { id: "extra_219", langs: ["pt", "en"], pt: "O comércio livre ajuda as grandes multinacionais a explorar países pobres.", en: "Free trade helps large multinationals exploit poor countries.", effect: { axis: "dip_align", weight: -1 } },
    { id: "extra_220", langs: ["pt", "en"], pt: "A especulação financeira na bolsa de valores é tão nociva quanto o jogo de casino.", en: "Financial speculation on the stock market is as harmful as casino gambling.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_221", langs: ["pt", "en"], pt: "As criptomoedas são o futuro da liberdade financeira longe do Estado.", en: "Cryptocurrencies are the future of financial freedom away from the State.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_222", langs: ["pt", "en"], pt: "O protecionismo é necessário para manter a soberania alimentar de um país.", en: "Protectionism is necessary to maintain a country's food sovereignty.", effect: { axis: "dip_align", weight: -1 } },
    { id: "extra_223", langs: ["pt", "en"], pt: "Se uma empresa polui, deve ser fechada, não apenas multada.", en: "If a company pollutes, it should be closed, not just fined.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "extra_224", langs: ["pt", "en"], pt: "O consumidor é racional e sabe sempre o que é melhor para si.", en: "The consumer is rational and always knows what is best for themselves.", effect: { axis: "eco_act", weight: 1 } },
    { id: "extra_225", langs: ["pt", "en"], pt: "O Estado deve subsidiar a cultura (teatro, cinema), pois o mercado não a sustenta sozinho.", en: "The State should subsidize culture, as the market cannot support it alone.", effect: { axis: "eco_act", weight: -1 } },

    // Taxes
    { id: "extra_226", langs: ["pt", "en"], pt: "Um imposto fixo (flat tax) é mais justo do que um imposto progressivo.", en: "A flat tax is fairer than a progressive tax.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "extra_227", langs: ["pt", "en"], pt: "A caridade privada é mais eficiente a resolver a pobreza do que a segurança social.", en: "Private charity is more efficient at solving poverty than social security.", effect: { axis: "phil_soc", weight: 1 } },
    { id: "extra_228", langs: ["pt", "en"], pt: "O acesso à saúde de qualidade deve depender da capacidade de pagamento de cada um.", en: "Access to quality healthcare should depend on one's ability to pay.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "extra_229", langs: ["pt", "en"], pt: "O Rendimento Básico Incondicional (RBI) é inevitável no futuro.", en: "Universal Basic Income (UBI) is inevitable in the future.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "extra_230", langs: ["pt", "en"], pt: "Os impostos são, por definição, uma forma de roubo.", en: "Taxes are, by definition, a form of theft.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_231", langs: ["pt", "en"], pt: "O ensino superior deve ser pago pelos estudantes, pois é um investimento pessoal.", en: "Higher education should be paid for by students, as it is a personal investment.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "extra_232", langs: ["pt", "en"], pt: "Os ricos devem contribuir desproporcionalmente mais para a sociedade.", en: "The rich should contribute disproportionately more to society.", effect: { axis: "cul_hier", weight: 1 } },

    // Auth vs Lib
    { id: "extra_233", langs: ["pt", "en"], pt: "A reabilitação de criminosos é mais importante do que a punição.", en: "Criminal rehabilitation is more important than punishment.", effect: { axis: "law_goal", weight: 1 } },
    { id: "extra_234", langs: ["pt", "en"], pt: "A pena de morte devia ser uma opção para quem já não tem recuperação possível.", en: "The death penalty should be an option for those beyond recovery.", effect: { axis: "law_goal", weight: -1 } },
    { id: "extra_235", langs: ["pt", "en"], pt: "As prisões privadas são um erro moral.", en: "Private prisons are a moral error.", effect: { axis: "law_type", weight: 1 } },
    { id: "extra_236", langs: ["pt", "en"], pt: "Crimes sem vítimas (como consumo de drogas ou jogo) não deveriam ser crimes.", en: "Victimless crimes (like drug use or gambling) should not be crimes.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_237", langs: ["pt", "en"], pt: "A polícia deve ter equipamento militar para lidar com motins urbanos.", en: "Police should have military equipment to deal with urban riots.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_238", langs: ["pt", "en"], pt: "O voto deveria ser um direito, não um dever (contra o voto obrigatório).", en: "Voting should be a right, not a duty.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_239", langs: ["pt", "en"], pt: "As pessoas deveriam ter de passar num teste de inteligência básica para poder votar.", en: "People should have to pass a basic intelligence test to vote.", effect: { axis: "gov_form", weight: -1 } },
    { id: "extra_240", langs: ["pt", "en"], pt: "Um governo forte é necessário para manter a ordem moral na sociedade.", en: "A strong government is necessary to maintain moral order in society.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_241", langs: ["pt", "en"], pt: "A tortura é justificável se puder salvar vidas inocentes (ex: terrorismo).", en: "Torture is justifiable if it saves innocent lives.", effect: { axis: "phil_ethics", weight: 1 } },
    { id: "extra_242", langs: ["pt", "en"], pt: "O Estado deve fornecer apoio legal gratuito de qualidade igual à dos advogados privados.", en: "The State must provide free legal support of equal quality to private lawyers.", effect: { axis: "cul_hier", weight: 1 } },

    // Surveillance
    { id: "extra_243", langs: ["pt", "en"], pt: "Quem não deve, não teme a vigilância do Estado.", en: "Those who have nothing to hide fear no surveillance.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_244", langs: ["pt", "en"], pt: "As câmaras de reconhecimento facial em locais públicos são uma ameaça à liberdade.", en: "Facial recognition cameras in public places are a threat to freedom.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_245", langs: ["pt", "en"], pt: "O anonimato na internet deve ser garantido por lei.", en: "Anonymity on the internet must be guaranteed by law.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_246", langs: ["pt", "en"], pt: "As redes sociais devem ser responsabilizadas pelo conteúdo que os utilizadores publicam.", en: "Social networks should be held accountable for user content.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_247", langs: ["pt", "en"], pt: "O denunciante (whistleblower) que revela segredos de Estado (tipo Snowden) é um herói, não um traidor.", en: "Whistleblowers who reveal state secrets are heroes, not traitors.", effect: { axis: "gov_scope", weight: -1 } },

    // Liberties
    { id: "extra_248", langs: ["pt", "en"], pt: "A posse de armas de fogo recreativas deve ser proibida.", en: "Recreational firearm ownership should be prohibited.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_249", langs: ["pt", "en"], pt: "O discurso de ódio deve ser punido criminalmente.", en: "Hate speech should be criminally punished.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_250", langs: ["pt", "en"], pt: "A liberdade de expressão deve ser absoluta, mesmo para nazis ou extremistas.", en: "Freedom of speech should be absolute, even for Nazis or extremists.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_251", langs: ["pt", "en"], pt: "O suicídio assistido deve ser legal para qualquer adulto mentalmente capaz.", en: "Assisted suicide should be legal for any mentally capable adult.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_252", langs: ["pt", "en"], pt: "O uso de cinto de segurança ou capacete devia ser uma escolha pessoal, não uma lei.", en: "Seatbelt or helmet use should be a personal choice, not a law.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_253", langs: ["pt", "en"], pt: "A prostituição deve ser tratada como qualquer outra profissão.", en: "Prostitution should be treated like any other profession.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "extra_254", langs: ["pt", "en"], pt: "O Estado não tem o direito de saber a religião ou etnia dos seus cidadãos (censos).", en: "The State has no right to know the religion or ethnicity of its citizens.", effect: { axis: "gov_scope", weight: -1 } },

    // Cultural
    { id: "extra_255", langs: ["pt", "en"], pt: "O casamento é, por definição, a união entre um homem e uma mulher.", en: "Marriage is, by definition, the union between a man and a woman.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_256", langs: ["pt", "en"], pt: "A adoção por casais do mesmo sexo é prejudicial para a criança.", en: "Adoption by same-sex couples is harmful to the child.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_257", langs: ["pt", "en"], pt: "A identidade de género é uma construção social, não uma realidade biológica.", en: "Gender identity is a social construct, not a biological reality.", effect: { axis: "soc_time", weight: 1 } },
    { id: "extra_258", langs: ["pt", "en"], pt: "As crianças devem ser educadas sobre sexualidade e género desde o ensino básico.", en: "Children should be educated about sexuality and gender from elementary school.", effect: { axis: "soc_time", weight: 1 } },
    { id: "extra_259", langs: ["pt", "en"], pt: "O feminismo moderno já não procura igualdade, mas sim superioridade.", en: "Modern feminism no longer seeks equality, but superiority.", effect: { axis: "soc_change", weight: -1 } },
    { id: "extra_260", langs: ["pt", "en"], pt: "O papel da mulher é, primordialmente, a família e o lar.", en: "The woman's role is primarily the family and the home.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_261", langs: ["pt", "en"], pt: "As pessoas trans devem poder usar as casas de banho do género com que se identificam.", en: "Trans people should be able to use the bathrooms of the gender they identify with.", effect: { axis: "soc_time", weight: 1 } },
    { id: "extra_262", langs: ["pt", "en"], pt: "O aborto deve ser permitido em qualquer fase da gravidez se a mulher assim o desejar.", en: "Abortion should be allowed at any stage of pregnancy if the woman wishes.", effect: { axis: "gov_scope", weight: -1 } },

    // Religion
    { id: "extra_263", langs: ["pt", "en"], pt: "A religião faz mais mal do que bem à sociedade.", en: "Religion does more harm than good to society.", effect: { axis: "soc_time", weight: 1 } },
    { id: "extra_264", langs: ["pt", "en"], pt: "Os símbolos religiosos devem ser banidos de edifícios públicos.", en: "Religious symbols should be banned from public buildings.", effect: { axis: "soc_time", weight: 1 } },
    { id: "extra_265", langs: ["pt", "en"], pt: "As tradições do passado são a âncora que mantém a sociedade estável.", en: "Past traditions are the anchor that keeps society stable.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_266", langs: ["pt", "en"], pt: "A astrologia e medicinas alternativas devem ser levadas a sério pelo sistema de saúde.", en: "Astrology and alternative medicines should be taken seriously by the health system.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_267", langs: ["pt", "en"], pt: "O multiculturalismo falhou; as culturas devem ser preservadas separadamente.", en: "Multiculturalism has failed; cultures should be preserved separately.", effect: { axis: "cul_div", weight: -1 } },
    { id: "extra_268", langs: ["pt", "en"], pt: "É importante defender os \"valores ocidentais\" contra influências externas.", en: "It is important to defend \"Western values\" against external influences.", effect: { axis: "dip_moral", weight: -1 } },
    { id: "extra_269", langs: ["pt", "en"], pt: "A arte moderna, que não requer técnica clássica, não é verdadeira arte.", en: "Modern art, which requires no classical technique, is not true art.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_270", langs: ["pt", "en"], pt: "O respeito pelos mais velhos está a perder-se e isso destrói a sociedade.", en: "Respect for elders is being lost and this destroys society.", effect: { axis: "soc_time", weight: -1 } },

    // Science/Env
    { id: "extra_271", langs: ["pt", "en"], pt: "A alteração genética de embriões humanos para eliminar doenças é aceitável.", en: "Genetic alteration of human embryos to eliminate diseases is acceptable.", effect: { axis: "tech_nature", weight: 1 } },
    { id: "extra_272", langs: ["pt", "en"], pt: "A energia nuclear é a única solução viável para o aquecimento global.", en: "Nuclear energy is the only viable solution for global warming.", effect: { axis: "tech_speed", weight: 1 } },
    { id: "extra_273", langs: ["pt", "en"], pt: "Os animais têm direitos equivalentes aos humanos.", en: "Animals have rights equivalent to humans.", effect: { axis: "tech_nature", weight: -1 } },
    { id: "extra_274", langs: ["pt", "en"], pt: "Comer carne é imoral.", en: "Eating meat is immoral.", effect: { axis: "tech_nature", weight: -1 } },
    { id: "extra_275", langs: ["pt", "en"], pt: "A tecnologia vai resolver os problemas ambientais sem precisarmos de reduzir o consumo.", en: "Technology will solve environmental problems without needing to reduce consumption.", effect: { axis: "tech_speed", weight: 1 } },
    { id: "extra_276", langs: ["pt", "en"], pt: "Devemos colonizar Marte antes de resolvermos todos os problemas da Terra.", en: "We must colonize Mars before solving all of Earth's problems.", effect: { axis: "tech_nature", weight: 1 } },
    { id: "extra_277", langs: ["pt", "en"], pt: "As vacinas devem ser obrigatórias para a saúde pública.", en: "Vaccines should be mandatory for public health.", effect: { axis: "gov_scope", weight: 1 } },

    // International
    { id: "extra_278", langs: ["pt", "en"], pt: "Um governo mundial seria benéfico para a humanidade.", en: "A world government would be beneficial for humanity.", effect: { axis: "dip_align", weight: 1 } },
    { id: "extra_279", langs: ["pt", "en"], pt: "As Nações Unidas (ONU) devem ter poder para anular leis nacionais.", en: "The UN should have power to override national laws.", effect: { axis: "dip_align", weight: 1 } },
    { id: "extra_280", langs: ["pt", "en"], pt: "O meu país deve vir sempre em primeiro lugar.", en: "My country should always come first.", effect: { axis: "dip_align", weight: -1 } },
    { id: "extra_281", langs: ["pt", "en"], pt: "Ninguém é ilegal; as fronteiras são linhas imaginárias.", en: "No one is illegal; borders are imaginary lines.", effect: { axis: "dip_align", weight: 1 } },
    { id: "extra_282", langs: ["pt", "en"], pt: "Os países ricos têm a obrigação moral de acolher refugiados climáticos.", en: "Rich countries have a moral obligation to welcome climate refugees.", effect: { axis: "dip_moral", weight: 1 } },
    { id: "extra_283", langs: ["pt", "en"], pt: "A ajuda externa é um desperdício de dinheiro que devia ser gasto internamente.", en: "Foreign aid is a waste of money that should be spent internally.", effect: { axis: "dip_align", weight: -1 } },
    { id: "extra_284", langs: ["pt", "en"], pt: "O turismo de massas destrói a cultura local e deve ser limitado.", en: "Mass tourism destroys local culture and should be limited.", effect: { axis: "dip_align", weight: -1 } },

    // War
    { id: "extra_285", langs: ["pt", "en"], pt: "A guerra é por vezes necessária para espalhar a democracia.", en: "War is sometimes necessary to spread democracy.", effect: { axis: "dip_align", weight: 1 } },
    { id: "extra_286", langs: ["pt", "en"], pt: "O serviço militar cria cidadãos mais responsáveis.", en: "Military service creates more responsible citizens.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "extra_287", langs: ["pt", "en"], pt: "O pacifismo total é ingénuo num mundo perigoso.", en: "Total pacifism is naive in a dangerous world.", effect: { axis: "phil_change", weight: 1 } },
    { id: "extra_288", langs: ["pt", "en"], pt: "A venda de armas a ditaduras é aceitável se beneficiar a economia nacional.", en: "Selling arms to dictatorships is acceptable if it benefits the national economy.", effect: { axis: "phil_moral", weight: -1 } },
    { id: "extra_289", langs: ["pt", "en"], pt: "O colonialismo trouxe civilização a partes do mundo que não a tinham.", en: "Colonialism brought civilization to parts of the world that didn't have it.", effect: { axis: "dip_moral", weight: -1 } },

    // Meta
    { id: "extra_290", langs: ["pt", "en"], pt: "A natureza humana é fundamentalmente boa e cooperativa.", en: "Human nature is fundamentally good and cooperative.", effect: { axis: "phil_moral", weight: 1 } },
    { id: "extra_291", langs: ["pt", "en"], pt: "A natureza humana é fundamentalmente egoísta e competitiva.", en: "Human nature is fundamentally selfish and competitive.", effect: { axis: "phil_moral", weight: -1 } },
    { id: "extra_292", langs: ["pt", "en"], pt: "O destino de uma pessoa é determinado mais pelas suas escolhas do que pelas suas circunstâncias.", en: "A person's destiny is determined more by their choices than their circumstances.", effect: { axis: "phil_soc", weight: 1 } },
    { id: "extra_293", langs: ["pt", "en"], pt: "A lógica é mais importante que os sentimentos na tomada de decisões políticas.", en: "Logic is more important than feelings in political decision making.", effect: { axis: "phil_moral", weight: -1 } },
    { id: "extra_294", langs: ["pt", "en"], pt: "A verdade absoluta não existe, tudo é relativo.", en: "Absolute truth does not exist, everything is relative.", effect: { axis: "dip_moral", weight: -1 } },
    { id: "extra_295", langs: ["pt", "en"], pt: "O fim justifica os meios.", en: "The ends justify the means.", effect: { axis: "phil_ethics", weight: 1 } },
    { id: "extra_296", langs: ["pt", "en"], pt: "É melhor ser temido do que amado.", en: "It is better to be feared than loved.", effect: { axis: "phil_moral", weight: -1 } },
    { id: "extra_297", langs: ["pt", "en"], pt: "A hierarquia é natural e inevitável em qualquer grupo humano.", en: "Hierarchy is natural and inevitable in any human group.", effect: { axis: "cul_hier", weight: -1 } },
    { id: "extra_298", langs: ["pt", "en"], pt: "O progresso tecnológico nem sempre é positivo.", en: "Technological progress is not always positive.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "extra_299", langs: ["pt", "en"], pt: "A vida era melhor há 50 anos atrás.", en: "Life was better 50 years ago.", effect: { axis: "soc_time", weight: -1 } },
    { id: "extra_300", langs: ["pt", "en"], pt: "A liberdade total é uma ilusão.", en: "Total freedom is an illusion.", effect: { axis: "gov_scope", weight: 1 } }
];
