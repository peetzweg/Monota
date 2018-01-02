export const context = (state = 1, action) => {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'SWITCH_CONTEXT':
      switch (action.newContext) {
        case 'COUNTDOWN': {
          return 0
        }
        case 'CREATE': {
          return 1
        }
        default:
          return 1
      }
    default:
      return state
  }
}