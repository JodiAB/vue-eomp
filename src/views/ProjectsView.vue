<template >
  <div>
      <h2>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0].heading : 'Loading...'}}</h2>
      <p>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0]['subHeading'] : 'Loading...'}}</p>
  </div>

  <Cards />
</template>
<script>
import { mapState } from 'vuex';
import Cards from '@/components/Cards'

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
  }
}
</script>
<style >

</style>