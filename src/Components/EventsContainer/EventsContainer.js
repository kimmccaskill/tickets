import React from 'react'
import './EventsContainer.css'
import EventCard from '../../Container/EventCard/EventCard'
import { ClipLoader } from "react-spinners";
import PropTypes from 'prop-types'

export const EventsContainer = ({ events, loader }) => {
  let listOfCards = events.length ? 
  events.sort((a, b) => Date.parse(a.sales.public.startDateTime) - Date.parse(b.sales.public.startDateTime)).map(event => <EventCard key={event.id} {...event}/>) 
  : loader ? <ClipLoader /> : null;
  return (
    <section className='events-container'>
      <h2 className='homepage-title'>Events</h2>
      {listOfCards}
    </section>
  )
}

export default EventsContainer;

EventsContainer.propTypes = {
  events: PropTypes.array,
  loader: PropTypes.any,
}