import React, { Component } from 'react'
import {
  View,
  Animated,
  Easing,
  Image,
  Dimensions,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Countdown from './Countdown'
import Sponsor from './Sponsor'

export default class App extends Component<{}> {

  constructor () {
    super()
    this.opacityValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.fadeIn()
  }

  fadeIn () {
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start()
  }

  render () {
    const {height, width} = Dimensions.get('window')

    const styles = {
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
        opacity: this.opacityValue,
        width: '100%',
        justifyContent: 'space-between',
      },
      linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }
    }

    return (
      <View style={styles.backgroundView}>

        <Animated.View style={styles.container}>
          <LinearGradient colors={GRADIENTS[0]} style={styles.linearGradient}>
            <View  />
            <Countdown />
            <Sponsor image={require('./img/sponsor.png')} url={'https://www.pyroweb.de/'} />
          </LinearGradient>
        </Animated.View>

      </View>
    )
  }
}
const GRADIENTS = [['#56317a', '#3d99be', '#3ab5b0'], ['#CBBACC', '#2580B3'], ['#2b5876', '#4e4376'], ['#FF3CAC', '#562B7C', '#2B86C5'], ['#243949', '#517fa4'], ['#FF057C', '#8D0B93', '#321575'], ['#fc6076', '#ff9a44'], ['#616161', '#9bc5c3'], ['#007adf', '#00ecbc'], ['#B6CEE8', '#F578DC']]
