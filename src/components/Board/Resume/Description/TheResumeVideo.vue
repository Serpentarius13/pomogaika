<template>
  <div class="flex flex-col gap-[2rem] items-center w-[38.4rem] md:w-[95%]">
    <BaseResumeViews returning="22" interest="82" />

    <div
      class="grid grid-cols-[1fr_0.7fr] gap-[1.9rem] items-center md:flex md:flex-col md:gap-[1.6rem] md:w-full"
    >
      <button class="btn violet sm:!w-full">Ищу помощника</button>
      <button class="btn outline sm:!w-full">
        <BaseIcon name="chat" />
        Написать
      </button>
    </div>
    <div
      class="w-full h-[21rem] rounded-small bg-purple-main sm:w-[28.7rem] lg:w-[33.6rem]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import BaseResumeViews from "@/components/Board/Resume/BaseResumeViews.vue";
</script>

<style scoped lang="scss"></style>
