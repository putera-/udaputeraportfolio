export default defineNuxtRouteMiddleware(async (to, from) => {
    const isLogedIn = window.localStorage.getItem('isLogedIn');
    const AuthStore = useAuthStore();

    if (to.path == '/admin/login') {
        if (!AuthStore.user && isLogedIn === '1') {
            await AuthStore.getUser();
            if (AuthStore.user) return navigateTo('/admin')
        }
    } else {
        if (isLogedIn !== '1') return navigateTo('/admin/login');

        if (!AuthStore.user) {
            await AuthStore.getUser();
            if (!AuthStore.user) return navigateTo('/admin/login')
        }
    }
});
