<template>
  <div class="flex flex-col gap-[2rem]">
    <h3 class="resume-title">О Галине</h3>
    <div class="w-full flex justify-between md:flex-col md:gap-[6rem]">
      <div class="flex flex-col gap-[2rem] max-w-[53rem]">
        <p class="text-[1.6rem]">
          Я коренная Москвичка, работала воспитателем в детском саду. Ищу
          подработку, прошу ознакомиться с анкетой. Первая квалификационная
          категория. Преподаваемые дисциплины: реализация программы дошкольного
          образования. Уровень образования: высшее образование. Наименование
          оконченного учебного заведения: кыргызский государственный университет
          им. И. Арабаева. Наименование направления подготовки и (или)
          специальности: педагогика и методика начального образования. Общий
          стаж работы: 16 лет. Стаж работы по специальности с детьми: 8 лет.
          Данные о повышении квалификации и (или) профессиональной
          переподготовке (при наличии): повышение квалификации. 20
        </p>

        <BaseResumeLanguages
          languageTitle="Родной язык"
          :languages="[nativeLanguage]"
        />
        <BaseResumeLanguages
          languageTitle="Другие языки"
          :languages="otherLangs"
        />
      </div>

      <BaseResumeIcons :icons="descriptionTags" />
    </div>
    <div class="flex flex-col gap-[3rem] mt-[5.6rem]">
      <h4 class="text-[1.6rem] text-gray">Другие прдоставляемые услуги</h4>

      <BaseResumeIcons :icons="descriptionTags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseResumeIcons from "@/components/Board/Resume/BaseResumeIcons.vue";
import BaseResumeLanguages from "@/components/Board/Resume/BaseResumeLanguages.vue";

import { ITag } from "@/features/constants/types/components";

const nativeLanguage = "Русский";

const otherLangs = ["Немецкий", "Французский", "Испанский"];

const descriptionTags: ITag[] = [
  { text: "Внутренняя проверка аккаунта", name: "chat" },
  { text: "Внутренняя проверка аккаунта", name: "chat" },
  { text: "Внутренняя проверка аккаунта", name: "chat" },
  { text: "Внутренняя проверка аккаунта", name: "chat" },
];
</script>

<style scoped lang="scss"></style>
