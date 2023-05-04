<template>
  <BaseStepsWrapper
    title="Работодателям"
    color="text-purple-main"
    class="violetey"
  >
    <BaseStepsList color="text-purple-main" :steps="violetSteps" />
    <button class="btn violet">Смотреть все резюме"</button>
  </BaseStepsWrapper>
</template>

<script setup lang="ts">
import BaseStepsList from "@/components/Home/Steps/Internals/BaseStepsList.vue";
import BaseStepsWrapper from "@/components/Home/Steps/Internals/BaseStepsWrapper.vue";

const violetSteps = [
  "Разместите бесплатное объявление",
  "Изучите отклики кандидатов",
  "Свяжитесь с лучшими работниками",
];
</script>

<style scoped lang="scss">
.violetey {
  background: rgba(109, 134, 233, 0.1);
}
</style>
