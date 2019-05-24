<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RootNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import RootNav from '@/components/RootNav.vue'

export default {
  name: 'Root',
  components: {
     RootNav
  }
}
</script>

<style scoped media="screen">
  img {
    display: block;
    margin: 0 auto;
  }
</style>
