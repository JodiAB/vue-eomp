<template>
  
  <div class="home">
    <Stars />
    <div class="glowing-box">
      <div class="content">
        <div class="neon-box">
          <img :src="$store.state.Feedback.Feedback[6].img" >
        <h1 class="lub">
          <!-- {{ homeData && homeData.length > 0 ? homeData[0].heading : 'Default Heading' }} -->
          {{$store.state.Home.Home.length ? $store.state.Home.Home[0].heading : 'Loading...'}}

        </h1>
        <p>
          {{$store.state.Home.Home.length ? $store.state.Home.Home[0]['sub-heading'] : 'Loading...'}}

        </p>
        <!-- Add more elements to display other properties if needed -->
      </div>
    </div>
  </div>
  </div>
  
  <button class="neon-button">
    <span @click="downloadCV">Download CV</span>  
   
      
</button>


</template>

<script>

import Stars from '../components/Stars.vue';
import { mapState } from 'vuex';
export default {
  
  computed: {
    ...mapState({
      homeData: state => state.Home,
      aboutData: state => state.About,
      resumeData: state => state.Resume,
      skillsData: state => state.skills,
      experienceData: state => state.EXP,
    }),
  },
  components: {
    Stars,
    


  },
  created() {
    this.$store.dispatch('fetchDataFromAPI');
  },
  methods: {
  downloadCV() {
    // Specify the path to your PDF file
    const pdfPath = '/Jodi-Abrahams-CV.pdf';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the path of your PDF file
    link.href = pdfPath;

    // Set the download attribute to specify the file name when downloaded
    link.download = 'Jodi-Abrahams-CV.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  }
}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
.neon-button {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #293b38; /* Neon green color */
  background-color: transparent;
  border: 4px solid #293b38;
  border-radius: 15px;
  padding: 10px 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.neon-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #293b38 10%, transparent 50%);
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: pulse 1s infinite alternate;
}

.neon-button:hover:before {
  opacity: 1;
}

@keyframes pulse {
  0% {
      transform: scale(1);
  }
  100% {
      transform: scale(2);
  }
}
.content {
  display: flex;
  justify-content: flex-start;
}


.text-content {
  text-align: left;
}

.lub {
  background: radial-gradient(ellipse at bottom, #fff, transparent, transparent) 50% 100% / 50% 50% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 18px;
  font-family: "Orbitron";
  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms; 
}

@keyframes reveal {
  80% {
    letter-spacing: 8px;
  }
  100% {
    background-size: 300% 300%;
  }
}

@keyframes glow {
  40% {
    text-shadow: 0 0 8px #fff;
  }
}


</style>
