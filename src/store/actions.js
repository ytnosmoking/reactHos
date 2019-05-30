import {
  setItem
} from '../utils'


export const changeToken = (token) => {
  return async dispatch => {

    dispatch(loading)

    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        setItem('token', token)
        resolve(token)
      }, 1000)
    })
    console.log(res)
    dispatch({
      type: 'changeToken',
      value: res
    })
    dispatch(loading)

  }
}


const loading = {
  type: 'loading'
}