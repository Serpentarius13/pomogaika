<template>
  <figure
    class="flex bg-purple-light items-center gap-[0.4rem] rounded-[54.56rem] px-[0.8rem] py-[0.4rem]"
  >
    <BaseIcon :name="name" />

    <span class="font-bold text-[1.2rem] text-purple-dark" v-if="text">
      {{ text }}
    </span>
  </figure>
</template>

<script setup lang="ts">
import BaseIcon from "@/components/Shared/BaseIcon.vue";
import { ITag } from "@/features/constants/types/components";
import { iconMap } from "@/features/constants/variables/iconMap";

interface ITagProps extends ITag {}

defineProps<ITagProps>();
</script>

<style scoped lang="scss"></style>
