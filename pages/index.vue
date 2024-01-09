<template>
    <div>
        {{ firstname }} {{ lastname }} - {{ email }}
    </div>
</template>

<script setup lang="ts">
const { firstname, lastname, email } = await $fetch('/api/profile') as Profile;


</script>