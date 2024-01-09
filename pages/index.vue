<template>
    <div class="grid grid-cols-12 gap-10 max-md:pt-14">
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
            class="col-span-full md:col-span-7 lg:col-span-8 xl:col-span-9 md:max-h-screen md:overflow-y-scroll scrollbar-hide">
            <div class="grid grid-cols-12 py-20 md:min-h-screen">
                <div class="col-start-3 col-span-8 flex flex-col gap-10">
                    <div
                        class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
                        <HomeIcon class="w-4" />
                        <div>introduce</div>
                    </div>
                    <div class="text-7xl font-light">Say Hi from <span class="text-yellow-400">{{ firstname }}</span>,
                        Webflow
                        Designer and
                        Developer</div>
                    <div>I design and code beautifully simple things and i love what i do. Just simple like that! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Odit qui vel beatae eveniet similique.
                        Perferendis, vel error inventore illo voluptates eaque nam harum consequatur corporis eum eius culpa
                        cumque ex! Eum id, eos voluptas fuga et ipsam ipsa numquam unde perferendis quos ullam rem earum sed
                        illum aperiam voluptatem. Nesciunt?</div>
                    <div class="grow flex flex-col justify-end">
                        <div class="flex gap-10 w-20">
                            <div class="flex flex-col gap-2">
                                <div class="text-7xl text-yellow-400">10+</div>
                                <div>YEARS OF EXPERIENCE</div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="text-7xl text-yellow-400">10+</div>
                                <div>PROJECTS COMPLETED</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 py-20 md:min-h-screen">
                <div class="col-start-3 col-span-8 flex flex-col gap-10">
                    <div
                        class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
                        <UserIcon class="w-4" />
                        <div>About</div>
                    </div>
                    <div class="text-6xl font-light">Every great design begin with an even better story</div>
                    <div>I design and code beautifully simple things and i love what i do. Just simple like that! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Odit qui vel beatae eveniet similique.
                        Perferendis, vel error inventore illo voluptates eaque nam harum consequatur corporis eum eius culpa
                        cumque ex! Eum id, eos voluptas fuga et ipsam ipsa numquam unde perferendis quos ullam rem earum sed
                        illum aperiam voluptatem. Nesciunt?
                    </div>
                </div>
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