<template>
    <div class="flex justify-between items-center">
        <div class="font-semibold text-accent text-xl mb-1">{{ blog.title }}</div>
        <div class="text-sm">{{ blog.readDate }}</div>
    </div>
    <div class="aspect-square rounded-2xl overflow-hidden hover:scale-105 duration-300">
        <img v-if="blog.photos.length" :src="apiUrl + blog.photos[0].path_md" alt="" class="object-cover h-full">
        <div v-else class="aspect-square flex justify-center items-center bg-accent">
            <LucideBriefcase :size="200" class="" />
        </div>
    </div>
    <!-- <div class="font-light mt-2 flex flex-nowrap gap-2 overflow-hidden">
        <div v-for="skill of blog.ProjectSkills" class="badge badge-outline border-neutral/50 rounded-lg">{{
            skill.skill.title }}</div>
    </div> -->
</template>

<script setup lang="ts">
defineProps<{
    blog: Blog
}>();
const { public: { apiUrl } } = useRuntimeConfig();

</script>