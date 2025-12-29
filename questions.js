const questionsData = [
    // --- GROUP 1: ECONOMIC (System & Action) ---
    // Axis 1: Capitalism (1) vs Socialism (-1) [eco_sys]
    // Axis 2: Free Market (1) vs Planned (-1) [eco_act]

    {
        id: "eco_1", langs: ['pt', 'en'],
        pt: "Os meios de produção (fábricas, terras) devem pertencer a quem neles trabalha, não a patrões privados.",
        en: "The means of production (factories, land) should belong to those who work in them, not private owners.",
        effect: { axis: 'eco_sys', weight: -1 }
    }, // Soc
    {
        id: "eco_2", langs: ['pt', 'en'],
        pt: "A acumulação ilimitada de riqueza por indivíduos é benéfica para a sociedade como um todo.",
        en: "Unlimited accumulation of wealth by individuals is beneficial for society as a whole.",
        effect: { axis: 'eco_sys', weight: 1 }
    }, // Cap
    {
        id: "eco_3", langs: ['pt', 'en'],
        pt: "O lucro é a motivação mais eficaz para garantir a inovação e o progresso.",
        en: "Profit is the most effective motivation to ensure innovation and progress.",
        effect: { axis: 'eco_sys', weight: 1 }
    },
    {
        id: "eco_4", langs: ['pt', 'en'],
        pt: "Uma sociedade sem classes seria o ideal máximo da humanidade.",
        en: "A classless society would be the ultimate ideal for humanity.",
        effect: { axis: 'eco_sys', weight: -1 }
    },
    {
        id: "eco_5", langs: ['pt', 'en'],
        pt: "A propriedade privada é um direito natural que não deve ser violado pelo Estado.",
        en: "Private property is a natural right that should not be violated by the State.",
        effect: { axis: 'eco_sys', weight: 1 }
    },

    {
        id: "eco_6", langs: ['pt', 'en'],
        pt: "O governo deve definir os preços de bens essenciais (pão, leite, combustível) para evitar especulação.",
        en: "The government should set prices for essential goods (bread, milk, fuel) to avoid speculation.",
        effect: { axis: 'eco_act', weight: -1 }
    }, // Planned
    {
        id: "eco_7", langs: ['pt', 'en'],
        pt: "A 'mão invisível' do mercado resolve os problemas de distribuição melhor do que qualquer burocrata.",
        en: "The 'invisible hand' of the market solves distribution problems better than any bureaucrat.",
        effect: { axis: 'eco_act', weight: 1 }
    }, // Free
    {
        id: "eco_8", langs: ['pt', 'en'],
        pt: "O planeamento central da economia evitaria desperdícios e crises de superprodução.",
        en: "Central planning of the economy would avoid waste and overproduction crises.",
        effect: { axis: 'eco_act', weight: -1 }
    },
    {
        id: "eco_9", langs: ['pt', 'en'],
        pt: "A concorrência desenfreada leva a produtos de pior qualidade e exploração.",
        en: "Unbridled competition leads to lower quality products and exploitation.",
        effect: { axis: 'eco_act', weight: -1 }
    },
    {
        id: "eco_10", langs: ['pt', 'en'],
        pt: "Não deve haver qualquer regulação estatal sobre trocas comerciais voluntárias.",
        en: "There should be no state regulation on voluntary trade.",
        effect: { axis: 'eco_act', weight: 1 }
    },

    // --- GROUP 2: GOVERNMENTAL (Scope & Form) ---
    // Axis 3: Libertarian (-1) vs Authoritarian (1) [gov_scope]
    // Axis 4: Democracy (1) vs Autocracy (-1) [gov_form] *Map format: Auto=-1, Demo=1? User: Auto vs Demo. Let's make Demo=1, Auto=-1.

    {
        id: "gov_11", langs: ['pt', 'en'],
        pt: "O Estado não tem nada a ver com o que eu consumo ou faço no meu quarto.",
        en: "The State has no business with what I consume or do in my bedroom.",
        effect: { axis: 'gov_scope', weight: -1 }
    }, // Lib
    {
        id: "gov_12", langs: ['pt', 'en'],
        pt: "É necessário sacrificar alguma liberdade individual para garantir a segurança nacional.",
        en: "It is necessary to sacrifice some individual freedom to ensure national security.",
        effect: { axis: 'gov_scope', weight: 1 }
    }, // Auth
    {
        id: "gov_13", langs: ['pt', 'en'],
        pt: "A obediência à autoridade é uma virtude que deve ser ensinada às crianças.",
        en: "Obedience to authority is a virtue that should be taught to children.",
        effect: { axis: 'gov_scope', weight: 1 }
    },
    {
        id: "gov_14", langs: ['pt', 'en'],
        pt: "Todos os impostos são uma forma de coerção e deveriam ser mínimos ou inexistentes.",
        en: "All taxes are a form of coercion and should be minimal or nonexistent.",
        effect: { axis: 'gov_scope', weight: -1 }
    },
    {
        id: "gov_15", langs: ['pt', 'en'],
        pt: "O governo deve ter o poder de censurar informações que considere perigosas para a ordem pública.",
        en: "The government should have the power to censor information it deems dangerous to public order.",
        effect: { axis: 'gov_scope', weight: 1 }
    },

    {
        id: "gov_16", langs: ['pt', 'en'],
        pt: "As decisões importantes são tomadas mais eficazmente por um líder forte do que por um parlamento.",
        en: "Important decisions are made more effectively by a strong leader than by a parliament.",
        effect: { axis: 'gov_form', weight: -1 }
    }, // Autocracy
    {
        id: "gov_17", langs: ['pt', 'en'],
        pt: "O voto de cada cidadão deve ter o mesmo peso, independentemente da sua educação.",
        en: "Each citizen's vote should carry the same weight, regardless of education.",
        effect: { axis: 'gov_form', weight: 1 }
    }, // Democracy
    {
        id: "gov_18", langs: ['pt', 'en'],
        pt: "A democracia é apenas um concurso de popularidade que elege incompetentes.",
        en: "Democracy is just a popularity contest that elects incompetents.",
        effect: { axis: 'gov_form', weight: -1 }
    },
    {
        id: "gov_19", langs: ['pt', 'en'],
        pt: "Os governantes devem ser responsabilizados periodicamente através de eleições livres.",
        en: "Rulers must be held accountable periodically through free elections.",
        effect: { axis: 'gov_form', weight: 1 }
    },
    {
        id: "gov_20", langs: ['pt', 'en'],
        pt: "Um governo de especialistas técnicos (Tecnocracia) é superior à vontade do povo.",
        en: "A government of technical experts (Technocracy) is superior to the will of the people.",
        effect: { axis: 'gov_form', weight: -1 }
    }, // Treating Tech as non-Demo (Auto/Elitist)

    // --- GROUP 3: DIPLOMATIC (Align & Moral) ---
    // Axis 5: Globalism (1) vs Nationalism (-1) [dip_align] *User: Global vs Nat. Let's do Glob=1, Nat=-1.
    // Axis 6: Universalism (1) vs Particularism (-1) [dip_moral]

    {
        id: "dip_21", langs: ['pt', 'en'],
        pt: "Eu considero-me um cidadão do mundo antes de ser cidadão do meu país.",
        en: "I consider myself a citizen of the world before being a citizen of my country.",
        effect: { axis: 'dip_align', weight: 1 }
    }, // Glob
    {
        id: "dip_22", langs: ['pt', 'en'],
        pt: "O meu país não deve ceder soberania a organizações internacionais como a ONU ou a OMS.",
        en: "My country should not cede sovereignty to international organizations like the UN or WHO.",
        effect: { axis: 'dip_align', weight: -1 }
    }, // Nat
    {
        id: "dip_23", langs: ['pt', 'en'],
        pt: "As fronteiras abertas são o objetivo final da humanidade.",
        en: "Open borders are the ultimate goal of humanity.",
        effect: { axis: 'dip_align', weight: 1 }
    },
    {
        id: "dip_24", langs: ['pt', 'en'],
        pt: "Devemos proteger a nossa economia local contra produtos estrangeiros baratos.",
        en: "We must protect our local economy against cheap foreign products.",
        effect: { axis: 'dip_align', weight: -1 }
    },
    {
        id: "dip_25", langs: ['pt', 'en'],
        pt: "Os problemas globais exigem um governo global.",
        en: "Global problems require a global government.",
        effect: { axis: 'dip_align', weight: 1 }
    },

    {
        id: "dip_26", langs: ['pt', 'en'],
        pt: "Diferentes culturas têm diferentes verdades morais e não devemos julgar.",
        en: "Different cultures have different moral truths and we should not judge.",
        effect: { axis: 'dip_moral', weight: -1 }
    }, // Particularism/Relativism
    {
        id: "dip_27", langs: ['pt', 'en'],
        pt: "Os Direitos Humanos aplicam-se a todas as pessoas, independentemente da sua cultura ou religião.",
        en: "Human Rights apply to everyone, regardless of culture or religion.",
        effect: { axis: 'dip_moral', weight: 1 }
    }, // Universalism
    {
        id: "dip_28", langs: ['pt', 'en'],
        pt: "É aceitável tratar os membros da nossa própria comunidade melhor do que estranhos.",
        en: "It is acceptable to treat members of our own community better than strangers.",
        effect: { axis: 'dip_moral', weight: -1 }
    },
    {
        id: "dip_29", langs: ['pt', 'en'],
        pt: "As leis devem ser universais e não adaptadas a grupos específicos.",
        en: "Laws should be universal and not adapted to specific groups.",
        effect: { axis: 'dip_moral', weight: 1 }
    },
    {
        id: "dip_30", langs: ['pt', 'en'],
        pt: "A lealdade à tribo ou família é mais importante do que princípios abstratos de justiça.",
        en: "Loyalty to tribe or family is more important than abstract principles of justice.",
        effect: { axis: 'dip_moral', weight: -1 }
    },

    // --- GROUP 4: SOCIETAL (Time & Change) ---
    // Axis 7: Progress (1) vs Tradition (-1) [soc_time]
    // Axis 8: Reform (1) vs Conservation (-1) [soc_change]

    {
        id: "soc_31", langs: ['pt', 'en'],
        pt: "O que é novo é geralmente melhor do que o que é velho.",
        en: "What is new is generally better than what is old.",
        effect: { axis: 'soc_time', weight: 1 }
    }, // Prog
    {
        id: "soc_32", langs: ['pt', 'en'],
        pt: "Devemos manter as tradições dos nossos antepassados, mesmo que pareçam irracionais hoje.",
        en: "We should maintain our ancestors' traditions, even if they seem irrational today.",
        effect: { axis: 'soc_time', weight: -1 }
    },
    {
        id: "soc_33", langs: ['pt', 'en'],
        pt: "A sociedade deve evoluir constantemente e abandonar costumes ultrapassados.",
        en: "Society should evolve constantly and abandon outdated customs.",
        effect: { axis: 'soc_time', weight: 1 }
    },
    {
        id: "soc_34", langs: ['pt', 'en'],
        pt: "A sabedoria antiga é muitas vezes superior ao conhecimento científico moderno.",
        en: "Ancient wisdom is often superior to modern scientific knowledge.",
        effect: { axis: 'soc_time', weight: -1 }
    },
    {
        id: "soc_35", langs: ['pt', 'en'],
        pt: "A tecnologia vai resolver todos os grandes problemas da humanidade.",
        en: "Technology will solve all of humanity's great problems.",
        effect: { axis: 'soc_time', weight: 1 }
    },

    {
        id: "soc_36", langs: ['pt', 'en'],
        pt: "Se algo funciona, não se deve tentar consertar.",
        en: "If it ain't broke, don't fix it.",
        effect: { axis: 'soc_change', weight: -1 }
    }, // Cons
    {
        id: "soc_37", langs: ['pt', 'en'],
        pt: "As instituições atuais estão podres e precisam de reformas profundas.",
        en: "Current institutions are rotten and need deep reforms.",
        effect: { axis: 'soc_change', weight: 1 }
    }, // Reform
    {
        id: "soc_38", langs: ['pt', 'en'],
        pt: "A mudança social rápida traz instabilidade e caos.",
        en: "Rapid social change brings instability and chaos.",
        effect: { axis: 'soc_change', weight: -1 }
    },
    {
        id: "soc_39", langs: ['pt', 'en'],
        pt: "Devemos estar sempre à procura de formas de melhorar o sistema político.",
        en: "We should always be looking for ways to improve the political system.",
        effect: { axis: 'soc_change', weight: 1 }
    },
    {
        id: "soc_40", langs: ['pt', 'en'],
        pt: "É melhor manter um sistema imperfeito do que arriscar numa alternativa desconhecida.",
        en: "It is better to keep an imperfect system than to risk an unknown alternative.",
        effect: { axis: 'soc_change', weight: -1 }
    },

    // --- GROUP 5: TECHNOLOGICAL (Speed & Nature) ---
    // Axis 9: Acceleration (1) vs Deceleration (-1) [tech_speed]
    // Axis 10: Transhumanism (1) vs Primitivism (-1) [tech_nature]

    {
        id: "tech_41", langs: ['pt', 'en'],
        pt: "O crescimento económico infinito num planeta finito é impossível.",
        en: "Infinite economic growth on a finite planet is impossible.",
        effect: { axis: 'tech_speed', weight: -1 }
    }, // Decel
    {
        id: "tech_42", langs: ['pt', 'en'],
        pt: "Devemos acelerar o capitalismo e a tecnologia até ao seu limite para provocar uma mudança de paradigma.",
        en: "We must accelerate capitalism and technology to their limit to spark a paradigm shift.",
        effect: { axis: 'tech_speed', weight: 1 }
    }, // Accel
    {
        id: "tech_43", langs: ['pt', 'en'],
        pt: "Deveríamos voltar a um estilo de vida mais simples e agrário.",
        en: "We should return to a simpler and agrarian lifestyle.",
        effect: { axis: 'tech_speed', weight: -1 }
    },
    {
        id: "tech_44", langs: ['pt', 'en'],
        pt: "A inteligência artificial deve ser desenvolvida o mais rápido possível.",
        en: "Artificial intelligence should be developed as fast as possible.",
        effect: { axis: 'tech_speed', weight: 1 }
    },
    {
        id: "tech_45", langs: ['pt', 'en'],
        pt: "O consumismo é uma doença que destrói o planeta.",
        en: "Consumerism is a disease that destroys the planet.",
        effect: { axis: 'tech_speed', weight: -1 }
    },

    {
        id: "tech_46", langs: ['pt', 'en'],
        pt: "A Revolução Industrial e as suas consequências foram um desastre para a raça humana.",
        en: "The Industrial Revolution and its consequences have been a disaster for the human race.",
        effect: { axis: 'tech_nature', weight: -1 }
    }, // Prim
    {
        id: "tech_47", langs: ['pt', 'en'],
        pt: "Gostaria de poder fazer o upload da minha consciência para um computador.",
        en: "I would like to upload my consciousness to a computer.",
        effect: { axis: 'tech_nature', weight: 1 }
    }, // Trans
    {
        id: "tech_48", langs: ['pt', 'en'],
        pt: "A tecnologia afasta-nos da nossa verdadeira natureza biológica.",
        en: "Technology distances us from our true biological nature.",
        effect: { axis: 'tech_nature', weight: -1 }
    },
    {
        id: "tech_49", langs: ['pt', 'en'],
        pt: "Devemos usar a engenharia genética para criar 'super-humanos'.",
        en: "We should use genetic engineering to create 'superhumans'.",
        effect: { axis: 'tech_nature', weight: 1 }
    },
    {
        id: "tech_50", langs: ['pt', 'en'],
        pt: "A vida de caçador-coletor era mais gratificante do que a vida moderna.",
        en: "The hunter-gatherer life was more rewarding than modern life.",
        effect: { axis: 'tech_nature', weight: -1 }
    },

    // --- GROUP 6: LAW (Type & Goal) ---
    // Axis 11: Common Law (1) vs Civil Law (-1) [law_type] *User: Common(Flex) vs Civil(Civil is Rigid). Demo varies.
    // Axis 12: Rehabilitator (1) vs Punitive (-1) [law_goal]

    {
        id: "law_51", langs: ['pt', 'en'],
        pt: "A lei deve ser aplicada exatamente como está escrita, sem interpretações criativas.",
        en: "The law must be applied exactly as written, without creative interpretations.",
        effect: { axis: 'law_type', weight: -1 }
    }, // Civil/Rigid
    {
        id: "law_52", langs: ['pt', 'en'],
        pt: "Os juízes devem ter liberdade para decidir com base no bom senso e precedentes.",
        en: "Judges should have freedom to decide based on common sense and precedents.",
        effect: { axis: 'law_type', weight: 1 }
    }, // Common/Flexible
    {
        id: "law_53", langs: ['pt', 'en'],
        pt: "O espírito da lei é mais importante do que a letra da lei.",
        en: "The spirit of the law is more important than the letter of the law.",
        effect: { axis: 'law_type', weight: 1 }
    },
    {
        id: "law_54", langs: ['pt', 'en'],
        pt: "Um código legal rígido protege melhor os cidadãos contra o arbítrio dos juízes.",
        en: "A rigid legal code better protects citizens against judicial arbitrariness.",
        effect: { axis: 'law_type', weight: -1 }
    },
    {
        id: "law_55", langs: ['pt', 'en'],
        pt: "Cada caso é um caso e a justiça deve ser flexível.",
        en: "Each case is a case and justice must be flexible.",
        effect: { axis: 'law_type', weight: 1 }
    },

    {
        id: "law_56", langs: ['pt', 'en'],
        pt: "O objetivo da prisão deve ser castigar quem fez mal.",
        en: "The goal of prison should be to punish those who did wrong.",
        effect: { axis: 'law_goal', weight: -1 }
    }, // Punitive
    {
        id: "law_57", langs: ['pt', 'en'],
        pt: "Mesmo os piores criminosos merecem uma segunda oportunidade se mudarem.",
        en: "Even the worst criminals deserve a second chance if they change.",
        effect: { axis: 'law_goal', weight: 1 }
    }, // Rehab
    {
        id: "law_58", langs: ['pt', 'en'],
        pt: "Prisões confortáveis são um insulto às vítimas.",
        en: "Comfortable prisons are an insult to victims.",
        effect: { axis: 'law_goal', weight: -1 }
    },
    {
        id: "law_59", langs: ['pt', 'en'],
        pt: "A criminalidade resolve-se com educação e apoio social, não com mais polícia.",
        en: "Crime is solved with education and social support, not more police.",
        effect: { axis: 'law_goal', weight: 1 }
    },
    {
        id: "law_60", langs: ['pt', 'en'],
        pt: "Olho por olho, dente por dente.",
        en: "An eye for an eye, a tooth for a tooth.",
        effect: { axis: 'law_goal', weight: -1 }
    },

    // --- GROUP 7: CULTURAL (Structure & Composition) ---
    // Axis 13: Equality (1) vs Hierarchy (-1) [cul_hier]
    // Axis 14: Multicultural (1) vs Monocultural (-1) [cul_div]

    {
        id: "cul_61", langs: ['pt', 'en'],
        pt: "Algumas pessoas são naturalmente líderes e outras seguidoras.",
        en: "Some people are natural leaders and others are followers.",
        effect: { axis: 'cul_hier', weight: -1 }
    }, // Hier
    {
        id: "cul_62", langs: ['pt', 'en'],
        pt: "Devemos lutar por uma sociedade onde todos tenham o mesmo poder e estatuto.",
        en: "We must fight for a society where everyone has the same power and status.",
        effect: { axis: 'cul_hier', weight: 1 }
    }, // Equal
    {
        id: "cul_63", langs: ['pt', 'en'],
        pt: "As hierarquias são inevitáveis em qualquer organização humana.",
        en: "Hierarchies are inevitable in any human organization.",
        effect: { axis: 'cul_hier', weight: -1 }
    },
    {
        id: "cul_64", langs: ['pt', 'en'],
        pt: "A desigualdade de rendimentos é injustificável.",
        en: "Income inequality is unjustifiable.",
        effect: { axis: 'cul_hier', weight: 1 }
    },
    {
        id: "cul_65", langs: ['pt', 'en'],
        pt: "O respeito pela autoridade e patente é fundamental.",
        en: "Respect for authority and rank is fundamental.",
        effect: { axis: 'cul_hier', weight: -1 }
    },

    {
        id: "cul_66", langs: ['pt', 'en'],
        pt: "A diversidade cultural fortalece uma nação.",
        en: "Cultural diversity strengthens a nation.",
        effect: { axis: 'cul_div', weight: 1 }
    }, // Multi
    {
        id: "cul_67", langs: ['pt', 'en'],
        pt: "Os imigrantes devem abandonar a sua cultura de origem e assimilar a cultura local.",
        en: "Immigrants should abandon their original culture and assimilate the local one.",
        effect: { axis: 'cul_div', weight: -1 }
    }, // Mono
    {
        id: "cul_68", langs: ['pt', 'en'],
        pt: "Bairros étnicos segregados são um problema para a coesão nacional.",
        en: "Segregated ethnic neighborhoods are a problem for national cohesion.",
        effect: { axis: 'cul_div', weight: -1 }
    },
    {
        id: "cul_69", langs: ['pt', 'en'],
        pt: "Devemos celebrar todas as culturas igualmente dentro do nosso país.",
        en: "We should celebrate all cultures equally within our country.",
        effect: { axis: 'cul_div', weight: 1 }
    },
    {
        id: "cul_70", langs: ['pt', 'en'],
        pt: "Uma nação define-se por uma língua e uma cultura partilhada.",
        en: "A nation is defined by a shared language and culture.",
        effect: { axis: 'cul_div', weight: -1 }
    },

    // --- GROUP 8: PROCEDURAL (Style & Speed) ---
    // Axis 15: Compromise (1) vs Persistence (-1) [proc_style]
    // Axis 16: Direct (1) vs Transitional (-1) [proc_speed] *User: Direct vs Trans if Trans=Slow. 

    {
        id: "proc_71", langs: ['pt', 'en'],
        pt: "Na política, o compromisso é um sinal de fraqueza e traição de valores.",
        en: "In politics, compromise is a sign of weakness and betrayal of values.",
        effect: { axis: 'proc_style', weight: -1 }
    }, // Persist
    {
        id: "proc_72", langs: ['pt', 'en'],
        pt: "É melhor conseguir metade do que se quer do que não conseguir nada.",
        en: "It is better to get half of what you want than nothing.",
        effect: { axis: 'proc_style', weight: 1 }
    }, // Comp
    {
        id: "proc_73", langs: ['pt', 'en'],
        pt: "Os políticos devem manter-se fiéis às suas promessas, custe o que custar.",
        en: "Politicians must stick to their promises, whatever the cost.",
        effect: { axis: 'proc_style', weight: -1 }
    },
    {
        id: "proc_74", langs: ['pt', 'en'],
        pt: "O pragmatismo é mais importante do que o idealismo.",
        en: "Pragmatism is more important than idealism.",
        effect: { axis: 'proc_style', weight: 1 }
    },
    {
        id: "proc_75", langs: ['pt', 'en'],
        pt: "Não se negoceia com quem tem valores opostos aos nossos.",
        en: "One does not negotiate with those who have opposite values.",
        effect: { axis: 'proc_style', weight: -1 }
    },

    {
        id: "proc_76", langs: ['pt', 'en'],
        pt: "As mudanças políticas devem ser implementadas de imediato, doa a quem doer.",
        en: "Political changes must be implemented immediately, regardless of who it hurts.",
        effect: { axis: 'proc_speed', weight: 1 }
    }, // Direct
    {
        id: "proc_77", langs: ['pt', 'en'],
        pt: "As reformas devem ser graduais para dar tempo às pessoas de se adaptarem.",
        en: "Reforms should be gradual to give people time to adapt.",
        effect: { axis: 'proc_speed', weight: -1 }
    }, // Trans
    {
        id: "proc_78", langs: ['pt', 'en'],
        pt: "A 'terapia de choque' é a melhor forma de consertar uma economia.",
        en: "'Shock therapy' is the best way to fix an economy.",
        effect: { axis: 'proc_speed', weight: 1 }
    },
    {
        id: "proc_79", langs: ['pt', 'en'],
        pt: "Períodos de transição longos apenas permitem que o sistema antigo se proteja.",
        en: "Long transition periods only allow the old system to protect itself.",
        effect: { axis: 'proc_speed', weight: 1 }
    },
    {
        id: "proc_80", langs: ['pt', 'en'],
        pt: "A estabilidade é mais importante do que a rapidez da mudança.",
        en: "Stability is more important than the speed of change.",
        effect: { axis: 'proc_speed', weight: -1 }
    },

    // --- GROUP 9: POLITICAL (Intensity & Scope) ---
    // Axis 17: Radical (1) vs Moderate (-1) [pol_intensity]
    // Axis 18: Politicized (1) vs Apolitical (-1) [pol_activism]

    {
        id: "pol_81", langs: ['pt', 'en'],
        pt: "Os problemas atuais exigem soluções extremas.",
        en: "Current problems require extreme solutions.",
        effect: { axis: 'pol_intensity', weight: 1 }
    }, // Rad
    {
        id: "pol_82", langs: ['pt', 'en'],
        pt: "O centro político é onde se encontram as soluções mais sensatas.",
        en: "The political center is where the most sensible solutions are found.",
        effect: { axis: 'pol_intensity', weight: -1 }
    }, // Mod
    {
        id: "pol_83", langs: ['pt', 'en'],
        pt: "Devemos arrancar o mal pela raiz, em vez de cortar apenas os ramos.",
        en: "We must tear evil out by the root, instead of just trimming the branches.",
        effect: { axis: 'pol_intensity', weight: 1 }
    },
    {
        id: "pol_84", langs: ['pt', 'en'],
        pt: "O extremismo é sempre perigoso.",
        en: "Extremism is always dangerous.",
        effect: { axis: 'pol_intensity', weight: -1 }
    },
    {
        id: "pol_85", langs: ['pt', 'en'],
        pt: "A moderação apenas perpetua a injustiça.",
        en: "Moderation only perpetuates injustice.",
        effect: { axis: 'pol_intensity', weight: 1 }
    },

    {
        id: "pol_86", langs: ['pt', 'en'],
        pt: "A arte, o desporto e o entretenimento não devem ter mensagens políticas.",
        en: "Art, sports, and entertainment should not have political messages.",
        effect: { axis: 'pol_activism', weight: -1 }
    }, // Apol
    {
        id: "pol_87", langs: ['pt', 'en'],
        pt: "A neutralidade é uma ilusão; ficar calado é apoiar o opressor.",
        en: "Neutrality is an illusion; staying silent coincides with supporting the oppressor.",
        effect: { axis: 'pol_activism', weight: 1 }
    }, // Pol
    {
        id: "pol_88", langs: ['pt', 'en'],
        pt: "Estou cansado de ver política metida em todos os assuntos do dia-a-dia.",
        en: "I am tired of seeing politics inserted into every daily matter.",
        effect: { axis: 'pol_activism', weight: -1 }
    },
    {
        id: "pol_89", langs: ['pt', 'en'],
        pt: "É dever de cada cidadão ser politicamente ativo.",
        en: "It is the duty of every citizen to be politically active.",
        effect: { axis: 'pol_activism', weight: 1 }
    },
    {
        id: "pol_90", langs: ['pt', 'en'],
        pt: "As empresas não devem tomar posições sobre assuntos sociais.",
        en: "Companies should not take positions on social issues.",
        effect: { axis: 'pol_activism', weight: -1 }
    },

    // --- GROUP 10: PHILOSOPHY A (Social Unit & Method) ---
    // Axis 19: Individualism (1) vs Collectivism (-1) [phil_soc]
    // Axis 20: Revolution (1) vs Peace (-1) [phil_change]

    {
        id: "phil_91", langs: ['pt', 'en'],
        pt: "A minha liberdade individual é mais importante do que o bem-estar do grupo.",
        en: "My individual freedom is more important than the group's well-being.",
        effect: { axis: 'phil_soc', weight: 1 }
    }, // Indiv
    {
        id: "phil_92", langs: ['pt', 'en'],
        pt: "Cada um deve ser responsável apenas por si mesmo.",
        en: "Everyone should be responsible only for themselves.",
        effect: { axis: 'phil_soc', weight: 1 }
    },
    {
        id: "phil_93", langs: ['pt', 'en'],
        pt: "O grupo deve cuidar dos seus membros mais fracos.",
        en: "The group looks after its weakest members.",
        effect: { axis: 'phil_soc', weight: -1 }
    }, // Col
    {
        id: "phil_94", langs: ['pt', 'en'],
        pt: "As conquistas são sempre resultado de esforço coletivo, nunca individual.",
        en: "Achievements are always the result of collective effort, never individual.",
        effect: { axis: 'phil_soc', weight: -1 }
    },
    {
        id: "phil_95", langs: ['pt', 'en'],
        pt: "Não devo ser forçado a pagar pelas escolhas erradas dos outros.",
        en: "I should not be forced to pay for others' wrong choices.",
        effect: { axis: 'phil_soc', weight: 1 }
    },

    {
        id: "phil_96", langs: ['pt', 'en'],
        pt: "A violência pode ser necessária para alcançar justiça política.",
        en: "Violence may be necessary to achieve political justice.",
        effect: { axis: 'phil_change', weight: 1 }
    }, // Rev
    {
        id: "phil_97", langs: ['pt', 'en'],
        pt: "A via democrática e pacífica é a única legítima para a mudança.",
        en: "The democratic and peaceful way is the only legitimate one for change.",
        effect: { axis: 'phil_change', weight: -1 }
    }, // Peace
    {
        id: "phil_98", langs: ['pt', 'en'],
        pt: "As elites nunca entregarão o poder voluntariamente; têm de ser forçadas.",
        en: "The elites will never hand over power voluntarily; they must be forced.",
        effect: { axis: 'phil_change', weight: 1 }
    },
    {
        id: "phil_99", langs: ['pt', 'en'],
        pt: "Protestos violentos perdem a razão moral.",
        en: "Violent protests lose moral standing.",
        effect: { axis: 'phil_change', weight: -1 }
    },
    {
        id: "phil_100", langs: ['pt', 'en'],
        pt: "A insurreição armada é um direito dos povos oprimidos.",
        en: "Armed insurrection is a right of oppressed peoples.",
        effect: { axis: 'phil_change', weight: 1 }
    },

    // --- GROUP 11: PHILOSOPHY B (Metaphysics & Ethics) ---
    // Axis 21: Idealism (1) vs Realism (-1) [phil_moral]
    // Axis 22: Consequencialism (1) vs Deontology (-1) [phil_ethics]

    {
        id: "meta_101", langs: ['pt', 'en'],
        pt: "A política externa deve basear-se em valores morais e não em interesses.",
        en: "Foreign policy should be based on moral values rather than interests.",
        effect: { axis: 'phil_moral', weight: 1 }
    }, // Ideal
    {
        id: "meta_102", langs: ['pt', 'en'],
        pt: "O mundo é uma selva onde os fortes sobrevivem.",
        en: "The world is a jungle where the strong survive.",
        effect: { axis: 'phil_moral', weight: -1 }
    }, // Real
    {
        id: "meta_103", langs: ['pt', 'en'],
        pt: "Devemos imaginar como o mundo deveria ser e lutar por isso, mesmo que pareça impossível.",
        en: "We must imagine how the world should be and fight for it, even if it seems impossible.",
        effect: { axis: 'phil_moral', weight: 1 }
    },
    {
        id: "meta_104", langs: ['pt', 'en'],
        pt: "Devemos lidar com o mundo tal como ele é, não como gostaríamos que fosse.",
        en: "We must deal with the world as it is, not as we would like it to be.",
        effect: { axis: 'phil_moral', weight: -1 }
    },
    {
        id: "meta_105", langs: ['pt', 'en'],
        pt: "A cooperação internacional genuína é possível e desejável.",
        en: "Genuine international cooperation is possible and desirable.",
        effect: { axis: 'phil_moral', weight: 1 }
    },

    {
        id: "meta_106", langs: ['pt', 'en'],
        pt: "Os fins justificam os meios.",
        en: "The ends justify the means.",
        effect: { axis: 'phil_ethics', weight: 1 }
    }, // Conseq
    {
        id: "meta_107", langs: ['pt', 'en'],
        pt: "Existem regras morais absolutas que nunca devem ser quebradas (ex: não matar), aconteça o que acontecer.",
        en: "There are absolute moral rules that must never be broken (e.g., do not kill), no matter what happens.",
        effect: { axis: 'phil_ethics', weight: -1 }
    }, // Deon
    {
        id: "meta_108", langs: ['pt', 'en'],
        pt: "Se torturar uma pessoa salvar mil, deve-se torturar.",
        en: "If torturing one person saves a thousand, one should torture.",
        effect: { axis: 'phil_ethics', weight: 1 }
    },
    {
        id: "meta_109", langs: ['pt', 'en'],
        pt: "O importante é a intenção da ação, não o resultado.",
        en: "What matters is the intention of the action, not the result.",
        effect: { axis: 'phil_ethics', weight: -1 }
    },
    {
        id: "meta_110", langs: ['pt', 'en'],
        pt: "Devemos sempre escolher a ação que traz a maior felicidade para o maior número de pessoas.",
        en: "We should always choose the action that brings the greatest happiness to the greatest number of people.",
        effect: { axis: 'phil_ethics', weight: 1 }
    }
];

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = questionsData;
