<template>
<div class="font-bold text-3xl flex gap-2">Educations
    <IconsCatLoading v-show="isLoading" class="w-8" />
</div>
<div class="divider before:h-px after:h-px mt-0 mb-2"></div>

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
                    <td></td>
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
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const EducationStore = useEducationStore();
onBeforeMount(async (): Promise<void> => {
    await EducationStore.get()
});

const filter = ref<string>('');

// TODO isloading is not yet use
const isLoading = ref<boolean>(false);

const educations = computed(() => {
    const search: string = filter.value.toLowerCase().trim();

    if (search != '') {
        return EducationStore.data.filter((edu: Education) => edu.institutionName.toLowerCase().includes(search));
    } else {
        return EducationStore.data
    }
});
</script>
