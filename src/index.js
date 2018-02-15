import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import thunk from 'redux-thunk';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import './styles/index.css';

function doCreateStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );

  return createStore(
    rootReducer,
    enhancer
  );
}

async function render(Component)  {
  const store = doCreateStore();
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Route component={Component} />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}

registerServiceWorker();
