<template>
  <figure
    class="relative -translate-y-[7rem] md:translate-y-[5rem] w-full h-[35rem] max-w-[95vw] flex justify-center items-center"
  >
    <img src="/img/header/top.svg" />
    <img src="/img/header/middle.svg" />
    <img src="/img/header/bottom.svg" />
  </figure>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
  @apply absolute w-full md:w-[27rem] lg:w-[30rem] top-0 md:-top-1/3 left-0 md:left-[25%] sm:-left-[2rem];

  &:nth-child(1) {
    transform: translate(-20%, -10%);
  }

  &:nth-child(2) {
    transform: translate(30%, 20%);
  }

  &:nth-child(3) {
    transform: translate(-0%, 90%);

    @apply w-[40rem] md:w-[22rem] lg:w-[28rem];
  }
}
</style>
