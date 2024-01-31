export default defineNuxtRouteMiddleware(async (to, from) => {
    const AuthStore = useAuthStore();

    if (to.path == '/admin/login') {
        if (!AuthStore.user) {
            await AuthStore.getUser();
            if (AuthStore.user) return navigateTo('/admin')
        }
    }
});
