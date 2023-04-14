<template>
    <header class="section center flex items-start flex-row justify-between md:items-center md:flex-col  pb-[10rem] ">



        <div class="  h-full max-h-[37rem] flex flex-col justify-center  mb-[6rem]">

            <h1 class="title-big font-montserrat-alt ">
                <b>
                    Самостоятельный
                </b>
                поиск работы
                и работников
            </h1>

            <h2 class="subtitle-big text-gray mb-[5.3rem]">
                В нашей базе 2 345 вакансий
            </h2>

            <div class=" flex gap-[1.6rem]   items-center md:hidden">

                <BaseHeaderBtns />
            </div>


        </div>

        <BaseHeaderImages />

        <div class="hidden w-full flex-col gap-[1.6rem] items-center  md:flex">

            <BaseHeaderBtns :isFull="true" />
        </div>
    </header>
</template>


<script setup lang="ts">
import BaseHeaderBtns from '@/components/Home/Header/BaseHeaderBtns.vue';
import BaseButton from '../../Shared/BaseButton.vue';
import BaseHeaderImages from './BaseHeaderImages.vue';


</script>


<style scoped lang="scss"></style>