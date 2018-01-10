export const user = (state = {newUser: true}, action) => {
  switch (action.type) {
    case 'DISMISS_WELCOME_MESSAGE':
      return {...state, newUser: false}
    default:
      return state
  }
}