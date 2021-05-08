<template>
  <div class="hNav">
    <!-- 定位 -->
    <div class="dingwei">
      <img :src="dingwei" />
      <span is-link @click="showPopup">{{ city }}</span>
      <van-popup
        v-model="show"
        id="overlay"
        :style="{ height: '10%', width: '90%', top: '20vh' }"
      >
        <p>请选择城市</p>
        <div>
          <span
            v-for="(item, index) in cityList"
            :key="index"
            @click="chooseCity(item)"
            >{{ item }}</span
          >
        </div>
      </van-popup>
    </div>
    <!-- logo -->
    <div class="logo">
      <img :src="logoImg" />
    </div>
    <!-- 购物车 -->
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
import dingwei from "@/assets/index/dingwei.png";
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      logoImg: logoImg,
      shopCar: shopCar,
      dingwei: dingwei,
      show: false,
      overlay: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    chooseCity(item) {
      this.show = false;
      this.$store.state.city = item;
    },
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
  .dingwei {
    display: flex;
    align-items: center;
    font-size: 16px;
    #overlay {
      border-top: 10px solid salmon;
      padding-top: 10px;
      color: #8f5451;
      p {
        font-size: 22px;
        padding-bottom: 10px;
      }
      div {
        span {
          font-size: 16px;
          padding: 20px;
        }
      }
    }
  }
  a {
    text-decoration: none;
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