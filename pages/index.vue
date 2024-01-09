<template>
    <div class="font-inter grid grid-cols-12 min-h-screen bg-zinc-800">
        <div class="col-span-full md:col-span-11">
            <div
                class="absolute right-4 top-4 md:hidden btn btn-circle bg-transparent border-zinc-600 text-white hover:text-black">
                <Bars2Icon class="w-6" />
            </div>
            <!-- slot here -->
            <div class="grid grid-cols-12 min-h-screen max-md:pt-14">
                <div class="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 flex flex-col justify-center p-4">
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
                            <div class="btn btn-circle bg-transparent border-slate-500 hover:bg-transparent">
                                <LucideInstagram :size="20" color="white" />
                            </div>
                            <div class="btn btn-circle bg-transparent border-slate-500 hover:bg-transparent">
                                <LucideLinkedin :size="20" color="white" />
                            </div>
                            <div class="btn btn-circle bg-transparent border-slate-500 hover:bg-transparent">
                                <LucideGithub :size="20" color="white" />
                            </div>
                            <div class="btn btn-circle bg-transparent border-slate-500 hover:bg-transparent">
                                <LucideGitlab :size="20" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-full md:col-span-7 lg:col-span-8 xl:col-span-9 bg-indigo-500">
                    <div class="h-96">
                        content tambahan
                    </div>
                </div>
            </div>
        </div>
        <div class="max-md:hidden md:col-span-1 flex flex-col items-center justify-center py-10">
            <div class="rounded-full border border-zinc-600 p-2">
                <ul class="flex flex-col items-center gap-2">
                    <li class="tooltip tooltip-left" data-tip="Home">
                        <a href=""
                            class="btn btn-sm btn-circle bg-transparent border-slate-500 text-white hover:text-black border-0">
                            <HomeIcon class="w-4" />
                        </a>
                    </li>
                    <li class="tooltip tooltip-left" data-tip="Profile">
                        <a href=""
                            class="btn btn-sm btn-circle bg-transparent border-slate-500 text-white hover:text-black border-0">
                            <UserIcon class="w-4" />
                        </a>
                    </li>
                    <li class="tooltip tooltip-left" data-tip="Projects">
                        <a href=""
                            class="btn btn-sm btn-circle bg-transparent border-slate-500 text-white hover:text-black border-0">
                            <BriefcaseIcon class="w-4" />
                        </a>
                    </li>
                </ul>
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