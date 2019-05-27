<template>
  <header class="header-main">
    <h1 class=""><span class="lang-en">Chemistry</span><span class="lang-pl">Chemia</span></h1>
    <nav class="nav-main">
      <ul class="lang-pl">
        <li>Element<ul>
          <li><router-link to="/chemistry/atom">atom</router-link></li>
        	<li><router-link to="/chemistry/element">pierwiastek</router-link></li>
          <li><router-link href="#">laboratorium</router-link></li></ul></li>
        <li>Aktywność<ul>
          <li><router-link href="reaction.html">reakcja</router-link></li>
          <li><router-link href="#">badanie</router-link></li></ul></li>
        <li>mechanizm<ul>
          <li><router-link href="bond.html">wiązanie</router-link></li>
        	<li><router-link href="compound.html">związek</router-link></li>
        	<li><router-link href="inorganic.html">martwość</router-link></li>
          <li><router-link href="organic.html">organiczność</router-link></li>
        	<li><router-link href="electrochemistry.html">elektrochemia</router-link></li></ul></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'ChemistryNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
