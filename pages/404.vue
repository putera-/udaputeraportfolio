<template>
<div class="grid max-md:grid-rows-2 md:grid-cols-10 h-screen">
    <div class="md:col-span-5 px-10 flex flex-col">
        <div class="grow flex flex-col justify-center items-center">
            <div class="flex flex-col gap-4">
                <div class="text-5xl md:text-7xl font-bold">Ooops...</div>
                <div class="text-4xl font-semibold">Page not found!</div>
                <NuxtLink to="/" class="btn btn-sm bg-slate-600 w-min px-10 pb-px mx-auto">Home</NuxtLink>
            </div>
        </div>
    </div>
    <div class="md:col-span-5 w-full h-full flex flex-col justify-center items-center">
        <div class="text-6xl font-bold">404</div>
        <ImagesGhost class="md:w-60 lg:w-80 xl:w-96" />
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'error'
});
</script>