<template>
  <a
    class="w-[3rem] aspect-square border-[1px] border-solid border-[#F2F2F2] rounded-full flex items-center justify-center"
    :href="link"
    target="_blank"
  >
    <img class="w-[1.4rem] aspect-square" :src="socialImage" :alt="alt" />
  </a>
</template>

<script setup lang="ts">
interface IProps {
  link: string;
  socialImage: string;
  alt: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
