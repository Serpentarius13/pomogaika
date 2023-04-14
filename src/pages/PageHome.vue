<template>
  <PageSkeleton>

    <TheHeader/>

    <TheSteps/>

    <TheCategories/>

</PageSkeleton>
</template>

<script setup lang="ts">

import PageSkeleton from '@/pages/PageSkeleton.vue';
import TheHeader from '@/components/Home/Header/TheHeader.vue';
import TheSteps from '@/components/Home/Steps/TheSteps.vue';
import TheCategories from '@/components/Home/Categories/TheCategories.vue';
</script>

<style scoped>

</style>
