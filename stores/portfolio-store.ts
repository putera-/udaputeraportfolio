interface PortolioState {
    portfolio: Portfolio | null
}

export const usePortfolioStore = defineStore('portfolio', {
    state: (): PortolioState => ({
        portfolio: null
    }),
    getters: {
        profile: (state): Profile | null => state.portfolio ? state.portfolio.profile : null,
        blogs: (state): Blog[] => state.portfolio ? state.portfolio.blogs : [],
        educations: (state): Education[] => state.portfolio ? state.portfolio.educations : [],
        experiences: (state): Experience[] => state.portfolio ? state.portfolio.experiences : [],
        skills: (state): SkillCategory[] => state.portfolio ? state.portfolio.skills : [],
        projects: (state): Project[] => state.portfolio ? state.portfolio.projects : [],
    },
    actions: {
        async get(): Promise<void> {
            const Api = useApiStore();
            this.portfolio = await Api.get('/portfolio') as Portfolio;
        }
    }
});
