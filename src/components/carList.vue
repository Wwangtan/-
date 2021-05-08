<template>
  <div class="carList">
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
      <!-- 购物车   -->
      <div class="car" @click="clearList">
        <router-link to="/carList">
          <img :src="delImg" />
        </router-link>
      </div>
      <router-view />
    </div>
    <div class="content">
      <!-- 购物车没有东西 -->
      <div v-if="show" class="null">
        <div class="shopBag">
          <img :src="shopBag" />
        </div>
        <p>您的购物车空空如也</p>
        <router-link to="/cakeList">去购物>></router-link>
      </div>
      <!-- 购物车有内容 -->
      <div v-else>
        <div class="full">
          <ul>
            <li v-for="(item, index) in shopList" :key="index">
              <img :src="item.proImg" alt="" />
              <p class="proInfo">
                {{ item.tips }} {{ item.proName }} <br />
                {{ item.proWeight }}{{ item.proSize }} <br />
                ￥{{ item.proPrice }}
              </p>
              <div class="count">
                <div class="sub" @click="sub(item)">-</div>
                <div class="quantity">{{ item.proNum }}</div>
                <div class="add" @click="add(item)">+</div>
              </div>
              <div class="check" @click="Ocheck(index)">
                <img :src="choosed" v-show="item.check" />
              </div>
            </li>
            <div class="box"></div>
          </ul>
        </div>
        <!-- 结算 -->
        <div class="bot">
          <div>
            <p>
              <i @click="chooseEvent">
                <img v-if="gChoose" :src="choosed" />
                <img v-else :src="Nchooose" />
              </i>
              <b>商品总价:￥{{ tPrice }}.00</b>
            </p>
          </div>
          <button>去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import delImg from "@/assets/垃圾桶.png";
import shopBag from "@/assets/购物篮.png";
import choosed from "@/assets/选中.png";
import Nchooose from "@/assets/不选.png";
import goBack from "@/assets/proList/zuo.png";
import Vue from "vue";
import { Popup, Toast } from "vant";
import { Dialog } from "vant";

// 全局注册
Vue.use(Dialog);

Vue.use(Popup);
export default {
  data() {
    return {
      text: "购物车",
      delImg: delImg,
      goBack: goBack,
      shopBag: shopBag,
      show: true,
      shopList: [],
      tPrice: 0,
      choosed: choosed,
      Nchooose: Nchooose,
      gChoose: true,
      check: true,
    };
  },
  mounted() {
    // 获取新的购物车列表
    this.jugeEvent();
    // 计算总价
    this.totalPrice();
  },
  updated() {
    this.shopList.length > 0 ? (this.show = false) : (this.show = true);
  },
  methods: {
    Ocheck(index) {
      let flag;
      this.shopList[index].check = !this.shopList[index].check;
      for (let i in this.shopList) {
        if (this.shopList[i].check == false) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      this.gChoose = flag;
      this.totalPrice();
    },
    // 清空购物车：
    clearList() {
      if (this.shopList.length > 0) {
        Dialog.confirm({
          message: "是否清空购物车",
        })
          .then(() => {
            // 清空仓库数组
            this.$store.state.carProList = [];
            // 清空当前页面的购物车列表
            this.shopList = [];
            // 更改窗口
            this.show = false;
            // 仓库的计数改为0
            this.$store.state.proCount = 0;
            // 总价为 0
            this.tPrice = 0;
            // 更改选中的状态
            this.gChoose = false;
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Dialog.alert({
          message: "您还没有选中的商品",
        });
      }
    },
    // 选择
    jugeEvent() {
      // 赋值
      this.shopList = [...this.$store.state.carProList];
      this.shopList.length > 0 ? (this.show = false) : (this.show = true);
    },
    // 计算总价
    totalPrice() {
      this.tPrice = 0;
      for (let i in this.shopList) {
        if (this.shopList[i].check === true) {
          this.tPrice +=
            parseInt(this.shopList[i].proPrice) * this.shopList[i].proNum;
        }
      }
    },
    // 是否选中商品
    chooseEvent() {
      this.gChoose = !this.gChoose;
      this.gChoose > 0 ? this.tPrice : (this.tPrice = 0);
      this.allCheck(this.gChoose);
      this.totalPrice();

    },
    //加减商品
    sub(item) {
      if (item.proNum > 1) {
        item.proNum -= 1;
      }
      this.tPrice -= parseInt(item.proPrice);
    },
    add(item) {
      item.proNum += 1;
      this.tPrice += parseInt(item.proPrice);
    },
    // 全选
    allCheck(flag) {
      if (flag) {
        for (let i in this.shopList) {
          this.shopList[i].check = flag;
        }
      } else {
        for (let i in this.shopList) {
          this.shopList[i].check = flag;
        }
      }
    },
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
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
  padding-bottom: 1vh;
  border-bottom: 2px solid rgb(231, 229, 229);
  div {
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
    a {
      img {
        width: 6vw;
      }
    }
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

.content {
  width: 100%;
  position: relative;
  top: 7vh;
}
.null {
  text-align: center;
  font-size: 12px;
  .shopBag {
    padding-top: 100px;
    img {
      width: 15vw;
    }
  }
  p {
    margin: 10px 0;
  }
  color: #a36663;
  a {
    color: #a36663;
  }
}
.full {
  ul {
    width: 100vw;
    overflow: hidden;
    .box {
      height: 10vh;
      width: 100%;
    }
    li {
      height: 12vh;
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      background-color: rgb(233, 226, 226);
      box-shadow: -1px 2px 5px #888888;
      position: relative;
      .check {
        width: 5vw;
        height: 5vw;
        border: 2px solid #ccc;
        margin-left: 10px;
        position: absolute;
        right: 7vw;
        bottom: 7vh;
      }
      .proInfo {
        position: absolute;
        left: 120px;
        font-size: 12px;
        color: #9a5b57;
        line-height: 4vh;
      }
      img {
        float: left;
        height: 100%;
        margin-right: 10px;
      }
      .count {
        display: flex;
        align-items: center;
        position: absolute;
        right: 15vw;
        bottom: 2vh;
        .quantity {
          width: 6vw;
          margin: 0 10px;
          text-align: center;
          font-size: 11px;
          color: #a36663;
          border: 1px solid #a366a3;
          padding: 2px 5px;
        }
        .add,
        .sub {
          width: 5vw;
          height: 5vw;
          font-size: 26px;
          text-align: center;
          line-height: 5vw;
          color: #fff;
          background-color: #a36663;
        }
      }
    }
  }
}
.bot {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 8vh;
  background-color: #e5e6e8;
  p {
    line-height: 8vh;
    padding-left: 40px;
    color: #a36663;
    font-size: 12px;
    i {
      border: 2px solid #8c8989;
      width: 13px;
      height: 13px;
      display: block;
      position: absolute;
      left: 10px;
      top: 35%;
      text-align: center;
      img {
        width: 25px;
        position: absolute;
        left: -4px;
        top: -6px;
      }
    }
  }
  button {
    position: absolute;
    height: 8vh;
    width: 20vw;
    right: 0;
    top: 0;
    border: none;
    background-color: #492321;
    color: @theme-bg;
    font-size: 12px;
  }
}
</style>