export default defineEventHandler(async (event): Promise<Profile> => {
    const { apiUrl } = useRuntimeConfig()

    const { data: profile } = await $fetch(apiUrl + '/profile') as { data: Profile };
    return profile
})