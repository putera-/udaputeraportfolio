<template>
    <div class="grid grid-cols-10 gap-10 max-md:pt-14">
        <div id="home"
            class="col-span-full md:col-span-4 lg:col-span-3 md:max-h-screen flex flex-col justify-center p-4 relative">
            <div
                class="md:fixed md:w-[33%] lg:w-[24%] rounded-3xl border border-zinc-600 text-white p-8 flex flex-col gap-6">
                <div class="flex justify-between items-center">
                    <div class="text-xl lg:text-2xl xl:text-3xl font-bold">{{ fullname }}</div>
                    <div class="text-sm font-ligbt text-right">Full Stack<br>Developer</div>
                </div>
                <div class="aspect-square bg-gray-300 rounded-xl flex justify-center items-center">
                    <LucideUser :size="200" />
                </div>
                <div class="text-center text-xl lg:text-2xl xl:text-2xl font-light">
                    <div>{{ profile.email }}</div>
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
        <div class="col-span-full md:col-span-6 lg:col-span-7">
            <div class="grid grid-cols-12 md:min-h-screen">
                <div
                    class="col-span-full lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col gap-10 max-lg:px-4 overflow-hidden">
                    <IndexIntro :profile="profile" id="intro" />
                    <IndexAbout :profile="profile" id="about" />
                    <IndexSkill :profile="profile" id="skills" />
                    <IndexProject :profile="profile" id="projects" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const profile = await $fetch('/api/profile') as Profile;

const fullname = computed(() => {
    return `${profile.firstname} ${profile.lastname}`;
});


</script>