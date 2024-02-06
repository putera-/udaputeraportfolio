<template>
<div class="bg-black w-screen h-screen max-h-screen max-w-screen overflow-hidden relative">
    <div class="w-full h-full grid grid-rows-2 md:grid-rows-1 items-center px-20">
        <div>
            <div class="text-4xl md:text-7xl font-bold text-white mb-2 md:mb-4">ERROR {{ error!.statusCode }}</div>
            <div class="text-3xl md:text-5xl font-bold text-white">{{ error!.statusMessage || 'Internal Server Error!!!'
            }}</div>
        </div>
    </div>

    <ImagesGhost v-if="error!.statusCode == 404" class="w-[60vw] md:w-[40vw] xl:w-[30vw] absolute right-28 bottom-10" />
    <ImagesBroken v-else class="w-[110vw] md:w-[80vw] xl:w-[55vw] absolute -right-28 bottom-10" />
    <ImagesHills
        class="absolute w-[180vw] -bottom-5 sm:-bottom-12 md:-bottom-18 lg:-bottom-32 xl:-bottom-48 -left-48" />
</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
});

const url = useRequestURL();
</script>
