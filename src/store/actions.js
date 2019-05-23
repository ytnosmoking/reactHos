export const changeToken = (token) => {

  return async dispatch => {

    console.log(token)
    console.log(11111)
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(!token)
      }, 3000)
    })
    console.log(res)
    dispatch({
      type: 'changeToken',
      value: res
    })

  }
}