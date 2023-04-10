<template>
  <button class="select__clickable">
    <span>
      {{ currentOption }}
    </span>
    <div class="select__clickable__aside">
      <!-- Поменять на свгшки -->

      <img src="/icons/arrow-down.svg" alt="Стрелка" :style="arrowStyleComputed"/>

    </div>
  </button>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { defineEmits, defineProps, ref } from "vue";
// Эмиты трех кнопок
const emit = defineEmits(["up", "down", "main"]);

// Пропс текущей опции для показа его в кнопке
const props = defineProps(["currentOption", 'isOpened']);

// Эмит наверх
const emitTop = () => {
  emit("up");
};

// Эмит вниз
const emitBottom = () => {
  emit("down");
};

const arrowStyleComputed = computed(() => {
  if(props.isOpened) return {rotate: '180deg'}
  else return {}
})
</script>

<style lang="scss" scoped>
.select {
  &__clickable {
    cursor: pointer;

    padding: 1.2rem 3rem 1.2rem 0;


    display: flex;
    align-items: center;

    gap: 0.85rem;
    border-radius: 1rem;
    height: 100%;

    width: 100%;

    span {
     
      line-height: 2.5rem;
      font-weight: 400;
      letter-spacing: -1.5%;
      text-align: left;
    }

    &__aside {
      display: flex;
      gap: 0.4rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 0.7rem;
        transition: 0.2s ease all;
      }
    }

  }
}
</style>
