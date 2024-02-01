<template>
<div class="flex flex-col gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-neutral/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideGraduationCap :size=16 class="text-accent" />
        <div>Educations</div>
    </div>
    <!-- <div class="text-6xl font-light mb-10">Every great <span class="text-yellow-400">Projects</span> begin with
            willingness to <span class="text-yellow-400">Learn</span></div> -->

    <div class="flex flex-col">
        <div v-for="education in educations" class="flex group">
            <div class="divider divider-horizontal divider-start !gap-0 mt-2 after:bg-accent/50 after:w-px">
                <LucideCircle :size="10" class="fill-default stroke-accent group-hover:fill-accent" />
            </div>
            <div>
                <div class="group-hover:text-accent font-light">{{ education.startYear }} - <span>{{
                    education.endYear || 'Present'
                }}</span></div>
                <div class="text-3xl">{{ education.institutionName }}</div>
                <div class="min-h-12">
                    <div class="text-sm font-light" v-if="education.major || education.degree">{{ education.major
                    }}
                        <span v-if="education.degree">- {{
                            education.degree }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    educations: Education[]
}>();
</script>
