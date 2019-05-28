<template lang="html">
  <div>
    <ChemistryNav/>
    <section class="container main lang-pl flex-vertical">
        <header class="header">
            <h2>Reakcja</h2>
        </header>
        <h4>Reakcje proste</h4>
        <p>Pojedyncze zerwanie lub powstanie jednego wiązania chemicznego</p>
        <h4>Reakcje złożone</h4>
        <h5>Chemia organiczna</h5>
        <ul>
          <li>Addycja</li>
          <li>Substytucja</li>
          <li>Eliminacja</li>
          <li>Przegrupowanie</li>
        </ul>
        <h5>Chemia nieorganiczna</h5>
        <ul>
          <li>Analiza</li>
          <li>Synteza</li>
          <li>Wymiana</li>
          <li>Podwójna wymiana</li>
        </ul>
    </section>
  </div>
</template>

<script>
import ChemistryNav from '@/components/ChemistryNav.vue'

export default {
  name:'Reaction',
  components:{
    ChemistryNav
  }
}
</script>

<style lang="css" scoped>
</style>
