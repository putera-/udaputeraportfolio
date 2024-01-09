<template>
    <div class="grid grid-cols-12 min-h-screen bg-zinc-800">
        <div class="col-span-3"></div>
        <div class="col-span-8"></div>
        <div class="col-span-1 flex flex-col items-center py-10">
            <div class="btn btn-circle bg-transparent border-zinc-600 text-white hover:text-black">
                <Bars2Icon class="w-6" />
            </div>
            <div class="grow flex flex-col justify-center">
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
    </div>
</template>

<script setup lang="ts">
import { Bars2Icon, HomeIcon, UserIcon, BriefcaseIcon } from '@heroicons/vue/24/solid'
const { firstname, lastname, email } = await $fetch('/api/profile') as Profile;


</script>