<template>
  <BaseReusableSwiper :options="similarOffersSwiper">
    <SwiperSlide v-for="a in Array.from(Array(5))" :key="a">
      <BaseOffer v-bind="offer" class="mx-auto" />
    </SwiperSlide>
  </BaseReusableSwiper>
</template>

<script setup lang="ts">
import BaseReusableSwiper from "@/components/Shared/Swiper/BaseReusableSwiper.vue";
import { similarOffersSwiper } from "@/features/constants/variables/similarOffersSwiperConfig";
import { SwiperSlide } from "swiper/vue";

import BaseOffer from "@/components/Board/Vacancy/BaseOffer.vue";
import { IOffer } from "@/features/constants/types/components";

const offer: IOffer = {
  title: "Нужна няня, частичная занятость",
  img: "/img/offer.png",
  imgAlt: "Offfff",
  price: "10 000",
  location: "Москва - Арбат ( в 15 км от вас)",
  country: "russia",
};
</script>

<style scoped lang="scss"></style>
