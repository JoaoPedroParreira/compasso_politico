# Validação do segundo lote — 2026-10-07

Integradas 27 entradas, nove por catálogo, completando as 30 pedidas. Totais: 267 ideologias, 519 personalidades, 219 países e regimes. Novos: 10 em cada catálogo.

## Verificações realizadas

- Integrador: doze eixos, valores e intervalos válidos, confiança e explicação bilingue, referências de fontes, imagens locais, IDs únicos e ligações entre ideologias, personalidades e governos.
- `node frontend/scripts/validate-catalogue-additions.mjs`: 30 perfis, 360 eixos, 20 utilizações de imagens, traduções, páginas geradas e 30 verificações de compatibilidade com o próprio vetor. Relatório local: `.local-runtime/catalogue-final-validation.json`.
- Uma execução de `npm run build`: TypeScript e Vite aprovados; 2016 páginas geradas em português e inglês. Os 210 testes de aplicação aprovados no primeiro lote não foram repetidos.
- Navegador local: Novos 10 e dez resultados nos três catálogos; perfil de Costa com os doze eixos e acesso a Fontes e critérios.
- API local: o vetor de Costa devolve a variante social-democrata de 2019, António Costa e o XXII Governo como correspondências de 100%, confirmando a integração nos três comparadores. Verifica funcionamento técnico, não validade científica das coordenadas.

## Critérios editoriais e limites

Foram consultados os programas ou declarações e as fontes indicadas nos dossiers. Cada eixo tem justificação e referências. Variantes programáticas têm autor e período identificados; não são definições universais de uma ideologia. Governos são perfis históricos de orientação declarada, distintos da população e da execução das políticas.

Coordenadas e intervalos são editoriais. Compromissos documentados podem estar perto do centro; 50 não substitui ausência de informação. Documentos coletivos foram usados quando apresentados, subscritos ou assinados pela personalidade, não apenas por filiação partidária. Merkel tem um contraponto individual na moral; o primeiro governo de Soares tem uma qualificação institucional na representação.

Fotografias e bandeiras autênticas, com autoria, licença e origem Commons em `imagens-lote-02.json`. A bandeira identifica o país no período, não uma bandeira própria do governo. A conversão SVG para PNG conserva o símbolo; os retratos usam ficheiros verificados com recorte CSS.

Revisão editorial pelo mesmo autor da integração; **revisão independente não realizada**. A validação técnica não garante ausência de erro histórico ou correspondências perfeitas. Fontes, intervalos e limitações são acessíveis nas páginas. O catálogo herdado continua não auditado.
