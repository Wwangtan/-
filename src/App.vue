<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from "./views/home";
export default {
  components: {
    home,
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
