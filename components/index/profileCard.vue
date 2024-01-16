<template>
    <div class="md:fixed md:w-[40%] lg:w-[32%] xl:w-[25%] rounded-3xl border border-neutral/50 p-8 flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <div class="text-xl lg:text-2xl xl:text-3xl font-semibold text-accent">{{ fullname }}</div>
            <div class="text-sm font-ligbt text-right">Full Stack<br>Developer</div>
        </div>
        <div
            class="aspect-square bg-neutral rounded-xl flex justify-center items-center overflow-hidden hover:scale-110 duration-300">
            <img v-if="!profile.avatar" :src="`${apiUrl}${profile.avatar}`" alt="" class="object-cover h-full">
            <LucideUserRound v-else :size="200" class="text-accent" />
        </div>
        <div class="text-center text-xl lg:text-2xl xl:text-2xl font-light">
            <div>{{ profile.email }}</div>
            <div>{{ profile.city }}, {{ profile.country }}</div>
        </div>
        <div class="flex gap-2 justify-center">
            <a v-if="profile.instagram" :href="profile.instagram" target="__blank"
                class="btn btn-circle bg-transparent border-neutral/50 text-accent">
                <LucideInstagram :size="20" />
            </a>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="__blank"
                class="btn btn-circle bg-transparent border-neutral/50 text-accent">
                <LucideLinkedin :size="20" />
            </a>
            <a v-if="profile.github" :href="profile.github" target="__blank"
                class="btn btn-circle bg-transparent border-neutral/50 text-accent">
                <LucideGithub :size="20" />
            </a>
            <a v-if="profile.gitlab" :href="profile.gitlab" target="__blank"
                class="btn btn-circle bg-transparent border-neutral/50 text-accent">
                <LucideGitlab :size="20" />
            </a>
            <a :href="'https://wa.me/' + profile.whatsapp" target="__blank"
                class="btn btn-circle bg-transparent border-neutral/50">
                <IconsWhatsapp class="w-8 fill-accent" />
            </a>
        </div>
        <div class="flex justify-center">
            <NuxtLink to="/projects" class="btn btn-accent rounded-xl px-10">See All Projects</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    profile: Profile
}>();

const { public: { apiUrl } } = useRuntimeConfig();

const fullname = computed(() => {
    return `${props.profile.firstname} ${props.profile.lastname}`;
});
</script>