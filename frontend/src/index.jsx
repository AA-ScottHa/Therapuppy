import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { setAuthToken } from './util/session_api_util.js';
import { logout } from './actions/session_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenicated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      // store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');

  // ReactDOM.render(<Root store={ store } />, root);
  ReactDOM.render(<div>React is working</div>, root);
});

// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
