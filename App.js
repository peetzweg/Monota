import React, { Component } from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'

import Countdown from './components/Countdown'
import Create from './components/Create'
import AllDone from './components/AllDone'
import { changeSlide } from './actions'

class App extends Component<{}> {
  onIndexChanged = index => {
    const {changeSlide} = this.props
    if (index === 1) {
      changeSlide('CREATE')
    } else {
      changeSlide('TASK')
    }
  }

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
      <View>
        <Create shouldFocus={this.props.focus} onCreate={() => this.swiper.scrollBy(-1)} />
      </View>
    )
  }

  render () {
    const {countdowns} = this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        <Swiper
          loop={false}
          showsPagination={false}
          ref={swiper => this.swiper = swiper}
          onIndexChanged={this.onIndexChanged}
        >
          {this.renderCountdowns(countdowns)}
          {this.renderCreate()}
        </Swiper>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({countdowns: state.countdowns})
export default connect(mapStateToProps, {changeSlide: changeSlide})(App)