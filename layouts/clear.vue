<template>
<div data-theme="retro" class="w-screen max-w-screee h-screen min-h-screen flex flex-col justify-center bg-secondary">
    <div class="w-full h-full grid max-md:grid-rows-10 md:grid-cols-10 mx-auto">
        <div
            class="max-md:row-span-5 md:col-span-4 lg:col-span-5 xl:col-span-4 flex max-md:flex-col max-md:items-center justify-end relative">
            <div
                class="h-[100vh] w-full md:aspect-[9/16] bg-gradient-to-b from-accent to-primary absolute top-0 left-0 md:rounded-r-3xl shadow-2xl my-auto">
            </div>
            <ImagesProgrammer class="w-[60%] md:w-[75%] z-10" />
        </div>
        <div class="max-md:row-span-5 md:col-span-6 lg:col-span-5 xl:col-span-6 z-20">
            <slot />
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>
