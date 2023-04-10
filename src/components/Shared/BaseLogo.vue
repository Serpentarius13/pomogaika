<template>
    <figure class="flex items-center gap-[1.5rem]">
        <img :src="dataComputed.img" alt="Лого StaffStar" />

        <h4 class="text-[2.2rem] font-bold " :style="dataComputed.textStyle">
            StaffStar
        </h4>
    </figure>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['isWhite'])

const dataComputed = computed(() => {
    if (props.isWhite) return { img: '/img/logo-white.svg', textStyle: { color: 'white' } }
    else return { img: '/img/logo.svg', textStyle: {} }
})
</script>


<style scoped lang="scss">


</style>