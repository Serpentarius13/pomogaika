<template>
  <li class="select__selectable-li " role="option" :aria-selected="isSelected" tabindex="-1" @click="select">
    <button class="select__selectable ">
      <span > {{ option }}</span>
      <span v-if="isSelected" class="select__check"> &check; </span>
    </button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

// Пропсы с опцией и текущим значением рефа наверху
const props = defineProps(["option", "value"]);

// Эмит селекта по нажатию кнопки
const emit = defineEmits(["selected"]);

// Сам эмит
const select = () => {
  emit("selected", props.option);
};

// Компьютед для определния, выбрана ли опция
const isSelected = computed(() => {
  return props.value === props.option;
});

// Компьютед для выбора bg-color опции
const isSelectedBg = computed(() => {
  if (isSelected.value) return "#e5e5e5";
  else return "#fff";
});
</script>

<style lang="scss" scoped>
.select {
  &__selectable {
    width: 100%;
    padding: 1.2rem 3rem 1.6rem 3rem;

    font-size: 1.3rem;
    line-height: inherit;
    font-weight: 400;
    letter-spacing: -1.5%;
    text-align: left;
    background-color: transparent;






    &-li {
      background-color: v-bind(isSelectedBg);
    }

    &-li:hover {
      background-color: lightgray;
    }
  }
}
</style>
