<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>
                <NuxtLink to="/admin/blogs">Blogs</NuxtLink>
            </li>
            <li>Create</li>
        </template>

        <template #default>
            <div class="font-bold text-3xl flex gap-2">New Blog
                <IconsCatLoading v-show="isLoading" class="w-8" />
            </div>
            <div class="divider before:h-px after:h-px mt-0"></div>


            <div class="flex flex-col gap-4">
                <label class="form-control w-full">
                    <div class="label-text font-semibold">Blog Title</div>
                    <input v-model="form.title" type="text" placeholder="Blog Title"
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

                <label class="form-control w-full">
                    <div class="label-text font-semibold">Content</div>
                    <textarea v-model="form.content" cols="30" rows="10" placeholder="Content.."
                        class="textarea textarea-bordered w-full"></textarea>
                    <div v-if="errors.content" class="text-right label-text-alt text-error">{{ errors.content }}
                    </div>
                </label>

                <div class="flex justify-end gap-4">
                    <button class="btn" @click="confirmCancel = true">Cancel</button>
                    <button class="btn btn-neutral" @click="confirmSave = true">Save</button>
                </div>
            </div>

            <!-- CANCEL CONFIRMATION -->
            <AdminConfirmation action-text="Cancel" :show="confirmCancel" @close="confirmCancel = false"
                @yes="navigateTo('/admin/blogs')">
                Are you sure to discard this new blog?
            </AdminConfirmation>

            <!-- CREATE CONFIRMATION -->
            <AdminConfirmation action-text="Save" :show="confirmSave" @close="confirmSave = false" @yes="save">
                Are you sure to save this new blog?
            </AdminConfirmation>
        </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { toast } from 'vue3-toastify';

definePageMeta({
    middleware: ['auth'],
    layout: false
});

const form = ref<Record<string, string>>({
    title: '',
    content: ''
});

const photos = ref<{ file: File, photo: string }[]>([]);

// PHOTOS
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

const removePhoto = (index: number) => {
    photos.value.splice(index, 1);
}

// cancel
const confirmCancel = ref<boolean>(false);
const confirmSave = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const BlogStore = useBlogStore();
const errors = ref<Record<string, string>>({});

const save = async () => {
    try {
        isLoading.value = true;

        const _photo = photos.value.map(p => p.file)

        await BlogStore.create(form.value, _photo)

        confirmSave.value = false;

        toast.success('Success', {
            autoClose: 500,
            onClose: () => {
                isLoading.value = false;
                navigateTo('/admin/blogs');
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
}

</script>
