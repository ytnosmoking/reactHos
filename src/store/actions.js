import {
  setItem,
  removeItem
} from '../utils'

import {
  // getData,
  postData
} from '../utils/tools'
import {
  API,
  origin
} from '../axios/config'

export const triggerLogin = (params) => {
  return async dispatch => {
    dispatch(loading(true))
    console.log(params)
    const {
      username,
      password,
      remember
    } = params
    const res = await postData(API.login, {
      username,
      password,
      origin
    })
    dispatch(loading())
    if (res.code === 200) {
      setItem('token', res.message)
      if (remember) {
        setItem('account', JSON.stringify(params))
      } else {
        removeItem('accout')
      }
    }
    console.log(res)
    dispatch(ctrToken(res))
  }
}

export const triggerExit = () => {
  return dispatch => {
    removeItem('token')
    dispatch(ctrToken())
  }
}

const loading = (bol = false) => ({
  type: 'loading',
  status: bol
})

const ctrToken = (value = '') => ({
  type: 'ctrToken',
  value
})