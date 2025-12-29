const questionsData = [
    {
        "id": "univ_1", "langs": ["pt", "en"],
        "pt": "Os meios de produção (fábricas, terras) devem pertencer a quem neles trabalha, não a patrões privados.",
        "en": "The means of production should belong to those who work in them, not private owners.",
        "effect": { "axis": "eco_sys", "weight": -1 }
    },
    {
        "id": "univ_2", "langs": ["pt", "en"],
        "pt": "A acumulação ilimitada de riqueza por indivíduos é benéfica para a sociedade como um todo.",
        "en": "Unlimited accumulation of wealth by individuals is beneficial for society as a whole.",
        "effect": { "axis": "eco_sys", "weight": 1 }
    },
    {
        "id": "univ_3", "langs": ["pt", "en"],
        "pt": "O lucro é a motivação mais eficaz para garantir a inovação e o progresso.",
        "en": "Profit is the most effective motivation to ensure innovation and progress.",
        "effect": { "axis": "eco_sys", "weight": 1 }
    },
    {
        "id": "univ_4", "langs": ["pt", "en"],
        "pt": "Uma sociedade sem classes seria o ideal máximo da humanidade.",
        "en": "A classless society would be the ultimate ideal for humanity.",
        "effect": { "axis": "eco_sys", "weight": -1 }
    },
    {
        "id": "univ_5", "langs": ["pt", "en"],
        "pt": "A propriedade privada é um direito natural que não deve ser violado pelo Estado.",
        "en": "Private property is a natural right that should not be violated by the State.",
        "effect": { "axis": "eco_sys", "weight": 1 }
    },
    {
        "id": "univ_6", "langs": ["pt", "en"],
        "pt": "O governo deve definir os preços de bens essenciais (pão, leite, combustível) para evitar especulação.",
        "en": "The government should set prices for essential goods to avoid speculation.",
        "effect": { "axis": "eco_act", "weight": -1 }
    },
    {
        "id": "univ_7", "langs": ["pt", "en"],
        "pt": "A \"mão invisível\" do mercado resolve os problemas de distribuição melhor do que qualquer burocrata.",
        "en": "The \"invisible hand\" of the market solves distribution problems better than any bureaucrat.",
        "effect": { "axis": "eco_act", "weight": 1 }
    },
    {
        "id": "univ_8", "langs": ["pt", "en"],
        "pt": "O planeamento central da economia evitaria desperdícios e crises de superprodução.",
        "en": "Central planning of the economy would avoid waste and overproduction crises.",
        "effect": { "axis": "eco_act", "weight": -1 }
    },
    {
        "id": "univ_9", "langs": ["pt", "en"],
        "pt": "A concorrência desenfreada leva a produtos de pior qualidade e exploração.",
        "en": "Unbridled competition leads to lower quality products and exploitation.",
        "effect": { "axis": "eco_act", "weight": -1 }
    },
    {
        "id": "univ_10", "langs": ["pt", "en"],
        "pt": "Não deve haver qualquer regulação estatal sobre trocas comerciais voluntárias.",
        "en": "There should be no state regulation on voluntary trade.",
        "effect": { "axis": "eco_act", "weight": 1 }
    },
    {
        "id": "univ_11", "langs": ["pt", "en"],
        "pt": "O Estado não tem nada a ver com o que eu consumo ou faço no meu quarto.",
        "en": "The State has no business with what I consume or do in my bedroom.",
        "effect": { "axis": "gov_scope", "weight": -1 }
    },
    {
        "id": "univ_12", "langs": ["pt", "en"],
        "pt": "É necessário sacrificar alguma liberdade individual para garantir a segurança nacional.",
        "en": "It is necessary to sacrifice some individual freedom to ensure national security.",
        "effect": { "axis": "gov_scope", "weight": 1 }
    },
    {
        "id": "univ_13", "langs": ["pt", "en"],
        "pt": "A obediência à autoridade é uma virtude que deve ser ensinada às crianças.",
        "en": "Obedience to authority is a virtue that should be taught to children.",
        "effect": { "axis": "gov_scope", "weight": 1 }
    },
    {
        "id": "univ_14", "langs": ["pt", "en"],
        "pt": "Todos os impostos são uma forma de coerção e deveriam ser mínimos ou inexistentes.",
        "en": "All taxes are a form of coercion and should be minimal or nonexistent.",
        "effect": { "axis": "gov_scope", "weight": -1 }
    },
    {
        "id": "univ_15", "langs": ["pt", "en"],
        "pt": "O governo deve ter o poder de censurar informações que considere perigosas para a ordem pública.",
        "en": "The government should have the power to censor information it deems dangerous to public order.",
        "effect": { "axis": "gov_scope", "weight": 1 }
    },
    {
        "id": "univ_16", "langs": ["pt", "en"],
        "pt": "As decisões importantes são tomadas mais eficazmente por um líder forte do que por um parlamento.",
        "en": "Important decisions are made more effectively by a strong leader than by a parliament.",
        "effect": { "axis": "gov_form", "weight": -1 }
    },
    {
        "id": "univ_17", "langs": ["pt", "en"],
        "pt": "O voto de cada cidadão deve ter o mesmo peso, independentemente da sua educação.",
        "en": "Each citizen's vote should carry the same weight, regardless of education.",
        "effect": { "axis": "gov_form", "weight": 1 }
    },
    {
        "id": "univ_18", "langs": ["pt", "en"],
        "pt": "A democracia é apenas um concurso de popularidade que elege incompetentes.",
        "en": "Democracy is just a popularity contest that elects incompetents.",
        "effect": { "axis": "gov_form", "weight": -1 }
    },
    {
        "id": "univ_19", "langs": ["pt", "en"],
        "pt": "Os governantes devem ser responsabilizados periodicamente através de eleições livres.",
        "en": "Rulers must be held accountable periodically through free elections.",
        "effect": { "axis": "gov_form", "weight": 1 }
    },
    {
        "id": "univ_20", "langs": ["pt", "en"],
        "pt": "Um governo de especialistas técnicos (Tecnocracia) é superior à vontade do povo.",
        "en": "A government of technical experts (Technocracy) is superior to the will of the people.",
        "effect": { "axis": "gov_form", "weight": -1 }
    },
    {
        "id": "univ_21", "langs": ["pt", "en"],
        "pt": "Eu considero-me um cidadão do mundo antes de ser cidadão do meu país.",
        "en": "I consider myself a citizen of the world before being a citizen of my country.",
        "effect": { "axis": "dip_align", "weight": 1 }
    },
    {
        "id": "univ_22", "langs": ["pt", "en"],
        "pt": "O meu país não deve ceder soberania a organizações internacionais como a ONU ou a OMS.",
        "en": "My country should not cede sovereignty to international organizations like the UN or WHO.",
        "effect": { "axis": "dip_align", "weight": -1 }
    },
    {
        "id": "univ_23", "langs": ["pt", "en"],
        "pt": "As fronteiras abertas são o objetivo final da humanidade.",
        "en": "Open borders are the ultimate goal of humanity.",
        "effect": { "axis": "dip_align", "weight": 1 }
    },
    {
        "id": "univ_24", "langs": ["pt", "en"],
        "pt": "Devemos proteger a nossa economia local contra produtos estrangeiros baratos.",
        "en": "We must protect our local economy against cheap foreign products.",
        "effect": { "axis": "dip_align", "weight": -1 }
    },
    {
        "id": "univ_25", "langs": ["pt", "en"],
        "pt": "Os problemas globais exigem um governo global.",
        "en": "Global problems require a global government.",
        "effect": { "axis": "dip_align", "weight": 1 }
    },
    {
        "id": "univ_26", "langs": ["pt", "en"],
        "pt": "Diferentes culturas têm diferentes verdades morais e não devemos julgar.",
        "en": "Different cultures have different moral truths and we should not judge.",
        "effect": { "axis": "dip_moral", "weight": -1 }
    },
    {
        "id": "univ_27", "langs": ["pt", "en"],
        "pt": "Os Direitos Humanos aplicam-se a todas as pessoas, independentemente da sua cultura ou religião.",
        "en": "Human Rights apply to everyone, regardless of culture or religion.",
        "effect": { "axis": "dip_moral", "weight": 1 }
    },
    {
        "id": "univ_28", "langs": ["pt", "en"],
        "pt": "É aceitável tratar os membros da nossa própria comunidade melhor do que estranhos.",
        "en": "It is acceptable to treat members of our own community better than strangers.",
        "effect": { "axis": "dip_moral", "weight": -1 }
    },
    {
        "id": "univ_29", "langs": ["pt", "en"],
        "pt": "As leis devem ser universais e não adaptadas a grupos específicos.",
        "en": "Laws should be universal and not adapted to specific groups.",
        "effect": { "axis": "dip_moral", "weight": 1 }
    },
    {
        "id": "univ_30", "langs": ["pt", "en"],
        "pt": "A lealdade à tribo ou família é mais importante do que princípios abstratos de justiça.",
        "en": "Loyalty to tribe or family is more important than abstract principles of justice.",
        "effect": { "axis": "dip_moral", "weight": -1 }
    },
    {
        "id": "univ_31", "langs": ["pt", "en"],
        "pt": "O que é novo é geralmente melhor do que o que é velho.",
        "en": "What is new is generally better than what is old.",
        "effect": { "axis": "soc_time", "weight": 1 }
    },
    {
        "id": "univ_32", "langs": ["pt", "en"],
        "pt": "Devemos manter as tradições dos nossos antepassados, mesmo que pareçam irracionais hoje.",
        "en": "We should maintain our ancestors' traditions, even if they seem irrational today.",
        "effect": { "axis": "soc_time", "weight": -1 }
    },
    {
        "id": "univ_33", "langs": ["pt", "en"],
        "pt": "A sociedade deve evoluir constantemente e abandonar costumes ultrapassados.",
        "en": "Society should evolve constantly and abandon outdated customs.",
        "effect": { "axis": "soc_time", "weight": 1 }
    },
    {
        "id": "univ_34", "langs": ["pt", "en"],
        "pt": "A sabedoria antiga é muitas vezes superior ao conhecimento científico moderno.",
        "en": "Ancient wisdom is often superior to modern scientific knowledge.",
        "effect": { "axis": "soc_time", "weight": -1 }
    },
    {
        "id": "univ_35", "langs": ["pt", "en"],
        "pt": "A tecnologia vai resolver todos os grandes problemas da humanidade.",
        "en": "Technology will solve all of humanity's great problems.",
        "effect": { "axis": "soc_time", "weight": 1 }
    },
    {
        "id": "univ_36", "langs": ["pt", "en"],
        "pt": "Se algo funciona, não se deve tentar consertar.",
        "en": "If it ain't broke, don't fix it.",
        "effect": { "axis": "soc_change", "weight": -1 }
    },
    {
        "id": "univ_37", "langs": ["pt", "en"],
        "pt": "As instituições atuais estão podres e precisam de reformas profundas.",
        "en": "Current institutions are rotten and need deep reforms.",
        "effect": { "axis": "soc_change", "weight": 1 }
    },
    {
        "id": "univ_38", "langs": ["pt", "en"],
        "pt": "A mudança social rápida traz instabilidade e caos.",
        "en": "Rapid social change brings instability and chaos.",
        "effect": { "axis": "soc_change", "weight": -1 }
    },
    {
        "id": "univ_39", "langs": ["pt", "en"],
        "pt": "Devemos estar sempre à procura de formas de melhorar o sistema político.",
        "en": "We should always be looking for ways to improve the political system.",
        "effect": { "axis": "soc_change", "weight": 1 }
    },
    {
        "id": "univ_40", "langs": ["pt", "en"],
        "pt": "É melhor manter um sistema imperfeito do que arriscar numa alternativa desconhecida.",
        "en": "It is better to keep an imperfect system than to risk an unknown alternative.",
        "effect": { "axis": "soc_change", "weight": -1 }
    },
    {
        "id": "univ_41", "langs": ["pt", "en"],
        "pt": "O crescimento económico infinito num planeta finito é impossível.",
        "en": "Infinite economic growth on a finite planet is impossible.",
        "effect": { "axis": "tech_speed", "weight": -1 }
    },
    {
        "id": "univ_42", "langs": ["pt", "en"],
        "pt": "Devemos acelerar o capitalismo e a tecnologia até ao seu limite para provocar uma mudança de paradigma.",
        "en": "We must accelerate capitalism and technology to their limit to spark a paradigm shift.",
        "effect": { "axis": "tech_speed", "weight": 1 }
    },
    {
        "id": "univ_43", "langs": ["pt", "en"],
        "pt": "Deveríamos voltar a um estilo de vida mais simples e agrário.",
        "en": "We should return to a simpler and agrarian lifestyle.",
        "effect": { "axis": "tech_speed", "weight": -1 }
    },
    {
        "id": "univ_44", "langs": ["pt", "en"],
        "pt": "A inteligência artificial deve ser desenvolvida o mais rápido possível.",
        "en": "Artificial intelligence should be developed as fast as possible.",
        "effect": { "axis": "tech_speed", "weight": 1 }
    },
    {
        "id": "univ_45", "langs": ["pt", "en"],
        "pt": "O consumismo é uma doença que destrói o planeta.",
        "en": "Consumerism is a disease that destroys the planet.",
        "effect": { "axis": "tech_speed", "weight": -1 }
    },
    {
        "id": "univ_46", "langs": ["pt", "en"],
        "pt": "A Revolução Industrial e as suas consequências foram um desastre para a raça humana.",
        "en": "The Industrial Revolution and its consequences have been a disaster for the human race.",
        "effect": { "axis": "tech_nature", "weight": -1 }
    },
    {
        "id": "univ_47", "langs": ["pt", "en"],
        "pt": "Gostaria de poder fazer o upload da minha consciência para um computador.",
        "en": "I would like to upload my consciousness to a computer.",
        "effect": { "axis": "tech_nature", "weight": 1 }
    },
    {
        "id": "univ_48", "langs": ["pt", "en"],
        "pt": "A tecnologia afasta-nos da nossa verdadeira natureza biológica.",
        "en": "Technology distances us from our true biological nature.",
        "effect": { "axis": "tech_nature", "weight": -1 }
    },
    {
        "id": "univ_49", "langs": ["pt", "en"],
        "pt": "Devemos usar a engenharia genética para criar \"super-humanos\".",
        "en": "We should use genetic engineering to create \"superhumans\".",
        "effect": { "axis": "tech_nature", "weight": 1 }
    },
    {
        "id": "univ_50", "langs": ["pt", "en"],
        "pt": "A vida de caçador-coletor era mais gratificante do que a vida moderna.",
        "en": "The hunter-gatherer life was more rewarding than modern life.",
        "effect": { "axis": "tech_nature", "weight": -1 }
    },
    {
        "id": "univ_51", "langs": ["pt", "en"],
        "pt": "A lei deve ser aplicada exatamente como está escrita, sem interpretações criativas.",
        "en": "The law must be applied exactly as written, without creative interpretations.",
        "effect": { "axis": "law_type", "weight": -1 }
    },
    {
        "id": "univ_52", "langs": ["pt", "en"],
        "pt": "Os juízes devem ter liberdade para decidir com base no bom senso e precedentes.",
        "en": "Judges should have freedom to decide based on common sense and precedents.",
        "effect": { "axis": "law_type", "weight": 1 }
    },
    {
        "id": "univ_53", "langs": ["pt", "en"],
        "pt": "O espírito da lei é mais importante do que a letra da lei.",
        "en": "The spirit of the law is more important than the letter of the law.",
        "effect": { "axis": "law_type", "weight": 1 }
    },
    {
        "id": "univ_54", "langs": ["pt", "en"],
        "pt": "Um código legal rígido protege melhor os cidadãos contra o arbítrio dos juízes.",
        "en": "A rigid legal code better protects citizens against judicial arbitrariness.",
        "effect": { "axis": "law_type", "weight": -1 }
    },
    {
        "id": "univ_55", "langs": ["pt", "en"],
        "pt": "Cada caso é um caso e a justiça deve ser flexível.",
        "en": "Each case is a case and justice must be flexible.",
        "effect": { "axis": "law_type", "weight": 1 }
    },
    {
        "id": "univ_56", "langs": ["pt", "en"],
        "pt": "O objetivo da prisão deve ser castigar quem fez mal.",
        "en": "The goal of prison should be to punish those who did wrong.",
        "effect": { "axis": "law_goal", "weight": -1 }
    },
    {
        "id": "univ_57", "langs": ["pt", "en"],
        "pt": "Mesmo os piores criminosos merecem uma segunda oportunidade se mudarem.",
        "en": "Even the worst criminals deserve a second chance if they change.",
        "effect": { "axis": "law_goal", "weight": 1 }
    },
    {
        "id": "univ_58", "langs": ["pt", "en"],
        "pt": "Prisões confortáveis são um insulto às vítimas.",
        "en": "Comfortable prisons are an insult to victims.",
        "effect": { "axis": "law_goal", "weight": -1 }
    },
    {
        "id": "univ_59", "langs": ["pt", "en"],
        "pt": "A criminalidade resolve-se com educação e apoio social, não com mais polícia.",
        "en": "Crime is solved with education and social support, not more police.",
        "effect": { "axis": "law_goal", "weight": 1 }
    },
    {
        "id": "univ_60", "langs": ["pt", "en"],
        "pt": "Olho por olho, dente por dente.",
        "en": "An eye for an eye, a tooth for a tooth.",
        "effect": { "axis": "law_goal", "weight": -1 }
    },
    {
        "id": "univ_61", "langs": ["pt", "en"],
        "pt": "Algumas pessoas são naturalmente líderes e outras seguidoras.",
        "en": "Some people are natural leaders and others are followers.",
        "effect": { "axis": "cul_hier", "weight": -1 }
    },
    {
        "id": "univ_62", "langs": ["pt", "en"],
        "pt": "Devemos lutar por uma sociedade onde todos tenham o mesmo poder e estatuto.",
        "en": "We must fight for a society where everyone has the same power and status.",
        "effect": { "axis": "cul_hier", "weight": 1 }
    },
    {
        "id": "univ_63", "langs": ["pt", "en"],
        "pt": "As hierarquias são inevitáveis em qualquer organização humana.",
        "en": "Hierarchies are inevitable in any human organization.",
        "effect": { "axis": "cul_hier", "weight": -1 }
    },
    {
        "id": "univ_64", "langs": ["pt", "en"],
        "pt": "A desigualdade de rendimentos é injustificável.",
        "en": "Income inequality is unjustifiable.",
        "effect": { "axis": "cul_hier", "weight": 1 }
    },
    {
        "id": "univ_65", "langs": ["pt", "en"],
        "pt": "O respeito pela autoridade e patente é fundamental.",
        "en": "Respect for authority and rank is fundamental.",
        "effect": { "axis": "cul_hier", "weight": -1 }
    },
    {
        "id": "univ_66", "langs": ["pt", "en"],
        "pt": "A diversidade cultural fortalece uma nação.",
        "en": "Cultural diversity strengthens a nation.",
        "effect": { "axis": "cul_div", "weight": 1 }
    },
    {
        "id": "univ_67", "langs": ["pt", "en"],
        "pt": "Os imigrantes devem abandonar a sua cultura de origem e assimilar a cultura local.",
        "en": "Immigrants should abandon their original culture and assimilate the local one.",
        "effect": { "axis": "cul_div", "weight": -1 }
    },
    {
        "id": "univ_68", "langs": ["pt", "en"],
        "pt": "Bairros étnicos segregados são um problema para a coesão nacional.",
        "en": "Segregated ethnic neighborhoods are a problem for national cohesion.",
        "effect": { "axis": "cul_div", "weight": -1 }
    },
    {
        "id": "univ_69", "langs": ["pt", "en"],
        "pt": "Devemos celebrar todas as culturas igualmente dentro do nosso país.",
        "en": "We should celebrate all cultures equally within our country.",
        "effect": { "axis": "cul_div", "weight": 1 }
    },
    {
        "id": "univ_70", "langs": ["pt", "en"],
        "pt": "Uma nação define-se por uma língua e uma cultura partilhada.",
        "en": "A nation is defined by a shared language and culture.",
        "effect": { "axis": "cul_div", "weight": -1 }
    },
    {
        "id": "univ_71", "langs": ["pt", "en"],
        "pt": "Na política, o compromisso é um sinal de fraqueza e traição de valores.",
        "en": "In politics, compromise is a sign of weakness and betrayal of values.",
        "effect": { "axis": "proc_style", "weight": -1 }
    },
    {
        "id": "univ_72", "langs": ["pt", "en"],
        "pt": "É melhor conseguir metade do que se quer do que não conseguir nada.",
        "en": "It is better to get half of what you want than nothing.",
        "effect": { "axis": "proc_style", "weight": 1 }
    },
    {
        "id": "univ_73", "langs": ["pt", "en"],
        "pt": "Os políticos devem manter-se fiéis às suas promessas, custe o que custar.",
        "en": "Politicians must stick to their promises, whatever the cost.",
        "effect": { "axis": "proc_style", "weight": -1 }
    },
    {
        "id": "univ_74", "langs": ["pt", "en"],
        "pt": "O pragmatismo é mais importante do que o idealismo.",
        "en": "Pragmatism is more important than idealism.",
        "effect": { "axis": "proc_style", "weight": 1 }
    },
    {
        "id": "univ_75", "langs": ["pt", "en"],
        "pt": "Não se negoceia com quem tem valores opostos aos nossos.",
        "en": "One does not negotiate with those who have opposite values.",
        "effect": { "axis": "proc_style", "weight": -1 }
    },
    {
        "id": "univ_76", "langs": ["pt", "en"],
        "pt": "As mudanças políticas devem ser implementadas de imediato, doa a quem doer.",
        "en": "Political changes must be implemented immediately, regardless of who it hurts.",
        "effect": { "axis": "proc_speed", "weight": 1 }
    },
    {
        "id": "univ_77", "langs": ["pt", "en"],
        "pt": "As reformas devem ser graduais para dar tempo às pessoas de se adaptarem.",
        "en": "Reforms should be gradual to give people time to adapt.",
        "effect": { "axis": "proc_speed", "weight": -1 }
    },
    {
        "id": "univ_78", "langs": ["pt", "en"],
        "pt": "A \"terapia de choque\" é a melhor forma de consertar uma economia.",
        "en": "\"Shock therapy\" is the best way to fix an economy.",
        "effect": { "axis": "proc_speed", "weight": 1 }
    },
    {
        "id": "univ_79", "langs": ["pt", "en"],
        "pt": "Períodos de transição longos apenas permitem que o sistema antigo se proteja.",
        "en": "Long transition periods only allow the old system to protect itself.",
        "effect": { "axis": "proc_speed", "weight": 1 }
    },
    {
        "id": "univ_80", "langs": ["pt", "en"],
        "pt": "A estabilidade é mais importante do que a rapidez da mudança.",
        "en": "Stability is more important than the speed of change.",
        "effect": { "axis": "proc_speed", "weight": -1 }
    },
    {
        "id": "univ_81", "langs": ["pt", "en"],
        "pt": "Os problemas atuais exigem soluções extremas.",
        "en": "Current problems require extreme solutions.",
        "effect": { "axis": "pol_intensity", "weight": 1 }
    },
    {
        "id": "univ_82", "langs": ["pt", "en"],
        "pt": "O centro político é onde se encontram as soluções mais sensatas.",
        "en": "The political center is where the most sensible solutions are found.",
        "effect": { "axis": "pol_intensity", "weight": -1 }
    },
    {
        "id": "univ_83", "langs": ["pt", "en"],
        "pt": "Devemos arrancar o mal pela raiz, em vez de cortar apenas os ramos.",
        "en": "We must tear evil out by the root, instead of just trimming the branches.",
        "effect": { "axis": "pol_intensity", "weight": 1 }
    },
    {
        "id": "univ_84", "langs": ["pt", "en"],
        "pt": "O extremismo é sempre perigoso.",
        "en": "Extremism is always dangerous.",
        "effect": { "axis": "pol_intensity", "weight": -1 }
    },
    {
        "id": "univ_85", "langs": ["pt", "en"],
        "pt": "A moderação apenas perpetua a injustiça.",
        "en": "Moderation only perpetuates injustice.",
        "effect": { "axis": "pol_intensity", "weight": 1 }
    },
    {
        "id": "univ_86", "langs": ["pt", "en"],
        "pt": "A arte, o desporto e o entretenimento não devem ter mensagens políticas.",
        "en": "Art, sports, and entertainment should not have political messages.",
        "effect": { "axis": "pol_activism", "weight": -1 }
    },
    {
        "id": "univ_87", "langs": ["pt", "en"],
        "pt": "A neutralidade é uma ilusão; ficar calado é apoiar o opressor.",
        "en": "Neutrality is an illusion; staying silent coincides with supporting the oppressor.",
        "effect": { "axis": "pol_activism", "weight": 1 }
    },
    {
        "id": "univ_88", "langs": ["pt", "en"],
        "pt": "Estou cansado de ver política metida em todos os assuntos do dia-a-dia.",
        "en": "I am tired of seeing politics inserted into every daily matter.",
        "effect": { "axis": "pol_activism", "weight": -1 }
    },
    {
        "id": "univ_89", "langs": ["pt", "en"],
        "pt": "É dever de cada cidadão ser politicamente ativo.",
        "en": "It is the duty of every citizen to be politically active.",
        "effect": { "axis": "pol_activism", "weight": 1 }
    },
    {
        "id": "univ_90", "langs": ["pt", "en"],
        "pt": "As empresas não devem tomar posições sobre assuntos sociais.",
        "en": "Companies should not take positions on social issues.",
        "effect": { "axis": "pol_activism", "weight": -1 }
    },
    {
        "id": "univ_91", "langs": ["pt", "en"],
        "pt": "A minha liberdade individual é mais importante do que o bem-estar do grupo.",
        "en": "My individual freedom is more important than the group's well-being.",
        "effect": { "axis": "phil_soc", "weight": 1 }
    },
    {
        "id": "univ_92", "langs": ["pt", "en"],
        "pt": "Cada um deve ser responsável apenas por si mesmo.",
        "en": "Everyone should be responsible only for themselves.",
        "effect": { "axis": "phil_soc", "weight": 1 }
    },
    {
        "id": "univ_93", "langs": ["pt", "en"],
        "pt": "O grupo deve cuidar dos seus membros mais fracos.",
        "en": "The group looks after its weakest members.",
        "effect": { "axis": "phil_soc", "weight": -1 }
    },
    {
        "id": "univ_94", "langs": ["pt", "en"],
        "pt": "As conquistas são sempre resultado de esforço coletivo, nunca individual.",
        "en": "Achievements are always the result of collective effort, never individual.",
        "effect": { "axis": "phil_soc", "weight": -1 }
    },
    {
        "id": "univ_95", "langs": ["pt", "en"],
        "pt": "Não devo ser forçado a pagar pelas escolhas erradas dos outros.",
        "en": "I should not be forced to pay for others' wrong choices.",
        "effect": { "axis": "phil_soc", "weight": 1 }
    },
    {
        "id": "univ_96", "langs": ["pt", "en"],
        "pt": "A violência pode ser necessária para alcançar justiça política.",
        "en": "Violence may be necessary to achieve political justice.",
        "effect": { "axis": "phil_change", "weight": 1 }
    },
    {
        "id": "univ_97", "langs": ["pt", "en"],
        "pt": "A via democrática e pacífica é a única legítima para a mudança.",
        "en": "The democratic and peaceful way is the only legitimate one for change.",
        "effect": { "axis": "phil_change", "weight": -1 }
    },
    {
        "id": "univ_98", "langs": ["pt", "en"],
        "pt": "As elites nunca entregarão o poder voluntariamente; têm de ser forçadas.",
        "en": "The elites will never hand over power voluntarily; they must be forced.",
        "effect": { "axis": "phil_change", "weight": 1 }
    },
    {
        "id": "univ_99", "langs": ["pt", "en"],
        "pt": "Protestos violentos perdem a razão moral.",
        "en": "Violent protests lose moral standing.",
        "effect": { "axis": "phil_change", "weight": -1 }
    },
    {
        "id": "univ_100", "langs": ["pt", "en"],
        "pt": "A insurreição armada é um direito dos povos oprimidos.",
        "en": "Armed insurrection is a right of oppressed peoples.",
        "effect": { "axis": "phil_change", "weight": 1 }
    },
    {
        "id": "univ_101", "langs": ["pt", "en"],
        "pt": "A política externa deve basear-se em valores morais e não em interesses.",
        "en": "Foreign policy should be based on moral values rather than interests.",
        "effect": { "axis": "phil_moral", "weight": 1 }
    },
    {
        "id": "univ_102", "langs": ["pt", "en"],
        "pt": "O mundo é uma selva onde os fortes sobrevivem.",
        "en": "The world is a jungle where the strong survive.",
        "effect": { "axis": "phil_moral", "weight": -1 }
    },
    {
        "id": "univ_103", "langs": ["pt", "en"],
        "pt": "Devemos imaginar como o mundo deveria ser e lutar por isso, mesmo que pareça impossível.",
        "en": "We must imagine how the world should be and fight for it, even if it seems impossible.",
        "effect": { "axis": "phil_moral", "weight": 1 }
    },
    {
        "id": "univ_104", "langs": ["pt", "en"],
        "pt": "Devemos lidar com o mundo tal como ele é, não como gostaríamos que fosse.",
        "en": "We must deal with the world as it is, not as we would like it to be.",
        "effect": { "axis": "phil_moral", "weight": -1 }
    },
    {
        "id": "univ_105", "langs": ["pt", "en"],
        "pt": "A cooperação internacional genuína é possível e desejável.",
        "en": "Genuine international cooperation is possible and desirable.",
        "effect": { "axis": "phil_moral", "weight": 1 }
    },
    {
        "id": "univ_106", "langs": ["pt", "en"],
        "pt": "Os fins justificam os meios.",
        "en": "The ends justify the means.",
        "effect": { "axis": "phil_ethics", "weight": 1 }
    },
    {
        "id": "univ_107", "langs": ["pt", "en"],
        "pt": "Existem regras morais absolutas que nunca devem ser quebradas (ex: não matar), aconteça o que acontecer.",
        "en": "There are absolute moral rules that must never be broken (e.g., do not kill), no matter what happens.",
        "effect": { "axis": "phil_ethics", "weight": -1 }
    },
    {
        "id": "univ_108", "langs": ["pt", "en"],
        "pt": "Se torturar uma pessoa salvar mil, deve-se torturar.",
        "en": "If torturing one person saves a thousand, one should torture.",
        "effect": { "axis": "phil_ethics", "weight": 1 }
    },
    {
        "id": "univ_109", "langs": ["pt", "en"],
        "pt": "O importante é a intenção da ação, não o resultado.",
        "en": "What matters is the intention of the action, not the result.",
        "effect": { "axis": "phil_ethics", "weight": -1 }
    },
    {
        "id": "univ_110", "langs": ["pt", "en"],
        "pt": "Devemos sempre escolher a ação que traz a maior felicidade para o maior número de pessoas.",
        "en": "We should always choose the action that brings the greatest happiness to the greatest number of people.",
        "effect": { "axis": "phil_ethics", "weight": 1 }
    }
,
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
,
    // PT Specific
    { id: "pt_301", langs: ["pt"], pt: "O Alojamento Local (Airbnb) destruiu os centros das cidades e deve ser proibido em zonas residenciais.", en: "[PT] Short-term rentals destroyed city centers and should be banned.", effect: { axis: "eco_act", weight: -1 } },
    { id: "pt_302", langs: ["pt"], pt: "Para resolver a crise da habitação, é necessário relaxar as leis ambientais e de construção.", en: "[PT] To solve housing crisis, we must relax environmental/building laws.", effect: { axis: "eco_act", weight: 1 } },
    { id: "pt_303", langs: ["pt"], pt: "O Estado deve obrigar os médicos formados no público a trabalhar no SNS durante alguns anos.", en: "[PT] State must force public-trained doctors to work in public sector for some years.", effect: { axis: "phil_soc", weight: -1 } },
    { id: "pt_304", langs: ["pt"], pt: "A semana de 4 dias de trabalho é uma utopia impossível para a economia portuguesa atual.", en: "[PT] The 4-day work week is an impossible utopia.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "pt_305", langs: ["pt"], pt: "O imposto sobre os combustíveis (ISP) é excessivo e o governo usa a inflação para lucrar.", en: "[PT] Fuel tax is excessive and gov capitalizes on inflation.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "pt_306", langs: ["pt"], pt: "As propinas no ensino superior público deveriam ser totalmente abolidas.", en: "[PT] Public university tuition should be abolished.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "pt_307", langs: ["pt"], pt: "O Estado deve financiar colégios privados (Contratos de Associação) onde a escola pública falha.", en: "[PT] State should fund private schools where public school fails.", effect: { axis: "eco_act", weight: 1 } },
    { id: "pt_308", langs: ["pt"], pt: "A RTP (televisão pública) deve ser privatizada.", en: "[PT] Public TV (RTP) should be privatized.", effect: { axis: "eco_act", weight: 1 } },
    { id: "pt_309", langs: ["pt"], pt: "Portugal deve pedir desculpa oficial e pagar reparações às ex-colónias.", en: "[PT] Portugal should apologize and pay reparations to ex-colonies.", effect: { axis: "soc_time", weight: 1 } },
    { id: "pt_310", langs: ["pt"], pt: "O Estado Novo (regime de Salazar) teve conquistas financeiras e de segurança ignoradas hoje.", en: "[PT] The Estado Novo regime had achievements ignored today.", effect: { axis: "soc_time", weight: -1 } },
    { id: "pt_311", langs: ["pt"], pt: "A narrativa atual sobre o 25 de Abril é demasiado dominada pela esquerda política.", en: "[PT] The narrative on 25th April is too dominated by the Left.", effect: { axis: "soc_time", weight: -1 } },
    { id: "pt_312", langs: ["pt"], pt: "O 'Segredo de Justiça' serve muitas vezes para proteger os poderosos.", en: "[PT] 'Justice Secrecy' often protects the powerful.", effect: { axis: "gov_form", weight: 1 } },
    { id: "pt_313", langs: ["pt"], pt: "Os 'Mega-Processos' provam que a justiça portuguesa é incompetente e lenta.", en: "[PT] 'Mega-Processes' prove justice is incompetent.", effect: { axis: "soc_change", weight: 1 } },
    { id: "pt_314", langs: ["pt"], pt: "O número de deputados na Assembleia da República (230) devia ser reduzido drasticamente.", en: "[PT] The number of MPs should be drastically reduced.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "pt_315", langs: ["pt"], pt: "O Presidente da República devia ter mais poder executivo.", en: "[PT] The President should have more executive power.", effect: { axis: "gov_form", weight: -1 } },
    { id: "pt_316", langs: ["pt"], pt: "A indústria do eucalipto é essencial para a economia e não deve ser demonizada.", en: "[PT] Eucalyptus industry is essential and shouldn't be demonized.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "pt_317", langs: ["pt"], pt: "Os campos de golfe no Algarve devem ser encerrados imediatamente em períodos de seca.", en: "[PT] Golf courses in Algarve should be closed during drought.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "pt_318", langs: ["pt"], pt: "As portagens nas antigas SCUT (Interior) devem ser abolidas para combater a desertificação.", en: "[PT] Interior highway tolls should be abolished.", effect: { axis: "phil_soc", weight: -1 } },
    { id: "pt_319", langs: ["pt"], pt: "Portugal tornou-se um país de 'Lisboa e o resto é paisagem'.", en: "[PT] Portugal became 'Lisbon and the rest'.", effect: { axis: "dip_moral", weight: -1 } },
    { id: "pt_320", langs: ["pt"], pt: "A decisão sobre o novo aeroporto demonstra a incapacidade da classe política.", en: "[PT] The new airport decision shows political incapacity.", effect: { axis: "soc_change", weight: 1 } },
    { id: "pt_321", langs: ["pt"], pt: "Portugal devia abandonar a aposta nas autoestradas e focar-se na ferrovia.", en: "[PT] Portugal should focus on railways instead of highways.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "pt_322", langs: ["pt"], pt: "A descriminalização das drogas está a falhar e precisa de regras mais rígidas.", en: "[PT] Decriminalization of drugs is failing and needs stricter rules.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "pt_323", langs: ["pt"], pt: "O Estado gasta demasiado dinheiro a apoiar eventos religiosos (JMJ).", en: "[PT] State spends too much on religious events.", effect: { axis: "soc_time", weight: 1 } },
    { id: "pt_324", langs: ["pt"], pt: "Portugal deve exigir a devolução de Olivença por parte de Espanha.", en: "[PT] Portugal must demand Olivença back from Spain.", effect: { axis: "dip_align", weight: -1 } },
    { id: "pt_325", langs: ["pt"], pt: "As 'cunhas' e o nepotismo são uma parte inevitável da cultura portuguesa.", en: "[PT] Nepotism is inevitable in Portuguese culture.", effect: { axis: "dip_moral", weight: -1 } },
    { id: "pt_326", langs: ["pt"], pt: "O turismo de massas traz mais problemas do que benefícios.", en: "[PT] Mass tourism brings more problems than benefits.", effect: { axis: "eco_act", weight: -1 } },
    { id: "pt_327", langs: ["pt"], pt: "Os sindicatos em Portugal servem mais os partidos do que os trabalhadores.", en: "[PT] Unions serve parties more than workers.", effect: { axis: "eco_act", weight: 1 } },
    { id: "pt_328", langs: ["pt"], pt: "O acordo de mobilidade da CPLP cria concorrência desleal.", en: "[PT] CPLP mobility agreement creates unfair competition.", effect: { axis: "dip_align", weight: -1 } },
    { id: "pt_329", langs: ["pt"], pt: "A ADSE é um privilégio injusto face aos trabalhadores do privado.", en: "[PT] ADSE is an unfair privilege compared to private workers.", effect: { axis: "cul_hier", weight: 1 } },
    { id: "pt_330", langs: ["pt"], pt: "Devia ser proibido plantar culturas intensivas no Alentejo devido à falta de água.", en: "[PT] Intensive crops in Alentejo should be banned due to water shortage.", effect: { axis: "tech_speed", weight: -1 } },

    // EN Specific
    { id: "en_401", langs: ["en"], pt: "[EN] A exploração de recursos deve ser controlada pelo Estado.", en: "Extraction of natural resources should be controlled by the State.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "en_402", langs: ["en"], pt: "[EN] As leis devem basear-se em textos sagrados.", en: "Laws should be based on sacred texts.", effect: { axis: "soc_time", weight: -1 } },
    { id: "en_403", langs: ["en"], pt: "[EN] Filhos devem cuidar dos pais em casa, não o Estado.", en: "Children should care for elderly parents at home, not the State.", effect: { axis: "phil_soc", weight: -1 } },
    { id: "en_404", langs: ["en"], pt: "[EN] Castigo físico é legítimo em certas culturas.", en: "Physical punishment is a legitimate form of justice in certain cultures.", effect: { axis: "law_goal", weight: -1 } },
    { id: "en_405", langs: ["en"], pt: "[EN] Governo deve poder bloquear a internet.", en: "Government should have the right to block the internet.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "en_406", langs: ["en"], pt: "[EN] Trabalho infantil é um mal necessário para desenvolvimento.", en: "Child labor is a necessary evil for early economic development.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "en_407", langs: ["en"], pt: "[EN] Meu país tem direito a anexar territórios vizinhos.", en: "My country has the right to annex neighboring territories.", effect: { axis: "dip_align", weight: -1 } },
    { id: "en_408", langs: ["en"], pt: "[EN] Países em desenvolvimento não devem reduzir emissões.", en: "Developing countries shouldn't have to reduce emissions if it hurts growth.", effect: { axis: "tech_speed", weight: 1 } },
    { id: "en_409", langs: ["en"], pt: "[EN] Casta/Tribo deve contar para contratação.", en: "Caste/Tribe should be considered in hiring/marriage.", effect: { axis: "cul_hier", weight: -1 } },
    { id: "en_410", langs: ["en"], pt: "[EN] Governo 'mão de ferro' é melhor que democracia instável.", en: "Iron-fist government is better than unstable democracy.", effect: { axis: "gov_form", weight: -1 } },
    { id: "en_411", langs: ["en"], pt: "[EN] Estado deve expropriar terras para os pobres.", en: "State should expropriate land for the poor.", effect: { axis: "eco_sys", weight: -1 } },
    { id: "en_412", langs: ["en"], pt: "[EN] Mulheres devem ser educadas para serem esposas.", en: "Women should be educated to be good wives/mothers.", effect: { axis: "soc_time", weight: -1 } },
    { id: "en_413", langs: ["en"], pt: "[EN] Vigilância em massa é um preço justo pela segurança.", en: "Mass surveillance is a fair price for low crime.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "en_414", langs: ["en"], pt: "[EN] Influência ocidental é imperialismo.", en: "Western cultural influence is imperialism.", effect: { axis: "dip_align", weight: -1 } },
    { id: "en_415", langs: ["en"], pt: "[EN] Património não deve ser taxado.", en: "Wealth/Inheritance should never be taxed.", effect: { axis: "eco_sys", weight: 1 } },
    { id: "en_416", langs: ["en"], pt: "[EN] Melhor pobre mas livre, que rico sob ditadura.", en: "Better to be poor but free, than rich under dictatorship.", effect: { axis: "gov_scope", weight: -1 } },
    { id: "en_417", langs: ["en"], pt: "[EN] Proibir tecnologia que substitui trabalho.", en: "We should ban technology that replaces human labor.", effect: { axis: "tech_speed", weight: -1 } },
    { id: "en_418", langs: ["en"], pt: "[EN] Moeda única global.", en: "A global single currency.", effect: { axis: "dip_align", weight: 1 } },
    { id: "en_419", langs: ["en"], pt: "[EN] Armas nucleares são justificáveis.", en: "Nuclear weapons are justifiable for survival.", effect: { axis: "phil_moral", weight: -1 } },
    { id: "en_420", langs: ["en"], pt: "[EN] Refugiados têm direito moral de entrar.", en: "Refugees have a moral right to enter wealthy countries.", effect: { axis: "dip_align", weight: 1 } },
    { id: "en_421", langs: ["en"], pt: "[EN] Preferível 10 inocentes presos que 1 culpado solto.", en: "Better 10 innocents jailed than 1 guilty free.", effect: { axis: "law_type", weight: -1 } },
    { id: "en_422", langs: ["en"], pt: "[EN] Escola deve ensinar verdade oficial da nação.", en: "School should teach official national truth.", effect: { axis: "dip_align", weight: -1 } },
    { id: "en_423", langs: ["en"], pt: "[EN] Medicina tradicional igual à moderna.", en: "Traditional medicine should have equal status to modern.", effect: { axis: "soc_time", weight: -1 } },
    { id: "en_424", langs: ["en"], pt: "[EN] Líder é sagrado.", en: "The leader should be seen as sacred.", effect: { axis: "gov_form", weight: -1 } },
    { id: "en_425", langs: ["en"], pt: "[EN] Proibir álcool e jogo.", en: "Government should ban alcohol and gambling.", effect: { axis: "gov_scope", weight: 1 } },
    { id: "en_426", langs: ["en"], pt: "[EN] País auto-suficiente em tudo.", en: "Country should be self-sufficient in everything.", effect: { axis: "dip_align", weight: -1 } },
    { id: "en_427", langs: ["en"], pt: "[EN] Pequena taxa extra (suborno) é normal.", en: "Paying a small bribe is acceptable.", effect: { axis: "dip_moral", weight: -1 } },
    { id: "en_428", langs: ["en"], pt: "[EN] Animais selvagens só servem para sustento.", en: "Wild animals only have value for human use.", effect: { axis: "tech_nature", weight: 1 } },
    { id: "en_429", langs: ["en"], pt: "[EN] Internet Nacional isolada.", en: "National Internet isolated from global.", effect: { axis: "dip_align", weight: -1 } },
    { id: "en_430", langs: ["en"], pt: "[EN] Paz mundial é impossível.", en: "World peace is impossible.", effect: { axis: "phil_moral", weight: -1 } }
];

