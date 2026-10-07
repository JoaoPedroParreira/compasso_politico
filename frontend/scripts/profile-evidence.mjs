import { readFileSync } from 'node:fs';
const entries = JSON.parse(readFileSync(new URL('./profile-evidence.json', import.meta.url), 'utf8'));

export function profileEvidence(id, locale, esc, axes) {
  const entry = entries[id];
  if (!entry) return '';
  const en = locale === 'en';
  return `<details class="panel profile-evidence"><summary>${en ? 'Sources and assessment' : 'Fontes e critérios'} · ${esc(entry.period)}</summary>
  <p>${esc(entry[locale].scope)}</p><p>${en ? 'Editorial estimates, not measured percentages of belief. This review does not certify the inherited catalogue.' : 'Estimativas editoriais, não percentagens medidas de opiniões. Esta revisão não certifica o catálogo herdado.'}</p>
  <div style="overflow-x:auto"><table><thead><tr><th>${en ? 'Axis' : 'Eixo'}</th><th>${en ? 'Value / range' : 'Valor / intervalo'}</th><th>${en ? 'Evidence' : 'Evidência'}</th></tr></thead><tbody>${entry.axes.map(a => `<tr><th>${esc(axes.find(x => x.id === a.id)?.label || a.id)}</th><td>${a.value} / ${a.range.join('–')}<br>${en ? (a.confidence === 'alta' ? 'High confidence' : 'Medium confidence') : `Confiança ${a.confidence}`}</td><td>${esc(a[locale])} ${a.sources.map(n => `<a href="${esc(entry.sources[n - 1].url)}" target="_blank" rel="noopener">[${n}]</a>`).join(' ')}</td></tr>`).join('')}</tbody></table></div>
  <ol>${entry.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a> — ${esc(s.author)} (${esc(s.date)}).</li>`).join('')}</ol>
  <p>${esc(entry[locale].limits)}</p>${entry.image ? `<p>${en ? 'Image' : 'Imagem'}: <a href="${esc(entry.image.source)}" target="_blank" rel="noopener">${esc(entry.image.artist)} · ${esc(entry.image.license)}</a>. ${esc(entry.image[locale])}</p>` : ''}
  <p>${en ? 'Reviewed' : 'Revisto'}: ${entry.reviewed}. ${en ? 'Review by Codex; no independent review.' : 'Revisão por Codex; sem revisão independente.'}</p></details>`;
}
