<template>
  <BaseExperienceSection title="Сертификаты">
    <div class="w-full grid grid-cols-3 gap-[2rem]"></div>
  </BaseExperienceSection>
</template>

<script setup lang="ts">
import { IImage } from '@/features/constants/types/components';


defineProps<{images: IImage[]}>()
</script>

<style scoped lang="scss"></style>
