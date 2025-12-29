import json
import os

# Load Part 1
questions = []
if os.path.exists('questions_partial.json'):
    with open('questions_partial.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)

# ID Counter
start_id = 200

# Mapping macro themes to specific axes for Extra questions
# "Eixo Económico" -> eco_act or eco_sys? 
# "Eixo Autoritário vs. Libertário" -> gov_scope
# "Eixo Cultural e Social" -> soc_change or soc_time
# "Eixo Internacional" -> dip_align
# "Perguntas Meta" -> phil_moral?

# Heuristic Mapping based on keywords in Question or Theme
def guess_axis(theme, text):
    text = text.lower()
    theme = theme.lower()
    
    if "capitalis" in text or "socialis" in text or "lucro" in text or "propriedade" in text: return "eco_sys"
    if "mercado" in text or "regulação" in text or "estado" in text: return "eco_act"
    if "liberdade" in text or "vigilância" in text or "autoridade" in text: return "gov_scope"
    if "democracia" in text or "voto" in text: return "gov_form"
    if "fronteira" in text or "global" in text or "soberania" in text: return "dip_align"
    if "cultura" in text or "tradição" in text: return "soc_time"
    if "ambiente" in text or "clima" in text: return "tech_speed" # Use tech/speed for env usually? Or create new? Stick to 22. tech_speed=Accel/Decel fits env.
    
    # Fallback based on header
    if "económico" in theme: return "eco_sys"
    if "autoritário" in theme: return "gov_scope"
    if "cultural" in theme: return "soc_time"
    if "internacional" in theme: return "dip_align"
    if "meta" in theme: return "phil_moral"
    
    return "pol_intensity" # Default fallback

# Extra Universal
raw_extra = """
Eixo Económico (Esquerda vs. Direita / Coletivismo vs. Mercado)
Trabalho e Empresas
A "mais-valia" (o lucro) é essencialmente um roubo do trabalho do operário.
Os diretores executivos (CEOs) não deveriam ganhar mais de 20 vezes o salário do empregado mais mal pago da empresa.
A automação (robôs/IA) deve pagar impostos para financiar quem perde o emprego.
É legítimo que uma empresa despeça trabalhadores para aumentar o valor das ações.
Os sindicatos têm demasiado poder e bloqueiam o progresso económico.
O trabalho voluntário não remunerado (como cuidar da casa) devia contar para a reforma.
O salário deve ser definido inteiramente pela oferta e procura, sem um salário mínimo estatal.
As empresas devem ser obrigadas a ter representantes dos trabalhadores na administração.
O direito à greve deve ser limitado em serviços essenciais (transportes, saúde, lixo).
As cooperativas são um modelo de negócio superior às empresas privadas tradicionais.
Propriedade e Habitação 11. A posse de terra deveria ser comunitária; ninguém "possui" a terra. 12. É imoral ter casas vazias apenas para especulação enquanto há pessoas sem-abrigo. 13. O Estado deve construir habitação pública suficiente para competir com o setor privado. 14. A herança perpetua a desigualdade e deve ser taxada a quase 100% acima de um certo valor. 15. A propriedade intelectual (patentes/copyright) retarda a inovação humana.
Mercado e Regulação 16. O padrão-ouro (moeda baseada em ouro) deve ser reintroduzido para evitar a inflação. 17. Os bancos centrais fazem mais mal do que bem à economia. 18. Monopólios naturais (água, estradas) nunca devem ser privados. 19. O comércio livre ajuda as grandes multinacionais a explorar países pobres. 20. A especulação financeira na bolsa de valores é tão nociva quanto o jogo de casino. 21. As criptomoedas são o futuro da liberdade financeira longe do Estado. 22. O protecionismo é necessário para manter a soberania alimentar de um país. 23. Se uma empresa polui, deve ser fechada, não apenas multada. 24. O consumidor é racional e sabe sempre o que é melhor para si. 25. O Estado deve subsidiar a cultura (teatro, cinema), pois o mercado não a sustenta sozinho.
Impostos e Redistribuição 26. Um imposto fixo (flat tax) é mais justo do que um imposto progressivo (quem ganha mais paga mais). 27. A caridade privada é mais eficiente a resolver a pobreza do que a segurança social. 28. O acesso à saúde de qualidade deve depender da capacidade de pagamento de cada um. 29. O Rendimento Básico Incondicional (RBI) é inevitável no futuro. 30. Os impostos são, por definição, uma forma de roubo. 31. O ensino superior deve ser pago pelos estudantes, pois é um investimento pessoal. 32. Os ricos devem contribuir desproporcionalmente mais para a sociedade.
👮 Eixo Autoritário vs. Libertário (Estado vs. Indivíduo)
Lei, Ordem e Justiça 33. A reabilitação de criminosos é mais importante do que a punição. 34. A pena de morte devia ser uma opção para quem já não tem recuperação possível. 35. As prisões privadas são um erro moral. 36. Crimes sem vítimas (como consumo de drogas ou jogo) não deveriam ser crimes. 37. A polícia deve ter equipamento militar para lidar com motins urbanos. 38. O voto deveria ser um direito, não um dever (contra o voto obrigatório). 39. As pessoas deveriam ter de passar num teste de inteligência básica para poder votar. 40. Um governo forte é necessário para manter a ordem moral na sociedade. 41. A tortura é justificável se puder salvar vidas inocentes (ex: terrorismo). 42. O Estado deve fornecer apoio legal gratuito de qualidade igual à dos advogados privados.
Vigilância e Privacidade 43. Quem não deve, não teme a vigilância do Estado. 44. As câmaras de reconhecimento facial em locais públicos são uma ameaça à liberdade. 45. O anonimato na internet deve ser garantido por lei. 46. As redes sociais devem ser responsabilizadas pelo conteúdo que os utilizadores publicam. 47. O denunciante (whistleblower) que revela segredos de Estado (tipo Snowden) é um herói, não um traidor.
Liberdades Individuais 48. A posse de armas de fogo recreativas deve ser proibida. 49. O discurso de ódio deve ser punido criminalmente. 50. A liberdade de expressão deve ser absoluta, mesmo para nazis ou extremistas. 51. O suicídio assistido deve ser legal para qualquer adulto mentalmente capaz. 52. O uso de cinto de segurança ou capacete devia ser uma escolha pessoal, não uma lei. 53. A prostituição deve ser tratada como qualquer outra profissão. 54. O Estado não tem o direito de saber a religião ou etnia dos seus cidadãos (censos).
🌍 Eixo Cultural e Social (Progressista vs. Conservador)
Família e Género 55. O casamento é, por definição, a união entre um homem e uma mulher. 56. A adoção por casais do mesmo sexo é prejudicial para a criança. 57. A identidade de género é uma construção social, não uma realidade biológica. 58. As crianças devem ser educadas sobre sexualidade e género desde o ensino básico. 59. O feminismo moderno já não procura igualdade, mas sim superioridade. 60. O papel da mulher é, primordialmente, a família e o lar. 61. As pessoas trans devem poder usar as casas de banho do género com que se identificam. 62. O aborto deve ser permitido em qualquer fase da gravidez se a mulher assim o desejar.
Religião e Tradição 63. A religião faz mais mal do que bem à sociedade. 64. Os símbolos religiosos devem ser banidos de edifícios públicos. 65. As tradições do passado são a âncora que mantém a sociedade estável. 66. A astrologia e medicinas alternativas devem ser levadas a sério pelo sistema de saúde. 67. O multiculturalismo falhou; as culturas devem ser preservadas separadamente. 68. É importante defender os "valores ocidentais" contra influências externas. 69. A arte moderna, que não requer técnica clássica, não é verdadeira arte. 70. O respeito pelos mais velhos está a perder-se e isso destrói a sociedade.
Ciência, Ambiente e Bioética 71. A alteração genética de embriões humanos para eliminar doenças é aceitável. 72. A energia nuclear é a única solução viável para o aquecimento global. 73. Os animais têm direitos equivalentes aos humanos. 74. Comer carne é imoral. 75. A tecnologia vai resolver os problemas ambientais sem precisarmos de reduzir o consumo. 76. Devemos colonizar Marte antes de resolvermos todos os problemas da Terra. 77. As vacinas devem ser obrigatórias para a saúde pública.
🌐 Eixo Internacional (Globalismo vs. Nacionalismo)
Soberania e Fronteiras 78. Um governo mundial seria benéfico para a humanidade. 79. As Nações Unidas (ONU) devem ter poder para anular leis nacionais. 80. O meu país deve vir sempre em primeiro lugar ("America First" style). 81. Ninguém é ilegal; as fronteiras são linhas imaginárias. 82. Os países ricos têm a obrigação moral de acolher refugiados climáticos. 83. A ajuda externa é um desperdício de dinheiro que devia ser gasto internamente. 84. O turismo de massas destrói a cultura local e deve ser limitado.
Guerra e Paz 85. A guerra é por vezes necessária para espalhar a democracia. 86. O serviço militar cria cidadãos mais responsáveis. 87. O pacifismo total é ingénuo num mundo perigoso. 88. A venda de armas a ditaduras é aceitável se beneficiar a economia nacional. 89. O colonialismo trouxe civilização a partes do mundo que não a tinham.
🧠 Perguntas "Meta" e Filosóficas (Para calibrar a bússola)
A natureza humana é fundamentalmente boa e cooperativa.
A natureza humana é fundamentalmente egoísta e competitiva.
O destino de uma pessoa é determinado mais pelas suas escolhas do que pelas suas circunstâncias.
A lógica é mais importante que os sentimentos na tomada de decisões políticas.
A verdade absoluta não existe, tudo é relativo.
O fim justifica os meios.
É melhor ser temido do que amado (filosofia maquiavélica).
A hierarquia é natural e inevitável em qualquer grupo humano.
O progresso tecnológico nem sempre é positivo.
A vida era melhor há 50 anos atrás.
A liberdade total é uma ilusão.
"""

# Very basic parser for the Extra block (lots of lines mixed)
# I will split by newlines. If a line looks like a question, add it.
# Assign weight by simple heuristic: First option? Hard to say. I'll assign weight 1 (Agree = +Axis), user can adjust.
current_theme = "Extra"
for line in raw_extra.split('\n'):
    line = line.strip()
    if not line: continue
    if "Eixo" in line or "Perguntas" in line or "Propriedade" in line or "Mercado" in line or "Impostos" in line:
        current_theme = line
        continue
    
    # Check if numbered
    clean_line = line
    if line[0].isdigit() and '.' in line[:4]:
        clean_line = line.split('.', 1)[1].strip()
    
    axis = guess_axis(current_theme, clean_line)
    
    questions.append({
        "id": f"extra_{start_id}",
        "langs": ["pt", "en"], # Assumed universal
        "pt": clean_line,
        "en": clean_line, # Placeholder
        "effect": {"axis": axis, "weight": 1} # Defaulting to 1. 
    })
    start_id += 1


# PT Only
raw_pt = """
Portugal;Habitação;O Alojamento Local (Airbnb) destruiu os centros das cidades e deve ser proibido em zonas residenciais.;Economia;Intervencionismo
Portugal;Habitação;Para resolver a crise da habitação, é necessário relaxar as leis ambientais e de construção para se construir mais rápido.;Economia;Desregulação
Portugal;Trabalho;O Estado deve obrigar os médicos formados no público a trabalhar no SNS durante alguns anos antes de poderem emigrar ou ir para o privado.;Social;Coletivismo
Portugal;Trabalho;A semana de 4 dias de trabalho é uma utopia impossível para a economia portuguesa atual.;Economia;Conservadorismo Económico
Portugal;Impostos;O imposto sobre os combustíveis (ISP) é excessivo e o governo usa a inflação para lucrar com isso.;Economia;Anti-Impostos
Portugal;Educação;As propinas no ensino superior público deveriam ser totalmente abolidas.;Social;Esquerda
Portugal;Educação;O Estado deve financiar colégios privados (Contratos de Associação) onde a escola pública não dá resposta suficiente.;Economia;Liberdade de Escolha
Portugal;Média;A RTP (televisão pública) deve ser privatizada; o Estado não tem nada que ter canais de televisão.;Economia;Liberalismo
Portugal;História;Portugal deve pedir desculpa oficial e pagar reparações às ex-colónias pelo passado colonial.;Social;Progressista/Woke
Portugal;História;O Estado Novo (regime de Salazar) teve conquistas financeiras e de segurança que são injustamente ignoradas hoje.;Social;Conservadorismo/Saudosismo
Portugal;História;A narrativa atual sobre o 25 de Abril é demasiado dominada pela esquerda política.;Social;Direita Cultural
Portugal;Justiça;O "Segredo de Justiça" serve muitas vezes para proteger os poderosos e não a investigação.;Justiça;Populismo/Transparência
Portugal;Justiça;Os "Mega-Processos" (como a Operação Marquês) provam que a justiça portuguesa é incompetente e lenta.;Justiça;Crítica Institucional
Portugal;Política;O número de deputados na Assembleia da República (230) devia ser reduzido drasticamente.;Política;Populismo/Reforma
Portugal;Política;O Presidente da República devia ter mais poder executivo (caminhar para um Presidencialismo).;Política;Autoridade
Portugal;Ambiente;A indústria do eucalipto é essencial para a economia e não deve ser demonizada por causa dos incêndios.;Economia;Pragmatismo Económico
Portugal;Ambiente;Os campos de golfe no Algarve devem ser encerrados imediatamente em períodos de seca.;Ambiente;Radicalismo Verde
Portugal;Regional;As portagens nas antigas SCUT (autoestradas do Interior) devem ser abolidas para combater a desertificação.;Regional;Coesão Territorial
Portugal;Regional;Portugal tornou-se um país de "Lisboa e o resto é paisagem".;Regional;Anti-Centralismo
Portugal;Infraestruturas;A decisão sobre a localização do novo aeroporto de Lisboa demonstra a incapacidade total da classe política.;Política;Crítica Institucional
Portugal;Infraestruturas;Portugal devia abandonar a aposta nas autoestradas e focar-se exclusivamente na ferrovia.;Ambiente;Mobilidade Sustentável
Portugal;Social;A descriminalização das drogas em Portugal, que era um modelo, está a falhar e precisa de regras mais rígidas novamente.;Social;Conservadorismo/Ordem
Portugal;Social;O Estado gasta demasiado dinheiro a apoiar eventos religiosos (como a Jornada Mundial da Juventude).;Social;Laicismo
Portugal;Geopolítica;Portugal deve exigir a devolução de Olivença por parte de Espanha de forma mais assertiva.;Geopolítica;Nacionalismo
Portugal;Corrupção;As "cunhas" e o nepotismo são uma parte inevitável da cultura portuguesa.;Social;Cinismo Social
Portugal;Economia;O turismo de massas traz mais problemas (preços altos, lixo) do que benefícios para o cidadão comum.;Economia;Ceticismo
Portugal;Trabalho;Os sindicatos em Portugal (como a CGTP) servem mais os partidos políticos do que os trabalhadores.;Trabalho;Crítica Sindical
Portugal;Imigração;O acordo de mobilidade da CPLP cria concorrência desleal para os trabalhadores portugueses.;Economia;Protecionismo Laboral
Portugal;Saúde;A ADSE (subsistema de saúde dos funcionários públicos) é um privilégio injusto face aos trabalhadores do privado.;Social;Igualdade
Portugal;Interior;Devia ser proibido plantar culturas intensivas (como abacate ou olival superintensivo) no Alentejo devido à falta de água.;Ambiente;Regulação Ambiental
"""

for line in raw_pt.strip().split('\n'):
    if not line: continue
    parts = line.split(';')
    if len(parts) < 3: continue
    text = parts[2]
    # Guess axis
    theme_macro = parts[3] if len(parts)>3 else "Geral"
    tag = parts[4] if len(parts)>4 else ""
    
    axis = guess_axis(theme_macro, text + " " + tag)
    
    questions.append({
        "id": f"pt_{start_id}",
        "langs": ["pt"],
        "pt": text,
        "en": "[PT Only] " + text,
        "effect": {"axis": axis, "weight": 1} # Defaulting to 1
    })
    start_id += 1

# EN Only
raw_en = """
Geral;Soberania;A exploração de recursos naturais (petróleo, minério) no meu país deve ser controlada pelo Estado e não por empresas estrangeiras.;Economia;Nacionalismo Económico
Geral;Religião;As leis do país devem basear-se nos textos sagrados da religião dominante.;Sociedade;Teocracia/Autoritarismo
Geral;Família;É dever dos filhos cuidar dos pais idosos em casa, em vez de o Estado ou instituições assumirem essa responsabilidade.;Sociedade;Tradicionalismo/Coletivismo
Geral;Justiça;O castigo físico para crimes graves (chibatadas, amputação) é uma forma legítima de justiça em certas culturas.;Justiça;Tradicionalismo Radical
Geral;Censura;O governo deve ter o direito de bloquear a internet para impedir a organização de protestos violentos.;Política;Autoritarismo
Geral;Trabalho;A exploração de trabalho infantil em países muito pobres é um mal necessário para o desenvolvimento económico inicial.;Economia;Capitalismo Radical
Geral;Território;O meu país tem o direito histórico de anexar territórios vizinhos que partilham a nossa cultura ou língua.;Geopolítica;Irredentismo/Nacionalismo
Geral;Ambiente;Os países em desenvolvimento não devem ser obrigados a reduzir emissões de carbono se isso impedir o seu crescimento económico.;Ambiente;Desenvolvimentismo
Geral;Social;A casta, tribo ou linhagem de uma pessoa deve ser considerada em decisões de contratação ou casamento.;Sociedade;Particularismo/Hierarquia
Geral;Governação;Um governo de "mão de ferro" que traga prosperidade é melhor do que uma democracia que traga instabilidade.;Política;Autocracia
Geral;Propriedade;O Estado deve ter o poder de expropriar terras privadas para fins de reforma agrária e distribuição pelos pobres.;Economia;Socialismo/Coletivismo
Geral;Género;A educação das mulheres deve focar-se em torná-las boas esposas e mães, em vez de carreiras competitivas.;Sociedade;Patriarcado/Tradição
Geral;Segurança;A vigilância em massa com câmaras e inteligência artificial nas ruas é um preço justo a pagar pela ausência de crime.;Sociedade;Autoritarismo Tecnológico
Geral;Cultura;A influência cultural do Ocidente (filmes, música, valores) é uma forma de imperialismo que deve ser limitada.;Cultura;Anti-Globalismo
Geral;Herança;O património de um indivíduo deve pertencer à sua família ou clã após a morte, e nunca ser taxado pelo Estado.;Economia;Direita/Familiarismo
Geral;Liberdade;É melhor viver numa sociedade pobre mas livre, do que numa sociedade rica mas sob ditadura.;Política;Libertarismo
Geral;Tecnologia;Devemos proibir tecnologias que substituam o trabalho humano manual para evitar a fome das populações.;Economia;Ludismo/Protecionismo
Geral;Globalismo;Uma moeda única global seria a melhor solução para acabar com a desigualdade entre as nações.;Economia;Globalismo Radical
Geral;Conflito;O uso de armas nucleares é justificável se a sobrevivência da nação estiver em risco.;Geopolítica;Realismo Extremo
Geral;Migração;As pessoas que fogem da pobreza têm o direito moral de entrar em qualquer país rico para trabalhar.;Geopolítica;Universalismo/Globalismo
Geral;Justiça;É preferível que dez inocentes sejam presos do que um único culpado perigoso fique em liberdade.;Justiça;Autoritarismo/Ordem
Geral;Educação;A escola deve focar-se em ensinar a verdade histórica oficial da nação, mesmo que oculte erros do passado.;Sociedade;Nacionalismo
Geral;Saúde;A medicina tradicional (ervas, rituais) deve ter o mesmo estatuto oficial que a medicina moderna em hospitais públicos.;Sociedade;Particularismo Cultural
Geral;Poder;O líder máximo do país deve ser visto como uma figura sagrada ou acima da crítica comum.;Política;Culto de Personalidade
Geral;Consumo;O governo deve proibir o consumo de álcool e jogo para proteger a moral e a saúde das famílias.;Sociedade;Conservadorismo Social
Geral;Estratégia;O meu país deve tentar ser auto-suficiente em tudo (comida, energia, armas) para nunca depender de ninguém.;Geopolítica;Autarcia
Geral;Corrupção;Pagar uma pequena taxa extra a um funcionário público para acelerar um processo é uma prática aceitável e normal.;Sociedade;Pragmatismo Local
Geral;Ecologia;Os animais selvagens só têm valor se servirem para sustento humano ou turismo.;Ambiente;Antropocentrismo
Geral;Internet;Cada país deve ter a sua própria "Internet Nacional" controlada, isolada da rede global.;Política;Soberanismo Digital
Geral;Idealismo;A paz mundial é um objetivo impossível porque a guerra faz parte da biologia humana.;Filosofia;Realismo Biológico
"""

for line in raw_en.strip().split('\n'):
    if not line: continue
    parts = line.split(';')
    if len(parts) < 3: continue
    text = parts[2]
    # Guess axis
    theme_macro = parts[3] if len(parts)>3 else "Geral"
    tag = parts[4] if len(parts)>4 else ""
    
    axis = guess_axis(theme_macro, text + " " + tag)
    
    questions.append({
        "id": f"en_{start_id}",
        "langs": ["en"],
        "pt": "[EN Only] " + text,
        "en": text,
        "effect": {"axis": axis, "weight": 1}
    })
    start_id += 1

# Output final js file
output_js = f"const questionsData = {json.dumps(questions, indent=4, ensure_ascii=False)};"

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Generated {len(questions)} questions into questions.js")
