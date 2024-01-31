export default defineEventHandler(async (event): Promise<Portfolio> => {
    const { apiUrl } = useRuntimeConfig()
    try {
        return await $fetch(apiUrl + '/portfolio') as Portfolio;
    } catch (error: any) {
        throw new Error(error);
    }
});
