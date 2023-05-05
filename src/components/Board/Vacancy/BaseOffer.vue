<template>
  <figure
    class="w-[38.5rem] max-w-[95%] py-[1rem] px-[1.4rem] flex gap-[1.4rem] items-start rounded-[1.6rem] bg-white"
  >
    <img
      :src="img"
      :alt="imgAlt"
      class="max-w-[8.8rem] h-full object-contain"
    />

    <div class="flex items-start gap-[1rem]">
      <div class="grid grid-rows-[1fr_0.25fr_0.25fr]">
        <h5 class="text-[1.6rem] font-bold text-black">
          {{ title }}
        </h5>
        <span class="text-[1.6rem] font-medium"> от {{ price }} руб/мес </span>
        <span class="text-[1.2rem] text-gray">
          {{ location }}
        </span>
      </div>

      <BaseFlag country="russia" />
    </div>
  </figure>
</template>

<script setup lang="ts">
import BaseFlag from "@/components/Shared/Auxilary/BaseFlag.vue";
import { IOffer } from "@/features/constants/types/components";

interface IOfferProps extends IOffer {}

defineProps<IOfferProps>();
</script>

<style scoped lang="scss">
figure {
  box-shadow: 0px 3px 22px rgba(155, 155, 155, 0.1);
}
</style>
