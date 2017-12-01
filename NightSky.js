import React from 'react'
import {
  Dimensions,
  StyleSheet
} from 'react-native'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import Canvas from 'react-native-canvas'

export default class NightSky extends Component {

  state = {
    ready: true,
  }

  static defaultProps = {
    amountOfStars: 200,
    width: 900,
    height: 250,
  }

  handleCanvas = async (canvas) => {
    const {height, width} = Dimensions.get('window')
    const heightToUse = height / 2
    let {amountOfStars} = this.props
    canvas.width = width
    canvas.height = heightToUse
    const ctx = canvas.getContext('2d')
    for (amountOfStars; amountOfStars > 0; amountOfStars--) {
      const radius = Math.random() * 3
      this.drawStar(ctx, Math.random() * width, (Math.random() * heightToUse) - radius, radius)
    }
    this.setState({
      ready: true,
    })
  }

  drawStar = async (ctx, x, y, radius = 2) => {
    const starGradient = await ctx.createRadialGradient(x, y, radius, x, y, 0)
    starGradient.addColorStop(0, 'transparent')
    starGradient.addColorStop(1, 'white')
    ctx.fillStyle = starGradient
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
  }

  render () {
    return (
      <Canvas hidden={this.state.ready} style={{position: 'absolute', top: 0, opacity: this.state.ready ? 1 : 0}}
              ref={this.handleCanvas} />
    )
  }
}
