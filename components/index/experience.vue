<template>
<div class="flex flex-col gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-accent/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideNotebookPen :size=16 class="text-accent" />
        <div>Experience</div>
    </div>
    <!-- <div class="text-6xl font-light mb-10">Every great <span class="text-yellow-400">Projects</span> begin with
            willingness to <span class="text-yellow-400">Learn</span></div> -->

    <div class="flex flex-col">
        <div v-for="experience in experiences" class="flex group">
            <div class="divider divider-horizontal divider-start !gap-0 mt-2 after:bg-accent/50 after:w-px">
                <LucideCircle :size="10" class="fill-default stroke-accent group-hover:fill-accent" />
            </div>
            <div>
                <div class="group-hover:text-accent font-light">{{ experience.readStartDate }} - {{
                    experience.readEndDate }} </div>
                <div class="text-3xl mb-1">{{ experience.company }}</div>
                <div class="mb-10 flex flex-col gap-4 font-light">
                    <div class="text-md" v-if="experience.company">{{ experience.title }}</div>
                    <div class="text-md">{{ experience.description }}</div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-10">
            <NuxtLink to="/projects" class="btn btn-accent rounded-xl px-10">See All Experiences</NuxtLink>
        </div>

    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    experiences: Experience[]
}>();
</script>
