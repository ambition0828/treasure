<template>
  <div class="page">
    <van-nav-bar
      class="navBar-el"
      title="往期夺宝详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="diamondCount">
      <span>&nbsp;[第{{ list.id }}期] {{ list.title }}</span>
    </div>
    <div class="pencil">
      <img src="./assets/img/pencil.png" alt="" />
    </div>
    <div class="copies">
      <div class="left">
        <div class="number">
          <div class="count">{{ list.join_count }}</div>
          <span>参与份数</span>
        </div>
      </div>
      <div class="right">
        <div class="number">
          <div class="count">{{ list.open_num }}</div>
          <span>开奖份数</span>
        </div>
      </div>
    </div>
    <div class="drawNumber">
      <span class="left">开奖号码</span>
      <span class="right">{{ list.luck_sn }}</span>
    </div>
    <div class="currentTime">
      <div class="title">本期时间</div>
      <div class="currentTime_1">本期时间：{{ getTime(list.luck_time) }}</div>
      <div class="finishTime">完成时间：{{ getTime(list.reach_time) }}</div>
      <div class="startTime">开奖时间：{{ getTime(list.start_time) }}</div>
    </div>
    <div class="drawRule">
      <div class="title_1">开奖规则</div>
      <span
        >【(本期所有购买记录时间(按照时、分、秒、毫秒排列)相加
        第三方平台随机数(延迟1分钟数值)(可以点击查看))/参与份 数】取余数
        +10000001</span
      >
      <div class="title_2">计算流程</div>
      <span class="one"
        >1.本期所有购买记录时间(按照时、分、秒、毫秒排列)相加:
        190706227+190707037+190707830+190708141+1907 08700+190709719 +190714310
        +190716311 +19071711 0 + 190717222 +190720869+190722413 + 190724911 +
        190732499+190733364=2860746663</span
      >
      <span class="two"
        >2.获取第三方平台在 2023-02-15 19:08 分时实时随机数 :50024</span
      >
      <span class="three"
        >3.前两步数值相加和，与参与份数取余数，然后加上 1000
        0001，结果为:(2860746663+50024)%20+10000001=10000008
      </span>
      <div class="state">
        第三步中%符号是取余数计算(比如10除以3等于3还剩 【10-(3x3)=1】
        1，这个1就是余数，取 1)
      </div>
    </div>
    <div class="drawPlayer">
      <div class="title">中奖玩家</div>
      <div class="userDetail">
        <div class="avatar">
          <img :src="this.luck_list.avatar" alt="" />
        </div>
        <div class="detail">
          <div class="userName">{{ luck_list.nick_name }}</div>
          <div class="time">{{ getTime(luck_list.join_time) }}</div>
        </div>
        <div class="count_1">{{ luck_list.user_join_count }}份</div>
      </div>
      <div class="number">{{ luck_list.luck_sn }}</div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="drawPlayer" v-for="(item, index) in playerList" :key="index">
        <div class="title">夺宝玩家</div>
        <div class="userDetail">
          <div class="avatar">
            <img :src="item.avatar" alt="" />
          </div>
          <div class="detail">
            <div class="userName">{{item.nick_name}}</div>
            <div class="time">{{getTime(item.join_time)}}</div>
          </div>
          <div class="count_1">{{item.user_join_count}}份</div>
        </div>
        <div class="flexbileLayout"><div class="number" v-for="item_son,index in item.luck_sn_list" :key="index">{{item_son}}</div>
        
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { getTreasureDetail, getLuckUserInfo,getTreasurePlayer } from "@/api/treasure.js";
export default {
  data() {
    return {
      list: {},
      // 中奖列表
      luck_list: {},
      // 夺宝人列表
      playerList:[],
      // 夺宝人号码列表
      // luck_num_list: [],
      loading: false,
      finished: false,
      // 当前页
      page: 1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
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
    },
    async onLoad() {
      const res = await getTreasurePlayer({
        id: this.$route.query.id,
        page: this.page
      })
      console.log('当前页',res);
      this.page++
      this.playerList.push(...res.data.data)
      this.loading = false
      if (this.page > res.data.total) {
        this.finished = true
      }
    },
  },
  async created() {
    const res = await getTreasureDetail(this.$route.query.id);
    console.log(res);
    this.list = res.data;
    if(res.code == 3000) {
      this.$toast.fail(res.msg)
    } else if (res.code == 0) {
      this.$toast.fail(res.msg)
    }

    const res1 = await getLuckUserInfo(this.$route.query.id);
    console.log(res1);
    this.luck_list = res1.data;
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less">
</style>
<style scoped>
.navBar-el {
  border-radius: 0.7rem 0.7rem 0rem 0rem;
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
