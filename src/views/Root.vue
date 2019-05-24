<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavRoot/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavRoot from '@/components/NavRoot.vue'

export default {
  name: 'Home',
  components: {
     NavRoot
  }
}
</script>
