<template>
    <div class="max-w-6xl mx-auto my-14">
        <div class="text-3xl font-semibold text-accent mb-10">Projects</div>
        <div class="grid grid-cols-3 gap-10">
            <NuxtLink :to="`/projects/${project.id}`" v-for="project in projects" class="card p-4">
                <ProjectCard :project="project" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = await $fetch('/api/projects') as Project[];
</script>