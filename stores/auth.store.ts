import { updateUserValidation } from "~/utils/authValidate";

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
            this.user = await Api.get('/user') as User;
        },
        async updateUser(data: Record<string, string>): Promise<void> {
            const Api = useApiStore();

            data = validate(updateUserValidation, data);

            this.user = await Api.put('/user', data) as User;
        },
        async login(data: { email: string, password: string }): Promise<void> {
            const Api = useApiStore();
            this.user = await Api.post('/login', data) as User;

            navigateTo('/admin')
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
        },
        async is_user_exist(): Promise<boolean> {
            const Api = useApiStore();
            const { exist } = await Api.get('/is_user_exist') as { exist: boolean };

            return exist
        },
        async create_user(data: Record<string, any>): Promise<void> {
            const Api = useApiStore();
            await Api.post('/create_user', data) as any;

            navigateTo('/admin/login');
        }
    }
});
