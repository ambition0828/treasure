<template>
  <div class="page">
    <van-nav-bar
      class="navBarEl"
      :title="listDetail.title"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="diamond">
      <div class="diamond-img">
        <img :src="listDetail.reward_icon" alt="" />
      </div>
      <div class="diamond-detail">
        <div class="top">{{ listDetail.title }}</div>
        <div class="progress-box">
          <div class="progress-bar">
            <span
              class="progress"
              :style="{ width: listDetail.join_ratio + '%' }"
            ></span>
          </div>
          <div class="progress-right">{{ listDetail.join_ratio }}%</div>
        </div>

        <div class="surplus">还差{{ listDetail.remain }}份开奖</div>
      </div>
    </div>
    <div class="copies">
      <div class="left">
        <div class="number">
          <div class="count">{{ listDetail.join_count }}</div>
          <span>参与份数</span>
        </div>
      </div>
      <div class="right">
        <div class="number">
          <div class="count">{{ listDetail.open_num }}</div>
          <span>开奖份数</span>
        </div>
      </div>
    </div>
    <div class="drawPrice" @click="drawRules">
      <div class="style_draw">开奖方式</div>
      <div class="text">
        <span>当夺宝金额达到40份自动开奖</span><van-icon name="arrow" />
      </div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- 夺宝人 -->
      <div class="drawPlayer" v-for="item in playerList" :key="item.user_id">
        <div class="title">夺宝人</div>
        <div class="userDetail">
          <div class="avatar">
            <img :src="item.avatar" alt="" />
          </div>
          <div class="detail">
            <div class="userName">{{ item.nick_name }}</div>
            <div class="time">{{ getTime(item.join_time) }}</div>
          </div>
          <div class="count_1">{{ listDetail.join_count }}份</div>
        </div>
      </div>
    </van-list>

    <!-- 空内容防止固定定位覆盖 -->
    <div class="drawPlayer"></div>
    <!-- 吸底效果 -->
    <div class="suction-bottom">
      <div class="left-text">还差{{ listDetail.remain }}份</div>
      <div class="join-Now" @click="showPop">立即参与</div>
    </div>
    <!-- 支付弹窗 -->
    <div class="popup" v-show="showPay">
      <div class="diamond diamond-pop">
        <div class="diamond-img">
          <img :src="listDetail.reward_icon" alt="" />
        </div>
        <div class="diamond-detail">
          <div class="top">{{ listDetail.title }}</div>
          <div class="progress-box">
            <div class="progress-bar">
              <span
                class="progress"
                :style="{ width: listDetail.join_ratio + '%' }"
              ></span>
            </div>
            <div class="progress-right">{{ listDetail.join_ratio }}%</div>
          </div>

          <div class="surplus">还差{{ listDetail.remain }}份开奖</div>
        </div>
      </div>
      <div class="split"></div>
      <div class="partake">
        <div class="left">参与份数</div>
        <div class="right">
          <div class="subtract" @click="subtract">-</div>
          <span>{{ count }}</span>
          <div class="add" @click="add">+</div>
        </div>
      </div>
    </div>
    <!-- 确认支付 -->
    <div class="suction-bottom" v-show="enterPay">
      <div class="left-text">合计：{{ total }}钻石</div>
      <div class="join-Now" @click="pay">确认支付</div>
    </div>
    <!-- 透明蒙版 -->
    <div class="transparent" @click="closePop" v-show="showTransparent"></div>
  </div>
</template>
<script>
import {
  getTreasureDetail,
  getTreasurePlayer,
  enterPay,
  getTreasurePlayerRender,
} from "@/api/treasure.js";
export default {
  data() {
    return {
      diamondTitle: "5万钻石",
      progress: 76,
      count: 0,
      // 判断支付弹窗打开
      showPay: false,
      // 判断显示确认支付
      enterPay: false,
      showTransparent: false,
      // 渲染列表
      listDetail: [],
      // 夺宝人列表
      playerList: [],
      loading: false,
      finished: false,
      // 页码
      page: 1,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async onLoad() {
      // 获取夺宝人列表
      const res1 = await getTreasurePlayer({
        id: this.$route.query.id,
        page: this.page,
      });
      console.log("夺宝人列表", res1.data.data);
      this.page++;
      this.playerList.push(...res1.data.data);
      this.loading = false;
      if (this.page > res1.data.total) {
        this.finished = true;
        // this.$toast.success('最后一页了')
      }
    },
    // 关闭弹窗
    closePop() {
      this.showPay = false;
      this.enterPay = false;
      this.showTransparent = false;
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
    drawRules() {
      // console.log('点击率');
      this.$router.push("/homeSnatchRule");
    },
    add() {
      this.count++;
    },
    subtract() {
      if (this.count >= 1) {
        return this.count--;
      }
    },
    showPop() {
      this.showPay = true;
      this.enterPay = true;
      this.showTransparent = true;
    },
    async pay() {
      const res = await enterPay({
        id: this.$route.query.id,
        join: this.count,
      });
      if (res.code == 200) {
        this.$toast.success("夺宝成功");
        // 获取夺宝人列表
        const res2 = await getTreasureDetail(this.$route.query.id);
        this.listDetail = res2.data;

        const res3 = await getTreasurePlayerRender({
          id: this.$route.query.id,
          page: this.page,
        });
        console.log(res3);
        this.playerList = res3.data.data;

        // 成功之后恢复原状态
        this.showPay = false;
        this.enterPay = false;
        this.showTransparent = false;
      } else if (res.code == 3000) {
        this.$toast.fail(res.msg);
      } else if (res.code == 0) {
        this.$toast(res.msg);
      }
    },
  },
  async created() {
    const res = await getTreasureDetail(this.$route.query.id);
    console.log(res);
    this.listDetail = res.data;

    // test
  },
  computed: {
    total() {
      return this.listDetail.join_price * this.count;
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