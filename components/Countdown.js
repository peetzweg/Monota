import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import LocalizedStrings from 'react-native-localization'
import CountingNumber from './CountingNumber'
import DeadlineTitle from './DeadlineTitle'
import { removeCountdown } from '../actions/index'
import MissedIt from './MissedIt'

class Countdown extends Component {

  static strings = new LocalizedStrings({
    en: {
      seconds: 'Seconds',
      minutes: 'Minutes',
      hours: 'Hours',
      days: 'Days',
      till: 'till',
      done: 'Done',
      cancel: 'Forget it',
      missedIt: 'Missed it',
    },
    de: {
      seconds: 'Sekunden',
      minutes: 'Minuten',
      hours: 'Stunden',
      days: 'Tage',
      till: 'bis zum',
      done: 'Erledigt',
      cancel: 'Schaff ich nicht mehr',
      missedIt: 'Das war wohl nix',
    }
  })

  static propTypes = {
    countdown: PropTypes.object.isRequired,
  }

  componentDidMount () {
    this.setState(this.recalculateState(), () => {
      if (!this.state.missed) {
        this.intervalId = setInterval(() => {
          this.setState(this.recalculateState())
        }, 1000)
      }
    })
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    if (this.state.missed === true) {
      clearInterval(this.intervalId)
    }
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  recalculateState = () => {
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

    return ({
      missed: (date - new Date()) < 0,
      seconds,
      minutes,
      hours,
      days,
    })
  }

  _renderCountdownStillOn () {
    const {seconds, minutes, hours, days} = this.state
    const {countdown} = this.props

    const adaptValue = (value) => value < 10 ? `0${value}` : `${value}`
    const remaining = {
      days: {
        name: Countdown.strings.days,
        value: adaptValue(days),
      },
      hours: {
        name: Countdown.strings.hours,
        value: adaptValue(hours)
      },
      minutes: {
        name: Countdown.strings.minutes,
        value: adaptValue(minutes)
      },
      seconds: {
        name: Countdown.strings.seconds,
        value: adaptValue(seconds)
      },
    }

    return (
      <View>
        <View style={styles.row}>
          {['days', 'hours', 'minutes', 'seconds'].map(key => {
            if (remaining[key].value <= 0 && key !== 'seconds') return null
            return (
              <CountingNumber
                key={key}
                value={remaining[key].value}
                label={remaining[key].name}
              />
            )
          })}
        </View>
        <Text
          allowFontScaling={false}
          style={styles.deadlineDate}
        >
          {`${Countdown.strings.till} ${countdown.date.toLocaleDateString(Countdown.strings.getInterfaceLanguage(), {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: countdown.date.getFullYear() === (new Date()).getFullYear() ? undefined : 'numeric', // TODO only show if next year
          })}`}
        </Text>
      </View>
    )
  }

  renderCountdown () {
    const {missed} = this.state
    const {countdown} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <DeadlineTitle value={countdown.title} />
        </View>

        <View style={styles.bottom}>
          {missed
            ? <MissedIt /> : this._renderCountdownStillOn()
          }

          <View style={styles.buttonContainer}>

            <Button
              onPress={this.props.onDone}
              title={missed ? Countdown.strings.missedIt : Countdown.strings.cancel}
              color="#FC5C63"
            />
            {missed
              ? null
              : <Button
                onPress={this.props.onDone}
                title={Countdown.strings.done}
                color="#FC5C63"
              />
            }
          </View>
        </View>
      </View>
    )
  }

  render () {
    if (!this.state) {
      return null
    }
    return (this.renderCountdown())
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
    padding: 16,
    flexDirection: 'column',
  },
  top: {
    flex: 4,
  },
  bottom: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  deadlineDate: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
  },
  youFailedText: {
    fontFamily: 'Avenir',
    color: '#424242',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

})

export default connect(null, {onDone: removeCountdown})(Countdown)
