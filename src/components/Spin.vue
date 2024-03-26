<template>
  <div v-if="loading" class="loading-spinner">
 <!-- SOLAR SYSTEM -->
<div class="spinner-box">
  <div class="solar-system">
    <div class="earth-orbit orbit">
      <div class="planet earth"></div>
      <div class="venus-orbit orbit">
        <div class="planet venus"></div>
        <div class="mercury-orbit orbit">
          <div class="planet mercury"></div>
          <div class="sun"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>
<script>
export default {
  data() {
      return {
          loading: true,
      };
  },
  methods: {
      fetchData() {
          this.loading = true;
          setTimeout(() => {
              this.loading = false
          }, 2000)
      }
  },
  mounted() {
      this.fetchData();
  }
}
</script>










<style>


.solar-system {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  display:flex;

}

.orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fafbfC;
    border-radius: 50%;
} 

.earth-orbit {
    width: 165px;
    height: 165px;
  -webkit-animation: spin 12s linear 0s infinite;
}

.venus-orbit {
    width: 120px;
    height: 120px;
  -webkit-animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
    width: 90px;
    height: 90px;
  -webkit-animation: spin 3s linear 0s infinite;
}

.planet {
    position: absolute;
    top: -5px;
  width: 10px;
  height: 10px;
    border-radius: 50%;
  background-color: #3ff9dc;
}

.sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ffab91;
}

.leo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.blue-orbit {
    width: 165px;
    height: 165px;
  border: 1px solid #91daffa5;
  -webkit-animation: spin3D 3s linear .2s infinite;
}

.green-orbit {
    width: 120px;
    height: 120px;
  border: 1px solid #91ffbfa5;
  -webkit-animation: spin3D 2s linear 0s infinite;
}

.red-orbit {
    width: 90px;
    height: 90px;
  border: 1px solid #ffca91a5;
  -webkit-animation: spin3D 1s linear 0s infinite;
}

.white-orbit {
    width: 60px;
    height: 60px;
  border: 2px solid #ffffff;
  -webkit-animation: spin3D 10s linear 0s infinite;
}

.w1 {
  transform: rotate3D(1, 1, 1, 90deg);
}

.w2 {
  transform: rotate3D(1, 2, .5, 90deg);
}

.w3 {
  transform: rotate3D(.5, 1, 2, 90deg);
}
</style>