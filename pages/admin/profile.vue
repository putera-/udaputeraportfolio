<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Profile</li>
        </template>
        <template #default>
            <div class="font-bold text-3xl border-b border-b-neutral/10 pb-2 mb-4">Profile</div>

            <div role="tablist" class="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Profile"
                    checked />
                <div role="tabpanel" class="tab-content p-6">
                    <AdminProfile v-if="!loading" />
                </div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Address" />
                <div role="tabpanel" class="tab-content p-6">
                    <AdminProfileAddress v-if="!loading" />
                </div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Social" />
                <div role="tabpanel" class="tab-content p-6">
                    <AdminProfileSocial v-if="!loading" />
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

const loading = ref<Boolean>(true);
const { public: { apiUrl } } = useRuntimeConfig();
const ProfileStore = useProfileStore();
onBeforeMount(async (): Promise<void> => {
    if (!ProfileStore.profile) await ProfileStore.get();

    loading.value = false;
});
</script>
