<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Educations</li>
        </template>
        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl flex gap-2">Educations
                    <IconsCatLoading v-show="isLoading" class="w-8" />
                </div>
                <button class="btn btn-neutral btn-sm" @click="showForm = true; updateData = null">
                    <LucidePlus :size="12" /> New Education
                </button>
            </div>

            <div class="flex items-center bg-base-100 pl-2 rounded">
                <LucideSearch :size="16" class="flex-none" />
                <input v-model="filter" type="text" placeholder="Search..."
                    class="input input-sm focus:outline-0 focus:border-0 !w-full">
            </div>

            <div class="py-3">
                <div class="max-md:hidden overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Institution</th>
                                <th>Start Year</th>
                                <th>End Year</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover" v-for="data in educations">
                                <td>
                                    <div class="text-neutral font-semibold">{{ data.institutionName }}</div>
                                    <div class="text-xs">
                                        <span v-if="data.major">{{ data.major }}</span>
                                        <span v-if="data.degree"> - {{ data.degree }}</span>
                                    </div>
                                </td>
                                <td>{{ data.startYear }}</td>
                                <td>{{ data.endYear }}</td>
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
                    <div class="card bg-base-100/50 p-2" v-for="data in educations">
                        <div class="flex gap-2 items-center">
                            <LucideBuilding2 :size="20" class="text-gray-500" />
                            <div class="grow">
                                <div class="flex justify-between">
                                    <div>
                                        <div class="text-neutral font-semibold">{{ data.institutionName }}</div>
                                        <div class="text-xs">
                                            <span v-if="data.major">{{ data.major }}</span>
                                            <span v-if="data.degree"> - {{ data.degree }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="btn btn-sm">
                                            <LucidePencil :size="16" />
                                        </button>
                                    </div>
                                </div>
                                <div class="divider before:h-px after:h-px my-1 w-full"></div>
                                <div class="text-xs">{{ data.startYear }} - {{ data.endYear }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- remove confirmation modal -->
            <AdminConfirmation action-text="Delete" :show="confirmDelete" @close="confirmDelete = false" @yes="remove">
                Are you sure to remove?
                <br>
                <span class="font-bold text-lg" v-if="removeData">{{ removeData.institutionName }}</span>
            </AdminConfirmation>

            <!-- form modal -->
            <AdminEducationForm :show="showForm" :data="updateData" @close="showForm = false"
                @saved="showForm = false; getData()" />
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

const EducationStore = useEducationStore();
onBeforeMount(async (): Promise<void> => {
    await getData();
});

const getData = async () => {
    await EducationStore.get()
}

const filter = ref<string>('');

const isLoading = ref<boolean>(false);

const educations = computed(() => {
    const search: string = filter.value.toLowerCase().trim();

    if (search != '') {
        return EducationStore.data.filter((edu: Education) => edu.institutionName.toLowerCase().includes(search));
    } else {
        return EducationStore.data
    }
});

// FORM
const showForm = ref<boolean>(false);
const updateData = ref<Education | null>(null);

// DELETE
const confirmDelete = ref<boolean>(false);
const removeData = ref<Education | null>(null);
const remove = async () => {
    if (!removeData.value) return;
    try {
        await EducationStore.remove(removeData.value!.id);

        confirmDelete.value = false;
        removeData.value = null;
        toast.success('Success', { autoClose: 3000 })

        // reload page
        await getData()
    } catch (error: any) {
        toast.error(error.message, { autoClose: 3000 })

        isLoading.value = false;
    }
}
</script>
