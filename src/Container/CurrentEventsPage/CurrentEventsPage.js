import React, { Component } from 'react'
import './CurrentEventsPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer'
import { connect } from 'react-redux'
import { setCurrent } from '../../Actions'
import { getCurrentEvents} from '../../apiCalls/apiCalls'
import PropTypes from 'prop-types'

export class CurrentEventsPage extends Component {
  componentDidUpdate() {
    const { setCurrent } = this.props

    getCurrentEvents()
      .then(currentEvents => setCurrent(currentEvents))
  }

  render() {
    const { currentEvents } = this.props
    const shuffled = currentEvents.sort(() => 0.5 - Math.random()).slice(0, 5);
    const randomImgs = shuffled.map(event => <img alt={event.name} className='img-in-header' src={event.images[2].url} />)
    return (
      <section>
        <div className='img-header'>
          {randomImgs}  
        </div>
        <h1 className='current-pg-title'>On Sale Now!</h1>
        <EventsContainer events={currentEvents}/>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  currentEvents: state.currentEvents
})

export const mapDispatchToProps = dispatch => ({
  setCurrent: currentEvents => dispatch(setCurrent(currentEvents)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentEventsPage);

CurrentEventsPage.propTypes = {
  setCurrent: PropTypes.func,
  currentEvents: PropTypes.array,
}
