export default defineEventHandler(async (event): Promise<Portfolio> => {
    const { apiUrl } = useRuntimeConfig()
    try {
        const { data: portfolio } = await $fetch(apiUrl + '/portfolio') as { data: Portfolio };
        return portfolio;
    } catch (error: any) {
        throw new Error(error);
    }
});