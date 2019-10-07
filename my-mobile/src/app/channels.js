
import { http } from '../utils/http/'

// 获取频道内容
export const getChannel = () => {
    return http.get('/app/v1_0/channels')
}