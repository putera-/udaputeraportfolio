<template>
<div class="flex flex-col gap-8 min-h-screen py-14">
    <div class="rounded-2xl border border-accent/50 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
        <LucideSmilePlus :size=16 class="text-accent" />
        <div>About</div>
    </div>
    <div class="text-6xl font-light">Every great design begin with an even <span class="text-accent">Better Story</span>
    </div>
    <div>I design and code beautifully simple things and i love what i do. Just simple like that! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Odit qui vel beatae eveniet similique.
        Perferendis, vel error inventore illo voluptates eaque nam harum consequatur corporis eum eius culpa
        cumque ex! Eum id, eos voluptas fuga et ipsam ipsa numquam unde perferendis quos ullam rem earum sed
        illum aperiam voluptatem. Nesciunt?
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    profile: Profile
}>();

</script>
