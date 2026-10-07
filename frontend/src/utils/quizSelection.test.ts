import { describe, it, expect } from 'vitest';
import { selectAllQuestionsBalanced, selectAndBalanceQuestions } from './quizSelection';
import type { QuizPayload } from '../types/quiz';
import realQuestions from '../../../backend/src/main/resources/data/questions-pool.json';
import realAxes from '../../../backend/src/main/resources/data/axes.json';
import englishQuestions from '../../../backend/src/main/resources/data/i18n/en/questions.json';

function realPool(variant: 'short' | 'extended'): QuizPayload {
  return { ...makePool(20, variant === 'short' ? 3 : 5), variant,
    axes: realAxes, questions: realQuestions as QuizPayload['questions'] };
}

describe('curated selection with production questions', () => {
  it('keeps the same membership across repeated runs and shuffled API pools', () => {
    const pool = realPool('short');
    const ids = (payload: QuizPayload) => payload.questions.map(q => q.id).sort();
    expect(ids(selectAndBalanceQuestions(pool))).toEqual(ids(selectAndBalanceQuestions({ ...pool, questions: [...pool.questions].reverse() })));
  });

  it('includes every short question in the complete quiz, without duplicates', () => {
    const short = selectAndBalanceQuestions(realPool('short'));
    const complete = selectAndBalanceQuestions(realPool('extended'));
    const ids = new Set(complete.questions.map(q => q.id));
    expect(ids.size).toBe(60);
    expect(short.questions).toHaveLength(36);
    short.questions.forEach(q => expect(ids.has(q.id)).toBe(true));
    for (const axis of realAxes) {
      expect(short.questions.filter(q => q.axisId === axis.id)).toHaveLength(3);
      expect(complete.questions.filter(q => q.axisId === axis.id)).toHaveLength(5);
    }
    expect(short.questions.filter(q => q.agreePole === 'LEFT')).toHaveLength(18);
    expect(complete.questions.filter(q => q.agreePole === 'LEFT')).toHaveLength(30);
  });

  it('preserves original question objects and uses the same IDs in English', () => {
    const pool = realPool('extended');
    const selected = selectAndBalanceQuestions(pool);
    selected.questions.forEach(q => expect(q).toBe(pool.questions.find(original => original.id === q.id)));
    const translated = { ...pool, questions: pool.questions.map(q => ({ ...q, text: englishQuestions.find(item => item.id === q.id)!.text })) };
    expect(selectAndBalanceQuestions(translated).questions.map(q => q.id).sort()).toEqual(selected.questions.map(q => q.id).sort());
  });

  it('rejects an incomplete pool instead of silently selecting random replacements', () => {
    const pool = realPool('short');
    expect(() => selectAndBalanceQuestions({ ...pool, questions: pool.questions.filter(q => q.id !== 'estrutura_01') })).toThrow('estrutura_01');
  });
});

const AXIS_IDS = [
  'estrutura', 'representacao', 'poder', 'imigracao',
  'diplomacia', 'intervencao', 'economia', 'controle',
  'comercio', 'religiao', 'moral', 'tecnologia',
];

function makePool(questionsPerAxis: number, targetPerAxisSelection: number): QuizPayload {
  const questions = AXIS_IDS.flatMap((axisId) =>
    Array.from({ length: questionsPerAxis }, (_, i) => ({
      id: `${axisId}_${String(i + 1).padStart(2, '0')}`,
      axisId,
      text: `Pergunta ${i} de ${axisId}`,
      agreePole: (i % 2 === 0 ? 'LEFT' : 'RIGHT') as 'LEFT' | 'RIGHT',
      weight: 1,
    }))
  );
  return {
    title: '12 Axes',
    description: 'Test',
    variant: targetPerAxisSelection === 5 ? 'extended' : 'short',
    questionCount: AXIS_IDS.length * targetPerAxisSelection,
    questionsPerAxis: targetPerAxisSelection,
    axes: AXIS_IDS.map((id) => ({
      id, label: id, leftPole: 'L', rightPole: 'R', leftColor: '', rightColor: '',
    })),
    questions,
    answerOptions: [],
  };
}

describe('selectAndBalanceQuestions — quiz curto (3 por eixo)', () => {
  it('retorna exatamente 36 questões', () => {
    const result = selectAndBalanceQuestions(makePool(20, 3));
    expect(result.questions).toHaveLength(36);
  });

  it('retorna exatamente 3 questões por eixo', () => {
    const result = selectAndBalanceQuestions(makePool(20, 3));
    for (const axisId of AXIS_IDS) {
      const count = result.questions.filter((q) => q.axisId === axisId).length;
      expect(count, `eixo ${axisId}`).toBe(3);
    }
  });

  it('retorna 18 questões LEFT e 18 RIGHT', () => {
    const result = selectAndBalanceQuestions(makePool(20, 3));
    const leftCount = result.questions.filter((q) => q.agreePole === 'LEFT').length;
    const rightCount = result.questions.filter((q) => q.agreePole === 'RIGHT').length;
    expect(leftCount).toBe(18);
    expect(rightCount).toBe(18);
  });

  it('não apresenta dois polos iguais consecutivos', () => {
    const result = selectAndBalanceQuestions(makePool(20, 3));
    for (let i = 1; i < result.questions.length; i++) {
      expect(
        result.questions[i].agreePole,
        `questões ${i - 1} e ${i} têm mesmo polo`
      ).not.toBe(result.questions[i - 1].agreePole);
    }
  });
});

describe('selectAllQuestionsBalanced — quiz extremo', () => {
  it('mantém TODAS as perguntas do pool (sem perder nem duplicar)', () => {
    const pool = makePool(20, 3);
    const result = selectAllQuestionsBalanced(pool);
    expect(result.questions).toHaveLength(pool.questions.length);
    const ids = new Set(result.questions.map((q) => q.id));
    expect(ids.size).toBe(pool.questions.length);
    expect(ids).toEqual(new Set(pool.questions.map((q) => q.id)));
  });

  it('marca a versão como extreme e ajusta a contagem', () => {
    const result = selectAllQuestionsBalanced(makePool(20, 3));
    expect(result.variant).toBe('extreme');
    expect(result.questionCount).toBe(result.questions.length);
  });

  it('intercala polos sempre que ainda há de ambos os lados', () => {
    const result = selectAllQuestionsBalanced(makePool(20, 3));
    for (let i = 1; i < result.questions.length; i++) {
      expect(
        result.questions[i].agreePole,
        `questões ${i - 1} e ${i} têm mesmo polo`
      ).not.toBe(result.questions[i - 1].agreePole);
    }
  });
});
describe('selectAndBalanceQuestions — quiz completo (5 por eixo)', () => {
  it('retorna exatamente 60 questões', () => {
    const result = selectAndBalanceQuestions(makePool(20, 5));
    expect(result.questions).toHaveLength(60);
  });

  it('retorna exatamente 5 questões por eixo', () => {
    const result = selectAndBalanceQuestions(makePool(20, 5));
    for (const axisId of AXIS_IDS) {
      const count = result.questions.filter((q) => q.axisId === axisId).length;
      expect(count, `eixo ${axisId}`).toBe(5);
    }
  });

  it('retorna 30 questões LEFT e 30 RIGHT', () => {
    const result = selectAndBalanceQuestions(makePool(20, 5));
    const leftCount = result.questions.filter((q) => q.agreePole === 'LEFT').length;
    const rightCount = result.questions.filter((q) => q.agreePole === 'RIGHT').length;
    expect(leftCount).toBe(30);
    expect(rightCount).toBe(30);
  });

  it('não apresenta dois polos iguais consecutivos', () => {
    const result = selectAndBalanceQuestions(makePool(20, 5));
    for (let i = 1; i < result.questions.length; i++) {
      expect(
        result.questions[i].agreePole,
        `questões ${i - 1} e ${i} têm mesmo polo`
      ).not.toBe(result.questions[i - 1].agreePole);
    }
  });
});

