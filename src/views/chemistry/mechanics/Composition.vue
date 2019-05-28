<template lang="html">
  <div>
    <ChemistryNav/>
    <header><h2>Skład chemiczny</h2></header>
    <h4>Skład litosfery</h4>
    <ul>
      <li>46,1% - tlen</li>
      <li>28,2% - krzem</li>
      <li>8,23% - glin</li>
      <li>5,63% - żelazo</li>
      <li>4,15% - wapń</li>
      <li>2,36% - sód</li>
      <li>2,09% - potas</li>
      <li>2,33% - magnez</li>
      <li>Reszta, badzo małe ilości</li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import ChemistryNav from '@/components/ChemistryNav.vue'

export default {
  name: 'Composition',
  components:{
    ChemistryNav
  }
}
</script>

<style lang="css" scoped>

</style>
