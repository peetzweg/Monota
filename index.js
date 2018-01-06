import { AppRegistry } from 'react-native'
import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { countdowns } from './reducers/CountdownReducer'
import { slide } from './reducers/SlideReducer'
import App from './App'

// Disable annoying debug warnings
console.disableYellowBox = true

const store = createStore(
  combineReducers({
    countdowns,
    slide
  }),
  applyMiddleware(logger)
)

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('countdown', () => ReduxApp)
