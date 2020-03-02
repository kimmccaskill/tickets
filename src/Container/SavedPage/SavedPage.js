import React from 'react'
import './SavedPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer.js'
import { connect } from 'react-redux';

export const SavedPage = ({ savedEvents }) => {
  const checkSaved = () => {
    return savedEvents.length > 0 ? <EventsContainer events={savedEvents}/> : <h2 className='error'>There are no saved events.</h2>
  }

  return (
    <section className='saved-page'>
      <h2 className='saved-page-title'>Your Saved Events</h2>
      {checkSaved()}
    </section>
  )
}

export const mapStateToProps = state => ({
  savedEvents: state.savedEvents
})

export default connect(mapStateToProps)(SavedPage);