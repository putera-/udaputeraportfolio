<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-neutral/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBookOpenText :size="16" class="text-accent" />
            <div>Blogs</div>
        </div>
        <div class="text-7xl font-light">Latest <span class="text-accent">Blogs</span></div>
        <div class="grid grid-cols-2 gap-10">
            <NuxtLink :to="`/blogs/${blog.id}`" v-for="blog in blogs">
                <BlogCard :blog="blog" />
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
</script>