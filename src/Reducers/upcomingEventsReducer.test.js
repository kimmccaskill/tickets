import { upcomingEventsReducer } from '../reducers/upcomingEventsReducer'
import { mockEvents } from '../mockData'

describe('upcomingEventsReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = []
    const result = upcomingEventsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_UPCOMING', () => {
    const upcomingEvents = mockEvents

    const mockAction = {
      type: 'SET_UPCOMING',
      upcomingEvents,
    }

    const mockState = []

    const result = upcomingEventsReducer(mockState, mockAction)
    const expected = mockEvents
    expect(result).toEqual(expected)
  })
})