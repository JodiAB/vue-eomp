// MyComponent.vue
<template>
  <div>
    <h1>Data from GitHub</h1>
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsonData: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = 'https://jodiab.github.io/vue-eomp/src/data/index.json';

      axios.get(url)
        .then(response => {
          this.jsonData = response.data;
          console.log(response.data);
        })
     
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
};
</script>
