import { createAction } from '../utils/actions';
import { actionTypes } from './app-action-types';


export function getAppData() {
  return async dispatch => {
    const data = await fetch('/data.json');
    dispatch(createAction(actionTypes.GET_APP_DATA, {
      data: await data.json()
    }))
  }
}
