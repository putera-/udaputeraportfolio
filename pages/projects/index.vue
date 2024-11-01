<template>
    <div v-if="data" class="max-w-7xl mx-auto flex flex-col gap-6 px-4 md:px-6 py-12 md:py-8">
        <IndexHeader subTitle="Projects" href="/projects" />
        <div class="flex max-sm:flex-col justify-between items-end">
            <div class="max-sm:mb-4 text-4xl max-sm:w-full">My Latest <span class="text-accent">Projects</span></div>
            <div class="join">
                <button class="join-item btn max-md:btn-sm" @click="page--"
                    :class="{ 'btn-disabled': data.page == 1 }">«</button>
                <button class="join-item btn max-md:btn-sm font-normal">Page {{ data.page }} of {{ data.total_page
                    }}</button>
                <button class="join-item btn max-md:btn-sm" @click="page++"
                    :class="{ 'btn-disabled': data.page == data.total_page }">»</button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <NuxtLink :to="`/projects/${project.id}`" v-for="project in projects" :key="project.id" class="card p-4">
                <ProjectCard :project="project" />
            </NuxtLink>
        </div>
        <div class="flex justify-end">
            <div class="join">
                <button class="join-item btn max-md:btn-sm" @click="page--"
                    :class="{ 'btn-disabled': data.page == 1 }">«</button>
                <button class="join-item btn max-md:btn-sm font-normal">Page {{ data.page }} of {{ data.total_page
                    }}</button>
                <button class="join-item btn max-md:btn-sm" @click="page++"
                    :class="{ 'btn-disabled': data.page == data.total_page }">»</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'profile'
});

const page = ref<number>(1);
const perpage = ref<number>(9);
const ProjectStore = useProjectStore();
const { data, projects } = storeToRefs(ProjectStore);
ProjectStore.getAll('', page.value, perpage.value);

// SEO and META
const PortfolioStore = usePortfolioStore();
const { profile } = PortfolioStore;

const fullname = computed(() => {
    if (profile) {
        return `${profile.firstname} ${profile.lastname}`;
    }
    return '';
})

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

useSeoMeta({
    title: fullname + ' Projects',
    description: profile?.bio ?? "",
    ogTitle: fullname + ' Projects',
    ogDescription: profile?.bio ?? "",
    ogImage: profile ? (apiUrl + profile.avatar) : "",
    twitterCard: 'summary_large_image',
});
// END: SEO and META
</script>
