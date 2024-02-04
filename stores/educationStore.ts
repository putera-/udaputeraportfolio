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
        }
    }
});
