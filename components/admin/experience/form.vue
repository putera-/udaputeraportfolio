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
                        <DatePicker v-model="formData.startDate" color="gray">
                            <template #default="{ togglePopover }">
                                <button class="btn btn-outline border-neutral/25 btn-sm font-normal"
                                    @click="togglePopover">
                                    {{ dayjs(formData.startDate).format('D MMMM YYYY') }}
                                </button>
                            </template>
                        </DatePicker>
                    </label>
                    <label class="form-control w-full max-w-xs" v-show="formData.endDate != null">
                        <span class="label label-text">End Date</span>
                        <DatePicker v-model="formData.endDate" color="gray">
                            <template #default="{ togglePopover }">
                                <button class="btn btn-outline border-neutral/25 btn-sm font-normal"
                                    @click="togglePopover">
                                    {{ dayjs(formData.endDate).format('D MMMM YYYY') }}
                                </button>
                            </template>
                        </DatePicker>
                    </label>
                </div>
                <label class="form-control">
                    <!-- PRESENT -->
                    <label class="cursor-pointer label flex justify-start gap-2 mt-8">
                        <input :checked="formData.endDate == null" @change="setEndDate" type="checkbox"
                            class="checkbox checkbox-neutral" />
                        <span class="label-text">Present</span>
                    </label>
                </label>
            </div>
            <div>
                <div v-if="errors.startDate" class="label-text-alt text-error">
                    {{ errors.startDate }}
                </div>
                <div v-if="errors.endDate" class="label-text-alt text-error">
                    {{ errors.endDate }}
                </div>
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
import { DatePicker } from 'v-calendar';
import dayjs from 'dayjs';

const props = defineProps<{
    show: Boolean,
    data: Experience | null
}>();
const _show = ref<Boolean>(props.show);
const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');
const emit = defineEmits(['close', 'saved'])

const formData = ref<Record<string, any>>({});

watchEffect((): void => {
    errors.value = {};
    responseError.value = '';
    _show.value = props.show;
    formData.value = {
        title: props.data ? props.data.title : '',
        company: props.data ? props.data.company : '',
        location: props.data ? props.data.location : '',
        description: props.data ? props.data.description : '',
        startDate: props.data ? new Date(props.data.startDate) : new Date(),
        endDate: props.data ? (props.data.endDate ? new Date(props.data.endDate) : null) : null
    }
});

// endDate
const setEndDate = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.checked) {
        formData.value.endDate = new Date();
    } else {
        formData.value.endDate = null;
    }
}

// SAVE
const ExperienceStore = useExperienceStore();
const confirmSave = ref<boolean>(false);
const format = "YYYY-MM-D";

const save = async () => {
    errors.value = {};
    responseError.value = '';
    try {
        // format date
        const _data = { ...formData.value };
        _data.startDate = dayjs(_data.startDate).format(format);
        if (_data.endDate) {
            _data.endDate = dayjs(_data.endDate).format(format);
        }

        if (!props.data) {
            // create
            await ExperienceStore.create(_data);
        } else {
            // update
            await ExperienceStore.update(props.data.id, _data);
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
            responseError.value = error.data.message;
        }

    }
}
</script>
