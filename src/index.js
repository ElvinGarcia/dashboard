import React from 'react';
import { createRoot } from 'react-dom/client'; // replaces ReactDOM.render
import { BrowserRouter } from 'react-router-dom'; // use for routing
import { configureStore } from '@reduxjs/toolkit'; // replaces createStore.
import { Provider } from 'react-redux'; // use to pass state between components and containers
import rootReducer from "./reducers/rootReducer"; // main state reducer

import App from './App';

// The slice reducers were automatically passed to combineReducers()
// The redux-thunk middleware was automatically added
// Dev-mode middleware was added to catch accidental mutations
// The Redux DevTools Extension was automatically set up
// The middleware and DevTools enhancers were composed together and added to the store
const store = configureStore({reducer:rootReducer});

// returns an object with a render function
const root = createRoot(document.querySelector('#root'));
root.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
  )




