export default defineNuxtPlugin(async (nuxtApp) => {
    const LogStore = useLogStore();
    const router = useRouter();

    // send web access log on path change
    router.afterEach(async (to, from) => {
        if (!to.fullPath.includes('/admin')) {
            await LogStore.sendAccessLog(to.fullPath);
        }
    });
});
