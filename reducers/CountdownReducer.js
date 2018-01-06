export const countdowns = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      const {date, title} = action
      return [...state, {date, title}].sort(sortByDate)
    case 'DELETE_COUNTDOWN':
      return state.slice(1, state.length)
    default:
      return state
  }
}

function sortByDate (cA, cB) {
  return cA.date - cB.date
}