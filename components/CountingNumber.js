import React from 'react'
import { PropTypes } from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

const CountingNumber = ({value, label}) => {
  return (
    <View style={styles.container}>

      <Text
        allowFontScaling={false}
        style={styles.value}
      >
        {value}
      </Text>

      <Text
        allowFontScaling={false}
        style={styles.label}
      >
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: '900',
    fontSize: 48,
    fontFamily: 'Avenir',
    color: '#424242',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#424242',
  },
})

export default CountingNumber
