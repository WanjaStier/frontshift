import { createAction } from '../utils/actions';
import { actionTypes } from './app-action-types';


export function getAppData() {
  return async dispatch => {
    const data = await fetch('/data.json');
    const json = await data.json();
    dispatch(createAction(actionTypes.GET_APP_DATA, json))
  }
}
