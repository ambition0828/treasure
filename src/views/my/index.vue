<template>
  <div class="page">
    <div class="background">
      <div class="treasure">
        <div class="rectange">
          <div class="avatar">
            <img src="./assets/img/avatar.png" alt="">  
          </div>      
          <div class="username">用户名123</div>  
        </div>
        <div class="order" @click="treasureOrder">
          <div class="order_text_1">夺宝订单</div>
          <div class="order_text_2">您总共参与0次夺宝</div>
        </div>
        <div class="record">
          <div class="order_text_1">中奖记录</div>
          <div class="order_text_2">您总共获得0次夺宝</div>
        </div>
        <div class="history">
          <div class="order_text_1" @click="historyTreasure">往期夺宝</div>
          <div class="order_text_2">夺宝详情</div>
        </div>
      </div>
      <!-- 底部tabbar -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/homePage">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    historyTreasure() {
      this.$router.push('/historyTreasure')
    },
    treasureOrder() {
      this.$router.push('/treasureOrder')
    }
  }
}
</script>
<style scoped lang="less" src="./assets/index.rem.less">

</style>