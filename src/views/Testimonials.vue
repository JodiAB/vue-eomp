<template >
  <div class="desire">
      <div class="shoe">
      <h2>{{$store.state.Testimonials.Testimonials.length ? $store.state.Testimonials.Testimonials[0].heading : 'Loading...'}}</h2>
      <p class="to">{{$store.state.Testimonials.Testimonials.length ? $store.state.Testimonials.Testimonials[0]['para'] : 'Loading...'}}</p>
  </div>
  <Testo />
</div>

</template>
<script>
import { mapState } from 'vuex';
import Testo from '../components/Feedback.vue'
import Foot from '@/components/Foot.vue';

export default {
  computed: {
    ...mapState({
      testimonialsData: state => state.Testimonials
    }),
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
  },
  components:{
    Testo,
    Foot

  }
}
</script>
<style scoped>
.desire {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(-50deg, green, #6A0DAD, Black, #9f9da0);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
}
.shoe{
  position: relative;
  left: -55px;
}

.to{
  font-size: 11px;
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

@media only screen and (min-width: 375px){
  .desire{
    width: 105%;
  }
}

@media only screen and (min-width: 320px){
  .desire{
    width: 109%;
  }
}
</style>