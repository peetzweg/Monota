// new Date(new Date().getFullYear() + 1, 0, 1)
export const countdowns = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      const {date, title} = action
      return [...state, {date, title}]
    case 'DELETE_COUNTDOWN':
      return state.slice(1, state.countdowns.length - 1)
    default:
      return state
  }
}