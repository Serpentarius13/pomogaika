<template>
  <div class="flex gap-[1.4rem] items-center md:flex-col md:gap-0 md:items-start ">
    <span class="text-[2rem] font-medium text-black">
      {{ text }}
    </span>

    <span class="text-[1.6rem] text-gray">
      {{ subtext }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string; subtext: string }>();
</script>

<style scoped lang="scss"></style>
