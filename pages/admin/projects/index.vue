<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Projects</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl flex gap-2">Projects
                    <IconsCatLoading v-show="isLoading" class="w-8" />
                </div>
                <NuxtLink to="/admin/projects/create" class="btn btn-neutral btn-sm">
                    <LucidePlus :size="12" /> New Project
                </NuxtLink>
            </div>

            <div class="flex gap-2 max-sm:items-end justify-between">
                <div class="grow">
                    <AdminSearch :filter="filter" :doFilter="doFilter" />
                </div>
                <div class="flex-none">
                    <AdminPagination :page="ProjectStore.page" :total_page="ProjectStore.total_page"
                        :gotoPage="getData" />
                </div>
            </div>
            <div class="py-3">
                <!-- SKELETON -->
                <AdminProjectSkeleton v-if="ProjectStore.data == null" />

                <div v-if="ProjectStore.projects.length"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    <div v-for="project in ProjectStore.projects"
                        class="card rounded-xl shadow-lg p-4 bg-base-100 flex flex-col gap-2">
                        <div class="flex justify-between items-center gap-2 max-w-full">
                            <div class="overflow-hidden">
                                <div class="font-semibold text-neutral text-lg truncate w-full">{{ project.title }}
                                </div>
                            </div>
                            <div class="dropdown dropdown-end">
                                <LucideMoreVertical :size="16" tabindex="0" role="button" />
                                <ul tabindex="0"
                                    class="dropdown-content z-[1] menu menu-xs p-2 shadow bg-base-100 rounded-box w-24">
                                    <li>
                                        <NuxtLink :to="'/admin/projects/' + project.id"
                                            class="btn btn-xs h-min justify-start my-px">
                                            <LucidePencil :size="16" />Edit
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <button class="btn btn-error btn-xs h-min my-px"
                                            @click="removeData = project; confirmDelete = true;">
                                            <LucideTrash2 :size="16" />Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-xs font-light flex justify-between">
                            <div>{{ project.readStartDate }} - {{ project.readEndDate }}</div>
                            <div class="font-semibold">{{ project.read_status }}</div>
                        </div>
                        <div class="border-b border-b-neutral/10"></div>
                        <div
                            class="hover:scale-105 duration-300 aspect-video bg-neutral/10 rounded-lg overflow-hidden relative">
                            <img v-if="project.photos.length" :src="apiUrl + project.photos[0].path_md"
                                :alt="project.title" class="h-full max-w-full mx-auto">
                            <div v-else class="aspect-video w-full rounded-lg bg-accent/10"></div>

                            <div class="badge badge-xs py-2 absolute z-[10] left-2 bottom-2">{{
                                project.skills_count }}
                                skills
                            </div>
                        </div>
                        <div class="truncate text-sm font-semibold text-wrap line-clamp-2" v-if="project.company">{{
                            project.company }}</div>
                        <div class="truncate text-sm font-light text-wrap line-clamp-2">{{ project.description }}</div>
                    </div>
                </div>

                <!-- EMPTY -->
                <div v-if="ProjectStore.data != null && !ProjectStore.projects.length" class="flex justify-center">
                    <ImagesEmpty class="w-3/4 lg:w-1/3" />
                </div>
            </div>
            <div class="flex justify-end">
                <AdminPagination :page="ProjectStore.page" :total_page="ProjectStore.total_page" :gotoPage="getData" />
            </div>


            <!-- delete confirmation -->
            <AdminConfirmation action-text="Delete" :show="confirmDelete" @close="confirmDelete = false" @yes="remove">
                Are you sure to remove this project?
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
    layout: false,
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

// delete
const confirmDelete = ref<boolean>(false);
const removeData = ref<Project | null>(null)

const remove = async (): Promise<void> => {
    if (!removeData.value) return;

    isLoading.value = true;

    try {
        await ProjectStore.remove(removeData.value!.id);

        isLoading.value = false;
        confirmDelete.value = false;
        removeData.value = null;
        toast.success('Success', { autoClose: 3000 });

        // reload page
        await getData();
    } catch (error: any) {
        toast.error(error.message, { autoClose: 3000 })

        isLoading.value = false;
    }
}
</script>
