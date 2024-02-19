<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
    <div v-for="project in 9" class="card rounded-xl shadow-lg p-4 bg-base-100 flex flex-col gap-2">
        <div class="flex justify-between items-center gap-2 max-w-full">
            <div class="overflow-hidden">
                <div class="skeleton w-40 h-5"></div>
            </div>
            <div class="skeleton w-2 h-5"></div>
        </div>
        <div class="flex justify-between">
            <div class="flex gap-1">
                <div class="skeleton w-16 h-3"></div>
                <div class="skeleton w-16 h-3"></div>
            </div>
            <div class="skeleton w-20 h-3"></div>
        </div>
        <div class="border-b border-b-neutral/25"></div>
        <div class="hover:scale-105 duration-300 aspect-video bg-neutral/10 rounded-lg overflow-hidden">
            <div class="skeleton aspect-video w-full rounded-lg"></div>
        </div>
        <div class="skeleton w-24 h-4"></div>
        <div class="skeleton w-full h-4"></div>
        <div class="skeleton w-full h-4"></div>
    </div>
</div>
</template>
