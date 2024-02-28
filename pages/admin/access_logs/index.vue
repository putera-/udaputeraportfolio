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
                <button class="btn btn-sm" @click="getLogs">
                    <LucideRefreshCw :size="12" /> Refresh
                </button>
                <div class="max-md:hidden overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Session / Ip</th>
                                <th class="">Location</th>
                                <th class="text-right">Last Date Time</th>
                                <th class="text-center">Count</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover" v-for=" session in LogStore.web_sessions ">
                                <td>
                                    <div class="text-neutral font-semibold">{{ session.session }}</div>
                                    <div class="text-xs">{{ session.ip }}</div>
                                </td>
                                <td>
                                    <div class="text-neutral font-semibold">{{ session.city }}</div>
                                    <div class="text-xs">{{ session.country }}, {{ session.countryCode }}</div>
                                </td>
                                <td>
                                    <div class="text-neutral text-right">
                                        {{ dayjs(session.timestamp).format('D MMMM YYYY') }}
                                    </div>
                                    <div class="text-xs text-right">{{ dayjs(session.timestamp).format('HH:ss') }}</div>
                                </td>
                                <td class="text-center">{{ session.count }}</td>
                                <td>
                                    <NuxtLink :to="'/admin/access_logs/' + session.session"
                                        class="btn btn-sm btn-circle">
                                        <LucideEye />
                                    </NuxtLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="md:hidden flex flex-col gap-2">
                    <div class="card bg-base-100/50 p-2" v-for=" session in LogStore.web_sessions ">
                        <div class="flex justify-between">
                            <div class="flex gap-2">
                                <LucideBuilding2 :size="20" class="text-gray-500 mt-2" />
                                <div>
                                    <div class="text-neutral font-semibold">{{ session.city }} <span
                                            class="text-xs font-normal">{{
                                                session.ip }}</span></div>
                                    <div class="text-xs">{{ session.country }}</div>
                                    <div class="text-xs">
                                        {{ dayjs(session.timestamp).format('D MMMM YYYY HH:ss') }}
                                    </div>
                                    <div class="text-xs">{{ session.session }}</div>
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
import dayjs from 'dayjs';
definePageMeta({
    layout: false,
    middleware: ['auth']
});

const LogStore = useLogStore();
onBeforeMount(async (): Promise<void> => {
    await getLogs();
});

const getLogs = async () => {
    await LogStore.getWebSesions();
}
</script>
