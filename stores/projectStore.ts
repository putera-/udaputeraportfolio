interface ProjectState {
    data: ProjectPage | null
}

export const useProjectStore = defineStore('project', {
    state: (): ProjectState => ({
        data: null
    }),
    getters: {
        projects: (state): Project[] => state.data ? state.data.data : [],
        page: (state): number => state.data ? state.data.page : 0,
        total: (state): number => state.data ? state.data.total : 0,
        total_data: (state): number => state.data ? state.data.total_data : 0,
        total_page: (state): number => state.data ? state.data.total_page : 0
    },
    actions: {
        async getAll(search: string, page: number = 1): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/projects?limit=10&page=${page}&search=${search}`) as ProjectPage;
        }
    }
});
