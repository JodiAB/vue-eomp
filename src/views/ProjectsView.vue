<template >
  <div class="desire">
  <div>
      <h2>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0].heading : 'Loading...'}}</h2>
      <p>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0]['subHeading'] : 'Loading...'}}</p>
  </div>

  <Cards />
  </div>

</template>
<script>
import { mapState } from 'vuex';
import Cards from '@/components/Cards'
import Foot from '@/components/Foot.vue';
export default {
  computed: {
    ...mapState({
      projectsData: state => state.Projects
    }),
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); 
  },
  components: {
    Cards,
    Foot
  }
}
</script>

<style scoped>
.desire{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 138vh;
  overflow:hidden;
  background: linear-gradient(-50deg, rgb(10, 108, 61), #62f8b9, black, #3ffbe5);
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


@media only screen and (min-width: 375px) and (max-width: 768px){
.desire{
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
width: 100%;
height: 340vh;
overflow: hidden;
background: linear-gradient(-50deg, rgb(10, 108, 61), #62f8b9, black, #3ffbe5);
background-size: 200% 200%;
animation: fire-6375b3f9 7s ease infinite;
}
}

@media only screen and (max-width: 320px) {
  .desire{
    height: 394vh;
  }
}
@media only screen and (max-width: 375px) {
  .desire{
    height: 394vh;
  }

  .foot{
    width: 126%;
  }
}
@media only screen and (max-width: 425px) {
  .desire{
    height: 395vh;
    width: 133%;
  }
}

/* @media only screen and (max-width: 1024px) {
  .desire{
    height: 156vh;
    width: 102%;
  }
} */
</style>
