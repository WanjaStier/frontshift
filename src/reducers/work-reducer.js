import { createReducer } from '../utils/reducers';
import { actionTypes } from '../actions/app-action-types';

const initialState = [];

function getKeyForLabel(label) {
  return label.toLowerCase().replace(/\s/g, '-');
}

export default createReducer(initialState, {
  [actionTypes.GET_APP_DATA]: (state, payload) => {
    return payload.clients.map(client => {
      return {
        ...client,
        key: getKeyForLabel(client.title),
        items: client.items.map(project => {
          return {
            ...project,
            key: getKeyForLabel(project.title)
          }
        })
      }
    });
  }
});
