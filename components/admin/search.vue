<template>
<div class="flex items-center bg-base-100 pl-2 rounded">
    <LucideSearch :size="16" class="flex-none" />
    <input v-model="_filter" @keyup.enter="doFilter(_filter)" type="text"
        class="input input-sm focus:outline-0 focus:border-0 !w-full">
    <button @click="doFilter(_filter)" class="btn btn-neutral btn-sm rounded-l-none flex-none">Search</button>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    filter: string,
    doFilter: Function
}>();

const _filter = ref<string>(props.filter);
watchEffect(() => {
    _filter.value = props.filter;
})

</script>
