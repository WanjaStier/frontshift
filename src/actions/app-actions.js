import { createAction } from 'redux-actions';
import { actionTypes } from './app-action-types';


export function getAppData() {
  return dispatch => {
    dispatch(createAction(actionTypes.GET_APP_DATA, {
      foo: 'bar'
    }));
  };
}
