<template>
    <div class="font-inter grid grid-cols-12 md:max-h-screen min-h-screen">
        <div class="col-span-full md:col-span-11">
            <label for="my-drawer-4"
                class="absolute z-10 right-4 top-4 md:hidden btn btn-circle bg-transparent border-zinc-600 text-white hover:bg-zinc-900">
                <LucideMenu v-if="!show_mobile_menu" :size="20" color="#b7b7b7" />
                <LucideX v-else :size="20" color="#b7b7b7" />
            </label>
            <!-- slot here -->
            <slot />
        </div>
        <div class="max-md:hidden md:col-span-1 max-h-screen flex flex-col items-center justify-center py-10">
            <div class="rounded-full border border-zinc-600 p-2">
                <ul class="flex flex-col items-center gap-2">
                    <li v-for="menu in menus" class="tooltip tooltip-left" :data-tip="menu.title">
                        <a href="" class="btn btn-sm btn-circle bg-transparent text-white border-0">
                            <component :is="menu.icon" :size="16" color="#b7b7b7" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="show_mobile_menu" />
        <div class="drawer-side overflow-x-hidden">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay text-white"></label>
            <div class="pl-16 pr-4 pt-4 pb-12 w-80 min-h-full bg-zinc-800 text-gray-300">
                <div class="mb-6 text-xl">Menu</div>
                <ul class="menu px-0">
                    <li v-for="menu in menus">
                        <label for="my-drawer-4" class="hover:text-white px-2">
                            <component :is="menu.icon" :size="16" color="#b7b7b7" />
                            <div>{{ menu.title }}</div>
                        </label>
                    </li>
                </ul>
                <div class="my-6 text-xl">Social</div>
                <div class="flex gap-2">
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2">
                        <LucideInstagram :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2">
                        <LucideLinkedin :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2">
                        <LucideGithub :size="20" color="white" />
                    </div>
                    <div class="btn btn-sm btn-circle bg-transparent border-0 hover:border-2">
                        <LucideGitlab :size="20" color="white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const show_mobile_menu = ref(false);

interface Menu {
    title: string
    icon: any
}

const menus: Menu[] = [
    {
        title: 'Home',
        icon: resolveComponent('LucideHome')
    },
    {
        title: 'About',
        icon: resolveComponent('LucideCircleUserRound')
    },
    {
        title: 'Project',
        icon: resolveComponent('LucideBriefcase')
    }
];

</script>