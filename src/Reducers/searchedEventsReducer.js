export const searchedEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCHED':
      return action.searchedEvents;
    default:
      return state;
  }
}