<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-neutral flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideHome :size="16" />
            <div>introduce</div>
        </div>
        <div class="text-4xl md:text-5xl xl:text-7xl font-light">Say Hi from
            <span class="text-accent">{{ profile.firstname }}</span>,<br>{{ profile.job }}
        </div>
        <div>{{ profile.bio }}</div>
        <div class="grow flex flex-col justify-end">
            <div class="flex gap-10 w-20">
                <div class="flex flex-col gap-2">
                    <div class="text-7xl text-accent">10+</div>
                    <div>YEARS OF EXPERIENCE</div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="text-7xl text-accent">10+</div>
                    <div>PROJECTS COMPLETED</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    profile: Profile
}>();

</script>