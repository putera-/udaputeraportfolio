import { v4 as uuidv4 } from 'uuid';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const session = useCookie('session');
    const ipAdddress = useState('ip');

    if (!session.value) session.value = uuidv4();
    if (!ipAdddress.value) {
        const { ip } = await $fetch('https://api.ipify.org/?format=json') as any;
        ipAdddress.value = ip;
    }

    const device = useDevice();

    const log = {
        session: session.value,
        ip: ipAdddress.value,
        path: to.path,
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
        timestamp: new Date(),
    };

    const Api = useApiStore();
    Api.post('/access-log', log);
});
