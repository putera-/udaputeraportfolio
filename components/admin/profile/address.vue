<template>
<div>
    <label class="form-control w-full max-w-xs">
        <div class="label-text">Address</div>
        <textarea v-model="form.address" type="text" placeholder="Address" rows="4"
            class="textarea textarea-bordered w-full"></textarea>
        <div v-if="errors.address" class="text-right label-text-alt text-error">{{ errors.address }}</div>
    </label>
    <div class="flex flex-col">
        <label class="form-control w-full max-w-xs">
            <div class="label-text">City</div>
            <input v-model="form.city" type="text" placeholder="City" class="input input-bordered w-full" />
            <div v-if="errors.city" class="text-right label-text-alt text-error">{{ errors.city }}</div>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label-text">Country</div>
            <input v-model="form.country" type="text" placeholder="Country" class="input input-bordered w-full" />
            <div v-if="errors.country" class="text-right label-text-alt text-error">{{ errors.country }}</div>
        </label>
    </div>
</div>

<div class="border-b border-b-neutral/10 my-4"></div>

<div class="flex gap-2 items-center">
    <button @click="confirmUpdate = true" class="btn btn-neutral float-right">Update</button>
    <div class="text-error font-sm" v-if="responseError">{{ responseError }}</div>
</div>

<AdminConfirmation action-text="Update" :show="confirmUpdate" @close="confirmUpdate = false" @yes="doUpdate">
    Are you sure to update
    <span class="font-bold text-lg">Address?</span>
</AdminConfirmation>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';

const ProfileStore = useProfileStore();
const profile: Profile = ProfileStore.profile as Profile;
const form = ref<Record<string, string>>({
    address: profile.address,
    city: profile.city,
    country: profile.country,
});

const confirmUpdate = ref<Boolean>(false);
const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');

const doUpdate = async () => {
    responseError.value = '';
    try {
        const data = validate(addressValidate, form.value);
        await ProfileStore.update(data);

        confirmUpdate.value = false;

        errors.value = {};
        toast.success("Success", {
            autoClose: 3000
        });
    } catch (error: any) {
        confirmUpdate.value = false;
        if (error.isJoi) {
            errors.value = error.data;
        } else {
            responseError.value = error.message;
        }
    }
};

</script>
