<template>
    <ul class="flex items-center  gap-[2rem]">

        <li :class="textClassComputed" v-for="({ to, text }) in links " :key="text">

            <router-link  :to="to">
                {{ text }}
            </router-link>
        </li>
    </ul>
</template>


<script setup lang="ts">
import { computed } from '@vue/reactivity';


type Link = { to: string; text: string; }


const links: Link[] = [
    { to: '/', text: 'О нас' },
    { to: '/', text: 'Как пользоваться' },
    { to: '/', text: 'Работодатель' },
    { to: '/', text: 'Соискатель' },
]

interface IProps {
    size?: 'normal' | 'mobile'
}

const props = withDefaults(defineProps<IProps>(), { size: 'normal' })

const textClassComputed = computed(() => {
    if (props.size == 'mobile') return 'text-4xl text-white'
    else return 'text-small'
})

console.log(textClassComputed.value)

</script>


<style scoped lang="scss"></style>