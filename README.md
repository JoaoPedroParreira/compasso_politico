# Compasso Político — local

Frontend e backend copiados da pasta 12axes fornecida, com a licença e atribuições originais preservadas.

## Rigor editorial e imagens

Antes de alterar perguntas, personalidades, países, imagens ou correspondências, seguir o [Guia de rigor](docs/GUIA_DE_RIGOR.md). O [AGENTS.md](AGENTS.md) torna esta leitura obrigatória para agentes que trabalhem no projeto. O guia exige imagens autênticas, fontes verificáveis, justificação dos eixos e validação dos resultados. Os dados herdados ainda não estão certificados por uma auditoria.

## Arrancar

Na raiz, executar `npm run dev`. Abrir http://127.0.0.1:5173.
O frontend usa Vite e comunica com o backend Java local na porta 8080.
Java 21 e Maven portáteis estão em `.local-runtime` e não entram no Git.
Depois de clonar noutro computador, fornecer Java 21 e Maven nessa pasta e executar `npm --prefix frontend ci`.

## Comparação com amigos

No resultado, escolher **Descarregar resultados (.JSON)**. Importar esse ficheiro no painel inicial.
O **Modo Aberto** mostra a resposta do amigo antes de responder; o **Modo Surpresa** revela-a depois da escolha e espera que carregues em Avançar.
Como os testes curtos sorteiam perguntas, algumas podem não existir no ficheiro do amigo. A versão extrema contém todas as 240 perguntas.
No fim, os 12 eixos são comparados; a proximidade apresentada é 100 menos a diferença média em pontos percentuais.
Os ficheiros do teste antigo de dois eixos não são compatíveis com este modelo.
O ficheiro importado fica apenas nesta sessão do navegador; os dados do quiz são processados pelo backend local.

## Verificar

`npm run build` e `npm test` verificam o frontend. Para o backend, usar o Maven portátil com `-f backend/pom.xml test` e JAVA_HOME apontado para o Java portátil.

## Carregar e editar respostas

No painel **Carregar e comparar respostas**, escolher **Carregar as minhas respostas** para abrir o editor do teste guardado. Carregar o JSON do amigo para ver as duas respostas lado a lado. Pesquisar perguntas, filtrar por eixo ou por respostas diferentes e alterar as escolhas nas listas da coluna **A minha resposta**.

Carregar em **Recalcular e ver perfil** para atualizar os resultados. No resultado, descarregar um novo JSON com as escolhas atualizadas ou voltar a **Editar as minhas respostas**. Os arquétipos e a religião passam a ser incluídos no JSON, para preservar esses dados ao recalcular.

## Filtro Novos nos catálogos

Os três catálogos têm um filtro **Novos**. O registo explícito está em `frontend/scripts/catalogue-additions.json`: acrescentar o ID à lista correspondente apenas quando uma entrada nova, completa e validada for integrada. Os perfis herdados e simples edições de perfis existentes não contam como novos. O gerador verifica se os IDs existem no catálogo; o filtro funciona também com a pesquisa. As listas começam vazias.
