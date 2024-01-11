<template>
    <div class="flex flex-col gap-8 min-h-screen py-14">
        <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
            <LucideBone :size=16 />
            <div>Skills</div>
        </div>
        <div class="text-6xl font-light">Every great <span class="text-yellow-400">Projects</span> begin with
            willingness to <span class="text-yellow-400">Learn</span></div>
        <div class="flex flex-wrap gap-12 justify-center items-end mt-20">
            <div class="flex flex-col items-center">
                <IconsGithub class="w-16" />
                <div>Github</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsGitlab class="w-16" />
                <div>Gitlab</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsJavascript class="w-16" />
                <div>Javascript</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsPhp class="w-16" />
                <div>PHP</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsVue class="w-16" />
                <div>Vue</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsNuxt class="w-16" />
                <div>Nuxt</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsTailwind class="w-16" />
                <div>Tailwind</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsMysql class="w-16" />
                <div>MySQL</div>
            </div>
            <div class="flex flex-col items-center">
                <IconsTypescript class="w-16" />
                <div>TypeScript</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    profile: Profile
}>();

</script>