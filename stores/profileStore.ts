interface ProfileState {
    data: Profile | null
}

export const useProfileStore = defineStore('profile', {
    state: (): ProfileState => ({
        data: null
    }),
    getters: {
        profile: (state): Profile => state.data ? state.data : null
    },
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get('/profile') as Profile;
        }
    }
});
