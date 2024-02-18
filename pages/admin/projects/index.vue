<template>
<div class="font-bold text-3xl flex gap-2">Projects
    <IconsCatLoading v-show="isLoading" class="w-8" />
</div>
<div class="divider before:h-px after:h-px mt-0"></div>
<div class="flex gap-2 max-sm:items-end justify-between">
    <div class="grow">
        <AdminSearch :filter="filter" :doFilter="doFilter" />
    </div>
    <div class="flex-none">
        <AdminPagination :page="ProjectStore.page" :total_page="ProjectStore.total_page" :gotoPage="getData" />
    </div>
</div>
<div class="py-3">
    <div class="flex flex-col gap-5">
        <div v-for="project in ProjectStore.projects" class="flex gap-2">
            <div class="hover:scale-105 duration-300">
                <img v-if="project.photos.length" :src="apiUrl + project.photos[0].path_md" :alt="project.title"
                    class="aspect-video w-44 min-w-44 rounded-lg">
                <div v-else class="aspect-video w-44 min-w-44 rounded-lg bg-accent/50"></div>
            </div>
            <div class="overflow-hidden">
                <div class="font-semibold text-neutral text-xl truncate">{{ project.title }}</div>
                <div class="text-xs font-light">{{ project.readStartDate }} <span>- {{ project.readEndDate }}</span>
                </div>
                <div class="truncate text-sm font-light text-wrap line-clamp-2">{{ project.description }}</div>
            </div>
        </div>
    </div>
</div>
<div class="flex justify-end">
    <AdminPagination :page="ProjectStore.page" :total_page="ProjectStore.total_page" :gotoPage="getData" />
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});
const { public: { apiUrl } } = useRuntimeConfig();

const ProjectStore = useProjectStore();
onBeforeMount(async (): Promise<void> => {
    await getData();
});

const filter = ref<string>('');
const page = ref<number>(1);
const isLoading = ref<boolean>(false);

const doFilter = async (newFilter: string) => {
    filter.value = newFilter;
    await getData();
}

const getData = async (targetPage: number = 1) => {
    if (isLoading.value) return;

    isLoading.value = true;

    page.value = targetPage;
    await ProjectStore.getAll(filter.value, page.value)

    isLoading.value = false;
}
</script>
