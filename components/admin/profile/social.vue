<template>
<div class="grid lg:grid-cols-2 2xl:grid-cols-4 gap-8">
    <label class="form-control w-full">
        <div class="label-text">Web</div>
        <input v-model="form.web" type="text" placeholder="Web" class="input input-bordered w-full" />
        <div v-if="errors.web" class="text-right label-text-alt text-error">{{ errors.web }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Github</div>
        <input v-model="form.github" type="text" placeholder="Github" class="input input-bordered w-full" />
        <div v-if="errors.github" class="text-right label-text-alt text-error">{{ errors.github }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Gitlab</div>
        <input v-model="form.gitlab" type="text" placeholder="Gitlab" class="input input-bordered w-full" />
        <div v-if="errors.gitlab" class="text-right label-text-alt text-error">{{ errors.gitlab }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Linkedin</div>
        <input v-model="form.linkedin" type="text" placeholder="Linkedin" class="input input-bordered w-full" />
        <div v-if="errors.linkedin" class="text-right label-text-alt text-error">{{ errors.linkedin }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Instagram</div>
        <input v-model="form.instagram" type="text" placeholder="Instagram" class="input input-bordered w-full" />
        <div v-if="errors.instagram" class="text-right label-text-alt text-error">{{ errors.instagram }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Facebook</div>
        <input v-model="form.facebook" type="text" placeholder="Facebook" class="input input-bordered w-full" />
        <div v-if="errors.facebook" class="text-right label-text-alt text-error">{{ errors.facebook }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Twitter</div>
        <input v-model="form.twitter" type="text" placeholder="Twitter" class="input input-bordered w-full" />
        <div v-if="errors.twitter" class="text-right label-text-alt text-error">{{ errors.twitter }}</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Discord</div>
        <input v-model="form.discord" type="text" placeholder="Discord" class="input input-bordered w-full" />
        <div v-if="errors.discord" class="text-right label-text-alt text-error">{{ errors.discord }}</div>
    </label>
</div>

<div class="border-b border-b-neutral/10 my-4"></div>

<div class="">
    <button @click="confirmUpdate = true" class="btn btn-neutral float-right">Update</button>
</div>

<AdminConfirmation action-text="Update" :show="confirmUpdate" @close="confirmUpdate = false" @yes="doUpdate">
    Are you sure to update
    <span class="font-bold text-lg">Social?</span>
</AdminConfirmation>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const ProfileStore = useProfileStore();
const profile: Profile = ProfileStore.profile as Profile;
const form = ref<Record<string, string>>({
    web: profile.web,
    github: profile.github,
    gitlab: profile.gitlab,
    linkedin: profile.linkedin,
    instagram: profile.instagram,
    facebook: profile.facebook,
    twitter: profile.twitter,
    discord: profile.discord,
});

const confirmUpdate = ref<Boolean>(false);
const errors = ref<Record<string, string>>({});
const doUpdate = async () => {
    try {
        const data = validate(socialValidate, form.value);
        await ProfileStore.update(data);

        confirmUpdate.value = false;

        errors.value = {};
        toast.success("Success", {
            autoClose: 3000
        });
    } catch (error: any) {
        if (error.isJoi) {
            errors.value = error.data;
            confirmUpdate.value = false;
        } else {
            toast.error(error, {
                autoClose: 3000
            });
        }
    }
};

</script>
