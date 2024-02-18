
<template>
<input type="checkbox" v-model="_show" class="modal-toggle" />
<div class="modal" role="dialog">
    <div class="modal-box overflow-visible">
        <form method="dialog">
            <button @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg mb-2">{{ data ? 'Update' : 'New' }} Skill</h3>
        <div>
            <label class="form-control w-full">
                <span class="label label-text">Skill Title</span>
                <input v-model="formData.title" type="text" placeholder="Title" class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.title">{{
                    errors.title }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Category</span>
                <input v-model="formData.category" type="text" placeholder="Category"
                    class="input input-bordered w-full uppercase" />
                <span class="label-text-alt text-right text-error" v-if="errors.category">{{
                    errors.title }}</span>

                <!-- category selector -->
                <div class="flex flex-wrap gap-2 mt-2">
                    <button @click="formData.category = category.title" class="badge badge-sm badge-neutral"
                        v-for="category in SkillStore.categories">{{
                            category.title }}
                    </button>
                </div>
            </label>
            <label class="form-control w-full">
                <!-- svg preview -->
                <div class="flex justify-center w-full mt-2">
                    <div class="w-14 h-14 bg-neutral/10 rounded-full p-1">
                        <div v-html="formData.svg"></div>
                    </div>
                </div>
                <span class="label label-text">SVG</span>
                <textarea v-model="formData.svg" rows="5" class="textarea textarea-bordered w-full"></textarea>
                <span class="label-text-alt text-right text-error" v-if="errors.major">{{ errors.major }}</span>
            </label>

        </div>

        <div class="modal-action flex justify-end items-center">
            <div class="text-error font-sm" v-if="responseError">{{ responseError }}</div>
            <button @click="$emit('close')" class="btn">Close!</button>
            <button @click="confirmSave = true" class="btn btn-neutral">{{ data ? 'Update' : 'Save' }}</button>
        </div>

        <!-- confirmation modal -->
        <AdminConfirmation action-text="Save" :show="confirmSave" @close="confirmSave = false" @yes="save">
            Are you sure to {{ data ? 'update' : 'save' }}?
        </AdminConfirmation>
    </div>
</div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';

const props = defineProps<{
    show: Boolean,
    data: Skill | null
}>();

const _show = ref<Boolean>(props.show);
const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');
const emit = defineEmits(['close', 'saved']);

const formData = ref<Record<string, any>>({});

watchEffect((): void => {
    errors.value = {};
    responseError.value = '';
    _show.value = props.show;

    formData.value = {
        title: props.data ? props.data.title : '',
        category: props.data ? props.data.category.title : '',
        svg: props.data ? props.data.svg : '',
    }
});

// // SAVE
const SkillStore = useSkillStore();
const confirmSave = ref<boolean>(false);

const save = async () => {
    errors.value = {};
    responseError.value = '';
    try {
        if (!props.data) {
            // create
            await SkillStore.create(formData.value);
        } else {
            // update
            await SkillStore.update(props.data.id, formData.value);
        }
        confirmSave.value = false;
        toast.success("Success", {
            autoClose: 3000
        });
        emit('saved');
    } catch (error: any) {
        confirmSave.value = false;
        if (error.isJoi) {
            errors.value = error.data;
        } else {
            responseError.value = error.message;
        }
    }
}
</script>
