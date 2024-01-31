export default defineEventHandler(async (event): Promise<Profile> => {
    const { apiUrl } = useRuntimeConfig()

    return await $fetch(apiUrl + '/profile') as Profile;
})
