<template>
  <article
    class="review max-w-[28.2rem] p-[2rem] bg-white rounded-[2rem] flex flex-col gap-[2rem] h-fit"
  >
    <img
      class="w-[5.6rem] h-[4rem]"
      src="/icons/blockquote.svg"
      alt="Цитатные кавычки"
    />

    <p class="text-[1.4rem]">
      {{ text }}
    </p>

    <div class="flex items-center gap-[1.6rem]">
      <img
        class="w-[4rem] aspect-square rounded-full"
        :src="authorPhoto"
        alt="Фотография автора отзыва"
      />

      <div class="h-full flex flex-col justify-between">
        <span class="font-semibold text-[1.4rem]">
          {{ authorName }}
        </span>

        <span class="text-[1.3rem] text-gray">
          {{ reviewDate }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
  authorPhoto: string;
  authorName: string;
  reviewDate: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.review {
  box-shadow: 0px 3px 22px rgba(155, 155, 155, 0.2);
}
</style>
