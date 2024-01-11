<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBriefcase :size="16" />
            <div>Portfolio</div>
        </div>
        <div class="text-7xl font-light">Feature <span class="text-yellow-400">Project</span></div>
        <div class="grid grid-cols-2 gap-10">
            <div v-for="n in 10">
                <div class="font-semibold text-xl mb-1">Project Name</div>
                <div class="aspect-square rounded-3xl overflow-hidden">
                    <img src="/images/portfolio.jpg" alt="" class="object-cover h-full">
                </div>
                <div class="font-light mt-2 flex flex-wrap gap-3">
                    <div class="badge badge-outline rounded-lg">NodeJs</div>
                    <div class="badge badge-outline rounded-lg">ExpressJs</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                    <div class="badge badge-outline rounded-lg">Tailwind</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>