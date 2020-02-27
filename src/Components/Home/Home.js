import React from 'react'
import './Home.css'
import EventsContainer from '../EventsContainer/EventsContainer.js'
import { getTomorrowsEvents } from '../../apiCalls'
import { setEvents } from '../../Actions'
import { connect } from 'react-redux';


export const Home = (props) => {
  getTomorrowsEvents()
      .then(events => props.setEvents(events))

  return (
    <section className='homepage'>
      <div className='homepage-top'>
        <p className='homepage-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img className='homepage-img' alt='Image of concert' src='https://i1.wp.com/weallwantsomeone.org/wp-content/uploads/2019/09/09-28-19_Vulfpeck-MSG76.jpg?fit=600%2C450&ssl=1'></img>
      </div>
      <h1>What We're Lookin Forward To</h1>
      <EventsContainer />
    </section>
  )
}

export const mapStateToProps = state => ({
  events: state.events
})

export const mapDispatchToProps = dispatch => ({
  setEvents: events => dispatch(setEvents(events)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);