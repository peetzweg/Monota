export const countdowns = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      const {date, title} = action
      return [...state, {date, title, createdAt: new Date()}].sort(sortByDate)
    case 'DELETE_COUNTDOWN':
      return state.slice(1, state.length)
    case 'persist/REHYDRATE':
      if (action.payload) {
        const {countdowns} = action.payload
        if (countdowns) {
          return countdowns.map(({date, createdAt, ...rest}) => {
            return {
              date: new Date(date),
              createdAt: new date(createdAt),
              ...rest
            }
          })
        }
      }
      return state
    default:
      return state
  }
}

function sortByDate (cA, cB) {
  return cA.date - cB.date
}