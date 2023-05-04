<template>
  <div
    class="w-full max-w-[58.8rem] rounded-[2rem] p-12 md:py-12 md:px-4 flex flex-col gap-[3rem] justify-between"
  >
    <h3 :class="`title-small ${color} `">
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  color: "text-purple-main" | "text-orange-main";
}
defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
