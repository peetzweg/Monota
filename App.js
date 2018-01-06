import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'

import Countdown from './components/Countdown'
import Create from './components/Create'
import AllDone from './components/AllDone'

class App extends Component<{}> {
  renderCountdowns (countdowns) {
    if (countdowns.length === 0) {
      return (
        <AllDone onCreateCountdown={() => this.swiper.scrollBy(1)} />
      )
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