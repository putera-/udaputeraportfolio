<template>
<li v-if="!menu.children" class="mt-3">
    <NuxtLink :to="menu.to" @click="hide()">
        <component :is="menu.icon"></component>
        {{ menu.label }}
    </NuxtLink>
</li>
<li v-else class="mt-3">
    <details :open="isMenuOpen(menu)">
        <summary>
            <component :is="menu.icon"></component>
            {{ menu.label }}
        </summary>
        <ul>
            <template v-for="subMenu in menu.children">
                <AdminNav :menu="subMenu" :hide="hide" />
            </template>
        </ul>
    </details>
</li>
</template>

<script setup lang="ts">
defineProps<{
    menu: Menu,
    hide: Function
}>();
const path = useRoute().path;

const isMenuOpen = (menu: Menu) => {
    if (!menu.children) return false;

    const paths1: string[] = menu.children.map((c: any) => c.to);
    let paths2: string[] = [];

    for (const sub of menu.children) {
        if (sub.children) {
            const children_paths = sub.children.map((c: any) => c.to);
            paths2 = [...paths2, ...children_paths]
        }
    };

    const paths = [...paths1, ...paths2].filter(c => c != '');

    return paths.includes(path)
}
</script>
