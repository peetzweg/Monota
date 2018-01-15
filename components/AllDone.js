import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'

const strings = new LocalizedStrings({
  en: {
    allDone: 'You are all done, sit back and relax!',
    createNewTask: 'I still got stuff to do...',
  },
  de: {
    allDone: 'Alles erledigt. Chill!',
    createNewTask: 'Ich hab noch was zu tun...',
  }
})

const emojis = ['🏝', '😎', '🍻', '🎉', '🙌', '👏', '🤷', '💆']

const AllDone = ({onCreateCountdown}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>
        {emojis[Math.round(Math.max(0, (Math.random() * emojis.length) - 1))]}
      </Text>
      <Text
        allowFontScaling={false}
        style={styles.text}
      >
        {strings.allDone}
      </Text>
      <Button
        onPress={onCreateCountdown}
        title={strings.createNewTask}
        color="#FC5C63"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: PixelRatio.get() <= 2 ? 52 : 64,
    textAlign: 'center',
  },
  text: {
    fontSize: PixelRatio.get() <= 2 ? 26 : 34,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#424242',
  },
})

export default AllDone
