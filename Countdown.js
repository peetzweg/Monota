import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CountingNumber from './CountingNumber'
import DeadlineTitle from './DeadlineTitle'

class Countdown extends Component {

  static propTypes = {
    countdown: PropTypes.object.isRequired,
  }

  componentDidMount () {
    this.recalculateCountdown()
    setInterval(() => {
      this.recalculateCountdown()
    }, 1000)
  }

  recalculateCountdown = () => {
    const nextYear = this.props.countdown.date.getFullYear()
    let overallMillis = this.props.countdown.date - new Date()
    const daysToNewYear = Math.floor(overallMillis / DAY_IN_MILLIS)
    overallMillis = overallMillis % (daysToNewYear * DAY_IN_MILLIS)
    const hoursToNewYear = Math.floor(overallMillis / HOUR_IN_MILLIS)
    overallMillis = overallMillis % (hoursToNewYear * HOUR_IN_MILLIS)
    const minutesToNewYear = Math.floor(overallMillis / MINUTE_IN_MILLIS)
    overallMillis = overallMillis % (minutesToNewYear * MINUTE_IN_MILLIS)
    const secondsToNewYear = Math.floor(overallMillis / SECOND_IN_MILLIS)
    this.setState({
      nextYear,
      totalMillisLeft: this.props.countdown.date - new Date(),
      seconds: secondsToNewYear,
      minutes: minutesToNewYear,
      hours: hoursToNewYear,
      days: daysToNewYear,
    })
  }

  renderCountdown () {
    const {seconds, minutes, hours, days} = this.state
    const {countdown} = this.props

    const adaptValue = (value) => value < 10 ? `0${value}` : `${value}`
    const remaining = {
      days: {
        name: 'Tage',
        value: adaptValue(days),
      },
      hours: {
        name: 'Stunden',
        value: adaptValue(hours)
      },
      minutes: {
        name: 'Minuten',
        value: adaptValue(minutes)
      },
      seconds: {
        name: 'Sekunden',
        value: adaptValue(seconds)
      },
    }

    return (
      <View style={styles.container}>
        <DeadlineTitle value={countdown.title} />
        <View style={styles.row}>
          {
            ['days', 'hours', 'minutes', 'seconds'].map(key => {
              if (remaining[key].value <= 0) return null
              return (
                <CountingNumber
                  value={remaining[key].value}
                  label={remaining[key].name}
                />
              )
            })
          }
        </View>
      </View>
    )
  }

  timeIsUp () {
    return (
      <View style={styles.container}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.label}>Froh's Neues!</Text>
      </View>
    )
  }

  render () {
    if (!this.state) {
      return null
    }
    const {totalMillisLeft} = this.state
    if (totalMillisLeft > 0) {
      return (this.renderCountdown())
    } else {
      return (this.timeIsUp())
    }
  }
}

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24
const HOUR_IN_MILLIS = 1000 * 60 * 60
const MINUTE_IN_MILLIS = 1000 * 60
const SECOND_IN_MILLIS = 1000

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 64,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
})

export default Countdown
