<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Experiences</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl flex gap-2">Experiences
                    <IconsCatLoading v-show="isLoading" class="w-8" />
                </div>
                <button class="btn btn-neutral btn-sm" @click="showForm = true; updateData = null">
                    <LucidePlus :size="12" /> New Experiences
                </button>
            </div>

            <div class="flex gap-2 max-sm:items-end justify-between">
                <div class="grow">
                    <AdminSearch :filter="filter" :doFilter="doFilter" />
                </div>
                <div class="flex-none">
                    <AdminPagination :page="ExperienceStore.page" :total_page="ExperienceStore.total_page"
                        :gotoPage="getData" />
                </div>
            </div>
            <div class="py-3">
                <div class="max-md:hidden overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th class="text-center">Start Date</th>
                                <th class="text-center">End Date</th>
                                <th class="text-center">Location</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover" v-for=" data  in  ExperienceStore.experiences ">
                                <td>
                                    <div class="text-neutral font-semibold">{{ data.company }}</div>
                                    <div class="text-xs">{{ data.title }}</div>
                                </td>
                                <td class="text-center">{{ data.readStartDate }}</td>
                                <td class="text-center">{{ data.readEndDate }}</td>
                                <td class="text-center">{{ data.location }}</td>
                                <td>
                                    <div class="flex justify-center gap-3">
                                        <button @click="showForm = true; updateData = data"
                                            class="btn btn-sm btn-circle btn-neutral h-min my-px">
                                            <LucidePencil :size="16" />
                                        </button>
                                        <button class="btn btn-sm btn-circle btn-error h-min my-px"
                                            @click="removeData = data; confirmDelete = true">
                                            <LucideTrash2 :size="16" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="md:hidden flex flex-col gap-2">
                    <div class="card bg-base-100/50 p-2" v-for=" data  in  ExperienceStore.experiences ">
                        <div class="flex justify-between">
                            <div>
                                <div class="text-xs">{{ data.readStartDate }} - {{ data.readEndDate }}</div>
                                <div class="flex gap-2">
                                    <LucideBuilding2 :size="20" class="text-gray-500 mt-2" />
                                    <div>
                                        <div class="text-neutral font-semibold">{{ data.company }}</div>
                                        <div class="text-xs">{{ data.title }}</div>
                                        <div class="text-xs">{{ data.location }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown dropdown-end">
                                <LucideMoreVertical :size="16" tabindex="0" role="button" />
                                <ul tabindex="0"
                                    class="dropdown-content z-[1] menu menu-xs p-2 shadow bg-base-100 rounded-box w-24">
                                    <li>
                                        <button @click="showForm = true; updateData = data"
                                            class="btn btn-xs h-min justify-start my-px">
                                            <LucidePencil :size="16" />Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button @click="removeData = data; confirmDelete = true"
                                            class="btn btn-error btn-xs h-min my-px">
                                            <LucideTrash2 :size="16" />Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <AdminPagination :page="ExperienceStore.page" :total_page="ExperienceStore.total_page"
                    :gotoPage="getData" />
            </div>

            <!-- confirmation modal -->
            <AdminConfirmation action-text="Delete" :show="confirmDelete" @close="confirmDelete = false" @yes="remove">
                Are you sure to remove?
                <br>
                <span class="font-bold text-lg" v-if="removeData">{{ removeData.company }}</span>
            </AdminConfirmation>

            <!-- form modal -->
            <AdminExperienceForm :show="showForm" :data="updateData" @close="showForm = false"
                @saved="getData(); showForm = false" />
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

const ExperienceStore = useExperienceStore();
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
    await ExperienceStore.getAll(filter.value, page.value)

    isLoading.value = false;
}

// FORM
const showForm = ref<boolean>(false);
const updateData = ref<Experience | null>(null);

// DELETE
const confirmDelete = ref<boolean>(false);
const removeData = ref<Experience | null>(null);
const remove = async () => {
    if (!removeData.value) return;
    try {
        await ExperienceStore.remove(removeData.value!.id);

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
