<template>
    <div class="flex justify-between items-center">
        <div class="font-semibold text-accent text-xl mb-1">{{ blog.title }}</div>
        <div class="text-sm">{{ blog.readDate }}</div>
    </div>
    <div class="aspect-video rounded-xl overflow-hidden hover:scale-105 duration-300">
        <img v-if="blog.photos.length" :src="apiUrl + blog.photos[0].path_md" alt="" class="object-cover h-full">
        <div v-else class="aspect-video flex justify-center items-center bg-accent">
            <LucideBriefcase :size="120" class="" />
        </div>
    </div>
    <div class="truncate text-sm">{{ blog.content }}</div>
</template>

<script setup lang="ts">
defineProps<{
    blog: Blog
}>();
const { public: { apiUrl } } = useRuntimeConfig();

</script>