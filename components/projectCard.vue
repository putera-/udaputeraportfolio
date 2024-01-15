<template>
    <div class="flex justify-between items-center">
        <div class="font-semibold text-accent text-xl mb-1">{{ project.title }}</div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
    </div>
    <div class="aspect-square rounded-2xl overflow-hidden hover:scale-105 duration-300">
        <img v-if="project.photos.length" :src="apiUrl + project.photos[0].path_md" alt="" class="object-cover h-full">
        <div v-else class="aspect-square flex justify-center items-center bg-neutral">
            <LucideBriefcase :size="200" class="" />
        </div>
    </div>
    <div class="font-light mt-2 flex flex-wrap gap-2">
        <div v-for="skill of project.ProjectSkills" class="badge badge-outline rounded-lg">{{ skill.skill.title }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    project: Project
}>();
const { public: { apiUrl } } = useRuntimeConfig();

</script>