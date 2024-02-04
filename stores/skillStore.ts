interface SkillState {
    data: Skill[]
}

export const useSkillStore = defineStore('skill', {
    state: (): SkillState => ({
        data: []
    }),
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.data = await Api.get(`/skills?category=true`) as Skill[];
        }
    }
});
