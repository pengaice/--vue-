
import Vue from 'vue'
import {
  RECEIVE_BANNER,
  RECEIVE_DATA,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from './mutation-type'
export default {
  [RECEIVE_BANNER](state,{data}){
    state.data = data
  },
  [RECEIVE_DATA](state,{banner}){
    state.banner = banner
  },
  [RECEIVE_DETAIL](state,{home}){
    state.home = home
  },
  [RECEIVE_HOME](state,{detail}){
    state.detail = detail
  },
  [RECEIVE_NAV](state,{nav}){
    state.nav = nav
  }
}
