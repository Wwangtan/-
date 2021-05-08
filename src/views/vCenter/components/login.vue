<template>
  <div class="login">
    <div class="inp">
      <h3>请先登录</h3>
      <p><input type="text" placeholder="请输入您的账号" /></p>
      <p><input type="password" placeholder="请输入您的密码" /></p>
      <p><span class="regs" @click="goRegs">还没有账号？立即注册</span></p>
      <div><span>登录</span></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goRegs() {
        this.$store.commit('goRegs')
    },
  },
};
</script>