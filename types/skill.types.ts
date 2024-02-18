interface SkillCategory {
    id: number
    title: string
    skills?: Skill[]
}

interface Skill {
    id: number
    title: string
    svg: string
    categoryId: number
    category?: SkillCategory
    projects_count: number
}
