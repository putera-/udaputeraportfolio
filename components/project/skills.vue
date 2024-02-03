<template>
<div>
    <div class="text-accent font-semibold mb-2">Technologies:</div>
    <div v-for="category of skills">
        <div class="text-xs mb-1">{{ category.title }}</div>
        <div class="flex flex-wrap gap-2 mb-2">
            <div v-for="skill of category.skills"
                class="badge badge-xs md:badge-sm lg:badge-md badge-outline border-neutral/50 rounded-lg flex gap-1 py-4">
                <div class="bg-slate-300 w-4 md:w-5 lg:w-6 rounded p-px overflow-hidden hover:scale-110 duration-300"
                    v-html="skill.svg">
                </div>
                {{ skill.title }}
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
