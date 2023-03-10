/** @format */

import request from '../utils/request'

// 首页列表数据
export const getHomePageInfo = () => {
  return request.post('/index', {
    Text,
  })
}
// 首页夺宝详情
export const getTreasureDetail = obj => {
  return request.post('/get_detail', {
    id: obj.id,
  })
}
// 参与夺宝用户列表
export const getTreasurePlayer = (obj) => {
  return request.post('/join_user', {
    id: obj.id,
    page: obj.page,
    page_size: 20,
  })
}
export const getTreasurePlayerRender = obj => {
  return request.post('/join_user', {
    id: obj.id,
    page: 1,
    page_size: 100,
  })
}
// 确认支付  参与夺宝
export const enterPay = (obj) => {
  return request.post('/join_lottery', {
    id: obj.id,
    // 参与份数
    join: obj.join
  })
}

//排行榜 
export const getRankingList = (obj) => {
  return request.post('/lottery_rank', {
    type: obj ? obj : 3
  })
}
// 夺宝订单
export const terasureOrder = (obj) => {
  return request.post('/order_list',{
    type: obj.type ? obj.type : 1,
    page: obj.page,
    page_size: 100
  })
}
// 订单详情
export const getOrderDetail = (obj) => {
  return request.post('/order_detail', {
    id: obj.id
  })
}

// 夺宝历史
export const getHistoryTreasure = () => {
  return request.post('/lottery_history')
}