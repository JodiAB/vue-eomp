<template>
  <div>
    <Navi />
    <router-view />
    <Spin/>
    <Foot />
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue'; // Adjust the import path based on your project structure
import Foot from '@/components/Foot.vue';
import Spin from '@/components/Spin.vue';
export default {
  components: {
    Navi,
    Foot,
    Spin

    
  
  },
};
</script>
<style>
@import '~boxicons/css/boxicons.min.css';
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
#app {
  font-family: Orbitron, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #160808;
  color: aliceblue;
  font-family: 'Arial', sans-serif;
}


.home {
  padding: 20px;
  text-align: center;
}

h2, p {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5); /* Add a soft shadow */
  text-align: center;
  font-size: 19px;
}

h2 {
  font-size: 24px;
}

</style>

