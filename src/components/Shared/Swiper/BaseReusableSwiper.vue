
<template>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';



const modules = [Pagination]

const pagination: any = {
    clickable: true,
    renderBullet: function (_: any, className: string) {
        return '<span class="' + className + '">' + '</span>';
    },

}




</script>

<style  lang="scss">
.swiper {
    width: 100vw;
    height: 100vh;
    
}


.swiper-pagination-bullet {
    @apply w-[0.5rem] h-[0.5rem] rounded-full bg-gray;

    transition: 0.25s ease all;

    &-active {
       @apply w-[4.6rem] bg-orange-main;
    }
}




</style>
  