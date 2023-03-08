import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage/index.vue'
import HomeSnatch from '@/views/homeSnatch/index.vue'
import HomeRanking from '@/views/homeRanking/index.vue'
import my from '../views/my/index.vue'
import HistoryTreasure from '@/views/historyTreasure/index.vue'
import TreasureDetail from '@/views/TreasureDetail/index.vue'
import TreasureOrder from '@/views/treasureOrder/index.vue'
import TreasureOrderDetail from '@/views/treasureOrderDetail/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homePage',
  },
  // 夺宝首页
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage,
  },
  // 距开抢
  {
    path: '/homeSnatch',
    component: HomeSnatch,
  },
  // 排行榜
  {
    path: '/homeRanking',
    component: HomeRanking
  },
  // 我的
  {
    path: '/my',
    component: my,
  },
  // 往期夺宝
  {
    path: '/historyTreasure',
    component: HistoryTreasure,
  },
  // 往期夺宝详情
  {
    path: '/treasureDetail',
    component: TreasureDetail,
  },
  // 夺宝订单
  {
    path: '/treasureOrder',
    component: TreasureOrder,
  },
  // 夺宝订单详情
  {
    path: '/treasureOrderDetail',
    component: TreasureOrderDetail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
