<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="往期夺宝"
      left-arrow
      @click-left="onClickLeft"
    />
    <div
      class="rectange"
      v-for="(item, index) in list"
      :key="index"
      @click="treasureDetail(item.id)"
    >
      <div class="diamond">
        <img :src="item.reward_icon" alt="" />
      </div>
      <div class="right-detail">
        <div class="diamondCount">{{item.title}}</div>
        <div class="number">中奖号码：{{item.luck_sn}}</div>
        <div class="userDraw">
          <span>中将用户：{{item.nick_name}}</span>
        </div>
        <div class="startTime">
          <span>开奖时间: {{ getTime(item.luck_time) }}</span>
        </div>
      </div>
    </div>
    <div class="transparent">
      没有更多了...
    </div>
  </div>
</template>
<script>
import {getHistoryTreasure} from '@/api/treasure.js'
import {} from '@/utils/getTime.js'
export default {
  data() {
    return {
      list: [],
      // 时间戳
      // timestamp: '',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    treasureDetail(id) {
      // console.log(id);
      this.$router.push({
        path: "/treasureDetail",
        query: {
          id: id
        }
      });
    },
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
    }
  },
  async created() {
    const res = await getHistoryTreasure()
    console.log(res);
    this.list = res.data.data
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
.navBar-el {
  border-radius: 0.7rem 0.7rem 0 0;
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