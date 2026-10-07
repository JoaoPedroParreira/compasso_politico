import { CURATED_QUESTIONS } from './curatedQuestions';
import type { QuizPayload, Question } from '../types/quiz';

export function selectAndBalanceQuestions(payload: QuizPayload): QuizPayload {
  const questionsPerAxis = payload.variant === 'extended' ? 5 : 3;
  const byId = new Map(payload.questions.map(question => [question.id, question]));
  const selected: Question[] = [];
  for (const axis of payload.axes) {
    const ids = CURATED_QUESTIONS[axis.id];
    if (!ids) throw new Error(`No curated question selection for axis ${axis.id}.`);
    for (const id of ids.slice(0, questionsPerAxis)) {
      const question = byId.get(id);
      if (!question || question.axisId !== axis.id) {
        throw new Error(`Curated question ${id} is missing or belongs to another axis.`);
      }
      selected.push(question);
    }
  }
  return {
    ...payload,
    questions: interleaveByPole(selected),
    questionCount: selected.length,
    questionsPerAxis
  };
}
/**
 * Versão extrema: usa TODAS as perguntas do pool (sem subselecionar), apenas
 * reordenando para intercalar afirmações LEFT/RIGHT como no quiz normal.
 */
export function selectAllQuestionsBalanced(payload: QuizPayload): QuizPayload {
  const pool = payload.questions;
  const leftQueue = shuffleArray(pool.filter((q) => q.agreePole === 'LEFT'));
  const rightQueue = shuffleArray(pool.filter((q) => q.agreePole === 'RIGHT'));
  const ordered: Question[] = [];
  let li = 0;
  let ri = 0;
  let pickLeft = Math.random() < 0.5;

  for (let i = 0; i < pool.length; i++) {
    if (pickLeft && li < leftQueue.length) {
      ordered.push(leftQueue[li++]);
    } else if (!pickLeft && ri < rightQueue.length) {
      ordered.push(rightQueue[ri++]);
    } else if (li < leftQueue.length) {
      ordered.push(leftQueue[li++]);
    } else {
      ordered.push(rightQueue[ri++]);
    }
    pickLeft = !pickLeft;
  }

  return {
    ...payload,
    variant: 'extreme',
    questions: ordered,
    questionCount: ordered.length,
    questionsPerAxis: 0
  };
}

// Reordena para alternar afirmações LEFT/RIGHT enquanto houver de ambos os lados.
export function interleaveByPole(questions: Question[]): Question[] {
  const leftQueue = shuffleArray(questions.filter((q) => q.agreePole === 'LEFT'));
  const rightQueue = shuffleArray(questions.filter((q) => q.agreePole === 'RIGHT'));
  const ordered: Question[] = [];
  let li = 0;
  let ri = 0;
  let pickLeft = Math.random() < 0.5;

  for (let i = 0; i < questions.length; i++) {
    if (pickLeft && li < leftQueue.length) {
      ordered.push(leftQueue[li++]);
    } else if (!pickLeft && ri < rightQueue.length) {
      ordered.push(rightQueue[ri++]);
    } else if (li < leftQueue.length) {
      ordered.push(leftQueue[li++]);
    } else {
      ordered.push(rightQueue[ri++]);
    }
    pickLeft = !pickLeft;
  }

  return ordered;
}

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

