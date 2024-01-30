<template>
<div class="max-w-7xl mx-auto flex flex-col gap-6 px-4 md:px-6 pt-12 pb-24 md:pt-8">
    <IndexHeader subTitle="projects" href="/projects" />
    <div class="grid grid-cols-10 gap-6">
        <div class="col-span-full lg:col-span-7 overflow-hidden">
            <div v-if="project.photos.length">
                <Carousel :autoplay="10000" :wrapAround="true" class="">
                    <Slide v-for="(photo, i) in project.photos" :key="i" class="">
                        <div class="aspect-video w-full bg-contain bg-accent/25 flex justify-center">
                            <img class="max-h-full" :src="apiUrl + photo.path">
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
            <div v-else
                class="aspect-video rounded md:rounded-lg lg:rounded-2xl flex justify-center items-center bg-neutral text-accent">
                <LucideBriefcase :size="200" class="" />
            </div>
            <div class="mt-4">
                <div class="lg:hidden text-3xl font-semibold text-accent">{{ project.title }}</div>

                <div class="text-accent font-semibold">Description:</div>
                <div class="">{{ project.description }}</div>
            </div>
        </div>
        <div class="max-lg:hidden lg:col-span-3">
            <div class="text-3xl font-semibold text-accent">{{ project.title }}</div>
            <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
            <ProjectSkills v-if="project.skills" :skills="project.skills" class="mt-4" />
        </div>
    </div>
    <ProjectSkills v-if="project.skills" :skills="project.skills" class="lg:hidden" />
</div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'profile'
});

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { public: { apiUrl } } = useRuntimeConfig();
const route = useRoute();
const id = route.params.id;
const project = await $fetch('/api/project/' + id) as Project;
</script>

<style>
.carousel {
    display: block;
}

.carousel__viewport {
    border-radius: 0.25rem;
}

@media (min-width: 768px) {

    .carousel__viewport {
        border-radius: 0.5rem;
    }
}

@media (min-width: 1024px) {
    .carousel__viewport {

        border-radius: 1rem;
    }
}
</style>
