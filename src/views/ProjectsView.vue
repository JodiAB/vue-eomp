<template >
    <div>
        <h2>{{ projectsData?.[0]?.heading || 'Default Heading' }}</h2>
        <p>{{ projectsData?.[0]?.['subHeading'] || 'Default Subheading' }}</p>
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