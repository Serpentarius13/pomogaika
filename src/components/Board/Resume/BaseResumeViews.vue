<template>
  <p class="text-[1.3rem] md:flex md:flex-col md:items-center">
    <span>
      Интересуются <b> {{ interest }} </b>
    </span>
    <span class="md:hidden"> / </span>
    <span>
      Повторные обращения

      <b>{{ returning }}</b>
    </span>
  </p>
</template>

<script setup lang="ts">
defineProps<{ interest: string | number; returning: string | number }>();
</script>

<style scoped lang="scss"></style>
