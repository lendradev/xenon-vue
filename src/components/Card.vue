<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
/* Add any specific styles for the Card component here */
</style>



<template>
    <div :class="['flex flex-col gap-4', className]">
        <img :src="image" class="rounded-lg" alt="" />
        <div class="px-8 gap-2 flex flex-col justify-center">
            <h1 class="text-center font-bold text-xl">{{ title }}</h1>
            <p v-if="desc" class="text-center">{{ desc }}</p>
            <a href="#" class="text-center font-bold text-blue-400 hover:text-blue-600 xl:text-lg">
                {{ type === 'story' ? 'Read the story' : 'Learn more' }}
            </a>
        </div>
    </div>
</template>