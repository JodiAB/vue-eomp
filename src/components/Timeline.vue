<template>
  <div class="loco">
    <div class="item">
      <div class="dot"></div>
      <div class="mar">
        <div class="time">
          <div class="box-l">
            <div class="head">
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[0].heading : 'Loading...'}}</h2>
            <div class="date">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[0]['date'] : 'Loading...'}}
              <!-- <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[0]['text'] : 'Loading...'}}</h3> -->
            </div>
              <p class="paragraph">{{$store.state.Time.Time.length ? $store.state.Time.Time[0]['point1'] : 'Loading...'}}</p>
              
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
            <div class="hea">
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[1].heading : 'Loading...'}}</h2>
            <div class="dat">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[1]['date'] : 'Loading...'}}
              <!-- <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[1]['text'] : 'Loading...'}}</h3> -->
              </div>
              <p class="para">{{$store.state.Time.Time.length ? $store.state.Time.Time[1]['point1'] : 'Loading...'}}</p>
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
            <div class="head">
            <h2>{{$store.state.Time.Time.length ? $store.state.Time.Time[2].heading : 'Loading...'}}</h2>
            <div class="da">
              {{$store.state.Time.Time.length ? $store.state.Time.Time[2]['date'] : 'Loading...'}}
              <!-- <h3>{{$store.state.Time.Time.length ? $store.state.Time.Time[2]['text'] : 'Loading...'}}</h3> -->
              </div>
              <p class="par">{{$store.state.Time.Time.length ? $store.state.Time.Time[2]['point1'] : 'Loading...'}}</p>
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
  left: 728px;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
}

.box-l {
  position: relative;
  right: 654px;
  border: 2px solid #f0f8ff;
  margin: 59px 826px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 0 1px #f0f8ff, 0 0 2px #f0f8ff, 0 0 13px #f0f8ff;
}
.box-r {
  position: relative;
  left: 102px;
  border: 2px solid #f0f8ff;
  margin: 60px 826px;
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

.date, .dat, .da{
  color: aliceblue
}
@media only screen and (min-width: 320px)  {
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

@media only screen and (min-width: 375px)  {
  .box-l {
    left: -487px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 0px 362px 0px 0px;
  }

  .box-r {
    left: 326px;
    border: 2px solid #f0f8ff;
    margin: 53px 467px;
    padding: 0px 367px 0px 0px;
  }

  .time-r{
    position: relative;
    right: 818px;
  }

  .line{
    display: none;
  }
  .dot{
    display:none;
  }
  .head{
    display:flex
  }
  .hea{
    display: flex;
    position: relative;
  }

  .date{
    display: flex;
    position: relative;
    left: 45px;
    top: 52px;
  }
  .dat{
    display: flex;
    position: relative;
    left: 92px;
    top: 52px; 
  }
  .da{
    display: flex;
    position: relative;
    left: 33px;
    top: 83px;
  }

  .paragraph{
    display:flex;
    font-size: 11px;
    position: relative;
    top: 2px;
    left: 113px;
  }
  .para{
    display: flex;
    font-size: 12px;
    position: relative;
    top: -2px;
    left: 161px;
  }
  .par{

    display: flex;
    font-size: 12px;
    position: relative;
    top: 1px;
    left: 78px;
  }
  h2{
    
    position: relative;
    left: 10px;
  }

  .loco{
    position: relative;
    left: 92px;
  }
}

@media only screen and (min-width: 425px) {
  .loco{
    position: relative;
    left: 55px;
  }
 
  .box-l{
    left: -656px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 0px 372px 10px 17px;
}

  .box-r {
    left: 143px;
    border: 2px solid #f0f8ff;
    margin: 53px 464px;
    padding: 0px 372px 10px 17px;
  }
  .paragraph{
    display:flex;
    font-size: 11px;
    position: relative;
    top: 6px;
    left: 120px;
  }
  .para{
    display: flex;
    font-size: 12px;
    position: relative;
    top: 3px;
    left: 161px;
  }
  .par{

    display: flex;
    font-size: 12px;
    position: relative;
    top: 5px;
    left: 84px;
  }

  .date{
    display: flex;
    position: relative;
    left: 57px;
    top: 25px;
  }
  .dat{
    display: flex;
    position: relative;
    left: 94px;
    top: 52px; 
  }
  .da{
    display: flex;
    position: relative;
    left: 47px;
    top: 73px;
  }
  .line{
    display: none;
  }
  .dot{
    display:none;
  }

  .time-r{
    position: relative;
    right: 636px;
  }

  .time{
    position: relative;
    left: 165px;

  }

  .time-l{
    position: relative;
    left: 168px;
}
}
@media only screen and (min-width: 768px){

  .loco {
    position: relative;
    left: 230px;
}
}

@media only screen and (max-width: 1024px){
  .line{
    bottom: -1170px;
    top: 685px;
  }

  p {
    font-size: 12px;
  }

  h2 {
    font-size: 17px;
}
}

@media only screen and (min-width: 1440px) {
  .line {
    display: inline-grid;
    position: absolute;
    width: 2px;
    background-color: #3498db;
    left: 24%;
    top: 7%;
    bottom: -7px;
  }

  .box-l {
    position: relative;
    margin: 53px 830px;
    padding: 0px 372px 10px 17px;
    left: -53%;
  }

  .box-r {
    position: relative;
    margin: 53px 830px;
    padding: 0px 372px 10px 17px;
    left: 20%;
  }

  .dot{
    display: block;
    position: relative;
    left: 24%;
    bottom: -122px;
  }

  .paragraph {
    display: flex;
    font-size: 11px;
    position: relative;
    top: 26px;
    left: 102px;
  }
    .par {
    display: flex;
    font-size: 12px;
    position: relative;
    top: 5px;
    left: 73px;

  }
}


</style>