<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideNotebookPen :size=16 />
            <div>Experience</div>
        </div>
        <!-- <div class="text-6xl font-light mb-10">Every great <span class="text-yellow-400">Projects</span> begin with
            willingness to <span class="text-yellow-400">Learn</span></div> -->

        <div class="flex flex-col">
            <div v-for="project in projects" class="flex group">
                <div class="divider divider-horizontal divider-start !gap-0 mt-2">
                    <LucideCircle :size="10" class="fill-slate-300 group-hover:fill-accent" />
                </div>
                <div>
                    <div class="text-slate-300 group-hover:text-accent font-extralight">{{ project.startDate }} - <span>{{
                        project.endDate || 'Present'
                    }}</span></div>
                    <div class="text-3xl mb-4">{{ project.title }}</div>
                    <div class="min-h-16 flex flex-col gap-4">
                        <div class="text-sm font-thin" v-if="project.company">{{ project.company }}</div>
                        <div class="">{{ project.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    projects: Project[]
}>();
</script>