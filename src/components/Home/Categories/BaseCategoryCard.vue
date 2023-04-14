<template>
    <figure :style="colorComputed" class="h-[24.6rem] w-[20rem] rounded-[2rem] flex flex-col justify-between py-[2.2rem] px-[1.6rem] ">


        <img class="w-[14rem] aspect-square object-cover mx-auto" :src="image" />
        <div class="flex flex-col gap-[1.6rem]">


            <h4 class="text-[1.6rem] font-bold">
                {{ title }}
            </h4>
            <span class="text-[1.2rem]">
                {{ subtitle }}
            </span>
        </div>
    </figure>
</template>


<script setup lang="ts">
import { computed } from 'vue';



interface IProps {
    image: string;
    title: string;
    subtitle: string;
    color: string;
}

const props = defineProps<IProps>()

const colorComputed = computed(() => {
    return { backgroundColor: props.color }
})
</script>


<style scoped lang="scss"></style>