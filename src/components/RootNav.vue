<template>
  <header class="header-main flex-vertical" style="border: none; background: none;">
    <h1><span class="lang-en">Science</span><span class="lang-pl">Nauka</span></h1>
    <nav class="nav-main">
      <ul class="flex-vertical">
        <!-- <li><router-link to="/">Root</router-link></li> -->
        <li><router-link to="/chemistry">Chemia</router-link></li>
        <li><router-link to="/programming">Programowanie</router-link></li>
        <li><router-link to="/front-end">Front-end</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'RootNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
header {
    text-align: center;
    margin: 0 auto;
}
nav {

    font-size: 30px;
}
.nav-main {
    display: flex;
    justify-content: space-evenly;
}
.nav-main li,
body>header>nav>li {
    border-width: 5px;
    padding-left: 20px;
    padding-right: 20px;
}
.nav-main li:hover,
body>header>nav>li:hover {
    border-width: 5px;
    padding-left: 20px;
    padding-right: 20px;
}
.nav-main li:hover li{
  padding-left:20px;
  padding-right:20px;
}
.header-main h1 {
    letter-spacing: 5px;
    font-size: 45px;
}
</style>
