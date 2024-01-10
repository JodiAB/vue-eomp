<template>
  <div class="about">
    <div class="neon-box">
    <h2>{{$store.state.About.About.length ? $store.state.About.About[0].heading : 'Loading...'}}</h2>
    <p>{{$store.state.About.About.length ? $store.state.About.About[0]['para'] : 'Loading...'}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      aboutData: state => state.About
    }),
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
  },
}
</script>
<style>
.about{
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 50%;
  margin-left: 20px;
  font-size: 25px;
}
.neon-box {
  border: 2px solid #f0f8ff; 
  padding: 20px;
  border-radius: 1px;
  box-shadow: 0 0 1px #f0f8ff, 0 0 2px #f0f8ff, 0 0 13px #f0f8ff; /* Neon glow effect, you can adjust the color and size */
}
</style>