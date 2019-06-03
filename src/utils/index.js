import Loadable from '../components/Loadable'

export const getComponents = name => Loadable({
  loader: () => import(`../pages/${name}`)
})

export const getItem = key => localStorage.getItem(key) || null
export const removeItem = key => localStorage.removeItem(key) || null
export const setItem = (key, value) => localStorage.setItem(key, value) || null