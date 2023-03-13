<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="中奖记录"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="rectange" v-for="(item, index) in list" :key="index" @click="treasureOrderDetail(item.id)">
        <div class="left-img">
          <img :src="item.reward_icon" alt="" />
        </div>
        <div class="right-detail">
          <span class="diamond-count">{{item.title}}</span>

          <div class="surplus">
            <span class="number">中奖号：{{item.luck_sn}}</span>
          </div>
          <div class="count">
            <span id="count">数量：{{item.join_num}}</span>
            <div class="total">合计：<span id="diamond">{{item.all_money}}钻石</span></div>
          </div>
        </div>
      </div>
    </van-list>
    
    <!-- 空白盒子 -->
    <!-- <div class="transparent"></div> -->
  </div>
</template>
<script>
import { getWinningRecordInfo } from "@/api/treasure.js";
export default {
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      finished: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async onLoad() {
      const res = await getWinningRecordInfo({
        page: this.page,
      });
      console.log(res);
      this.page++
      this.list.push(...res.data.data)
      this.loading = false
      if(this.page > res.data.last_page) {
        this.finished = true
      }
    },
    treasureOrderDetail(id) {
      this.$router.push({
        path: '/treasureDetail',
        query: {
          id: id
        }
      })
    }
  },
  async created() {},
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
.navBar-el {
  border-radius: 0.7rem 0.7rem 0 0;
}
/* ::v-deep .van-nav-bar__title {
  font-size: 0.9rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #505050;
  line-height: 50px;
  letter-spacing: 2px;
} */
</style>