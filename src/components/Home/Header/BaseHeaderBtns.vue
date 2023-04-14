<template>
    <BaseButton :class="`violet ${fullComputed}`" text="Ищу помощника" />
    <BaseButton :class="`orange ${fullComputed}`" text="Ищу работу" />
</template>


<script setup lang="ts">

import BaseButton from '@/components/Shared/BaseButton.vue';
import { computed } from 'vue';

interface IProps {
    isFull?: boolean
}

const props = defineProps<IProps>();

const fullComputed = computed(() => {
    if (props.isFull) return '!w-full'
    else return ''
})



</script>


<style scoped lang="scss"></style>