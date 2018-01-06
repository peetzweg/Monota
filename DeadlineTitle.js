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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: '900',
    fontSize: 64,
    fontFamily: 'Avenir',
    color: '#424242',
  },
})

export default DeadlineTitle;
