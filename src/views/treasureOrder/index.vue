<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="夺宝订单"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <van-tabs class="tab-el" @click="test" v-model="active" sticky>
      <van-tab title="待开奖">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad(1)"
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
      </van-tab>
      <van-tab title="已开奖">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad(2)"
        >
          <div
            class="rectange"
            v-for="(item, index) in list_2"
            :key="index"
            @click="treasureOrderDetail(item.id, 2)"
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
                <span class="number">中奖号：{{ item.luck_sn }}</span>
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
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { terasureOrder } from "@/api/treasure.js";
export default {
  data() {
    return {
      active: 0,
      progress: 70,
      list: [],
      // 当前页码
      page: 1,
      loading: false,
      finished: false,
      // 已开奖列表
      list_2: [],
      // 接口参数
      type: 1,
      // 用于区分点击待开奖和已开奖
      // mark: 1,
    };
  },
  // watch: {
  //   active(newVal,oldVal) {
  //     console.log(newVal,oldVal);
  //     if(newVal == 1) {
  //       this.type = 2
  //     } else if (newVal == 0 ) {
  //       this.type = 1
  //     }
  //     console.log('active',this.active);
  //   }
  // },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 上拉加载
    async onLoad(type) {
      console.log('type',type,'active',this.active);
      const res = await terasureOrder({
        type: type,
        page: this.page,
      });
      this.page++;
      // 判断待开将 已开奖参数
      if (type == 1) {
        this.list.push(...res.data.data);
      } else if (type == 2) {
        this.list_2.push(...res.data.data);
      }
      this.loading = false;
      if (this.page > res.data.last_page) {
        this.finished = true;
      }
    },
    async onLoad_2() {
      const res = await terasureOrder({
        type: 2,
        page: this.page,
      });
      this.page++;
      // 判断待开将 已开奖参数
      this.list_2.push(...res.data.data);
      this.loading = false;
      if (this.page > res.data.last_page) {
        this.finished = true;
      }
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
    async test() {
      // console.log(name,title);
      console.log("haha");
      const res = await terasureOrder({
        type: 2,
        page: this.page,
      });
      this.page++;
      // 判断待开将 已开奖参数
      this.list_2.push(...res.data.data);
      this.loading = false;
      if (this.page > res.data.last_page) {
        this.finished = true;
      }
    },
  },
  created() {
    // 已开奖有bug
    // this.onLoad_2();
  },
};
</script>
<style scoped lang="less" src="./assets/idnex.rem.less">
</style>
<style scoped>
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
</style>
