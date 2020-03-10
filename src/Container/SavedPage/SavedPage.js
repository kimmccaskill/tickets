import React from 'react'
import './SavedPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export const SavedPage = ({ savedEvents }) => {
  const checkSaved = () => {
    return savedEvents.length > 0 ? <EventsContainer events={savedEvents}/> : <h2 className='error'>There are no saved events.</h2>
  }

  return (
    <section className='saved-page'>
      <h2 className='saved-page-title'>Saved</h2>
      {checkSaved()}
    </section>
  )
}

export const mapStateToProps = state => ({
  savedEvents: state.savedEvents
})

export default connect(mapStateToProps)(SavedPage);

SavedPage.propTypes = {
  savedEvents: PropTypes.array,
}