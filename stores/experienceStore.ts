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
        async getAll(search: string, page: number = 1): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/experiences?limit=10&page=${page}&search=${search}`) as ExperiencePage;
        },
        async remove(id: number): Promise<void> {
            const Api = useApiStore();
            await Api.delete(`/experience/${id}`);
        }
    }
});
