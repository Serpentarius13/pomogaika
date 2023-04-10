<template>
    <figure class="relative md:-translate-y-[7rem] translate-y-[5rem] w-full h-[40rem] max-w-[95vw] flex justify-center items-center">

        <img src="/img/header/top.svg" />
        <img src="/img/header/middle.svg" />
        <img src="/img/header/bottom.svg" />


    </figure>
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
img {
    @apply w-[30rem] absolute -top-1/3 left-[15%] md:w-full sm:left-[25%] md:top-0 md:left-0;

    &:nth-child(1) {
        transform: translate(-20%, -10%)
    }

    &:nth-child(2) {
        transform: translate(30%, 20%)
    }

    &:nth-child(3) {
        transform: translate(-15%, 70%)
    }
}
</style>