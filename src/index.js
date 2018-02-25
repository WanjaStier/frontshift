import React from 'react';
import ReactDOM from 'react-dom';
import {  Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import rootReducer from './reducers';
import './styles/index.css';

const history = createHistory();

function configureStore() {
  const _routerMiddleware = routerMiddleware(history);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk, _routerMiddleware),

  );

  const store =  createStore(combineReducers({
      app: rootReducer,
      router: routerReducer
    }),
    enhancer
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(combineReducers({
        app: nextRootReducer,
        router: routerReducer
      }));
    });
  }


  return store;
}

const store = configureStore();

function render(Component)  {

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={Component} />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}

unregister();
// registerServiceWorker();
