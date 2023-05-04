<template>
  <section class="center section flex-col sm:gap-[3rem]">
    <BaseProfileImage
      photo="/img/person.png"
      name="Макфи"
      class="w-[27.6rem] hidden sm:block mx-auto"
    />
    <BaseResumeHeader v-bind="resumeHeader" />

    <div class="w-full gap-[2.4rem] grid grid-cols-[1fr_0.3fr] sm:flex sm:flex-col">
      <div class="flex flex-col gap-[3rem]">
        <BaseResumePrice
          class="pt-[1rem]"
          text="от 10 000 руб/мес"
          subtext="за 1 ребенка, взрослого, животного"
        />

        <TheResumeVideo class="hidden sm:!flex sm:items-start"/>

        <TheResumeInteresting />

        <TheResumeDescription class="pt-[3rem]" />
      </div>

      <div class="flex flex-col gap-[4rem] items-center -translate-y-[4%] lg:-translate-y-0">
        <BaseProfileImage
          photo="/img/person.png"
          name="Макфи"
          class="w-[31rem] sm:hidden"
        />

        <TheResumeVideo class="sm:hidden" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseResumePrice from "@/components/Board/Resume/BaseResumePrice.vue";
import BaseResumeHeader from "@/components/Board/Resume/Description/BaseResumeHeader.vue";
import TheResumeDescription from "@/components/Board/Resume/Description/TheResumeDescription.vue";
import TheResumeInteresting from "@/components/Board/Resume/Description/TheResumeInteresting.vue";
import TheResumeVideo from "@/components/Board/Resume/Description/TheResumeVideo.vue";
import BaseProfileImage from "@/components/Shared/Auxilary/BaseProfileImage.vue";
import { TCountries } from "@/features/constants/types/api";

interface IResumeHeader {
  name: string;
  country: TCountries;
  rating: number | string;
  lastOnline: string;
  location: string;
}

const resumeHeader: IResumeHeader = {
  name: "Яна Сергеевна",
  country: "russia",
  rating: "4.5",
  lastOnline: "3 часа назад",
  location: "Москва - Арбат ( в 15 км от вас)",
};
</script>

<style scoped lang="scss"></style>
