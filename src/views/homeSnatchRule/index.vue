<template>
  <div class="page">
    <van-nav-bar
      class="navBarEl"
      title="开奖规则"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <!-- 规则 -->
    <div class="ruleText">
      <div class="div">
        <span
          >1.玩家每<span class="blueText"
            >购买一份，将随机分配<span class="blueText">一个号码</span></span
          ></span
        >
      </div>
      <div class="div">
        <span
          >2.当累计购买<span class="blueText">份额满时</span
          ><span>，系统自动开奖</span></span
        >
      </div>
      <div class="div">
        <span
          >3.为体现每次夺宝绝对的公平性不可操控性，当份额满足后，将延迟一分钟，取</span
        ><span class="blueText">第三方平台</span
        ><span>对应时间点随机数作为随机数</span>
      </div>
      <div class="div">
        <span class="blueText"
          >幸运号码规则：(本期所有购买记录时间相加 + 第三方平台随机数) % 份数 +
          10000001
          注意：购买记录时间按照时、分、秒、毫秒排列，QQ实时在线人数(延迟1分钟数值),</span
        ><span>可以点击查看，</span
        ><span class="blueText">规则中 % 符号是取余数计算</span>
      </div>
      <div class="div">
        <span>4.由于需要等待第三方平台随机数数据，所以开奖会有3分钟延迟 </span>
      </div>
      <div class="div">
        <span
          >5.不同的类型夺宝总份数和单份价格也会有所不同，并且会限制单个用户参与数量
        </span>
      </div>
      <div class="div">
        <span
          >6.参与夺宝后等待期间，即使临时有事无法登陆软件也不影响获奖资格</span
        >
      </div>
      <div class="div">
        <span
          >7.考拉live
          反对未成年人参与相关玩法，同时请参与夺宝的用户务必注意健康娱乐，适度消费
        </span>
      </div>
      <div>
        <span
          >
          8.注：请知悉考拉live平台禁止并严厉打击任何形式的线下交易，通过夺宝获得的奖励不可以兑换现金，谨防上当受骗，平台不保障所有通过线下交易销售或购买的钻石，礼物，道具等。考拉live有权终止向违规账号提供服务，违规账户中的虚拟产品被清空。由此造成的损失由用户自行承担！</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back()
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