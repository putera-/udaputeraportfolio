<template>
<NuxtLayout name="error">
    <!-- 404 -->
    <div v-if="error!.statusCode == 404" class="grid max-md:grid-rows-2 md:grid-cols-10 h-screen">
        <div class="md:col-span-5 px-10 flex flex-col">
            <div class="grow flex flex-col justify-center items-center">
                <div class="flex flex-col gap-4">
                    <div class="text-5xl md:text-7xl font-bold">Ooops...</div>
                    <div class="text-4xl font-semibold">Page not found!</div>
                    <NuxtLink :to="url.origin" class="btn max-md:btn-sm bg-slate-600 w-min px-10 pb-px mx-auto">Home
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="md:col-span-5 w-full h-full flex flex-col justify-center items-center">
            <div class="text-6xl font-bold">404</div>
            <ImagesGhost class="md:w-60 lg:w-80 xl:w-96" />
        </div>
    </div>

    <!-- 500 -->
    <div v-if="error!.statusCode == 500" class="grid max-md:grid-rows-2 md:grid-cols-10 h-screen">
        <div class="md:col-span-4 px-10 flex flex-col">
            <NuxtLink :to="url.origin" class="py-10 text-2xl font-thin">{{ url.origin }}</NuxtLink>
            <div class="grow flex flex-col justify-center items-center">
                <div>
                    <div class="text-6xl md:text-7xl font-bold">500</div>
                    <div class="text-4xl font-semibold">Internal Server Error!</div>
                    <NuxtLink :to="url.origin" class="btn max-md:btn-sm bg-slate-600 w-min px-10 pb-px mx-auto mt-3">
                        Home
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="md:col-span-6 overflow-hidden py-10">
            <ImagesBroken class="h-[50vh] md:h-[90vh] max-h-[90vh] max-w-full ml-20" />
        </div>
    </div>
</NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
});

const url = useRequestURL();
</script>
