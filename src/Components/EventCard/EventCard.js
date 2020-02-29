import React from 'react'
import './EventCard.css'
import moment from 'moment';
let todaysDate = (moment().format('YYYY-MM-DDTHH:mm:ss') + "Z")

const EventCard = ({ name,images,sales,dates }) => {
  let eventDate = moment(dates.start.localDate).format('MM-DD-YY')
  let saleDate = moment(sales.public.startDateTime).format('MM-DD-YY')
  const checkDate = () => {
    return sales.public.startDateTime > todaysDate ? <p>On Sale on {saleDate}</p> : null
  }
  return (
    <div className='event-card'>
      <h3 className='event-title'>{name}</h3>
      <p>Event Date: {eventDate}</p>
      {checkDate()}
      {/* <img src={`${images[0].url}`}></img> */}
    </div>
  )
}

export default EventCard