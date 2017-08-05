import { combineReducers } from 'redux';
import Weather from './weather';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
