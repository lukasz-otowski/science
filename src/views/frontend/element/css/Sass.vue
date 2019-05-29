<template lang="html">
  <div>
    <FrontEndNav/>
    <section>
      <header><h2>SASS</h2></header>
      <h4>Instalacja</h4>
      <ul>
        <li>npm install -g sass</li>
        <li>choco install sass</li>
        <li>brew install sass/sass/sass</li>
      </ul>
      <h4>Użytkowanie</h4>
      <h5>Kompilacja</h5>
      <ul>
        <li><span style="font-family:monospace; font-size:15px;">sass input.scss folder/output.css </span>/* skompilowanie wybranego pliku do wybranego miejsca.*/</li>
        <li><span style="font-family:monospace; font-size:15px;">sass --watch input.sass folder/output.css </span>/* automatyczne kompilowanie wybranego pliku */</li>
        <li><span style="font-family:monospace; font-size:15px;">sass --watch app/sass:public/stylesheets</span><span>/* nasłuchiwanie i kompilowanie wybranych folderów */</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
import FrontEndNav from '@/components/FrontEndNav.vue'

export default {
  name:'Sass',
  components:{
    FrontEndNav
  }
}
</script>

<style lang="css" scoped>
</style>
