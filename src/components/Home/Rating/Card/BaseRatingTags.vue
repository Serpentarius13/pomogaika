<template>
  <div class="flex flex-wrap gap-[0.4rem]">
    <BaseRatingTag v-for="(tag, ix) in tags" :key="ix" v-bind="tag" />
  </div>
</template>

<script setup lang="ts">
import BaseRatingTag from "@/components/Home/Rating/Card/BaseRatingTag.vue";

import { ITag } from "@/features/constants/types/components";

const tags: ITag[] = [
  { name: "stars", text: "4.5" },
  { name: "boot" },
  { name: "boot" },
  { name: "boot" },
  { name: "boot" },
  { name: "boot" },
];
</script>

<style scoped lang="scss"></style>
