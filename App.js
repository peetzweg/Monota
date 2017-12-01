import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View,
  Linking
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Countdown from './Countdown'
import NightSky from './NightSky'

export default class App extends Component<{}> {

  onLearnMore = () => {
    Linking.openURL('https://www.pyroweb.de/').catch(err => console.error('An error occurred', err))
  }

  render () {
    const newYear = new Date()
    newYear.setUTCFullYear(newYear.getUTCFullYear() + 1)
    newYear.setUTCMonth(0)
    newYear.setUTCDate(1)
    newYear.setUTCHours(0)
    newYear.setUTCMinutes(0)
    newYear.setUTCSeconds(0)
    newYear.setUTCMilliseconds(0)

    return (
      <View style={styles.container}>
        <LinearGradient colors={GRADIENTS[0]} style={styles.linearGradient}>
          <NightSky />
          <View />
          <Countdown date={newYear} />
          <Button
            onPress={this.onLearnMore}
            color={'#ffffff'}
            title="Jetzt Feuerwerk kaufen"
            accessibilityLabel="Jetzt Feuerwerk kaufen"
          />
        </LinearGradient>
      </View>
    )
  }
}

const GRADIENTS = [['#56317a', '#3d99be', '#3ab5b0'], ['#2b5876', '#4e4376'], ['#FF3CAC', '#562B7C', '#2B86C5'], ['#243949', '#517fa4'], ['#FF057C', '#8D0B93', '#321575'], ['#fc6076', '#ff9a44'], ['#616161', '#9bc5c3'], ['#007adf', '#00ecbc'], ['#B6CEE8', '#F578DC']]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3ab5b0',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
})
