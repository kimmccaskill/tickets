import React from 'react'
import './EventCard.css'
import moment from 'moment';
let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

const EventCard = ({ name,images,sales,dates }) => {
  const checkDate = () => {
    return sales.public.startDateTime > todaysDate ? <p>On Sale on {sales.public.startDateTime}</p> : null
  }
  return (
    <div className='event-card'>
      {checkDate()}
      <p>Event Date: {dates.start.localDate}</p>
      <p>{name}</p>
      {/* <img src={`${images[0].url}`}></img> */}
    </div>
  )
}

export default EventCard