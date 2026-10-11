# Lote 03 — expansão internacional

Concluído em 2026-10-10: **10 ideologias/variantes contextualizadas, 10 personalidades e 10 governos/regimes históricos adicionais**. Os filtros «Novos» acumulam agora 20 entradas em cada catálogo.

| Personalidade | Corrente ou variante identificada | País / recorte |
| --- | --- | --- |
| Ellen Johnson Sirleaf | Liberalismo de reconstrução | Libéria, 2006–2007 |
| Kwame Nkrumah | Nkrumahismo | Gana de partido único, 1964–1966 |
| Mahathir Mohamad | Reformismo do Pakatan Harapan, 2018 | Malásia, programa 2018–2020 |
| Imran Khan | Estado social islâmico — Naya Pakistan | Paquistão, programa 2018 |
| Joko Widodo | Desenvolvimentismo da Pancasila | Indonésia, plano 2020–2024 |
| Kim Dae-jung | Reformismo democrático — política Sunshine | Coreia do Sul, 1998–2000 |
| Andrés Manuel López Obrador | Obradorismo, programa 2019 | México, plano 2019–2024 |
| Luis Arce | Socialismo comunitário produtivo | Bolívia, início do mandato e plano 2021 |
| Óscar Arias | Social-democracia aberta | Costa Rica, 2006–2010 |
| Sanna Marin | Social-democracia ecológica | Finlândia, programa 2019 e contraponto religioso 2022 |

## Evidência e limites

Cada nova entrada tem os 12 eixos, justificação em português e inglês, fontes identificadas, período, intervalos editoriais e confiança média. As matrizes foram escritas manualmente; os scripts apenas formatam, integram e validam os dados. Documentos coletivos têm vínculo explícito ao governo ou à apresentação do dirigente. Não se infere uma posição por pertença partidária isolada.

As variantes com nome de dirigente ou data são recortes programáticos de tradições reais, não doutrinas universais recém-inventadas. Os países são recortes históricos governamentais, não descrições da população nem atualizações do catálogo inteiro.

Contrapontos explícitos incluem partido único e repressão no Gana; centralização interna ganesa versus federação continental projetada; repressão nos antigos mandatos de Mahathir versus compromisso de 2018; restrições religiosas e civis na Indonésia; proposta laica de Arias versus religião católica constitucional; e programa de defesa finlandês de 2019 versus adesão posterior à NATO. A data gregoriana de nascimento de Kim Dae-jung foi conferida na nota corrigida da Fundação Nobel: 1924.

Não se afirma revisão independente, execução integral das promessas ou precisão científica das coordenadas. Inferências contextuais, incluindo diferenças entre diversidade cultural e política fronteiriça, estão assinaladas nos dossiers. Dados herdados continuam não auditados.

## Imagens

[Inventário completo](imagens-lote-03.json): dez retratos autênticos e dez bandeiras autênticas, com origem Commons, autoria disponível, licença, dimensões e tratamento. Nenhuma imagem gerada por IA. A bandeira ganesa corresponde a 1964–1966, com faixa branca, e não à versão atual com faixa amarela. A bandeira tricolor boliviana não é apresentada como substituta exclusiva da Wiphala.

O original SVG ganês devolveu HTTP 429; usou-se a versão PNG de 960 px fornecida pelo Commons a partir do mesmo ficheiro. A procedência e a conversão estão registadas. Os dez caminhos dos retratos foram normalizados pela extensão real do URL, excluindo parâmetros de rastreio.

## Verificação final

- Integrador: 30 entradas validadas antes da escrita; ligações entre os três tipos verificadas.
- TypeScript e compilação Vite concluídos; **2076 páginas bilingues** geradas. A primeira tentativa foi bloqueada por permissões do sandbox; a compilação com permissões adequadas passou.
- Validação focada cumulativa: 60 entradas novas, 720 eixos, 40 imagens, traduções, páginas PT/EN, ligações e 60 comparações de integridade. Inclui existência das imagens na distribuição de produção. Dez ficheiros de retrato corrigidos foram sincronizados para a distribuição após a compilação, sem repetir a compilação inteira.
- Cinco casos de referência: comunismo, fascismo, liberalismo clássico, anarcocomunismo e social-democracia mantêm a própria referência em primeiro lugar. Estes são testes técnicos de regressão com vetores herdados, não uma auditoria histórica desses vetores nem garantia para qualquer combinação de respostas.
- API local: Sanna Marin devolve o novo perfil, corrente e programa finlandês; Nkrumah devolve a nova personalidade e Nkrumahismo. Para o vetor continental de Nkrumah, o regime histórico mais próximo é a Iugoslávia socialista: não se força artificialmente o Gana unitário a ter a mesma estrutura federal proposta para a África. Proximidade não significa equivalência.
- Browser local: «Novos 20» selecionado e 20 cartões confirmados nos três catálogos. Retrato de Sirleaf carregado e atribuição visível. Personalidades ficou aberto com o filtro «Novos» ativo.
- `git diff --check` passou. Não foram repetidos os 210 testes de aplicação, pois este lote altera dados e o respetivo validador, não o funcionamento do teste político.

Totais finais: **277 ideologias, 529 personalidades e 229 países/regimes** — 129 países atuais e 100 recortes históricos. O lote não acrescenta Portugal.

Registos técnicos reproduzíveis: `.local-runtime/catalogue-final-validation.json`, `.local-runtime/world-semantic-checks.json` e `.local-runtime/world-api-validation.json`. A pasta de investigação é local e não constitui conteúdo publicado.
