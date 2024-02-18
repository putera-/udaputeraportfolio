<template>
<div class="font-bold text-3xl flex gap-2">Skills
    <IconsCatLoading v-show="isLoading" class="w-8" />
</div>
<div class="divider before:h-px after:h-px mt-0 mb-2"></div>

<div class="flex gap-4">
    <select v-model="selectedCategory" class="select select-sm flex-none w-xs">
        <option value="0">All Category</option>
        <option :value="category.id" v-for="category in SkillStore.categories">{{ category.title }}</option>
    </select>
    <div class="grow flex items-center bg-base-100 pl-2 rounded">
        <LucideSearch :size="16" class="flex-none" />
        <input v-model="filter" type="text" placeholder="Search..."
            class="input input-sm focus:outline-0 focus:border-0 !w-full">
    </div>
</div>

<div class="py-3">
    <div class="max-md:hidden overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th class="w-10">SVG</th>
                    <th>Title</th>
                    <th class="text-center">Category</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover" v-for="skill in skills">
                    <td class="w-10">
                        <div v-html="skill.svg" class="w-7"></div>
                    </td>
                    <td class="text-neutral font-semibold">{{ skill.title }} {{ skill.projects_count }}</td>
                    <td class="text-center text-xs">{{ skill.category!.title }}</td>
                    <td>
                        <div class="flex justify-center gap-3">
                            <!-- <button @click="showForm = true; updateData = data"
                                class="btn btn-sm btn-circle btn-neutral h-min my-px">
                                <LucidePencil :size="16" />
                            </button> -->
                            <button v-if="skill.projects_count == 0" class="btn btn-sm btn-circle btn-error h-min my-px"
                                @click="removeData = skill; confirmDelete = true">
                                <LucideTrash2 :size="16" />
                            </button>
                        </div>
                    </td>
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

<!-- remove confirmation modal -->
<AdminConfirmation action-text="Delete" :show="confirmDelete" @close="confirmDelete = false" @yes="remove">
    Are you sure to remove?
    <br>
    <span class="font-bold text-lg" v-if="removeData">{{ removeData.title }}</span>
</AdminConfirmation>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const SkillStore = useSkillStore();
onBeforeMount(async (): Promise<void> => {
    await SkillStore.get();
    await SkillStore.getCategories();
});

// TODO isloading is not yet use
const isLoading = ref<boolean>(false);

const filter = ref<string>('');
const selectedCategory = ref<number>(0);
const skills = computed(() => {
    const search: string = filter.value.toLowerCase().trim();
    const category = selectedCategory.value;

    if (search != '' || category != 0) {
        return SkillStore.data.filter((skill: Skill) => {
            if (category == 0) {
                return skill.title.toLowerCase().includes(search);
            } else {
                return skill.title.toLowerCase().includes(search) && skill.categoryId == category;
            }
        });
    } else {
        return SkillStore.data;
    }
});

// DELETE
const removeData = ref<Skill | null>(null);
const confirmDelete = ref<boolean>(false);

const remove = async () => {
    if (!removeData.value) return;
    try {
        await SkillStore.remove(removeData.value!.id);

        confirmDelete.value = false;
        removeData.value = null;
        toast.success('Success', { autoClose: 3000 })

        // reload page
        await SkillStore.get();
    } catch (error: any) {
        toast.error(error.message, { autoClose: 3000 })

        isLoading.value = false;
    }
}
</script>
