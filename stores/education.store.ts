import { educationValidation } from "~/utils/education.validation";

interface EducationState {
    data: Education[]
}

export const useEducationStore = defineStore('education', {
    state: (): EducationState => ({
        data: []
    }),
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/educations`) as Education[];
        },
        async remove(id: string): Promise<void> {
            const Api = useApiStore();
            await Api.delete(`/education/${id}`);
        },
        async create(data: Record<string, any>) {
            const Api = useApiStore();
            data = validate(educationValidation, data);
            await Api.post('/education', data);
        },
        async update(id: string, data: Record<string, any>) {
            const Api = useApiStore();
            data = validate(educationValidation, data);
            await Api.put(`/education/${id}`, data);
        }
    }
});
