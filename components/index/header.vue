<template>
    <div class="flex justify-between items-end text-accent border-b border-accent/25 py-2">
        <NuxtLink to="/" class="text-3xl font-semibold">{{ profile.firstname }} {{ profile.lastname }}</NuxtLink>
        <NuxtLink :to="href" class="uppercase">{{ subTitle }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    subTitle: string
    href: string
}>();

const profile = useState<Profile>('profile');

</script>