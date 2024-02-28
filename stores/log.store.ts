import { v4 as uuidv4 } from 'uuid';

interface LogState {
    web_sessions: WebSessions[]
    error_logs: ErrorLog[]
    // ipAddress: string | null
}

export const useLogStore = defineStore('log', {
    state: (): LogState => ({
        web_sessions: [],
        error_logs: [],
        // ipAddress: null
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
        },
        async sendAccessLog(fullPath: string) {
            const Api = useApiStore();
            // console.log('this.ipAddress')
            // console.log(this.ipAddress)

            const { ip } = await $fetch('https://api.ipify.org/?format=json') as any;
            // if (!this.ipAddress) {
            //     const { ip } = await $fetch('https://api.ipify.org/?format=json') as any;
            //     this.ipAddress = ip;

            // }
            // console.log(this.ipAddress)

            const session = useCookie('session');
            if (!session.value) session.value = uuidv4();
            const time = new Date();

            const device = useDevice();
            const log = {
                session: session.value,
                ip: ip,
                path: fullPath,
                user_agent: device.userAgent,
                isMobile: device.isMobile,
                isDesktop: device.isDesktop,
                isWindows: device.isWindows,
                isMacOS: device.isMacOS,
                isAndroid: device.isAndroid,
                isIos: device.isIos,
                isFirefox: device.isFirefox,
                isEdge: device.isEdge,
                isChrome: device.isChrome,
                isSafari: device.isSafari,
                timestamp: time.toString()
            };

            await Api.post('/access-log', log);
        }
    }
});
