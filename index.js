import { AppRegistry } from 'react-native'
import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import { countdowns } from './reducers/CountdownReducer'
import { context } from './reducers/ContextReducer'
import App from './App'

const ReduxApp = () => (
  <Provider store={createStore(combineReducers({
    countdowns,
    context
  }))}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('countdown', () => ReduxApp)
