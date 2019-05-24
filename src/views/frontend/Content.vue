<template>
  <div>
    <FrontEndNav/>
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
import FrontEndNav from '@/components/FrontEndNav.vue'

export default {
  name: 'Content',
  components: {
    FrontEndNav
  }
}
</script>
