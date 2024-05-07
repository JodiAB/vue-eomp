<template>
    <a href="https://bookem.co.za/" id="btn" class="btn">

        {{ btnContent="Workshops & seminars" }}

    </a>

    <a href="#contact" id="btn" class="btn">

        {{ btnContent="One-on Coaching" }}

    </a>

    <a href="#FreeResources" id="btn" class="btn">

        {{ btnContent="Free resources" }}

    </a>

</template>

<script setup>
    defineProps({
     btnContent: String,
    })
</script>

<style scoped>

#btn:nth-child(1){
    color: rgb(255, 255, 255);
    width: 20%;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid rgb(255, 255, 255);
    padding: 10px 5px;
    font-size: 15px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.3s;
    background-color: #47dd2200;
    overflow: hidden;
    /* border-radius: 50px; */
    box-shadow: inset 10px 10px 10px 10px #fbfbfb2d;
}
#btn:nth-child(2){
    color: rgb(255, 255, 255);
    width: 20%;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 5px;
    font-size: 15px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.3s;
    background-color: #48DD22;
    overflow: hidden;
    /* border-radius: 50px; */
    box-shadow: inset 10px 10px 10px 10px #2ba4152d;
}
#btn:nth-child(3){
    color: rgb(255, 255, 255);
    width: 20%;
    border: 1px solid rgb(255, 255, 255);
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 5px;
    font-size: 15px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.3s;
    background-color: #ffffff00;
    overflow: hidden;
    /* border-radius: 50px; */
    box-shadow: inset 10px 10px 10px 10px #ffffff2d;
}

#btn:hover {
    color: rgb(255, 255, 255);
}

#btn::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -50px;
    transform: skewX(0deg);
    background-color: #6eff693c;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;
    transition: all 0.6s;
}

#btn:hover::after{
    width: 180%;
}

@media (max-width: 800px) {
    #btn:nth-child(1) {
        color: rgb(255, 255, 255);
        width: 35%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #btn:nth-child(2) {
        color: rgb(255, 255, 255);
        width: 35%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #btn:nth-child(3) {
        color: rgb(255, 255, 255);
        width: 35%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #btn::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: -50px;
        transform: skewX(50deg);
        background-color: #00000081;
        z-index: 1;
        transition: all 1s;
    }

    #btn:hover::after {
        width: 250%;
    }
}


@media (max-width: 400px) {
    #btn:nth-child(1) {
        color: rgb(255, 255, 255);
        width: 50%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
    }
    #btn:nth-child(2) {
        color: rgb(255, 255, 255);
        width: 50%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
    }
    #btn:nth-child(3) {
        color: rgb(255, 255, 255);
        width: 50%;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 5px;
        font-size: 10px;
    }

    #btn::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: -50px;
        transform: skewX(50deg);
        background-color: #00000081;
        z-index: 1;
        transition: all 1s;
    }

    #btn:hover::after {
        width: 250%;
    }

}




@media (max-width: 325px) {
    #btn:nth-child(1) {
    color: rgb(255, 255, 255);
    width: 35%;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 5px;
    font-size: 10px;
}
    #btn:nth-child(2) {
    color: rgb(255, 255, 255);
    width: 35%;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 5px;
    font-size: 10px;
}
    #btn:nth-child(3) {
    color: rgb(255, 255, 255);
    width: 35%;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 5px;
    font-size: 10px;
}

#btn::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -50px;
    transform: skewX(50deg);
    background-color: #00000081;
    z-index: 1;
    transition: all 1s;
}

}

</style>