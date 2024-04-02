<!-- NavBar.vue -->

<template>
  <nav>
    <div class="navbar-toggle" @click="toggleMenu">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
    <div class="navbar-links" :class="{ 'active': isMenuOpen }">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/testimonials">Testimonials</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
nav {
  padding: 10px;
  background-color: transparent;
  text-align: right;
}

.navbar-toggle {
  display: none; /* Hide the toggle button by default */
}

.navbar-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar-links.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f9f9f9;
  width: 100%;
}

.navbar-links a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #2c3e50;
}

@media only screen and (max-width: 768px) {
  .navbar-links {
    display: none; /* Hide the links on smaller screens */
  }

  .navbar-toggle {
    display: block; /* Display the toggle button on smaller screens */
    cursor: pointer;
  }

  .icon {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: transform 0.4s;
  }

  .icon:nth-child(2) {
    transform: translateY(8px);
  }

  .icon:first-child.active {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .icon:nth-child(2).active {
    opacity: 0;
  }

  .icon:last-child.active {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>
