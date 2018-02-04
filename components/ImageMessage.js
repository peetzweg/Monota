import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button, Image } from 'react-native'

const IMAGES = {
  'positive': require('../assets/icons/check.png'),
  'negative': require('../assets/icons/close.png'),
  'reload': require('../assets/icons/reload.png')
}

const ImageMessage = ({image, text, buttonLabel, buttonFunc, style}) => {
  return (
    <View style={style}>
      <Text allowFontScaling={false} style={styles.image}>
        <Image source={IMAGES[image]} />
      </Text>
      <Text allowFontScaling={false} style={styles.text}>
        {text}
      </Text>
      {(buttonLabel && buttonFunc)
         ? <Button onPress={buttonFunc} title={buttonLabel} color='#FC5C63' />
         : null}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    textAlign: 'center'
  },
  text: {
    fontSize: PixelRatio.get() <= 2 ? 26 : 34,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#424242'
  }
})

ImageMessage.propTypes = {
  image: PropTypes.oneOf(['positive', 'negative', 'reload'])
}
export default ImageMessage
