import { combineReducers } from 'redux';
import { upcomingEventsReducer } from './upcomingEventsReducer';
import { currentEventsReducer } from './currentEventsReducer';

const rootReducer = combineReducers({
  upcomingEvents: upcomingEventsReducer,
  currentEvents: currentEventsReducer,
});

export default rootReducer;