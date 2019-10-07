 import { http } from '../utils/http/'

 export const getArticleList = ({channel_id, timestamp, with_top}) => {
      return http.get('/app/v1_1/articles', {
         params: {
            channel_id,
            timestamp,
            with_top 
         } 
      })
 }