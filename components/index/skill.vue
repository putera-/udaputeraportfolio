<template>
<div class="flex flex-col gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-neutral/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideBone :size=16 class="text-accent" />
        <div>Skills</div>
    </div>
    <div class="text-6xl font-light mb-10">Every great <span class="text-accent">Projects</span> begin with
        willingness to <span class="text-accent">Learn</span></div>

    <div v-for="category in skills">
        <div class="mb-3 text-sm text-accent font-semibold">{{ category.title }}</div>
        <div class="flex flex-wrap gap-4 sm:gap-6 md:gap-10 items-end">
            <div v-for="skill in category.skills" class="flex flex-col items-center">
                <div class="bg-slate-100 w-16 md:w-20 h-16 md:h-20 rounded-xl p-1 overflow-hidden hover:scale-110 duration-300"
                    v-html="skill.svg">
                </div>
                <div class="text-xs mt-2 font-light">{{ skill.title }}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    skills: SkillCategory[]
}>();
</script>
