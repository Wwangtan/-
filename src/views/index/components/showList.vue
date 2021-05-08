<template>
  <div class="showList">
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <router-link to='/cakeList'><img :src="item" @click="chooseEvent(index)" /></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import list1 from "@/assets/index/list1.jpg";
import list2 from "@/assets/index/list2.jpg";
import list3 from "@/assets/index/list3.jpg";
import list4 from "@/assets/index/list4.jpg";
import list5 from "@/assets/index/list5.png";
import list6 from "@/assets/index/list6.png";
import list7 from "@/assets/index/list7.jpg";
import list8 from "@/assets/index/list8.jpg";
import list9 from "@/assets/index/list9.jpg";
export default {
  data() {
    return {
      imgList: [list1, list2, list3, list4, list5, list6, list7, list8, list9],
    };
  },
  methods:{
    chooseEvent(index){
      this.$store.chooseIndex = index
      console.log(this.$store.chooseIndex,index)
    }
  }
};
</script>

<style  lange='less' scoped >
.showList {
  width: 100%;
  padding-top: 60px;
}

.showList ul li img {
  width: 100%;
  margin-top: 10px;
}
</style>