import { AppRegistry } from 'react-native'
import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { countdowns } from './reducers/CountdownReducer'
import { context } from './reducers/ContextReducer'
import App from './App'

// Disable annoying debug warnings
console.disableYellowBox = true

const store = createStore(
  combineReducers({
    countdowns,
    context
  }),
  applyMiddleware(logger)
)

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('countdown', () => ReduxApp)
