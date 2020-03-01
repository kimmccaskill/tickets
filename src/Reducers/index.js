import { combineReducers } from 'redux';
import { upcomingEventsReducer } from './upcomingEventsReducer';
import { currentEventsReducer } from './currentEventsReducer';
import { searchedEventsReducer } from './searchedEventsReducer';
import { savedEventsReducer } from './savedEventsReducer';

const rootReducer = combineReducers({
  upcomingEvents: upcomingEventsReducer,
  currentEvents: currentEventsReducer,
  searchedEvents: searchedEventsReducer,
  savedEvents: savedEventsReducer,
});

export default rootReducer;