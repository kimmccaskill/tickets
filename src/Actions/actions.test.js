import * as actions from '../actions'
import { mockEvent,mockEvents } from '../mockData'

describe('actions', () => {
  it('should have a type of SET_UPCOMING', () => {
    const upcomingEvents = mockEvents
    const expectedAction = {
      type: 'SET_UPCOMING',
      upcomingEvents
    }

    const result = actions.setUpcoming(upcomingEvents)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_CURRENT', () => {
    const currentEvents = mockEvents
    const expectedAction = {
      type: 'SET_CURRENT',
      currentEvents
    }

    const result = actions.setCurrent(currentEvents)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_SEARCHED', () => {
    const searchedEvents = mockEvents
    const expectedAction = {
      type: 'SET_SEARCHED',
      searchedEvents
    }

    const result = actions.setSearched(searchedEvents)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SAVE_EVENT', () => {
    const event = mockEvent
    const expectedAction = {
      type: 'SAVE_EVENT',
      event
    }

    const result = actions.saveEvent(event)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of UNSAVE_EVENT', () => {
    const id = mockEvent.id
    const expectedAction = {
      type: 'UNSAVE_EVENT',
      id
    }

    const result = actions.unsaveEvent(id)

    expect(result).toEqual(expectedAction)
  })
})