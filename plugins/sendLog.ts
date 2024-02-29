export default defineNuxtPlugin(async (nuxtApp) => {
    const LogStore = useLogStore();
    const router = useRouter();

    // get ip address on initial
    router.isReady().then(async () => {
        await LogStore.getIpAddress();
    });

    // send web access log on path change
    router.afterEach(async (to, from) => {
        if (!to.fullPath.includes('/admin')) {
            await LogStore.sendAccessLog(to.fullPath);
        }
    });
});
