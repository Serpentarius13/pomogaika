<template>
  <PageSkeleton>
    <TheVacancy />
  </PageSkeleton>
</template>

<script setup lang="ts">
import TheResume from "@/components/Board/Resume/TheResume.vue";
import TheVacancy from "@/components/Board/Vacancy/TheVacancy.vue";
import TheNavbar from "@/components/Navbar/TheNavbar.vue";
import BaseRegime from "@/components/Shared/Auxilary/BaseRegime.vue";
import { IRegime } from "@/features/constants/types/components";
import PageSkeleton from "@/pages/PageSkeleton.vue";
</script>

<style scoped></style>
