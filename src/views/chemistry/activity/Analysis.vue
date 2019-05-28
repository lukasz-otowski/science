<template lang="html">
  <div>
    <ChemistryNav/>
    <section>
      <header><h2>Analiza chemiczna</h2></header>
      <h4>Analiza jakościowa</h4>
      <h4>Analiza ilościowa</h4>
    </section>
  </div>
</template>

<script>
import ChemistryNav from '@/components/ChemistryNav.vue'

export default {
  name:'Analysis',
  components:{
    ChemistryNav
  }
}
</script>

<style lang="css" scoped>
</style>
