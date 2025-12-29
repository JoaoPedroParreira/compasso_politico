import json

# Axis Mapping
AXIS_MAP = {
    'Capitalismo vs. Socialismo': ('eco_sys', -1, 'Socialismo'),
    'Mercado Livre vs. Planeada': ('eco_act', -1, 'Economia Planeada'),
    'Libertário vs. Autoritário': ('gov_scope', -1, 'Libertário'),
    'Autocracia vs. Democracia': ('gov_form', -1, 'Autocracia'),
    'Globalismo vs. Nacionalismo': ('dip_align', 1, 'Globalismo'),
    'Particularismo vs. Universalismo': ('dip_moral', -1, 'Particularismo'),
    'Tradição vs. Progresso': ('soc_time', 1, 'Progresso'),
    'Conservação vs. Reforma': ('soc_change', -1, 'Conservação'),
    'Desaceleração vs. Aceleração': ('tech_speed', -1, 'Desaceleração'),
    'Primitivismo vs. Transumanismo': ('tech_nature', -1, 'Primitivismo'),
    'Direito Civil vs. Comum': ('law_type', -1, 'Direito Civil'), # Civil is rigid (-1), Common is flex (1)
    'Punitivo vs. Reabilitador': ('law_goal', -1, 'Punitivo'),
    'Hierarquia vs. Igualdade': ('cul_hier', -1, 'Hierarquia'),
    'Multicultural vs. Monocultural': ('cul_div', 1, 'Multicultural'),
    'Persistência vs. Compromisso': ('proc_style', -1, 'Persistência'),
    'Direto vs. Transicional': ('proc_speed', 1, 'Direto'), # Direct=1
    'Radical vs. Moderado': ('pol_intensity', 1, 'Radical'),
    'Politizado vs. Apolítico': ('pol_activism', -1, 'Apolítico'),
    'Individualismo vs. Coletivismo': ('phil_soc', 1, 'Individualismo'),
    'Revolução vs. Paz': ('phil_change', 1, 'Revolução'),
    'Idealismo vs. Realismo': ('phil_moral', 1, 'Idealismo'),
    'Consequencialismo vs. Deontologia': ('phil_ethics', 1, 'Consequencialismo')
}

questions = []

# List 1: Universal 110
raw_110 = """
1;Capitalismo vs. Socialismo;Os meios de produção (fábricas, terras) devem pertencer a quem neles trabalha, não a patrões privados.;Socialismo;Capitalismo
2;Capitalismo vs. Socialismo;A acumulação ilimitada de riqueza por indivíduos é benéfica para a sociedade como um todo.;Capitalismo;Socialismo
3;Capitalismo vs. Socialismo;O lucro é a motivação mais eficaz para garantir a inovação e o progresso.;Capitalismo;Socialismo
4;Capitalismo vs. Socialismo;Uma sociedade sem classes seria o ideal máximo da humanidade.;Socialismo;Capitalismo
5;Capitalismo vs. Socialismo;A propriedade privada é um direito natural que não deve ser violado pelo Estado.;Capitalismo;Socialismo
6;Mercado Livre vs. Planeada;O governo deve definir os preços de bens essenciais (pão, leite, combustível) para evitar especulação.;Economia Planeada;Mercado Livre
7;Mercado Livre vs. Planeada;A "mão invisível" do mercado resolve os problemas de distribuição melhor do que qualquer burocrata.;Mercado Livre;Economia Planeada
8;Mercado Livre vs. Planeada;O planeamento central da economia evitaria desperdícios e crises de superprodução.;Economia Planeada;Mercado Livre
9;Mercado Livre vs. Planeada;A concorrência desenfreada leva a produtos de pior qualidade e exploração.;Economia Planeada;Mercado Livre
10;Mercado Livre vs. Planeada;Não deve haver qualquer regulação estatal sobre trocas comerciais voluntárias.;Mercado Livre;Economia Planeada
11;Libertário vs. Autoritário;O Estado não tem nada a ver com o que eu consumo ou faço no meu quarto.;Libertário;Autoritário
12;Libertário vs. Autoritário;É necessário sacrificar alguma liberdade individual para garantir a segurança nacional.;Autoritário;Libertário
13;Libertário vs. Autoritário;A obediência à autoridade é uma virtude que deve ser ensinada às crianças.;Autoritário;Libertário
14;Libertário vs. Autoritário;Todos os impostos são uma forma de coerção e deveriam ser mínimos ou inexistentes.;Libertário;Autoritário
15;Libertário vs. Autoritário;O governo deve ter o poder de censurar informações que considere perigosas para a ordem pública.;Autoritário;Libertário
16;Autocracia vs. Democracia;As decisões importantes são tomadas mais eficazmente por um líder forte do que por um parlamento.;Autocracia;Democracia
17;Autocracia vs. Democracia;O voto de cada cidadão deve ter o mesmo peso, independentemente da sua educação.;Democracia;Autocracia
18;Autocracia vs. Democracia;A democracia é apenas um concurso de popularidade que elege incompetentes.;Autocracia;Democracia
19;Autocracia vs. Democracia;Os governantes devem ser responsabilizados periodicamente através de eleições livres.;Democracia;Autocracia
20;Autocracia vs. Democracia;Um governo de especialistas técnicos (Tecnocracia) é superior à vontade do povo.;Autocracia;Democracia
21;Globalismo vs. Nacionalismo;Eu considero-me um cidadão do mundo antes de ser cidadão do meu país.;Globalismo;Nacionalismo
22;Globalismo vs. Nacionalismo;O meu país não deve ceder soberania a organizações internacionais como a ONU ou a OMS.;Nacionalismo;Globalismo
23;Globalismo vs. Nacionalismo;As fronteiras abertas são o objetivo final da humanidade.;Globalismo;Nacionalismo
24;Globalismo vs. Nacionalismo;Devemos proteger a nossa economia local contra produtos estrangeiros baratos.;Nacionalismo;Globalismo
25;Globalismo vs. Nacionalismo;Os problemas globais exigem um governo global.;Globalismo;Nacionalismo
26;Particularismo vs. Universalismo;Diferentes culturas têm diferentes verdades morais e não devemos julgar.;Particularismo;Universalismo
27;Particularismo vs. Universalismo;Os Direitos Humanos aplicam-se a todas as pessoas, independentemente da sua cultura ou religião.;Universalismo;Particularismo
28;Particularismo vs. Universalismo;É aceitável tratar os membros da nossa própria comunidade melhor do que estranhos.;Particularismo;Universalismo
29;Particularismo vs. Universalismo;As leis devem ser universais e não adaptadas a grupos específicos.;Universalismo;Particularismo
30;Particularismo vs. Universalismo;A lealdade à tribo ou família é mais importante do que princípios abstratos de justiça.;Particularismo;Universalismo
31;Tradição vs. Progresso;O que é novo é geralmente melhor do que o que é velho.;Progresso;Tradição
32;Tradição vs. Progresso;Devemos manter as tradições dos nossos antepassados, mesmo que pareçam irracionais hoje.;Tradição;Progresso
33;Tradição vs. Progresso;A sociedade deve evoluir constantemente e abandonar costumes ultrapassados.;Progresso;Tradição
34;Tradição vs. Progresso;A sabedoria antiga é muitas vezes superior ao conhecimento científico moderno.;Tradição;Progresso
35;Tradição vs. Progresso;A tecnologia vai resolver todos os grandes problemas da humanidade.;Progresso;Tradição
36;Conservação vs. Reforma;Se algo funciona, não se deve tentar consertar.;Conservação;Reforma
37;Conservação vs. Reforma;As instituições atuais estão podres e precisam de reformas profundas.;Reforma;Conservação
38;Conservação vs. Reforma;A mudança social rápida traz instabilidade e caos.;Conservação;Reforma
39;Conservação vs. Reforma;Devemos estar sempre à procura de formas de melhorar o sistema político.;Reforma;Conservação
40;Conservação vs. Reforma;É melhor manter um sistema imperfeito do que arriscar numa alternativa desconhecida.;Conservação;Reforma
41;Desaceleração vs. Aceleração;O crescimento económico infinito num planeta finito é impossível.;Desaceleração;Aceleração
42;Desaceleração vs. Aceleração;Devemos acelerar o capitalismo e a tecnologia até ao seu limite para provocar uma mudança de paradigma.;Aceleração;Desaceleração
43;Desaceleração vs. Aceleração;Deveríamos voltar a um estilo de vida mais simples e agrário.;Desaceleração;Aceleração
44;Desaceleração vs. Aceleração;A inteligência artificial deve ser desenvolvida o mais rápido possível.;Aceleração;Desaceleração
45;Desaceleração vs. Aceleração;O consumismo é uma doença que destrói o planeta.;Desaceleração;Aceleração
46;Primitivismo vs. Transumanismo;A Revolução Industrial e as suas consequências foram um desastre para a raça humana.;Primitivismo;Transumanismo
47;Primitivismo vs. Transumanismo;Gostaria de poder fazer o upload da minha consciência para um computador.;Transumanismo;Primitivismo
48;Primitivismo vs. Transumanismo;A tecnologia afasta-nos da nossa verdadeira natureza biológica.;Primitivismo;Transumanismo
49;Primitivismo vs. Transumanismo;Devemos usar a engenharia genética para criar "super-humanos".;Transumanismo;Primitivismo
50;Primitivismo vs. Transumanismo;A vida de caçador-coletor era mais gratificante do que a vida moderna.;Primitivismo;Transumanismo
51;Direito Civil vs. Comum;A lei deve ser aplicada exatamente como está escrita, sem interpretações criativas.;Direito Civil (Rígido);Direito Comum (Flexível)
52;Direito Civil vs. Comum;Os juízes devem ter liberdade para decidir com base no bom senso e precedentes.;Direito Comum;Direito Civil
53;Direito Civil vs. Comum;O espírito da lei é mais importante do que a letra da lei.;Direito Comum;Direito Civil
54;Direito Civil vs. Comum;Um código legal rígido protege melhor os cidadãos contra o arbítrio dos juízes.;Direito Civil;Direito Comum
55;Direito Civil vs. Comum;Cada caso é um caso e a justiça deve ser flexível.;Direito Comum;Direito Civil
56;Punitivo vs. Reabilitador;O objetivo da prisão deve ser castigar quem fez mal.;Punitivo;Reabilitador
57;Punitivo vs. Reabilitador;Mesmo os piores criminosos merecem uma segunda oportunidade se mudarem.;Reabilitador;Punitivo
58;Punitivo vs. Reabilitador;Prisões confortáveis são um insulto às vítimas.;Punitivo;Reabilitador
59;Punitivo vs. Reabilitador;A criminalidade resolve-se com educação e apoio social, não com mais polícia.;Reabilitador;Punitivo
60;Punitivo vs. Reabilitador;Olho por olho, dente por dente.;Punitivo;Reabilitador
61;Hierarquia vs. Igualdade;Algumas pessoas são naturalmente líderes e outras seguidoras.;Hierarquia;Igualdade
62;Hierarquia vs. Igualdade;Devemos lutar por uma sociedade onde todos tenham o mesmo poder e estatuto.;Igualdade;Hierarquia
63;Hierarquia vs. Igualdade;As hierarquias são inevitáveis em qualquer organização humana.;Hierarquia;Igualdade
64;Hierarquia vs. Igualdade;A desigualdade de rendimentos é injustificável.;Igualdade;Hierarquia
65;Hierarquia vs. Igualdade;O respeito pela autoridade e patente é fundamental.;Hierarquia;Igualdade
66;Multicultural vs. Monocultural;A diversidade cultural fortalece uma nação.;Multicultural;Monocultural
67;Multicultural vs. Monocultural;Os imigrantes devem abandonar a sua cultura de origem e assimilar a cultura local.;Monocultural;Multicultural
68;Multicultural vs. Monocultural;Bairros étnicos segregados são um problema para a coesão nacional.;Monocultural;Multicultural
69;Multicultural vs. Monocultural;Devemos celebrar todas as culturas igualmente dentro do nosso país.;Multicultural;Monocultural
70;Multicultural vs. Monocultural;Uma nação define-se por uma língua e uma cultura partilhada.;Monocultural;Multicultural
71;Persistência vs. Compromisso;Na política, o compromisso é um sinal de fraqueza e traição de valores.;Persistência;Compromisso
72;Persistência vs. Compromisso;É melhor conseguir metade do que se quer do que não conseguir nada.;Compromisso;Persistência
73;Persistência vs. Compromisso;Os políticos devem manter-se fiéis às suas promessas, custe o que custar.;Persistência;Compromisso
74;Persistência vs. Compromisso;O pragmatismo é mais importante do que o idealismo.;Compromisso;Persistência
75;Persistência vs. Compromisso;Não se negoceia com quem tem valores opostos aos nossos.;Persistência;Compromisso
76;Direto vs. Transicional;As mudanças políticas devem ser implementadas de imediato, doa a quem doer.;Direto;Transicional
77;Direto vs. Transicional;As reformas devem ser graduais para dar tempo às pessoas de se adaptarem.;Transicional;Direto
78;Direto vs. Transicional;A "terapia de choque" é a melhor forma de consertar uma economia.;Direto;Transicional
79;Direto vs. Transicional;Períodos de transição longos apenas permitem que o sistema antigo se proteja.;Direto;Transicional
80;Direto vs. Transicional;A estabilidade é mais importante do que a rapidez da mudança.;Transicional;Direto
81;Radical vs. Moderado;Os problemas atuais exigem soluções extremas.;Radical;Moderado
82;Radical vs. Moderado;O centro político é onde se encontram as soluções mais sensatas.;Moderado;Radical
83;Radical vs. Moderado;Devemos arrancar o mal pela raiz, em vez de cortar apenas os ramos.;Radical;Moderado
84;Radical vs. Moderado;O extremismo é sempre perigoso.;Moderado;Radical
85;Radical vs. Moderado;A moderação apenas perpetua a injustiça.;Radical;Moderado
86;Politizado vs. Apolítico;A arte, o desporto e o entretenimento não devem ter mensagens políticas.;Apolítico;Politizado
87;Politizado vs. Apolítico;A neutralidade é uma ilusão; ficar calado é apoiar o opressor.;Politizado;Apolítico
88;Politizado vs. Apolítico;Estou cansado de ver política metida em todos os assuntos do dia-a-dia.;Apolítico;Politizado
89;Politizado vs. Apolítico;É dever de cada cidadão ser politicamente ativo.;Politizado;Apolítico
90;Politizado vs. Apolítico;As empresas não devem tomar posições sobre assuntos sociais.;Apolítico;Politizado
91;Individualismo vs. Coletivismo;A minha liberdade individual é mais importante do que o bem-estar do grupo.;Individualismo;Coletivismo
92;Individualismo vs. Coletivismo;Cada um deve ser responsável apenas por si mesmo.;Individualismo;Coletivismo
93;Individualismo vs. Coletivismo;O grupo deve cuidar dos seus membros mais fracos.;Coletivismo;Individualismo
94;Individualismo vs. Coletivismo;As conquistas são sempre resultado de esforço coletivo, nunca individual.;Coletivismo;Individualismo
95;Individualismo vs. Coletivismo;Não devo ser forçado a pagar pelas escolhas erradas dos outros.;Individualismo;Coletivismo
96;Revolução vs. Paz;A violência pode ser necessária para alcançar justiça política.;Revolução;Paz
97;Revolução vs. Paz;A via democrática e pacífica é a única legítima para a mudança.;Paz;Revolução
98;Revolução vs. Paz;As elites nunca entregarão o poder voluntariamente; têm de ser forçadas.;Revolução;Paz
99;Revolução vs. Paz;Protestos violentos perdem a razão moral.;Paz;Revolução
100;Revolução vs. Paz;A insurreição armada é um direito dos povos oprimidos.;Revolução;Paz
101;Idealismo vs. Realismo;A política externa deve basear-se em valores morais e não em interesses.;Idealismo;Realismo
102;Idealismo vs. Realismo;O mundo é uma selva onde os fortes sobrevivem.;Realismo;Idealismo
103;Idealismo vs. Realismo;Devemos imaginar como o mundo deveria ser e lutar por isso, mesmo que pareça impossível.;Idealismo;Realismo
104;Idealismo vs. Realismo;Devemos lidar com o mundo tal como ele é, não como gostaríamos que fosse.;Realismo;Idealismo
105;Idealismo vs. Realismo;A cooperação internacional genuína é possível e desejável.;Idealismo;Realismo
106;Consequencialismo vs. Deontologia;Os fins justificam os meios.;Consequencialismo;Deontologia
107;Consequencialismo vs. Deontologia;Existem regras morais absolutas que nunca devem ser quebradas (ex: não matar), aconteça o que acontecer.;Deontologia;Consequencialismo
108;Consequencialismo vs. Deontologia;Se torturar uma pessoa salvar mil, deve-se torturar.;Consequencialismo;Deontologia
109;Consequencialismo vs. Deontologia;O importante é a intenção da ação, não o resultado.;Deontologia;Consequencialismo
110;Consequencialismo vs. Deontologia;Devemos sempre escolher a ação que traz a maior felicidade para o maior número de pessoas.;Consequencialismo;Deontologia
"""

for line in raw_110.strip().split('\n'):
    if not line: continue
    parts = line.split(';')
    if len(parts) < 5: continue
    
    qid, axis_name, text, pos_pole, neg_pole = parts[0], parts[1], parts[2], parts[3], parts[4]
    
    # Clean axis name
    axis_name = axis_name.strip()
    
    if axis_name in AXIS_MAP:
        key, target_weight, target_pole_name = AXIS_MAP[axis_name]
        
        # Determine weight: The "Positive Pole" in the CSV aligns with the answer.
        # If the CSV says "Polo Positivo" is "Socialismo", and our Map says (Socialism is -1), then Agreeing means -1.
        
        # In the map, I stored: (key, weight_for_target, target_name)
        # If csv_pos_pole == target_name -> weight = target_weight
        # Else -> weight = -target_weight (assuming binary)
        
        weight = 0
        if pos_pole.strip() in target_pole_name or target_pole_name in pos_pole.strip():
            weight = target_weight
        else:
            weight = -target_weight
            
        questions.append({
            "id": f"univ_{qid}",
            "langs": ["pt", "en"],
            "pt": text,
            "en": text, # Placeholder, user didn't give EN text for these yet, but implied universal
            "effect": {"axis": key, "weight": weight}
        })
    else:
        # Fallback?
        pass

# Save intermediate
with open('questions_partial.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)
