<template>
    <div class="max-w-6xl mx-auto flex flex-col gap-6 px-4 py-10">
        <div class="text-3xl font-semibold text-accent">{{ project.title }}</div>
        <div class="aspect-video rounded-2xl overflow-hidden">
            <img src="/images/portfolio.jpg" alt="" class="object-cover h-full">
        </div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
        <div>
            <div class="text-accent font-light">Description:</div>
            <div class="">{{ project.description }}</div>
        </div>
        <div>
            <div class="text-accent font-light mb-2">Technologies:</div>
            <div v-for="skillCat of project.skills">
                <div class="text-xs mb-1">{{ skillCat.title }}</div>
                <div class="flex gap-2 mb-2">
                    <div v-for="skill of skillCat.skills" class="badge badge-lg badge-outline rounded-lg flex gap-1 py-4">
                        <div class="bg-slate-300 w-6 rounded-xl p-px overflow-hidden hover:scale-110 duration-300"
                            v-html="skill.svg">
                        </div>
                        {{ skill.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const project = await $fetch('/api/project/' + id) as Project;
</script>