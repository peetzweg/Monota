import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import EmojiMessage from './EmojiMessage'

const strings = new LocalizedStrings({
  en: {
    missedIt: 'Aaaaaaaand it\'s gone...',
  },
  de: {
    missedIt: 'Das war wohl nix...',
  }
})

const emojis = ['🙈', '😅', '🙄', '😪', '😭', '😢', '😱', '🤯']

const MissedIt = ({onCreateCountdown}) => {

  return (
    <EmojiMessage
      style={styles.container}
      emojis={emojis}
      text={strings.missedIt}
      buttonLabel={strings.createNewTask}
      buttonFunc={onCreateCountdown}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default MissedIt
