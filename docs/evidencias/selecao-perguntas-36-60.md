# Seleção editorial das versões de 36 e 60 perguntas — v1

Estado: integrado após testes de seleção e compilação. Revisão: Codex, 2026-10-07. Revisão independente: não realizada.
Âmbito: apenas a composição das variantes curtas. Nenhuma pergunta, tradução, ID, peso, eixo, polo ou fórmula de resultados foi alterada. O pool completo continua disponível na versão extrema. Testes guardados conservam os seus IDs originais.

## Método e evidência

Foram lidas as 240 afirmações de `backend/src/main/resources/data/questions-pool.json`, as definições em `axes.json` e as traduções inglesas dos 60 itens escolhidos. A seleção é um juízo editorial, não uma estimativa empírica de discriminação ou de precisão.

Critérios: relação direta com o eixo; clareza; diversidade de subtemas; evitar duplicados e pares praticamente inversos; preferir posições e decisões políticas a estilos de vida; evitar pressupostos factuais e referências conjunturais. Quando não existe alternativa ideal no pool, a limitação é registada abaixo. Os três primeiros itens por eixo formam a curta; os dois seguintes aprofundam a completa.

[S1] Pew Research Center, “Writing Survey Questions”, sem data de publicação indicada; consultado em 2026-10-07; secções “Question wording”, “Measuring change over time” e “Question order”: https://www.pewresearch.org/writing-survey-questions/ . Sustenta os critérios gerais de clareza, uma ideia principal por item, preservação de formulação e efeitos de ordem. Não valida este questionário nem determina quais IDs selecionar.

[S2] Dados locais do projeto: perguntas, eixos e traduções referidos acima. Sustentam a existência, redação, direção e peso dos itens; os dados herdados continuam sem validação psicométrica.

A seleção fixa melhora a comparabilidade entre visitas e garante 36 perguntas comuns entre curta e completa. A ordem continua baralhada e alterna polos. Cada eixo tem ambos os polos: 2/1 na curta e 3/2 na completa, alternando o polo maioritário entre eixos. Totais: 18 LEFT/18 RIGHT e 30 LEFT/30 RIGHT. LEFT e RIGHT são orientações técnicas do eixo, não esquerda e direita ideológicas. O desequilíbrio de um item por eixo é inevitável com números ímpares; os pesos existentes não foram ajustados para o compensar.

## Limitações e exclusões

Sem respostas de uma amostra, não é possível demonstrar que estes são os melhores itens em validade ou precisão. Próximo passo de investigação: entrevistas de compreensão e estudo piloto para analisar redundância, estabilidade e discriminação por eixo.

Não se usaram preferências cidade/campo (`tecnologia_13`, `tecnologia_18`), porque podem medir estilo de vida; pena de morte (`poder_15`), por também captar moral punitiva; duração de mandatos (`representacao_06`), por não distinguir claramente eleições livres de autocracia; revolução (`economia_01`), por confundir propriedade económica e método de mudança; secessão (`estrutura_09`), por ir além do federalismo. Evitaram-se itens de atualidade como carros chineses ou nacionalidades migrantes específicas. Estes itens não foram apagados.

Algumas afirmações escolhidas ainda juntam exemplos ou domínios. Sem autorização para reformular, foram preservadas. Religião mistura crença pessoal e laicidade; tecnologia mistura transformação humana e prioridades ambientais; intervenção mistura não interferência e interesse nacional. A seleção não corrige essas limitações do desenho dos eixos. Parte da redação portuguesa refere o Brasil; as traduções inglesas generalizam esse contexto, como já acontecia no pool.

## Matriz dos itens

Todos os itens têm peso 1 no pool consultado. A intenção e justificação são editoriais; a formulação transcrita é a original. Versão da seleção: v1.

| ID | Versão | Eixo | Polo de concordância | Afirmação original | Intenção, justificação e limitações |
| --- | --- | --- | --- | --- | --- |
| estrutura_01 | 36 e 60 | estrutura | LEFT | Estados e municípios devem ter autonomia para decidir sobre seus próprios assuntos, sem depender do governo federal. | Autonomia local: princípio geral da descentralização. |
| estrutura_07 | 36 e 60 | estrutura | LEFT | A maior parte dos impostos deveria ficar no estado ou município onde foi arrecadada. | Receitas fiscais locais: mede autonomia financeira, além da autonomia legal. |
| estrutura_04 | 36 e 60 | estrutura | RIGHT | Prefiro um currículo escolar nacional único a currículos definidos por cada estado. | Currículo nacional: aplicação concreta da coordenação central. |
| estrutura_05 | Só 60 | estrutura | LEFT | Cada estado deve ter autonomia para elaborar sua própria Constituição, sem interferência do governo federal. | Constituição regional: aprofunda autonomia institucional sem confundir federalismo com secessão. |
| estrutura_12 | Só 60 | estrutura | RIGHT | As leis trabalhistas devem ser iguais em todos os estados, sem variações regionais. | Uniformidade das leis laborais: acrescenta o domínio dos direitos laborais. |
| representacao_01 | 36 e 60 | representacao | LEFT | Eleições livres devem ser mantidas mesmo quando elegem governos ruins. | Eleições apesar de maus resultados: compromisso com a legitimidade democrática. |
| representacao_02 | 36 e 60 | representacao | RIGHT | Em crises graves, um líder forte deve poder governar sem depender do Congresso. | Executivo sem Congresso em crise: limite do poder concentrado. |
| representacao_14 | 36 e 60 | representacao | RIGHT | Especialistas escolhidos por mérito deveriam governar sem depender do voto popular. | Especialistas sem voto: distingue competência técnica de legitimidade eleitoral. |
| representacao_19 | Só 60 | representacao | LEFT | Mesmo um governo eleito com enorme maioria deve respeitar todos os direitos da oposição. | Direitos da oposição: acrescenta pluralismo e limites à maioria. |
| representacao_16 | Só 60 | representacao | RIGHT | O direito de voto deveria ser restrito, nem todo adulto deveria poder votar. | Restrição do sufrágio: acrescenta inclusão política; não duplica a duração de mandatos. |
| poder_03 | 36 e 60 | poder | LEFT | O Estado deveria poder monitorar conversas digitais para combater e prevenir crimes. | Vigilância digital: conflito concreto entre segurança e privacidade. |
| poder_11 | 36 e 60 | poder | LEFT | Em situações graves, o governo deveria poder impor toque de recolher à população. | Toque de recolher: poder coercivo em situações graves. |
| poder_16 | 36 e 60 | poder | RIGHT | Condutas privadas entre adultos que consintam não deveriam ser criminalizadas. | Condutas privadas consensuais: princípio de liberdade individual sem acumular exemplos controversos. |
| poder_04 | Só 60 | poder | RIGHT | A liberdade de expressão deve proteger até opiniões consideradas ofensivas. | Expressão ofensiva: acrescenta uma liberdade distinta da vida privada. |
| poder_09 | Só 60 | poder | LEFT | O acesso de civis a armas de fogo deve ser severamente restringido. | Restrição de armas: acrescenta um instrumento de segurança pública; não é equivalente a todo o eixo. |
| imigracao_01 | 36 e 60 | imigracao | LEFT | Quem imigra para um país deve aprender o idioma e adotar os costumes locais. | Integração linguística e cultural: núcleo do polo assimilacionista. |
| imigracao_04 | 36 e 60 | imigracao | RIGHT | O país deve permitir que imigrantes preservem seus costumes e tradições, mesmo que sejam diferentes. | Preservação de costumes: núcleo da aceitação de diferença cultural. |
| imigracao_16 | 36 e 60 | imigracao | RIGHT | Filhos de imigrantes deveriam poder estudar também na língua dos pais, em escolas bilíngues. | Escolas bilingues: aplicação institucional concreta da multiculturalidade. |
| imigracao_17 | Só 60 | imigracao | LEFT | A imigração deveria ser limitada para preservar a cultura predominante do país. | Limitação migratória por cultura: acrescenta o custo político de preservar homogeneidade. |
| imigracao_10 | Só 60 | imigracao | RIGHT | As culturas trazidas por imigrantes devem ter espaço na identidade nacional. | Culturas na identidade nacional: distingue mera tolerância de inclusão na identidade coletiva. |
| diplomacia_01 | 36 e 60 | diplomacia | LEFT | Um país deve manter Forças Armadas fortes para ser respeitado no mundo. | Forças Armadas fortes: preferência pela capacidade militar. |
| diplomacia_03 | 36 e 60 | diplomacia | LEFT | O país deve poder realizar ataques preventivos contra inimigos que se preparam para atacar. | Ataque preventivo: disposição a usar essa capacidade, além de simplesmente ter defesa. |
| diplomacia_02 | 36 e 60 | diplomacia | RIGHT | Negociação e diplomacia devem ser esgotadas antes de qualquer ação militar. | Esgotar a diplomacia: prioridade por soluções negociadas. |
| diplomacia_10 | Só 60 | diplomacia | RIGHT | Acordos de desarmamento deveriam ter prioridade sobre a expansão de arsenais militares. | Desarmamento: acrescenta política de redução de arsenais. |
| diplomacia_09 | Só 60 | diplomacia | LEFT | O serviço militar deve ser obrigatório para preparar o país para uma guerra. | Serviço obrigatório: acrescenta mobilização da sociedade; pode também captar coerção estatal. |
| intervencao_01 | 36 e 60 | intervencao | LEFT | Nenhum país tem o direito de tentar mudar o governo de outro. | Mudança de governos estrangeiros: princípio de não interferência. |
| intervencao_08 | 36 e 60 | intervencao | RIGHT | O Brasil deveria poder aplicar sanções quando seus interesses forem ameaçados. | Sanções por interesses nacionais: intervenção económica concreta. |
| intervencao_20 | 36 e 60 | intervencao | RIGHT | O Brasil deve pressionar governos vizinhos que ameacem cidadãos brasileiros. | Pressão para proteger cidadãos: intervenção diplomática com finalidade explícita. |
| intervencao_17 | Só 60 | intervencao | LEFT | O Brasil deve permanecer neutro em guerras, mesmo sob pressão de aliados. | Neutralidade sob pressão de aliados: acrescenta autonomia perante alianças. |
| intervencao_14 | Só 60 | intervencao | RIGHT | O Brasil deveria usar até força militar para garantir seus interesses na América do Sul. | Uso de força por interesses nacionais: acrescenta o limite militar; também toca o eixo diplomacia. |
| economia_03 | 36 e 60 | economia | LEFT | Empresas consideradas estratégicas devem permanecer sob controle público. | Controlo público de setores estratégicos: propriedade pública. |
| economia_09 | 36 e 60 | economia | LEFT | Saúde, educação e água não deveriam funcionar sob a lógica do lucro. | Serviços essenciais sem lógica de lucro: finalidade da prestação de serviços. |
| economia_02 | 36 e 60 | economia | RIGHT | Serviços públicos deveriam ser prestados por empresas privadas quando houver concorrência. | Prestadores privados com concorrência: alternativa de gestão privada, sem exigir privatização universal. |
| economia_18 | Só 60 | economia | RIGHT | A propriedade privada deve ser respeitada mesmo quando gera muita desigualdade. | Propriedade apesar de desigualdade: princípio distributivo e defesa da propriedade. |
| economia_05 | Só 60 | economia | LEFT | Grandes empresas deveriam pertencer a seus trabalhadores, não a donos privados. | Propriedade dos trabalhadores: distingue socialização de mera gestão estatal. |
| controle_01 | 36 e 60 | controle | LEFT | O governo deve planejar setores estratégicos como energia, moradia e indústria. | Planeamento de setores estratégicos: coordenação estatal da economia. |
| controle_02 | 36 e 60 | controle | RIGHT | Preços e salários deveriam ser definidos pelo mercado, sem intervenção do governo. | Preços e salários de mercado: mecanismo de alocação. |
| controle_04 | 36 e 60 | controle | RIGHT | Empresas devem definir relações de trabalho com o mínimo de interferência do governo. | Relações laborais com pouca intervenção: aplicação da desregulação. |
| controle_19 | Só 60 | controle | LEFT | Prefiro um salário mínimo definido por lei à livre negociação dos salários. | Salário mínimo legal: acrescenta um instrumento específico de regulação laboral. |
| controle_16 | Só 60 | controle | RIGHT | O Banco Central deve decidir a taxa de juros sem precisar de aprovação do governo. | Independência dos juros: acrescenta governação monetária; exige alguma familiaridade económica. |
| comercio_03 | 36 e 60 | comercio | LEFT | Prefiro limitar importações para proteger empregos industriais, mesmo com preços mais altos. | Importações, emprego e preços: explicita o custo do protecionismo. |
| comercio_09 | 36 e 60 | comercio | LEFT | Empresas estrangeiras deveriam ser proibidas de comprar empresas estratégicas brasileiras. | Compra estrangeira de empresas estratégicas: controlo da propriedade internacional. |
| comercio_12 | 36 e 60 | comercio | RIGHT | Sou a favor de facilitar a entrada de investimentos estrangeiros no país. | Facilitar investimento externo: abertura a fluxos de capital. |
| comercio_04 | Só 60 | comercio | RIGHT | O Brasil deveria buscar acordos de livre comércio com outros países. | Acordos de livre comércio: acrescenta integração comercial por tratados. |
| comercio_13 | Só 60 | comercio | LEFT | As compras do governo e das estatais devem priorizar empresas brasileiras. | Preferência nacional nas compras públicas: acrescenta proteção pela procura do Estado. |
| religiao_03 | 36 e 60 | religiao | LEFT | As leis devem ser neutras e não seguir os valores de nenhuma religião. | Neutralidade das leis: separação entre religião e política. |
| religiao_16 | 36 e 60 | religiao | RIGHT | Prefiro buscar na fé religiosa o sentido da minha vida. | Sentido da vida na fé: religiosidade pessoal, distinguindo-a da preferência por teocracia. |
| religiao_10 | 36 e 60 | religiao | RIGHT | Tradições religiosas devem ser transmitidas às novas gerações. | Transmissão de tradições: continuidade religiosa entre gerações. |
| religiao_07 | Só 60 | religiao | LEFT | Prédios públicos, como escolas e tribunais, não deveriam exibir símbolos religiosos. | Símbolos em edifícios públicos: acrescenta presença institucional da religião. |
| religiao_02 | Só 60 | religiao | RIGHT | A religião deve orientar minhas escolhas morais e políticas. | Fé nas escolhas morais e políticas: acrescenta relação entre crença e decisão; formulação herdada junta dois domínios. |
| moral_01 | 36 e 60 | moral | LEFT | Casais do mesmo sexo devem ter o mesmo direito de adotar crianças que outros casais. | Adoção por casais do mesmo sexo: igualdade num direito familiar concreto. |
| moral_09 | 36 e 60 | moral | LEFT | Considero o aborto no início da gravidez moralmente aceitável. | Aborto inicial: dimensão distinta da moral sexual e reprodutiva. |
| moral_20 | 36 e 60 | moral | RIGHT | Os pais devem ser a autoridade final na educação moral dos filhos. | Autoridade moral dos pais: preferência por transmissão familiar dos valores. |
| moral_03 | Só 60 | moral | LEFT | A identidade de gênero declarada por cada pessoa deve ser respeitada. | Identidade de género: acrescenta reconhecimento da identidade pessoal. |
| moral_02 | Só 60 | moral | RIGHT | A família tradicional deve servir de modelo para a sociedade. | Família tradicional como modelo: acrescenta preferência normativa geral; modelo não está definido no enunciado. |
| tecnologia_09 | 36 e 60 | tecnologia | LEFT | A edição genética em humanos deve ser permitida para prevenir doenças. | Edição genética para prevenir doenças: aceitação de intervenção biotecnológica com finalidade clara. |
| tecnologia_04 | 36 e 60 | tecnologia | RIGHT | Tecnologias que mexem no corpo, na mente ou na reprodução humana devem ser limitadas. | Limites às alterações humanas: preferência por limites à transformação tecnológica; agrupa corpo, mente e reprodução. |
| tecnologia_08 | 36 e 60 | tecnologia | RIGHT | Prefiro natureza preservada a crescimento industrial acelerado. | Natureza versus crescimento industrial: prioridade ecológica perante industrialização. |
| tecnologia_03 | Só 60 | tecnologia | LEFT | Devemos ampliar o uso de IA e automação, mesmo que elimine muitas profissões. | Automação apesar da perda de profissões: acrescenta aceitação dos custos sociais da inovação. |
| tecnologia_16 | Só 60 | tecnologia | RIGHT | Gastos com exploração espacial deveriam ter menos prioridade que a proteção ambiental na Terra. | Espaço versus ambiente terrestre: acrescenta prioridades de investimento; pode captar preferências orçamentais. |

## Validação

Testes automáticos: contagens totais e por eixo; equilíbrio de polos; ausência de duplicados; inclusão integral da curta na completa; seleção independente da ordem do pool; disponibilidade das traduções; preservação dos objetos de pergunta e pesos originais; erro explícito se o pool deixa de conter um ID escolhido. Os testes da versão extrema verificam que continua a incluir todo o pool.

Não há alterações visuais nem alterações de pontuação. A revisão do código e os testes verificam o ponto de seleção usado por `App.tsx`; a build verifica os tipos e a integração dos módulos. Não foi realizada inspeção do fluxo no navegador nem validação empírica dos resultados.
