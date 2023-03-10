<template>
  <div class="page flex-col">
    <div class="box_1 flex-col">
      <div class="group_1 flex-col">
        <div class="box_2 flex-col">
          <div class="block_1 flex-row">
            <div class="block_2 flex-col">
              <div class="image-wrapper_1 flex-col">
                <img
                  class="image_1"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng5ef07507dc537111bd1dfdf6c0f69987791181912ab490c81d094c80e47f6f88.png"
                />
              </div>
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5ef07507dc537111bd1dfdf6c0f69987791181912ab490c81d094c80e47f6f88.png"
              />
            </div>
            <div class="image_3"></div>
            <div class="image-wrapper_2 flex-col">
              <div class="image_4"></div>
            </div>
            <!-- <span class="text_1">LUCKY</span> -->
            <img class="text_1" src="./assets/img/lucky.png" alt="" />
            <img
              class="diamond-treasure"
              src="./assets/img/zuanshiduobao.png"
              alt=""
            />
            <img
              class="image_5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngb4780fbea228130aceeb992f5c6655d5feac3ff6573236e71d1215bf8c41e2b5.png"
            />
          </div>
          <div class="image-wrapper_3 flex-row justify-between">
            <img
              class="image_6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6b56ccae015f80fc51fc7ac42ab39eeb272d61acca1ddf623802a36a085a380d.png"
            />
            <img
              class="image_7"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8e7203516fb3b28985558945bb5ae9d962351af0d79dc32d74a871cad2e102b8.png"
            />
          </div>
          <img
            class="image_8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngfca3da7a39de32922faece0bf380929c7642892ae70174dc2f33b076ed4539aa.png"
          />
          <!-- 动态数据 -->
          <div class="treasure">
            <!-- 遍历数据 -->
            <div class="rectange" v-for="(item,index) in 5" :key="index" @click="homeSnatch">
              <div class="left">
                <div class="top">
                  <div class="status">
                    <span class="text">据开抢</span>
                  </div>
                  <div class="count">
                    <span class="text_1">差3份</span>
                  </div>
                </div>
                <div class="bottom">
                  <img src="./assets/img/diamond.png" alt="" />
                </div>
              </div>
              <div class="right">
                <div class="right_top">
                  <span>20万钻石</span>
                </div>
                <!-- 进度条 -->
                <div class="right_middle">
                  <div class="progress-bar">
                    <span
                      class="progress"
                      :style="{ width: progress + '%' }"
                    ></span>
                  </div>
                </div>
                <div class="right_bottom">
                  <div class="percentage">
                    <span>70%</span>
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
          <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/homePage">首页</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
      // 进度条百分比
      progress: 70,
      active: 0

    };
  },
  methods: {
    homeSnatch() {
      this.$router.push('/homeSnatch')
    }, 
    homeRanking() {
      this.$router.push('/homeRanking')
    }
  },
};
</script>
<style scoped lang="less" src="./assets/index.rem.less" />