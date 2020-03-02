import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';
import { Router }  from 'react-router-dom';
import history from './history';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('app'));