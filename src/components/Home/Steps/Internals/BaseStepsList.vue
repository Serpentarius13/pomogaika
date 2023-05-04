<template>
  <ul class="flex flex-col gap-[1.2rem]">
    <li
      class="flex items-center gap-[2.4rem] md:gap-[1rem]"
      v-for="(step, ix) in steps"
      :key="step"
    >
      <div
        :class="`${color} py-[0.8rem] px-[1.6rem] text-[1.6rem] min-w-[5rem] text-center font-bold font-montserrat-alt rounded-[1.2rem]  step `"
      >
        {{ ix + 1 }}
      </div>

      <span class="text-[1.6rem]"> {{ step }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IProps {
  steps: string[];
  color: "text-purple-main" | "text-orange-main";
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.step {
  background-color: rgb(255, 255, 255, 0.36);
  box-shadow: 0px 3px 22px rgba(155, 155, 155, 0.2);
}
</style>
