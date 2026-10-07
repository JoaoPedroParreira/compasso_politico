import { describe, expect, it, vi } from 'vitest';
import { HOME_AXES } from '../data/homeAxes';
import { parseFriendProfile, exportFriendProfile, editableQuiz } from './friendComparison';
import type { QuizPayload, QuizResult } from '../types/quiz';

const axes = HOME_AXES.map(axis => ({ axisId: axis.id, leftPercent: 50 }));
const pool = { axes: HOME_AXES, questions: HOME_AXES.map(axis => ({ id: axis.id + '-q', axisId: axis.id, text: axis.label, agreePole: 'LEFT', weight: 1 })), answerOptions: [] } as unknown as QuizPayload;
describe('friend result import', () => {
  it('restores only the imported questions in their answer order without changing the original file', () => {
    const answers = Object.fromEntries([...pool.questions].reverse().map(q => [q.id, 'AGREE']));
    const profile = parseFriendProfile(JSON.stringify({ axes, answers }), 'me.json');
    const quiz = editableQuiz(profile, pool);
    expect(quiz.questions.map(q => q.id)).toEqual(Object.keys(answers));
    const draft = { ...profile.answers }; draft[quiz.questions[0].id] = 'DISAGREE';
    expect(profile.answers[quiz.questions[0].id]).toBe('AGREE');
  });
  it('rejects axes-only imports, unknown questions and incomplete axis coverage for editing', () => {
    for (const answers of [{}, { unknown: 'AGREE' }, { [pool.questions[0].id]: 'AGREE' }]) {
      expect(() => editableQuiz(parseFriendProfile(JSON.stringify({ axes, answers }), 'me.json'), pool)).toThrow();
    }
  });
  it('preserves archetypes and religion when exporting for future recalculation', () => {
    const profile = parseFriendProfile(JSON.stringify({ axes, answers: {}, archetype: { society: 'A' }, religion: 'christianity' }), 'me.json');
    expect(profile.archetype).toEqual({ society: 'A' });
    expect(profile.religion).toBe('christianity');
  });
  it('exports question text and answers that can be imported for comparison', async () => {
    let blob: Blob | undefined;
    const anchor = { href: '', download: '', click: vi.fn(), remove: vi.fn() };
    vi.stubGlobal('document', { createElement: () => anchor, body: { appendChild: vi.fn() } });
    vi.spyOn(URL, 'createObjectURL').mockImplementation(value => { blob = value as Blob; return 'blob:test'; });
    vi.useFakeTimers();
    try {
      exportFriendProfile({ axes } as QuizResult, { q1: 'AGREE' }, { variant: 'short', questions: [{ id: 'q1', text: 'Pergunta de exemplo' }] } as QuizPayload);
      expect(anchor.download).toBe('compasso-politico-respostas.json');
      expect(anchor.click).toHaveBeenCalledOnce();
      const profile = parseFriendProfile(await blob!.text(), anchor.download);
      expect(profile.answers).toEqual({ q1: 'AGREE' });
      expect(profile.questions).toEqual([{ id: 'q1', text: 'Pergunta de exemplo' }]);
    } finally { vi.clearAllTimers(); vi.useRealTimers(); vi.restoreAllMocks(); vi.unstubAllGlobals(); }
  });
  it('accepts a complete result and preserves answers across a JSON round trip', () => {
    const answers = { 'q-1': 'AGREE' };
    const profile = parseFriendProfile(JSON.stringify({ axes, answers }), 'amigo.json');
    expect(profile.answers).toEqual(answers);
    expect(parseFriendProfile(JSON.stringify(profile), profile.name)).toEqual(profile);
  });
  it('rejects duplicate and missing axes', () => {
    expect(() => parseFriendProfile(JSON.stringify({ axes: [...axes.slice(1), axes[1]] }), 'bad.json')).toThrow();
  });
  it.each([null, '50', -1, 101])('rejects invalid percentage %s', value => {
    expect(() => parseFriendProfile(JSON.stringify({ axes: axes.map((axis, index) => index ? axis : { ...axis, leftPercent: value }) }), 'bad.json')).toThrow();
  });
  it('rejects malformed answers', () => {
    expect(() => parseFriendProfile(JSON.stringify({ axes, answers: { q: 'INVALID' } }), 'bad.json')).toThrow();
  });
});
