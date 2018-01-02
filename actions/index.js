export const addCountdown = (title, date) => ({
  type: 'ADD_COUNTDOWN',
  title,
  date,
})

export const removeCountdown = (id) => ({
  type: 'DELETE_COUNTDOWN',
})

export const switchContext = (newContext) => ({
  type: 'SWITCH_CONTEXT',
  newContext,
})