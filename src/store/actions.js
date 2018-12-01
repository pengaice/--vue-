
import {
  RECEIVE_BANNER,
  RECEIVE_DATA,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from './mutation-type'
import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'
export default {
//获取首页信息
  async getData({commit},cb){
    const result = await reqData()
    commit(RECEIVE_DATA,{data:result.data})
    cb && cb()
  },
  //获取banner信息
  async getBanner({commit},cb){
    const result = await reqBanner()
    commit(RECEIVE_BANNER,{banner:result.data})
    cb && cb()
  },
}
