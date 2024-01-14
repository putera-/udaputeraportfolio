<template>
    <div class="max-w-6xl mx-auto my-14 flex flex-col gap-6">
        <div class="text-3xl">{{ project.title }}</div>
        <div class="aspect-video rounded-2xl overflow-hidden">
            <img src="/images/portfolio.jpg" alt="" class="object-cover h-full">
        </div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
        <div class="">{{ project.description }}</div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const project = await $fetch('/api/project/' + id) as Project;
</script>