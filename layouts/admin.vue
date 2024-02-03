<template>
<div data-theme="retro" class="pb-5 px-3 md:px-8 max-w-screen min-h-screen bg-base-100 text-default overflow-x-hidden">
    <div
        class="top-bar-boxed h-[140px] md:h-[70px] relative border-b border-neutral/25 -mx-3 sm:-mx-8 md:pt-0 mb-12 max-w-screen">
        <div class="md:hidden h-[70px] flex justify-between items-center border-b border-neutral/25 px-3 sm:px-8">
            <a href="/" target="__blank" class="w-16">
                <ImagesMonas class="h-10" />
            </a>
            <a href="/" target="__blank" class="text-lg ml-3"> Uda Putera </a>
            <label for="my-drawer-2" class="cursor-pointer md:hidden flex justify-end w-16">
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
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>Profile</li>
                    </ul>
                </div>
                <div class="absolute z-10 right-4 sm:right-8 dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <ImagesRupiahCircle />
                        </div>
                    </div>
                    <ul tabindex="10"
                        class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <button @click="">
                                <LucideUser :size="16" />
                                User
                            </button>
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
    <div class="wrapper relative before:bg-neutral/25">
        <div class="bg-neutral rounded-3xl flex">
            <!-- <div>SIDE MENU</div> -->
            <div class="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content rounded-3xl p-4 bg-slate-100 -mr-px">
                    <!-- Page content here -->
                    <slot class="max-w-full overflow-hidden" />
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
        to: "/admin",
    },
    {
        label: "Profile",
        icon: resolveComponent("LucideBookUser"),
        to: "/admin/profile",
    },
    {
        label: "Blogs",
        icon: resolveComponent("LucideBookOpenText"),
        to: "/admin/blogs",
    },
    {
        label: "Experience",
        icon: resolveComponent("LucideBuilding2"),
        to: "/admin/experiences",
    },
    {
        label: "Education",
        icon: resolveComponent("LucideGraduationCap"),
        to: "/admin/educations",
    },
    {
        label: "Skills",
        icon: resolveComponent("LucideBone"),
        to: "",
        children: [
            {
                label: "Skills",
                icon: resolveComponent("LucideBone"),
                to: "/admin/skills",
            },
            {
                label: "Category",
                icon: resolveComponent("LucideBone"),
                to: "/admin/skills",
            }
        ]
    },
    {
        label: "Projects",
        icon: resolveComponent("LucideBriefcase"),
        to: "/admin/projects",
    },
]

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
    z-index: -2;
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
