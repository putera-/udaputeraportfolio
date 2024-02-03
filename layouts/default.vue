<template>
<div data-theme='garden' class="font-inter text-default flex min-h-screen">
    <!-- main content -->
    <div class="grow">
        <!-- slot here -->
        <slot />
    </div>
    <!-- side menu -->
    <div class="max-md:hidden flex-none w-20 relative h-screen">
        <div class="fixed top-0 h-screen w-full flex items-center">
            <div class="rounded-full border border-accent/50 p-2">
                <template v-for="subMenus in menus">
                    <ul class="flex flex-col items-center gap-2">
                        <li v-for="menu in subMenus" class="tooltip tooltip-left" :data-tip="menu.title">
                            <NuxtLink :to="{ path: menu.href, hash: menu.hash! }"
                                class="btn btn-sm btn-circle bg-transparent text-accent hover:text-secondary border-0">
                                <component :is="menu.icon" :size="16" />
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="divider my-1 before:h-px after:h-px before:bg-accent/50 after:bg-accent/50"
                        :class="menus.indexOf(subMenus) != (menus.length - 1) ? '' : 'hidden'" />
                </template>
            </div>
        </div>
    </div>
    <!-- button for trigger mobile menu -->
    <label for="my-drawer-4"
        class="fixed z-10 right-4 top-4 md:hidden btn btn-circle bg-base-100 border-accent/50 text-default hover:bg-neutral">
        <LucideMenu v-if="!show_mobile_menu" :size="20" />
        <LucideX v-else :size="20" />
    </label>
</div>
<!-- mobile menu -->
<div data-theme='garden' class="drawer drawer-end text-default">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="show_mobile_menu" />
    <div class="drawer-side overflow-x-hidden">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="px-8 pt-4 pb-12 w-80 min-h-full bg-neutral">
            <div class="mb-6 text-xl text-accent">Menu</div>
            <template v-for="subMenus in menus">
                <ul class="menu px-0">
                    <li v-for="menu in subMenus">
                        <NuxtLink :to="{ path: menu.href, hash: menu.hash! }" @click="show_mobile_menu = false"
                            for="my-drawer-4" class="text-accent hover:text-primary px-2">
                            <component :is="menu.icon" :size="16" />
                            <div class="text-white font-thin">{{ menu.title }}</div>
                        </NuxtLink>
                    </li>
                </ul>
                <div class="divider divider-accent before:h-px after:h-px"
                    :class="menus.indexOf(subMenus) != (menus.length - 1) ? '' : 'hidden'" />
            </template>
            <div class="my-6 text-xl text-accent">Social</div>
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
</template>

<script setup lang="ts">

const show_mobile_menu = ref(false);

interface Menu {
    title: string
    icon: any,
    href: string
    hash?: string
}

const menus: Menu[][] = [
    [

        {
            title: 'Home',
            icon: resolveComponent('LucideHome'),
            href: '/',
            hash: '#home'
        },
        {
            title: 'Blogs',
            icon: resolveComponent('LucideBookOpenText'),
            href: '/',
            hash: '#blogs'
        },
        {
            title: 'Education',
            icon: resolveComponent('LucideGraduationCap'),
            href: '/',
            hash: '#education'
        },
        {
            title: 'Experience',
            icon: resolveComponent('LucideNotebookPen'),
            href: '/',
            hash: '#experience'
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
        }
    ],
    [
        {
            title: 'All Blogs',
            icon: resolveComponent('LucideBookOpenText'),
            href: '/blogs'
        },
        {
            title: 'All Projects',
            icon: resolveComponent('LucideBriefcase'),
            href: '/projects'
        }
    ]
];
</script>

<style>
body,
html {
    scroll-behavior: smooth;
}
</style>
