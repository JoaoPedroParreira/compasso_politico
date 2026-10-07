import { useState } from 'react';
import { LANG } from '../i18n';
import type { AnswerValue, QuizPayload } from '../types/quiz';
import type { FriendProfile } from '../utils/friendComparison';

interface Props {
  quiz: QuizPayload;
  answers: Record<string, AnswerValue>;
  friend: FriendProfile | null;
  onChange: (id: string, value: AnswerValue) => void;
  onSave: () => void; onCompareSelf: () => void;
  busy: boolean;
  error: string | null;
  setup: React.ReactNode;
}
export function AnswerEditor({ quiz, answers, friend, onChange, onSave, onCompareSelf, busy, error, setup }: Props) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const en = LANG === 'en';
  const common = quiz.questions.filter(q => friend?.answers[q.id]);
  const equal = common.filter(q => answers[q.id] === friend?.answers[q.id]);
  const visible = quiz.questions.filter(q => (!query || q.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())) && (filter === 'all' || (filter === 'different' ? friend?.answers[q.id] && answers[q.id] !== friend.answers[q.id] : q.axisId === filter)));
  return <main className="ed answer-editor"><div className="e-wrap">
    <p className="e-eyebrow">{en ? 'YOUR SAVED TEST' : 'O TEU TESTE GUARDADO'}</p>
    <h1>{en ? 'Review your answers' : 'Revê as tuas respostas'}</h1>
    <p className="e-lead">{en ? 'Change any choice below, then recalculate your profile. Your friend’s answers remain unchanged.' : 'Altera qualquer escolha abaixo e recalcula o teu perfil. As respostas do amigo ficam guardadas tal como foram carregadas.'}</p>
    {setup}<button className="e-btn e-btn-ghost" disabled={busy} onClick={onCompareSelf}>{en ? 'Retake and compare with myself' : 'Refazer e comparar comigo'}</button>
    <div className="answer-toolbar"><span>{quiz.questions.length} {en ? 'answers' : 'respostas'}{friend && ` · ${equal.length}/${common.length} ${en ? 'shared answers agree' : 'respostas em comum iguais'}`}</span>
      <button className="e-btn e-btn-primary" disabled={busy} onClick={onSave}>{busy ? (en ? 'Calculating…' : 'A recalcular…') : (en ? 'Recalculate & view profile' : 'Recalcular e ver perfil')}</button>
    </div>
    <div className="answer-filters"><input aria-label={en ? 'Search questions' : 'Pesquisar perguntas'} placeholder={en ? 'Search a question…' : 'Pesquisar uma pergunta…'} value={query} onChange={e => setQuery(e.target.value)} />
      <select aria-label={en ? 'Filter questions' : 'Filtrar perguntas'} value={filter} onChange={e => setFilter(e.target.value)}><option value="all">{en ? 'All questions' : 'Todas as perguntas'}</option>{friend && <option value="different">{en ? 'Different answers' : 'Respostas diferentes'}</option>}{quiz.axes.map(axis => <option key={axis.id} value={axis.id}>{axis.label}</option>)}</select>
    </div>
    {error && <p role="alert" className="inline-error">{error}</p>}
    <div className="answer-table-scroll"><table className="answer-editor-table"><thead><tr><th>{en ? 'Question' : 'Pergunta'}</th><th>{en ? 'My answer' : 'A minha resposta'}</th>{friend && <th>{en ? 'Friend’s answer' : 'Resposta do amigo'}</th>}</tr></thead><tbody>{visible.map(q => {
      const other = friend?.answers[q.id];
      return <tr key={q.id}><th scope="row"><small>{quiz.axes.find(axis => axis.id === q.axisId)?.label}</small>{q.text}</th><td><select disabled={busy} aria-label={`${en ? 'My answer' : 'A minha resposta'}: ${q.text}`} value={answers[q.id]} onChange={e => onChange(q.id, e.target.value as AnswerValue)}>{quiz.answerOptions.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}</select></td>{friend && <td><span>{quiz.answerOptions.find(option => option.id === other)?.label ?? (en ? 'Not answered' : 'Não respondeu')}</span>{other && <small className={other === answers[q.id] ? 'friend-same' : 'friend-different'}>{other === answers[q.id] ? (en ? 'Same' : 'Concordam') : (en ? 'Different' : 'Diferentes')}</small>}</td>}</tr>;
    })}</tbody></table></div>
    {!visible.length && <p>{en ? 'No questions match this filter.' : 'Nenhuma pergunta corresponde a este filtro.'}</p>}
    <p className="friend-help">{en ? 'Surprise Mode applies when taking a new test. Here you are reviewing answers you have already given.' : 'O Modo Surpresa aplica-se ao fazer um novo teste. Aqui estás a rever respostas que já deste.'}</p>
  </div></main>;
}

