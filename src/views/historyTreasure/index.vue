<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="往期夺宝"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="rectange" v-for="(item,index) in 10" :key="index" @click="treasureDetail">
      <div class="diamond">
        <img src="./assets/img/diamond.png" alt="" />
      </div>
      <div class="right-detail">
        <div class="diamondCount">10万钻石</div>
        <div class="number">中奖号码：100023</div>
        <div class="userDraw">
          <span>中将用户：[5665447]果果就是我的白马王子</span>
        </div>
        <div class="startTime">
          <span>开奖时间：2023-05-15 18:45</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    treasureDetail() {
      this.$router.push('/treasureDetail')
    }
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
.navBar-el {
  border-radius: 0.7rem 0.7rem 0 0;
}
::v-deep .van-nav-bar__title {
  font-size: 0.9rem;
  /* font-family: PingFangSC-Medium, PingFang SC; */
  /* font-weight: 500; */
  color: #505050;
  line-height: 50px;
  letter-spacing: 2px;
}
</style>