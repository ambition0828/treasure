<template>
  <div class="page">
    <div class="mine"></div>
    <div class="treasure">
      <div class="rectange">
        <div class="avatar">
          <img :src="list.avatar" alt="" />
        </div>
        <div class="username">{{list.nick_name}}</div>
      </div>
      <div class="order" @click="treasureOrder">
        <div class="order_text_1">夺宝订单</div>
        <div class="order_text_2">您总共参与{{list.all_join}}次夺宝</div>
      </div>
      <div class="record" @click="winningRecord">
        <div class="order_text_1">中奖记录</div>
        <div class="order_text_2">您总共获得{{list.all_luck}}次夺宝</div>
      </div>
      <div class="history">
        <div class="order_text_1" @click="historyTreasure">往期夺宝</div>
        <div class="order_text_2">夺宝详情</div>
      </div>
    </div>
    <!-- 底部tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/homePage1">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { getMineInfo } from "@/api/treasure.js" 
export default {
  data() {
    return {
      active: 1,
      list: [],
    };
  },

  methods: {
    historyTreasure() {
      this.$router.push("/historyTreasure");
    },
    treasureOrder() {
      this.$router.push("/treasureOrder1");
    },
    winningRecord() {
      this.$router.push("/winningRecord");
    }
  },
  async created() {
    const res = await getMineInfo() 
    console.log(res);
    this.list = res.data

  }
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>