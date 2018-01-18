import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { connect } from 'react-redux'
import { dismissWelcomeMessage } from '../actions'
import EmojiMessage from './EmojiMessage'

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
    <EmojiMessage
      style={styles.container}
      emojis={emojis}
      text={strings.loading}
    />
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
})

export default Loading
