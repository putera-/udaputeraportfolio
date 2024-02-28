<template>
<div>
    <NuxtLayout name="admin">
        <template #breadcrumb>
            <li>
                <NuxtLink to="/admin/access_logs">Access Log</NuxtLink>
            </li>
            <li>Session</li>
        </template>

        <template #default>
            <div class="border-b border-b-neutral/10 pb-2 mb-4 flex justify-between">
                <div class="font-bold text-3xl">Access Log</div>
            </div>

            <div class="py-3">
                <button class="btn btn-sm mb-2" @click="getLogs">
                    <LucideRefreshCw :size="12" /> Refresh
                </button>

                <div class="max-md:hidden overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Session / Ip</th>
                                <th>Location</th>
                                <th class="text-right">Date Time</th>
                                <th>Path</th>
                                <th>Device</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover" v-for=" log in logs ">
                                <td>
                                    <div class="text-neutral font-semibold">{{ log.session }}</div>
                                    <div class="text-xs">{{ log.ip }}</div>
                                    <a :href="`https://www.google.com/maps/@${log.lat},${log.lon},15z`" target="_blank"
                                        class="flex gap-2 items-center btn btn-xs w-min flex-nowrap text-nowrap">
                                        <LucideMap :size="16" /> See Map
                                    </a>
                                </td>
                                <td>
                                    <div class="text-neutral font-semibold">{{ log.city }}</div>
                                    <div class="text-xs">{{ log.country }}, {{ log.countryCode }}</div>
                                </td>
                                <td>
                                    <div class="text-neutral text-right text-nowrap">
                                        {{ log.readDate }}
                                    </div>
                                    <div class="text-xs text-right">{{ log.readTime }}</div>
                                </td>
                                <td>{{ log.path }}</td>
                                <td>
                                    <div class="flex gap-2">
                                        <!-- platform -->
                                        <IconsWindows class="w-5" v-if="log.isWindows" />
                                        <IconsMacOS class="w-5" v-if="log.isMacOS" />
                                        <IconsAndroid class="w-5" v-if="log.isAndroid" />
                                        <IconsIOS class="w-5" v-if="log.isIos" />

                                        <!-- device -->
                                        <LucideMonitor :size="20" v-if="log.isDesktop" />
                                        <LucideSmartPhone :size="20" v-if="log.isMobile" />

                                        <!-- brpwser -->
                                        <LucideChrome :size="20" v-if="log.isChrome" />
                                        <IconsSafari class="w-5" v-if="log.isSafari" />
                                        <IconsEdge class="w-5" v-if="log.isEdge" />
                                        <IconsFirefox class="w-5" v-if="log.isFirefox" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="md:hidden flex flex-col gap-2">
                    <div class="card bg-base-100/50 p-2" v-for=" log in logs ">
                        <div class="flex gap-2">
                            <LucideBuilding2 :size="20" class="text-gray-500 mt-2" />
                            <div class="flex flex-col gap-2">
                                <div class="text-neutral font-semibold">{{ log.city }}
                                    <span class="text-xs font-normal">
                                        {{ log.ip }}
                                    </span>
                                </div>
                                <div>
                                    <div class="text-xs">{{ log.country }}, {{ log.countryCode }}</div>
                                    <div class="text-xs">{{ log.readTimestamp }}</div>
                                    <div class="text-xs">{{ log.session }}</div>
                                </div>
                                <div class="flex gap-2">
                                    <!-- platform -->
                                    <IconsWindows class="w-5" v-if="log.isWindows" />
                                    <IconsMacOS class="w-5" v-if="log.isMacOS" />
                                    <IconsAndroid class="w-5" v-if="log.isAndroid" />
                                    <IconsIOS class="w-5" v-if="log.isIos" />

                                    <!-- device -->
                                    <LucideMonitor :size="20" v-if="log.isDesktop" />
                                    <LucideSmartPhone :size="20" v-if="log.isMobile" />

                                    <!-- brpwser -->
                                    <LucideChrome :size="20" v-if="log.isChrome" />
                                    <IconsSafari class="w-5" v-if="log.isSafari" />
                                    <IconsEdge class="w-5" v-if="log.isEdge" />
                                    <IconsFirefox class="w-5" v-if="log.isFirefox" />
                                </div>
                                <a :href="`https://www.google.com/maps/@${log.lat},${log.lon},15z`" target="_blank"
                                    class="flex gap-2 items-center btn btn-xs w-min flex-nowrap text-nowrap">
                                    <LucideMap :size="16" /> See Map
                                </a>
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

const session = useRoute().params.session as string;
const LogStore = useLogStore();

const logs = ref<WebLog[]>([])

onBeforeMount(async (): Promise<void> => {
    await getLogs();
});

const getLogs = async () => {
    logs.value = await LogStore.getLogBySesion(session);
}
</script>
