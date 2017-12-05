export const countdownReducer = (state = {countdowns: [new Date(2018, 0, 1)]}, action) => {
  switch (action.type) {
    case 'ADD':
      return ({
        countdowns: [...state.countdowns, {end: new Date(2018, 1, 1)}]
      })
    case 'DELETE':
      return ({
        countdowns: state.countdowns.slice(1, state.countdowns.length - 1)
      })
    default:
      return state
  }
}