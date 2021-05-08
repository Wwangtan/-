<template>
  <div>
      <hNav></hNav>
      <topNav></topNav>
      <Swipe></Swipe>
      <showList></showList>
      <info></info>
  </div>
</template>



<script>
import Swipe from "@/components/swipe.vue";
import hNav from "@/components/nav";
import index from "@/views/index/index";
import topNav from "@/views/index/components/topNav";
import showList from '@/views/index/components/showList'
import info from '@/views/index/components/info'

export default {
 
  components: {
    Swipe,
    hNav,
    index,
    topNav,showList,info
  },
  
};
</script>

