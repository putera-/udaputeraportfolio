<template>
    <div class="max-w-7xl mx-auto my-14">
        <div class="text-3xl font-semibold text-accent mb-10">Projects</div>
        <div class="flex justify-end">
            <div class="join">
                <button class="join-item btn" @click="page--" :class="{ 'btn-disabled': data.page == 1 }">«</button>
                <button class="join-item btn">Page {{ data.page }} of {{ data.total_page }}</button>
                <button class="join-item btn" @click="page++"
                    :class="{ 'btn-disabled': data.page == data.total_page }">»</button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <NuxtLink :to="`/projects/${project.id}`" v-for="project in data.data" class="card p-4">
                <ProjectCard :project="project" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = ref<DataProject>({});
const page = ref<number>(1);
const perpage = ref<number>(9);
onBeforeMount(async () => {
    data.value = await $fetch('/api/projects');
});

watchEffect(async () => {
    data.value = await $fetch(`/api/projects?page=${page.value}&perpage=${perpage.value}`);
});
</script>