import React from 'react'
import { PropTypes } from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { connect } from 'react-redux'
import { dismissWelcomeMessage } from '../actions'

const strings = new LocalizedStrings({
  en: {
    welcome: 'Hi 👋\nThis Monata, another kind of task manager. It just let\'s do one task at a time - Mono Tasking!\nOnly if you mark a Task as completed it will show you whats up next.\nThe tasks are scheduled after the earliest deadline first system.',
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
      <View style={styles.textContainer}>
        <Text
          allowFontScaling={false}
          style={styles.text}
        >
          {strings.welcome}
        </Text>
      </View>
      <Button
        onPress={onPress}
        title={strings.continue}
        color="#FC5C63"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    fontSize: 34,
    fontFamily: 'Avenir',
    textAlign: 'left',
    color: '#424242',
  },
})

export default connect(null, {onDismissWelcomeMessage: dismissWelcomeMessage})(Welcome)
