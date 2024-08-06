<script setup>
const props = defineProps({
    image: String,
    title: String
});
</script>

<template>
    <div class="flex flex-row gap-8 border-b-2 pb-2 border-slate-500 align-middle items-center text-start">
        <img :src="image" width="64" height="64" alt="" />
        <h1 class="text-2xl font-bold">{{ title }}</h1>
    </div>
</template>