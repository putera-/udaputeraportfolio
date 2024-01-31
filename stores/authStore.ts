interface AuthState {
    user: User | null
}

interface User {
    name:string
    email:string
}

export const useAuthStore = defineStore('auth', {
    state: ():AuthState => ({
        user: null
    }),
    actions: {
        async login(data:{email:string, password: string}):Promise<void> {
            const Api = useApiStore();
            try {
                this.user = await Api.post('/login' , data) as User;
            } catch (error:any) {
                throw new Error(error)
            }
        },
        async getUser():Promise<void> {
            const Api = useApiStore();
            try {
                this.user = await Api.post('/user') as User;
            } catch (error:any) {
                throw new Error(error)
            }
        },
    }
});
