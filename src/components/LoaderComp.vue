<template>

<div v-if="!loaded" id="loader">
  <div class="spinner">
    <div></div>   
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
  </div>
</div>

</template>
<script>
export default {
    data(){
      return{
          loaded: false
      }
    },
    mounted(){
      setTimeout(() => {
          this.loaded = true;
      }, 1200);
    }
    
}
</script>
<style scoped>
#loader{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.721);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation-name: leftt;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-delay: 1.02s;
}
    *{
    margin: 0;
    padding: 0;
}

.spinner {
  position: absolute;
  width: 9px;
  height: 9px;
}

.spinner div {
  position: absolute;
  width: 50%;
  height: 150%;
  background: #05ff05;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}

.spinner div:nth-child(1) {
  --delay: 0.1;
  --rotation: 36;
  --translation: 150;
}

.spinner div:nth-child(2) {
  --delay: 0.2;
  --rotation: 72;
  --translation: 150;
}

.spinner div:nth-child(3) {
  --delay: 0.3;
  --rotation: 108;
  --translation: 150;
}

.spinner div:nth-child(4) {
  --delay: 0.4;
  --rotation: 144;
  --translation: 150;
}

.spinner div:nth-child(5) {
  --delay: 0.5;
  --rotation: 180;
  --translation: 150;
}

.spinner div:nth-child(6) {
  --delay: 0.6;
  --rotation: 216;
  --translation: 150;
}

.spinner div:nth-child(7) {
  --delay: 0.7;
  --rotation: 252;
  --translation: 150;
}

.spinner div:nth-child(8) {
  --delay: 0.8;
  --rotation: 288;
  --translation: 150;
}

.spinner div:nth-child(9) {
  --delay: 0.9;
  --rotation: 324;
  --translation: 150;
}

.spinner div:nth-child(10) {
  --delay: 1;
  --rotation: 360;
  --translation: 150;
}

@keyframes spinner-fzua35 {
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
}

</style>