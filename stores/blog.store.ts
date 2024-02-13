interface BlogState {
    data: BlogPage | null
}

export const useBlogStore = defineStore('blog', {
    state: (): BlogState => ({
        data: null
    }),
    getters: {
        blogs: (state): Blog[] => state.data ? state.data.data : [],
        page: (state): number => state.data ? state.data.page : 0,
        total: (state): number => state.data ? state.data.total : 0,
        total_data: (state): number => state.data ? state.data.total_data : 0,
        total_page: (state): number => state.data ? state.data.total_page : 0
    },
    actions: {
        async getAll(search: string, page: number = 1): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/blogs?limit=2&page=${page}&search=${search}`) as BlogPage;
        },
        async remove(id: number): Promise<void> {
            const Api = useApiStore();

            try {
                await Api.delete(`/blog/${id}`);
            } catch (error: any) {
                throw new Error(error);
            }
        }
    }
});
