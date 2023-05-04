<template>
  <PageSkeleton>
    <TheHeader />
    <TheCategories />
    <TheSteps />
    <TheRating />

    <TheReviews />
  </PageSkeleton>
</template>

<script setup lang="ts">
import PageSkeleton from "@/pages/PageSkeleton.vue";
import TheHeader from "@/components/Home/Header/TheHeader.vue";
import TheSteps from "@/components/Home/Steps/TheSteps.vue";
import TheRating from "@/components/Home/Rating/TheRating.vue";
import TheCategories from "@/components/Home/Categories/TheCategories.vue";
import TheReviews from "@/components/Home/Reviews/TheReviews.vue";
</script>

<style lang="scss">
#app {
  background: url("/img/bg-landing.png") 0 0 / contain no-repeat;
  @media (max-width: 768px) {
    background: url("/img/bg-landing-mobile.png") 0 0 / contain no-repeat;
  }
}
</style>
