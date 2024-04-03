<template>
  <div>
    <Navi />
    <router-view />
    
    <Spin/>
    <Foot />
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue'; 
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

.desire {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(-50deg, green, #6A0DAD, Black, #9f9da0);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
}

@keyframes fire {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>

