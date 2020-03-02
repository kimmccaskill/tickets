import React from 'react'
import './CurrentEventsPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer'
import { connect } from 'react-redux'
import { setCurrent } from '../../Actions'
import { getCurrentEvents} from '../../apiCalls/apiCalls'


export const CurrentEventsPage = ({currentEvents, setCurrent}) => {
  
  const getEvents = () => {
    getCurrentEvents()
    .then(currentEvents => setCurrent(currentEvents))
  }
  getEvents()
  const shuffled = currentEvents.sort(() => 0.5 - Math.random());
  let randomEvents = shuffled.slice(0, 5);

  const randomImgs = randomEvents.map((event, i) => <img alt={event.name} className='img-in-header' src={event.images[Math.round(Math.random() * 5)].url} />)

  return (
    <section>
      <div className='img-header'>
        {randomImgs}  
      </div>
      <h1 className='current-pg-title'>On Sale Now!</h1>
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
