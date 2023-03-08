<template>
  <div class="page">
    <van-nav-bar
      class="navBarEl"
      :title="this.diamondTitle"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="diamond">
      <div class="diamond-img">
        <img src="./assets/img/diamond.png" alt="" />
      </div>
      <div class="diamond-detail">
        <div class="top">5万钻石</div>
        <div class="progress-box">
          <div class="progress-bar">
            <span class="progress" :style="{ width: progress + '%' }"></span>
          </div>
          <div class="progress-right">{{ progress }}%</div>
        </div>

        <div class="surplus">还差6份开奖</div>
      </div>
    </div>
    <div class="copies">
      <div class="left">
        <div class="number">
          <div class="count">40</div>
          <span>参与份数</span>
        </div>
      </div>
      <div class="right">
        <div class="number">
          <div class="count">40</div>
          <span>开奖份数</span>
        </div>
      </div>
    </div>
    <div class="drawPrice">
      <div class="style_draw">开奖方式</div>
      <div class="text">
        <span>当夺宝金额达到40份自动开奖</span><van-icon name="arrow" />
      </div>
    </div>
    <!-- 夺宝人 -->
    <div class="drawPlayer" v-for="(item,index) in 3" :key="index">
      <div class="title">夺宝人</div>
      <div class="userDetail">
        <div class="avatar">
          <img src="./assets/img/avatar.png" alt="" />
        </div>
        <div class="detail">
          <div class="userName">用户名123</div>
          <div class="time">2023-02-2 18:23:21</div>
        </div>
        <div class="count_1">1份</div>
      </div>
    </div>
    <!-- 空内容防止固定定位覆盖 -->
    <div class="drawPlayer">
    </div>
    <!-- 吸底效果 -->
    <div class="suction-bottom">
      <div class="left-text">还差9份</div>
      <div class="join-Now">立即参与</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diamondTitle: "5万钻石",
      progress: 76,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
::v-deep .van-nav-bar {
  border-radius: 0.7rem 0.7rem 0rem 0rem;
}
::v-deep .van-nav-bar__title {
  font-size: 0.79rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #505050;
  letter-spacing: 2px;
}
</style>