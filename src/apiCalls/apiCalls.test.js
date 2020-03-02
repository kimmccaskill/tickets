import { apiKey, tomorrowsDate, todaysDate, getUpcomingEvents, getCurrentEvents, searchEvents } from './apiCalls'
import { mockEvent, mockEvents } from '../mockData'

describe('apiCalls', () => {
  describe('getUpcomingEvents', () => {
    beforeEach( () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEvents),
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      getUpcomingEvents()
      expect(window.fetch).toHaveBeenCalledWith(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    })

    it('should return an array of events', () => {
      expect(getUpcomingEvents()).resolves.toEqual(mockEvents)
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(getUpcomingEvents()).rejects.toEqual(Error('Something is not right, try again later'))
    })
  })
  describe('getCurrentEvents', () => {
    beforeEach( () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEvents),
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      getCurrentEvents()
      expect(window.fetch).toHaveBeenCalledWith(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&startEndDateTime=${todaysDate}`)
    })

    it('should return an array of events', () => {
      expect(getCurrentEvents()).resolves.toEqual(mockEvents)
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(getCurrentEvents()).rejects.toEqual(Error('Something is not right, try again later'))
    })
  })

  describe('searchEvents', () => {
    let keyword
    beforeEach( () => {
      keyword='hamilton'
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEvents),
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      searchEvents(keyword)
      expect(window.fetch).toHaveBeenCalledWith(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&keyword=${keyword}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    })

    it('should return an array of events', () => {
      expect(searchEvents()).resolves.toEqual(mockEvents)
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(searchEvents()).rejects.toEqual(Error('Something is not right, try again later'))
    })
  })
})