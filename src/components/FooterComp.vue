<template>
    <footer class="bg-black">
        <div class="container py-4 py-md-3 px-4 px-md-3 text-white">
            <div class="row">
                <div class="col-lg-12 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" aria-label="Bootstrap">
                        <img src="https://cdn-thumbs.imagevenue.com/f7/b4/d5/ME17IVRQ_t.png" alt="twelve_Two_logo" id="logo">
                        <span class="fs-5 text-white border-bottom"><span class="T">T</span>welve<span class="T">T</span>wo</span>
                    </a>
                    <ul class="list-unstyled small">
                        <li class="mb-2 text-white"></li>
                        <li class="mb-2 text-white">All right reserved &copy; | @<span class="T">T</span>welve<span class="T">T</span>woGlobal {{this.year()}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

export default {
    methods : {
        year : function () {
            let date = new Date().getFullYear()
            return date
        }
    },
    mounted(){
        this.year()
    }
}
</script>
<style scoped>
    #logo{
        background-color: #0d0d43;
        border: 4px solid #43e005;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-right: 15px;
    }
</style>