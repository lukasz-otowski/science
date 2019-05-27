<template>
  <div>
    <FrontEndNav/>
        <section class="container main lang-pl flex-vertical">
          <header class="header">
              <h2>JavaScript</h2>
          </header>
          <h3>Środowisko</h3>
          <ul>
      		  <li>Kompilator / interpreter</li>
      		  <li>node, npm, babel, ?es6</li>
            <li>garbage collection</li>
          </ul>

          <h3>Typ danej</h3>
      		<p>Prymitywny i referencyjny.</p>
      		<p>zmienna var, let, const</p>

          <li>typeof dana</li>
          <li>dana instanceof dana</li>

          <h3>Operator</h3>
          <ul>
            <li>= przypisanie wartości</li>
            <li>== porównanie wartości</li>
            <li>=== porównanie wartości i typów</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <h3>Instrukcja</h3>
      		<p>if, for</p>

          <h3>Funkcja</h3>
      		<p>new</p>

          <h3>regex</h3>
      		<p>Wyrażenia regularne</p>

          <h3>Obiekt</h3>
      		<p>Definiowanie, znajdywanie, usuwanie.</p>
      		<p>Operator "new"</p>
      		<p>Akcesor (accessor) get, set</p>
      		<p>Właściwości dynamiczne</p>
      		<p>Funckje są obiekatmi, funkcja jako obiekt</p>
      		<p>Konstruktor -&gt; własne właściwości</p>
      		<p>Prototyp -&gt; wspólne właściwości</p>
      		<p>Dziedziczenie</p>

          <h3>DOM</h3>
      		<p>Document Object Model</p>
          <ul>
            <li>document.write() <span class="jscomment">//write on site</span></li>
            <li>let get = document.get​Element​ById()<span class="jsocmment"></span></li>
            <li>let get = document.get​Elements​ByClass​Name()<span class="jsocmment"></span></li>
            <li>let get = document.get​Elements​ByName()<span class="jsocmment"></span></li>
            <li>let get = document.get​Elements​ByTagName()<span class="jsocmment"></span></li>
            <li><span class="jsocmment"></span></li>
            <li><span class="jsocmment"></span></li>
          </ul>
          <h3>Zdarzenie</h3>
      		<p>element.addEventListener()</p>

          <h3>AJAX</h3>
      		<p>Asynchronous JavaScript and XML</p>
            <ul>
              <li>Callbacks</li>
              <li>Promises</li>
              <li>Generators</li>
            </ul>
          <h3></h3>
      		<h3></h3>
      		<h3></h3>
        </section>
  </div>
</template>

<script>
import FrontEndNav from '@/components/FrontEndNav.vue'

export default {
  name: 'JavaScript',
  components: {
    FrontEndNav
  }
}
</script>

<style>
.jscomment{
  color:#999;
  padding-left: 10px;
}
</style>
