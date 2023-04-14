<template>
    <BaseStepsWrapper title="Соискателям" color="text-orange-main" class="orange">


        <BaseStepsList color="text-orange-main" :steps="orangeSteps" />
        <BaseButton text="Смотреть все резюме" class="orange" />
    </BaseStepsWrapper>
</template>


<script setup lang="ts">
import BaseStepsList from '@/components/Home/Steps/Internals/BaseStepsList.vue';
import BaseStepsWrapper from '@/components/Home/Steps/Internals/BaseStepsWrapper.vue';
import BaseButton from '@/components/Shared/BaseButton.vue';





const orangeSteps = [
    'Заполните анкету и загрузите данные',
    'Откликайтесь на интересные объявления',
    'Отвечайте на сообщения и на звонки'
]





</script>


<style scoped lang="scss">


.orange {
    background: rgba(252, 137, 92, 0.1);
}
</style>