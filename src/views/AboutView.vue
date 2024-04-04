<template>
  <div class="desire overflow-hidden">
    <transition name="fade">
      <div class="about">
        
        <h2>{{$store.state.About.About.length ? $store.state.About.About[0].heading : 'Loading...'}}</h2>
        <div class="neon-box lub">
          <p>{{$store.state.About.About.length ? $store.state.About.About[0]['para'] : 'Loading...'}}</p>
          
        </div>
      </div>
    </transition>
  </div>
  <img class="image" :src="$store.state.About.About[0].img">
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  .image{
     display: flex;
     justify-content: flex-end;
     height: 450px;
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
  
  
  
  @keyframes lights {
    0% {
      color: hsl(230, 40%, 80%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
    30% { 
      color: hsl(230, 80%, 90%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    40% { 
      color: hsl(230, 100%, 95%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }
    
    70% {
      color: hsl(230, 80%, 90%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    100% {
      color: hsl(230, 40%, 80%);
      text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
  }
  
  body {
    margin: 0;
    font: 100% / 1.5 Raleway, sans-serif;
    color: hsl(230, 100%, 95%);
    background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
    height: 100vh;
    display: flex;
  }
  
  h2 {
    margin: auto;
    font-size: 3.5rem;
    font-weight: 300;
    animation: lights 5s 750ms linear infinite;
    position: absolute;
      left: 13%;
  }
  
  p {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 26px;
    position: relative;
    top: 28%;
  }
  
  @media only screen and (max-width: 374px) {
  
    
  }
  @media only screen and (min-width: 320px) {
    .image {
      margin-left: 31%;
    margin-top: 11%;
    height: 319px;
      border: 5px solid aliceblue;
      border-radius: 50px;
    }
  
    .desire {
      height: 97vh;
    }
  
    .about {
      width: 80%;
    }
    h2{
      font-size:2.5rem;
      position: absolute;
      left: 25%;
    }
    p{
      font-size: 16px;
      position: relative;
      top: 14%;
      left: 16px;
    }
  }
  
  
  
  @media only screen and (min-width: 768px)  {
    .image {
      display: flex;
      margin-left: 38%;
      height: 386px;
      border: 5px solid aliceblue;
      border-radius: 50px;
      margin-top: -93%;
    }
  
    .desire {
      height: 140vh;
    }
  
    .about {
      width: 80%; 
    }
  
    .lub {
      font-size: 18px;
      margin-left: 10%;
    }
  
    h2{
      left: 38%;
    }
  
    p{
      top: 20%;
      left: 25px;
    }
  
    .foot {
      font-size: 18px;
      bottom: -370px;
      position: absolute;
  }
  }
  
  
  @media only screen and (min-width: 1024px) {
    .image {
      margin-top: -43%; 
      position: relative;
    left: 65%;
    }
  
    .about {
      width: 40%; 
      margin-left: 50px; 
    }
  
    .desire {
      height: 100vh;
    }
  }
  </style>