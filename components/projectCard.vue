<template>
    <div class="flex justify-between items-center">
        <div class="font-semibold text-accent text-xl mb-1">{{ project.title }}</div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
    </div>
    <div class="aspect-video rounded-xl overflow-hidden hover:scale-105 duration-300">
        <img v-if="project.photos.length" :src="apiUrl + project.photos[0].path_md" alt="" class="object-cover h-full">
        <div v-else class="aspect-video flex justify-center items-center bg-accent">
            <LucideBriefcase :size="120" class="" />
        </div>
    </div>
    <div class="font-light mt-2 flex flex-nowrap gap-2 overflow-hidden">
        <div v-for="skill of project.ProjectSkills" class="badge badge-outline border-neutral/50 rounded-lg">{{
            skill.skill.title }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    project: Project
}>();
const { public: { apiUrl } } = useRuntimeConfig();

</script>