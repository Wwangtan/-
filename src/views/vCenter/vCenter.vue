<template>
  <div>
    <bNav></bNav>
    <headNav></headNav>
    <cont></cont> 
  </div>
</template>

    
<script>

import bNav from "@/components/nav";
import headNav from "@/views/vCenter/components/headNav";
import cont from "@/views/vCenter/components/content";


export default {
  components: {
    bNav,headNav,cont
  },
};


</script>