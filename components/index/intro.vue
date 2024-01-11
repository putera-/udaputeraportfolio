<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideHome :size="16" />
            <div>introduce</div>
        </div>
        <div class="text-5xl md:text-7xl font-light">Say Hi from <span class="text-yellow-400">{{ profile.firstname
        }}</span>, Webflow Designer and Developer</div>
        <div>I design and code beautifully simple things and i love what i do. Just simple like that! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Odit qui vel beatae eveniet similique.
            Perferendis, vel error inventore illo voluptates eaque nam harum consequatur corporis eum eius culpa
            cumque ex! Eum id, eos voluptas fuga et ipsam ipsa numquam unde perferendis quos ullam rem earum sed
            illum aperiam voluptatem. Nesciunt?</div>
        <div class="grow flex flex-col justify-end">
            <div class="flex gap-10 w-20">
                <div class="flex flex-col gap-2">
                    <div class="text-7xl text-yellow-400">10+</div>
                    <div>YEARS OF EXPERIENCE</div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="text-7xl text-yellow-400">10+</div>
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