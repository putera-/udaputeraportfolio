<template>
    <div class="md:fixed md:w-[40%] lg:w-[32%] xl:w-[25%] rounded-3xl border border-accent/50 p-8 flex flex-col gap-6">
        <div class="flex max-sm:flex-col sm:justify-between items-center gap-1">
            <div class="text-xl lg:text-2xl xl:text-3xl font-semibold text-accent">{{ fullname }}</div>
            <div class="text-sm font-ligbt text-right">{{ profile.job }}</div>
        </div>
        <div
            class="aspect-square bg-neutral rounded-xl flex justify-center items-center overflow-hidden hover:scale-110 duration-300">
            <img v-if="profile.avatar" :src="`${apiUrl}${profile.avatar}`" alt=""
                class="object-cover min-h-full min-w-full">
            <LucideUserRound v-else :size="200" class="text-accent" />
        </div>
        <div class="text-center text-xl font-light text-accent">
            <div class="">{{ profile.email }}</div>
            <div>{{ profile.city }}, {{ profile.country }}</div>
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
            <a :href="'https://wa.me/' + profile.whatsapp" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50">
                <IconsWhatsapp class="w-8 fill-accent" />
            </a>
            <a v-if="profile.instagram" :href="profile.instagram" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <LucideInstagram :size="20" />
            </a>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <LucideLinkedin :size="20" />
            </a>
            <a v-if="profile.github" :href="profile.github" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <LucideGithub :size="24" />
            </a>
            <a v-if="profile.gitlab" :href="profile.gitlab" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <LucideGitlab :size="24" />
            </a>
            <a v-if="profile.facebook" :href="profile.facebook" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <LucideFacebook :size="24" />
            </a>
            <a v-if="profile.twitter" :href="profile.twitter" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <IconsXTwitter class="w-6 fill-accent" />
            </a>
            <a v-if="profile.discord" :href="profile.discord" target="__blank"
                class="btn btn-circle bg-transparent border-accent/50 text-accent">
                <IconsDiscord class="w-7 fill-accent" />
            </a>
        </div>
        <div class="flex justify-center">
            <NuxtLink to="/projects" class="btn btn-accent rounded-xl px-10 hover:scale-110 duration-300">See All
                Projects</NuxtLink>
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
