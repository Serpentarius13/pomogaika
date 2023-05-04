<template>
  <Transition name="slide-left">
    <BaseMobileMenu
      v-if="isMobileMenuOpened"
      @click.self="handleOpenMobileMenu"
    />
  </Transition>
  <nav class="block lg:hidden w-full px-12 border-b-[1px] border-opacity-gray">
    <div class="center flex items-center justify-between py-2.5">
      <BaseLogo />
      <BaseCitiesSelect />
      <BaseNavbarLinks />
      <BaseLoginButton />
    </div>
  </nav>
  <nav
    class="hidden lg:flex items-center justify-between px-[1.5rem] pt-[1.7rem] pb-4 border-b-[1px] border-opacity-gray"
  >
    <div class="flex gap-[2.1rem] items-center">
      <BaseMobileBurger @openMenu="handleOpenMobileMenu" />
      <BaseLogo />
    </div>
    <div class="flex gap-[2.1rem] items-center">
      <BaseLoginButton />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BaseLogo from "../Shared/BaseLogo.vue";

import BaseCitiesSelect from "./BaseCitiesSelect.vue";
import BaseNavbarLinks from "./BaseNavbarLinks.vue";
import BaseLoginButton from "./BaseLoginButton.vue";
import BaseMobileBurger from "./Mobile/BaseMobileBurger.vue";
import BaseMobileMenu from "./Mobile/BaseMobileMenu.vue";

const isMobileMenuOpened = ref(false);

function handleOpenMobileMenu() {
  if (isMobileMenuOpened.value) {
    document.body.classList.remove("locked");
  } else {
    document.body.classList.add("locked");
  }
  isMobileMenuOpened.value = !isMobileMenuOpened.value;
}
</script>

<style scoped lang="scss"></style>
