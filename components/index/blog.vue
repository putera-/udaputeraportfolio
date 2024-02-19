<template>
<div class="flex flex-col gap-4 md:gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-accent/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideBookOpenText :size="16" class="text-accent" />
        <div>Blogs</div>
    </div>
    <div class="text-4xl md:text-5xl xl:text-7xl font-light">My <span class="text-accent">Story</span>
    </div>

    <div class="flex flex-col gap-5">
        <NuxtLink :to="`/blogs/${blog.id}`" v-for="blog in blogs" class="flex gap-2">
            <div
                class="hover:scale-105 duration-300 w-44 min-w-44 aspect-video bg-accent/20 rounded-lg overflow-hidden">
                <img v-if="blog.photos.length" :src="apiUrl + blog.photos[0].path_md" :alt="blog.title"
                    class="object-cover h-full mx-auto">
                <div v-else class="aspect-video w-44 min-w-44"></div>
            </div>
            <div class="overflow-hidden">
                <div class="font-semibold text-accent text-xl truncate">{{ blog.title }}</div>
                <div class="text-xs font-light">{{ blog.shortDateTime }}</div>
                <div class="truncate text-sm font-light text-wrap line-clamp-2">{{ blog.content }}</div>
            </div>
        </NuxtLink>
    </div>
    <div class="flex justify-center">
        <NuxtLink to="/blogs" class="btn btn-accent rounded-xl px-10">Explore All Blogs</NuxtLink>
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    blogs: Blog[]
}>();

const { public: { apiUrl } } = useRuntimeConfig();
</script>
