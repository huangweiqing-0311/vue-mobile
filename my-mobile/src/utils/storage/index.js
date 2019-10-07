
 const USER_KEY = 'userInfo'
 
 // 保存用户信息 token
 export const setUser = (userInfo) => {
     // 浏览器只能存储 json 格式, 所以要转换 JSON.stringify()
     return window.localStorage.setItem(USER_KEY, JSON.stringify(userInfo))
 }

 // 获取用户信息 token
 export const getUser = () => {
     // 将 json 格式转化为 js 对象
     return JSON.parse(window.localStorage.getItem(USER_KEY))
 }

