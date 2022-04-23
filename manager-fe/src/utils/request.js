/* 
axios二次封装
 */
import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import router from './../router'
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'


//创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

//请求拦截
service.interceptors.request.use((req) => {
  //TO-DO
  const headers = req.headers
  if (!headers.Authorization) {
    headers.Authorization = 'Bear Jack'
  }
  return req
})

//响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/* 
请求的核心函数
options 请求的核心配置
 */
function request (options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    //在调用时我们统一传data作为参数，但是我们在请求内部会做一个区分
    //如果是get请求的话会做一层转换，减少前端开发的成本
    options.params = options.data
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request