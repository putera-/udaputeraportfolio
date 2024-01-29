export default defineNuxtRouteMiddleware(async (to, from) => {
    const profile = useState<Profile>('profile');

    if (!profile.value) {
        try {
            profile.value = await $fetch('/api/profile') as Profile;
        } catch (error) {
            return navigateTo('/500')
        }
    }
});