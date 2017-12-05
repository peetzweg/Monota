import { AppRegistry } from 'react-native'
import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import { countdownReducer } from './CountdownReducer'
import App from './App'

const ReduxApp = () => (
  <Provider store={createStore(countdownReducer)}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('countdown', () => ReduxApp)
