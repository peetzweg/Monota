import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Countdown extends Component {

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
    if (!this.state) {
      return null
    }
    const {seconds, minutes, hours, days} = this.state

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
        <Text style={styles.text}>
          Noch
        </Text>
        {
          ['days', 'hours', 'minutes', 'seconds'].map(key => {
            return (
              <View style={styles.row} key={key}>
                <Text style={styles.text}>
                  {remaining[key].value}
                </Text>
                <Text style={styles.text}>
                  {` ${remaining[key].name}`}
                </Text>
              </View>
            )
          })
        }
        <Text style={styles.text}>
          bis Silvester!
        </Text>
      </View>
    )
  }
}

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24
const HOUR_IN_MILLIS = 1000 * 60 * 60
const MINUTE_IN_MILLIS = 1000 * 60
const SECOND_IN_MILLIS = 1000

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: '900',
    fontSize: 38,
    fontFamily: 'Avenir',
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
  }

})

Countdown.defaultProps = {
  date: new Date()
}
