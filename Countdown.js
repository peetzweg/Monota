import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class Countdown extends Component {

  componentDidMount () {
    console.log(this.props)
    this.recalculateCountdown()
    setInterval(() => {
      this.recalculateCountdown()
    }, 1000)
  }

  recalculateCountdown = () => {
    const nextYear = this.props.countdowns[0].getFullYear()
    let overallMillis = this.props.countdowns[0] - new Date()
    const daysToNewYear = Math.floor(overallMillis / DAY_IN_MILLIS)
    overallMillis = overallMillis % (daysToNewYear * DAY_IN_MILLIS)
    const hoursToNewYear = Math.floor(overallMillis / HOUR_IN_MILLIS)
    overallMillis = overallMillis % (hoursToNewYear * HOUR_IN_MILLIS)
    const minutesToNewYear = Math.floor(overallMillis / MINUTE_IN_MILLIS)
    overallMillis = overallMillis % (minutesToNewYear * MINUTE_IN_MILLIS)
    const secondsToNewYear = Math.floor(overallMillis / SECOND_IN_MILLIS)
    this.setState({
      nextYear,
      totalMillisLeft: this.props.countdowns[0] - new Date(),
      seconds: secondsToNewYear,
      minutes: minutesToNewYear,
      hours: hoursToNewYear,
      days: daysToNewYear,
    })
  }

  renderCountdown () {
    const {seconds, minutes, hours, days, nextYear} = this.state

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
        <Text allowFontScaling={false} style={styles.label}>
          Noch
        </Text>
        {
          ['days', 'hours', 'minutes', 'seconds'].map(key => {
            return (
              <View style={styles.row} key={key}>
                <Text allowFontScaling={false} style={styles.value}>
                  {remaining[key].value}
                </Text>
                <Text allowFontScaling={false} style={styles.label}>
                  {` ${remaining[key].name}`}
                </Text>
              </View>
            )
          })
        }
        <Text allowFontScaling={false} style={styles.label}>
          {`bis ${nextYear}!`}
        </Text>
      </View>
    )
  }

  renderHappyNewYear () {
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
      return (this.renderHappyNewYear())
    }
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
  value: {
    fontWeight: '900',
    fontSize: 64,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  label: {
    fontWeight: '900',
    fontSize: 48,
    // fontFamily: 'Avenir',
    color: '#fff',
  },
  emoji: {
    fontSize: 64,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  }

})

const mapStateToProps = (state) => ({countdowns: state.countdowns})
export default connect(mapStateToProps)(Countdown)
