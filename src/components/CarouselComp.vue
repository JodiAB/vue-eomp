<template>

  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper my-3 shadow rounded-2"
  >
    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="Get out of debt - Through our partnership with the dfree® Global Foundation, you get financial freedom lessons at your fingertips from virtually anywhere through the dfree® online Academy "/>
        <div class="d-flex justify-content-center">
          <a class="btn text-white my-2" id="button" target="_blank" href="https://academy.dfreefoundation.org/">Click here</a> 
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="Access your credit report - Experian provides free credit reports and free credit scores on My Credit Check"/>
        <div class="d-flex justify-content-center">
          <a class="btn text-white my-2" id="button" target="_blank" href="https://www.mycreditcheck.co.za/">Click here</a>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="South Africans broke and stressed"/>
        <div class="d-flex justify-content-center">
          <a class="btn text-white my-2" id="button" target="_blank" href="https://mg.co.za/news/2023-10-18-broke-and-stressed-south-africans-spiral-into-debt-trap/">Click here</a>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="Rachel Kolisi on managing money"/>
        <div class="d-flex justify-content-center">
          <a class="btn text-white my-2" id="button" target="_blank" href="https://omny.fm/shows/other-peoples-money/other-people-s-money-rachel-kolisi-co-founder-of-k">Click here</a>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="Record keeping for entrepreneurs"/>
        <div class="d-flex justify-content-center">
          <a class="btn text-white my-2" id="button" target="_blank" href="https://www.taxtim.com/za/blog/6-reasons-accounting-records-are-critical-to-your-small-business">Click here</a>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="height_slide rounded-2 apply_primary_company_color">
      
      <div id="cd" class="py-3 m-4 justify-sm px-3">
        <offcanvasCard cardContent="Time - the secret to long-term wealth creation"/>
        <a class="btn text-white my-2" id="button" target="_blank" href="https://www.allangray.co.za/latest-insights/corporate-citizenorate-citizenship/time-the-greatest-gift-of-all/">Click here</a>
      </div>

    </swiper-slide>

  </swiper>

</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import offcanvasCard from './offcanvasCard.vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      offcanvasCard
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
</script>
<style scoped>

  .height_slide{
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .apply_primary_company_color{
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(50, 212, 53);
  }

  
  #button{
    background: radial-gradient(circle, rgb(50, 212, 53), rgb(50, 212, 13));
    color: white;
  }

  #button:hover{
    transform: scale(110%);
    transition: all 0.1s ease-in-out;
  }

    #cd{
      width: 80%;
      background-color: rgb(252, 250, 250);
      border-radius: 15px;
      box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.13);
    }

    #cardsBody{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 550px) {
      #cardsBody{
        display: flex;
        justify-content: center;
      }

      .height_slide{
        height: 300px;
        width: 100%;
        font-size: 13px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .justify-sm{
        text-align: justify;
      }

      .apply_primary_company_color{
        background-color: rgb(255, 255, 255);
        border: none;
      }
    }

</style>