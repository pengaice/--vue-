import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
} from './mutation-type'

import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'

export default {
//获取首页信息
  async getHomeData({commit}, cb){
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      cb && cb()
    }
    
  },
  //获取TopicData信息
  async getTopicData({commit}){
    const result = await reqTopicData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },
  async getNavData({commit}){
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
  // getNavDetail ({commit}, callback) {
  //   commit(RECEIVE_NAVDETAIL)
  //   callback && callback()
  // },
}
