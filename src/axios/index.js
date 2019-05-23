import {
  baseUrl
} from './config'

import axios from 'axios'


class HttpRequest {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
  }
  getDefaultConfig() {
    const config = {
      baseURL: this.baseUrl,
      method: 'post',
      timeout: 30000,
      headers: {
        // 'Content-Type':'application/x-www-form-urlencoded'
        // 'X-Requested-With': 'XMLHttpRequest'
      }
    }
    return config
  }
  interceptors(instance, url) {
    // let LoadingService = Loading.service({
    //   text: '数据加载中...',
    //   fullscreen: false,
    //   body: false,
    //   lock: true
    // })
    instance.interceptors.request.use(config => {
      // bus.$loading.open()
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token.replace(/"/g, '')
      }
      return config
    }, error => {
      setTimeout(() => {
        // LoadingService.close()
      }, 1000)

      console.log(error)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      // LoadingService.close()
      if (res.status >= 200 && res.status < 300) {
        // if (res.status === 200) {
        return res.data
        // }
      }
      // return res
    }, err => {
      // if (err.response.status === 401) {
      //   window.localStorage.removeItem('info')
      //   window.localStorage.removeItem('token')
      //   window.location.hash = 'login'
      // }
      if (err.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
        alert('超时')
      }
      setTimeout(() => {
        // LoadingService.close()
      }, 1000)

      return err
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getDefaultConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const service = new HttpRequest(baseUrl)
export default service