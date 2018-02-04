import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import ImageMessage from './ImageMessage'

const strings = new LocalizedStrings({
  en: {
    missedIt: 'Aaaaaaaand it\'s gone...',
  },
  de: {
    missedIt: 'Das war wohl nix...',
  }
})

const MissedIt = ({onCreateCountdown}) => {
  return (
    <ImageMessage
      style={styles.container}
      image={'negative'}
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
