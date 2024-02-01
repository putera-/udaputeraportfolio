<template>
<div class="font-bold text-3xl">Profile</div>
<div class="max-sm:flex max-sm:flex-col-reverse sm:grid sm:grid-cols-2 gap-6 xl:gap-16">
    <div>
        <div class="grid lg:grid-cols-2 gap-4">
            <label class="form-control w-full">
                <div class="label-text">First name</div>
                <input v-model="form.firstname" type="text" placeholder="First Name"
                    class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Last name</div>
                <input v-model="form.lastname" type="text" placeholder="First Name"
                    class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Job</div>
                <input v-model="form.job" type="text" placeholder="Job" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Email</div>
                <input v-model="form.email" type="text" placeholder="Email" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Phone</div>
                <input v-model="form.phone" type="text" placeholder="Phone" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Date of birth</div>
                <input v-model="form.dob" type="text" placeholder="Date of birth" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <div class="divider lg:col-span-2 mb-0">Address</div>
            <label class="form-control w-full">
                <div class="label-text">Address</div>
                <textarea v-model="form.address" type="text" placeholder="Address" rows="4"
                    class="textarea textarea-bordered w-full"></textarea>
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <div class="flex flex-col">
                <label class="form-control w-full">
                    <div class="label-text">City</div>
                    <input v-model="form.city" type="text" placeholder="City" class="input input-bordered w-full" />
                    <div v-if="false" class="text-right label-text-alt text-error">Test</div>
                </label>
                <label class="form-control w-full">
                    <div class="label-text">Country</div>
                    <input v-model="form.country" type="text" placeholder="Country"
                        class="input input-bordered w-full" />
                    <div v-if="false" class="text-right label-text-alt text-error">Test</div>
                </label>
            </div>
        </div>
    </div>
    <div class="xl:px-10">
        <img v-if="form.avatar_md" :src="apiUrl + form.avatar_md" class="rounded-2xl mx-auto">
        <div v-else class="bg-indigo-400 w-48 lg:w-52 xl:w-60 aspect-square rounded-2xl mx-auto">
        </div>
        <label class="form-control w-full">
            <div class="label-text">Bio</div>
            <textarea v-model="form.bio" type="text" placeholder="Bio" rows="4"
                class="textarea textarea-bordered w-full"></textarea>
            <div v-if="false" class="text-right label-text-alt text-error">Test</div>
        </label>
    </div>
</div>

<div class="divider mb-0">Social</div>

<div class="grid grid-cols-4 gap-8">
    <label class="form-control w-full">
        <div class="label-text">Web</div>
        <input v-model="form.web" type="text" placeholder="Web" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Github</div>
        <input v-model="form.github" type="text" placeholder="Github" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Gitlab</div>
        <input v-model="form.gitlab" type="text" placeholder="Gitlab" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Linkedin</div>
        <input v-model="form.linkedin" type="text" placeholder="Linkedin" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Instagram</div>
        <input v-model="form.instagram" type="text" placeholder="Instagram" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Facebook</div>
        <input v-model="form.facebook" type="text" placeholder="Facebook" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Twitter</div>
        <input v-model="form.twitter" type="text" placeholder="Twitter" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Discord</div>
        <input v-model="form.discord" type="text" placeholder="Discord" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
</div>
<div class="divider mb-0"></div>

<div class="">
    <button @click="confirmUpdate = true" class="btn btn-primary float-right">Update</button>
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" v-model="confirmUpdate" class="modal-toggle" />
<div class="modal" role="dialog">
    <div class="modal-box">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="confirmUpdate = false">✕</button>
        <p class="py-4">Are you sure to update
            <span class="font-bold text-lg">Profile?</span>
        </p>
        <div class="modal-action">
            <label class="btn" @click="confirmUpdate = false">Close</label>
            <label class="btn btn-neutral" @click="doUpdate">Update</label>
        </div>
    </div>
    <label class="modal-backdrop" @click="confirmUpdate = false">Close</label>
</div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const { public: { apiUrl } } = useRuntimeConfig();
const ProfileStore = useProfileStore();
onBeforeMount(async (): Promise<void> => {
    if (!ProfileStore.profile) await ProfileStore.get();
    const profile: Profile = ProfileStore.profile as Profile;

    form.value = {
        firstname: profile.firstname,
        lastname: profile.lastname,
        job: profile.job,
        email: profile.email,
        phone: profile.phone,
        dob: profile.dob,
        avatar: profile.avatar,
        address: profile.address,
        city: profile.city,
        country: profile.country,
        bio: profile.bio,
        web: profile.web,
        github: profile.github,
        gitlab: profile.gitlab,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
        facebook: profile.facebook,
        twitter: profile.twitter,
        discord: profile.discord,
    };
});

const form = ref<Profile>({
    firstname: '',
    lastname: '',
    job: '',
    email: '',
    phone: '',
    dob: '',
    avatar: '',
    address: '',
    city: '',
    country: '',
    bio: '',
    web: '',
    github: '',
    gitlab: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    twitter: '',
    discord: '',
});

const confirmUpdate = ref(false);
const doUpdate = async () => {
    const data = { ...form.value };
    delete data.avatar
    try {
        await ProfileStore.update(data);
        confirmUpdate.value = false;
        toast.success("Success", {
            autoClose: 3000
        });
    } catch (error: any) {
        toast.error(error, {
            autoClose: 3000
        });
    }
}
</script>
