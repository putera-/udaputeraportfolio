<template>
<div data-theme="retro" class="pb-5 px-3 md:px-8 max-w-screen min-h-screen bg-base-100 text-default overflow-x-hidden">
    <div
        class="top-bar-boxed h-[140px] md:h-[70px] relative border-b border-neutral/25 -mx-3 sm:-mx-8 md:pt-0 mb-12 max-w-screen">
        <div class="md:hidden h-[70px] flex justify-between items-center border-b border-neutral/25 px-3 sm:px-8">
            <a href="/" target="__blank" class="w-16">
                <ImagesMonas class="h-10" />
            </a>
            <a href="/" target="__blank" class="text-lg ml-3"> Uda Putera </a>
            <label @click="showMenu = !showMenu" class="cursor-pointer md:hidden flex justify-end w-16">
                <LucideAlignRight :size="20" />
            </label>
        </div>
        <div class="h-[70px] flex max-md items-center px-3 sm:px-8">
            <a href="/" target="__blank" class="-intro-x max-md:hidden md:flex md:items-center">
                <ImagesMonas class="h-10" />
                <span class="text-lg ml-3"> Uda Putera </span>
            </a>
            <div
                class="divider divider-horizontal max-md:hidden before:bg-neutral/25 after:bg-neutral/25 after:w-px before:w-px">
            </div>
            <div class="grow flex justify-between items-center">
                <div class="text-sm breadcrumbs">
                    <ul>
                        <slot name="breadcrumb" />
                    </ul>
                </div>
                <div class="absolute z-10 right-4 sm:right-8 dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <ImagesRupiahCircle />
                        </div>
                    </div>
                    <div class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <div class="p-2 border-b border-b-neutral/20 mb-2">
                            <div class="font-semibold">{{ AuthStore.user!.name }}</div>
                            <div class="text-xs">{{ AuthStore.user!.email }}</div>
                        </div>
                        <ul tabindex="10" class="">
                            <li>
                                <NuxtLink to="/admin/user">
                                    <LucideUser :size="16" />
                                    User Setting
                                </NuxtLink>
                            </li>
                            <li>
                                <button @click="AuthStore.logout()">
                                    <LucideKeySquare :size="16" />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper relative before:bg-neutral/25">
        <div class="bg-neutral rounded-3xl flex">
            <!-- <div>SIDE MENU</div> -->
            <div class="drawer md:drawer-open">
                <input :checked="showMenu" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content rounded-3xl p-4 bg-slate-100 -mr-px">
                    <!-- Page content here -->
                    <slot class="max-w-full overflow-hidden" />
                </div>
                <div class="drawer-side">
                    <label @click="showMenu = false" aria-label="close sidebar" class="drawer-overlay"></label>
                    <AdminNavigation :hide="() => showMenu = false" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
const showMenu = ref<boolean>(false);

const AuthStore = useAuthStore();
</script>

<style scoped>
.wrapper:before {
    content: "";
    width: 95%;
    height: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    margin-top: -1rem;
    border-radius: 1.3rem;
    z-index: 0;
}

.wrapper>div {
    min-height: calc(100vh - 150px);
}

@media (max-width: 767px) {
    .wrapper>div {
        min-height: calc(100vh - 220px);
    }
}
</style>
