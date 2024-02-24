<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>Error Logs</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl">Error Logs</div>
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
                                <th>User</th>
                                <th class="">Method</th>
                                <th class="text-center">Http Version</th>
                                <th class="text-center">Response Time</th>
                                <th class="text-center">Referer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for=" log in LogStore.error_logs ">
                                <tr class="border-b-0 border-b-black/5">
                                    <td>
                                        <div class="text-neutral font-semibold">{{ log.user }}</div>
                                        <div>{{ log.readDate }}</div>
                                        <div>{{ log.readTime }}</div>
                                    </td>
                                    <td>{{ log.status }} {{ log.method }} {{ log.url }}</td>
                                    <td class="text-center">{{ log['http-version'] }}</td>
                                    <td class="text-center">{{ log['response-time'] }}</td>
                                    <td class="text-center">{{ log.referer }}</td>
                                </tr>
                                <tr class="">
                                    <td colspan="5" class="text-xs py-px">{{ log['user-agent'] }}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="md:hidden flex flex-col gap-2">
                    <div class="card bg-base-100/50 p-2" v-for=" log in LogStore.error_logs ">
                        <div class="flex justify-between">
                            <div class="flex gap-2">
                                <LucideBuilding2 :size="20" class="text-gray-500 mt-2" />
                                <div>
                                    <div class="text-neutral font-semibold">{{ log.user }}
                                        <span class="text-xs font-normal">{{ log.readDate }}</span>
                                        <span class="text-xs font-normal">{{ log.readTime }}</span>
                                    </div>
                                    <div class="text-xs">{{ log.status }} {{ log.method }} {{ log.url }}</div>
                                    <div class="text-xs">{{ log['http-version'] }}</div>
                                    <div class="text-xs">{{ log['response-time'] }}</div>
                                    <div class="text-xs">{{ log.referer }}</div>
                                    <div class="text-xs">{{ log['user-agent'] }}</div>
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
    await getLogs();
});

const getLogs = async () => {
    await LogStore.getErrorLogs();
}
</script>
