export const savedEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_EVENT':
      return [...state, action.event]
    default:
      return state;
  }
}