import { useId, useState } from 'react';
import { LANG } from '../i18n';
import { parseFriendProfile, type FriendProfile } from '../utils/friendComparison';
import type { AnswerValue, AxisResult, QuizPayload } from '../types/quiz';
import { ArrowIcon, DownloadIcon } from './editorial/primitives';

const answerLabels: Record<AnswerValue, [string, string]> = {
  STRONGLY_AGREE: ['Concordo totalmente', 'Strongly agree'], AGREE: ['Concordo', 'Agree'],
  NEUTRAL: ['Neutro / depende', 'Neutral / depends'], DISAGREE: ['Discordo', 'Disagree'],
  STRONGLY_DISAGREE: ['Discordo totalmente', 'Strongly disagree']
};
export function FriendSetup({ friend, open, onFriend, onOpen, onOwn, onStartComparison }: { onStartComparison: () => void; onOwn?: (profile: FriendProfile) => Promise<void>; friend: FriendProfile | null; open: boolean; onFriend: (profile: FriendProfile | null) => void; onOpen: (value: boolean) => void }) {
  const [error, setError] = useState('');
  const id = useId();
  const [importing, setImporting] = useState(false);
  const [ownProfile, setOwnProfile] = useState<FriendProfile | null>(null);
  const [action, setAction] = useState<'edit' | 'compare' | 'self'>(friend ? 'compare' : 'edit');
  const [pendingFriend, setPendingFriend] = useState<FriendProfile | null>(friend);
  const [pendingOpen, setPendingOpen] = useState(open);
  const en = LANG === 'en';
  return <details className="friend-setup" open={friend ? true : undefined}>
    <summary><span className="friend-symbol" aria-hidden="true">↔</span><span><strong>{en ? 'Load & compare answers' : 'Carregar e comparar respostas'}</strong><small>{en ? 'Edit yours or compare with a friend' : 'Edita as tuas ou compara com um amigo'}</small></span><ArrowIcon /></summary>
    <div className="friend-body">
      <div className="friend-modes" role="group" aria-label={en ? 'What would you like to do?' : 'O que queres fazer?'}>
        <button type="button" aria-pressed={action === 'edit'} disabled={importing} onClick={() => setAction('edit')}><strong>{en ? 'Edit my answers' : 'Editar as minhas respostas'}</strong><small>{en ? 'Load your saved test' : 'Carrega o teu teste guardado'}</small></button>
        <button type="button" aria-pressed={action === 'compare'} disabled={importing} onClick={() => setAction('compare')}><strong>{en ? 'Compare with a friend' : 'Comparar com um amigo'}</strong><small>{en ? 'Saved answers or a new test' : 'Respostas guardadas ou um novo teste'}</small></button>
        <button type="button" aria-pressed={action === 'self'} disabled={importing} onClick={() => setAction('self')}><strong>{en ? 'Compare with myself' : 'Comparar comigo'}</strong><small>{en ? 'Retake using my previous answers' : 'Refazer com as minhas respostas anteriores'}</small></button>
      </div>
      <p className="friend-help">{action === 'self' ? (en ? 'Load your previous answers, choose Surprise or Open Mode, then start a new test to compare your choices.' : 'Carrega as tuas respostas anteriores, escolhe o Modo Surpresa ou Aberto e começa um novo teste para comparar as tuas escolhas.') : action === 'edit' ? (en ? 'Load your answers to change individual choices in the table.' : 'Carrega as tuas respostas para alterar escolhas específicas na tabela.') : (en ? 'Load your friend’s answers. Add your own to compare saved tests, or leave them empty to take a new test.' : 'Carrega as respostas do amigo. Junta as tuas para comparar testes guardados ou deixa-as por carregar para fazer um novo teste.')}</p>
      {onOwn && <label className="friend-upload own-upload"><DownloadIcon /><span>{importing ? (en ? 'Loading…' : 'A carregar…') : (en ? 'Load my answers' : 'Carregar as minhas respostas')}<small>{en ? 'JSON · resume, edit and recalculate' : 'JSON · retomar, editar e recalcular'}</small></span>
        <input aria-label={en ? 'Load my answers' : 'Carregar as minhas respostas'} type="file" accept=".json,application/json" disabled={importing} onChange={async event => {
          const input = event.currentTarget; const file = input.files?.[0]; if (!file) return;
          setImporting(true); setError('');
          try { if (file.size > 2_000_000) throw new Error('Máximo 2 MB.'); setOwnProfile(parseFriendProfile(await file.text(), file.name)); }
          catch (err) { setOwnProfile(null); setError(err instanceof Error ? err.message : 'JSON inválido.'); }
          finally { setImporting(false); input.value = ''; }
        }} />
      </label>}

      {ownProfile && <div className="friend-loaded" role="status"><span>✓ {ownProfile.name}<small>{Object.keys(ownProfile.answers).length} {en ? 'of your answers loaded' : 'respostas tuas carregadas'}</small></span><button type="button" disabled={importing} onClick={() => setOwnProfile(null)}>{en ? 'Remove' : 'Remover'}</button></div>}
      {action === 'compare' && <>
      <p>{en ? 'Your friend can download their answers at the end of the test. Load that JSON here to play together.' : 'No final do teste, o teu amigo pode descarregar as respostas. Carrega esse JSON aqui para compararem as vossas escolhas.'}</p>
      <label className="friend-upload" htmlFor={id}><DownloadIcon /><span>{pendingFriend ? (en ? 'Change file' : 'Trocar ficheiro') : (en ? 'Load friend’s answers' : 'Carregar respostas do amigo')}<small>JSON · {en ? 'up to 2 MB' : 'até 2 MB'}</small></span>
        <input id={id} type="file" accept=".json,application/json" onChange={async event => {
          const file = event.target.files?.[0]; if (!file) return;
          try {
            if (file.size > 2_000_000) throw new Error(en ? 'File too large (maximum 2 MB).' : 'Ficheiro demasiado grande (máximo 2 MB).');
            setPendingFriend(parseFriendProfile(await file.text(), file.name)); setError('');
          } catch (err) { setPendingFriend(null); setError(err instanceof Error ? err.message : 'JSON inválido.'); }
          event.target.value = '';
        }} />
      </label>
      {pendingFriend && <div className="friend-loaded" role="status"><span>✓ {pendingFriend.name}<small>{Object.keys(pendingFriend.answers).length} {en ? 'answers loaded' : 'respostas carregadas'}</small></span><button type="button" onClick={() => setPendingFriend(null)}>{en ? 'Remove' : 'Remover'}</button></div>}
      <p className="friend-help">{en ? 'Different quiz lengths may have different questions. Only shared questions are compared.' : 'Testes de tamanhos diferentes podem ter perguntas diferentes. Comparamos apenas as perguntas em comum.'}</p>
      </>}
      {action !== 'edit' && <div className="friend-modes" role="group" aria-label={en ? 'Comparison mode' : 'Modo de comparação'}>
        <button type="button" aria-pressed={!pendingOpen} onClick={() => setPendingOpen(false)}><strong>{en ? 'Surprise Mode' : 'Modo Surpresa'}</strong><small>{en ? 'Reveal after your choice' : 'Revela depois da tua escolha'}</small></button>
        <button type="button" aria-pressed={pendingOpen} onClick={() => setPendingOpen(true)}><strong>{en ? 'Open Mode' : 'Modo Aberto'}</strong><small>{en ? 'See before answering' : 'Vê antes de responder'}</small></button>
      </div>
      }
      <button type="button" className="e-btn e-btn-primary" disabled={importing || (action === 'compare' ? !pendingFriend : !ownProfile || (action === 'edit' && !onOwn))} onClick={async () => {
        setImporting(true); setError('');
        try {
          if (action === 'self' && ownProfile) {
            onFriend({ ...ownProfile, name: en ? 'My previous answers' : 'As minhas respostas anteriores' });
            onOpen(pendingOpen); onStartComparison();
          } else if (ownProfile && onOwn) {
            await onOwn(ownProfile);
            onFriend(action === 'compare' ? pendingFriend : null);
            onOpen(pendingOpen);
          } else if (action === 'compare' && pendingFriend) {
            onFriend(pendingFriend); onOpen(pendingOpen); onStartComparison();
          }
        } catch (err) { setError(err instanceof Error ? err.message : (en ? 'Unable to start.' : 'Não foi possível começar.')); }
        finally { setImporting(false); }
      }}>{importing ? (en ? 'Loading…' : 'A carregar…') : (en ? 'Start' : 'Começar')}</button>
      {error && <p className="inline-error" role="alert">{error}</p>}
    </div>
  </details>;
}

export function FriendResults({ friend, axes, answers, quiz }: { friend: FriendProfile; axes: AxisResult[]; answers: Record<string, AnswerValue>; quiz: QuizPayload | null }) {
  const en = LANG === 'en';
  const averageDifference = axes.reduce((sum, axis) => sum + Math.abs(axis.leftPercent - friend.axes.find(item => item.axisId === axis.axisId)!.leftPercent), 0) / axes.length;
  const common = Object.keys(answers).filter(id => friend.answers[id]);
  const same = common.filter(id => answers[id] === friend.answers[id]).length;
  return <section className="friend-results e-panel"><p className="e-eyebrow">{en ? 'YOU & YOUR FRIEND' : 'TU & O TEU AMIGO'}</p><h2>{en ? 'Where do you agree?' : 'Em que concordam?'}</h2>
    <p className="friend-result-name">{friend.name}</p>
    <div className="friend-stats"><div><strong>{Math.round(100 - averageDifference)}%</strong><span>{en ? 'axis similarity' : 'proximidade nos eixos'}</span></div><div><strong>{same}<small> / {common.length}</small></strong><span>{en ? 'identical answers in shared questions' : 'respostas iguais nas perguntas em comum'}</span></div></div>
    <details className="friend-result-detail"><summary>{en ? 'Compare the 12 axes' : 'Comparar os 12 eixos'}</summary><div className="friend-table"><table><thead><tr><th>{en ? 'Axis / left pole' : 'Eixo / polo esquerdo'}</th><th>{en ? 'You' : 'Tu'}</th><th>{en ? 'Friend' : 'Amigo'}</th><th>Δ</th></tr></thead><tbody>{axes.map(axis => {
      const value = friend.axes.find(item => item.axisId === axis.axisId)!.leftPercent;
      return <tr key={axis.axisId}><th>{axis.label}<small>{axis.leftPole}</small></th><td>{axis.leftPercent}%</td><td>{value}%</td><td>{Math.abs(axis.leftPercent - value).toFixed(1)} pp</td></tr>;
    })}</tbody></table></div></details>
    {common.length ? <details className="friend-result-detail"><summary>{en ? 'Compare answer by answer' : 'Comparar resposta a resposta'}</summary><ol className="friend-answer-list">{common.map(id => <li key={id}><p>{quiz?.questions.find(q => q.id === id)?.text ?? friend.questions?.find(q => q.id === id)?.text ?? id}</p><div><span>{en ? 'You' : 'Tu'}: <strong>{answerLabels[answers[id]][en ? 1 : 0]}</strong></span><span>{en ? 'Friend' : 'Amigo'}: <strong>{answerLabels[friend.answers[id]][en ? 1 : 0]}</strong></span><small className={answers[id] === friend.answers[id] ? 'friend-same' : 'friend-different'}>{answers[id] === friend.answers[id] ? (en ? 'Same answer' : 'Concordam') : (en ? 'Different answer' : 'Respostas diferentes')}</small></div></li>)}</ol></details> : <p className="friend-help">{en ? 'No shared answers in these files. You can still compare the axes.' : 'Estes ficheiros não têm respostas em comum. Podes comparar os eixos na mesma.'}</p>}
  </section>;
}




