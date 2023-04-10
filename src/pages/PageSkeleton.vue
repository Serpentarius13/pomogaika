<template>
    <TheNavbar />


    <div class="background" />
    <main>

        <slot />
    </main>


    <!-- Footer -->
</template>


<script setup lang="ts">

import TheNavbar from '@/components/Navbar/TheNavbar.vue';


</script>


<style scoped lang="scss">
.background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;

    background: url('/img/header/BG.png') 100% 0 / cover no-repeat;

    @screen md {
        background: url('/img/header/BG.png') 0 0 / cover no-repeat;
    }
}

main {

    @apply mt-[1rem] md:mt-[5rem] lg:mt-[6.7rem] flex flex-col gap-[10rem]
}
</style>