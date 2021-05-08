<template>
  <div>
    <HeadList ></HeadList>
    <!-- v-if=" 0 == index" -->
    <AllList v-if="0 == this.$store.state.chooseIndex"></AllList>
    <Berries v-if="1 == this.$store.state.chooseIndex"></Berries>
    <Icecream v-if="2 == this.$store.state.chooseIndex"></Icecream>
    <Cartoon v-if="3 == this.$store.state.chooseIndex"></Cartoon>
    <Gift v-if="4 == this.$store.state.chooseIndex"></Gift>
    <Mousse v-if="5 == this.$store.state.chooseIndex"></Mousse>
    <Cream v-if="6 == this.$store.state.chooseIndex"></Cream>
    <Cheese v-if="7 == this.$store.state.chooseIndex"></Cheese>
    <Chocolate v-if="8 == this.$store.state.chooseIndex"></Chocolate>
  </div>
</template>

<script>
import HeadList from "@/views/cakeList/components/headList";
import AllList from "./all";
import Berries from "./berries";
import Icecream from "./icecream.vue";
import Cartoon from "./cartoon.vue";
import Gift from "./gift.vue";
import Mousse from "./mousse.vue";
import Cream from "./cream.vue";
import Cheese from "./cheese.vue";
import Chocolate from "./chocolate.vue";

export default {
  components: {
    AllList,
    Berries,
    HeadList,
    Icecream,
    Cartoon,
    Gift,
    Mousse,
    Cream,
    Cheese,
    Chocolate,
  },
  mounted(){
    
  },
};
</script>