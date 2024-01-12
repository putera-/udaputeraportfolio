export default defineEventHandler(async (event): Promise<Portfolio> => {
    const { apiUrl } = useRuntimeConfig()

    const { data: portfolio } = await $fetch(apiUrl + '/portfolio') as { data: Portfolio };
    return portfolio
})