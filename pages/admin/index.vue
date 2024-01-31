<template>
<div>
    <!-- <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
    </dialog> -->
    Index Admin
    <!-- <dialog id="my_modal_2" class="modal" open>
        <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop bg-slate-500/50">
            <button>close</button>
        </form>
    </dialog> -->
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

</script>

<style scoped></style>
