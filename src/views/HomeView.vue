<template>
  
  <div class="home">
    <Stars />
    <div class="glowing-box">
      <div class="content">
        <div class="neon-box">
          <!-- <img class="pic" :src="$store.state.Home.Home[0].img" > -->
        <h1 class="lub">
          <!-- {{ homeData && homeData.length > 0 ? homeData[0].heading : 'Default Heading' }} -->
          {{$store.state.Home.Home.length ? $store.state.Home.Home[0].heading : 'Loading...'}}

        </h1>
        <p class="para">
          {{$store.state.Home.Home.length ? $store.state.Home.Home[0]['sub-heading'] : 'Loading...'}}

        </p>
        <!-- Add more elements to display other properties if needed -->
      </div>
    </div>
  </div>
  <button>
    <span @click="downloadCV">Download CV</span>  
<iframe src="data:text/html;base64,PGh0bWw+CiAgICAgICAgICAgIDxoZWFkPgogICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KICAgICAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCBpZnJhbWUsIGNhbnZhc3sKICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT0ibW9kdWxlIj4KICAgICAgICAgICAgICAgICAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0QDE4LjAuMic7CiAgICAgICAgICAgICAgICAgICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjInOwogICAgICAgICAgICAgICAgICAgIGltcG9ydCB7Q2FudmFzLCB1c2VGcmFtZX0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCc7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHR1cmVNZXNoID0gKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gdXNlUmVmKG51bGwpCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCwgc2NlbmUsIGNhbWVyYSB9ID0gc3RhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc2guY3VycmVudCl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCwgbW91c2UueV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLmN1cnJlbnQubWF0ZXJpYWwudW5pZm9ybXMudV90aW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ21lc2gnLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwwLDBdLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGxhbmVHZW9tZXRyeScse2FyZ3M6WzEwMjQsMTAyNF19KSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzaGFkZXJNYXRlcmlhbCcsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgCi8vIFVOSUZPUk1TCiNkZWZpbmUgTlVNX0xBWUVSUyAxMC4KCnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247CnVuaWZvcm0gdmVjMiB1X21vdXNlOwp1bmlmb3JtIGZsb2F0IHVfdGltZTsKCgp1bmlmb3JtIGZsb2F0IHVfc2NhbGU7CgoKbWF0MiByb2F0KGZsb2F0IGEpewogIAogIGZsb2F0IHMgPSBzaW4oYSk7CiAgZmxvYXQgYyA9IGNvcyhhKTsKICByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7Cn0KCmZsb2F0IFN0YXIodmVjMiB1diwgZmxvYXQgZmxhcmUpewogIAogIGZsb2F0IGQgPSBsZW5ndGgodXYpOwogIGZsb2F0IG0gPSAuMDUvZDsKICAKICAKICBmbG9hdCByYXlzID0gbWF4KDAuLCAxLiAtIGFicyh1di54ICogdXYueSAqIDEwMDAuKSk7CiAgbSArPSByYXlzKmZsYXJlOwogIAogIHV2ICo9IHJvYXQoMy4xNDUvNC4pOwogIAogIHJheXMgPSBtYXgoMC4sIDEuIC0gYWJzKHV2LnggKiB1di55ICogMTAwMC4pKTsKICBtICs9IHJheXMgKi4zKmZsYXJlOwogIAogIG0gKj0gc21vb3Roc3RlcCgxLiwgLjIsIGQpOwogIHJldHVybiBtOwp9CiAgICAKZmxvYXQgSGFzaDIxKHZlYzIgcCl7CiAgcCA9IGZyYWN0KHAqIHZlYzIoMTIzLjM0LCA0NTYuMjEpKTsKICBwICs9IGRvdChwLCBwKzQ1LjMyKTsKICAKICByZXR1cm4gZnJhY3QocC54KnAueSk7Cn0KCnZlYzMgU3RhckxheWVyKHZlYzIgdXYpewogIHZlYzMgY29sID0gdmVjMygwKTsKICAKICB2ZWMyIGd2ID0gZnJhY3QodXYpLS41OwogIAogIAogIC8vIGNvbC5yZyA9IGd2OwogIAogIHZlYzIgaWQgPSBmbG9vcih1dik7CiAgCiAgZm9yKGludCB5PS0xOyB5PD0xOyB5KyspewogICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspewogICAgICB2ZWMyIG9mZnMgPSB2ZWMyKHgseSk7CiAgICAgIAogICAgICBmbG9hdCBuID0gSGFzaDIxKGlkK29mZnMpOwogICAgICAvLyBjb2wgKz0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgMS4pOwogICAgICBmbG9hdCBzaXplID0gZnJhY3QobiAqIDEzNDUuMzIpOwogICAgICBmbG9hdCBzdGFyID0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgc21vb3Roc3RlcCguOSwgMS4sIHNpemUpKi42KTsKICAgICAgCiAgICAgIC8vIHZlYzMgY29sb3IgPSBzaW4odmVjMyguMiwuMywuOSkqdV90aW1lKTsKICAgICAgdmVjMyBjb2xvciA9IHNpbih2ZWMzKC4yLC4zLC45KSpmcmFjdChuKjIzNDUuMikqMTIuMjgzKSouNSsuNTsKICAgICAgCiAgICAgIGNvbG9yID0gY29sb3IqdmVjMygxLiwuNSwxLitzaXplKTsKICAgICAgc3RhciAqPSBzaW4odV90aW1lKjMuK24qNi4zMjMpKi41KzEuOwogICAgICBjb2wgKz0gc3RhcipzaXplKmNvbG9yOwogICAgfSAgCiAgfQogIHJldHVybiBjb2w7Cn0Kdm9pZCBtYWluKCkgewogIHZlYzIgdXYgPSAoZ2xfRnJhZ0Nvb3JkLnh5IC0gLjUgKiB1X3Jlc29sdXRpb24ueHkpL3VfcmVzb2x1dGlvbi55OwogIAogIHZlYzIgTSA9ICh1X21vdXNlLnh5IC0gdV9yZXNvbHV0aW9uLnh5Ki41KS91X3Jlc29sdXRpb24ueTsKICAvLyB1dio9MTAuKnVfc2NhbGU7CiAgCiAgdXYqPSgzLip1X3NjYWxlKS0uNTsKICAKICBmbG9hdCB0ID0gdV90aW1lKi4wNTsgCiAgLy8gdXYgKz1NKjQuOwogIHV2ICo9IHJvYXQodCk7CgogIHZlYzMgY29sID0gdmVjMygwKTsKICAKICBmb3IoZmxvYXQgaT0wLjsgaTwxLjsgaSs9MS4vTlVNX0xBWUVSUyl7CiAgICAKICAgIGZsb2F0IGRlcHRoID0gZnJhY3QoaSt0KTsKICAgIGZsb2F0IHNjYWxlID0gbWl4KDIwLiwgLjUsIGRlcHRoKTsKICAgIGZsb2F0IGZhZGUgPSBkZXB0aCpzbW9vdGhzdGVwKDEuLCAuOSwgZGVwdGgpOwogICAgY29sKz0gU3RhckxheWVyKHV2KnNjYWxlK2kqNDU1LjIpICpmYWRlOwogIH0KICAKICAKICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbCwxLjApOwp9YCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGAKICAgICAgICAgICAgdm9pZCBtYWluKCkgewogICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTsKICAgICAgICB9YCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogeyJ1X3NjYWxlIjp7InZhbHVlIjowLjMwNn0sInVfdGltZSI6eyJ2YWx1ZSI6MH0sInVfbW91c2UiOnsidmFsdWUiOlswLDBdfSwidV9yZXNvbHV0aW9uIjp7InZhbHVlIjpbMTAyNCwxMDI0XX19LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXRoZXJpbmc6IGZhbHNlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZVNpZGVkOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsc2xWZXJzaW9uOiAiMTAwIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgICAgICAgICAgKTsgIAogICAgICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FudmFzLHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogImhpZ2hwIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3dlclByZWZlcmVuY2U6ICJoaWdoLXBlcmZvcm1hbmNlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRwcjogWzIsMl0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Y6IDc1LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXI6IDAuMSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXI6IDEwMDAsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsNV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTp7IGhlaWdodDogNTEyLCB3aWR0aDogNTEyIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0dXJlTWVzaCkgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICApLCBkb2N1bWVudC5ib2R5KTsKICAgICAgICAgICAgICAgIDwvc2NyaXB0PgogICAgICAgICAgICA8L2hlYWQ+CiAgICAgICAgICAgIDxib2R5Pgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbHlnaWEuZjc0OTA1OTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2FkZC5hNTUyNDBkZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYm9vay41ZmIxMWI4ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvY29kZS40MjhiMThmNS5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvb3ZlcmZsb3cuOGQ1MDQxNWQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2Nsb3NlLjY0YjgwZDAwLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy90cmFzaC41MjRkYmNkMy5zdmcgLS0+CjwvYm9keT4KICAgICAgICA8L2h0bWw+" style="border:0;margin:0;width: 512px;height:512px;" />
  
</button>
  </div>



</template>

<script>

import Stars from '../components/Stars.vue';
import Foot from '@/components/Foot.vue';
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
    Foot
    

    
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI');
  },
  methods: {
    downloadCV() {
      
      const pdfPath = '/Jodi-Abrahams-CV.pdf';
      
      const link = document.createElement('a');
      
      
      link.href = pdfPath;
      
      
      link.download = 'Jodi-Abrahams-CV.pdf';
      
      
      document.body.appendChild(link);
      
      
      link.click();
      
      
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.home{
  text-align: center;

}

.content {
  display: flex;
  justify-content: center;
}


.text-content {
  text-align: left;
}
.para{
  font-size: medium;
}

.lub {
  background: radial-gradient(ellipse at bottom, #fff, transparent, transparent) 50% 100% / 50% 50% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 30px;
  overflow: hidden;

  font-family: "Orbitron";
  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms; 
}
button{
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  appearance: none;
  border: 0;
  background: 0;
  position: relative;
  color: white;
  font-weight: 400;
  border-radius: 0.5rem;
  overflow: hidden;
  font-family: inherit;
  font-weight: 500;
  top: -143px;
}
button:after{
  content: '';
  position: absolute;
  inset:0;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,1);
  border-radius: inherit;
  mix-blend-mode: overlay;
}
button iframe{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) scale(1) rotate(15deg);
  opacity: 0.5;
  filter: blur(5px);
  transition: all 0.5s ease-in-out;
}
button span{
  position: relative;
  z-index: 1;
  opacity: 0.75;
  color: white;
  transition: all 0.5s ease-in-out;
}
button:hover iframe{
  transform: translate(-50%,-50%) scale(0.5);
  opacity: 1;
  filter: blur(0);
}
button:hover span{
  opacity: 1;
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
@media only screen and (min-width: 1440px) {
  button{
    bottom: 32px;
    left: -30px;
    margin-top: -10%;
  }
.para{
  position: relative;
  left: -13px;
}
  .lub{
    position: relative;
    left: 145px;
    margin-right: 11%;
  }
  .neon-box{
    position: relative;
    left: -160px;
    margin-right: 0%;
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    
    padding: 50px;
    height: 58vh;
  }
  
  .lub {
    padding: 10px;
    font-size: 85px;
    margin-left: -33%;
  }
  
  .neon-box {
    position: relative;
    left: 17px;
  }
  .para{
    position: relative;
    
  }
}

@media only screen and (min-width: 768px) {
  .home {
    
    padding: 40px;
  }
  
  .lub {
    
    font-size: 54px;
  }
  
  button{
    bottom: 24px;
  }

  .foot {
    font-size: 18px;
    bottom: 10px;
    position: absolute;
}
}


@media only screen and (min-width: 425px) {
  .home {

    padding: 30px;
  }

  .lub {

    font-size: 62px;
    position: relative;
    right: -80px;
}
  h2, p {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 20px;
    padding-right: 0px;
    position: relative;
    left: 71px;
}

button{
  bottom: 30px;
    left: 79px;
}

.foot{
  padding: 0px;
    font-size: small;
}

}


@media only screen and (min-width: 375px)  {
  .home {

    padding: 36px;
  }

  .lub {

    font-size: 78px;
    position: relative;
    left: 24%;
  }
  h2, p {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 11px;

}
.para{
  font-size: 30px;
    padding: 10px 24px 8px 156px;
}

button{
  position: relative;
    left: 72px;
    top: 46px;
}

.foot{
  position: relative;
    top: 208px;
    left: -8px;
}
}

@media only screen and (min-width: 425px){
  .neon-box{
    position: relative;
    left: -75px;
  }
  button{
    position: relative;
    left: 10px;
  }
}


@media only screen and (max-width: 375px) {
  .home {

    padding: 10px;
  }

  .lub {

    font-size: 43px;
    position: relative;
    left: 22px;
  }

  .canvas{
    height: 26vh;
  }
  .neon-box {
    width: 90%; 
    margin: 0 auto; 
  }

  .pic{
    width: 90%;
    margin: 0 auto;
  }
  button{
    position: relative;
    left: 15px;
    top: -2px;
  }
}
@media only screen and (max-width: 320px) {

h2, p {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 19px;
  position: relative;
  left: 1%;
  top: 14px;
}
canvas{
  height: 520vh;
}
.foot {
    font-size: 12px;
    position: absolute;
    bottom: -301%;
    width: 393%;
    height: 72px;
    font-size: 41px;
}

.lub {
  font-size: 52px;
    position: relative;
    left: 93px;
    top: 18px;
}

.para{
  font-size: medium;
    position: relative;
    padding: 9px 126px 9px 76px;
    left: 22px;

}

h2{
  font-size: 79px;
    position: relative;
    left: 25%;
    top: 621px;
}

.neon-box {
    width: 190%;
    position: relative;
    left: 7px;
}

button {
    position: relative;
    left: 8px;
    top: 55px;
}
}

@media only screen and (max-width: 1024px) {
  button{
    bottom: 32px;
  }
}

</style>