<template>
  <div class="page">
    <van-nav-bar
      class="navBarEl"
      title="夺宝详情"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="rectange">
      <div class="left-img">
        <img src="./assets/img/diamond.png" alt="" />
      </div>
      <div class="right-detail">
        <span class="diamond-count">10万钻石</span>
        <!-- 进度条 -->
        <div class="progress-box">
          <div class="progress-bar">
            <span class="progress" :style="{ width: progress + '%' }"></span>
          </div>
          <span class="right-progress">{{ progress }}%</span>
        </div>
        <div class="drawReward"><span>中奖号：10000002</span></div>
        <div class="count">
          <span id="count">数量：2</span>
          <div class="total">合计：<span id="diamond">1000钻石</span></div>
        </div>
      </div>
    </div>
    <div class="orderDetail">
      <div class="orderNo">
        <span class="text">订单编号</span>
        <span class="value">3798751</span>
      </div>
      <div class="payTime">
        <span class="text">支付时间</span>
        <span class="value">2023-02-15 18:07:12</span>
      </div>
    </div>
    <!-- 抽奖码 样式类似 -->
    <div class="orderDetail">
      <div class="orderNo drawNo">
        <span class="icon"></span>
        <span class="value draw_No">抽奖码 (2个)</span>
      </div>
      <div class="payTime codeValue">
        <span class="value">100002</span>
        <span class="value">100002</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: 76    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
.navBarEl {
  border-radius: 0.7rem 0.7rem 0rem 0rem;
}
::v-deep .van-nav-bar__title {
  font-size: 0.9rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #505050;
  letter-spacing: 2px;
}
</style>