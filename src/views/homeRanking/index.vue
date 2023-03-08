<template>
  <div class="page">
    <div class="ranking-box">

    </div>
    <div class="list-style">
      <div class="dalilyRanking domEl">日榜</div>
      <div class="weeklyRanking domEl" @click="weeklyRanking">周榜</div>
      <div class="monthlyRanking domEl">月榜</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    weeklyRanking() {
      // const domEl = document.querySelectorAll(".domEl")
  }
  },
  mounted: {
    
  }
}
</script>
<style scoped lang="less" src="./assets/index.rem.less">

</style>