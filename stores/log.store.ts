interface LogState {
    web_sessions: WebSessions[]
    error_logs: ErrorLog[]
}

export const useLogStore = defineStore('log', {
    state: (): LogState => ({
        web_sessions: [],
        error_logs: []
    }),
    actions: {
        async getWebSesions(): Promise<void> {
            const Api = useApiStore();
            this.web_sessions = await Api.get('/web_access_log') as WebSessions[];
        },
        async getLogBySesion(session: string): Promise<WebLog[]> {
            const Api = useApiStore();
            return await Api.get('/web_access_log/' + session) as WebLog[];
        },
        async getErrorLogs(): Promise<void> {
            const Api = useApiStore();
            this.error_logs = await Api.get('/error_log') as ErrorLog[];
        }
    }
});
