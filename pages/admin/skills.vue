<template>
<div class="font-bold text-3xl flex gap-2">Skills
    <IconsCatLoading v-if="isLoading" class="w-8" />
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
                    <th class="w-10">SVG</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover" v-for="skill in skills">
                    <td class="w-10">
                        <div v-html="skill.svg" class="w-7"></div>
                    </td>
                    <td class="text-neutral font-semibold">{{ skill.title }}</td>
                    <td class="text-xs">{{ skill.category!.title }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="md:hidden flex flex-col gap-2">
        <div class="card bg-base-100/50 p-2" v-for="skill in skills">
            <div class="flex gap-4 items-center">
                <div v-html="skill.svg" class="w-8" />
                <div class="grow">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-neutral font-semibold">{{ skill.title }}</div>
                            <div class="text-xs">{{ skill.category!.title }}</div>
                        </div>
                        <div>
                            <button class="btn btn-sm">
                                <LucidePencil :size="16" />
                            </button>
                        </div>
                    </div>
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

const SkillStore = useSkillStore();
onBeforeMount(async (): Promise<void> => {
    await SkillStore.get()
});

const filter = ref<string>('');

// TODO isloading is not yet use
const isLoading = ref<boolean>(false);

const skills = computed(() => {
    const search: string = filter.value.toLowerCase().trim();

    if (search != '') {
        return SkillStore.data.filter((skill: Skill) => skill.title.toLowerCase().includes(search));
    } else {
        return SkillStore.data
    }
});
</script>
