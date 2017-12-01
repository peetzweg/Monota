import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback, Linking,
} from 'react-native'

import { PropTypes } from 'prop-types'
import { Component } from 'react'
import Canvas from 'react-native-canvas'

export default class Sponsor extends Component {

  static propTypes = {
    image: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  static styles = {
    container: {
      backgroundColor: 'black',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  openSponsor = () => {
    const {url} = this.props
    Linking.openURL(url).catch(err => console.error('An error occurred', err))
  }

  render () {
    const {image} = this.props
    return (
      <TouchableWithoutFeedback onPress={this.openSponsor}>
        <View style={Sponsor.styles.container}>
          <Image source={image} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
