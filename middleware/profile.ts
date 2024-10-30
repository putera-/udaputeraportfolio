export default defineNuxtRouteMiddleware(async (to, from) => {
    const PortfolioStore = usePortfolioStore();

    const { portfolio } = PortfolioStore;

    if (!portfolio) {
        await PortfolioStore.get();
    }
});
