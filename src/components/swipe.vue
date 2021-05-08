<template>
  <div class="swip">
    <van-swipe class="my-swipe list" :autoplay="2000" indicator-color="white">
      <van-swipe-item>
        <div class="banner1" :style="ban1[0]"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="banner2" :style="ban1[1]"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="banner3" :style="ban1[2]"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="banner4" :style="ban1[3]"></div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import banner2 from "@/assets/index/banner1.jpg";
import banner1 from "@/assets/index/banner2.jpg";
import banner4 from "@/assets/index/banner3.jpg";
import banner3 from "@/assets/index/banner4.jpg";

export default {
  data() {
    return {
      ban1: [
        {
          background: `url(${banner1}) no-repeat`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100vw",
          height: "86vh",
        },
        {
          background: `url(${banner2}) no-repeat`,
          backgroundPosition: "center center",
          backgroundSize: "cover",

          width: "100vw",
          height: "86vh",
        },

        {
          background: `url(${banner3}) no-repeat`,
          backgroundPosition: "center center",
          backgroundSize: "cover",

          width: "100vw",
          height: "86vh",
        },
        {
          background: `url(${banner4}) no-repeat  `,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100vw",
          height: "86vh",
        },
      ],
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
};
</script>

<style scoped lang="less">
.swip {
  position: relative;
  top: 6vh;
  overflow: hidden;
  height: 86vh;
  width: 100%;
  .mint-swipe,
  .mint-swipe-items-wrap {
    overflow: hidden;
    height: 100%;
  }
}
</style>