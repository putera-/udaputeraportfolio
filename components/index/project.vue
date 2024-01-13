<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBriefcase :size="16" />
            <div>Portfolio</div>
        </div>
        <div class="text-7xl font-light">Latest <span class="text-accent">Projects</span></div>
        <div class="grid grid-cols-2 gap-10">
            <div v-for="project in projects">
                <div class="flex justify-between items-center">
                    <div class="font-semibold text-xl mb-1">{{ project.title }}</div>
                    <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
                </div>
                <div class="aspect-square rounded-3xl overflow-hidden hover:scale-110 duration-300">
                    <img src="/images/portfolio.jpg" alt="" class="object-cover h-full">
                </div>
                <div class="font-light mt-2 flex flex-wrap gap-3">
                    <div class="badge badge-outline rounded-lg">NodeJs</div>
                    <div class="badge badge-outline rounded-lg">ExpressJs</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                </div>
            </div>
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