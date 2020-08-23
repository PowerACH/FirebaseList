import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// these steps help us create a store and also connect our application to the store. i.e we create a store with the createStore function from redux, and then, connect the store to our application with the Provider component which takes the store we have created as a props.

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';

const Store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={ Store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
