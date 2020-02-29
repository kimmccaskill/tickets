import moment from 'moment';
import { apiKey } from './env'
let tomorrowsDate = moment().add(1,'days').format('YYYY-MM-DD')
let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

export const getUpcomingEvents = () => {
  // let proxyUrl = `https://cors-anywhere.herokuapp.com/`,
  // targetUrl = `https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&onsaleOnAfterStartDate=${tomorrowsDate}`
  // return fetch(proxyUrl + targetUrl)
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => events._embedded.events)
}

export const getCurrentEvents = () => {
  // let proxyUrl = `https://cors-anywhere.herokuapp.com/`,
  // targetUrl = `https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&startDateTime=${todaysDate}`
  // return fetch(proxyUrl + targetUrl)
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&startEndDateTime=${todaysDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => events._embedded.events)
}

export const searchEvents = (keyword) => {
  // let proxyUrl = `https://cors-anywhere.herokuapp.com/`,
  // targetUrl = `https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&keyword=${keyword}&onsaleOnAfterStartDate=${tomorrowsDate}`
  // return fetch(proxyUrl + targetUrl)
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&keyword=${keyword}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}