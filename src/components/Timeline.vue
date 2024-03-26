<template>
  <div>
    <div class="item">
      <div class="dot"></div>
      <div class="mar">
        <div class="time">
          <div class="box-l">
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[0].heading : 'Loading...'}}</h2>
            <div class="date">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[0]['date'] : 'Loading...'}}
              <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[0]['text'] : 'Loading...'}}</h3>
              <p>{{$store.state.Time.Time.length ? $store.state.Time.Time[0]['point1'] : 'Loading...'}}</p>
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
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[1].heading : 'Loading...'}}</h2>
            <div class="date">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[1]['date'] : 'Loading...'}}
              <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[1]['text'] : 'Loading...'}}</h3>
              <p>{{$store.state.Time.Time.length ? $store.state.Time.Time[1]['point1'] : 'Loading...'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="dot"></div>
      <div class="mar">
        <div class="time-l">
          <div class="box-l">
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[2].heading : 'Loading...'}}</h2>
            <div class="date">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[2]['date'] : 'Loading...'}}
              <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[2]['text'] : 'Loading...'}}</h3>
              <p>{{$store.state.Time.Time.length ? $store.state.Time.Time[2]['point1'] : 'Loading...'}}</p>
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
  top: 632px;
  bottom: -630px;
  width: 2px;
  background-color: #3498db;
  transform: translateX(-50%);
}
@media only screen and (min-width: 320px) and (max-width: 375px) {
  .box-l,
  .box-r {
    right: 10px; 
    left: 10px; 
    margin: 10px; 
    padding: 10px;
  }
  .line{
    display: none;
  }
  .dot{
    display:none;
  }
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .box-l {
    right: 385px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 0px 205px 10px 10px;
  }

  .box-r {
    left: 170px;
    border: 2px solid #f0f8ff;
    margin: 125px 260px;
    padding: 0px 225px 0px -1px;
  }

  .line{
    display: none;
  }
  .dot{
    display:none;
  }
}

@media only screen and (min-width: 425px) and (max-width: 768px) {
  .box-l {
    right: 385px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 0px 150px 10px 10px;
  }

  .box-r {
    left: 170px;
    border: 2px solid #f0f8ff;
    margin: 125px 260px;
    padding: 0px 225px 0px -1px;
  }

  .line{
    display: none;
  }
  .dot{
    display:none;
  }
}
</style>
