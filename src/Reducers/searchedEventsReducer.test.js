import { searchedEventsReducer } from '../reducers/searchedEventsReducer'
import { mockEvents } from '../mockData'

describe('searchedEventsReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = []
    const result = searchedEventsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_SEARCHED', () => {
    const searchedEvents = mockEvents

    const mockAction = {
      type: 'SET_SEARCHED',
      searchedEvents,
    }

    const mockState = []

    const result = searchedEventsReducer(mockState, mockAction)
    const expected = mockEvents
    expect(result).toEqual(expected)
  })
})