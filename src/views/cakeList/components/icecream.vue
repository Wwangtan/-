<template>
  <ul class="proList">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <li v-for="(item, index) in list" :key="index"  @click="goInfo(item)">
          <div><img v-lazy="item.proImg" alt="" /></div>
          <p class="name">{{ item.proName }} </p>
          <p class="name">{{item.tips}}</p>
          <p class="price">￥{{ item.proPrice }}</p>
          <p class="size">
            <span>{{ item.proWeight }}</span>
            <span>{{ item.proSize }}</span>
          </p>
          <p class="addCar"  @click.stop=""><img :src="item.addCar" @click="addEvent(item)"/></p>
        </li>
        <div class="noMore">更多商品请期待后续</div>
      </van-list>
    </van-pull-refresh>
  </ul>
</template>

<script>
import{onLoad,addEvent,onRefresh,goInfo} from  "@/views/cakeList/cakeList.js"

import bg1 from "@/assets/proList/list3.jpeg";
import addCar from "@/assets/proList/littleCar.png";


export default {
    data() {
    return {
      proInfo: {
        proImg: bg1,
        proName: "香草冰淇凌蛋糕",
        tips:'Vanilla Gelato  ',
        proPrice: "198.00",
        proWeight: "1磅:",
        proSize: "直径13cm ",
        addCar: addCar,
        proNum:1,
        check:true

      },
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad,
    onRefresh,
    addEvent,goInfo
  },
};
</script>
