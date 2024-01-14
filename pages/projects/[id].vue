<template>
    <div class="max-w-7xl mx-auto my-14">
        <div class="text-3xl">{{ project.title }}</div>
        <div class="">{{ project.description }}</div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const project = await $fetch('/api/project/' + id) as Project;
</script>