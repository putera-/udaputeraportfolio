interface Blog {
    id: number
    title: string
    content: string
    photos: Photo[]
    readDate: string
    readDateTime: string
    shortDateTime: string
}

interface BlogPage {
    data: Blog[]
    page: number
    total: number
    total_data: number
    total_page: number
}
