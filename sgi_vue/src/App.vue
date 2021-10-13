   
<template>

  <div id="wrapper">
  <div id="supergraphic">
  </div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/" id="logo">
      <img src="../assets/images/Logo.png" alt="Bosch Logo" width="127" height="28">

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    <ul class="navigation">
      <li class="nav_brand">
        <router-link to="/" class="nav_item"><strong>Home</strong></router-link>
      </li>
      <li class="nav_brand">
        <router-link to="/Instrucoes" class="nav_item"><strong>Inspeções</strong></router-link>
      </li>
      <li class="nav_brand">
        <router-link to="/Calendarios" class="nav_item"><strong>Calendários</strong></router-link>
      </li>
      <li class="nav_brand">
        <router-link to="/Documentos" class="nav_item"><strong>Documentos</strong></router-link>
      </li>

      <li class="navbar-menu">
      </li>
    </ul>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
<style src='./Home.css'>
</style>
