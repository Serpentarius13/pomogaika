<template>
  <footer class="min-h-[12rem] bg-gray-dark py-[2.3rem]">
    <div class="center section flex justify-between items-center lg:flex-col gap-[3rem]">
      <div
        class="flex flex-col justify-between max-w-[58rem] gap-[2.2rem] w-full"
      >
        <div class="flex justify-between md:flex-col md:items-center md:gap-[3rem]">
          <BaseLogo :isWhite="true" />

          <div class="flex items-center gap-[4rem] md:gap-[2rem] ">
            <RouterLink
              class="text-[1.3rem] !text-white font-montserrat-alt"
              v-for="{ to, text } in footerLinks"
              :to="to"
              :key="text"
            >
              {{ text }}
            </RouterLink>
          </div>
        </div>

        <BaseFooterRights class="md:hidden"/>
      </div>

      <div class="flex items-center gap-[5rem] md:flex-col md:gap-[2rem]">
        <div class="flex flex-col gap-[1.5rem] text-white md:text-center">
          <a
            class="font-medium text-[1.8rem]"
            :href="`tel:${tel.split(' ').join('-')}`"
          >
            {{ tel }}
          </a>
          <a class="text-[1.4rem]" :href="`mailto:${email}`">
            {{ email }}
          </a>
        </div>

        <div class="flex items-center gap-[2rem]">
          <BaseFooterSocial
            v-for="social in socials"
            :key="social.socialImage"
            v-bind="social"
          />
        </div>
      </div>

      <BaseFooterRights class="hidden  md:flex flex-col justify-start gap-[1rem]"/>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseFooterRights from "@/components/Footer/BaseFooterRights.vue";
import BaseFooterSocial from "@/components/Footer/BaseFooterSocial.vue";
import BaseLogo from "@/components/Shared/BaseLogo.vue";

const tel = "8 800 (567) 89 70";

const email = "info@info.ru";

type TLink = {
  to: string;
  text: string;
};

type TSocial = {
  link: string;
  socialImage: string;
  alt: string;
};

const footerLinks: TLink[] = [
  { to: "/", text: "О нас" },
  { to: "/", text: "Как пользоваться" },
  { to: "/", text: "Самозанятые" },
];

const socials: TSocial[] = [
  {
    link: "/",
    socialImage: "/icons/socials/insta.svg",
    alt: "Иконка Instagram",
  },
  { link: "/", socialImage: "/icons/socials/vk.svg", alt: "Иконка VK" },
  {
    link: "/",
    socialImage: "/icons/socials/youtube.svg",
    alt: "Иконка Youtube",
  },
  {
    link: "/",
    socialImage: "/icons/socials/facebook.svg",
    alt: "Иконка Facebook",
  },
];
</script>

<style scoped lang="scss"></style>
