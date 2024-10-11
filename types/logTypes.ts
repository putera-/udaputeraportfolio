export interface WebSessions {
    session: string
    ip: string
    city: string
    country: string
    countryCode: string
    timestamp: string
    readTimestamp: string
    readDate: string
    readTime: string
    count: number
    logs: WebLog[]
}
export interface WebLog {
    id: string
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
    readTimestamp: string
    readDate: string
    readTime: string
}

export interface ErrorLog {
    user: string
    "ip-addr": string
    method: string
    url: string
    date: string
    readDate: string
    readTime: string
    "http-version": string
    status: string
    "response-time": string
    "content-length": string
    referer: string
    "user-agent": string
}
