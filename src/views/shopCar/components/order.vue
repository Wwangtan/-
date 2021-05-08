<template>
  <div class="order">
    <div
      v-for="(item, index) in orderList"
      :class="{ active: index == num }"
      :key="index"
      @click="clickEvent(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: ["我的订单", "门店订单"],
      num: 0,
    };
  },
  methods: {
    clickEvent(index) {
      this.num = index;
    },
  },
};
</script>


