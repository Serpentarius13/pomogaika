


<template>
    <swiper v-bind="props.options" :pagination="pagination" :modules="modules" class="select-none touch-none">
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
import type { TBreakpoints } from '@/features/constants/variables/landingSwiperConfig';




const modules = [Pagination]

const pagination: any = {
    clickable: true,
    renderBullet: function (_: any, className: string) {
        return '<span class="' + className + '">' + '</span>';
    },

}

interface SwiperOptions {
    spaceBetween: number
    slidesPerView: number
    breakpoints: TBreakpoints
}

interface IProps {
    options?: Partial<SwiperOptions>
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


    @screen md {
        gap: 2rem;
    }




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
  