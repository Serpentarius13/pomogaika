<template>
    <Transition name="slide-left">
        <BaseMobileMenu v-if="isMobileMenuOpened" />
    </Transition>
    <nav class="hidden lg:block w-full px-12 border-b-[1px] border-opacity-gray">

        <div class=" center flex items-center justify-between py-2.5 ">







            <BaseLogo />

            <BaseCitiesSelect />

            <BaseNavbarLinks  />

            <BaseLoginButton />
        </div>

    </nav>

    <nav class="lg:hidden flex items-center justify-between px-[1.5rem] pt-[1.7rem] pb-4 border-b-[1px] border-opacity-gray">
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

import BaseLogo from '../Shared/BaseLogo.vue';
import { ref } from 'vue';
import BaseCitiesSelect from './BaseCitiesSelect.vue';
import BaseNavbarLinks from './BaseNavbarLinks.vue';
import BaseLoginButton from './BaseLoginButton.vue';
import BaseMobileBurger from './Mobile/BaseMobileBurger.vue';
import BaseMobileMenu from './Mobile/BaseMobileMenu.vue';

const isMobileMenuOpened = ref(false)

function handleOpenMobileMenu() {
    isMobileMenuOpened.value = !isMobileMenuOpened.value
}


const options = [
    'A',
    'B',
    'C',
    'D',

]


const currentCity = ref(options[0])


</script>


<style scoped lang="scss"></style>