<template>
  <div>
    <ProgrammingNav/>
    <section class="container main lang-pl flex">
        <header class="header">
            <h2></h2>
        </header>
        <p>Język</p>
        <p>IDE - Integrated Development Environment</p>
        <p>Framework - advenced work tools</p>
    </section>
  </div>
</template>

<script>
import ProgrammingNav from '@/components/ProgrammingNav.vue'

export default {
  name: 'Content',
  components: {
    ProgrammingNav
  }
}
</script>
