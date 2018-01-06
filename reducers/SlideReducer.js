export const slide = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SLIDE':
      return action.newSlide
    default:
      return state
  }
}