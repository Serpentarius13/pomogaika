<template>
  <article
    class="rounded-medium p-[2rem] flex flex-col gap-[0.4rem] !bg-opacity-10 max-w-[38.4rem]"
  >
    <h4 class="text-[1rem] uppercase font-semibold">
      {{ interesting ? "Интересует" : "Не интересует" }}
    </h4>

    <p class="max-w-[30rem] text-[1.6rem] text-black">
      <slot />
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ interesting?: boolean; text: string }>();
</script>

<style scoped lang="scss">
.orange {
  @apply bg-orange-main;

  h4 {
    @apply text-orange-dark;
  }
}

.violet {
  @apply bg-purple-main;

  h4 {
    @apply text-purple-dark;
  }
}
</style>
