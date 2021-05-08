<template>
  <div class="hNav">
    <!-- 后退 -->
    <div>
      <router-link class="goBack" to="/">
        <img :src="goBack" />
      </router-link>
    </div>
    <!-- logo -->
    <div class="text">
      {{ text }}
    </div>
    <!-- 购物车 -->
    <div class="car">
      <router-link  to="/carList">
        <img :src="shopCar" />
        <span>{{ proCount }}</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import shopCar from "@/assets/index/car.png";
import goBack from "@/assets/proList/zuo.png";
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      text: "蛋糕名录",
      shopCar: shopCar,
      goBack: goBack,
    };
  },
  computed: mapState({
    proCount: "proCount",
  }),
};
</script>

<style scoped lang="less">
@theme-bg: #fff;
.hNav {
  position: fixed;
  top: 0;
  color: #333;
  padding-top: 50px;
  width: 90%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @theme-bg;
  z-index: 10;
  padding: 0 5vw;
  border-bottom: 2px solid #ddd;
  div{
    padding-top: 15px;
  }
  .goBack {
    img {
      height: 3vh;
    }
  }
  .text {
    padding: 0;
    font-size: 100%;
    color: #a36663;
  }
  a {
    text-decoration: none;
  }
  .car {
    position: relative;
    span {
      position: absolute;
      top: 10px;
      right: -5px;
      border: 1px solid #fff;
      background: #8f5451;
      color: #fff;
      height: 17px;
      line-height: 18px;
      padding: 0 5px;
      border-radius: 50%;
      transform: scale(0.8);
      font-size: 12px;
    }
  }
}
</style>