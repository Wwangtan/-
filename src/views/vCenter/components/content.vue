<template>
  <div class="content">
    <login v-if="this.$store.state.loginShow"></login>
    <regs v-else></regs>
  </div>
</template>

<script>
import login from "@/views/vCenter/components/login";
import regs from "@/views/vCenter/components/regs";

export default {
  components: {
    login,regs
  },
};
</script>

<style  lang='less'>
.content {
  position: relative;
  top: 7vh;
  width: 100%;
  height: 50vh;
  .login {
  position: relative;
  width: 100%;
  height: 50vh;
  color: #b58c78;
  .inp {
    text-align: center;
    padding: 10px 4vw;
    div {
      margin-top: 8vh;
      span {
        display: block;
        margin: 0 auto;
        width: 30vw;
        height: 4vh;
        padding: 1vh 2vw;
        line-height: 4vh;
        border: 1px solid pink;
        color: #fff;
        background-color: #b58c78;
      }
    }
    p {
      margin: 10px 0;
      position: relative;
      width: 100%;
      input {
        height: 40px;
        outline: none;
        padding-left: 20px;
        outline: none;
        border: 1px solid #ccc;
        font-size: 12px;
        width: 80%;
      }
      .regs {
        font-size: 0.5rem;
        position: absolute;
        left: 10vw;
        top: 0;
        color: #b58c78;
      }
      input:focus {
        border: 1px solid rgb(87, 45, 45);
        transition: 0.3s all ease-in-out;
      }
    }
  }
}
}

</style>