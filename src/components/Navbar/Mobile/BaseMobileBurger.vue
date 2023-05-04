<template>
  <label
    class="flex flex-col justify-center w-[2.4rem] h-[2.4rem] gap-[0.5rem] z-40 cursor-pointer"
  >
    <input type="checkbox" class="hidden" @input="$emit('openMenu')" />
    <span class="one" />
    <span class="two" />
    <span class="three" />
  </label>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
span {
  width: 2.4rem;
  height: 0.2rem;
  border-radius: 4.7rem;
  transition: 0.25s ease all;
  @apply bg-black;

  .three {
    width: 2.1rem;
  }
}

input:checked {
  & ~ .one {
    @apply absolute rotate-45;
  }

  & ~ .two {
    @apply absolute -rotate-45;
  }

  & ~ .three {
    @apply hidden;
  }
}
</style>
