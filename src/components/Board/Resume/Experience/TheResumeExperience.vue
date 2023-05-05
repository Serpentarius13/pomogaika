<template>
  <section class="max-w-[80rem] flex flex-col gap-[3rem] pt-[5rem]">
    <div
      class="w-full justify-between flex items-center sm:pb-[1rem] sm:border-b-[1px] sm:border-gray opener"
    >
      <h3 class="resume-title">Опыт</h3>
      <label class="hidden sm:flex">
        <input type="checkbox" class="hidden peer" />
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="peer-checked:rotate-180 transition-all"
        >
          <path d="M17 1.5L9 9.5L1 1.5" stroke="black" stroke-width="2" />
        </svg>
      </label>
    </div>

    <div
      :class="[
        'sm:grid  sm:grid-cols-1 sm:grid-rows-[0] transition-all overflow-hidden',
      ]"
    >
      <div class="grid grid-cols-2 gap-[2.6rem] sm:pl-[3rem] sm:grid-cols-1">
        <BaseExperienceSection title="Дети">
          <ul class="flex flex-col gap-[1.6rem]">
            <li class="list-disc text-[1.4rem]" v-for="i in 3" :key="i">
              Младенцы (более 1 года)
              <b>
                <br />
                Более 1 года опыта
              </b>
            </li>
          </ul>
        </BaseExperienceSection>
        <BaseExperienceSection title="Дети">
          <ul class="flex flex-col gap-[1.6rem]">
            <li class="list-disc text-[1.4rem]" v-for="i in 3" :key="i">
              Младенцы (более 1 года)
              <b>
                <br />
                Более 1 года опыта
              </b>
            </li>
          </ul>
        </BaseExperienceSection>
        <BaseExperienceSection title="Дети">
          <ul class="flex flex-col gap-[1.6rem]">
            <li class="list-disc text-[1.4rem]" v-for="i in 3" :key="i">
              Младенцы (более 1 года)
              <b>
                <br />
                Более 1 года опыта
              </b>
            </li>
          </ul>
        </BaseExperienceSection>

        <BaseExperienceSection title="Дети">
          <ul class="flex flex-col gap-[1.6rem]">
            <li class="list-disc text-[1.4rem]" v-for="i in 3" :key="i">
              Младенцы (более 1 года)
              <b>
                <br />
                Более 1 года опыта
              </b>
            </li>
          </ul>
        </BaseExperienceSection>

        <BaseExperienceSection title="Образование">
          <p class="text-[1.2rem] leading-[1.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            facilis sapiente quos illo maxime odio, cumque quisquam quis iure
            commodi distinctio iusto soluta officia neque excepturi labore ullam
            nulla architecto! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloremque facilis sapiente quos illo maxime odio,
            cumque quisquam quis iure commodi distinctio iusto soluta officia
            neque excepturi labore ullam nulla architecto!
          </p>
        </BaseExperienceSection>

        <TheResumeCertificates :certificates="images" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseExperienceSection from "@/components/Board/Resume/Experience/BaseExperienceSection.vue";
import TheResumeCertificates from "@/components/Board/Resume/Experience/TheResumeCertificates.vue";
import { IImage } from "@/features/constants/types/components";
import { computed, ref } from "vue";

const images: IImage[] = [
  { src: "/img/certificate.png", alt: "Сертификат" },
  { src: "/img/certificate.png", alt: "Сертификат" },
  { src: "/img/certificate.png", alt: "Сертификат" },
  { src: "/img/certificate.png", alt: "Сертификат" },
  { src: "/img/certificate.png", alt: "Сертификат" },
];
</script>

<style scoped lang="scss">
.opener:has(input:checked) + div {
  grid-template-rows: 1fr;
}
</style>
