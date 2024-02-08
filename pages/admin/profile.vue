<template>
<div class="font-bold text-3xl">Profile</div>
<div class="divider before:h-px after:h-px mt-0"></div>
<div role="tablist" class="tabs tabs-lifted">
    <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Profile" checked />
    <div role="tabpanel" class="tab-content p-6">
        <AdminProfile v-if="!loading" />
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab [--tab-bg:#f8fafc]" aria-label="Social" />
    <div role="tabpanel" class="tab-content p-6">
        <AdminProfileSocial v-if="!loading" />
    </div>

</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
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
