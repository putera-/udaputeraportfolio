export default defineNuxtRouteMiddleware(async (to, from) => {
    const profile = useState<Profile>('profile');

    if (!profile.value) {
        try {
            const getProfile = await $fetch('/api/profile') as Profile;
            profile.value = await Promise.race([getProfile, timeoutPromise]) as Profile;
        } catch (error: any) {
            throw createError({
                statusCode: error.statusCode
            });
        }
    }
});
