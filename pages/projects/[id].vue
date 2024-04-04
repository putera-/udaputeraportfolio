<template>
    <div class="max-w-7xl mx-auto flex flex-col gap-6 px-4 md:px-6 pt-12 pb-24 md:pt-8">
        <IndexHeader subTitle="Projects" href="/projects" />
        <div class="text-3xl font-semibold text-accent">{{ project.title }}</div>
        <div class="grid grid-cols-10 gap-6">
            <div class="col-span-full lg:col-span-7 overflow-hidden">
                <div v-if="project.photos.length">
                    <Carousel :autoplay="10000" :wrapAround="true" class="">
                        <Slide v-for="(photo, i) in project.photos" :key="i" class="">
                            <div class="aspect-video bg-accent/20 w-full bg-cover bg-center"
                                :style="`background-image: url(${apiUrl + photo.path});`">
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
                <div v-else
                    class="aspect-video rounded md:rounded-lg lg:rounded-2xl flex justify-center items-center bg-accent/20 text-accent">
                    <LucideBriefcase :size="200" class="" />
                </div>
                <div class="mt-4">
                    <div class="lg:hidden">
                        <div class="text-sm">Status: <span class="text-accent font-semi-bold">{{ project.read_status
                                }}</span></div>
                        <div class="text-xs">{{ project.readStartDate }} - {{ project.readEndDate }}</div>
                        <div class="text-sm" v-if="project.company">Company: <span class="text-accent font-semi-bold">{{
            project.company }}</span></div>
                        <div class="text-sm" v-if="project.url">Url:
                            <span class="text-accent font-semi-bold">
                                {{ project.url }}
                            </span>
                        </div>
                        <div class="text-sm" v-if="project.github">Github:
                            <span class="text-accent font-semi-bold">
                                {{ project.github }}
                            </span>
                        </div>
                        <div class="text-sm" v-if="project.gitlab">Gitlab:
                            <span class="text-accent font-semi-bold">
                                {{ project.gitlab }}
                            </span>
                        </div>
                    </div>

                    <div class="text-accent font-semibold mt-4">Description:</div>
                    <div class="text-justify whitespace-pre-wrap">{{ project.description }}</div>
                </div>
            </div>
            <div class="max-lg:hidden lg:col-span-3">
                <div class="text-sm">Status: <span class="text-accent font-semi-bold">{{ project.read_status }}</span>
                </div>
                <div class="text-xs">{{ project.readStartDate }} - {{ project.readEndDate }}</div>
                <div class="text-sm" v-if="project.company">Company: <span class="text-accent font-semi-bold">{{
            project.company }}</span></div>
                <div class="text-sm" v-if="project.url">Url:
                    <span class="text-accent font-semi-bold">
                        {{ project.url }}
                    </span>
                </div>
                <div class="text-sm" v-if="project.github">Github:
                    <span class="text-accent font-semi-bold">
                        {{ project.github }}
                    </span>
                </div>
                <div class="text-sm" v-if="project.gitlab">Gitlab:
                    <span class="text-accent font-semi-bold">
                        {{ project.gitlab }}
                    </span>
                </div>

                <ProjectSkills v-if="project.skill_category" :skills="project.skill_category" class="mt-4" />
            </div>
        </div>
        <ProjectSkills v-if="project.skill_category" :skills="project.skill_category" class="lg:hidden" />
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

// SEO and META
const { value: useProfile } = useState<Profile>('profile');
const fullname = `${useProfile.firstname} ${useProfile.lastname}`;
const photo = project.photos.length ? (apiUrl + project.photos[0].path) : ''

useSeoMeta({
    title: `${project.title} - ${fullname} Project`,
    description: project.description,
    ogTitle: `${project.title} - ${fullname} Project`,
    ogDescription: project.description,
    ogImage: photo,
    twitterCard: 'summary_large_image',
});
// END: SEO and META
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
