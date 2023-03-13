<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="夺宝订单"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        :class="{ active: sorter === 1 }"
        @click="changeSorter(1)"
        >待开奖</a
      >
      <a
        href="javascript:;"
        :class="{ active: sorter === 2 }"
        @click="changeSorter(2)"
        >已开奖</a
      >
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad(sorter)"
      finished-text="没有更多了"
    >
      <div
        class="rectange"
        v-for="(item, index) in list"
        :key="index"
        @click="treasureOrderDetail(item.id, 1)"
      >
        <div class="left-img">
          <img :src="item.reward_icon" alt="" />
        </div>
        <div class="right-detail">
          <span class="diamond-count">{{ item.title }}</span>
          <div class="progress-box">
            <div class="progress-bar">
              <span
                class="progress"
                :style="{ width: item.join_ratio + '%' }"
              ></span>
            </div>
            <span class="right-progress">{{ item.join_ratio }}%</span>
          </div>
          <div class="purchase">
            <span>购买时间：{{ getTime(item.join_time) }}</span>
          </div>
          <div class="surplus">
            <span>还差{{ item.remain }}份开奖</span>
          </div>
          <div class="count">
            <span id="count">数量：{{ item.join_count }}</span>
            <div class="total">
              合计：<span id="diamond">{{ item.all_money }}钻石</span>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { terasureOrder } from "@/api/treasure.js";
export default {
  data() {
    return {
      list: [],
      // 当前第几页
      page: 1,
      // 待开将 还是已开奖
      sorter: 1,
      loading: false,
      finished: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 上拉加载
    async onLoad(num) {
      // console.log(num);
      const res = await terasureOrder({
        type: num,
        page: this.page,
      });
      console.log(res.data);
      this.page++;
      this.list.push(...res.data.data)
      this.loading = false;
      if (this.page > res.data.last_page) {
        this.finished = true;
      }
    },
    changeSorter(num) {
      this.sorter = num;
      // 重置数据
      this.page = 1;
      this.list = [];
      this.finished = false;
      this.loading = true;
      this.onLoad(num);
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
    treasureOrderDetail(id, mark) {
      console.log(id, mark);
      this.$router.push({
        path: "/treasureOrderDetail",
        query: {
          id: id,
          mark: mark,
        },
      });
    },
  },
  created() {
    // this.changeSorter(1)
  },
};
</script>
<style scoped lang="less" src="./assets/idnex.rem.less">
</style>
<style scoped lang="less">
.navBar-el {
  border-radius: 0.7rem 0.7rem 0rem 0rem;
}
::v-deep .van-nav-bar__title {
  font-size: 0.9rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #505050;
  letter-spacing: 2px;
}
.tab-el {
  z-index: 1;
  position: relative;
  top: -0.1rem;
}
/* =================== */
.my-nav {
  height: 2.5rem;
  /* position: fixed;
    left: 0;
    top: 0; */
  width: 100%;
  // z-index: 999;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  // align-items: center;
  > a {
    color: #222;
    font-size: 14px;
    line-height: 44px;
    margin-left: 20px;
    position: relative;
    transition: all 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.2rem;
      width: 0;
      height: 2px;
      background: #999;
      transition: all 0.3s;
    }
    &.active {
      color: #999;
      &::after {
        width: 14px;
      }
    }
  }
}
</style>
