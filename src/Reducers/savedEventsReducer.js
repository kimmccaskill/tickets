export const savedEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_EVENT':
      console.log(action)
      return [...state, action.event ]
    default:
      return state;
  }
}