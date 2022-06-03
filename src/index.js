import React from 'react';
import { createRoot } from 'react-dom/client';
import {configureStore, applyMiddleware} from 'redux'
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

// import { Provider } from 'react-redux'

const store = configureStore(rootReducer, applyMiddleware(thunk));

// returns an object with a render function
const root = createRoot(document.querySelector('#root'));
root.render(<App />)



