<template>
<div class="max-w-7xl mx-auto flex flex-col gap-6 px-4 md:px-6 pt-12 pb-24 md:pt-8">
    <IndexHeader subTitle="Blogs" href="/blogs" />
    <div class="overflow-hidden">
        <div v-if="blog.photos.length">
            <Carousel :autoplay="10000" :wrapAround="true" class="">
                <Slide v-for="(photo, i) in blog.photos" :key="i" class="">
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
    </div>
    <div class="text-3xl font-semibold text-accent">{{ blog.title }}</div>
    <div class="text-sm">{{ blog.readDate }}</div>
    <div>
        <div class="indent-8">{{ blog.content }}</div>
    </div>
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
const blog = await $fetch('/api/blog/' + id) as Blog;
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
