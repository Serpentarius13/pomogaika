<template>
  <ul class="flex flex-col gap-[2rem]">
    <li v-for="(icon, ix) in icons" :key="ix">
      <figure
        class="max-w-[22rem] flex items-center gap-[2.2rem] md:max-w-full"
      >
        <div
          class="w-[2.8rem] aspect-square rounded-[5.4rem] flex items-center justify-center bg-purple-light"
        >
          <BaseIcon :name="icon.name" class="w-[1.4rem]" />
        </div>

        <span class="text-[1.4rem] font-medium">
          {{ icon.text }}
        </span>
      </figure>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseIcon from "@/components/Shared/BaseIcon.vue";
import { ITag } from "@/features/constants/types/components";

defineProps<{ icons: ITag[] }>();
</script>

<style scoped lang="scss"></style>
