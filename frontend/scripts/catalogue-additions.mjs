import { readFileSync } from 'node:fs';

const additions = JSON.parse(readFileSync(new URL('./catalogue-additions.json', import.meta.url), 'utf8'));

// Registo explícito: os perfis herdados não são novidades deste projeto.
export function newCatalogueIds(kind, entries) {
  const ids = additions[kind];
  if (!Array.isArray(ids) || ids.some(id => typeof id !== 'string') || new Set(ids).size !== ids.length) {
    throw new Error(`Registo de novidades inválido: ${kind}`);
  }
  const available = new Set(entries.map(entry => entry.id));
  for (const id of ids) {
    if (!available.has(id)) throw new Error(`Novidade sem perfil no catálogo ${kind}: ${id}`);
  }
  return new Set(ids);
}

export function newCatalogueChip(ids, locale) {
  return `<button type="button" class="chip" data-cat="new" aria-pressed="false" style="--c:#123329;--cb:#DCE6E0">${locale === 'en' ? 'New' : 'Novos'}<em>${ids.size}</em></button>`;
}
