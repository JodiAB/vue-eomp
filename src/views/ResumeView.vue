<template>
  <div class="desire">
  <div class="resume">
    <h2>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0].heading : 'Loading...'}}
    </h2>
    <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['text'] : 'Loading...'}}</p>


    <div class="info">
      <h1>My Details</h1>
</div>
      <div class="row">
        <div class="info-item padd-15">
            <p>Birthday : <span>10 April 1998</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Age : <span>25</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Website : <span>www.google.com</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Email : <span>jodiabrahams9@gmail.com</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Certificate : <span>A+</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Phone : <span>+27 78 209 6121</span></p>
        </div>
        <div class="info-item padd-15">
            <p>City : <span>Cape Town, South Africa</span></p>
        </div>
        <div class="info-item padd-15">
            <p>Freelance : <span>Availible</span></p>
        </div>
    </div>
  </div>
  
  <Timeline />
  <Skills />
</div>
 
</template>

<script>
import { mapState } from 'vuex';
import Timeline from '../components/Timeline.vue';
import Skills from '../components/Skills.vue';

export default {
  computed: {
    ...mapState({
      resumeData: state => state.Resume
    }),
  },
  components:{
    Timeline,
    Skills,
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
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


.desire {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(-50deg, red, #6A0DAD, Black, #6A0DAD);
  background-size: 200% 200%; /* Increase the size to cover the entire animation */
  animation: fire 7s ease infinite;
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

.info .row{
  display: flex;
  justify-content:left;
  border: 1px solid black;
}
</style>