export const currentEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return action.currentEvents;
    default:
      return state;
  }
}