import moment from 'moment';
export const apiKey = 'apikey=SiuZ3Xow2xH4UGlE2cXg6q79feDBHGBW'
export let tomorrowsDate = moment().add(1,'days').format('YYYY-MM-DD')
export let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

export const getUpcomingEvents = () => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => events._embedded.events)
}

export const getCurrentEvents = () => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&startEndDateTime=${todaysDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
    .then(events => events._embedded.events)
}

export const searchEvents = (keyword) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${apiKey}&keyword=${keyword}&onsaleOnAfterStartDate=${tomorrowsDate}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}