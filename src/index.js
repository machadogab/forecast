import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducers from "./Reducers";

import ReduxPromise from "redux-promise";



import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store = {createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('container')
  )
registerServiceWorker()
