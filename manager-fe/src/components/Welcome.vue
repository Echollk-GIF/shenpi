<template>
  <div class="welcome">
    <div>欢迎来到主界面</div>
    <!-- <el-button>去登录<el-button> -->
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped>
</style>