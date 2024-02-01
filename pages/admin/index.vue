<template>
<div class="font-bold text-3xl">Profile</div>
<div class="max-sm:flex max-sm:flex-col-reverse sm:grid sm:grid-cols-2 gap-6 xl:gap-16">
    <div>
        <div class="grid lg:grid-cols-2 gap-4">
            <label class="form-control w-full">
                <div class="label-text">First name</div>
                <input type="text" placeholder="First Name" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Last name</div>
                <input type="text" placeholder="First Name" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Job</div>
                <input type="text" placeholder="Job" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Email</div>
                <input type="text" placeholder="Email" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Phone</div>
                <input type="text" placeholder="Phone" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <label class="form-control w-full">
                <div class="label-text">Date of birth</div>
                <input type="text" placeholder="Date of birth" class="input input-bordered w-full" />
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <div class="divider lg:col-span-2 mb-0">Address</div>
            <label class="form-control w-full">
                <div class="label-text">Address</div>
                <textarea type="text" placeholder="Address" rows="4"
                    class="textarea textarea-bordered w-full"></textarea>
                <div v-if="false" class="text-right label-text-alt text-error">Test</div>
            </label>
            <div class="flex flex-col">
                <label class="form-control w-full">
                    <div class="label-text">City</div>
                    <input type="text" placeholder="City" class="input input-bordered w-full" />
                    <div v-if="false" class="text-right label-text-alt text-error">Test</div>
                </label>
                <label class="form-control w-full">
                    <div class="label-text">Country</div>
                    <input type="text" placeholder="Country" class="input input-bordered w-full" />
                    <div v-if="false" class="text-right label-text-alt text-error">Test</div>
                </label>
            </div>
        </div>
    </div>
    <div class="xl:px-10">
        <div class="bg-indigo-400 w-48 lg:w-52 xl:w-60 aspect-square rounded-2xl mx-auto">
        </div>
        <label class="form-control w-full">
            <div class="label-text">Bio</div>
            <textarea type="text" placeholder="Bio" rows="4" class="textarea textarea-bordered w-full"></textarea>
            <div v-if="false" class="text-right label-text-alt text-error">Test</div>
        </label>
    </div>
</div>

<div class="divider mb-0">Social</div>

<div class="grid grid-cols-4 gap-8">
    <label class="form-control w-full">
        <div class="label-text">Web</div>
        <input type="text" placeholder="Web" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Github</div>
        <input type="text" placeholder="Github" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Gitlab</div>
        <input type="text" placeholder="Gitlab" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Linkedin</div>
        <input type="text" placeholder="Linkedin" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Instagram</div>
        <input type="text" placeholder="Instagram" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Facebook</div>
        <input type="text" placeholder="Facebook" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Twitter</div>
        <input type="text" placeholder="Twitter" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
    <label class="form-control w-full">
        <div class="label-text">Discord</div>
        <input type="text" placeholder="Discord" class="input input-bordered w-full" />
        <div v-if="false" class="text-right label-text-alt text-error">Test</div>
    </label>
</div>
<div class="divider mb-0"></div>

<div class="">
    <button class="btn btn-primary float-right">Update</button>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

</script>
