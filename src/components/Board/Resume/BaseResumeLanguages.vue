<template>
  <div class="text-[1.6rem]">
    <span >
      {{ languageTitle }}: 
    </span>

    <span class="font-bold max-w-[75%]">
      {{ languages.join(", ") }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ languages: string[]; languageTitle: string }>();
</script>

<style scoped lang="scss"></style>
