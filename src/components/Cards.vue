<template>
    <div class="centerflipcards">
        <div class="square-flip">
            <div class='square' >
                <div class="square-container">
                    <div class="align-center"></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[0].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[0].img">
                   
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2'>
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[0]['para'] : 'Loading...'}}
                    <div  id="look">
                        <button class="card__button">
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>




    
        <div class="square-flip">
            <div class='square' data-image="https://iili.io/J74tsu1.md.png">
                <div class="square-container">
                    <div class="align-center boxshadow" src="https://iili.io/J74tsu1.md.png" alt="J74tsu1.md.png" border="0" ></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[1].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[1].img">
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2' >
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[1]['para'] : 'Loading...'}}

                    <div  id="look">
                        <button class="card__button">
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>



    
        <div class="square-flip">
            <div class='square'>
                <div class="square-container">
                    <div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" class="boxshadow" alt=""></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[2].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[2].img">
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg">
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[2]['para'] : 'Loading...'}}
                    <div  id="look">
                        <button class="card__button">
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>
      
      
    </div>






    <div class="centerflipcards">
        <div class="square-flip">
            <div class='square' >
                <div class="square-container">
                    <div class="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" class="boxshadow" alt=""></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[3].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[3].img">
                   
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2'>
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[3]['para'] : 'Loading...'}}
                    <div  id="look">
                        <button class="card__button">
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>




    
        <div class="square-flip">
            <div class='square' data-image="https://iili.io/J74tsu1.md.png">
                <div class="square-container">
                    <div class="align-center boxshadow" src="https://iili.io/J74tsu1.md.png" alt="J74tsu1.md.png" border="0" ></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[4].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[4].img">
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2' >
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[4]['para'] : 'Loading...'}}
                    <div  id="look">
                        <button class="card__button" >
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>



    
        <div class="square-flip">
            <div class='square' data-image="https://iili.io/J74tsu1.md.png">
                <div class="square-container">
                    <div class="align-center boxshadow" src="https://iili.io/J74tsu1.md.png" alt="J74tsu1.md.png" border="0" ></div>
                    <h2 class="textshadow">{{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[5].heading : 'Loading...'}}</h2>
                    <img :src="$store.state.ProjCard.ProjCard[5].img">
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class='square2' >
                <div class="square-container2">
                    <div class="align-center"></div>
                    {{$store.state.ProjCard.ProjCard.length ? $store.state.ProjCard.ProjCard[5]['para'] : 'Loading...'}}
                    <div  id="look">
                        <button class="card__button">
                            <span @click="s"><i class='bx bxl-github'></i></span>   
                        </button>
                        <button >
                            <span @click="s"><i class='bx bxl-netlify' ></i></span>   
                        </button>
                    </div>
                </div>
                <div class="flip-overlay"></div>
            </div>
        </div>

      
      
    </div>

    
    
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
button{
    margin-right: 10px;
}
.square-flip{
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;

    -webkit-transform: perspective(1000px);
    -moz-transform: perspective(1000px);
    -ms-transform: perspective(1000px);
    transform: perspective(1000px);

    -webkit-transform-style: preserve-3d; 
    -moz-transform-style: preserve-3d; 
    -ms-transform-style: preserve-3d; 
    transform-style: preserve-3d; 

    /*border:1px solid #efefef;*/
    
    position:relative;
    float:left;
    margin:20px;

    }
    .square-flip{
        width:400px;
        height:400px;
    }
    .square,.square2{
        width:100%;
        height:100%;
    }
    .square{

        background-size: cover;
        background-position:center center;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
        overflow: hidden;

        position:absolute;
        top:0;


        -webkit-backface-visibility: hidden; 
        backface-visibility: hidden;
    }
    .square-flip .square{
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        z-index:1;
    }
    .square-flip:hover .square{
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
    }


    .square2{

        background-size: cover;
        background-position:center center;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
        overflow: hidden;

        position:absolute;
        top:0;

        -webkit-backface-visibility: hidden; 
        backface-visibility: hidden;
    }
    .square-flip .square2{
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        z-index:1;
    }
    .square-flip:hover .square2{
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    /*Square content*/
    .square-container{
        padding:40px;
        text-align:center;
        position:relative;
        top:50%;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);

    
        -webkit-transform: translateY(-50%) translateX(0px)  scale(1);
        -ms-transform: translateY(-50%) translateX(0px)  scale(1);
transform: translateY(-50%) translateX(0px)  scale(1);
        transform-style: preserve-3d;
        z-index:2;
    }
    .square-flip:hover .square-container{
        
        -webkit-transform: translateY(-50%) translateX(-650px)  scale(.88);
        -ms-transform: translateY(-50%) translateX(-650px)  scale(.88);
  transform: translateY(-50%) translateX(-650px)  scale(.88);
        transform-style: preserve-3d;

    }

    .square-container2{
        padding:40px;
        text-align:center;
        position:relative;
        top:50%;

        -ms-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
            -webkit-transition: transform 0.60s cubic-bezier(.5,.3,.3,1);

        
        -webkit-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);
        -ms-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);
  transform: translateY(-50%) translateX(650px) translateZ(60px) scale(.88);

        transform-style: preserve-3d;
        z-index:2;
    }
    .square-flip:hover .square-container2{
        
        -webkit-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
        -ms-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
        transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
  transform-style: preserve-3d;
    }



    /*Style text*/
    .square-flip h2{
        color:white;
        font-family: "Open Sans";
        font-weight:700;
        font-size:22px;
    }
    .square-flip h3{
        color:white;
        font-family: "Open Sans";
        font-weight:500;
        font-size:16px;
        line-height:26px;
    }
    /*Elements*/
    .flip-overlay{
        display:block;
        background:rgba(0,0,0,0.5);
        width:100%;
        height:100%;
        position:absolute;
        top:0;
    }
    .align-center{
        margin:0 auto;
    }
    

    /*ADD SHADOWS OPTIONAL*/
    .square-flip .square .boxshadow, .square-flip .square .textshadow, .square-flip .square2 .boxshadow, .square-flip .square2 .textshadow{
        -ms-transition: 0.60s;
            transition: 0.60s;
            -webkit-transition: 0.60s;
    }

    .square-flip .square .boxshadow{
        -webkit-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }
    .square-flip .square .textshadow{
        -webkit-text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        text-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }
    .square-flip:hover .square .boxshadow, .square-flip:hover .square .textshadow{
        -webkit-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }


    .square-flip .square2 .boxshadow{
        -webkit-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        box-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }
    .square-flip .square2 .textshadow{
        -webkit-text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        -moz-text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
        text-shadow: 240px 42px 58px -8px rgba(0,0,0,0.0);
    }
    .square-flip:hover .square2 .boxshadow, .square-flip:hover .square2 .textshadow{
        -webkit-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        -moz-box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
        box-shadow: 24px 42px 58px -8px rgba(0,0,0,0.3);
    }

    
    /*You can delete this style*/
    .centerflipcards{
  display:block;
        width:1330px;
  height:440px;
        text-align:center;
        margin:0 auto;
        margin-top:25px;
    }
.clearfix{clear:both;}
.centerflipcards p{
  font-family:"Open Sans";
  font-size:13px;
  margin-top:10px;
  font-weight:700;
}
   

</style>