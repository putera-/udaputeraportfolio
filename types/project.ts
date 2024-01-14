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
    company?: string
    skills?: SkillCategory[]
    ProjectSkills?: ProjectSkills[]
}

interface ProjectSkills {
    skill: {
        title: string
    }
}