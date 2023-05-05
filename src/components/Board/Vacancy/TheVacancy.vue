<template>
  <div class="center flex flex-col">
    <header class="flex flex-col gap-[1rem]">
      <div class="flex items-end gap-[2rem] md:flex-col md:items-start">
        <img
          src="/img/helper.png"
          alt="Заставка помощника"
          class="mx-auto hidden w-[24.2rem] pb-[2rem] sm:block"
        />
        <h2 class="title-small font-montserrat-alt">Помощница по дому</h2>
        <div
          class="flex h-full items-center gap-[2rem] md:w-full md:justify-between"
        >
          <BaseFlag country="russia" class="pb-[1rem]" />

          <span class="text-[1rem] text-gray">
            Информация обновлена 12 часов назад
          </span>
        </div>
      </div>
      <span class="text-[1.2rem] text-gray">
        Москва - Арбат ( в 15 км от вас)
      </span>

      <div
        class="flex items-end gap-[2rem] md:flex-col md:items-start md:gap-[1rem]"
      >
        <span class="text-[1.4rem] font-semibold text-black">
          Частичная занятость, подработка
        </span>

        <BaseRegime :regime="regime" />
      </div>

      <BaseResumePrice
        text="от 10 000 руб/мес"
        subtext="Гарантирует 10 часов/неделя"
        class="pt-[1rem]"
      />
    </header>

    <section
      class="grid grid-cols-[0.85fr_0.3fr] gap-[2.4rem] lg:grid-cols-[1fr_0.3fr] sm:flex sm:flex-col-reverse"
    >
      <div class="flex max-w-[79.2rem] flex-col gap-[2rem] pt-[5rem]">
        <h3 class="resume-title">Описание</h3>
        <p class="text-[1.6rem] leading-[2.2rem] text-black">
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

        <div
          class="grid grid-cols-2 justify-between pt-[4rem] sm:grid-cols-1 sm:gap-[2rem]"
        >
          <div class="flex flex-col gap-[3rem]">
            <h4 class="resume-subtitle">Описание</h4>

            <BaseResumeIcons :icons="descriptionTags" :isOrange="true" />
          </div>

          <div class="flex flex-col gap-[3rem]">
            <h4 class="resume-subtitle">Требования</h4>

            <BaseResumeIcons :icons="descriptionTags" :isOrange="true" />
          </div>
        </div>
      </div>

      <section
        class="flex -translate-y-[20%] flex-col items-center gap-[2rem] lg:-translate-y-0 sm:pt-[3rem]"
      >
        <img
          src="/img/helper.png"
          alt="Заставка помощника"
          class="w-[24.2rem] pb-[2rem] sm:hidden"
        />

        <BaseResumeViews
          interest="82"
          returning="22"
          class="w-full sm:items-start"
        />

        <button class="btn orange sm:w-full">Откликнуться</button>
      </section>
    </section>

    <BaseSectionSkeleton title="Похожие предложения" class="swipers mt-[7rem]">
      <TheAdditionalOffersSlider />
    </BaseSectionSkeleton>
  </div>
</template>

<script setup lang="ts">
import BaseResumePrice from "@/components/Board/Resume/BaseResumePrice.vue";
import BaseFlag from "@/components/Shared/Auxilary/BaseFlag.vue";
import BaseProfileImage from "@/components/Shared/Auxilary/BaseProfileImage.vue";
import BaseResumeInteresting from "@/components/Board/Resume/BaseResumeInteresting.vue";
import BaseRegime from "@/components/Shared/Auxilary/BaseRegime.vue";
import { IRegime, ITag } from "@/features/constants/types/components";
import BaseResumeViews from "@/components/Board/Resume/BaseResumeViews.vue";
import BaseResumeIcons from "@/components/Board/Resume/BaseResumeIcons.vue";
import BaseSectionSkeleton from "@/components/Shared/Section/BaseSectionSkeleton.vue";
import TheAdditionalOffersSlider from "@/components/Board/Vacancy/TheAdditionalOffersSlider.vue";

const regime: IRegime = {
  monday: "day",
  tuesday: "night",
  wednesday: null,
  thursday: "night",
  friday: "day",
  saturday: "night",
  sunday: null,
};

const descriptionTags: ITag[] = [
  { text: "Внутренняя проверка аккаунта", name: "check-orange" },
  { text: "Внутренняя проверка аккаунта", name: "check-orange" },
  { text: "Внутренняя проверка аккаунта", name: "check-orange" },
  { text: "Внутренняя проверка аккаунта", name: "check-orange" },
];
</script>

<style scoped lang="scss">
.shadowy {
  @apply bg-orange-light;
  box-shadow: 0px 6px 30px rgba(180, 180, 180, 0.51);
}

:deep(.swipers) {
  h2 {
    @apply text-start;

    @screen sm {
      @apply text-center;
    }
  }
}
</style>
