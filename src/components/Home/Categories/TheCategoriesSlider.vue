<template>
    <BaseReusableSwiper class="xl:!hidden" :options="{ spaceBetween: 40 }">
        <SwiperSlide v-for="(subcategory, ix) in categoriesDesktop" :key="ix">
            <div class="grid grid-cols-4 w-fit gap-x-[2.4rem]  gap-y-[3rem] grid-rows-2 lg:hidden">
                <BaseCategoryCard v-for="(category, ix) in subcategory" :key="ix" v-bind="category" />
            </div>
        </SwiperSlide>
    </BaseReusableSwiper>

    <BaseReusableSwiper class="!hidden xl:!flex md:!hidden">
        <SwiperSlide v-for="(subcategory, ix) in categoriesTablet" :key="ix">
            <div class="grid grid-cols-3 grid-rows-2   gap-y-[3rem]  ">
                <BaseCategoryCard v-for="(category, ix) in subcategory" :key="ix" v-bind="category" />
            </div>
        </SwiperSlide>
    </BaseReusableSwiper>

    <BaseReusableSwiper class="!hidden md:!flex sm:!hidden" :options="{ slidesPerView: '3' }">
        <SwiperSlide v-for="(category, ix) in categories.slice(0, 12)" :key="ix">
            <BaseCategoryCard v-bind="category" />
        </SwiperSlide>
    </BaseReusableSwiper>

    <BaseReusableSwiper class="!hidden sm:!flex !w-screen " :options="{ slidesPerView: '1.5', spaceBetween: -120}">
        <SwiperSlide v-for="(category, ix) in categories.slice(0, 12)" :key="ix">

            <div class="grid place-items-center">

       


            <BaseCategoryCard v-bind="category" />
        </div>


        </SwiperSlide>
    </BaseReusableSwiper>
</template>


<script setup lang="ts">
import BaseReusableSwiper from '@/components/Shared/Swiper/BaseReusableSwiper.vue';
import { SwiperSlide } from 'swiper/vue';
import { computed } from 'vue';

import colors from '@/features/constants/colors'
import BaseCategoryCard from '@/components/Home/Categories/BaseCategoryCard.vue';



interface TCategory {
    image: string;
    title: string;
    subtitle: string;
    color: string;
}



const categories: TCategory[] = [

    {
        image: '/img/categories/d.svg',
        title: 'Домработница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработаница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработаница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    }, {
        image: '/img/categories/d.svg',
        title: 'Домработница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработаница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    }, {
        image: '/img/categories/d.svg',
        title: 'Домработница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработаница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    }, {
        image: '/img/categories/d.svg',
        title: 'Домработница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Повар',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.red,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Домработаница',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.orange,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Сиделка',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.blue,
    },
    {
        image: '/img/categories/d.svg',
        title: 'Няня',
        subtitle: '4вакансии/ 4 резюме',
        color: colors.green,
    },
]


const categoriesDesktop = computed(() => {
    return splitArrayBy(categories, 8)
})

const categoriesTablet = computed(() => {
    return splitArrayBy(categories, 6)
})



function splitArrayBy<T>(array: T[], number: number): T[][] {
    let splitCategories = [];
    for (let i = 0; i < Math.ceil(categories.length / number); i++) {

        splitCategories = [...splitCategories, categories.slice(i * number, i * number + number)]

    }
    return splitCategories
}



</script>


<style scoped lang="scss"></style>