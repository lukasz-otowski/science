<template>
  <div>
    <ul class="lang-pl">
      <li>Element<ul>
        <li><a href="index.html">atom</a></li>
          <li><a href="element.html">pierwiastek</a></li>
          <li><a href="#">laboratorium</a></li></ul></li>
      <li>Aktywność<ul>
        <li><a href="reaction.html">reakcja</a></li>
        <li><a href="#">badanie</a></li></ul></li>
      <li>mechanizm<ul>
        <li><a href="bond.html">wiązanie</a></li>
          <li><a href="compound.html">związek</a></li>
          <li><a href="inorganic.html">martwość</a></li>
      <li><a href="organic.html">organiczność</a></li>
          <li><a href="electrochemistry.html">elektrochemia</a></li></ul></li>
    </ul>
    <ChemistryElement/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChemistryElement from '@/components/chemistry/element.vue'

export default {
  name: 'Chemistry',
  components: {
    ChemistryElement
  }
}
</script>
