<template>
  <article class="flex flex-col gap-[1rem] w-[38.4rem] max-w-[90%]">
    <h4 class="text-[1.6rem] font-bold text-gray uppercase">
      {{ title }}
    </h4>

    <slot />
  </article>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped lang="scss"></style>
