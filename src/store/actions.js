import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_CLICKINDEX
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
  async getTopicData({commit},cb){
    const result = await reqTopicData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
      cb && cb()
    }
  },
  async getNavData({commit}){
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
   getclickIndex({commit},index){
      commit(RECEIVE_CLICKINDEX,{index})
  },
  // getNavDetail ({commit}, callback) {
  //   commit(RECEIVE_NAVDETAIL)
  //   callback && callback()
  // },
}
