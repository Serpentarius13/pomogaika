<template>
    <button class="py-8 px-12 z-10 text-white text-[1.3rem] font-bold uppercase rounded-[1.6rem] btn">
        {{ text }}
    </button>
</template>


<script setup lang="ts">

interface IProps {
    text: string
}
defineProps<IProps>()
</script>


<style scoped lang="scss">
.btn {

    &.orange {
        @apply bg-orange;
    }

    &.violet {
        @apply bg-violet;
    }

    transition: 0.25s ease all;

    &:hover,
    &:active {
        transform: translateY(-0.4rem)
    }
}
</style>