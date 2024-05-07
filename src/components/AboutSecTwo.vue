<template>
 <div class="row featurette">
      <div class="col-md-7">
        <h2 class="text-start featurette-heading fw-normal lh-1 text-start fw-bold">Empower Your Financial Journey with <span class="T">T</span>welve <span class="T">T</span>wo Coaching</h2>
        <p class="lead justify"><span class="T">T</span>welve <span class="T">T</span>wo is dedicated to empowering individuals on their financial journey through coaching.Our mission is to demystify personal finance, fostering confidence and success. Guided by a commitment to holistic financial wellness, we provide tailored coaching services, equipping clients with practical tools and strategies for spending plans,investing,and debt elimination.At <span class="T">T</span>welve <span class="T">T</span>wo, we belive in a collaborative approach, working alongside you to transform financial goals into achievable realities.Let us be your partner in navigating the path to financial well-being</p>
      </div>
      <div class="col-md-5" id="container">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" src="https://cdn-images.imagevenue.com/77/9c/79/ME17OWCE_o.jpg" alt="@twelve_TwoAffirmation" role="img" id="img" loading="lazy"/>
      </div>
    </div>

    <!-- <hr class="featurette-divider"> -->
    <secondaryDivider />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1 text-start fw-bold">Financial Coaching Tailored to Your Needs</h2>
        <p class="lead justify">At <span class="T">T</span>welve <span class="T">T</span>wo, we understand that personal finance is, well, personal. That's why our coaching services are tailored to your unique financial situation and goals. Whether you're just starting your journey to financial wellness or looking to take your finances to the next level, we're here to help.

          Our experienced coaches will work with you to create a customized plan that fits your lifestyle and aspirations. From creating a budget that works for you to developing strategies for smart investing and debt elimination, we've got you covered.

          But our support doesn't stop there. We believe in empowering our clients with the knowledge and tools they need to succeed long-term. That's why we provide ongoing guidance and support every step of the way, helping you to build confidence and achieve lasting financial success.

          So why wait? Take control of your financial future today with <span class="T">T</span>welve <span class="T">T</span>wo as your trusted partner.
        </p>
      </div>
      <div class="col-md-5" id="container">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" src="https://cdn-images.imagevenue.com/fd/f2/b7/ME17OWEC_o.jpg" alt="@twelveTwo_Affirmation" role="img" id="img" loading="lazy"/>
      </div>
    </div>

    <secondaryDivider />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1 text-start fw-bold">Collaborative Financial Wellness Journey</h2>
        <p class="lead justify">At <span class="T">T</span>welve <span class="T">T</span>wo, we're more than just financial coaches – we're partners on your journey to financial wellness. We believe in a collaborative approach, working alongside you to turn your financial goals into achievable realities.

          When you choose <span class="T">T</span>welve <span class="T">T</span>wo, you're not just getting a coach – you're joining a community dedicated to demystifying personal finance and fostering confidence and success. Our team is here to support you every step of the way, whether you're looking to create a spending plan, invest wisely, or eliminate debt.

          But we don't just tell you what to do – we show you how to do it. Through personalized coaching sessions and practical tools and strategies, we'll help you build the skills and knowledge you need to make informed financial decisions for yourself and your future.

          So why go it alone? Let <span class="T">T</span>welve <span class="T">T</span>wo be your partner in navigating the path to financial well-being. Together, we'll empower you to take control of your finances and achieve the life you've always dreamed of.
        </p>
      </div>
      <div class="col-md-5" id="container">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" src="https://cdn-images.imagevenue.com/2b/ac/f2/ME17OWE5_o.jpg" alt="@twelveTwoAffirmation" role="img" id="img" loading="lazy"/>
      </div>
    </div>
</template>
<script>
import secondaryDivider from './secondaryDivider.vue';
export default {

  components: {
    secondaryDivider
  }
    
}
</script>
<style>
#container {
  overflow: hidden;
}
.justify{
  text-align: justify;
}
/* #container #img {
  display: block;
  transition: transform 1s;
} */
#container #img {
  transform: scale(1.3);
  transform-origin: 50% 50%;
}

.T{
  color: rgb(53, 230, 3);
}
</style>