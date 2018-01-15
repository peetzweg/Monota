import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { connect } from 'react-redux'
import { dismissWelcomeMessage } from '../actions'

const strings = new LocalizedStrings({
  en: {
    loading: 'loading...',
  },
  de: {
    welcome: 'lade...',
  }
})

const emojis = ['🐌', '☕️', '🦆']

const Loading = () => {

  return (
    <View style={styles.container}>
      <Text
        allowFontScaling={false}
        style={styles.emoji}
      >
        {emojis[Math.max(0, Math.round((Math.random() * emojis.length) - 1))]}
      </Text>
      <Text
        allowFontScaling={false}
        style={styles.text}
      >
        {strings.loading}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: PixelRatio.get() <= 2 ? 26 : 34,
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#424242',
  },
  emoji: {
    fontSize: PixelRatio.get() <= 2 ? 52 : 64,
    textAlign: 'center',
  },
})

export default Loading
