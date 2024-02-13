export default defineNuxtRouteMiddleware(async (to, from) => {
    const { value: token } = useCookie('token');
    const AuthStore = useAuthStore();

    if (to.path == '/admin/login') {
        if (!AuthStore.user && token) {
            await AuthStore.getUser();
            if (AuthStore.user) return navigateTo('/admin')
        }
    } else {
        if (!token) return navigateTo('/admin/login');

        if (!AuthStore.user) {
            await AuthStore.getUser();
            if (!AuthStore.user) return navigateTo('/admin/login')
        }
    }
});
