<template>
  <div class="flex gap-[2.4rem] md:flex-col md:gap-[1rem]">
    <BaseResumeInteresting :interesting="true" class="violet"
      >Периодическая работа, работа по вечерам</BaseResumeInteresting
    >
    <BaseResumeInteresting class="orange"
      >Полная занятость, частичная занятость</BaseResumeInteresting
    >
  </div>
</template>

<script setup lang="ts">
import BaseResumeInteresting from "@/components/Board/Resume/BaseResumeInteresting.vue";

</script>

<style scoped lang="scss"></style>
