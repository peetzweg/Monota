import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'

const EmojiMessage = ({emojis, text, buttonLabel, buttonFunc, style}) => {

  if (!Array.isArray(emojis)) {
    emojis = [emojis]
  }

  return (
    <View style={style}>
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
        {text}
      </Text>
      {(buttonLabel && buttonFunc)
        ? <Button
          onPress={buttonFunc}
          title={buttonLabel}
          color="#FC5C63"
        />
        : null}
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   height: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
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

export default EmojiMessage
