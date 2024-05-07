<template>
  <NavigationBar />
  <LoaderComp />
  <router-view/>
  <FooterComp />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth !important;
  transition: all 1.3s ease-in-out !important;
}
</style>
<script>
import NavigationBar from './components/NavigationBar.vue';
import LoaderComp from './components/LoaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavigationBar,
    LoaderComp,
    FooterComp
  }
}
</script>
