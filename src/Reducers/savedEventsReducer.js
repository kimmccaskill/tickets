export const savedEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_EVENT':
      return [...state, action.event]
    case 'UNSAVE_EVENT':
      return state.filter(event => event.id !== action.id)
    default:
      return state;
  }
}