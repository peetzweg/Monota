import React from 'react'
import { PropTypes } from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'

const AllDone = ({onCreateCountdown}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>
        🏝
      </Text>
      <Text
        allowFontScaling={false}
        style={styles.text}
      >
        Alles erledigt. Chill!
      </Text>
      <Button
        onPress={onCreateCountdown}
        title="Ich hab noch was zu tun..."
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
    fontSize: 64,
    textAlign: 'center',
  },
  text: {
    fontSize: 34,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#424242',
  },
})

export default AllDone
