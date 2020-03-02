import { savedEventsReducer } from '../reducers/savedEventsReducer'
import { mockEvent,mockEvents } from '../mockData'

describe('savedEventsReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = []
    const result = savedEventsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SAVE_EVENT', () => {
    const event = mockEvent

    const mockAction = {
      type: 'SAVE_EVENT',
      event,
    }

    const mockState = []

    const result = savedEventsReducer(mockState, mockAction)
    const expected = [mockEvent]
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is UNSAVE_EVENT', () => {
    const id = mockEvent.id

    const mockAction = {
      type: 'UNSAVE_EVENT',
      id,
    }

    const mockState = mockEvents

    const result = savedEventsReducer(mockState, mockAction)
    const expected = []
    expect(result).toEqual(expected)
  })
})