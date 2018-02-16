import { combineReducers } from 'redux';
import data from './app-data-reducer';
import work from './work-reducer';

export default combineReducers({
  data,
  work
});
