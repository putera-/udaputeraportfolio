interface SkillState {
    data: Skill[]
    categories: SkillCategory[]
}

export const useSkillStore = defineStore('skill', {
    state: (): SkillState => ({
        data: [],
        categories: []
    }),
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/skills?category=true`) as Skill[];
        },
        async getCategories(): Promise<void> {
            const Api = useApiStore();

            this.categories = await Api.get('/skill_categories') as SkillCategory[];
        },
        async remove(id: number): Promise<void> {
            const Api = useApiStore();

            await Api.delete('/skill/' + id);
        }
    }
});
