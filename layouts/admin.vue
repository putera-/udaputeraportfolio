<template>
<div data-theme="retro" class="block pb-5 px-3 md:px-8 max-w-screen min-h-screen bg-base-100 text-default">
    <div
        class="top-bar-boxed h-[140px] md:h-[70px] z-10 relative border-b border-neutral/25 -mx-3 sm:-mx-8 md:pt-0 mb-12">
        <div class="md:hidden h-[70px] flex justify-between items-center border-b border-neutral/25 px-3 sm:px-8">
            <LucideHome :size="20" />
            <label for="my-drawer-2" class="cursor-pointer md:hidden">
                <LucideAlignRight :size="20" />
            </label>

        </div>
        <div class="h-[70px] flex max-md items-center px-3 sm:px-8">
            <a href="" class="-intro-x hidden md:flex md:items-center">
                <LucideHome :size="20" />
                <!-- <img alt="Midone - HTML Admin Template" class="w-6" src="dist/images/logo.svg"> -->
                <span class=" text-lg ml-3"> Uda Putera </span>
            </a>
            <div
                class="divider divider-horizontal max-md:hidden before:bg-neutral/25 after:bg-neutral/25 after:w-px before:w-px">
            </div>
            <div class="grow flex justify-between items-center">
                <div class="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Documents</a></li>
                        <li>Add Document</li>
                    </ul>
                </div>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper relative z-[1] before:bg-neutral/25">
        <div class="bg-neutral rounded-3xl min-h-screen flex">
            <!-- <div>SIDE MENU</div> -->
            <div class="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content rounded-3xl p-4 bg-slate-100 -mr-px">
                    <!-- Page content here -->
                    <slot />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                    <AdminNavigation :menus="menus" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
const menus: Menu[] = [
    {
        label: "Dashboard",
        icon: resolveComponent("LucideLayoutDashboard"),
        to: "/",
    },
    {
        label: "Menu 1",
        icon: resolveComponent("LucideBookType"),
        to: "",
        children: [
            {
                label: "Sub Menu",
                icon: resolveComponent("LucideFileDigit"),
                to: "/",
            },
            {
                label: "Sub Menu",
                icon: resolveComponent("LucideFileDigit"),
                to: "/",
            },
            {
                label: "Sub Menu",
                icon: resolveComponent("LucideFileDigit"),
                to: "/",
                children: [
                    {
                        label: "In Sub Menu",
                        icon: resolveComponent("LucideFileDigit"),
                        to: "/",
                    },
                    {
                        label: "In Sub Menu",
                        icon: resolveComponent("LucideFileDigit"),
                        to: "/admin",
                    },
                ]
            },
        ],
    },
]
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
    /* background-color: rgb(255 255 255 / 0.1); */
    border-radius: 1.3rem;
    z-index: -1;
}
</style>
