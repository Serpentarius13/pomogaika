<template>
  <img :src="flags[country]" :alt="`Флаг ${country}`" />
</template>

<script setup lang="ts">
import { TCountries } from "@/features/constants/types/api";

const flags: Record<TCountries, string> = {
  russia: "/icons/flags/russia.svg",
  kz: "/",
};

defineProps<{ country: TCountries }>();
</script>

<style scoped lang="scss"></style>
