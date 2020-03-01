import React from 'react'
import './SavedPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer.js'
import { connect } from 'react-redux';

export const Home = ({ savedEvents }) => {
  return (
    <section className='saved-page'>
      <h2 className='saved-page-title'>Your Saved Events</h2>
      <EventsContainer events={savedEvents}/>
    </section>
  )
}

export const mapStateToProps = state => ({
  savedEvents: state.savedEvents
})

export default connect(mapStateToProps)(Home);