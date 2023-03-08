<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="往期夺宝详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="diamondCount">
      <span>&nbsp;[第6253期] 10万钻石</span>
    </div>
    <div class="pencil">
      <img src="./assets/img/pencil.png" alt="" />
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
    <div class="drawNumber">
      <span class="left">开奖号码</span>
      <span class="right">1000024</span>
    </div>
    <div class="currentTime">
      <div class="title">本期时间</div>
      <div class="currentTime_1">本期时间：2020-02-15 19:28:21</div>
      <div class="finishTime">本期时间：2020-02-15 19:28:21</div>
      <div class="startTime">本期时间：2020-02-15 19:28:21</div>
    </div>
    <div class="drawRule">
      <div class="title_1">开奖规则</div>
      <span
        >【(本期所有购买记录时间(按照时、分、秒、毫秒排列)相加
        第三方平台随机数(延迟1分钟数值)(可以点击查看))/参与份 数】取余数
        +10000001</span
      >
      <div class="title_2">计算流程</div>
      <span class="one"
        >1.本期所有购买记录时间(按照时、分、秒、毫秒排列)相加:
        190706227+190707037+190707830+190708141+1907 08700+190709719 +190714310
        +190716311 +19071711 0 + 190717222 +190720869+190722413 + 190724911 +
        190732499+190733364=2860746663</span
      >
      <span class="two"
        >2.获取第三方平台在 2023-02-15 19:08 分时实时随机数 :50024</span
      >
      <span class="three"
        >3.前两步数值相加和，与参与份数取余数，然后加上 1000
        0001，结果为:(2860746663+50024)%20+10000001=10000008
      </span>
      <div class="state">
        第三步中%符号是取余数计算(比如10除以3等于3还剩 【10-(3x3)=1】
        1，这个1就是余数，取 1)
      </div>
    </div>
    <div class="drawPlayer">
      <div class="title">中奖玩家</div>
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
      <div class="number">1000023</div>
    </div>
    <div class="drawPlayer" v-for="(item,index) in 5" :key="index" >
      <div class="title">夺宝玩家</div>
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
      <div class="number">1000023</div>
    </div>
  </div>
</template>
<script>
export default {
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
.navBar-el {
  border-radius: 0.7rem 0.7rem 0rem 0rem;
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
