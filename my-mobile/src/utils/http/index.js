import axios from 'axios'
 
import { getUser } from '../storage/'

 // 设置axios基地址
 export const http = axios.create({
     baseURL: 'http://ttapi.research.itcast.cn/' 
 })

 // 设置请求拦截
 // 有的请求需要token验证
 http.interceptors.request.use( function(config) {
     if (getUser()) {
        config.headers.Authorization = `Bearer ${getUser().token}` 
     } 
     return config 
 }, function(error) {
     // 对错误请求做些什么
     return Promise.reject(error)
 })