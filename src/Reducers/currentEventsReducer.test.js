import { currentEventsReducer } from '../reducers/currentEventsReducer'
import { mockEvents } from '../mockData'

describe('currentEventsReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = []
    const result = currentEventsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_CURRENT', () => {
    const currentEvents = mockEvents

    const mockAction = {
      type: 'SET_CURRENT',
      currentEvents,
    }

    const mockState = []

    const result = currentEventsReducer(mockState, mockAction)
    const expected = mockEvents
    expect(result).toEqual(expected)
  })
})
