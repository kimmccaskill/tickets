import React,{ Component } from 'react'
import './SearchPage.css'
import EventsContainer from '../../Components/EventsContainer/EventsContainer'
import { connect } from 'react-redux'
import { setSearched } from '../../Actions'
import { searchEvents} from '../../apiCalls'


export class SearchPage extends Component { 
  constructor() {
    super();
    this.state = {
      keyword: '',
      showError: false,
      formFilled: false,
    }
  }

  getSearchedEvents(keyword) {
    const {setSearched} = this.props
    searchEvents(keyword)
    .then(events => events._embedded ? events._embedded.events :[])
    .then(searchedEvents => setSearched(searchedEvents))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.keyword) {
      this.setState({formFilled: true})
      this.getSearchedEvents(this.state.keyword);
    } else {
      this.setState({showError: true})
    }
  }

  render() {
    const {searchedEvents} = this.props
    return (
      <section>
        <h1 className='search-pg-title'>Find Your Event</h1>
        <form className='search-form'>
          <label>
            Search
            <input 
              required
              type="text" 
              className='keyword-input'
              name='keyword'
              value={this.state.keyword}
              placeholder='Search by keyword...'
              onChange={this.handleChange}
              autoComplete="off"
              />
          </label>
          <button type="submit" className="search-btn" onClick={this.submitForm}>FIND EVENTS</button>
          <h4 className={this.state.showError ? 'input-error':'hidden'}>Please enter a keyword</h4>
        </form>
          <EventsContainer events={searchedEvents}/>
          <h4 className={searchedEvents.length < 1 && this.state.formFilled ? 'no-results' : 'hidden'}>Sorry, but we didn't find any events.  Enter another keyword and try again!</h4>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  searchedEvents: state.searchedEvents
})

export const mapDispatchToProps = dispatch => ({
  setSearched: searchedEvents => dispatch(setSearched(searchedEvents)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);