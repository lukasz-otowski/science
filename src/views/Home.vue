<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
     Nav
  }
}
</script>
