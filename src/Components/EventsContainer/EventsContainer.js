import React from 'react'
import './EventsContainer.css'
import EventCard from '../EventCard/EventCard'

const EventsContainer = ({ events }) => {
  let listOfCards = events.sort((a, b) => Date.parse(a.sales.public.startDateTime) - Date.parse(b.sales.public.startDateTime)).map(event => <EventCard {...event}/>)
  return (
    <section>
      {listOfCards}
    </section>
  )
}

export default EventsContainer;