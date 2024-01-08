<template>
    <div>
      <div class="item">
        <div class="dot"></div>
        <div class="mar">
          <div class="time">
            <div class="box-l">
              <h2>{{ timeData?.[0]?.heading || 'Default Heading' }}</h2>
              <div class="date">
                {{ timeData?.[0]?.['date'] || 'Default Date' }}
                <h3>{{ timeData?.[0]?.['subHeading'] || 'Default Subheading' }}</h3>
                <p>{{ timeData?.[0]?.['point1'] || 'Default Point1' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="line"></div>
  
      <div class="item">
        <div class="dot"></div>
        <div class="mar">
          <div class="time-r">
            <div class="box-r">
              <h2>{{ timeData?.[1]?.heading || 'Default Heading' }}</h2>
              <div class="date">
                {{ timeData?.[1]?.['date'] || 'Default Date' }}
                <h3>{{ timeData?.[1]?.['subHeading'] || 'Default Subheading' }}</h3>
                <p>{{ timeData?.[1]?.['point1'] || 'Default Point1' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        timeData: (state) => state.Time,
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI');
    },
  };
  </script>
  
  <style scoped>
  .item {
    position: relative;
  }
  
  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #3498db;
    border-radius: 50%;
  }
  
  .box-l {
    position: relative;
    right: 350px;
    border: 2px solid #f0f8ff;
    margin: 60px 442px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 1px #f0f8ff, 0 0 2px #f0f8ff, 0 0 13px #f0f8ff;
  }
  .box-r {
    position: relative;
    left: 350px;
    border: 2px solid #f0f8ff;
    margin: 60px 442px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 1px #f0f8ff, 0 0 2px #f0f8ff, 0 0 13px #f0f8ff;
  }

  
  .line {
    position: absolute;
    left: 50%;
    top: 205px;
    bottom: 0;
    width: 2px;
    background-color: #3498db;
    transform: translateX(-50%);
  }
  </style>
  