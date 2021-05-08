<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">
          <div class="top"><img :src="botList[0].src" /></div>
          <div class="bot">{{ botList[0].dec }}</div>
        </router-link>
      </li>
      <li>
        <router-link to="/cakeList">
          <div class="top"><img :src="botList[1].src" /></div>
          <div class="bot">{{ botList[1].dec }}</div>
        </router-link>
      </li>
      <li>
        <router-link to="/shopCar">
          <div class="top"><img :src="botList[2].src" /></div>
          <div class="bot">{{ botList[2].dec }}</div>
        </router-link>
      </li>
      <li>
        <router-link to="/vCenter">
          <div class="top"><img :src="botList[3].src" /></div>
          <div class="bot">{{ botList[3].dec }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      botList: [
        {
          dec: "首页",
          src: require("@/assets/index/首页.png"),
        },
        {
          dec: "目录",
          src: require("@/assets/index/目录.png"),
        },
        {
          dec: "订单",
          src: require("@/assets/index/订单.png"),
        },
        {
          dec: "会员",
          src: require("@/assets/index/会员.png"),
        },
      ],
    };
  },
  mounted() {},
};
</script>


<style scoped lang='less'>
#nav {
  position: fixed;
  width: 100%;
  height: 8vh;
  z-index: 10;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      color: #b58c78;
      text-align: center;
      img{
        min-width: 20px;  
        max-width: 40px;
        width: 2vw;
      }
      a {
        color: #b58c78;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}
</style>