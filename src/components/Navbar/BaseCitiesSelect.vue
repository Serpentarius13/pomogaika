<template>
    <div class="flex items-center  gap-[0.8rem]">


        <img src="/icons/location.svg" alt="Иконка геолокации" />
        <BaseReusableSelect v-model="currentCity" :array-of-options="options" :is-absolute="true" max-height="30"
            class="text-small min-w-[20rem] w-full text-orange-main" />
    </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';

import BaseReusableSelect from '../Shared/Select/BaseReusableSelect.vue';
import BaseButton from '../Shared/BaseButton.vue';




const options = [
    'Нижний Новгород',
    'Москва',
    'Санкт-Петербург',
    'Владивосток',

]


const currentCity = ref(options[0])


</script>


<style scoped lang="scss"></style>