<template>
  <figure
    class="card bg-white h-[40.5rem] w-[28.2rem] p-[1.6rem] flex flex-col items-center rounded-[2rem]"
  >
    <BaseProfileImage :photo="photo" :name="name" class="w-[16rem]" />

    <div class="flex items-center gap-[1rem] mb-[0.9rem]">
      <h4 class="font-bold text-[2rem]">
        {{ name }}
      </h4>

      <BaseFlag :country="country" class="w-[2.1rem] h-[1.5rem]" />
    </div>

    <BaseRatingTags />

    <span class="text-[1.2rem] text-gray mt-[0.6rem] mb-[1.4rem]">
      {{ location }}
    </span>

    <div class="flex flex-col items-center gap-[0.7rem]">
      <span class="font-bold text-[1.4rem]">
        {{ subtitle }}
      </span>

      <p
        class="text-[1.2rem] leading-[1.4rem] text-center max-h-[5.6rem] text-cut-ellipsis"
      >
        {{ text }}
      </p>
    </div>
  </figure>
</template>

<script setup lang="ts">
import BaseRatingTags from "@/components/Home/Rating/Card/BaseRatingTags.vue";
import BaseFlag from "@/components/Shared/Auxilary/BaseFlag.vue";
import BaseProfileImage from "@/components/Shared/Auxilary/BaseProfileImage.vue";
import { TCountries } from "@/features/constants/types/api";

interface IProps {
  name: string;
  location: string;
  subtitle: string;
  text: string;
  country: TCountries;
  photo: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.photo {
  box-shadow: 0px 6px 30px rgba(180, 180, 180, 0.51);
}

.card {
  box-shadow: 0px 3px 22px rgba(155, 155, 155, 0.2);
}
</style>
