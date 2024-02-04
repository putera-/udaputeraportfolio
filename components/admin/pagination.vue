<template>
<div class="join">
    <button class="join-item btn btn-sm" :class="{ 'btn-disabled': page === 1 }" @click="gotoPage(page - 1)">
        «
    </button>
    <button class="join-item btn btn-sm bg-base-100 font-normal max-sm:text-xs">
        Page {{ page }} <span class="max-sm:hidden"> of {{ total_page }}</span>
    </button>
    <button class="join-item btn btn-sm" :class="{ 'btn-disabled': page === total_page }" @click="gotoPage(page + 1)">
        »
    </button>
</div>
</template>

<script setup lang="ts">
defineProps<{
    page: number,
    total_page: number,
    gotoPage: Function
}>();

</script>
