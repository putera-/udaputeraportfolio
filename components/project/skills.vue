<template>
<div>
    <div class="text-accent font-semibold mb-2">Technologies:</div>
    <div v-for="category of skills">
        <div class="text-xs mb-1">{{ category.title }}</div>
        <div class="flex flex-wrap gap-2 mb-2">
            <Skill :skill="skill" v-for="skill of category.skills" />
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    skills: SkillCategory[]
}>();
</script>
