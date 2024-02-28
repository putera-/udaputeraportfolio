export default defineNuxtPlugin(nuxtApp => {
    const LogStore = useLogStore();
    const router = useRouter();
    router.afterEach(async (to, from) => {
        if (!to.fullPath.includes('/admin')) {
            await LogStore.sendAccessLog(to.fullPath);
        }
    });
});
