<template>
<div>
    <div class="font-semibold mb-4 border border-b-neutral/25 flex gap-4">USER SETTINGS
        <IconsCatLoading v-if="isLoading" class="w-6" />
    </div>

    <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="User" checked />
        <div role="tabpanel" class="tab-content p-6">
            <AdminUserUpdate @updating="isLoading = true" @done="isLoading = false" />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Change Password" />
        <div role="tabpanel" class="tab-content p-6">
            <AdminUserChangePassword @updating="isLoading = true" @done="isLoading = false" />
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const isLoading = ref<boolean>(false);
</script>
