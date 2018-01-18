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
import Welcome from './components/Welcome'

class App extends Component<{}> {
  onIndexChanged = index => {
    const {changeSlide} = this.props
    if (index === 1) {
      changeSlide('CREATE')
    } else {
      changeSlide('TASK')
    }
  }

  scrollRight = () => {
    this.swiper.scrollBy(1)
  }

  renderCountdowns (countdowns) {
    if (countdowns.length === 0) {
      return (
        <AllDone onCreateCountdown={this.scrollRight} />
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
    const {user, countdowns} = this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        {user.newUser
          ? <Welcome />
          : <Swiper
            loop={false}
            showsPagination={false}
            ref={swiper => this.swiper = swiper}
            onIndexChanged={this.onIndexChanged}
          >
            {
              [
                this.renderCountdowns(countdowns),
                this.renderCreate()
              ].filter(slide => !!slide)
            }
          </Swiper>
        }
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({user, countdowns}) => ({user, countdowns})
export default connect(mapStateToProps, {changeSlide: changeSlide})(App)