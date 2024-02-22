interface WebSessions {
    session: string
    ip: string
    city: string
    country: string
    countryCode: string
    timestamp: string
    readDate: string
    readTime: string
    count: number
    logs: WebLog[]
}
interface WebLog {
    id: number
    session: string
    ip: string
    path: string
    user_agent: string
    country: string
    countryCode: string
    city: string
    lat: number
    lon: number
    isMobile: boolean
    isDesktop: boolean
    isWindows: boolean
    isMacOS: boolean
    isAndroid: boolean
    isIos: boolean
    isFirefox: boolean
    isEdge: boolean
    isChrome: boolean
    isSafari: boolean
    timestamp: string
    readDate: string
    readTime: string
}
