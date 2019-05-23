export const record = (state = [], action) => {
  switch (action.type) {
    case 'change':
      return [1, 2, 3, 4, 5]
    default:
      return state
  }
}


const baseInfo = {
  token: false,
  doctorInfo: {}
}

export const base = (state = baseInfo, action) => {
  switch (action.type) {
    case 'changeToken':
      return Object.assign({}, state, {
        token: action.value
      })
    default:
      return state
  }
}