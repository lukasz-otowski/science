<template>
  <header class="header-main">
    <h1><span class="lang-en">Front-end</span><span class="lang-pl">Front-end</span></h1>
    <nav class="nav-main">
      <ul>
        <li>Element<ul>
          <li><a href="#">Front-end</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a><ul>
            <li><router-link to="/front-end/sass">SASS</router-link></li></ul></li>
          <li><router-link to="/front-end/javascript">JavaScript</router-link></li></ul></li>
        <li>Aktywność<ul>
          </ul></li>
        <li>Mechanizm<ul>
          <li><a href="framework.html">framework</a><ul>
            <li><router-link to="/front-end/vue">vue</router-link></li></ul></li>
          <li><a href="pwa.html">PWA</a></li></ul></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'FrontEndNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
