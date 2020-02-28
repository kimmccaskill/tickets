export const upcomingEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_UPCOMING':
      return action.upcomingEvents;
    default:
      return state;
  }
}