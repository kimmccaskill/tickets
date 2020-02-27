import React from 'react'
import './EventsContainer.css'
import EventCard from '../EventCard/EventCard'
import { getTomorrowsEvents } from '../../apiCalls'
import { setEvents } from '../../Actions'
import { connect } from 'react-redux';

const EventsContainer = ({ events }) => {
let listOfCards = events.map(event => <EventCard {...event}/>)

  return (
    <section>
      {listOfCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(EventsContainer);