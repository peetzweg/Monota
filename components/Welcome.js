import React from 'react'
import { PropTypes } from 'prop-types'
import { PixelRatio, StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { connect } from 'react-redux'
import { dismissWelcomeMessage } from '../actions'

const strings = new LocalizedStrings({
  en: {
    welcome: 'Hi 👋\nThis Monata, another kind of task manager. It just let\'s do one task at a time - Mono Tasking!\nOnly if you mark a Task as completed it will show you whats up next.\nYou will always work on the tasks with the earliest deadline.',
    continue: 'Okay got it!',
  },
  de: {
    welcome: 'Hi 👋\nDas ist Monota, ein andere Art von Todo App. Es lässt dich immmer nur eine Aufgabe zurselben Zeit erledigen - Monotasking!\nErst wenn du diese erledigt hast erhälst du die nächste.\nDie Todos werden nach ihrer Deadline sortiert.',
    continue: 'Alles klar!',
  }
})

const Welcome = ({onOkay, onDismissWelcomeMessage}) => {

  const onPress = () => {
    onOkay()
    onDismissWelcomeMessage()
  }

  return (

    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text
            allowFontScaling={false}
            style={styles.text}
          >
            {strings.welcome}
          </Text>
        </View>
        <View
          style={styles.buttonContainer}
        >
          <Button
            onPress={onPress}
            title={strings.continue}
            color="#FC5C63"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderColor: '#FC5C63',
    paddingLeft: 16,
  },
  text: {
    fontSize: PixelRatio.get() <= 2 ? 26 : 34,
    fontFamily: 'Avenir',
    textAlign: 'left',
    color: '#424242',
  },
  buttonContainer: {
    padding: 16,
  }
})

export default connect(null, {onDismissWelcomeMessage: dismissWelcomeMessage})(Welcome)
