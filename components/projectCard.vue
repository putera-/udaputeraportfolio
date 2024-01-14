<template>
    <div class="flex justify-between items-center">
        <div class="font-semibold text-xl mb-1">{{ project.title }}</div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
    </div>
    <div class="aspect-square rounded-2xl overflow-hidden hover:scale-110 duration-300">
        <img src="/images/portfolio.jpg" alt="" class="object-cover h-full">
    </div>
    <div class="font-light mt-2 flex flex-wrap gap-2">
        <div class="badge badge-outline rounded-lg">NodeJs</div>
        <div class="badge badge-outline rounded-lg">ExpressJs</div>
        <div class="badge badge-outline rounded-lg">Tailwind</div>
        <div class="badge badge-outline rounded-lg">Tailwind</div>
        <div class="badge badge-outline rounded-lg">Tailwind</div>
        <div class="badge badge-outline rounded-lg">Tailwind</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    project: Project
}>();
</script>