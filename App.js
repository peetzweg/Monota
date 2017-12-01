import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View,
  Linking,
  Animated,
  Easing
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Countdown from './Countdown'
import NightSky from './NightSky'

export default class App extends Component<{}> {

  constructor () {
    super()
    this.opacityValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.fadeIn()
  }

  fadeIn () {
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start()
  }

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

    const styles = {
      backgroundView: {
        backgroundColor: '#3ab5b0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: this.opacityValue,
        width:'100%'
      },
      linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }
    }

    return (
      <View style={styles.backgroundView}>
        <Animated.View style={styles.container}>
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
        </Animated.View>
      </View>
    )
  }
}

const GRADIENTS = [['#56317a', '#3d99be', '#3ab5b0'], ['#2b5876', '#4e4376'], ['#FF3CAC', '#562B7C', '#2B86C5'], ['#243949', '#517fa4'], ['#FF057C', '#8D0B93', '#321575'], ['#fc6076', '#ff9a44'], ['#616161', '#9bc5c3'], ['#007adf', '#00ecbc'], ['#B6CEE8', '#F578DC']]
