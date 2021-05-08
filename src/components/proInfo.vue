<template>
  <div class="info">
    <div class="top">
      <div class="goback">
        <router-link to="/cakeList"
          ><img src="../assets/proList/zuo.png"
        /></router-link>
      </div>
      <img :src="proInfo.proImg" />
    </div>
    <div class="content">
      <p class="price">￥{{ proInfo.proPrice }}</p>
      <div class="name">
        <p>
          <span>{{ proInfo.proName }}</span
          >:入口时嫩嫩的,香气扑鼻,滑滑的栗子顺着奶油一下子就吞了进去,甜丝丝的奶油丝毫不滑腻
        </p>
      </div>
      <div class="send">
        <span>快递:免运费</span>
        <span>月销量：{{ proSell }}</span>
        <span>四川成都</span>
      </div>
      <div class="serve">
        <span>服务</span>
        <p>假一赔四</p>
        <p>上门取货</p>
        <p>急速退款</p>
      </div>
    </div>
    <div class="bot">
      <div class="left">
        <div class="li" v-for="(item, index) in shopInfo" :key="index">
          <div>
            <img :src="item.img" @click="collect(index)"/>
          </div>
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="rgiht">
        <div class="addCar" @click='addEvent'>加入购物车</div>
        <div class="rightBuy">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import shop from "@/assets/店铺.png";
import serve from "@/assets/客服.png";
import shou from "@/assets/收藏.png";
import shou1 from "@/assets/收藏1.png";

export default {
  data() {
    return {
      proInfo: {},
      shou1:shou1,
      shopInfo: [
        {
          img: shop,
          text: "店铺",
        },
        {
          img: serve,
          text: "客服",
        },
        {
          img: shou,
          text: "收藏",
        },
      ],
    };
  },
  methods: {
    collect(index){
        index==2?this.shopInfo[2].img == shou1? this.shopInfo[2].img = shou:this.shopInfo[2].img = shou1:'';
    },
    addEvent(){
            // 将添加到购物车的内容加到数组中去
    this.$store.state.proCount += 1
        // 调用仓库的去重方法判断增加list 数量
    this.$store.commit('carProListAdd', this.proInfo)
    }
  },
  mounted() {
    this.proInfo = this.$route.params.item;
  },
  computed: {
    proSell() {
      return Math.ceil(Math.random() * 50 + 40);
    },
  },
};
</script>

<style scoped lang="less">
.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@font-color: #999;
.info {
     background-color: rgb(236, 232, 232);
  .top {
    .goback {
      width: 40px;
      height: 40px;
      position: fixed;
    }
    img {
      display: block;
      width: 100%;
    }
  }

  .content {
   padding-bottom: 10vh;
    div,
    p {
      padding: 5px;
    }
    .price {
      color: red;
      font-size: 20px;
      font-weight: 700;
    }
    .name {
      color: rgb(119, 117, 117);
      text-indent: 2em;
      p {
        font-size: 14px;
        span {
          font-size: 16px;
        }
      }
    }
    .send {
      .display;
      font-size: 12px;
      color: @font-color;
      margin: 10px 0;
      span {
        padding: 2px 5px;
      }
      span:hover {
        background-color: tomato;
        transition: 0.3s all;
        color: white;
      }
    }
    .serve {
      .display;
      span {
        font-size: 12px;
        color: @font-color;
      }
    }
  }
  .bot {
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100%;
    background: rgb(218, 211, 211);
    .display;
    .left {
      width: 40%;
      height: 100%;
      .display;
      .li {
          text-align: center;
          img {
            width: 20px;
        }
        font-size: 14px;
        color: @font-color;
      }
    }
    .rgiht {
      width: 60%;
      height: 100%;
      .display;
      div{
          width: 50%;
          height: 100%;
         .display;
      }
      .addCar{
          background-color: rgb(228, 40, 40);
          color: white;
      }
      .rightBuy{
          background-color: orange;
          color: rgb(134, 46, 19);
      }
    }
  }
}
</style>