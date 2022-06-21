export function addNoteAction(note) {
  return { type: 'ADD_NOTE', payload: note };
}

export function deleteNoteAction(note) {
  return { type: 'DELETE_NOTE', payload: note };
}
export function sortNoteDecreasingAction() {
  return { type: 'SORT_UP' };
}
export function sortNoteIncreasingAction() {
  return { type: 'SORT_DOWN' };
}
export function searchAction(note) {
  return { type: 'SEARCH', payload: note };
}
