/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Countdown from './Countdown'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {


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
          <Countdown date={newYear} />
        </LinearGradient>
      </View>
    );
  }
}

const GRADIENTS = [['#56317a','#3d99be','#3ab5b0'],['#2b5876','#4e4376'],['#FF3CAC', '#562B7C', '#2B86C5'], ['#243949', '#517fa4'], ['#FF057C', '#8D0B93', '#321575'], ['#fc6076', '#ff9a44'], ['#616161', '#9bc5c3'], ['#007adf', '#00ecbc'], ['#B6CEE8', '#F578DC']]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
});
