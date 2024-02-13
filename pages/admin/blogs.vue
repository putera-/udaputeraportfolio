<template>
<div class="font-bold text-3xl flex gap-2">Blogs
    <IconsCatLoading v-if="isLoading" class="w-8" />
</div>
<div class="divider before:h-px after:h-px mt-0"></div>
<div class="flex gap-2 max-sm:items-end justify-between">
    <div class="grow">
        <AdminSearch :filter="filter" :doFilter="doFilter" />
    </div>
    <div class="flex-none">
        <AdminPagination :page="BlogStore.page" :total_page="BlogStore.total_page" :gotoPage="getData" />
    </div>
</div>
<div class="py-3">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        <div v-for="blog in BlogStore.blogs" class="card shadow-lg p-4 bg-base-100 flex flex-col gap-2">
            <div class="">
                <div class="font-semibold text-neutral text-lg truncate">{{ blog.title }}</div>
                <div class="text-xs font-light">{{ blog.shortDateTime }}</div>
            </div>
            <div class="border-b border-b-neutral/25"></div>
            <div class="hover:scale-105 duration-300">
                <img v-if="blog.photos.length" :src="apiUrl + blog.photos[0].path_md" :alt="blog.title"
                    class="aspect-video w-full rounded-lg">
                <div v-else class="aspect-video w-full rounded-lg bg-accent/50"></div>
            </div>
            <div class="truncate text-sm font-light text-wrap line-clamp-2">{{ blog.content }}</div>
            <!-- <div class="border-b border-b-neutral/25"></div> -->
            <div class="flex justify-end gap-2">
                <button class="btn btn-sm btn-danger btn-circle">
                    <LucideTrash2 :size="16" />
                </button>
                <button class="btn btn-sm btn-accent btn-circle">
                    <LucidePencilLine :size="16" />
                </button>
            </div>
        </div>
    </div>
</div>
<div class="flex justify-end">
    <AdminPagination :page="BlogStore.page" :total_page="BlogStore.total_page" :gotoPage="getData" />
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});
const { public: { apiUrl } } = useRuntimeConfig();

const BlogStore = useBlogStore();
onBeforeMount(async (): Promise<void> => {
    await getData();

    console.log(BlogStore.blogs)
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
    await BlogStore.getAll(filter.value, page.value)

    isLoading.value = false;
}
</script>
