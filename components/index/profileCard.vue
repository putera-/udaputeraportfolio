<template>
    <div class="md:fixed md:w-[33%] lg:w-[24%] rounded-3xl border border-zinc-600 text-white p-8 flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <div class="text-xl lg:text-2xl xl:text-3xl font-semibold text-accent">{{ fullname }}</div>
            <div class="text-sm font-ligbt text-right">Full Stack<br>Developer</div>
        </div>
        <div
            class="aspect-square bg-gray-300 rounded-xl flex justify-center items-center overflow-hidden hover:scale-110 duration-300">
            <img v-if="profile.avatar" :src="`${apiUrl}${profile.avatar}`" alt="" class="object-cover h-full">
            <LucideUser v-else :size="200" />
        </div>
        <div class="text-center text-xl lg:text-2xl xl:text-2xl font-light">
            <div>{{ profile.email }}</div>
            <div>Jakarta, Indonesia</div>
        </div>
        <div class="flex gap-2 justify-center">
            <div class="btn btn-circle bg-transparent border-zinc-600 text-accent">
                <LucideInstagram :size="20" />
            </div>
            <div class="btn btn-circle bg-transparent border-zinc-600 text-accent">
                <LucideLinkedin :size="20" />
            </div>
            <div class="btn btn-circle bg-transparent border-zinc-600 text-accent">
                <LucideGithub :size="20" />
            </div>
            <div class="btn btn-circle bg-transparent border-zinc-600 text-accent">
                <LucideGitlab :size="20" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    profile: Profile
}>();
const { apiUrl } = useRuntimeConfig()

const fullname = computed(() => {
    return `${props.profile.firstname} ${props.profile.lastname}`;
});
</script>