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
        <img :src="list_2.reward_icon" alt="" />
      </div>
      <div class="right-detail">
        <span class="diamond-count">{{ list_2.title }}</span>
        <!-- 进度条 -->
        <div class="progress-box">
          <div class="progress-bar">
            <span
              class="progress"
              :style="{ width: list_2.join_ratio + '%' }"
            ></span>
          </div>
          <span class="right-progress">{{ list_2.join_ratio }}%</span>
        </div>
        <!-- 判断显示内容 -->
        <div class="drawReward" v-if="this.$route.query.mark == 1">
          <span>还差：{{ list_2.remain }}份开奖</span>
        </div>
        <div class="drawReward" v-if="this.$route.query.mark == 2"> 
          <span>中奖号：{{ list_2.luck_sn }}</span>
        </div>

        <div class="count">
          <span id="count">数量：{{ list_2.join_count }}</span>
          <div class="total">
            合计：<span id="diamond">{{ list_2.all_money }}钻石</span>
          </div>
        </div>
      </div>
    </div>
    <div class="orderDetail">
      <div class="orderNo">
        <span class="text">订单编号</span>
        <span class="value">暂未获取订单编号</span>
      </div>
      <div class="payTime">
        <span class="text">支付时间</span>
        <!-- There is an 报错 reported here -->
        <span class="value">{{ getTime(list_2.join_time) }}</span>
      </div>
    </div>

    <!-- 抽奖码 样式类似 -->
    <div class="drawReward-code">
      <div class="orderNo drawNo">
        <span class="icon"></span>
        <span class="value draw_No">抽奖码 ({{ list.length }}个)</span>
      </div>
      <div class="split-role"></div>
      <div class="codeValue">
        <span class="value" v-for="item in list" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrderDetail } from "@/api/treasure.js";
export default {
  data() {
    return {
      progress: 76,
      // 抽奖码
      list: [],
      // 筛选后的渲染列表
      list_2: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 时间戳处理
    getTime(time) {
      var date = new Date(time);
      var len = time.toString().length;
      if (len < 13) {
        var sub = 13 - len;
        sub = Math.pow(10, sub);
        date = new Date(time * sub);
      }
      var y = date.getFullYear() + "-";
      // y = ()
      var M = date.getMonth() + 1;
      M = (M < 10 ? "0" + M : M) + "-";
      var d = date.getDate();
      d = (d < 10 ? "0" + d : d) + "";
      var h = date.getHours();
      h = (h < 10 ? "0" + h : h) + ":";
      var m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      return y + M + d + " " + h + m;
    },
  },
  async created() {
    const res = await getOrderDetail({
      id: this.$route.query.id,
    });
    console.log(res);
    this.list_2 = res.data.data;
    this.list = res.data.luck_sn;
  },
};
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