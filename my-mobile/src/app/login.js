import { http } from '../utils/http/index.js'

 //设置登录的请求
 export const login = (data) => {
      return http.post('/app/v1_0/authorizations', data)
 }