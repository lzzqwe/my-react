import {requestGET} from './index'
// 获取推荐歌单
export const recommendSongslist = (payload) => (requestGET('/personalized',payload))