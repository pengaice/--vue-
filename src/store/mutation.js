
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_CLICKINDEX
  // RECEIVE_NAVLIST,
  // RECEIVE_NAVDETAIL
} from './mutation-type'
export default {
  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },
  [RECEIVE_TOPICDATA](state,{topicData}){
    state.topicData = topicData
  },
  [RECEIVE_NAVDATA](state,{navData}){
    state.navData = navData
  },
  [RECEIVE_CLICKINDEX](state,{index}){
    state.clickIndex = index
  },
  // [RECEIVE_NAVLIST] (state) {
  //   let arr = []
  //   state.navData.forEach(item => {
  //     arr.push(item.name)
  //   })
  //   if (arr.length > 13) {
  //     arr.length = 13
  //   }
  //   console.log(arr)
  //   state.navList = arr
  // },
  // [RECEIVE_NAVDETAIL](state){
  //   state.navDetail = state.navData[state.navIndex]
  // },
}
