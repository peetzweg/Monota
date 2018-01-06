import React from 'react'
import { PropTypes } from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

const DeadlineTitle = ({value}) => {
  return (
    <View style={styles.container}>
      <Text
        allowFontScaling={false}
        style={styles.value}
      >
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderColor: '#FC5C63',
    paddingLeft: 16,

  },
  value: {
    fontSize: 34,
    fontFamily: 'Avenir',
    color: '#424242',

  },
})

export default DeadlineTitle
