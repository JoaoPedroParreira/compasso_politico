import type { AnswerValue, AxisResult, QuizResult, QuizPayload, Question } from '../types/quiz';
import { HOME_AXES } from '../data/homeAxes';

export interface FriendProfile {
  name: string;
  axes: Pick<AxisResult, 'axisId' | 'leftPercent'>[];
  answers: Record<string, AnswerValue>;
  questions?: Pick<Question, 'id' | 'text'>[];
  archetype?: Record<string, string>;
  religion?: string | null;
}
const answerValues = new Set(['STRONGLY_AGREE', 'AGREE', 'NEUTRAL', 'DISAGREE', 'STRONGLY_DISAGREE']);
export function editableQuiz(profile: FriendProfile, pool: QuizPayload): QuizPayload {
  const ids = Object.keys(profile.answers);
  if (!ids.length) throw new Error('Este ficheiro só contém os eixos. Para editar, carrega um JSON com as respostas individuais.');
  if (ids.some(id => !pool.questions.some(q => q.id === id))) throw new Error('O ficheiro contém perguntas que não pertencem a este teste.');
  const questions = ids.map(id => pool.questions.find(q => q.id === id)!);
  if (pool.axes.some(axis => !questions.some(q => q.axisId === axis.id))) throw new Error('O ficheiro precisa de respostas nos 12 eixos para recalcular o perfil.');
  for (const [id, value] of Object.entries(profile.archetype ?? {})) {
    if (id === 'religiao' || id === 'denominacao') continue;
    if (!pool.archetypeQuestions?.find(q => q.id === id)?.options.some(option => option.id === value)) throw new Error('O ficheiro contém uma escolha de arquétipo desconhecida.');
  }
  return { ...pool, questions, questionCount: questions.length, questionsPerAxis: questions.length / pool.axes.length, variant: questions.length <= 36 ? 'short' : questions.length <= 60 ? 'extended' : 'extreme' };
}
export function parseFriendProfile(text: string, name: string): FriendProfile {
  const data = JSON.parse(text);
  const axes = data?.result?.axes ?? data?.axes;
  if (!Array.isArray(axes) || axes.length !== HOME_AXES.length || !HOME_AXES.every(axis =>
    axes.filter(item => item?.axisId === axis.id && typeof item.leftPercent === 'number' && Number.isFinite(item.leftPercent) && item.leftPercent >= 0 && item.leftPercent <= 100).length === 1)) {
    throw new Error('O ficheiro deve conter um resultado válido dos 12 eixos.');
  }
  const answers = data.answers ?? {};
  if (!answers || typeof answers !== 'object' || Array.isArray(answers) || Object.values(answers).some(value => !answerValues.has(value as string))) {
    throw new Error('O ficheiro contém respostas inválidas.');
  }
  const questions = Array.isArray(data.questions) ? data.questions.filter((q: any) => q && typeof q.id === 'string' && typeof q.text === 'string').map((q: any) => ({ id: q.id, text: q.text })) : undefined;
  const archetype = data.archetype;
  if (archetype !== undefined && (!archetype || typeof archetype !== 'object' || Array.isArray(archetype) || Object.values(archetype).some(value => typeof value !== 'string'))) throw new Error('Escolhas de arquétipo inválidas.');
  return { name, axes: axes.map(({axisId, leftPercent}) => ({axisId, leftPercent})), answers, ...(questions ? {questions} : {}), ...(archetype ? {archetype} : {}), ...(typeof data.religion === 'string' ? {religion: data.religion} : {}) };
}
export function exportFriendProfile(result: QuizResult, answers: Record<string, AnswerValue>, quiz?: QuizPayload | null, archetype: Record<string, string> = {}, religion: string | null = null) {
  const blob = new Blob([JSON.stringify({ format: 'compasso-politico', version: 1, axes: result.axes, answers, questions: quiz?.questions.map(({ id, text }) => ({ id, text })) ?? [], variant: quiz?.variant, archetype, religion }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'compasso-politico-respostas.json';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
