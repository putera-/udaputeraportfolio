<template>
    <div class="grid grid-cols-12 py-20 md:min-h-screen">
        <div
            class="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col gap-10 max-lg:px-4">
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
    </div>
</template>

<script setup lang="ts">
defineProps<{
    prfile: Profile
}>();

</script>