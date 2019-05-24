<template>
  <div>
    <CoreFrontEndNav/>
    <section class="container main lang-pl flex">
        <header class="header">
            <h2></h2>
        </header>
        <p>HTML - paragraf</p>
        <p>CSS - selektor - właściwość - wartość</p>
        <p>javascript - typy danych - instrukcje - funkcje</p>
    </section>
  </div>
</template>

<script>
import CoreFrontEndNav from '@/components/CoreFrontEndNav.vue'

export default {
  name: 'Element',
  components: {
    CoreFrontEndNav
  }
}
</script>
