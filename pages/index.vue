<template>
    <div class="grid grid-cols-10 gap-10 max-md:pt-14">
        <div id="home"
            class="col-span-full md:col-span-4 lg:col-span-3 md:max-h-screen flex flex-col justify-center p-4 relative">
            <IndexProfileCard :profile="profile" />
        </div>
        <div class="col-span-full md:col-span-6 lg:col-span-7">
            <div class="grid grid-cols-12 md:min-h-screen">
                <div
                    class="col-span-full lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col gap-10 max-lg:px-4">
                    <IndexIntro :profile="profile" id="intro" />
                    <IndexAbout :profile="profile" id="about" />
                    <IndexEducation :educations="educations" id="education" />
                    <IndexExperience :experiences="experiences" id="experience" />
                    <IndexSkill :skills="skills" id="skills" />
                    <IndexProject :projects="projects" id="projects" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { profile, skills, educations, experiences, projects } = await $fetch('/api/portfolio') as Portfolio;
</script>