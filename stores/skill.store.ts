interface SkillState {
    data: Skill[]
    categories: SkillCategory[] | null
}

export const useSkillStore = defineStore('skill', {
    state: (): SkillState => ({
        data: [],
        categories: null
    }),
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/skills?category=true`) as Skill[];
        },
        async getCategories(): Promise<void> {
            const Api = useApiStore();

            this.categories = await Api.get('/skill_by_categories') as SkillCategory[];
        },
        async create(data: Record<string, string>): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(skillValidation, data);

            await Api.post('/skill', data);
        },
        async update(id: string, data: any): Promise<void> {
            const Api = useApiStore();

            // validate
            data = validate(skillValidation, data);

            await Api.put('/skill/' + id, data);
        },
        async remove(id: string): Promise<void> {
            const Api = useApiStore();

            await Api.delete('/skill/' + id);
        }
    }
});
