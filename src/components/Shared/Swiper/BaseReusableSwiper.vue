
<template>
    <swiper v-bind="props.options" :pagination="pagination" :modules="modules" class="mySwiper">
        <slot />
    </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination, } from 'swiper';




const modules = [Pagination]

const pagination: any = {
    clickable: true,
    renderBullet: function (_: any, className: string) {
        return '<span class="' + className + '">' + '</span>';
    },

}

interface SwiperOptions {
    spaceBetween?: number
    slidesPerView?: string
}

interface IProps {
    options?: SwiperOptions | any
}

const props = defineProps<IProps>()




</script>

<style  lang="scss">
.swiper {


    height: 100%;
    width: 100%;


    display: flex;
    flex-direction: column;
    gap: 3rem;







    &-slide {
        width: 100%;
       height: 100%;
    }


    &-pagination {

        position: relative !important;


    }
}


.swiper-pagination-bullet {
    @apply w-[0.5rem] h-[0.5rem] rounded-full bg-gray;

    transition: 0.25s ease all;

    &-active {
        @apply w-[4.6rem] bg-orange-main;
    }
}
</style>
  