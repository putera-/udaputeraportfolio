<template>
    <div class="grid grid-cols-12 max-md:pt-14">
        <div
            class="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 md:max-h-screen flex flex-col justify-center p-4">
            <div class="rounded-3xl border border-zinc-600 text-white p-8 flex flex-col gap-6">
                <div class="flex justify-between items-center">
                    <div class="text-xl lg:text-2xl xl:text-3xl font-bold">{{ fullname }}</div>
                    <div class="text-sm font-ligbt text-right">Full Stack<br>Developer</div>
                </div>
                <div class="aspect-square bg-gray-300 rounded-xl flex justify-center items-center">
                    <LucideUser :size="200" />
                </div>
                <div class="text-center text-xl lg:text-2xl xl:text-2xl font-light">
                    <div>{{ email }}</div>
                    <div>Jakarta, Indonesia</div>
                </div>
                <div class="flex gap-2 justify-center">
                    <div class="btn btn-circle bg-transparent border-zinc-600">
                        <LucideInstagram :size="20" color="white" />
                    </div>
                    <div class="btn btn-circle bg-transparent border-zinc-600">
                        <LucideLinkedin :size="20" color="white" />
                    </div>
                    <div class="btn btn-circle bg-transparent border-zinc-600">
                        <LucideGithub :size="20" color="white" />
                    </div>
                    <div class="btn btn-circle bg-transparent border-zinc-600">
                        <LucideGitlab :size="20" color="white" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="col-span-full md:col-span-7 lg:col-span-8 xl:col-span-9 md:max-h-screen md:overflow-y-scroll bg-indigo-500 scrollbar-hide">
            <div class="h-96">
                content tambahan
            </div>
            <div class="h-96">
                content tambahan
            </div>
            <div class="h-96">
                content tambahan
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bars2Icon, HomeIcon, UserIcon, BriefcaseIcon } from '@heroicons/vue/24/solid'
const { firstname, lastname, email } = await $fetch('/api/profile') as Profile;

const fullname = computed(() => {
    return `${firstname} ${lastname}`;
});


</script>