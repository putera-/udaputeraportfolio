<template>
<div class="badge badge-xs md:badge-sm lg:badge-md badge-outline border-neutral/50 rounded-lg flex gap-1 py-4">
    <div class="bg-slate-300 w-4 md:w-5 lg:w-6 rounded p-px overflow-hidden hover:scale-110 duration-300"
        v-html="skill.svg">
    </div>
    {{ skill.title }}
</div>
</template>

<script setup lang="ts">
defineProps<{
    skill: Skill
}>();
</script>
