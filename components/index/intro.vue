<template>
<div class="flex flex-col gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-neutral/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideHome :size="16" class="text-accent" />
        <div>introduce</div>
    </div>
    <div class="text-4xl md:text-5xl xl:text-7xl font-light">Say Hi from
        <span class="text-accent">{{ profile.lastname }}</span>,<br>{{ profile.job }}
    </div>
    <div>{{ profile.bio }}</div>
    <div class="grow flex flex-col justify-end">
        <div class="flex gap-10 w-20">
            <div v-if="profile.year_of_experience > 1" class="flex flex-col gap-2">
                <div class="text-7xl text-accent">{{ profile.year_of_experience
                }}+</div>
                <div>YEARS OF EXPERIENCE</div>
            </div>
            <div v-else class="flex flex-col gap-2">
                <div class="text-7xl text-accent">{{ profile.month_of_experience }}+</div>
                <div>MONTHS OF EXPERIENCE</div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="text-7xl text-accent">{{ profile.count_project }}+</div>
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
