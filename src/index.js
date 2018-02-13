import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { getAppData } from './actions/app-actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk));


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);
store.dispatch(getAppData());

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}

registerServiceWorker();
