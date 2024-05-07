<template>

    <div class="container col-xl-10 col-xxl-8">
      
      <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-12 text-center text-lg-center" id="vidcontainer">
            <!-- <video src="../assets/VID-20240214-WA0005.mp4" type="video/mp4"
              autoplay
              muted
              loop
              id="videoIsPlayable123"
            >
            </video> -->
            <h1 class="display-5 fw-bold lh-1 text-white mb-2" id="position-234-00" data-aos="fade-right" data-aos-anchor-placement="center">Keep in touch with us!</h1>

            <div class="mb-4">
              <dividerComp />
            </div>

            <div class="container mt-4 d-flex justify-content-evenly fw-bold text-white align_items_to_vh_vw" data-aos="fade-right" data-aos-anchor-placement="center">

              <a href="https://www.facebook.com/twelvetwoglobal" target="_blank" id="scaleIcon">
                <i class="fa-brands fa-facebook fa-2xl" style="color: #ffffff;"></i>
              </a>

              <a href="" id="scaleIcon">
                <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
              </a>

              <a href="https://mail.google.com/mail/u/0/#all?compose=lqrsljcWMSwjldsHvCmSwkZLcVMqNnRCzhkqsxLvbMDbQkrdgFhrNlVxqDTsHMsrXRqrtqXprLPJkwffp" target="_blank" id="scaleIcon">
                <i class="fa-solid fa-envelope fa-2xl" style="color: #ffffff;"></i>
              </a>

            </div>
            <!-- <div class="container mt-3 p-5 d-flex justify-content-evenly fw-bold text-white" data-aos="fade-right" data-aos-anchor-placement="center">
              <i class="fa-solid fa-location-dot fa-2xl" style="color: #ffffff;" id="scaleIcon"></i>
              5 Alice Lane, Sandton, 2196
            </div> -->

           
          </div>
          <!-- <div class="col-md-10 mx-auto col-lg-5">

            <form class="p-4 p-md-5" id="formBody" action="" method="post">

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="e-mail">
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingFirstname" placeholder="firstname">
                <label for="floatingFirstname">First name</label>
              </div>

              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Last name</label>
              </div>

              <div class="d-flex justify-content-center">
                <ContactBtnComp textContent="Contact us"/>
              </div>

              <secondaryDivider />

              <small class="text-white-50">We will get in touch with you soon.</small>
              
              <secondaryDivider />

            </form>

          </div> -->

        </div>
        
      </div>


</template>
<script>
import ContactBtnComp from './GlobalBtnComp.vue';
import dividerComp from './dividerComp.vue';
import secondaryDivider from './secondaryDivider.vue';
export default {
  components : {
    ContactBtnComp,
    dividerComp,
    secondaryDivider
  }
}
</script>
<style scoped>

#formBody{
    border: 1px solid rgb(43, 210, 28);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

#floatingInput, #floatingFirstname, #floatingPassword{
  border: 1px solid rgb(43, 210, 28);
  border-radius: 5px;
}

#videoIsPlayable123{
  height: 460px;
  width: 100%;
} 


#scaleIcon:nth-child(1):hover::after{
  position: absolute;
  content: "Find us on facebook";
  height: 50px;
  left: 28%;
  width: 150px;
  background-color: rgb(43, 210, 28);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: translateAnimation;
  animation-duration: 1s;
}
#scaleIcon:nth-child(2):hover::after{
  position: absolute;
  content: "Find us on instagram";
  height: 50px;
  left: 53%;
  width: 150px;
  background-color: rgb(43, 210, 28);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: translateAnimation;
  animation-duration: 1s;
}
#scaleIcon:nth-child(3):hover::after{
  position: absolute;
  content: "coachlee@twelvetwoglobal.com";
  height: 50px;
  left: 79%;
  width: 150px;
  background-color: rgb(43, 210, 28);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9.7px;
  animation-name: translateAnimation;
  animation-duration: 1s;
}

@keyframes translateAnimation {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}

@media (max-width: 490px) {
  #scaleIcon{
    transform: scale(80%);
  }

  .align_items_to_vh_vw{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px !important;
  }
}
    
</style>