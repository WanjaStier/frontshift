import { createReducer } from '../utils/reducers';
import { actionTypes } from '../actions/action-types';
import { compose } from 'redux';

const initialState = {
  clients: [],
  projects: []
};

function getIdForLabel(label) {
  return label.toLowerCase().replace(/\s/g, '-');
}

function addIds(state, payload) {
  const clients = payload.clients.map(client => {
    return {
      ...client,
      id: getIdForLabel(client.title),
      items: client.items.map(project => {
        return {
          ...project,
          id: getIdForLabel(project.title)
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
    .reduce((acc, client) => {
      const items = client.items.map(item => ({...item, client: client.title, clientId: client.id}));
      return acc.concat(items)
    }, []);

  return {
    ...state,
    projects
  };
}

export default createReducer(initialState, {
  [actionTypes.GET_APP_DATA]: compose(
    addProjects,
    addIds
  )
});
