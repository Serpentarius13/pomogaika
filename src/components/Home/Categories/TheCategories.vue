<template>
    <section class="center section flex gap-[4.8rem] justify-between lg:flex-col">

        <div
            class="flex flex-col justify-between max-w-[28.2rem] min-h-[55rem] lg:max-w-[95%] lg:min-h-[10rem] lg:items-center  ">
            <div class="flex flex-col gap-[3rem]">


                <h2 class="title-small lg:text-center">
                    Категории услуг
                </h2>
                <p class="subtitle-small">
                    Мы вынуждены отталкиваться от того, что современная методология разработки, в своём классическом
                    представлении, допускает внедрение новых предложений.
                </p>
            </div>
            <div class="flex flex-col gap-[2.4rem] max-w-[25.3rem] lg:hidden">
                <BaseCategoriesBtns />
            </div>
        </div>


        <TheCategoriesSlider />

        <div class="hidden lg:flex flex-col gap-[2.4rem] ">
            <BaseCategoriesBtns />
        </div>

    </section>
</template>


<script setup lang="ts">
import BaseCategoriesBtns from '@/components/Home/Categories/BaseCategoriesBtns.vue';
import BaseCategoryCard from '@/components/Home/Categories/BaseCategoryCard.vue';
import TheCategoriesSlider from '@/components/Home/Categories/TheCategoriesSlider.vue';





</script>


<style scoped lang="scss"></style>