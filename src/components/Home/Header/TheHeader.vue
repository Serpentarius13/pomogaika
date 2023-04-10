<template>
    <header class="section  center  flex flex-col items-center justify-between md:min-h-screen md:items-start md:flex-row ">


        
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

            <div class=" hidden   items-center md:flex md:gap-[1.6rem]">

                <BaseButton class="violet" text="Ищу помощника" />
                <BaseButton class="orange" text="Ищу работу" />
            </div>


        </div>

        <BaseHeaderImages />

        <div class="flex w-full flex-col gap-[1.6rem] items-center  md:hidden">

            <BaseButton class="violet w-full " text="Ищу помощника" />
            <BaseButton class="orange w-full" text="Ищу работу" />
        </div>
    </header>
</template>


<script setup lang="ts">
import BaseButton from '../../Shared/BaseButton.vue';
import BaseHeaderImages from './BaseHeaderImages.vue';


</script>


<style scoped lang="scss"></style>