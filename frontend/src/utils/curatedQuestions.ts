/** Editorial selection v1 (2026-10-07). See docs/evidencias/selecao-perguntas-36-60.md.
 * First three items form the short quiz; the last two extend it to 60.
 * IDs, wording, scoring polarity and weights come from the existing question pool.
 */
export const CURATED_QUESTIONS: Readonly<Record<string, readonly string[]>> = {
  estrutura: ['estrutura_01', 'estrutura_07', 'estrutura_04', 'estrutura_05', 'estrutura_12'],
  representacao: ['representacao_01', 'representacao_02', 'representacao_14', 'representacao_19', 'representacao_16'],
  poder: ['poder_03', 'poder_11', 'poder_16', 'poder_04', 'poder_09'],
  imigracao: ['imigracao_01', 'imigracao_04', 'imigracao_16', 'imigracao_17', 'imigracao_10'],
  diplomacia: ['diplomacia_01', 'diplomacia_03', 'diplomacia_02', 'diplomacia_10', 'diplomacia_09'],
  intervencao: ['intervencao_01', 'intervencao_08', 'intervencao_20', 'intervencao_17', 'intervencao_14'],
  economia: ['economia_03', 'economia_09', 'economia_02', 'economia_18', 'economia_05'],
  controle: ['controle_01', 'controle_02', 'controle_04', 'controle_19', 'controle_16'],
  comercio: ['comercio_03', 'comercio_09', 'comercio_12', 'comercio_04', 'comercio_13'],
  religiao: ['religiao_03', 'religiao_16', 'religiao_10', 'religiao_07', 'religiao_02'],
  moral: ['moral_01', 'moral_09', 'moral_20', 'moral_03', 'moral_02'],
  tecnologia: ['tecnologia_09', 'tecnologia_04', 'tecnologia_08', 'tecnologia_03', 'tecnologia_16']
};
