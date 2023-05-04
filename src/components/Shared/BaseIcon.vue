<template>
  <img :src="iconMap[name].src" :alt="iconMap[name].alt" />
</template>

<script setup lang="ts">
import { TIconMap, iconMap } from "@/features/constants/variables/iconMap";

defineProps<{ name: TIconMap }>();
</script>

<style scoped lang="scss"></style>
