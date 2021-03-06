import { createReducer } from '../utils/reducers';
import { actionTypes } from '../actions/action-types';

const initialState = null;

export default createReducer(initialState, {
  [actionTypes.GET_APP_DATA]: (state, payload) => {
    return payload;
  }
})
