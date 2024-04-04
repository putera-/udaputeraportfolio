<template>
    <div>
        <div class="font-semibold text-accent text-xl mb-1 truncate">{{ project.title }}</div>
        <div class="flex justify-between">
            <div class="text-xs">{{ project.readStartDate }} - {{ project.readEndDate }}</div>
            <div class="text-xs text-accent">{{ status }}</div>
        </div>
    </div>

    <div v-if="true" class="aspect-video bg-cover bg-center rounded-xl hover:scale-105 duration-300 mt-1"
        :style="`background-image: url(${apiUrl + project.photos[0].path_md});`">
    </div>
    <div v-else class="aspect-video flex justify-center items-center bg-accent/20 rounded-xl">
        <LucideBriefcase :size="120" class="" />
    </div>

    <div class="font-light mt-2 flex flex-nowrap gap-2 overflow-hidden">
        <div v-for="skill of project.skills" class="badge badge-outline border-neutral/50 rounded-lg">{{
            skill.title }}</div>
    </div>
</template>

<script setup lang="ts">
import Project from './index/project.vue';

const props = defineProps<{
    project: Project
}>();
const { public: { apiUrl } } = useRuntimeConfig();
const status = computed(() => {
    return props.project.status.replaceAll('_', ' ');
})

</script>
