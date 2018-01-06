export const addCountdown = (title, date) => ({
  type: 'ADD_COUNTDOWN',
  title,
  date,
})

export const removeCountdown = (id) => ({
  type: 'DELETE_COUNTDOWN',
})

export const changeSlide = (newSlide) => ({
  type: 'CHANGE_SLIDE',
  newSlide,
})