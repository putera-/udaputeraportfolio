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
            this.data = await Api.get(`/blogs?limit=12&page=${page}&search=${search}`) as BlogPage;
        },
        async get(id: number | string): Promise<Blog> {
            const Api = useApiStore();
            return await Api.get(`/blog/${id}`) as Blog;
        },
        async create(data: Record<string, string>, photos: File[]): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(isBlog, data);

            let formData: Record<string, string> | FormData;

            if (photos.length) {
                // create FormData if photo available
                formData = toFormData(data);

                for (const photo of photos) {
                    formData.append('photos', photo);
                }
            } else {
                // still for json
                formData = data;
            }

            await Api.post('/blog', formData);

        },
        async update(id: number, data: any, keepPhoto: any[], photos: File[]): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(isBlog, data);

            const formData: FormData = toFormData(data);

            for (let i = 0; i < keepPhoto.length; i++) {
                const photo = keepPhoto[i];
                formData.append(`photos[${i}][id]`, photo.id);
                formData.append(`photos[${i}][index]`, photo.index);
            }

            for (const photo of photos) {
                formData.append('new_photos', photo);
            }

            await Api.put('/blog/' + id, formData);
        },
        async remove(id: number): Promise<void> {
            const Api = useApiStore();
            await Api.delete(`/blog/${id}`);
        }
    }
});
