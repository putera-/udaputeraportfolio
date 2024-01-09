<template>
    <div class="font-inter grid grid-cols-12 md:max-h-screen min-h-screen bg-zinc-800">
        <div class="col-span-full md:col-span-11">
            <label for="my-drawer-4"
                class="absolute right-4 top-4 md:hidden btn btn-circle bg-transparent border-zinc-600 text-white hover:text-black">
                <Bars2Icon class="w-6" />
            </label>
            <!-- slot here -->
            <slot />
        </div>
        <div class="max-md:hidden md:col-span-1 max-h-screen flex flex-col items-center justify-center py-10">
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
    <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="px-16 py-12 w-80 min-h-full bg-zinc-800 text-gray-300">
                <div class="mb-6 text-xl">Menu</div>
                <ul class="menu px-0">
                    <li>
                        <label for="my-drawer-4" class="hover:text-white px-0">
                            <HomeIcon class="w-4" />
                            <div>Home</div>
                        </label>
                    </li>
                    <li>
                        <label for="my-drawer-4" class="hover:text-white px-0">
                            <UserIcon class="w-4" />
                            <div>Profile</div>
                        </label>
                    </li>
                    <li>
                        <label for="my-drawer-4" class="hover:text-white px-0">
                            <BriefcaseIcon class="w-4" />
                            <div>Projects</div>
                        </label>
                    </li>
                </ul>
                <div class="my-6 text-xl">Social</div>
                <div class="flex gap-2">
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2 hover:bg-transparent">
                        <LucideInstagram :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2 hover:bg-transparent">
                        <LucideLinkedin :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2 hover:bg-transparent">
                        <LucideGithub :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2 hover:bg-transparent">
                        <LucideGitlab :size="20" color="white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bars2Icon, HomeIcon, UserIcon, BriefcaseIcon } from '@heroicons/vue/24/solid'


</script>