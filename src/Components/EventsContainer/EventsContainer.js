import React from 'react'
import './EventsContainer.css'
import EventCard from '../EventCard/EventCard'
import { ClipLoader } from "react-spinners";

const EventsContainer = ({ events }) => {
  let listOfCards = events.length ? 
  events.sort((a, b) => Date.parse(a.sales.public.startDateTime) - Date.parse(b.sales.public.startDateTime)).map(event => <EventCard {...event}/>) 
  : <ClipLoader />
  return (
    <section className='events-container'>
      {listOfCards}
    </section>
  )
}

export default EventsContainer;