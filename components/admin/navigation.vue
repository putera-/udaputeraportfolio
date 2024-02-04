<template>
<ul class="nav z-20 menu p-4 w-[250px] min-h-full max-md:bg-neutral text-white pt-6">
    <!-- Sidebar content here -->
    <template v-for="menu in menus">
        <AdminNav :menu="menu" :hide="hide" />
    </template>
</ul>
</template>

<script setup lang="ts">
const props = defineProps<{
    menus: Menu[],
    hide: Function
}>();
</script>
