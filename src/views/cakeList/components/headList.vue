<template>
  <ul class="headList">
    <li
      :class="{ bot: num == index }"
      v-for="(item, index) in styleList"
      :key="index"
      @click="activeEvent(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      styleList: [
        "全部",
        "草莓系列",
        "冰淇凌系列",
        "卡通系列",
        "礼盒系列",
        "慕斯系列",
        "乳脂奶油蛋糕",
        "芝士蛋糕",
        "巧克力蛋糕",
      ],
      num: 0,
    };
  },
  methods: {
    activeEvent(index) {
      this.num = index;
      this.$store.commit('chooseIndex',index)
    },
  },
};
</script>