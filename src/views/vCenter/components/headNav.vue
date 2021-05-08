<template>
  <div class="hNav">
    <!-- 定位 -->
    <div class="dingwei">
      <router-link to='/'>
          <img :src="zuo"/>
      </router-link>
    </div>
    <!-- logo -->
    <div class="logo">
      <img :src="logoImg" />
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
import logoImg from "@/assets/index/logo.png";
import shopCar from "@/assets/index/car.png";
import zuo from '@/assets/proList/zuo.png'

export default {
  data() {
    return {
      logoImg: logoImg,
      shopCar: shopCar,
      zuo: zuo,
    };
  },
  computed: mapState({
    city: "city",
    cityList: "cityList",
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
  padding-top: 1vh;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: @theme-bg;
  z-index: 10;
  border-bottom: 1px solid #ddd;
  .dingwei {
      img{
          width: 5vw;
      }
  }
  .logo img {
    width: 15vw;
    max-width: 220px;
    min-width: 120px;
  }
  .car {
    position: relative;
    span {
      position: absolute;
      top: -5px;
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