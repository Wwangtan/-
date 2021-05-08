<template>
  <div class="regs">
    <div class="inp">
      <p><input type="text" placeholder="请输入您的账号" v-model="username" /></p>
      <p><input type="password" placeholder="请输入您的密码" v-model="password" /></p>
      <div><span @click="goLogin">注册</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
      goLogin(){
          this.$store.commit('goRegs')
      }
  }
};
</script>
<style scoped lang='less'>
.regs {
  position: relative;
  top: 7vh;
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
      input:focus {
        border: 1px solid rgb(87, 45, 45);
        transition: 0.3s all ease-in-out;
      }
    }
  }
}
</style>