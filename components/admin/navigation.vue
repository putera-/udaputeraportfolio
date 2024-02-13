<template>
<ul class="nav z-20 menu p-4 w-[250px] min-h-full max-md:bg-neutral text-white pt-6">
    <li class="text-lg text-center font-semibold border-b border-b-accent/25 md:hidden">Uda Putera</li>
    <!-- Sidebar content here -->
    <template v-for="menu in menus">
        <AdminNav :menu="menu" :hide="hide" />
    </template>
</ul>
</template>

<script setup lang="ts">
const props = defineProps<{
    hide: Function
}>();

const menus: Menu[] = [
    {
        label: "Dashboard",
        icon: resolveComponent("LucideLayoutDashboard"),
        to: "/admin"
    },
    {
        label: "Profile",
        icon: resolveComponent("LucideBookUser"),
        to: "/admin/profile"
    },
    {
        label: "Blogs",
        icon: resolveComponent("LucideBookOpenText"),
        to: "/admin/blogs"
    },
    {
        label: "Experience",
        icon: resolveComponent("LucideBuilding2"),
        to: "/admin/experiences"
    },
    {
        label: "Education",
        icon: resolveComponent("LucideGraduationCap"),
        to: "/admin/educations"
    },
    {
        label: "Skills",
        icon: resolveComponent("LucideBone"),
        to: "/admin/skills"
    },
    {
        label: "Projects",
        icon: resolveComponent("LucideBriefcase"),
        to: "/admin/projects"
    },
];
</script>
