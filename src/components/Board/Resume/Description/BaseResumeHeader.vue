<template>
  <header class="flex flex-col gap-[1rem]">
    <div class="flex items-center gap-[2rem] sm:flex-col sm:items-start">
      <h1 class="title-small">
        {{ name }}
      </h1>

      <div class="flex items-center gap-[2rem]">
        <BaseFlag :country="country" />

        <BaseRatingTag name="stars" :text="rating" />
        <span class="text-[1rem] text-gray pl-[2rem] self-end">
          Заходила {{ lastOnline }}
        </span>
      </div>
    </div>

    <span class="text-[1.2rem] text-gray">
      {{ location }}
    </span>

   
  </header>
</template>

<script setup lang="ts">
import BaseResumePrice from "@/components/Board/Resume/BaseResumePrice.vue";
import BaseRatingTag from "@/components/Home/Rating/Card/BaseRatingTag.vue";
import BaseFlag from "@/components/Shared/Auxilary/BaseFlag.vue";
import { TCountries } from "@/features/constants/types/api";

interface IResumeHeader {
  name: string;
  country: TCountries;
  rating: number | string;
  lastOnline: string;
  location: string;
}

defineProps<IResumeHeader>();
</script>

<style scoped lang="scss"></style>
