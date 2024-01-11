<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideUser :size=16 />
            <div>About</div>
        </div>
        <div class="text-6xl font-light">Every great design begin with an even better story</div>
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