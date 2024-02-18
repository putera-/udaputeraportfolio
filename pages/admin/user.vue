<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>User Settings</li>
        </template>

        <template #default>
            <div class="font-bold text-3xl pb-2 mb-4 border-b border-b-neutral/10 flex gap-4">USER SETTINGS
            </div>

            <div role="tablist" class="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="User"
                    checked />
                <div role="tabpanel" class="tab-content p-6">
                    <AdminUserUpdate />
                </div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]"
                    aria-label="Change Password" />
                <div role="tabpanel" class="tab-content p-6">
                    <AdminUserChangePassword />
                </div>
            </div>
        </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
    middleware: ['auth']
});
</script>
