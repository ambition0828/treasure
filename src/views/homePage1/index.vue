<template>
  <div class="page">
    <div class="diamond-treasure"></div>
    <!-- 动态数据 -->
    <div class="treasure">
      <!-- 遍历数据 -->
      <div
        class="rectange"
        v-for="item in list"
        :key="item.id"
        @click="homeSnatch(item.id)"
      >
        <div class="left">
          <div class="top">
            <div class="status" v-show="item.open_state == 0">
              <span class="text">据开抢</span>
            </div>
            <div class="status_1" v-show="item.open_state == 1">
              <span class="text">开奖中</span>
            </div>
            <div class="status_2" v-show="item.open_state == 2">
              <span class="text">已结束</span>
            </div>
            <div class="count" v-show="item.open_state == 0">
              <span class="text_1">差{{ item.remain }}份</span>
            </div>
            <!-- 倒计时 -->
            <div class="count countDown" v-show="item.open_state == 1">
              <van-count-down
                class="countDownEl"
                :time="item.open_time * 1000"
                format="mm:ss"
              />
              <span class="text_1">后开奖</span>
            </div>
          </div>
          <div class="bottom">
            <img :src="item.reward_icon" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="right_top">
            <span>{{ item.title }}</span>
          </div>
          <!-- 进度条 -->
          <div class="right_middle">
            <div class="progress-bar">
              <span
                class="progress"
                :style="{ width: (item.join_ratio) + '%' }"
              ></span>
            </div>
          </div>
          <div class="right_bottom">
            <div class="percentage">
              <span>{{(item.join_ratio)}}%</span>
            </div>
            <div class="joinNow">
              <div class="background">
                <span>立即参与</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rectange-transparent"></div>
    </div>
    <!-- 排行榜 -->
    <div class="ranking" @click="homeRanking"></div>
    <!-- 底部tabbar -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/homePage1">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { getHomePageInfo } from "@/api/treasure.js";
export default {
  data() {
    return {
      constants: {},
      // 进度条百分比
      progress: 70,
      active: 0,
      // 渲染列表
      list: [],
      // 倒计时毫秒
    };
  },
  methods: {
    homeSnatch(id) {
      console.log(id);
      this.$router.push({
        path: '/homeSnatch',
        query: {
          id: id
        }
      });
    },
    homeRanking() {
      this.$router.push("/homeRanking");
    },
  },
  async created() {
    const res = await getHomePageInfo();
    console.log(res);
    this.list = res.data;
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">

</style>
<style scoped>
.countDownEl {
  font-size: 0.56rem;
  color: red;
  margin-left: 0.2rem;
}
</style>