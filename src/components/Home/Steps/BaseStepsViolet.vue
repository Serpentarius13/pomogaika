<template>
  <BaseStepsWrapper title="Соискателям" color="text-orange-main" class="orangey">
    <BaseStepsList color="text-orange-main" :steps="orangeSteps" />
    <button class="btn orange"> Смотреть все резюме</button>
  </BaseStepsWrapper>
</template>

<script setup lang="ts">
import BaseStepsList from "@/components/Home/Steps/Internals/BaseStepsList.vue";
import BaseStepsWrapper from "@/components/Home/Steps/Internals/BaseStepsWrapper.vue";

const orangeSteps = [
  "Заполните анкету и загрузите данные",
  "Откликайтесь на интересные объявления",
  "Отвечайте на сообщения и на звонки",
];
</script>

<style scoped lang="scss">
.orangey {
  background: rgba(252, 137, 92, 0.1);
}
</style>
