<template>
  <div
    class="select__wrapper"
    @keydown.up.prevent.exact.stop="upHandle"
    @keydown.down.prevent.exact.stop="downHandle"
    @keydown.enter.prevent.exact="mainHandle"
    v-click-away="close"
    aria-haspopup="listbox"
    aria-labelledby="select-label"
    ref="wrapperRef"
  >
    <TheSelectButton
      :isOpened="isOptionsShown"
      @up="upHandle"
      @down="downHandle"
      :currentOption="modelValue"
      @click="mainHandle"
    />
    <Transition :name="isAbsolute ? 'appear' : 'pop'">
      <ul
        class="select__options"
        ref="listRef"
        aria-labelledby="select-label"
        role="listbox"
        :style="isRendered"
        v-show="decideIfShown"
      >
        <BaseSelectable
          v-for="(option, ix) in arrayOfOptions"
          :option="option"
          :key="ix"
          @selected="handleSelect"
          :value="modelValue"
        />
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";
import BaseSelectable from "./BaseSelectable.vue";
import TheSelectButton from "./TheSelectButton.vue";

// Массив значений опций для селекта и v-model рефа сверху
const props = defineProps({
  modelValue: {
    type: String,
  },
  arrayOfOptions: {
    type: Array,
  },
  isRenderedWithoutOpacity: {
    type: Boolean,
    default: false,
    required: false,
  },
  // Решает, будут ли применены стайлы absStyle (position: absolute и проч) к опциям
  isAbsolute: {
    type: Boolean,
    default: false,
    required: false,
  },
  // Добавляет max-height к опциям
  maxHeight: {
    type: String || Number,
    required: false,
    default: null,
  },
  // Решает, будет ли эмититься 'update:modelValue', которое будет изменять данный селекту реф, или просто 'updateValue'
  isUpdatingRefValue: {
    type: Boolean,
    required: false,
    default: true,
  },
});

/* Компьютеды для выбора как рендерится компонент.
Если передать проп isRenderedWithoutOpacity, селект рендерится полностью с opacity 0 и без выдвижной анимации.
Если не передавать проп, опции селекта не рендерятся и всплывают с анимацией*/
const isRendered = computed(() => {
  let styling = {};
  const absStyle = {
    position: "absolute",

    top: "110%",
    left: 0,
    width: "100%",

    zIndex: 5,
  };
  if (props.isRenderedWithoutOpacity) {
    if (isOptionsShown.value) {
      styling.opacity = 1;
    } else {
      styling.opacity = 0;
    }
  }

  if (props.isRenderedWithoutOpacity) {
    if (isOptionsShown.value) styling.opacity = 1;
    else styling.opacity = 0;
  }

  if (props.maxHeight) {
    styling.maxHeight = `${props.maxHeight}rem`;
    styling.overflow = "scroll";
  }

  if (props.isAbsolute) {
    styling = Object.assign(styling, absStyle);
  }

  return styling;
});

const decideIfShown = computed(() => {
  if (props.isRenderedWithoutOpacity) {
    return true;
  } else return isOptionsShown.value;
});

// Эмит для обновления рефа сверху
const emit = defineEmits(["update:modelValue", "updateValue"]);

// Дестракчур массив опций для использования
const arrayOfOptions = props.arrayOfOptions;

// Реф ul листа значений
const listRef = ref();
const wrapperRef = ref();

// Реф для включения показа селекта
const isOptionsShown = ref(false);

// Компьютед для определния индекса текущей опции
const currentIx = computed(() => {
  const found = arrayOfOptions.find((el) => el == props.modelValue);
  const ix = arrayOfOptions.indexOf(found);

  return ix;
});

/**
 * Закрывает опции
 */
function close() {
  isOptionsShown.value = false;
}

/**
 * @param {String} выбранная опция
 * @param {Boolean} аргумент для выбора, закроется ли селект или нет. По дефолту true
 */
function handleSelect(option, isClosing = true) {
  if (props.isUpdatingRefValue) {
    emit("update:modelValue", option);
  } else {
    emit("updateValue");
  }

  if (isClosing) isOptionsShown.value = false;
}

/**
 * Хэндлер для открывашки опции
 *
 * @param {ClickEvent} клик мышки
 */
function mainHandle(ev) {
  // Проверяет, откуда поступает клик. Value имеют кнопки для переключения вверх/вниз
  if (ev.target.value) return;

  // Переключает селект
  isOptionsShown.value = !isOptionsShown.value;

  // Фокусируется на первом ребенке для a11y
  if (isOptionsShown.value && listRef.value) {
    [...listRef.value.children][0].focus();
  }
}

/**
 * Хэндлер для клика вниз
 */
function downHandle() {
  // Проверяем, последний ли элемент
  const isLast = currentIx.value == arrayOfOptions.length - 1;

  // Если да, выбираем первый. Если нет, выбираем следующий
  const emitting = isLast
    ? arrayOfOptions[0]
    : arrayOfOptions[currentIx.value + 1];
  handleSelect(emitting, false);
}

/**
 * Хэндлер для клика вверх
 */
function upHandle() {
  // Проверяем, первый ли элемент
  const isFirst = currentIx.value == 0;

  // Если да, выбираем последний. Если нет, выбираем предыдуший
  const emitting = isFirst
    ? arrayOfOptions[arrayOfOptions.length - 1]
    : arrayOfOptions[currentIx.value - 1];
  handleSelect(emitting, false);
}

// const closeSelectHandler = (ev) => {
//   const children = [...ev.target.children];
//   if (children.includes(wrapperRef.value)) {
//     isOptionsShown.value = false;
//   }
// };
// useEventListener(document, 'click', closeSelectHandler);
</script>

<style lang="scss" scoped>
.select {
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    border-radius: 1rem;
    position: relative;

    @apply text-gray;
  }

  &__options {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;

    transition: 0.5s all;

    scrollbar-width: none;

    border-radius: 0 0 1.4rem 1.4rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@mixin options {
  content: "";

  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
}

.pop-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: 0.25s all ease, 0.4s opacity;
}

.pop-enter-active::after {
  @include options;
  animation: heighten 0.25s forwards;
}

.pop-leave-active::after {
  @include options;
  animation: heighten 0.25s forwards reverse;
}

.appear-leave-to,
.appear-enter-from {
  opacity: 0;
}

.appear-enter-active,
.appear-leave-active {
  transition: 0.25s all;
}

@keyframes heighten {
  from {
    max-height: 100%;
  }

  to {
    max-height: 0%;
  }
}
</style>
