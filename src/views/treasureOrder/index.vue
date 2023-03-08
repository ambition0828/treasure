<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="夺宝订单"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <van-tabs class="tab-el" v-model="active" sticky>
      <van-tab title="待开奖">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- 渲染位置 -->
          <div class="rectange" v-for="(item, index) in 16" :key="index" @click="treasureOrderDetail">
            <div class="left-img">
              <img src="./assets/img/diamond.png" alt="" />
            </div>
            <div class="right-detail">
              <span class="diamond-count">10万钻石</span>
              <!-- 进度条 -->
              <div class="progress-box">
                <div class="progress-bar">
                  <span
                    class="progress"
                    :style="{ width: progress + '%' }"
                  ></span>
                </div>
                <span class="right-progress">{{ progress }}%</span>
              </div>
              <div class="purchase">
                <span>购买时间：2023-02-15-18：07</span>
              </div>
              <div class="surplus">
                <span>还差23份开奖</span>
              </div>
              <div class="count">
                <span id="count">数量：2</span>
                <div class="total">
                  合计：<span id="diamond">1000钻石</span>
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
          @load="onLoad"
        >
        <div class="rectange" v-for="(item, index) in 16" :key="index" @click="treasureOrderDetail">
          <div class="left-img">
            <img src="./assets/img/diamond.png" alt="" />
          </div>
          <div class="right-detail">
            <span class="diamond-count">10万钻石</span>
            <!-- 进度条 -->
            <div class="progress-box">
              <div class="progress-bar">
                <span
                  class="progress"
                  :style="{ width: progress + '%' }"
                ></span>
              </div>
              <span class="right-progress">{{ progress }}%</span>
            </div>
            <div class="purchase">
              <span>购买时间：2023-02-15-18：07</span>
            </div>
            <div class="surplus">
              <!-- <span>还差23份开奖</span> -->
              <span class="number">中奖号：10000002</span>
            </div>
            <div class="count">
              <span id="count">数量：2</span>
              <div class="total">合计：<span id="diamond">1000钻石</span></div>
            </div>
          </div>
        </div>
        </van-list>
        
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      progress: 70,
      // list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onLoad() {
      this.loading = false;
      this.finished = true;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }, 
    treasureOrderDetail() {
      this.$router.push('/treasureOrderDetail')
    }
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
