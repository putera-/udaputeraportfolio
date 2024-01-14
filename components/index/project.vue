<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBriefcase :size="16" />
            <div>Portfolio</div>
        </div>
        <div class="text-7xl font-light">Latest <span class="text-accent">Projects</span></div>
        <div class="grid grid-cols-2 gap-10">
            <NuxtLink :to="`/projects/${project.id}`" v-for="project in projects">
                <ProjectCard :project="project" />
            </NuxtLink>
        </div>
        <div class="flex justify-center">
            <NuxtLink to="/projects" class="btn btn-accent rounded-xl px-10">See All Projects</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    projects: Project[]
}>();
</script>