interface AuthState {
    user: User | null
}

interface User {
    name: string
    email: string
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: null
    }),
    actions: {
        async getUser(): Promise<void> {
            const Api = useApiStore();
            try {
                this.user = await Api.get('/user') as User;
            } catch (error: any) {
                throw new Error(error)
            }
        },
        async login(data: { email: string, password: string }): Promise<void> {
            const Api = useApiStore();
            try {
                this.user = await Api.post('/login', data) as User;

                navigateTo('/admin')
            } catch (error: any) {
                throw new Error(error)
            }
        },
        async logout(): Promise<void> {
            const Api = useApiStore();
            try {
                await Api.delete('/logout');

                this.user = null;

                navigateTo('/admin/login')
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
});
