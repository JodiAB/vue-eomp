<template>
<div class="desire">
  <div class="about">
   
    <div class="neon-box lub">
    <h2>{{$store.state.About.About.length ? $store.state.About.About[0].heading : 'Loading...'}}</h2>
    <p>{{$store.state.About.About.length ? $store.state.About.About[0]['para'] : 'Loading...'}}</p>

    </div>
  </div>
  <img class="image" :src="$store.state.About.About[0].img">
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
<style scoped>
.image{
  
  display: flex;
  margin-top: -30%;
  margin-left: 70%;
   height:450px;
   border: 5px solid aliceblue;
   border-radius: 50px;
}
.about{
  display: flex;
  justify-content: flex-end;
  text-align: left;
  width: 50%;
  margin-left: 20px;
  font-size: 10px;
}

.desire{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 110vh;
  background: linear-gradient(-50deg, red, #a82d2d, black, #a82d2d);
  background-size: 200% 200%; 
  animation: fire 7s ease infinite;

}

@keyframes fire {
  0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
.image{
  display: flex;
    margin-left: 35%;
    height: 450px;
    border: 5px solid aliceblue;
    border-radius: 50px;
}
.desire{
  height: 140vh;
}
  
}
</style>