<template>
    <section class="center section flex flex-col gap-[3rem]  ">

        <h2 class="title-small text-center">
            {{ title }}
        </h2>

        <div>
            <slot />
        </div>

    </section>
</template>


<script setup lang="ts">

interface IProps {
    title: string;
}
defineProps<IProps>()
</script>


<style scoped lang="scss"></style>