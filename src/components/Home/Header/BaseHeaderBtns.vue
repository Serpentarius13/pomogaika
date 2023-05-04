<template>
  <button :class="`violet btn ${fullComputed}`">Ищу помощника</button>
  <button :class="`orange btn  ${fullComputed}`">Ищу работу</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  isFull?: boolean;
}

const props = defineProps<IProps>();

const fullComputed = computed(() => {
  if (props.isFull) return "!w-full";
  else return "";
});
</script>

<style scoped lang="scss"></style>
