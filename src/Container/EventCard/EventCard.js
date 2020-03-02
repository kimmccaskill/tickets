import React from 'react'
import './EventCard.css'
import { connect } from 'react-redux'
import { saveEvent } from '../../Actions'
import moment from 'moment';
let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

const EventCard = ({ name, sales, dates, images, saveEvent, savedEvents }) => {
  let eventDate = moment(dates.start.localDate).format('MMMM DD YYYY')
  let saleDate = moment(sales.public.startDateTime).format('MMMM DD YYYY')

  const checkDate = () => {
    return sales.public.startDateTime > todaysDate ? <p>On Sale on {saleDate}</p> : null
  }
  const checkSaved = () => {
    return savedEvents.find(event => event.name === name && event.dates === dates) ? 
    <button>Unsave</button> : <button onClick={submitSave}>Save</button>
  }

  const submitSave = () => {
    if(savedEvents.find(event => event.name === name && event.dates === dates)) {
      alert(`This event has already been saved.`)
    } else {
      saveEvent({
        name,
        eventDate,
        saleDate,
        dates,
        sales,
        images
      })
      //below is temporary
      alert(`${name} has been saved!`)
    }
  }
  return (
    <div className='event-card'>
      <div className='event-info'>
        <h3 className='event-title'>{name}</h3>
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
  saveEvent: (event) => {dispatch(saveEvent(event))}
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)