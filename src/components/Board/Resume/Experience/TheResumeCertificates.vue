<template>
  <BaseExperienceSection title="Сертификаты">
    <div class="w-full grid grid-cols-3 gap-[2rem]">
      <img
        v-for="{ src, alt } in certificates"
        :key="src"
        :src="src"
        :alt="alt"
        class="max-w-[16rem] max-h-[11.4rem] object-contain"
      />
    </div>
  </BaseExperienceSection>
</template>

<script setup lang="ts">
import { IImage } from "@/features/constants/types/components";

defineProps<{ certificates: IImage[] }>();
</script>

<style scoped lang="scss"></style>
