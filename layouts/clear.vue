<template>
<div data-theme="nord"
    class="w-screen max-w-screen h-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 to-gray-500 p-6 md:p-10 lg:p-16 xl:p-20">
    <div
        class="max-w-7xl lg:w-screen max-lg:aspect-[9/16] lg:aspect-video rounded-3xl overflow-hidden bg-white p-3 md:p-4">
        <div class="w-full h-full grid max-lg:grid-rows-10 lg:grid-cols-10 relative rounded-3xl bg-base-100">

            <!-- absolute bg -->
            <div
                class="h-full max-lg:w-full aspect-[9/16] max-w-full bg-gradient-to-b from-accent to-primary absolute top-0 left-0 rounded-2xl lg:rounded-3xl shadow-2xl z-0">
            </div>

            <div
                class="max-lg:row-span-4 lg:col-span-5 xl:col-span-4 h-full flex max-lg:flex-col max-lg:items-center mt-12 md:mt-20 lg:mt-0 max-lg:ml-10 justify-end">

                <ImagesProgrammer class="w-[60%] md:w-[75%] z-10" />

            </div>
            <div class="max-lg:row-span-6 lg:col-span-5 xl:col-span-6 h-full rounded-2xl z-30">
                <slot />
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>
