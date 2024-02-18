interface Project {
    id: number
    title: string
    description: string
    startDate: string
    endDate?: string
    readStartDate: string
    readEndDate?: string
    url?: string
    github?: string
    gitlab?: string
    status: string
    read_status: string
    company?: string
    skills?: SkillCategory[]
    ProjectSkills?: ProjectSkills[]
    photos: Photo[]
}

interface ProjectSkills {
    skill: {
        title: string
    }
}

interface ProjectPage {
    data: Project[]
    page: number
    total: number
    total_data: number
    total_page: number
}
