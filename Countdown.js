import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Countdown extends Component {
  // constructor (props){
  //   super(props)
  //   this.state = {
  //     date
  //   }
  // }

  componentDidMount () {
    this.recalculateCountdown()
    setInterval(() => {
      this.recalculateCountdown()
    }, 1000)
  }

  recalculateCountdown = () => {
    let overallMillis = this.props.date - new Date()
    const daysToNewYear = Math.floor(overallMillis / DAY_IN_MILLIS)
    overallMillis = overallMillis % (daysToNewYear * DAY_IN_MILLIS)
    const hoursToNewYear = Math.floor(overallMillis / HOUR_IN_MILLIS)
    overallMillis = overallMillis % (hoursToNewYear * HOUR_IN_MILLIS)
    const minutesToNewYear = Math.floor(overallMillis / MINUTE_IN_MILLIS)
    overallMillis = overallMillis % (minutesToNewYear * MINUTE_IN_MILLIS)
    const secondsToNewYear = Math.floor(overallMillis / SECOND_IN_MILLIS)
    this.setState({
      seconds: secondsToNewYear,
      minutes: minutesToNewYear,
      hours: hoursToNewYear,
      days: daysToNewYear,
    })
  }

  render () {
    console.log("hallo")
    if (!this.state) {
      return null
    }
    const {seconds, minutes, hours, days} = this.state

    const timeValueStrings = [days, hours, minutes, seconds].map(value => {
      return value < 10 ? `0${value}` : `${value}`
    })
    return (
      <Text style={styles.countdown}>{timeValueStrings.join(':')}</Text>
    )
  }
}

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24
const HOUR_IN_MILLIS = 1000 * 60 * 60
const MINUTE_IN_MILLIS = 1000 * 60
const SECOND_IN_MILLIS = 1000

const styles = StyleSheet.create({
  countdown: {
    fontWeight: '900',
    fontSize: 38,
    fontFamily: 'Avenir',
    color: '#fff'
  },
})

Countdown.defaultProps = {
  date: new Date()
}