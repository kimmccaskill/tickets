import React from 'react'
import './EventCard.css'

const EventCard = ({ name,images,sales }) => {
  return (
    <div className='event-card'>
      <p>On Sale on {sales.public.startDateTime}</p>
      <p>{name}</p>
      {/* <img src={`${images[0].url}`}></img> */}
    </div>
  )
}

export default EventCard