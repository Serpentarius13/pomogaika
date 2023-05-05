<template>
  <ul class="flex items-center gap-[0.6rem] flex-wrap">
    <li v-for="(value, day) in regime" :key="day">
      <div class="flex flex-col items-center gap-[0.2rem]">
        <span> {{ regimeMap[day] }} </span>

        <div
          :class="[
            'w-[3rem] h-[2.2rem] rounded-[3.8rem] flex items-center justify-center',
            value === 'day' && 'bg-orange-medium',
            value === 'night' && 'bg-purple-dark',
            !value && 'bg-gray-light',
          ]"
        >
          <BaseIcon v-if="value" :name="value === 'day' ? 'sun' : 'moon'" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="tsx">
import BaseIcon from "@/components/Shared/BaseIcon.vue";
import { IRegime } from "@/features/constants/types/components";
import { regimeMap } from "@/features/constants/variables/regimeMap";

defineProps<{ regime: IRegime }>();
</script>

<style scoped lang="scss"></style>
