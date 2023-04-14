<template>
    <figure class="flex bg-purple-light  items-center gap-[0.4rem] rounded-[54.56rem] px-[0.8rem] py-[0.4rem]">


        <img :src="img" :alt="alt" />

        <span class="font-bold text-[1.2rem] text-purple-dark " v-if="text">
            {{ text }}
        </span>


    </figure>
</template>


<script setup lang="ts">

interface IProps {
    img: string;
    alt: string;
    text?: string;
}

defineProps<IProps>()

</script>


<style scoped lang="scss"></style>