<template>
<div class="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-2 gap-6 xl:gap-16">
    <div>
        <div class="2xl:grid 2xl:grid-cols-2 gap-4">
            <label class="form-control w-full">
                <div class="label-text">First name</div>
                <input v-model="form.firstname" type="text" placeholder="First Name"
                    class="input input-bordered w-full" />
                <div v-if="errors.firstname" class="text-right label-text-alt text-error">{{ errors.firstname }}</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Last name</div>
                <input v-model="form.lastname" type="text" placeholder="First Name"
                    class="input input-bordered w-full" />
                <div v-if="errors.lastname" class="text-right label-text-alt text-error">{{ errors.lastname }}</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Job</div>
                <input v-model="form.job" type="text" placeholder="Job" class="input input-bordered w-full" />
                <div v-if="errors.job" class="text-right label-text-alt text-error">{{ errors.job }}</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Email</div>
                <input v-model="form.email" type="text" placeholder="Email" class="input input-bordered w-full" />
                <div v-if="errors.email" class="text-right label-text-alt text-error">{{ errors.email }}</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Phone</div>
                <input v-model="form.phone" type="text" placeholder="Phone" class="input input-bordered w-full" />
                <div v-if="errors.phone" class="text-right label-text-alt text-error">{{ errors.phone }}</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Date of birth</div>
                <input v-model="form.dob" type="text" placeholder="Date of birth" class="input input-bordered w-full" />
                <div v-if="errors.dob" class="text-right label-text-alt text-error">{{ errors.dob }}</div>
            </label>
        </div>
    </div>
    <div class="xl:px-10">
        <label>Avatar</label>
        <div class="w-48 lg:w-52 xl:w-60 aspect-square rounded-2xl overflow-hidden mx-auto">
            <img v-if="form.avatar" :src="form.avatar" class="min-w-full min-h-full">
            <div v-else class="bg-neutral/50 w-full h-full">
            </div>
        </div>
        <input type="file" class="file-input file-input-sm w-full my-2" ref="fileInput"
            accept="image/jpg, image/jpeg, image/png, image/webp, image/gif" @change="handleAvatar">
        <label class="form-control w-full">
            <div class="label-text">Bio</div>
            <textarea v-model="form.bio" type="text" placeholder="Bio" rows="4"
                class="textarea textarea-bordered w-full"></textarea>
            <div v-if="errors.bio" class="text-right label-text-alt text-error">{{ errors.bio }}</div>
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
    <span class="font-bold text-lg">Profile?</span>
</AdminConfirmation>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { toast } from 'vue3-toastify';

const ProfileStore = useProfileStore();
const profile: Profile = ProfileStore.profile as Profile;
const { public: { apiUrl } } = useRuntimeConfig();

const form = ref<Record<string, any>>({
    firstname: profile.firstname,
    lastname: profile.lastname,
    job: profile.job,
    email: profile.email,
    phone: profile.phone,
    dob: profile.dob,
    avatar: profile.avatar ? apiUrl + profile.avatar_md : undefined,
    bio: profile.bio
});

const fileInput = ref<HTMLInputElement | null>(null);
let avatar: File | null;

const handleAvatar = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files!.length) {
        avatar = null;
    } else {
        avatar = files![0];

        // reset image preview
        form.value.avatar = '';

        const reader = new FileReader();
        reader.onload = () => {
            form.value.avatar = reader.result as string;
        };
        reader.readAsDataURL(avatar);
    }
}

const confirmUpdate = ref<Boolean>(false);
const errors = ref<Record<string, string>>({});
const responseError = ref<string>('');

const doUpdate = async () => {
    let data: any | FormData = { ...form.value };
    delete data.avatar;
    responseError.value = '';
    errors.value = {};

    try {
        if (avatar) {
            // format dob because FormData only accept string
            data.dob = dayjs(data.dob).format('YYYY-MM-DD');
            const formData: FormData = toFormData(data);

            formData.append('avatar', avatar);
            data = formData;
        }

        await ProfileStore.update(data);

        confirmUpdate.value = false;

        // reset file input avatar
        if (fileInput.value) {
            fileInput.value.value = '';
            avatar = null;
        }

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
}
</script>
