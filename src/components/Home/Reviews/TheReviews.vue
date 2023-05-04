<template>
  <BaseSectionSkeleton title="Отзывы о сервисе наших пользователей">
    <TheReviewsSlider />
  </BaseSectionSkeleton>
</template>

<script setup lang="ts">
import BaseReview from "@/components/Home/Reviews/BaseReview.vue";
import TheReviewsSlider from "@/components/Home/Reviews/TheReviewsSlider.vue";
import BaseSectionSkeleton from "@/components/Shared/Section/BaseSectionSkeleton.vue";
</script>

<style scoped lang="scss"></style>
