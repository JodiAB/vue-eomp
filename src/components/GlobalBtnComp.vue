<template>
    <button>
      {{ textContent }}
    </button>
</template>
<script setup>
  defineProps({
   textContent: String,
  })
</script>
<style scoped>

button {
  color: white;
  text-decoration: none;
  font-size: 25px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

button::before {
  margin-left: auto;
}

button::after, button::before {
  content: '';
  width: 0%;
  height: 2px;
  background: rgb(10, 203, 61);
  display: block;
  transition: 0.5s;
  
}

button:hover::after, button:hover::before {
  width: 100%;
}


@media (max-width: 490px) {
  button {
  color: white;
  font-size: 15px;
}
}
    
</style>