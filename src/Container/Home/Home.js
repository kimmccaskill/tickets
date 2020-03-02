import React from 'react'
import './Home.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer.js'
import { getUpcomingEvents} from '../../apiCalls/apiCalls'
import { setUpcoming } from '../../Actions'
import { connect } from 'react-redux';

export const Home = ({ upcomingEvents, setUpcoming }) => {
  getUpcomingEvents()
    .then(upcomingEvents => setUpcoming(upcomingEvents))

  return (
    <section className='homepage'>
      <div className='homepage-top'>
        <div>
          <p className='homepage-description'>Trying to find out about tickets to your favorite band before anyone else?</p> 
          <p className='homepage-description'><em>TicketCloud</em> is here for you.</p>
        </div>
        <img className='homepage-img' alt='Image of concert' src='https://i1.wp.com/weallwantsomeone.org/wp-content/uploads/2019/09/09-28-19_Vulfpeck-MSG76.jpg?fit=600%2C450&ssl=1'></img>
      </div>
      <h2 className='homepage-title'>What's Coming Up?</h2>
      <EventsContainer events={upcomingEvents}/>
    </section>
  )
}

export const mapStateToProps = state => ({
  upcomingEvents: state.upcomingEvents
})

export const mapDispatchToProps = dispatch => ({
  setUpcoming: upcomingEvents => dispatch(setUpcoming(upcomingEvents)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);