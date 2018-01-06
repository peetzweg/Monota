import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CountingNumber from './CountingNumber'
import DeadlineTitle from './DeadlineTitle'
import { connect } from 'react-redux'
import { removeCountdown } from './actions'

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
    const {countdown} = this.props
    const {date} = countdown

    let overallMillis = date - new Date()
    const days = Math.floor(overallMillis / DAY_IN_MILLIS)
    if (days !== 0) {
      overallMillis = overallMillis % (days * DAY_IN_MILLIS)
    }
    const hours = Math.floor(overallMillis / HOUR_IN_MILLIS)
    if (hours !== 0) {
      overallMillis = overallMillis % (hours * HOUR_IN_MILLIS)
    }

    const minutes = Math.floor(overallMillis / MINUTE_IN_MILLIS)
    if (minutes !== 0) {
      overallMillis = overallMillis % (minutes * MINUTE_IN_MILLIS)
    }
    const seconds = Math.floor(overallMillis / SECOND_IN_MILLIS)

    this.setState({
      totalMillisLeft: date - new Date(),
      seconds,
      minutes,
      hours,
      days,
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
              if (remaining[key].value <= 0 && key !== 'seconds') return null
              return (
                <CountingNumber
                  value={remaining[key].value}
                  label={remaining[key].name}
                />
              )
            })
          }
        </View>
        <Button
          onPress={this.props.onDone}
          title="Erledigt"
          color="#424242"
        />
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

export default connect(null, {onDone: removeCountdown})(Countdown)
