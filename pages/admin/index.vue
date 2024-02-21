<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Access Log</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl">Access Log</div>
            </div>

            <div class="py-3">
                <div class="max-md:hidden overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Session / Ip</th>
                                <th class="">Location</th>
                                <th class="text-center">Date Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover" v-for=" log in LogStore.web_logs ">
                                <td>
                                    <div class="text-neutral font-semibold">{{ log.session }}</div>
                                    <div class="text-xs">{{ log.ip }}</div>
                                </td>
                                <td>
                                    <div class="text-neutral font-semibold">{{ log.city }}</div>
                                    <div class="text-xs">{{ log.country }}</div>
                                </td>
                                <td>
                                    <div class="text-neutral text-right">{{ log.readDate }}</div>
                                    <div class="text-xs text-right">{{ log.readTime }}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="md:hidden flex flex-col gap-2">
                    <div class="card bg-base-100/50 p-2" v-for=" log in LogStore.web_logs ">
                        <div class="flex justify-between">
                            <div class="flex gap-2">
                                <LucideBuilding2 :size="20" class="text-gray-500 mt-2" />
                                <div>
                                    <div class="text-neutral font-semibold">{{ log.city }} <span
                                            class="text-xs font-normal">{{
                                                log.ip }}</span></div>
                                    <div class="text-xs">{{ log.country }}</div>
                                    <div class="text-xs">{{ log.readDate }} {{ log.readTime }}</div>
                                    <div class="text-xs">{{ log.session }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
    middleware: ['auth']
});

const LogStore = useLogStore();
onBeforeMount(async (): Promise<void> => {
    await LogStore.getWebLog();
});
</script>
