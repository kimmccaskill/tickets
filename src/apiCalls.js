import moment from 'moment';
import { apiKey } from './env'
let tomorrowsDate = moment().add(1,'days').format('YYYY-MM-DD')

export const getUpcomingEvents = async () => {
  return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => events._embedded.events)
}

export const getCurrentEvents = async () => {
  return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&startDateTime=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => console.log(events._embedded.events))
}