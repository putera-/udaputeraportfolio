interface LogState {
    web_logs: WebLog[]
}

export const useLogStore = defineStore('log', {
    state: (): LogState => ({
        web_logs: []
    }),
    actions: {
        async getWebLog(): Promise<void> {
            const Api = useApiStore();
            this.web_logs = await Api.get('/web_access_log') as WebLog[];
        }
    }
});
