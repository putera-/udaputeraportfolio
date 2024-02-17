<template>
<div class="flex flex-col gap-4">
    <label class="form-control w-full max-w-xs">
        <div class="label label-text pb-0">Name</div>
        <input v-model="formData.name" type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
        <div class="text-error text-right text-sm pr-2" v-if="errors.name">{{ errors.name }}</div>
    </label>
    <label class="form-control w-full max-w-xs">
        <div class="label label-text pb-0">Email</div>
        <input v-model="formData.email" type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <div class="text-error text-right text-sm pr-2" v-if="errors.email">{{ errors.email }}</div>
    </label>
</div>

<div class="flex gap-2 items-center">
    <label class="btn btn-neutral my-5" @click="confirmUpdate = true">Update</label>
    <div class="text-error font-sm" v-if="responseError">{{ responseError }}</div>
</div>

<!-- CREATE CONFIRMATION -->
<AdminConfirmation action-text="Update" :show="confirmUpdate" @close="confirmUpdate = false" @yes="handleUpdate">
    Are you sure?
</AdminConfirmation>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
const emit = defineEmits(['updating', 'done']);

const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');
const AuthStore = useAuthStore();
const confirmUpdate = ref<boolean>(false);

const formData = ref({
    name: AuthStore.user!.name,
    email: AuthStore.user!.email,
});

const handleUpdate = async () => {
    errors.value = {};
    confirmUpdate.value = false;
    emit('updating');
    try {
        await AuthStore.updateUser(formData.value);
        emit('done');
        toast.success('Success', {
            autoClose: 500
        });
    } catch (error: any) {
        if (error.isJoi) {
            errors.value = error.data;
        } else {
            responseError.value = error.message;
            toast.error(error.message, { autoClose: 3000 });
        }
        emit('done');
    }
}
</script>
