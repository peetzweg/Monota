import { AppRegistry, Text, View } from 'react-native'
import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/es/integration/react'

import { countdowns } from './reducers/CountdownReducer'
import { slide } from './reducers/SlideReducer'
import { user } from './reducers/UserReducer'
import App from './App'

// Disable annoying debug warnings
console.disableYellowBox = true

const config = {
  key: 'root',
  storage,
}
const reducer = persistCombineReducers(config, {
  countdowns,
  slide,
  user,
})

function configureStore () {
  const store = createStore(reducer, applyMiddleware(logger))
  const persistor = persistStore(store)

  return {persistor, store}
}

const ReduxApp = () => {
  const {persistor, store} = configureStore()
  return (

    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading...</Text>
          </View>}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>

  )
}

AppRegistry.registerComponent('Monota', () => ReduxApp)

