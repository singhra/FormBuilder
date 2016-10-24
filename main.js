import React from 'react';

import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {Router} from 'react-router';

import appStore from './src/js/reducers';
import App from './src/js/App';
import routes from './src/js/routes';

// The main data store for the application.
let store = createStore(appStore);

// Expose the entire state to the application.  This can
// be broken down into smaller pieces as the application
// grows.
function select(state) {
  return {
    state
  };
}
// The top-level application component.
var appComponent = connect(select)(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
  );
