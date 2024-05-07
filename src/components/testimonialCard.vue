<template lang="">
    <div class="container my-3">

        <h1 class="display-5 fw-bold text-black">Testimonials</h1>
    
        <div class="my-1">
            <dividerCompVue />
        </div>
    
       </div>
    <div id="body">
        <div class="testimonial">
            <span class="open quote">“</span>
            <div class="image">
                <div class="clip"></div>
                <img src="https://placehold.co/100">
            </div>
            <p>When I started with my Individual Coaching sessions I said to Coach Lee “at this rate some us will never own houses.” But over time I came to appreciate that I was not helpless. With a shift in mindset and small changes in my spending habits, I have eliminated all my consumer debt and now saving towards buying my first property. <span class="T">T</span>welve <span class="T">T</span> is an absolute blessing!</p>
            <div class="source">		
                <span>Elizma Smit (Individual Coaching client) </span>
            </div>
            <span class="close quote">”</span>
        </div>
        <div class="testimonial">
            <span class="open quote">“</span>
            <div class="image">
                <div class="clip"></div>
                <img src="https://placehold.co/100">
            </div>
            <p>Thank you <span class="T">T</span>welve <span class="T">T</span> for your teachings. They are not in vain. There are 2 days left to payday and I have a little over R10k in my bank account. What this course has taught me is that I am in complete control of my finances and #ICanHaveItLater. Never in my wildest dreams did I think that this would be me. Wamuhle uNkulunkulu bo 🙌🏾. Ever thankful for the way you have impacted my financial life .</p>
            <div class="source">		
                <span>Mbali Tsotetsi (Wealthy Minds Seminar client)</span>
            </div>
            <span class="close quote">”</span>
        </div>
    </div>
</template>
<script>
import dividerCompVue from './dividerComp.vue';
export default {
    components : {
        dividerCompVue
    }
}
</script>
<style scoped>

* {
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

#body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    border-image: fill 0 linear-gradient(rgba(0, 0, 1, 0.498), rgba(8, 8, 8, 0.725));
    overflow: hidden;
    background-image: url('https://cdn-images.imagevenue.com/65/66/25/ME17QI7W_o.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.testimonial {
    width: 500px;
    max-width: 100%;
    background: #0a9300;
    padding: 4em 3em;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 1 Im !important;
    box-shadow: 0 2px 2px hsl(0deg 0% 0%/.075), 0 3px 3px hsl(0deg 0% 0%/.075), 0 5px 5px hsl(0deg 0% 0%/.075), 0 9px 9px hsl(0deg 0% 0%/.075), 0 17px 17px hsl(0deg 0% 0%/.075);
}

.quote {
    position: absolute;
    font-size: 3em;
    width: 40px;
    height: 40px;
    background: rgb(1, 7, 88);
    color: #fff;
    text-align: center;
    line-height: 1.25;
}

.quote.open {
    top: 0;
    left: 0;
}

.quote.close {
    bottom: 0;
    right: 0;
}

p {
    width: 72%;
    display: inline-block;
    font-weight: bold;
    color: rgb(232, 232, 232);
}

.source {
    width: 40%;
    height: 100%;
    position: relative;
}

.source span {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    position: relative;
    margin-left: 1rem;
    text-align: right;
    color: rgb(232, 232, 232);
}

.source span:before {
    content: "\2014";
    display: inline;
    margin-right: 5px;
}

.image {
    transform: rotate(-5deg);
    position: absolute;
    top: 0.5em;
    right: 1.5em;
}

.image img {
    border: 10px solid #fff;
    margin: 0;
    padding: 0;
}

.clip {
    border: 2px solid #222;
    border-right: none;
    height: 75px;
    width: 20px;
    position: absolute;
    right: 30%;
    top: -15%;
    border-radius: 25px;
}

.clip:before {
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    height: 10px;
    width: 16px;
    border: 2px solid #222;
    border-bottom: none;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    z-index: 99;
}

.clip:after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 0;
    height: 40px;
    width: 16px;
    border: 2px solid #222;
    border-top: none;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 99;
}

.T{
  color: rgb(53, 230, 3);
}

@media (max-width:770px) {
    .testimonial {
        width: 500px;
        max-width: 100%;
        background: #0a9300;
        text-align: start;
        padding: 3em 1em;
        font-size: 0.9em !important;
        display: flex;
        align-items: flex-end;
        position: relative;
        box-shadow: 0 2px 2px hsl(0deg 0% 0%/.075), 0 3px 3px hsl(0deg 0% 0%/.075), 0 5px 5px hsl(0deg 0% 0%/.075), 0 9px 9px hsl(0deg 0% 0%/.075), 0 17px 17px hsl(0deg 0% 0%/.075);
    }
    .quote {
        display: none;
    }
}
@media (max-width:550px) {
    .testimonial {
        width: 500px;
        max-width: 100%;
        background: #0a9300;
        padding: 0.5em 0.5em;
        font-size: 0.9em !important;
        margin: 6px;
        display: flex;
        align-items: flex-end;
        position: relative;
        box-shadow: 0 2px 2px hsl(0deg 0% 0%/.075), 0 3px 3px hsl(0deg 0% 0%/.075), 0 5px 5px hsl(0deg 0% 0%/.075), 0 9px 9px hsl(0deg 0% 0%/.075), 0 17px 17px hsl(0deg 0% 0%/.075);
    }

    .quote {
        display: none;
    }
}
@media (max-width:385px) {
    .testimonial {
        width: 500px;
        max-width: 100%;
        background: #0a9300;
        padding: 0.5em 0.5em;
        margin: 10px;
        font-size: 0.9em !important;
        display: flex;
        align-items: flex-end;
        position: relative;
        box-shadow: 0 2px 2px hsl(0deg 0% 0%/.075), 0 3px 3px hsl(0deg 0% 0%/.075), 0 5px 5px hsl(0deg 0% 0%/.075), 0 9px 9px hsl(0deg 0% 0%/.075), 0 17px 17px hsl(0deg 0% 0%/.075);
    }

    .quote {
        display: none;
    }
    .image img {
        border: 2px solid #fff;
        margin: 0;
        padding: 0;
    }

    .source span {
        display: inline-block;
        font-weight: bold;
        font-size: 1em;
        position: relative;
        margin-left: 1rem;
        text-align: right;
        color: rgb(232, 232, 232);
    }

    .image {
        transform: rotate(-5deg);
        position: absolute;
        top: 0.5em;
        right: 0.6em;
    }
}
@media (max-width:325px) {
    .testimonial {
        width: 500px;
        max-width: 100%;
        background: #0a9300;
        padding: 1em 1em;
        margin: 10px;
        font-size: 1em;
        display: flex;
        align-items: flex-end;
        position: relative;
        box-shadow: 0 2px 2px hsl(0deg 0% 0%/.075), 0 3px 3px hsl(0deg 0% 0%/.075), 0 5px 5px hsl(0deg 0% 0%/.075), 0 9px 9px hsl(0deg 0% 0%/.075), 0 17px 17px hsl(0deg 0% 0%/.075);
    }
    .quote {
        display: none;
    }
    .source span {
        display: inline-block;
        font-weight: bold;
        font-size: 0.9em;
        position: relative;
        margin-left: 1rem;
        text-align: right;
        color: rgb(232, 232, 232);
    }
    .image {
        transform: rotate(-5deg);
        position: absolute;
        top: 0.5em;
        right: 0.6em;
    }
}
    
</style>