<template>
    <div class="max-w-6xl mx-auto flex flex-col gap-6 px-4 py-10">
        <div class="overflow-hidden">
            <div v-if="project.photos.length">
                <Carousel :autoplay="10000" :wrapAround="true">
                    <Slide v-for="(photo, i) in project.photos" :key="i">
                        <img class="rounded md:rounded-lg lg:rounded-2xl" :src="apiUrl + photo.path">
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
            <div v-else
                class="aspect-video rounded md:rounded-lg lg:rounded-2xl flex justify-center items-center bg-neutral">
                <LucideBriefcase :size="200" class="" />
            </div>
        </div>
        <div class="text-3xl font-semibold text-accent">{{ project.title }}</div>
        <div class="text-sm">{{ project.readStartDate }} - {{ project.readEndDate || "present" }}</div>
        <div>
            413637 <div class="text-accent font-light">Description:</div>
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
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { public: { apiUrl } } = useRuntimeConfig();
const route = useRoute();
const id = route.params.id;
const project = await $fetch('/api/project/' + id) as Project;
</script>

<style scoped>
.carousel {
    display: block;
}
</style>