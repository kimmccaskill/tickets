import React from 'react'
import './EventCard.css'
import { connect } from 'react-redux'
import { saveEvent } from '../../Actions'
import moment from 'moment';
let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

const EventCard = ({ name,sales,dates, saveEvent }) => {
  let eventDate = moment(dates.start.localDate).format('MMMM DD YYYY')
  let saleDate = moment(sales.public.startDateTime).format('MMMM DD YYYY')
  const checkDate = () => {
    return sales.public.startDateTime > todaysDate ? <p>On Sale on {saleDate}</p> : null
  }

  const submitSave = () => {
    saveEvent({
      name,
      eventDate,
      saleDate,
  })
    //below is temporary
    alert(`${name} has been saved!`)
  }
  return (
    <div className='event-card'>
      <h3 className='event-title'>{name}</h3>
      <p>Event Date: {eventDate}</p>
      {checkDate()}
      <button onClick={submitSave}>Save</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  saveEvent: (event) => {dispatch(saveEvent(event))}
})

export default connect(null, mapDispatchToProps)(EventCard)