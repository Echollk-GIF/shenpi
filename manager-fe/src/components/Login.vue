<template>
  <div>
    <div>Login</div>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted () {
    // this.$request({
    //   method: 'get',
    //   url: '/login',
    //   data: {
    //     name: 'jack'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // })
    this.$request.get('/login', { name: 'jack' }, { mock: true, loading: true }).then((res) => {
      console.log(res)
    })
  },
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  },
}
</script>

<style>
</style>