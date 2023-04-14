<template>
    <TheNavbar />



    <main class="mt-[6.7rem] md:mt-[5rem] sm:mt-[1rem] pb-[10rem]  flex flex-col gap-[10rem]">

        <slot />
    </main>


    <!-- Footer -->
</template>


<script setup lang="ts">
import TheNavbar from '@/components/Navbar/TheNavbar.vue';
</script>


<style scoped lang="scss"></style>