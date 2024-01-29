<template>
<div class="grid max-md:grid-rows-2 md:grid-cols-10 h-screen">
    <div class="md:col-span-4 flex flex-col justify-center items-center">
        <div>
            <div class="text-7xl font-bold">500</div>
            <div class="text-4xl font-semibold">Internal Server Error!</div>
        </div>
    </div>
    <div class="md:col-span-6 overflow-hidden py-10">
        <ImagesBroken class="h-[50vh] md:h-[90vh] max-h-[90vh] max-w-full ml-20" />
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'error'
});
</script>