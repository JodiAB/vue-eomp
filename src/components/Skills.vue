<template >
  <section id="skills">


      <h1 class="move">{{$store.state.Time.Time.length ? $store.state.Time.Time[3].heading : 'Loading...'}}</h1>




<div class="cardL">
       

          <div class="card">
              <div class="card-content">
                  <h2 class="card-title">{{$store.state.Time.Time.length ? $store.state.Time.Time[4].heading : 'Loading...'}}</h2>
                <p class="card-description"> {{$store.state.Time.Time.length ? $store.state.Time.Time[4]['Description'] : 'Loading...'}}</p>
                </div>
              </div>
                        
            <div class="card">
              <div class="card-content">
                  <h2 class="card-title">{{$store.state.Time.Time.length ? $store.state.Time.Time[5].heading : 'Loading...'}}</h2>
                <p class="card-description"> {{$store.state.Time.Time.length ? $store.state.Time.Time[5]['Description'] : 'Loading...'}}</p>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                  <h2 class="card-title">MySQL</h2>
                <p class="card-description"> 
Proficient in MySQL database design, optimization, and SQL query writing for scalable applications.</p>
              </div>
            </div>
      </div>
          
    <div class="cardR">
            <div class="card">
              <div class="card-content">
                  <h2 class="card-title food">{{$store.state.Time.Time.length ? $store.state.Time.Time[6].heading : 'Loading...'}}</h2>
                  <p class="card-description"> {{$store.state.Time.Time.length ? $store.state.Time.Time[6]['Description'] : 'Loading...'}}</p>
              </div>
            </div>
          
            <div class="card">
              <div class="card-content">
              <h2 class="card-title food">{{$store.state.Time.Time.length ? $store.state.Time.Time[7].heading : 'Loading...'}}</h2>
                <p class="card-description"> {{$store.state.Time.Time.length ? $store.state.Time.Time[7]['Description'] : 'Loading...'}}</p>
              </div>
            </div>

              <div class="card">
              <div class="card-content">
              <h2 class="card-title food">Vue</h2>
                <p class="card-description"> Proficient in developing dynamic and responsive web applications using Vue.js</p>
              </div>
            </div>

</div>
      

    </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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


.cardL{
  display: flex;
  justify-content: center;
  position: relative;
    left: -13%;

}
.cardR{
  display:flex;
  justify-content: center;
  position: relative;
    left: -13%;

}

.card {
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: #3c3b3b;
}

.card-content {
  padding: 22px;
  background-color: transparent;
    }

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-subtitle {
  color: #c4acac;
  margin-bottom: 10px;
}

.card-description {
  color: aliceblue;
}
.n h3{
  display: flex;
  padding-left: 355px;
}

.containers{
  width: 600px;
  height: 500px;
  padding: 75px 90px;
  margin-left: 340px;
}

.headings{
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 5px;
  margin-bottom: 50px;
  color: aliceblue;
}

.bar{
  font-size: 23px;
}
.Technical-bars .bar{

  margin-top: 40px 0;
}
.Technical-bars .bar:first-child{
  margin-top: 0;
}

.Technical-bars .bar:last-child{
  margin-bottom: 0;
}
.Technical-bars .bar .info{
  margin-bottom: 5px;
}

.Technical-bars .bar .info span{
font-size: 17px;
font-weight: 500;
animation: showText 0.5s 1s linear forwards;

}

.Technical-bars .bar .progress-line {
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 5px;
  background-color: black;
}

.Technical-bars .bar .progress-line span {
  height: 100%;
  background-color: #0ef;
  position: absolute;
  border-radius: 10px;
  width: 0;
  animation: animate 1s cubic-bezier(1, 0, 0, 5) forwards;
}

.Technical-bars .bar .progress-line.html span {
  width: 90%; 
} 
.Technical-bars .bar .progress-line.css span {
  width: 70%; 
}
.Technical-bars .bar .progress-line.Javascript span {
  width: 60%; 
}
.Technical-bars .bar .progress-line.bootstrap span {
  width: 50%; 
}



.Technical-bars .bar .progress-line span::after {

  position: absolute;
  padding: 1px 8px;
  background-color: black;
  color:white;
  font-size: 12px;
  border-radius: 3px;
  top: -20px;
  right: -20px;
  animation: showText 0.5s 1.5s linear forwards;
  opacity: 0;
}
.Technical-bars .bar .progress-line.html span::after {
  content: '90%'; 
} 
.Technical-bars .bar .progress-line.css span::after {
  content: '70%'; 
} 
.Technical-bars .bar .progress-line.Javascript span::after {
  content: '60%'; 
} 
.Technical-bars .bar .progress-line.bootstrap span::after {
  content: '50%'; 
} 


.Technical-bars .bar .progress-line span::before{

  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-color: black;
  top: 10px;
  right: 0;
  animation: showText 0.5s 1.5s linear forwards;
  opacity: 0;
}

@keyframes showText{
  100%{
      opacity: 1;
  }
}

.radial-bars{
  width: 100%;
  display: flex;
 flex-wrap:wrap;
 justify-content: space-evenly;
 align-items: flex-start;

}

.radial-bars .radial-bar{
  width: 50%;
  height: 170px;
  margin-bottom: 10px;
  position: relative;
}
.radial-bars .radial-bar svg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 120px;
  height: 160px;
}

.radial-bars .radial-bar .progress-bar{
  stroke-width: 10;
  stroke: black;
  fill: transparent;
  stroke-dasharray: 502;
  stroke-linecap: round;
  stroke-dashoffset: 502;
  animation: animate-bar 1s linear forwards;
}

@keyframes animate-bar{
  100%{
      stroke-dashoffset: -1;
  }
}

.path{
  stroke-width: 10;
  stroke: #0ef;
  fill: transparent;
  stroke-dasharray: 502;
  stroke-dashoffset: 502;
  stroke-linecap: round;
}

.path-1{animation: animate-path-1 1s 1s linear forwards;}
.path-2{animation: animate-path-2 1s 1s linear forwards;}
.path-3{animation: animate-path-3 1s 1s linear forwards;}
.path-4{animation: animate-path-4 1s 1s linear forwards;}


@keyframes animate-path-1 {
  100%{
      stroke-dashoffset: 50;;
  }
}
@keyframes animate-path-2 {
  100%{
      stroke-dashoffset: 175;;
  }
}
@keyframes animate-path-3 {
  100%{
      stroke-dashoffset: 125;;
  }
}
@keyframes animate-path-4 {
  100%{
      stroke-dashoffset: 75;;
  }
}

.radial-bar .percentage{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  font-size: 17px;
  font-weight: 500;
  animation: showText 0.5 1s linear forwards;
  opacity: 0;
  color: aliceblue
}

.radial-bar .text{
  width: 100%;
  position: absolute;
  text-align: center;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50px);
  font-size: 17px;
  font-weight: 500;
  animation: showText 0.5 1s linear forwards;
  opacity: 0;
  color: aliceblue;

}
#skills{
  color: aliceblue;
}

.move{
  position: relative;
  left: -13%;
}

@media only screen and (min-width: 375px) and (max-width: 768px)  {
  .containers {
      width: 404px;
      height: 500px;
      padding: 0px 20px;
      margin-left: -38px;
  }
  .radial-bar .text {
      left: 23%;
  }
  .card-description {
    font-size: 12px;
  }

  .card-content {
    padding: 3px;
  background-color: transparent;
}
  .cardL{
    position: relative;
    left: 9px;
    padding: 0px 306px 1px 1px;
  }

  .cardR{
    position: relative;
    left: 9px;
    padding: 0px 306px 1px 1px;
  }
  .card-title{
    font-size: 15px;
  }

  .par{
    left: 44px;
  }
  
  .paragraph{
    left: 76px;
  }

  .para{
    left: 136px;
  }

  .desire{
    width: auto;
  }

}
@media only screen and (max-width: 320px) {
  .containers {
    width: 280px;
    padding: 0px 10px;
    margin-left: 10px;
  }
  .card-description {
    font-size: 8px;
  }
  .cardL, .cardR{
    position: relative;
    left: 10px;
  }

  .box-l{
    right: 2px;
  left: -4px;
  margin: 7px;
  padding: 0px 66px 0px 0px;
  font-size: xx-small;
}
  }


@media only screen and (min-width: 321px) and (max-width: 375px) {
  .containers {
    width: 320px;
    padding: 0px 20px;
    margin-left: 20px;
  }
  .card-description {
    font-size: small;
  }


}

@media only screen and (min-width: 376px) and (max-width: 425px) {
  .containers {
    width: 360px;
    padding: 0px 20px;
    margin-left: 30px;
  }
  .card-description {
    font-size: small;
  }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  .containers {
    width: 404px;
    padding: 0px 20px;
    margin-left: 116px;
  }
  .card-description {
    font-size: small;
  }

  .move{
    position: relative;
    right: 100px;
  }
}
</style>