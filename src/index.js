import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './store';

import './index.css';

//This is the store we create with redux's method
const StoreInstance = Store();

//Provider is given the store as a prop
//Provider tell the changes to App everytime it is changed
ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
