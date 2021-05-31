import axios from 'axios'
export const commonHeaders = {
  'Content-Type': 'application/json;charset=UTF-8'
}
export const fileHeaders = {
  'Content-Type': 'multipart/form-data'
}
// 创建一个新的axios实例
const http = axios.create({
  baseURL: 'https://gank.io/api/v2',
  timeout: 30000,
  headers: commonHeaders
})
// 添加响应拦截器
http.interceptors.response.use(
  response => {
    return Promise.resolve((response.data || {}) as any)
  },
  error => {
    return Promise.reject(error)
  }
)
export default http
