<template>
  <div id="app">
    <top-header class="log"></top-header>
    <div id="nav">
      <router-link to="/register">Register</router-link> |
      <router-link to="/secret">Secret</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import './style.scss'
export default {

}
</script>
