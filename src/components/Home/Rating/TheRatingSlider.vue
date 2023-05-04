<template>
  <BaseReusableSwiper :options="landingSwiperConfig">
    <SwiperSlide v-for="a in Array.from(Array(8))" :key="a">
      <BaseRatingCard
        class="mx-auto"
        country="russia"
        name="Яна Сергеевна"
        location="Москва - Арбат ( в 15 км от вас)"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque, mattis ac neque, mattis ac neque, mattis ac neque, mattis ac neque, mattis ac neque"
        subtitle="22 повторных обращений"
        photo="/img/person.png"
      />
    </SwiperSlide>
  </BaseReusableSwiper>
</template>

<script setup lang="ts">
import BaseReusableSwiper from "@/components/Shared/Swiper/BaseReusableSwiper.vue";
import landingSwiperConfig from "@/features/constants/variables/landingSwiperConfig";
import { SwiperSlide } from "swiper/vue";

import BaseRatingCard from "@/components/Home/Rating/Card/BaseRatingCard.vue";
</script>

<style scoped lang="scss"></style>
