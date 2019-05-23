const devUrl = 'http://hkyyd_test.hooook.com/api' // 测试
// const devUrl = 'http://xyd.hooook.com/api/' // 测试

const proUrl = '' // 测试

export const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : proUrl || devUrl

export const API = {
  login: '/login',
  doctorInfo: '/doctor/show', // 医生信息
  recipesList: '/doctor/recipes', // 处方
  patients: '/doctor/patients', // 病人
  shop: '/doctor/pharmacies', // 药店
  medicine: '/doctor/drugs' // 药品
}
