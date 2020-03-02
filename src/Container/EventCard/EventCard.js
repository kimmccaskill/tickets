import React from 'react'
import './EventCard.css'
import { connect } from 'react-redux'
import { saveEvent, unsaveEvent } from '../../Actions'
import moment from 'moment';
import PropTypes from 'prop-types'
import { useToasts } from 'react-toast-notifications'

let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

export const EventCard = ({ id, name, sales, dates, images, _embedded, saveEvent, unsaveEvent, savedEvents }) => {
  let eventDate = moment(dates.start.localDate).format('MMMM DD YYYY')
  let saleDate = moment(sales.public.startDateTime).format('MMMM DD YYYY')
  const { addToast } = useToasts()

  const checkDate = () => {
    return sales.public.startDateTime > todaysDate ? <p>On Sale on {saleDate}</p> : null
  }
  const checkSaved = () => {
    return savedEvents.find(event => event.name === name && event.dates === dates) ? 
    <button onClick={removeFromSaved}>Unsave</button> : <button onClick={submitSave}>Save</button>
  }

  const checkVenue = () => {
    return _embedded.venues[0].state ? <p>{_embedded.venues[0].city.name}, {_embedded.venues[0].state.stateCode} @ {_embedded.venues[0].name}</p> : undefined
  }

  const submitSave = () => {
    if(savedEvents.find(event => event.name === name && event.dates === dates)) {
      addToast('This event has already been saved', { appearance: 'error'})
    } else {
      saveEvent({
        id,
        name,
        eventDate,
        saleDate,
        dates,
        sales,
        images,
        _embedded
      })
      addToast('Saved Successfully', { appearance: 'success'})
    }
  }

  const removeFromSaved = () => {
    addToast('Successfully Removed!', { appearance: 'info'})
    unsaveEvent(id)
  }

  return (
    <div className='event-card'>
      <div className='event-info'>
        <h3 className='event-title'>{name}</h3>
        {checkVenue()}
        <p>Event Date: {eventDate}</p>
        {checkDate()}
        {checkSaved()}
      </div>
      <img className='event-img' alt={name} src={images[2].url} />
    </div>
  )
}

export const mapStateToProps = state => ({
  savedEvents: state.savedEvents
})

export const mapDispatchToProps = (dispatch) => ({
  saveEvent: (event) => {dispatch(saveEvent(event))},
  unsaveEvent: (id) => {dispatch(unsaveEvent(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)

EventCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  sales: PropTypes.object,
  dates: PropTypes.object,
  images: PropTypes.array,
  _embedded: PropTypes.object,
  saveEvent: PropTypes.func,
  unsaveEvent: PropTypes.func,
  savedEvents: PropTypes.array
}