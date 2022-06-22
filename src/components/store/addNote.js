const defaultState = {
  notes: []
};
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };
    case 'SORT_UP':
      const sortedNotesUp = state.notes.sort((a, b) => {
        if (a.time > b.time) {
          return -1;
        }
        if (a.time < b.time) {
          return 1;
        }
      });
      return {
        ...state,
        notes: [...sortedNotesUp]
      };
    case 'SORT_DOWN':
      const sortedNotesDown = state.notes.sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        }
        if (a.time > b.time) {
          return 1;
        }
      });

      return {
        ...state,
        notes: [...sortedNotesDown]
      };
    default:
      return state;
  }
};
