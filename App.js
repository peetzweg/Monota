import React, { Component } from 'react'
import {
  View,
  Animated,
  Easing, StyleSheet,
  Button,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import scrollBy from 'react-native-swiper'

import Countdown from './Countdown'
import Create from './Create'
import { addCountdown, switchContext } from './actions'

class App extends Component<{}> {
  renderCountdowns (countdowns) {
    if (countdowns.length === 0) {
      return (
        <View
          style={styles.container}
        >
          <Text>Du hast noch keine Deadline, swipe nach rechts um einen neue Deadline zu erstellen.</Text>
        </View>)
    }

    return (
      <View
        style={styles.container}
      >
        <Countdown countdown={countdowns[0]} />
      </View>)
  }

  renderCreate () {
    return (
      <View style={styles.container}>
        <Create onCreate={() => this.swiper.scrollBy(-1)} />
      </View>
    )
  }

  render () {
    const {countdowns, context} = this.props
    return (
      <View style={{flex: 1}}>
        <Swiper
          showsPagination={false}
          loop={true}
          ref={(swiper) => {this.swiper = swiper}}
        >
          {this.renderCountdowns(countdowns)}
          {this.renderCreate()}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: '#3ab5b0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
})

const mapStateToProps = (state) => ({countdowns: state.countdowns, context: state.context})
const mapDispatchToProps = {
  onCountdownCreate: addCountdown,
  onContextSwitch: switchContext,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)