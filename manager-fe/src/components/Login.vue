<template>
  <div>
    <div>Login</div>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  },
}
</script>

<style>
</style>