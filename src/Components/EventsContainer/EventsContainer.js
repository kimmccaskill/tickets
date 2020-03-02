import React from 'react'
import './EventsContainer.css'
import EventCard from '../../Container/EventCard/EventCard'
import { ClipLoader } from "react-spinners";

export const EventsContainer = ({ events, loader }) => {
  let listOfCards = events.length ? 
  events.sort((a, b) => Date.parse(a.sales.public.startDateTime) - Date.parse(b.sales.public.startDateTime)).map(event => <EventCard key={event.id} {...event}/>) 
  : loader ? <ClipLoader /> : null;
  return (
    <section className='events-container'>
      {listOfCards}
    </section>
  )
}

export default EventsContainer;