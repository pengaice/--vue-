/**
 * Created by asus-z on 2018/11/29.
 */

import ajax from './ajax'

export const reqData = ()=>ajax('/data')

export const reqBanner = ()=>ajax('/banner')

export const reqHome = ()=>ajax('/home')

export const reqDetail = ()=>ajax('/detail')

export const reqNav = ()=>ajax('/nav')
