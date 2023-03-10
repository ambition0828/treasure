<template>
  <div class="page">
    <div class="ranking-box"></div>
    <!-- 日榜 月榜 周榜 -->
    <div class="list-style">
      <div class="domEl defaultTag" @click="change(3, $event)">日榜</div>
      <div class="domEl" @click="change(4, $event)">周榜</div>
      <div class="domEl" @click="change(5, $event)">月榜</div>
    </div>
    <!-- 渲染部位 -->
    <div class="scroll-box">
      <div class="rectange" v-for="(item, index) in list" :key="index">
        <!-- 前三个不同图标样式 -->
        <div class="icon">
          <span v-if="index < 3" :class="`topRanking${index + 1}`"></span>
          {{ index + 1 }}
        </div>
        <div class="userInfo">
          <div class="img-box">
            <img :src="item.user_info.avatar" alt="" />
          </div>
          <div class="right-detail">
            <div class="top">{{ item.user_info.nick_name }}</div>
            <div class="bottom">ID:{{ item.user_info.number }}</div>
          </div>
        </div>
        <div class="right-text">
          <div class="top">
            <span>中奖 </span>
            <span>{{ item.source }}</span>
          </div>
          <div class="bottom">
            <span>参与 </span>
            <span>{{ item.join_source }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRankingList } from "@/api/treasure.js";
export default {
  data() {
    return {
      // 默认切换榜单的背景色
      // defaultBackground: 'defaultTag',
      list: [],
    };
  },
  methods: {
    async change(num, event) {
      console.log(num);
      const res = await getRankingList();
      this.list = res.data;
      // 实现按钮切换
      const tagEl = document.querySelectorAll(".domEl");
      for (let i = 0; i < tagEl.length; i++) {
        // 清除所有
        tagEl[i].classList.remove("defaultTag");
      }
      // 自己独活
      event.target.classList.add("defaultTag");
    },
  },
  async created() {
    const res = await getRankingList();
    this.list.push(...res.data);
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>