<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Blogs</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl flex gap-2">Blogs
                    <IconsCatLoading v-show="isLoading" class="w-8" />
                </div>
                <NuxtLink to="/admin/blogs/create" class="btn btn-neutral btn-sm">
                    <LucidePlus :size="12" /> New Blog
                </NuxtLink>
            </div>

            <div class="flex gap-2 max-sm:items-end justify-between">
                <div class="grow">
                    <AdminSearch :filter="filter" :doFilter="doFilter" />
                </div>
                <div class="flex-none">
                    <AdminPagination :page="BlogStore.page" :total_page="BlogStore.total_page" :gotoPage="getData" />
                </div>
            </div>
            <div class="py-3">
                <!-- SKELETON -->
                <AdminBlogSkeleton v-if="BlogStore.data == null" />

                <div v-if="BlogStore.blogs.length"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    <div v-for="blog in BlogStore.blogs"
                        class="card rounded-xl shadow-lg p-4 bg-base-100 flex flex-col gap-2">
                        <div class="flex justify-between items-center gap-2 max-w-full">
                            <div class="overflow-hidden">
                                <div class="font-semibold text-neutral text-lg truncate w-full">{{ blog.title }}
                                </div>
                                <div class="text-xs font-light">{{ blog.shortDateTime }}</div>
                            </div>
                            <div class="dropdown dropdown-end">
                                <LucideMoreVertical :size="16" tabindex="0" role="button" />
                                <ul tabindex="0"
                                    class="dropdown-content z-[1] menu menu-xs p-2 shadow bg-base-100 rounded-box w-24">
                                    <li>
                                        <NuxtLink :to="'/admin/blogs/' + blog.id"
                                            class="btn btn-xs h-min justify-start my-px">
                                            <LucidePencil :size="16" />Edit
                                        </NuxtLink>
                                    </li>
                                    <li><button class="btn btn-error btn-xs h-min my-px"
                                            @click="removeData = blog; confirmDelete = true;">
                                            <LucideTrash2 :size="16" />Delete
                                        </button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-b border-b-neutral/10"></div>
                        <div class="hover:scale-105 duration-300 aspect-video bg-neutral/10 rounded-lg overflow-hidden">
                            <img v-if="blog.photos.length" :src="apiUrl + blog.photos[0].path_md" :alt="blog.title"
                                class="h-full max-w-full mx-auto">
                            <div v-else class="aspect-video w-full rounded-lg bg-accent/10"></div>
                        </div>
                        <div class="truncate text-sm font-light text-wrap line-clamp-2">{{ blog.content }}</div>
                    </div>

                </div>

                <!-- EMPTY -->
                <div v-if="BlogStore.data != null && !BlogStore.blogs.length" class="flex justify-center">
                    <ImagesEmpty class="w-3/4 lg:w-1/3" />
                </div>
            </div>
            <div class="flex justify-end">
                <AdminPagination :page="BlogStore.page" :total_page="BlogStore.total_page" :gotoPage="getData" />
            </div>

            <!-- delete confirmation -->
            <AdminConfirmation action-text="Delete" :show="confirmDelete" @close="confirmDelete = false" @yes="remove">
                Are you sure to remove this blog?
                <br>
                <span class="font-bold text-lg" v-if="removeData">{{ removeData.title }}</span>
            </AdminConfirmation>
        </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';

definePageMeta({
    middleware: ['auth'],
    layout: false
});
const { public: { apiUrl } } = useRuntimeConfig();

const BlogStore = useBlogStore();
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

const getData = async (targetPage?: number) => {
    if (isLoading.value) return;

    isLoading.value = true;

    if (targetPage) page.value = targetPage;

    await BlogStore.getAll(filter.value, page.value)

    isLoading.value = false;
}

// delete
const confirmDelete = ref<boolean>(false);
const removeData = ref<Blog | null>(null)

const remove = async (): Promise<void> => {
    if (!removeData.value) return;

    isLoading.value = true;

    try {
        await BlogStore.remove(removeData.value!.id);

        isLoading.value = false;
        confirmDelete.value = false;
        removeData.value = null;
        toast.success('Success', { autoClose: 3000 })

        // reload page
        await getData();
    } catch (error: any) {
        toast.error(error.message, { autoClose: 3000 })

        isLoading.value = false;
    }
}
</script>
