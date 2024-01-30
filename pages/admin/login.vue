<template>
<div class="px-10 sm:px-20 lg:px-32 md:max-w-xl md:h-screen flex items-center mx-auto">
    <div class="mx-auto w-full">
        <div class="font-bold text-center text-3xl mb-4">Uda Putera</div>
        <div class="flex flex-col gap-10">
            <div>
                <input type="text" placeholder="email"
                    class="input w-full shadow-[0_10px_00px_12px_rgba(0,0,0,1)] focus:shadow-[0_10px_00px_12px_rgba(0,0,0,1)]">
            </div>
            <div>
                <label for="">Password:</label>
                <input type="password" placeholder="password"
                    class="input w-full shadow-[0_10px_00px_12px_rgba(0,0,0,1)] focus:shadow-[0_10px_00px_12px_rgba(0,0,0,1)]">
            </div>
            <div class="text-right">
                <button class="btn btn-base-100 w-min shadow-[0_7px_00px_8px_rgba(0,0,0,1)]">LOGIN</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'clear'
})

</script>
