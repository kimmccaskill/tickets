export const setUpcoming = upcomingEvents => ({
  type: 'SET_UPCOMING',
  upcomingEvents
})

export const setCurrent = currentEvents => ({
  type: 'SET_CURRENT',
  currentEvents
})

export const setSearched = searchedEvents => ({
  type: 'SET_SEARCHED',
  searchedEvents
})

export const saveEvent = event => ({
  type: 'SAVE_EVENT',
  event
})

export const unsaveEvent = id => ({
  type: 'UNSAVE_EVENT',
  id
})