
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
                <span class="label label-text">Institution</span>
                <input v-model="formData.institutionName" type="text" placeholder="Institution"
                    class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.institutionName">{{
                    errors.institutionName }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Major</span>
                <input v-model="formData.major" type="text" placeholder="Major" class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.major">{{ errors.major }}</span>
            </label>
            <label class="form-control w-full">
                <span class="label label-text">Degree</span>
                <input v-model="formData.degree" type="text" placeholder="Degree" class="input input-bordered w-full" />
                <span class="label-text-alt text-right text-error" v-if="errors.degree">{{ errors.degree }}</span>
            </label>
            <div class="flex gap-4 items-start">
                <div>
                    <label class="form-control w-full max-w-xs">
                        <span class="label label-text">Start Year</span>

                        <input v-model="formData.startYear" type="text" placeholder="Start Year"
                            class="input input-bordered w-full" />

                        <span class="label-text-alt text-right text-error" v-if="errors.startYear">{{ errors.startYear
                        }}</span>
                    </label>
                    <label class="form-control w-full max-w-xs" format="yyyy" v-show="formData.endYear != null">
                        <span class="label label-text">End Year</span>

                        <input v-model="formData.endYear" type="text" placeholder="Start Year"
                            class="input input-bordered w-full" />

                        <span class="label-text-alt text-right text-error" v-if="errors.endYear">{{ errors.endYear
                        }}</span>
                    </label>
                </div>
                <label class="form-control">
                    <!-- PRESENT -->
                    <label class="cursor-pointer label flex justify-start gap-2 mt-9">
                        <input :checked="formData.endYear == null" @change="setEndYear" type="checkbox"
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

const props = defineProps<{
    show: Boolean,
    data: Education | null
}>();
const _show = ref<Boolean>(props.show);
const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');
const emit = defineEmits(['close', 'saved']);

const format = "YYYY";
const formData = ref<Record<string, any>>({});

const currentYear = new Date().getFullYear();

watchEffect((): void => {
    errors.value = {};
    responseError.value = '';
    _show.value = props.show;

    formData.value = {
        institutionName: props.data ? props.data.institutionName : '',
        major: props.data ? props.data.major : '',
        degree: props.data ? props.data.degree : '',
        startYear: props.data ? props.data.startYear : currentYear,
        endYear: props.data ? (props.data.endYear != 'Present' ? props.data.endYear : null) : null
    }
});

// endYear
const setEndYear = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.checked) {
        formData.value.endYear = currentYear;
    } else {
        formData.value.endYear = null;
    }
}

// SAVE
const EducationStore = useEducationStore();
const confirmSave = ref<boolean>(false);

const save = async () => {
    errors.value = {};
    responseError.value = '';
    try {
        if (!props.data) {
            // create
            await EducationStore.create(formData.value);
        } else {
            // update
            await EducationStore.update(props.data.id, formData.value);
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
