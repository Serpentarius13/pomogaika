<template>
    <div class="flex flex-wrap gap-[0.4rem]">


        <BaseRatingTag v-for="(tag, ix) in tags" :key="ix" v-bind="tag" />
    </div>
</template>


<script setup lang="ts">
import BaseRatingTag from '@/components/Home/Rating/Card/BaseRatingTag.vue';


const tags = [
    { img: '/icons/tags/stars.svg', alt: 'Иконка звезд', text: '4.5' },
    { img: '/icons/tags/boot.svg', alt: 'Иконка ботинка' },
    { img: '/icons/tags/boot.svg', alt: 'Иконка ботинка' },
    { img: '/icons/tags/boot.svg', alt: 'Иконка ботинка' },
    { img: '/icons/tags/boot.svg', alt: 'Иконка ботинка' },
    { img: '/icons/tags/boot.svg', alt: 'Иконка ботинка' },
]


</script>


<style scoped lang="scss"></style>