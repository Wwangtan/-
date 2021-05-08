<template>
  <div>
    <hNav></hNav>
    <bNav></bNav>
    <order></order>
    <cont></cont>
  </div>
</template>

<script>
import bNav from "@/components/nav";
import hNav from './components/headNav'
import order from './components/order'
import cont from './components/content'
export default {
  components: {
    bNav,hNav,order,cont
  },
};
</script>

<style  lang="less">
.order {
  width: 100%;
  position: relative;
  top: 6vh;
  color: #a36663;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #ddd;
  div {
    padding: 1vh 5vw;
    border: 1px solid #ddd;
  }
  .active {
    border: 1px solid #a36663;
    position: relative;
  }
  .active::after {
    display: block;
    content: "";
    height: 100% + 5px;
    width: 12px;
    background-color: #a36663;
    position: absolute;
    right: -8px;
    top: -1px;
  } 
}
</style>