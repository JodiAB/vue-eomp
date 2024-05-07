<template >
    <div class="p-5">
        
        <main>
            <!-- <h1>Events</h1> -->
            <section>
            <h2>The Date</h2>
            <div class="grid-wrapper">
                <article>
                <h3>9:00 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! </p>
                </article>
                <article>
                <h3>10:00 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! </p>
                </article>
                <article>
                <h3>12:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>13:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi fuga ut fugiat odit natus ipsa consequuntur praesentium voluptates hic. </p>
                <img src="https://img.freepik.com/free-photo/space-planet-science-night-generated-by-ai_188544-15619.jpg?w=1060&t=st=1709036268~exp=1709036868~hmac=72e218512321bd722bc8ffa521f221b49a9b309a2fe00958d13a76c4637a72a0">
        
                </article>
                <article>
                <h3>14:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>15:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! </p>
                </article>
                <article>
                <h3>16:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>17:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! </p>
                <img src="https://img.freepik.com/free-photo/glowing-satellite-orbits-planet-star-filled-galaxy-generated-by-ai_188544-9664.jpg?w=1060&t=st=1709036290~exp=1709036890~hmac=c52e687d86b6a4d63624d4c8d2d8f7bf1bc533e48f2af0a886b54e81bae32613" >
                </article>
            </div>
            </section>
            <section>
            <h2>The Date</h2>
            <div class="grid-wrapper">
                <article>
                <h3>9:00 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>10:00 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>12:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>13:30 AM</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quibusdam tenetur laborum aliquid similique enim dolorum explicabo, commodi magnam ad? </p>
                <img src="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?w=996&t=st=1709036237~exp=1709036837~hmac=d78fab3f41eedb5f757639ee0eeb5abd8a3d64695f346bf28d1a76cc4af2b8ec">
                </article>
                <article>
                <h3>14:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!</p>
                </article>
                <article>
                <h3>15:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! </p>
                </article>
                <article>
                <h3>16:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis! Lorem ipsum dolor sit amet. </p>
                </article>
                <article>
                <h3>17:30 AM</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facilis!  </p>
                <img src="https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?w=1060&t=st=1709036215~exp=1709036815~hmac=f6b2c07787662091551c96016c6f41ca437df99d5aca06962577646b71d84069">
                </article>
            </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
* {
    box-sizing: border-box;
  }
  
  img {
    width: 100%;
    border-radius: 5px;
  }
  
  body {
    background: #2b2a2b;
    color: white;
    margin: 0;
    padding: 0;
  }
  
  main {
    padding: 2rem;
    max-width: 1400px;
    margin: auto;
  }
  p{
    color: white;
  }
  
  h1 {
    font-family: 'Poppins', sans-serif;
    color: aliceblue;
  }
  
  h2 {
    color: #a0ed66;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    
  }
  
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin: 0.5rem 0; 
  }
  
  .grid-wrapper {
    @media screen and (min-width: 600px) {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
    }
  
    @media screen and (min-width: 1025px) {
      grid-template-columns: 1fr 2fr 1fr 2fr;
    }
  
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      grid-template-columns: 1fr 2fr;
    }
  }
  
  article {
    padding-bottom: 1rem;
    border-bottom: 1px solid #4d4d4d;
  }
  
  article:nth-child(4) {
    grid-area: 1/2/4/3;
  }
  
  article:nth-child(8) {
    @media screen and (min-width: 1025px) {
      grid-area: 1/4/4/-1;
    }
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      grid-area: 4/2/8/3;
    }
  }
  
  article:nth-child(4n+3) {
    @media screen and (min-width: 1025px) {
      border-bottom: 0;
    }
  }
  
  article:nth-child(4) {
    @media screen and (min-width: 1025px) {
      border-right: 1px solid #4d4d4d;
      padding-right: 1rem;
    }
  }
  
  article:nth-child(4n) {
    @media screen and (min-width: 600px) {
      border-left: 1px solid #4d4d4d;
      border-bottom: 0;
      padding-left: 1rem;
    }
  }
</style>