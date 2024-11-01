export interface Experience {
    id: string
    company: string
    location: string
    title: string
    description: string
    startDate: string
    endDate: string
    readStartDate: string
    readEndDate: string
}

export interface ExperiencePage {
    data: Experience[]
    page: number
    total: number
    total_data: number
    total_page: number
}
