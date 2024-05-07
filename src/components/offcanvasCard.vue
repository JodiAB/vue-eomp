<template>
    <div id="card">

        {{ cardContent }}

    </div>
</template>
<script setup>
defineProps({
    cardContent: String,
    cardhref: String
})
</script>
<style>
    #card{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>