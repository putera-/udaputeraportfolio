
import type loginVue from '~/pages/admin/login.vue';
<template>
<div class="flex flex-col gap-4">
    <label class="form-control w-full max-w-xs">
        <div class="label label-text pb-0">Old Password</div>
        <input v-model="formData.old_password" type="password" placeholder="Password"
            class="input input-bordered w-full max-w-xs" />
        <div class="text-error text-right text-sm pr-2" v-if="errors.old_password">{{ errors.old_password }}</div>
    </label>
    <label class="form-control w-full max-w-xs">
        <div class="label label-text pb-0">Password</div>
        <input v-model="formData.password" type="password" placeholder="Password"
            class="input input-bordered w-full max-w-xs" />
        <div class="text-error text-right text-sm pr-2" v-if="errors.password">{{ errors.password }}</div>
    </label>
    <label class="form-control w-full max-w-xs">
        <div class="label label-text pb-0">Password Confirm</div>
        <input v-model="formData.password_confirm" type="password" placeholder="Confirm Password"
            class="input input-bordered w-full max-w-xs" />
        <div class="text-error text-right text-sm pr-2" v-if="errors.password_confirm">{{
            errors.password_confirm }}
        </div>
    </label>
</div>

<div class="flex gap-2 items-center">
    <label class="btn btn-neutral my-5" @click="confirmUpdate = true">Update</label>
    <div class="text-error font-sm" v-if="responseError">{{ responseError }}</div>
</div>

<!-- CREATE CONFIRMATION -->
<AdminConfirmation action-text="Update Password" :show="confirmUpdate" @close="confirmUpdate = false"
    @yes="handleUpdate">
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
    old_password: '',
    password: '',
    password_confirm: ''
});

const handleUpdate = async () => {
    errors.value = {};
    responseError.value = {};
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
        }
        emit('done');
    }
}
</script>
