import service from '../axios'
export function getItem(params) {
  return JSON.parse(localStorage.getItem(params))
}
export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
export function removeItem(key) {
  localStorage.removeItem(key)
}

// 校验 手机号码
export const checkTel = tel => /^1\d{10}$/.test(tel)
// 弹出提示

/**
 * @description Object => formData
 * @param {*} data
 */
export const makeFormData = data => {
  let fd = new FormData()
  for (let key of Object.keys(data)) {
    fd.append(key, data[key])
  }
  return fd
}
/**
 * @description Object => QueryParams
 * @param {*} data
 */
export const makeQueryParams = (data) => {
  const params = Object.keys(data).map(key => data[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}` : '');
  return params.filter(value => !!value).join('&');
}

/**
 *
 *
 * @param {*} time
 * @description 生成标准时间格式：2018-10-10 00:00:00
 * @returns time
 */
export const makeStandardTimeFormat = time => {
  const date = new Date(time);
  const Y = date.getFullYear() + '-';
  const M =
    (date.getMonth() + 1 < 10 ?
      '0' + (date.getMonth() + 1) :
      date.getMonth() + 1) + '-';
  const D = date.getDate();
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const m =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const s =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return `${Y}${M}${D} ${h}:${m}:${s}`;
};
/**
 *
 *
 * @param {*} day
 * @description 根据天数生成时间戳
 * @returns timestamp
 */
export const makeTimeStampByDays = day => {
  return 24 * 3600 * 1000 * day;
};
/**
 *
 *
 * @param {*} year
 * @description 根据年数生成时间戳
 * @returns timestamp
 */
export const makeTimeStampByYears = year => {
  return 365 * 24 * 3600 * 1000 * year;
};

/**
 *@description axios for get
 */
export const getDataById = (url, data) => {
  return service.request({
    url: url + '/' + data,
    method: 'get'
  })
}
export const getData = (url, params) => {
  return service.request({
    url,
    params,
    method: 'get'
  })
}

export const getParams = (url, params) => {
  return service.request({
    url,
    params,
    method: 'get'
  })
}
export const postData = (url, data) => {
  return service.request({
    url,
    data
  })
}
export const uploadData = (url, data, method = 'post') => {
  // 如果是upload   数据应该是  formData 形式
  return service.request({
    url,
    method,
    data: makeFormData(data)
  })
}

export const postDataById = (url, id, data) => {
  return service.request({
    url: url + '/' + id,
    data
  })
}
export const deleteData = (url, id) => {
  return service.request({
    url: url + '/' + id,
    method: 'delete'
  })
}

export const deleteBindThird = (url, data) => {
  return service.request({
    url: url,
    data,
    method: 'delete'
  })
}

export const patchData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'patch'
  })
}
export const putData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'put'
  })
}

export const svgSrc = name => require(`../assets/svg/${name}.svg`)