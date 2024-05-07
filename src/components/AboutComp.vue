<template >


  <div id="about">
    <section class="light">

      <div class="container py-2" id="gridifyy">

        <div class="h1 text-center text-dark" id="pageHeaderTitle">About Us</div>

        <article class="postcard light blue">

          <div class="postcard__text t-dark">
            <h1 class="postcard__title blue"><a href="#">Empowering Financial Health for South Africans</a></h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt ear">Financial shame, financial distress, and financial illiteracy are common in many South African households, often without proper assistance. Twelve Two is here to fight for good financial health for all South Africans.</div>
          </div>

        </article>

        <article class="postcard light red">

          <div class="postcard__text t-dark">
            <h1 class="postcard__title red"><a href="#">Personalized Consulting and Coaching</a></h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt ear">Our consulting and coaching services are personalized to your specific financial situation and goals. Whether you're starting your journey to financial wellness or aiming to enhance your finances, we're here to support you.</div>
          </div>

        </article>

        <article class="postcard light green">

          <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">Comprehensive Financial Guidance</a></h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt ear">Our skilled team will collaborate with you to develop a tailored plan that suits your lifestyle and aspirations. From crafting a practical spending plan to devising strategies for debt reduction and intelligent investing, we cover all aspects. And our assistance doesn't end there.</div>
          </div>

        </article>

        <article class="postcard light yellow">

          <div class="postcard__text t-dark">
            <h1 class="postcard__title yellow"><a href="#">Expertise You Can Trust</a></h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt ear">We provide unbiased information, objective curriculum, and coaching. With over two decades of combined experience in the investment management industry, our team works closely with top-tier experts in legal, tax, accounting, and financial planning. This collective expertise ensures comprehensive and informed guidance to navigate the complexities of your financial journey.</div>
          </div>

        </article>

      </div>

    </section>

   

  
  
  
  
  <div id="moreAbout" class="container">
    

    <div class="container my-4" >
  
      <h1 class="display-5 fw-bold text-black">More about us</h1>
  
      <dividerComp />
  
    </div>

    
    <AboutSecTwo />
    
  </div>
  
  <div class="container">

    <h1 class="display-5 fw-bold text-black">Our services</h1>

    <dividerComp />

  </div>

  <div id="abtSec" class="container-fluid">


    <div class="col-lg-4 pt-5" id="services">
      
      <div id="boxed" class="bd-placeholder-img rounded-circle">
      
        <i class="fa-solid fa-chalkboard-user fa-2xl" style="color: #000000;" id="scaleIcon"></i>
                      
        </div>
                  
        <h2 class="fw-bold fs-4">Individual Coaching</h2>
                  
        <p class="justify container">Personalized guidance on day-to-day and long term financial management, savings, investments, and achieving lasting financial freedom. We empower individuals to focus on their life's purpose with financial confidence.</p>
      
      </div>
  
  
      <div class="col-lg-4 pt-5" id="services">
        
        <div id="boxed" class="bd-placeholder-img rounded-circle">
          
          <i class="fa-solid fa-coins fa-2xl" style="color: #000000;" id="scaleIcon"></i>
          
        </div>
        
        <h2 class="fw-bold fs-4">Rands and Sense</h2>
        
        <p class="justify container">This is our regular online series addressing diverse personal finance and business themes such as debt, spending plans, saving vs investing etc. </p>
        
      </div>
      
      <div class="col-lg-4 pt-5" id="services">
      
        <div id="boxed" class="bd-placeholder-img rounded-circle">
      
          <i class="fa-solid fa-brain fa-2xl" style="color: #050505;" id="scaleIcon"></i>
      
        </div>
      
        <h2 class="fw-bold fs-4">Wealthy mind seminars</h2>
      
        <p class="justify container">We bring together an unstoppable network of individuals and communities – people who care about financial health to make a difference. These in-depth sessions provide practical strategies for improving money management and building intergenerational wealth. Topics include the law of contracts in marriage and business, estate planning, short and long-term insurance, education planning, tax and many more. </p>
      
      </div>

      <div class="col-lg-4 pt-5" id="services">
      
      <div id="boxed" class="bd-placeholder-img rounded-circle">

        <i class="fa-solid fa-comments-dollar fa-2xl" style="color: #000000;" id="scaleIcon"></i>

      </div>

      <h2 class="fw-bold fs-4">Customised Financial Wellness Programs</h2>

      <p class="justify container">Our partnership with organisations involves crafting and guiding personalised financial wellness initiatives for employees or beneficiaries. These programs target reducing problems like absenteeism due to financial stress or garnishee orders for staff in debt, while also enhancing comprehension of workplace pension and insurance products.</p>

    </div>

  </div>
  
  </div>
    
</template>
<script>
  import AOS from 'aos';
  import CarouselComp from './CarouselComp.vue';
  import dividerComp from './dividerComp.vue';
  import AboutSecTwo from './AboutSecTwo.vue';
  import GlobalBtnComp from './GlobalBtnComp.vue';
  import secondaryDivider from './secondaryDivider.vue';

export default {
  components: {
    CarouselComp,
    dividerComp,
    AboutSecTwo,
    GlobalBtnComp,
    secondaryDivider
  },
  mounted() {
    AOS.init();
  },
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

  :root {
    --main-green: #79dd09;
    --main-green-rgb-015: rgba(121, 221, 9, 0.1);
    --main-yellow: #bdbb49;
    --main-yellow-rgb-015: rgba(189, 187, 73, 0.1);
    --main-red: #bd150b;
    --main-red-rgb-015: rgba(189, 21, 11, 0.1);
    --main-blue: #0076bd;
    --main-blue-rgb-015: rgba(0, 118, 189, 0.1);
  }
  .justify{
    text-align: justify !important;
  }

  #about, #moreAbout{
    min-height: 100vh;
  }

  #gridifyy{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  #card{
    background: rgba(255, 255, 255, 0.198);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.146);
    box-shadow: 7px 7px 15px 1px rgba(0, 0, 0, 0.363);
  }

  #cardsm{
    background: linear-gradient(to left,rgb(0, 0, 0), rgb(34, 34, 34));
    border: 1px solid rgb(0, 0, 0) !important;
    margin-bottom: 18px !important;
  }


  #carousel{
    display: flex !important;
    max-width: 100% !important;
    background-image: url('https://cdn-images.imagevenue.com/21/a2/3e/ME17O37I_o.jpg');
    border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.243), rgba(0, 0, 0, 0.117));
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  #txt{
    position: absolute;
    top: 7%;
    left: 0.3%;
    color: rgb(0, 0, 0);
  }
  
  #bottomSec{
    min-height: 100vh;
  }

  #abtSec{
    display: flex;
    justify-content: center;
    overflow: scroll;
    flex-wrap: wrap;
    gap: 10px;
  }

  .ul{
    height: 5px;
    width: 90px;
    background-color: rgb(133, 247, 107);
    position: absolute;
    box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.349);
    top: 12.6%;
    left: 0.3%;
  }

  /* #services{
    border: 1px solid #79dd09;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  } */
  
  [data-boxed]{
    min-height: 50vh;
    background-image: url("https://cdn-images.imagevenue.com/0c/da/8c/ME17KQ92_o.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale();
  }
  
  #scaleIcon{
    transform: scale(150%);
    margin-bottom: 30px;
    padding: 25px;
    border-radius: 50%;
  }
  
  #scaleIcon:hover{
    transform: scale(170%);
    transition: all 0.1s ease-in-out;
  }

  #btn{
    border: 1px solid rgba(0, 0, 0, 0);
    background: whitesmoke;
    color: rgb(0, 0, 0);
    font-weight: 600;
  }
  #btn:hover{
   /* background: linear-gradient(to right, #48DD22 30%, rgb(1, 1, 81)); */
    border: 1px solid rgb(9, 2, 82);
    color: rgb(9, 2, 82);
    font-weight: 600;
  }

  #scroll{
    overflow: scroll;
    height: 190px;
  }

  .T{
    color:rgb(53, 230, 3);
  }
  .light {
   background: #f3f5f7;
  }

a,
a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgb(21 80 23 / 66%);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #ffffff;
}

.postcard.light {
  background-color: #e1eae2;
}

.postcard.light .t-dark {
  color: #18151f;
}

.postcard a {
  color: inherit;
}

.ear{
  display: contents;
  
}
.postcard h1,
.postcard .h1 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.postcard .small {
  font-size: 80%;
}

.postcard .postcard__title {
  font-size: 1.75rem;
}

.postcard .postcard__img {
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
}

.postcard .postcard__img_link {
  display: contents;
}

.postcard .postcard__bar {
  width: 50px;
  height: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: rgb(53, 230, 3);
  transition: width 0.2s ease;
}

.postcard .postcard__text {
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.postcard .postcard__preview-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
}

.postcard .postcard__tagbox {
  display: flex;
  flex-flow: row wrap;
  font-size: 14px;
  margin: 20px 0 0 0;
  padding: 0;
  justify-content: center;
}

.postcard .postcard__tagbox .tag__item {
  display: inline-block;
  background: rgba(83, 83, 83, 0.4);
  border-radius: 3px;
  padding: 2.5px 10px;
  margin: 0 5px 5px 0;
  cursor: default;
  user-select: none;
  transition: background-color 0.3s;
}

.postcard .postcard__tagbox .tag__item:hover {
  background: rgba(83, 83, 83, 0.8);
}

.postcard.light:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  border-radius: 10px;
}

.postcard.light:hover .postcard__bar {
  width: 100px;
}


  @media (max-width: 995px) {
    #abtSec{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
  @media (max-width: 445px) {
    #abtSec{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    #carousel{
      display: flex !important;
      max-width: 100% !important;
      background-image: url('https://cdn-images.imagevenue.com/21/a2/3e/ME17O37I_o.jpg');
      height: 550px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #scroll{
      overflow: scroll;
      height: 200px;
    }
    #card{
      color: white !important;
      width: 100%;
    }

    #mediaQ{
      font-size:0.7em;
    }

    #mediaQtxt{
      font-size: 1em !important;
      width: 100%;
      text-align: center;
      overflow: scroll;
      max-height: 145px;
    }

    @media screen and (min-width: 769px) {
  .postcard.light {
    flex-wrap: inherit;
  }

  .postcard.light .postcard__title {
    font-size: 2rem;
  }

  .postcard.light .postcard__tagbox {
    justify-content: start;
  }

  .postcard.light .postcard__img {
    max-width: 300px;
    max-height: 100%;
    transition: transform 0.3s ease;
  }

  .postcard.light .postcard__text {
    padding: 3rem;
    width: 100%;
  }

  .postcard.light:nth-child(2n+1) {
    flex-direction: row;
  }

  .postcard.light:nth-child(2n+0) {
    flex-direction: row-reverse;
  }

  .postcard.light:nth-child(2n+1) .postcard__text::before {
    left: -12px !important;
    transform: rotate(4deg);
  }

  .postcard.light:nth-child(2n+0) .postcard__text::before {
    right: -12px !important;
    transform: rotate(-4deg);
  }
}

@media screen and (min-width: 1024px) {
  .postcard.light:before {
    background: #e1e5ea;
  }

  .postcard.light .postcard__text {
    padding: 2rem 3.5rem;
  }

  .postcard.light .postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    top: -20%;
    height: 130%;
    width: 55px;
    background: #e1e5ea;
  }
}
  }

  
</style>