<template>
  <img
    class="photo relative  aspect-square border-[6px] border-solid border-white rounded-full mb-[3rem]"
    :src="photo"
    :alt="`Фотография няни ${name}`"
  />
</template>

<script setup lang="ts">
defineProps<{ photo: string, name: string }>();
</script>

<style scoped lang="scss"></style>
