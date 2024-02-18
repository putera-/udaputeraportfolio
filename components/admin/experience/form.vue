<template>
<input type="checkbox" v-model="_show" class="modal-toggle" />
<div class="modal" role="dialog">
    <div class="modal-box overflow-visible">
        <form method="dialog">
            <button @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg mb-2">{{ data ? 'Update' : 'New' }} Experience</h3>
        <div>
            <label class="form-control w-full">
                <span class="label label-text">Company</span>
                <input v-model="formData.company" type="text" placeholder="Company"
                    class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.company">{{ errors.company }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Title</span>
                <input v-model="formData.title" type="text" placeholder="Title" class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.title">{{ errors.title }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Location</span>
                <input v-model="formData.location" type="text" placeholder="Location"
                    class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.location">{{ errors.location }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Description</span>
                <textarea v-model="formData.description" placeholder="Description" rows="5"
                    class="textarea textarea-bordered w-full"></textarea>
                <span class="label-text-alt text-right text-error" v-if="errors.location">{{ errors.location }}</span>
            </label>
            <div class="flex gap-4 items-start">
                <div>
                    <label class="form-control w-full max-w-xs">
                        <span class="label label-text">Start Date</span>
                        <VueDatePicker v-model="formData.startDate" format="d MMMM yyyy" :enable-time-picker="false"
                            input-class-name="!bg-base-100 !border-neutral/25" />
                        <span class="label-text-alt text-right text-error" v-if="errors.startDate">{{ errors.startDate
                        }}</span>
                    </label>
                    <label class="form-control w-full max-w-xs" v-show="formData.endDate != null">
                        <span class="label label-text">End Date</span>
                        <VueDatePicker v-model="formData.endDate" format="d MMMM yyyy" :enable-time-picker="false"
                            input-class-name="!bg-base-100 !border-neutral/25" />
                        <span class="label-text-alt text-right text-error" v-if="errors.endDate">{{ errors.endDate
                        }}</span>
                    </label>
                </div>
                <label class="form-control">
                    <!-- PRESENT -->
                    <label class="cursor-pointer label flex justify-start gap-2 mt-9">
                        <input :checked="formData.endDate == null" @change="setEndDate" type="checkbox"
                            class="checkbox checkbox-neutral" />
                        <span class="label-text">Present</span>
                    </label>
                </label>
            </div>
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
import dayjs from 'dayjs';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
    show: Boolean,
    data: Experience | null
}>();
const _show = ref<Boolean>(props.show);
const emit = defineEmits(['close', 'saved'])

const format = "YYYY-MM-D";
const formData = ref<Record<string, any>>({});

watchEffect((): void => {
    _show.value = props.show;
    formData.value = {
        title: props.data ? props.data.title : '',
        company: props.data ? props.data.company : '',
        location: props.data ? props.data.location : '',
        description: props.data ? props.data.description : '',
        startDate: dayjs(props.data ? props.data.startDate : '').format(format),
        endDate: props.data ? props.data.endDate : null
    }
});

// endDate
const setEndDate = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.checked) {
        formData.value.endDate = dayjs().format(format);
    } else {
        formData.value.endDate = null;
    }
}

// SAVE
const ExperienceStore = useExperienceStore();
const confirmSave = ref<boolean>(false);
const errors = ref<Record<string, string>>({})
const responseError = ref<string>('')

const save = async () => {
    errors.value = {};
    responseError.value = '';
    try {
        if (!props.data) {
            // create
            await ExperienceStore.create(formData.value);
        } else {
            // update
            await ExperienceStore.update(props.data.id, formData.value);
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
