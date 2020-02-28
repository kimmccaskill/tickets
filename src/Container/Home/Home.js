import React from 'react'
import './Home.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer.js'
import { getUpcomingEvents} from '../../apiCalls'
import { setUpcoming } from '../../Actions'
import { connect } from 'react-redux';

export const Home = ({ upcomingEvents, setUpcoming }) => {
  getUpcomingEvents()
      .then(upcomingEvents => setUpcoming(upcomingEvents))

  return (
    <section className='homepage'>
      <div className='homepage-top'>
        <p className='homepage-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img className='homepage-img' alt='Image of concert' src='https://i1.wp.com/weallwantsomeone.org/wp-content/uploads/2019/09/09-28-19_Vulfpeck-MSG76.jpg?fit=600%2C450&ssl=1'></img>
      </div>
      <h1>What We're Lookin Forward To</h1>
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