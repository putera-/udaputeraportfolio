<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>
                <NuxtLink to="/admin/projects">Projects</NuxtLink>
            </li>
            <li>Update</li>
        </template>

        <template #default>
            <div class="font-bold text-3xl flex gap-2">Update Project
                <IconsCatLoading v-show="isLoading" class="w-8" />
            </div>
            <div class="divider before:h-px after:h-px mt-0"></div>


            <div class="flex flex-col gap-4">
                <label class="form-control w-full">
                    <div class="label-text font-semibold">Project Title</div>
                    <input v-model="form.title" type="text" placeholder="Project Title"
                        class="input input-lg input-bordered font-bold w-full" />
                    <div v-if="errors.title" class="text-right label-text-alt text-error">{{ errors.title }}
                    </div>
                </label>
                <div class="overflow-x-auto py-2">
                    <div class="label-text font-semibold">Photos</div>

                    <!-- dummy photo -->
                    <div v-if="!photos.length" class="grid grid-cols-5 max-lg:w-[200vw] gap-2 lg:gap-4">
                        <div class="bg-neutral/10 w-full aspect-video rounded"></div>
                    </div>

                    <!-- photo preview -->
                    <draggable v-model="photos" group="photo" item-key="id"
                        class="grid grid-cols-5 max-lg:w-[200vw] gap-2 lg:gap-4">
                        <template #item="{ element, index }">
                            <div
                                class="min-w-full h-full aspect-video rounded overflow-hidden bg-neutral/10 relative cursor-grab">
                                <img :src="element.photo" class="h-full max-w-full mx-auto">

                                <div class="dropdown dropdown-end absolute z-[1] right-2 top-2">
                                    <LucideMoreVertical :size="16" tabindex="0" role="button" />
                                    <ul tabindex="0"
                                        class="dropdown-content z-[1] menu menu-xs p-2 shadow bg-base-100 rounded-box w-24">
                                        <li><button class="btn btn-error btn-xs h-min my-px flex flex-nowrap"
                                                @click="removePhoto(index)">
                                                <LucideTrash2 :size="16" />Remove
                                            </button></li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </draggable>

                    <input type="file" class="file-input file-input-sm w-full my-2" ref="fileInput" accept="image/*"
                        multiple @change="handlePhotos">
                </div>
                <div>
                    <div class="label-text font-semibold">Status</div>
                    <div class="flex flex-wrap gap-3 md:gap-6 mt-1">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="project.status" type="radio" name="project-status"
                                class="radio checked:bg-neutral" value="ON_PROGRESS" />
                            <span class="label-text">ON PROGRESS</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="project.status" type="radio" name="project-status"
                                class="radio checked:bg-success" value="COMPLETE" />
                            <span class="label-text">COMPLETE</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="project.status" type="radio" name="project-status"
                                class="radio checked:bg-warning" value="MAINTENANCE" />
                            <span class="label-text">MAINTENANCE</span>
                        </label>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <label class="form-control w-min min-w-xs">
                        <span class="label label-text font-semibold">Start Date</span>
                        <DatePicker v-model="form.startDate" color="gray">
                            <template #default="{ togglePopover }">
                                <button class="btn btn-outline border-neutral/25 btn-sm font-normal text-nowrap"
                                    @click="togglePopover">
                                    {{ dayjs(form.startDate).format('D MMMM YYYY') }}
                                </button>
                            </template>
                        </DatePicker>
                    </label>
                    <label class="form-control w-min min-w-32">
                        <span class="label label-text font-semibold">End Date</span>
                        <DatePicker v-model="form.endDate" color="gray">
                            <template #default="{ togglePopover }">
                                <button class="btn btn-outline border-neutral/25 btn-sm font-normal text-nowrap"
                                    @click="togglePopover" :disabled="form.endDate == null">
                                    {{ form.endDate == null ? '-' : dayjs(form.endDate).format('D MMMM YYYY') }}
                                </button>
                            </template>
                        </DatePicker>
                    </label>
                    <label class="form-control">
                        <!-- PRESENT -->
                        <label class="cursor-pointer label flex justify-start gap-2 mt-8">
                            <input :checked="form.endDate == null" @change="setEndDate" type="checkbox"
                                class="checkbox checkbox-neutral" />
                            <span class="label-text">Present</span>
                        </label>
                    </label>
                </div>


                <!-- DETAIL -->
                <div class="grid lg:grid-cols-2 gap-4">
                    <label class="form-control w-full">
                        <div class="label-text font-semibold">Company</div>
                        <input v-model="form.company" type="text" placeholder="Company"
                            class="input input-bordered w-full" />
                        <div v-if="errors.company" class="text-right label-text-alt text-error">{{ errors.company }}
                        </div>
                    </label>
                    <label class="form-control w-full">
                        <div class="label-text font-semibold">Url</div>
                        <input v-model="form.url" type="text" placeholder="Url" class="input input-bordered w-full" />
                        <div v-if="errors.url" class="text-right label-text-alt text-error">{{ errors.url }}
                        </div>
                    </label>
                    <label class="form-control w-full">
                        <div class="label-text font-semibold">Github</div>
                        <input v-model="form.github" type="text" placeholder="Github"
                            class="input input-bordered w-full" />
                        <div v-if="errors.github" class="text-right label-text-alt text-error">{{ errors.github }}
                        </div>
                    </label>
                    <label class="form-control w-full">
                        <div class="label-text font-semibold">Gitlab</div>
                        <input v-model="form.gitlab" type="text" placeholder="Gitlab"
                            class="input input-bordered w-full" />
                        <div v-if="errors.gitlab" class="text-right label-text-alt text-error">{{ errors.gitlab }}
                        </div>
                    </label>
                </div>

                <!-- SKILL -->
                <div>
                    <div class="label-text font-semibold flex items-center gap-4">Skills
                        <button class="btn btn-xs btn-neutral" @click="open_skill_selector = true">
                            <LucidePlus :size="12" />Add Skill
                        </button>
                    </div>
                    <div class="card bg-base-100 shadow p-4 mt-2">
                        <div v-for="category of data_skills" class="mb-2">
                            <div class="label-text font-semibold flex items-center gap-4 mb-px">{{ category.title
                            }}
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <Skill :skill="skill" v-for="skill of category.skills" />
                            </div>
                        </div>
                    </div>
                </div>

                <label class="form-control w-full">
                    <div class="label-text font-semibold">Description</div>
                    <textarea v-model="form.description" cols="30" rows="10" placeholder="Description.."
                        class="textarea textarea-bordered w-full"></textarea>
                    <div v-if="errors.description" class="text-right label-text-alt text-error">{{ errors.description }}
                    </div>
                </label>

                <div class="flex justify-end gap-4">
                    <button class="btn" @click="confirmCancel = true">Cancel</button>
                    <button class="btn btn-neutral" @click="confirmSave = true">Save</button>
                </div>
            </div>

            <!-- CANCEL CONFIRMATION -->
            <AdminConfirmation action-text="Cancel" :show="confirmCancel" @close="confirmCancel = false"
                @yes="navigateTo('/admin/projects')">
                Are you sure to discard this new project?
            </AdminConfirmation>

            <!-- CREATE CONFIRMATION -->
            <AdminConfirmation action-text="Save" :show="confirmSave" @close="confirmSave = false" @yes="save">
                Are you sure to save this new project?
            </AdminConfirmation>

            <!-- SKILL SELECTOR -->
            <AdminProjectSkillSelector :show="open_skill_selector" :selected="selected_skills"
                @close="open_skill_selector = false" @select="addSkill" />
        </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { toast } from 'vue3-toastify';

import { DatePicker } from 'v-calendar';
import dayjs from 'dayjs';

definePageMeta({
    middleware: ['auth'],
    layout: false
});

const { public: { apiUrl } } = useRuntimeConfig();

// get skill category
const SkillStore = useSkillStore();
onBeforeMount(async () => {
    console.log('get skill store broo')
    if (SkillStore.categories == null) await SkillStore.getCategories();
})

// get project data
const id: string = useRoute().params.id as string;
const ProjectStore = useProjectStore();
const project: Project = await ProjectStore.get(id);

const form = ref<Record<string, any>>({
    title: project.title,
    description: project.description,
    url: project.url,
    github: project.github,
    gitlab: project.gitlab,
    startDate: project.startDate,
    endDate: project.endDate,
    status: project.status,
    company: project.company,
    // skills: project.skills
});

// SKILL
const open_skill_selector = ref<boolean>(false);
const data_skills = ref<SkillCategory[]>(project.skill_category);
const selected_skills = ref<Skill[]>(project.skills!)

const addSkill = (newSkill: Skill, category: SkillCategory) => {
    // TODO fix selected skills
    const index = selected_skills.value.findIndex(s => s.id == newSkill.id);

    if (index < 0) {
        selected_skills.value.push(newSkill);
    } else {
        selected_skills.value.splice(index, 1);
    }

    const catIndex = data_skills.value.findIndex(c => c.id == newSkill.categoryId);
    if (catIndex < 0) {
        // skill category not include
        const newCategory = { ...category };
        newCategory.skills = [newSkill];

        data_skills.value.push(newCategory);
    } else {
        const skillIndex = data_skills.value[catIndex].skills!.findIndex(sss => sss.id == newSkill.id);
        if (skillIndex < 0) {
            // add skill
            data_skills.value[catIndex].skills!.push(newSkill);
        } else {
            // remove index
            data_skills.value[catIndex].skills!.splice(skillIndex, 1);
            if (!data_skills.value[catIndex].skills!.length) {
                // remove category
                data_skills.value.splice(catIndex, 1)
            }
        }
    }
}

// cancel
const confirmCancel = ref<boolean>(false);

const errors = ref<Record<string, string>>({});
const confirmSave = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const currentPhotos = project.photos.map(p => {
    return {
        id: p.id,
        photo: apiUrl + p.path_md
    };
});
const photos = ref<{ file?: File, photo: string, id?: number }[]>(currentPhotos);


const handlePhotos = (e: Event): void => {
    const fileInput = e.target as HTMLInputElement;
    const files = fileInput.files;

    if (files!.length) {
        for (let i = 0; i < files!.length; i++) {
            const photo = files![i];

            const reader = new FileReader();

            reader.readAsDataURL(photo);
            reader.onload = () => {
                // prevent more than 10 photo
                if (photos.value.length == 10) return;

                photos.value.push({
                    file: photo,
                    photo: reader.result as string,
                });
            };

        }

        // reset
        fileInput.value = '';
    }
};

// remove photo
const removePhoto = (index: number) => {
    photos.value.splice(index, 1);
};

// endDate
const setEndDate = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.checked) {
        form.value.endDate = new Date();
    } else {
        form.value.endDate = null;
    }
}


const save = async () => {
    try {
        isLoading.value = true;

        const keepPhoto: any[] = [];
        const newPhoto: File[] = [];

        const putData: any = { ...form.value };

        for (let i = 0; i < photos.value.length; i++) {
            const photo = photos.value[i];
            // keep photo
            if (photo.id) keepPhoto.push({ index: i, id: photo.id });
            // new photo
            if (photo.file) newPhoto.push(photo.file);
        }

        console.log(putData)
        console.log(keepPhoto)
        console.log(newPhoto)

        // await ProjectStore.update(project.id, putData, keepPhoto, newPhoto)

        confirmSave.value = false;

        toast.success('Success', {
            autoClose: 500,
            onClose: () => {
                isLoading.value = false;
                // navigateTo('/admin/projects');
            }
        });
    } catch (error: any) {
        if (error.isJoi) {
            errors.value = error.data
        } else {
            toast.error(error.message, { autoClose: 3000 });
        }
        confirmSave.value = false;
        isLoading.value = false;
    }
};


</script>
