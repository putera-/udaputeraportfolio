
import type { IconsMysql } from '#build/components';
<template>
    <div class="grid grid-cols-12 py-20 md:min-h-screen">
        <div
            class="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col gap-10 max-lg:px-4">
            <div class="rounded-2xl border border-zinc-600 flex items-center gap-2 w-min px-4 py-2 uppercase text-xs">
                <LucideBone :size=16 />
                <div>Skills</div>
            </div>
            <div class="text-6xl font-light">Every great <span class="text-yellow-400">Projects</span> begin with
                willingness to <span class="text-yellow-400">Learn</span></div>
            <div class="flex flex-wrap gap-6 justify-center items-end">
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
    </div>
</template>

<script setup lang="ts">
defineProps<{
    profile: Profile
}>();

</script>