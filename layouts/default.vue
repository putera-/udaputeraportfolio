<template>
    <div data-theme='dracula' class="font-inter flex min-h-screen">
        <!-- main content -->
        <div class="grow">
            <!-- slot here -->
            <slot />
        </div>
        <!-- side menu -->
        <div class="max-md:hidden flex-none w-20 relative h-screen">
            <div class="fixed top-0 h-screen w-full flex items-center">
                <div class="rounded-full border border-zinc-600 p-2">
                    <ul class="flex flex-col items-center gap-2">
                        <li v-for="menu in menus" class="tooltip tooltip-left" :data-tip="menu.title">
                            <NuxtLink :to="{ path: menu.href, hash: menu.hash! }"
                                class="btn btn-sm btn-circle bg-transparent text-accent hover:text-secondary border-0">
                                <component :is="menu.icon" :size="16" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <div data-theme='dracula' class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="show_mobile_menu" />
        <div class="drawer-side overflow-x-hidden">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay text-white"></label>
            <div class="pl-16 pr-4 pt-4 pb-12 w-80 min-h-full bg-zinc-800 text-gray-300">
                <div class="mb-6 text-xl">Menu</div>
                <ul class="menu px-0">
                    <li v-for="menu in menus">
                        <NuxtLink :to="{ path: menu.href, hash: menu.hash! }" @click="show_mobile_menu = false"
                            for="my-drawer-4" class="text-accent hover:text-white px-2 text-base">
                            <component :is="menu.icon" :size="16" />
                            <div class="text-white font-thin">{{ menu.title }}</div>
                        </NuxtLink>
                    </li>
                </ul>
                <div class="my-6 text-xl">Social</div>
                <div class="flex gap-2">
                    <NuxtLink to="/" class="btn btn-sm btn-circle bg-transparent text-accent border-0 hover:border-2">
                        <LucideInstagram :size="20" />
                    </NuxtLink>
                    <NuxtLink to="/" class="btn btn-sm btn-circle bg-transparent text-accent border-0 hover:border-2">
                        <LucideLinkedin :size="20" />
                    </NuxtLink>
                    <NuxtLink to="/" class="btn btn-sm btn-circle bg-transparent text-accent border-0 hover:border-2">
                        <LucideGithub :size="20" />
                    </NuxtLink>
                    <NuxtLink to="/" class="btn btn-sm btn-circle bg-transparent text-accent border-0 hover:border-2">
                        <LucideGitlab :size="20" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <!-- button for trigger mobile menu -->
    <label for="my-drawer-4"
        class="fixed z-10 right-4 top-4 md:hidden btn btn-circle bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-900">
        <LucideMenu v-if="!show_mobile_menu" :size="20" color="#b7b7b7" />
        <LucideX v-else :size="20" color="#b7b7b7" />
    </label>
</template>

<script setup lang="ts">

const show_mobile_menu = ref(false);

interface Menu {
    title: string
    icon: any,
    href: string
    hash?: string
}

const menus: Menu[] = [
    {
        title: 'Home',
        icon: resolveComponent('LucideHome'),
        href: '/',
        hash: '#home'
    },
    {
        title: 'Introduce',
        icon: resolveComponent('LucideCircleUserRound'),
        href: '/',
        hash: '#intro'
    },
    {
        title: 'Skills',
        icon: resolveComponent('LucideBone'),
        href: '/',
        hash: '#skills'
    },
    {
        title: 'Projects',
        icon: resolveComponent('LucideBriefcase'),
        href: '/',
        hash: '#projects'
    },
    {
        title: 'All Projects',
        icon: resolveComponent('LucideBriefcase'),
        href: '/projects'
    }
];
</script>

<style>
body,
html {
    scroll-behavior: smooth;
}
</style>