import { isProject } from "~/utils/project.validation";

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
            this.data = await Api.get(`/projects?limit=12&page=${page}&search=${search}`) as ProjectPage;
        },
        async get(id: number | string): Promise<Project> {
            const Api = useApiStore();
            return await Api.get(`/project/${id}`) as Project;
        },
        async create(data: Record<string, string>, photos: File[]): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(isProject, data);

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

            await Api.post('/project', formData);

        },
        async update(id: number, data: any, keepPhoto: any[], photos: File[]): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(isProject, data);

            const formData: FormData = toFormData(data);

            for (let i = 0; i < keepPhoto.length; i++) {
                const photo = keepPhoto[i];
                formData.append(`photos[${i}][id]`, photo.id);
                formData.append(`photos[${i}][index]`, photo.index);
            }

            for (const photo of photos) {
                formData.append('new_photos', photo);
            }

            await Api.put('/project/' + id, formData);
        },
        async remove(id: number): Promise<void> {
            const Api = useApiStore();
            await Api.delete(`/project/${id}`);
        }
    }
});
