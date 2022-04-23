<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app',
  mounted () {
    this.$storage.setItem('userInfo', { age: 30, name: 'jacl' })
    console.log('user=>', this.$storage.getItem('userInfo'))
    this.$storage.clearItem('name')
    this.$storage.clearAll()
  },

}
</script>


<style>
</style>
