<template lang="">
    <div id="freeRes" class="desire">
        <div class="container col-xxl-12 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6 container">
                <img src="https://cdn-images.imagevenue.com/fd/f2/b7/ME17OWEC_o.jpg" class="d-block mx-lg-auto img-fluid rounded-5 shadow adjust_img_width_to_screen" alt="@twelveTwo_Affirmation" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6 rounded-5 height_">
                <h1 class="display-5 fw-bold text-white lh-1 mb-3">Free resources <i class="fa-solid fa-book fa-sm" style="color: white;"></i></h1>
                <div class="container">
                    <CarouselComp />
                </div>
                <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div> -->
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import CarouselComp from './CarouselComp.vue';
export default {
    components : {
        CarouselComp
    }
}
</script>
<style scoped>
    #freeRes{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: radial-gradient(circle, hsla(233, 100%, 60%, 0.788), rgb(255, 255, 255)); */
        background-attachment: fixed;
    }

    .justify{
        text-align: justify;
    }
    .desire{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 110vh;
  background: linear-gradient(-50deg, rgb(13, 255, 0), #2da837, rgb(30 33 79), #2da860);
  background-size: 200% 200%; 
  animation: fire 7s ease infinite;

}

@keyframes fire {
  0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}
}

    .height_{
        /* min-height: 550px; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 376px) {
        .adjust_img_width_to_screen{
            min-width: 280px !important;
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 326px) {
        .adjust_img_width_to_screen{
            min-width: 280px !important;
            height: 300px;
            object-fit: cover;
        }
    }
</style>