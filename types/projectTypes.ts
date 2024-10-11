export interface Project {
    id: string
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
    skills?: Skill[]
    skills_count: number
    skill_category: SkillCategory[]
    photos: Photo[]
}

export interface ProjectSkills {
    skill: {
        title: string
    }
}

export interface ProjectPage {
    data: Project[]
    page: number
    total: number
    total_data: number
    total_page: number
}
