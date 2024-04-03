<template>
  <div class="desire">
  <div class="resume">
    <h2 class="heading">{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0].heading : 'Loading...'}}
    </h2>
    <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['text'] : 'Loading...'}}</p>
    <button>
      <span @click="downloadCV">Download CV</span>  
        <iframe src="data:text/html;base64,PGh0bWw+CiAgICAgICAgICAgIDxoZWFkPgogICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KICAgICAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCBpZnJhbWUsIGNhbnZhc3sKICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT0ibW9kdWxlIj4KICAgICAgICAgICAgICAgICAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0QDE4LjAuMic7CiAgICAgICAgICAgICAgICAgICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjInOwogICAgICAgICAgICAgICAgICAgIGltcG9ydCB7Q2FudmFzLCB1c2VGcmFtZX0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCc7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHR1cmVNZXNoID0gKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gdXNlUmVmKG51bGwpCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCwgc2NlbmUsIGNhbWVyYSB9ID0gc3RhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc2guY3VycmVudCl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCwgbW91c2UueV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLmN1cnJlbnQubWF0ZXJpYWwudW5pZm9ybXMudV90aW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ21lc2gnLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwwLDBdLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGxhbmVHZW9tZXRyeScse2FyZ3M6WzEwMjQsMTAyNF19KSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzaGFkZXJNYXRlcmlhbCcsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgLy8gRnJhZ21lbnQgc2hhZGVyCgovLyBVbmlmb3Jtcwp1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uOwp1bmlmb3JtIHZlYzIgdV9tb3VzZTsKdW5pZm9ybSBmbG9hdCB1X3RpbWU7CnVuaWZvcm0gdmVjMyB1X2NvbG9yOwp1bmlmb3JtIGZsb2F0IHVfc2NhbGU7IAp1bmlmb3JtIGZsb2F0IHVfZGlzdG9ydF9zY2FsZTsKdW5pZm9ybSBmbG9hdCB1X3Bvd2VyOwp1bmlmb3JtIGZsb2F0IHVfc3BlZWQ7CnVuaWZvcm0gZmxvYXQgdV94Owp1bmlmb3JtIGZsb2F0IHVfeTsKdW5pZm9ybSBmbG9hdCB1X2l0ZXJhdGlvbnM7CiAgICAKI2RlZmluZSBwb3dlciAxLgojZGVmaW5lIHpvb21PdXQgMy4KI2RlZmluZSByb3QgMS4KI2RlZmluZSBpdGVyIDUwLgojZGVmaW5lIGh1ZVBvd2VyIDAuNwojZGVmaW5lIGdsb3cgMC41CiNkZWZpbmUgU3BlZWQgMS41CiNkZWZpbmUgV2F2ZVNwZWVkIDIuCiNkZWZpbmUgQnJpZ2h0bmVzcyAwLjUKCnZvaWQgbWFpbigpCnsKICAgIC8vIE5vcm1hbGl6ZWQgcGl4ZWwgY29vcmRpbmF0ZXMgKGZyb20gMCB0byAxKQogICAgdmVjMiB1diA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7CgoJdmVjMiBYWVNjYWxlID0gdmVjMigxLjAtdV9zY2FsZSwxLjAtdV9zY2FsZSk7Cgl2ZWMyIFhZTW92ZSA9IHZlYzIodV94LHVfeSk7CglmbG9hdCBpdGVyYXRpb25zID0gaXRlciAqIHVfaXRlcmF0aW9uczsKCiAgdXYgKj0gem9vbU91dDsKCXV2Lnh5ID0gdXYueHkgKiBYWVNjYWxlOwoJdXYueHkgPSB1di54eSArIFhZTW92ZTsKCXZlYzMgZmluYWxDb2wgPSB2ZWMzKDAsMCwwKTsKCWZsb2F0IGhhbGZEaXN0b3J0ID0gdV9kaXN0b3J0X3NjYWxlIC8gMC41OwoJZmxvYXQgZGlzdG9ydHNjMiA9IHVfZGlzdG9ydF9zY2FsZSAvIHVfZGlzdG9ydF9zY2FsZSArIGhhbGZEaXN0b3J0OwogICAgCglmb3IoZmxvYXQgaSA9IDEuMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKyl7CgkJdXYueCArPSB1X3Bvd2VyIC8gaSAqIHNpbihpICogdV9kaXN0b3J0X3NjYWxlICogdXYueSAtICh1X3RpbWUgKiBTcGVlZCAqIHVfc3BlZWQpKTsKCQl1di55ICs9IHVfcG93ZXIgLyBpICogc2luKGkgKiBkaXN0b3J0c2MyICogdXYueCArICh1X3RpbWUgKiBTcGVlZCAqIHVfc3BlZWQpKTsKCX0KICAgIAoJdmVjMyBjb2wgPSB2ZWMzKHZlYzMoZ2xvdyxnbG93LGdsb3cpL3NpbigodV90aW1lKldhdmVTcGVlZCp1X3NwZWVkKS1sZW5ndGgodXYueXgpIC0gdXYueSkpOwoJZmluYWxDb2wgPSB2ZWMzKGNvbCpjb2wpOwogICAgdmVjMyBDb2xvciA9IHZlYzMoMS4sMS4sMS4pICogQnJpZ2h0bmVzczsKCQogICAgQ29sb3IgPSBDb2xvcipDb2xvciAqIDAuNSArIDAuNSpjb3MoKHVfdGltZSp1X3NwZWVkKSt1di54eXgrdmVjMygwLDIsNCkpICogaHVlUG93ZXI7CgoKICAgIC8vIE91dHB1dCB0byBzY3JlZW4KICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZmluYWxDb2wucmdiICogQ29sb3IsIDEuMCkgKiBwb3dlcjsKfWAsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgLy8gVmVydGV4IHNoYWRlcgoKdm9pZCBtYWluKCkgewogIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7Cn1gLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7InVfY29sb3IiOnsidmFsdWUiOlsxLDAsMF19LCJ1X3NjYWxlIjp7InZhbHVlIjowLjIxfSwidV9kaXN0b3J0X3NjYWxlIjp7InZhbHVlIjowLjUzNX0sInVfcG93ZXIiOnsidmFsdWUiOjAuMTU3fSwidV9zcGVlZCI6eyJ2YWx1ZSI6MC4yMjJ9LCJ1X3giOnsidmFsdWUiOjAuNX0sInVfeSI6eyJ2YWx1ZSI6MC44NTl9LCJ1X2l0ZXJhdGlvbnMiOnsidmFsdWUiOjAuMTIyfSwidV90aW1lIjp7InZhbHVlIjowfSwidV9tb3VzZSI6eyJ2YWx1ZSI6WzAsMF19LCJ1X3Jlc29sdXRpb24iOnsidmFsdWUiOlsxMDI0LDEwMjRdfX0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lTGluZXdpZHRoOiAwLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdGhlcmluZzogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlU2lkZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xzbFZlcnNpb246ICIxMDAiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICApOyAgCiAgICAgICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDYW52YXMsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2w6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAiaGlnaHAiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogImhpZ2gtcGVyZm9ybWFuY2UiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZHByOiBbMiwyXSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYTogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdjogNzUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVhcjogMC4xLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhcjogMTAwMCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsMCw1XQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOnsgaGVpZ2h0OiA1MTIsIHdpZHRoOiA1MTIgfQogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHR1cmVNZXNoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICksIGRvY3VtZW50LmJvZHkpOwogICAgICAgICAgICAgICAgPC9zY3JpcHQ+CiAgICAgICAgICAgIDwvaGVhZD4KICAgICAgICAgICAgPGJvZHk+CjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9seWdpYS5mNzQ5MDU5NC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYWRkLmE1NTI0MGRkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9ib29rLjVmYjExYjhkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9jb2RlLjQyOGIxOGY1LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9vdmVyZmxvdy44ZDUwNDE1ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvY2xvc2UuNjRiODBkMDAuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3RyYXNoLjUyNGRiY2QzLnN2ZyAtLT4KPC9ib2R5PgogICAgICAgIDwvaHRtbD4=" style="border:0;margin:0;width: 512px;height:512px;" /> 
        
      </button>

    <div class="info">
      <h1>My Details</h1>
</div>
      <div class="row">
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['birthday'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['age'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['email'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['certificate'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['phone'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['city'] : 'Loading...'}}</p>
        </div>
        <div class="info-item ">
            <p>{{$store.state.Resume.Resume.length ? $store.state.Resume.Resume[0]['freelancer'] : 'Loading...'}}</p>
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
    this.$store.dispatch('fetchDataFromAPI'); // 
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



@media only screen and (min-width: 320px) and (max-width: 767px) {
  .resume {
    padding: 20px;
  }

  .info {
    margin-top: 20px;
  }

  .info-item {
    margin-bottom: 10px;
  }
  
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .resume {
    width: 88%;
    margin: 0 auto;
    position: relative;
    right: 71px;
  }

  h2, p {
    font-size: 14px;
  }


  .info {
    width: 100%;
  }

  .info-item {
    width: 100%;
    margin-bottom: 10px;
  }

  .desire{
    width: 142%;
  }
  .box-r[data-v-7f3aebf1] {
    left: -455px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 1px 322px 10px 17px;
}
.box-l[data-v-7f3aebf1] {
  left: -455px;
  border: 2px solid #f0f8ff;
  margin: 53px 464px;
  padding: 1px 322px 10px 17px;
}


.foot {
    font-size: 15px;
    width: 136%;
}
}


@media only screen and (min-width: 768px) {
  .resume {
    padding: 0px;
    width: auto;
  }

  .info {
    margin-top: 40px;
  }

  .info-item {
    margin-bottom: 20px;
  }

  .foot {
    font-size: 18px;
    bottom: -1208px;
    position: absolute;
}
}


@media only screen and (min-width: 1024px) {
  .resume {
    width: 50%;
    margin: 0 auto; 
  }
}



</style>