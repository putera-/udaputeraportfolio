export default defineNuxtRouteMiddleware(async (to, from) => {
    const profile = useState<Profile>('profile');

    if (!profile.value) {
        profile.value = await $fetch('/api/profile') as Profile;
    }
});