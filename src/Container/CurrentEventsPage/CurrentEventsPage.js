import React from 'react'
import EventsContainer from '../../Components/EventsContainer/EventsContainer'
import { connect } from 'react-redux'
import { setCurrent } from '../../Actions'
import { getCurrentEvents} from '../../apiCalls'


export const CurrentEventsPage = ({currentEvents, setCurrent}) => {
  const getEvents = () => {
    getCurrentEvents()
    .then(currentEvents => setCurrent(currentEvents))
  }

  getEvents()

  return (
    <section>
      <h1>current events page</h1>
      <EventsContainer events={currentEvents}/>
    </section>
  )
}

export const mapStateToProps = state => ({
  currentEvents: state.currentEvents
})

export const mapDispatchToProps = dispatch => ({
  setCurrent: currentEvents => dispatch(setCurrent(currentEvents)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentEventsPage);
