import React from 'react'
import { PropTypes } from 'prop-types'
import { StyleSheet, Text } from 'react-native'

const DeadlineTitle = ({value}) => {
  return (
    <Text
      allowFontScaling={false}
      style={styles.value}
    >
      {value}
    </Text>
  )
}

const styles = StyleSheet.create({
  value: {
    fontSize: 34,
    fontFamily: 'Avenir',
    color: '#424242',
  },
})

export default DeadlineTitle
