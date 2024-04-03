<!-- NavBar.vue -->

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">References</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
 
};
</script>

<style scoped>
nav {
  
  padding: 10px;
  background-color: transparent;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #a3c1b3;
}


@media only screen and (min-width: 1024px) {
nav {

  padding: 20px;
}
}


@media only screen and (min-width: 768px) and (max-width: 1023px) {
nav {

  padding: 15px;
}
}


@media only screen and (min-width: 425px) and (max-width: 767px) {
nav {

  padding: 10px;
}
}


@media only screen and (min-width: 375px) and (max-width: 424px) {
nav {
 
  padding: 5px;
}
}


@media only screen and (max-width: 374px) {
nav {

  padding: 0;
}
}

</style>
