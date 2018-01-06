import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'

import Countdown from './components/Countdown'
import Create from './components/Create'

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

    return (<Countdown countdown={countdowns[0]} />)
  }

  renderCreate () {
    return (
      <View style={styles.container}>
        <Create onCreate={() => this.swiper.scrollBy(-1)} />
      </View>
    )
  }

  render () {
    const {countdowns} = this.props
    return (
      <View style={{flex: 1}}>
        <Swiper
          showsPagination={false}
          ref={swiper => this.swiper = swiper}
        >
          {this.renderCountdowns(countdowns)}
          {this.renderCreate()}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => ({countdowns: state.countdowns, context: state.context})
export default connect(mapStateToProps, null)(App)