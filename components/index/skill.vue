<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBone :size=16 />
            <div>Skills</div>
        </div>
        <div class="text-6xl font-light mb-10">Every great <span class="text-yellow-400">Projects</span> begin with
            willingness to <span class="text-yellow-400">Learn</span></div>

        <div v-for="category in skills">
            <div class="mb-3 text-sm text-accent font-semibold">{{ category.title }}</div>
            <div class="flex flex-wrap gap-12 items-end">
                <div v-for="skill in category.skills" class="flex flex-col items-center">
                    <div class="bg-slate-300 w-16 h-16 rounded-xl p-1 overflow-hidden">
                        <component v-html="skill.svg" class="w-16"></component>
                    </div>
                    <div class="text-xs mt-2">{{ skill.title }}</div>
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