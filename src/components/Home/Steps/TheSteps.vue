<template>
  <BaseSectionSkeleton title="3 простых шага для поиска">
    <div class="flex flex-row gap-[2.4rem] md:gap-[3rem] md:flex-col">
      <BaseStepsOrange />

      <BaseStepsViolet />
    </div>
  </BaseSectionSkeleton>
</template>

<script setup lang="ts">
import BaseStepsOrange from "@/components/Home/Steps/BaseStepsOrange.vue";
import BaseStepsViolet from "@/components/Home/Steps/BaseStepsViolet.vue";
import BaseSectionSkeleton from "@/components/Shared/Section/BaseSectionSkeleton.vue";
</script>

<style scoped lang="scss"></style>
