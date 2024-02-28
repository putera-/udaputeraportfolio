import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

interface LogState {
    web_sessions: WebSessions[]
    error_logs: ErrorLog[]
    ipAddress: string | null
}

export const useLogStore = defineStore('log', {
    state: (): LogState => ({
        web_sessions: [],
        error_logs: [],
        ipAddress: null
    }),
    actions: {
        async getWebSesions(): Promise<void> {
            const Api = useApiStore();
            const response = await Api.get('/web_access_log') as Record<string, any>[];

            for (const log of response) {
                this.getReadDateTime(log);
            }

            this.web_sessions = response as WebSessions[];
        },
        async getLogBySesion(session: string): Promise<WebLog[]> {
            const Api = useApiStore();
            const response = await Api.get('/web_access_log/' + session) as Record<string, any>[];

            for (const log of response) {
                this.getReadDateTime(log);
            }

            return response as WebLog[];
        },
        async getErrorLogs(): Promise<void> {
            const Api = useApiStore();
            this.error_logs = await Api.get('/error_log') as ErrorLog[];
        },
        async getIpAddress() {
            const { ip } = await $fetch('https://api.ipify.org/?format=json') as any;
            this.ipAddress = ip;
        },
        async sendAccessLog(fullPath: string) {
            const Api = useApiStore();

            if (!this.ipAddress) {
                await this.getIpAddress()
            }

            const session = useCookie('session');
            if (!session.value) session.value = uuidv4();

            const device = useDevice();
            const log = {
                session: session.value,
                ip: this.ipAddress,
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
                isSafari: device.isSafari
            };

            await Api.post('/access-log', log);
        },
        getReadDateTime(log: Record<string, any>) {
            log.readTimestamp = dayjs(log.timestamp).format('D MMMM YYYY HH:mm');
            log.readDate = dayjs(log.timestamp).format('D MMMM YYYY');
            log.readTime = dayjs(log.timestamp).format('HH:mm');
        }
    }
});
