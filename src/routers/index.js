import {
  getComponents
} from '../utils'

export const baseRoutes = [{
  to: '/login',
  name: 'login',
  meta: {
    icon: 'login',
    title: '登录'
  },
  components: getComponents('Login')
}]

export const infoRoutes = [{
  to: '/record',
  name: 'record',
  meta: {
    icon: 'record',
    title: '记录'
  },
  components: getComponents('Record')
}, {
  to: '/reciple',
  name: 'reciple',
  meta: {
    icon: 'reciple',
    title: '处方'
  },
  components: getComponents('Reciple')
}]