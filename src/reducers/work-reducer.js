import { createReducer } from '../utils/reducers';
import { actionTypes } from '../actions/app-action-types';
import { compose } from 'redux';

const initialState = {
  clients: [],
  projects: []
};

function getKeyForLabel(label) {
  return label.toLowerCase().replace(/\s/g, '-');
}

function addKeys(state, payload) {
  const clients = payload.clients.map(client => {
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

  return {
    ...state,
    clients
  };
}

function addProjects(state) {
  const projects = state.clients
    .reduce((acc, client) => acc.concat(client.items), []);

  return {
    ...state,
    projects
  };
}

export default createReducer(initialState, {
  [actionTypes.GET_APP_DATA]: compose(
    addProjects,
    addKeys
  )
});
