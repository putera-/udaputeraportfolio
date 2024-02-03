interface ExperienceState {
    data: ExperiencePage | null
}

export const useExperienceStore = defineStore('experience', {
    state: (): ExperienceState => ({
        data: null
    }),
    getters: {
        experiences: (state): Experience[] => state.data ? state.data.data : [],
        page: (state): number => state.data ? state.data.page : 0,
        total: (state): number => state.data ? state.data.total : 0,
        total_data: (state): number => state.data ? state.data.total_data : 0,
        total_page: (state): number => state.data ? state.data.total_page : 0
    },
    actions: {
        async getAll(search: string): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get('/experiences?search=' + search) as ExperiencePage[];
        }
    }
});
