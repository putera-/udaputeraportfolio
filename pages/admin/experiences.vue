<template>
<div class="font-bold text-3xl">Experiences</div>
<div class="divider before:h-px after:h-px mt-0"></div>
<div class="flex gap-2 max-sm:items-end justify-between">
    <div class="grow">
        <div class="flex items-center bg-base-100 pl-2 rounded">
            <LucideSearch :size="16" class="flex-none" />
            <input v-model="filter" @keyup.enter="search" type="text"
                class="input input-sm focus:outline-0 focus:border-0 !w-full">
            <button @click="search" class="btn btn-neutral btn-sm rounded-l-none flex-none">Search</button>
        </div>
    </div>
    <div class="flex-none">
        <div class="join">
            <button class="join-item btn btn-sm" :class="{ 'btn-disabled': ExperieneStore.page == 1 }">«</button>
            <button class="join-item btn btn-sm bg-base-100 font-normal max-sm:text-xs">
                Page {{ ExperieneStore.page }}
                <span class="max-sm:hidden"> of {{ ExperieneStore.total_page }}</span>
            </button>
            <button class="join-item btn btn-sm"
                :class="{ 'btn-disabled': ExperieneStore.page == ExperieneStore.total_page }">»</button>
        </div>
    </div>
</div>
<div class="py-3">
    <div class="max-md:hidden overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover" v-for="data in ExperieneStore.experiences">
                    <td>
                        <div>{{ data.company }}</div>
                        <div class="text-xs">{{ data.title }}</div>
                    </td>
                    <td>{{ data.readStartDate }}</td>
                    <td>{{ data.readEndDate }}</td>
                    <td>{{ data.location }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="md:hidden flex flex-col gap-2">
        <div class="card bg-base-100/50 p-2" v-for="data in ExperieneStore.experiences">
            <div class="flex gap-2 items-center">
                <LucideBuilding2 :size="20" class="text-gray-500" />
                <div class="grow">
                    <div class="flex justify-between">
                        <div>
                            <div>{{ data.company }}</div>
                            <div class="text-xs">{{ data.title }}</div>
                        </div>
                        <div>
                            <button class="btn btn-sm">
                                <LucidePencil :size="16" />
                            </button>
                        </div>
                    </div>
                    <div class="divider before:h-px after:h-px my-1 w-full"></div>
                    <div class="text-xs">{{ data.readStartDate }} - {{ data.readEndDate }}</div>
                    <div class="text-xs">{{ data.location }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="flex justify-end">
    <div class="join">
        <button class="join-item btn btn-sm" :class="{ 'btn-disabled': ExperieneStore.page == 1 }">«</button>
        <button class="join-item btn btn-sm bg-base-100 font-normal max-sm:text-xs">
            Page {{ ExperieneStore.page }}
            <span class="max-sm:hidden"> of {{
                ExperieneStore.total_page }}</span>
        </button>
        <button class="join-item btn btn-sm"
            :class="{ 'btn-disabled': ExperieneStore.page == ExperieneStore.total_page }">»</button>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const ExperieneStore = useExperienceStore();
onBeforeMount(async (): Promise<void> => {
    await ExperieneStore.getAll(filter.value);
    console.log(ExperieneStore.data);
});


const filter = ref<string>('');
// const data = computed<Experience[]>(() => {
//     const search = filter.value.trim();
//     if (search != '') {
//         return ExperieneStore.data.filter((d: Experience) => d.company.toLowerCase().includes(search));
//     } else {
//         return ExperieneStore.data;
//     }
// })
const search = async () => {
    await ExperieneStore.getAll(filter.value)
}

</script>
