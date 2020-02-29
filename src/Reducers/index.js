import { combineReducers } from 'redux';
import { upcomingEventsReducer } from './upcomingEventsReducer';
import { currentEventsReducer } from './currentEventsReducer';
import { searchedEventsReducer } from './searchedEventsReducer';


const rootReducer = combineReducers({
  upcomingEvents: upcomingEventsReducer,
  currentEvents: currentEventsReducer,
  searchedEvents: searchedEventsReducer,
});

export default rootReducer;