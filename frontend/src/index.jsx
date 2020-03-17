import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { setAuthToken } from './util/session_api_util.js';
import { logout } from './actions/session_actions.js';

import "./stylesheets/reset.css";
import "./stylesheets/universal.css";
import "./stylesheets/signup_form.css";

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenicated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store } />, root);
});
