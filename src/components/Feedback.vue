<template>
    <section class="card">
        <div class="card__circle card__circle1"></div>
        <div class="card__circle card__circle2"></div>

        <div class="card__container bd-container">
            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[0].img"  class="card__img">

                <div class="card__data">
                    <h2 >{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[0].name : 'Loading...'}}</h2>
                    <span class="card__profession">Web Developer</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[0]['des'] : 'Loading...'}}</p>
                </div>

                
                
                
            </div>

            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[1].img"  class="card__img">

                <div class="card__data">
                    <h2>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[1].name : 'Loading...'}}</h2>
                    <span class="card__profession">Product Designer</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[1]['des'] : 'Loading...'}}</p>
                </div>

                

                
            </div>

            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[2].img"  class="card__img">

                <div class="card__data">
                    <h2>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[2].name : 'Loading...'}}</h2>
                    <span class="card__profession">Ui/Ux Design</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[2]['des'] : 'Loading...'}}</p>
                </div>

                

                
            </div>
        </div>
        <br>
        <div class="card__container bd-container">
            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[3].img"  class="card__img">

                <div class="card__data">
                    <h2>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[3].name : 'Loading...'}}</h2>
                    <span class="card__profession">Web Developer</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[3]['des'] : 'Loading...'}}</p>
                </div>

                
                
                
            </div>

            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[4].img"  class="card__img">

                <div class="card__data">
                    <h2>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[4].name : 'Loading...'}}</h2>
                    <span class="card__profession">Product Designer</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[4]['des'] : 'Loading...'}}</p>
                </div>

                

                
            </div>

            <div class="card__glass">
              <img :src="$store.state.Feedback.Feedback[5].img"  class="card__img">
               

                <div class="card__data">
                    <h2>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[5].name : 'Loading...'}}</h2>
                    <span class="card__profession">Ui/Ux Design</span>
                    <p>{{$store.state.Feedback.Feedback.length ? $store.state.Feedback.Feedback[5]['des'] : 'Loading...'}}</p>
                    
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
/*========== GOOGLE FONTS ==========*/


/*========== VARIABLES CSS ==========*/
:root {
  /*========== Colors ==========*/
  --first-color: #4D49BF;
  --second-color: #05DBF2;
  --body-color: #DFE9F2;
  --title-color: #1C1C22;
  --text-color: #58576B;

  /*========== Font and typography ==========*/
  --body-font: 'Montserrat', sans-serif;
  --normal-font-size: .938rem;
  --h3-font-size: 1.125rem;
  --small-font-size: .75rem;
}

@media screen and (min-width: 968px) {
  :root {
    --normal-font-size: 1rem;
    --h3-font-size: 1.25rem;
    --small-font-size: .813rem;
  }
}

/*========== BASE ==========*/
body {
    margin: 0;
    padding: 0;
  }
h3{
  margin: 0;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
}

.bd-container{
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

/*========== CARD GLASS ==========*/
.card{
  position: relative;
  overflow: hidden;
  width: 100%;
  background: none;
}

.card__container{
  display: grid;
  gap: 1.5rem;
}

.card__glass{
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 2.5rem;
  background: linear-gradient(130deg,
              rgba(251,251,254,.6),
              rgba(251,251,254,.2));
  box-shadow: inset 2px 2px 1px rgba(251,251,254,.3)
              inset -2px -2px 1px rgba(251,251,254,.2);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
}

.card__img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #F4F4FB;
  margin-bottom: 1rem;
}

.card__data{
  margin-bottom: 1.5rem;
}

.card__title{
  font-size: var(--h3-font-size);
  color: var(--title-color);
  font-weight: 600;
  margin-bottom: .25rem;
}

.card__profession{
  font-size: var(--small-font-size);
  color: var(--text-color);
  font-weight: 500;
}

.card__button{
  display: inline-block;
  background: linear-gradient(130deg,
              rgba(251,251,254,.9),
              rgba(251,251,254,.2));
  padding: .75rem 1.5rem;
  border-radius: .5rem;
  color: var(--title-color);
  font-weight: 500;
  transition: .4s;
}

.card__button:hover{
  background: linear-gradient(130deg,
              rgba(251,251,254,1),
              rgba(251,251,254,.4));
}



.card__circle{
  position: absolute;
  width: 250px;
  height: 250px;
  background: linear-gradient(130deg,
              rgba(77,73,191,.8),
              rgba(255,255,255,.2));
  border-radius: 50%;
}

.card__circle1{
  top: 20%;
  left: -20%;
}

.card__circle2{
  bottom: -5%;
  right: -25%;
  background: linear-gradient(130deg,
              rgba(5,219,242,.8),
              rgba(255,255,255,.2));
}

/*========== MEDIA QUERIES ==========*/
@media screen and (min-width: 568px){
  .card__container{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 720px){
  .bd-container{
    margin-left: auto;
    margin-right: auto;
  }

  .card{
    padding: 0;
  }

  .card__container{
    height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
  }

  .card__circle1{
    left: 5%;
    top: 12%;
  }

  .card__circle2{
    right: 8%;
    bottom: 15%;
  }
}
</style>